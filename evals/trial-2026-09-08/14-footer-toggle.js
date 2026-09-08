await figma.setCurrentPageAsync(await figma.getNodeByIdAsync("0:1"));
for(const style of ["Regular","Medium","Semi Bold"])await figma.loadFontAsync({family:"Inter",style});
const V={"surface":"VariableID:2:3","canvas":"VariableID:2:4","text":"VariableID:2:5","muted":"VariableID:2:6","border":"VariableID:2:7","accent":"VariableID:2:8","subtle":"VariableID:2:9","space4":"VariableID:2:10","space8":"VariableID:2:11","space12":"VariableID:2:12","space16":"VariableID:2:13","space20":"VariableID:2:14","space24":"VariableID:2:15","radius8":"VariableID:2:16","radius16":"VariableID:2:17","radius20":"VariableID:2:18"};const S={"Title":"S:7cfa933648f9a5860d0bb762c536ef0d9d2e7ae2,","Body":"S:50825fa5e395eedbf42f54a3ae5d92e827bcf871,","Label":"S:ed78c6fa9e22025f8228b599e8dc55dce866ca2d,","Meta":"S:06c9225043dc056c48497749085f026d4ad0f8f1,"};
const vars={};for(const [k,id] of Object.entries(V))vars[k]=await figma.variables.getVariableByIdAsync(id);
function paint(n,k,field="fills"){n[field]=[figma.variables.setBoundVariableForPaint({type:"SOLID",color:{r:0,g:0,b:0}},"color",vars[k])];}
function spacing(n,field,k){n.setBoundVariable(field,vars[k]);}
const a=await figma.getNodeByIdAsync("3:20"),b=await figma.getNodeByIdAsync("3:28"),row=await figma.getNodeByIdAsync("3:19");row.clipsContent=false;
a.setProperties({"Show footer#3:6":false});b.setProperties({"Show footer#3:6":true});
return {mutatedNodeIds:[a.id,b.id,row.id],states:[a,b].map(n=>({id:n.id,height:n.height,footerShown:n.componentProperties["Show footer#3:6"].value,visibleTexts:n.findAllWithCriteria({types:["TEXT"]}).map(t=>({id:t.id,text:t.characters})),slots:n.findAllWithCriteria({types:["SLOT"]}).map(s=>({id:s.id,name:s.name,children:s.children.map(c=>({id:c.id,type:c.type,name:c.name}))}))}))};
