"""Run: python check_trial.py [good|bad]. Bad must exit nonzero."""
import json
import sys
from pathlib import Path
ROOT = Path(__file__).resolve().parent
def read(name):
    outer=json.loads((ROOT/name).read_text(encoding="utf-8"))
    assert not outer.get("isError"), name
    return json.loads(outer["content"][0]["text"])
def check(s, key):
    expected_title={"a":"Городские прогулки","b":"Как жители выбирают маршруты для повседневных прогулок по городу"}[key]
    assert s["title"] == expected_title, key+": local title lost"
    assert s["props"]["Title#3:4"]["value"] == expected_title
    assert s["type"] == "INSTANCE" and s["main"] == "3:9"
    assert s["iconMain"] == {"a":"2:26","b":"2:29"}[key]
    assert s["props"]["Close icon#3:5"]["value"] == s["iconMain"]
    assert s["radius"] == 20 and s["headerGap"] == 16
    assert s["width"] in (360,600)
    assert s["closeBounds"]["width"] == 44 and s["closeBounds"]["height"] == 44
    assert s["titleBounds"]["x"]+s["titleBounds"]["width"] <= s["closeBounds"]["x"]
    body=next(x for x in s["slots"] if x["name"]=="Body")
    assert body["type"]=="SLOT" and body["refs"]["slotContentId"]=="Body#3:7"
    texts=[t["text"] for t in body["texts"]]
    expected={"a":["КОЛЛЕКЦИЯ · 6 МАТЕРИАЛОВ","Как люди выбирают маршрут для короткой прогулки по городу.","Главное наблюдение","Тихие улицы и зелень важнее кратчайшего пути."],
      "b":["3 ДОКУМЕНТА · ОБНОВЛЕНО 8 СЕНТЯБРЯ","Интервью, полевые заметки и выводы для следующего обсуждения.","01","Интервью с участниками","PDF · 12 страниц · 5 сентября","02","Наблюдения: вечерние прогулки и выбор тихих улиц","DOC · 8 страниц · 6 сентября","03","Карта выводов и открытые вопросы","PDF · 4 страницы · 8 сентября"]}[key]
    assert texts==expected, key+": body composition changed"
    assert s["props"]["Show footer#3:6"]["value"] == (key=="a")
def main():
    mode=sys.argv[1] if len(sys.argv)>1 else "good"
    if mode=="bad":
        bad=read("17-result.json")
        check(bad["a"],"a")
        return
    try:
        check(read("17-result.json")["a"],"a")
    except AssertionError as exc:
        assert str(exc)=="a: local title lost", "Wrong failure reason in negative control"
    else:
        raise AssertionError("Negative control incorrectly accepted")
    data=read("16-result.json")
    for key in ("a","b"):
        before,after=data["before"][key],data["after"][key]
        check(after,key)
        assert before["radius"]==16 and before["headerGap"]==12
        assert before["props"]==after["props"]
        assert [(s["id"],s["children"],[(t["id"],t["text"]) for t in s["texts"]]) for s in before["slots"]]==[(s["id"],s["children"],[(t["id"],t["text"]) for t in s["texts"]]) for s in after["slots"]]
    assert read("11-result.json")["beforeB"]==read("11-result.json")["afterB"]
    assert read("13-result.json")["beforeA"]==read("13-result.json")["afterA"]
    assert read("15-result.json")["a"]["height"] < read("13-result.json")["afterA"]["height"]
    assert read("15-result.json")["b"]["height"] > read("13-result.json")["b"]["height"]
    final=read("19-result.json")
    for key in ("a","b"):
        check(final[key],key)
    assert final["a"]["width"]==360 and final["b"]["width"]==600
    assert final["rowClips"] is False
    restored=read("18-result.json")["b"]
    footer=next(s for s in restored["slots"] if s["name"]=="Footer")
    assert footer["visible"] and footer["type"]=="SLOT"
    assert footer["children"][0]["id"]=="I3:28;3:16;6:115"
    assert [(t["id"],t["text"]) for t in footer["texts"]]==[("I3:28;3:16;6:117","Начать обзор")]
    print("PASS: exact content, local independence, real resize, native slots, master propagation and preservation")
if __name__=="__main__":
    main()
