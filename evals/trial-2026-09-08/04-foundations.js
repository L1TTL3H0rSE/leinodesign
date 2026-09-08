const c=figma.variables.createVariableCollection("ReviewPanel / Proposal");c.renameMode(c.defaultModeId,"Light");
const vars={};
const colors={surface:"#FFFFFF",canvas:"#F3F5F8",text:"#192235",muted:"#536078",border:"#DCE2EB",accent:"#3559D5",subtle:"#EEF2FF"};
for(const [name,hex] of Object.entries(colors)){const v=figma.variables.createVariable("color/"+name,c,"COLOR");v.scopes=name==="border"?["STROKE_COLOR"]:["FRAME_FILL","SHAPE_FILL","TEXT_FILL","STROKE_COLOR"];v.setValueForMode(c.defaultModeId,figma.util.rgb(hex));vars[name]=v.id;}
for(const n of [4,8,12,16,20,24]){const v=figma.variables.createVariable("space/"+n,c,"FLOAT");v.scopes=["GAP"];v.setValueForMode(c.defaultModeId,n);vars["space"+n]=v.id;}
for(const n of [8,16,20]){const v=figma.variables.createVariable("radius/"+n,c,"FLOAT");v.scopes=["CORNER_RADIUS"];v.setValueForMode(c.defaultModeId,n);vars["radius"+n]=v.id;}
const styles={};
for(const [name,size,line,font] of [["Title",20,28,"Semi Bold"],["Body",14,22,"Regular"],["Label",14,20,"Medium"],["Meta",12,18,"Regular"]]){await figma.loadFontAsync({family:"Inter",style:font});const s=figma.createTextStyle();s.name="ReviewPanel/"+name;s.fontName={family:"Inter",style:font};s.fontSize=size;s.lineHeight={unit:"PIXELS",value:line};styles[name]=s.id;}
const shadow=figma.createEffectStyle();shadow.name="ReviewPanel/Elevation";shadow.effects=[{type:"DROP_SHADOW",color:{r:0.10,g:0.15,b:0.25,a:0.10},offset:{x:0,y:8},radius:24,spread:0,visible:true,blendMode:"NORMAL"}];
return {collectionId:c.id,vars,styles,shadow:shadow.id,createdNodeIds:[]};
