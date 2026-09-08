await figma.setCurrentPageAsync(await figma.getNodeByIdAsync("0:1"));
const a=await figma.getNodeByIdAsync("3:20"),b=await figma.getNodeByIdAsync("3:28");
const title=a.findAllWithCriteria({types:["TEXT"]}).find(n=>n.name==="Title");
const actual={a:a.componentProperties,b:b.componentProperties,width:a.width,title:title.characters,height:a.height};
if(actual.title!=="Исследования городских маршрутов — проверка редактирования"||actual.width!==600||actual.a["Close icon#3:5"].value!=="2:24")throw new Error("Public edit did not apply");
if(JSON.stringify(actual.b)!==JSON.stringify({"Footer#3:8":{"type":"SLOT","preferredValues":[]},"Show footer#3:6":{"type":"BOOLEAN","value":false},"Body#3:7":{"type":"SLOT","preferredValues":[]},"Close icon#3:5":{"type":"INSTANCE_SWAP","value":"2:29","preferredValues":[]},"Title#3:4":{"type":"TEXT","value":"Как жители выбирают маршруты для повседневных прогулок по городу"}}))throw new Error("Neighbor properties changed");
return {checks:["public title changes visible text","public icon swap","width 600","neighbor properties unchanged"],actual};
