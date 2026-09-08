const p=await figma.getNodeByIdAsync("0:1");await figma.setCurrentPageAsync(p);
const a=await figma.getNodeByIdAsync("3:20"),b=await figma.getNodeByIdAsync("3:28");
for(const t of a.findAllWithCriteria({types:["TEXT"]})){for(const s of t.getStyledTextSegments(["fontName"]))await figma.loadFontAsync(s.fontName);}
const before={a:a.componentProperties,b:b.componentProperties,width:a.width};
a.setProperties({"Title#3:4":"Исследования городских маршрутов — проверка редактирования","Close icon#3:5":"2:24"});a.resize(600,a.height);
return {before,mutatedNodeIds:[a.id]};
