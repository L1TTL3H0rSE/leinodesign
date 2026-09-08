await figma.setCurrentPageAsync(figma.root.children.find(p=>p.name==='Starter'));
const variables=await figma.variables.getLocalVariablesAsync();
const collections=await figma.variables.getLocalVariableCollectionsAsync();
const styles=await figma.getLocalTextStylesAsync();
const variableNames=Object.fromEntries(variables.map(v=>[v.id,v.name]));
const styleNames=Object.fromEntries(styles.map(s=>[s.id,s.name]));
function node(n){
 const out={id:n.id,type:n.type,name:n.name};
 for(const k of ['x','y','width','height','visible','layoutMode','primaryAxisSizingMode','counterAxisSizingMode','layoutSizingHorizontal','layoutSizingVertical','primaryAxisAlignItems','counterAxisAlignItems','paddingTop','paddingRight','paddingBottom','paddingLeft','itemSpacing','cornerRadius','fills','strokes','strokeWeight','boundVariables','description','characters','fontName','fontSize','lineHeight','textStyleId','textAutoResize','componentPropertyReferences'])if(k in n)out[k]=n[k];
 if(n.type==='COMPONENT')out.componentPropertyDefinitions=n.componentPropertyDefinitions;
 if('children' in n)out.children=n.children.map(node);
 return out;
}
const starter=node(figma.currentPage);
const work=figma.root.children.find(p=>p.name==='Work');
const raw={pages:[starter,{id:work.id,name:work.name,type:work.type,children:work.children.map(node)}],collections:collections.map(c=>({id:c.id,name:c.name,modes:c.modes,defaultModeId:c.defaultModeId})),variables:variables.map(v=>({id:v.id,name:v.name,resolvedType:v.resolvedType,scopes:v.scopes,codeSyntax:v.codeSyntax,collection:collections.find(c=>c.id===v.variableCollectionId).name,values:collections.find(c=>c.id===v.variableCollectionId).modes.map(m=>({mode:m.name,value:v.valuesByMode[m.modeId]}))})),styles:styles.map(s=>({id:s.id,name:s.name,fontName:s.fontName,fontSize:s.fontSize,lineHeight:s.lineHeight,letterSpacing:s.letterSpacing}))};
function norm(x,key){
 if(Array.isArray(x))return x.map(v=>norm(v));
 if(x&&typeof x==='object'){
  if(x.type==='VARIABLE_ALIAS')return {type:x.type,name:variableNames[x.id]};
  const o={};for(const k of Object.keys(x).sort()){if(['id','modeId','defaultModeId'].includes(k))continue;o[k.replace(/#[0-9]+:[0-9]+$/,'')]=norm(x[k],k);}return o;
 }
 if(typeof x==='string'){if(key==='textStyleId')return styleNames[x]||x;return x.replace(/#[0-9]+:[0-9]+$/,'');}
 return x;
}
return {raw,counts:{components:starter.children.flatMap(n=>n.children||[]).filter(n=>n.type==='COMPONENT').length,variables:variables.length,styles:styles.length,workChildren:work.children.length}};


