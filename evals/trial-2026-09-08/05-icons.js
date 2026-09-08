await figma.setCurrentPageAsync(await figma.getNodeByIdAsync("0:1"));
for(const style of ["Regular","Medium","Semi Bold"])await figma.loadFontAsync({family:"Inter",style});
const V={"surface":"VariableID:2:3","canvas":"VariableID:2:4","text":"VariableID:2:5","muted":"VariableID:2:6","border":"VariableID:2:7","accent":"VariableID:2:8","subtle":"VariableID:2:9","space4":"VariableID:2:10","space8":"VariableID:2:11","space12":"VariableID:2:12","space16":"VariableID:2:13","space20":"VariableID:2:14","space24":"VariableID:2:15","radius8":"VariableID:2:16","radius16":"VariableID:2:17","radius20":"VariableID:2:18"};const S={"Title":"S:7cfa933648f9a5860d0bb762c536ef0d9d2e7ae2,","Body":"S:50825fa5e395eedbf42f54a3ae5d92e827bcf871,","Label":"S:ed78c6fa9e22025f8228b599e8dc55dce866ca2d,","Meta":"S:06c9225043dc056c48497749085f026d4ad0f8f1,"};
const vars={};for(const [k,id] of Object.entries(V))vars[k]=await figma.variables.getVariableByIdAsync(id);
function paint(n,k,field="fills"){n[field]=[figma.variables.setBoundVariableForPaint({type:"SOLID",color:{r:0,g:0,b:0}},"color",vars[k])];}
function spacing(n,field,k){n.setBoundVariable(field,vars[k]);}
const made=[];
for(const [name,path] of [["Close / Cross","M 5 5 L 15 15 M 15 5 L 5 15"],["Close / Circle","M 7 7 L 13 13 M 13 7 L 7 13"],["Close / Fine","M 6 6 L 14 14 M 14 6 L 6 14"]]){
const c=figma.createComponent();c.name=name;c.resize(20,20);c.fills=[];c.x=80+made.length*30;c.y=80;
const v=figma.createVector();v.name="Close strokes";v.vectorPaths=[{windingRule:"NONZERO",data:path}];v.strokeWeight=1.7;v.strokeCap="ROUND";v.fills=[];paint(v,"muted","strokes");c.appendChild(v);
if(name==="Close / Circle"){const ring=figma.createEllipse();ring.name="Circle";ring.resize(18,18);ring.x=1;ring.y=1;ring.fills=[];ring.strokeWeight=1.5;paint(ring,"muted","strokes");c.appendChild(ring);}
c.description="20×20 vector glyph for ReviewPanel Close icon instance-swap. The parent retains its 44×44 action area.";made.push(c);
}
return {icons:made.map(n=>({id:n.id,name:n.name})),createdNodeIds:made.flatMap(n=>[n.id,...n.findAll().map(x=>x.id)]),variables:(await figma.variables.getLocalVariablesAsync()).map(v=>({id:v.id,name:v.name,scopes:v.scopes,values:v.valuesByMode}))};
