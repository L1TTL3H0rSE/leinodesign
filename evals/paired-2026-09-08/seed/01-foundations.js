if (figma.currentPage.children.length || (await figma.variables.getLocalVariablesAsync()).length || (await figma.getLocalTextStylesAsync()).length) throw new Error('Expected empty seed file');
await Promise.all(['Regular','Medium','Semi Bold'].map(style=>figma.loadFontAsync({family:'Inter',style})));
const page=figma.currentPage; page.name='Starter';
const work=figma.createPage(); work.name='Work';
const collection=figma.variables.createVariableCollection('Starter');
collection.renameMode(collection.defaultModeId,'Light');
const specs=[
 ['color/surface','COLOR',['FRAME_FILL','SHAPE_FILL','TEXT_FILL'],'FFFFFF'],
 ['color/background','COLOR',['FRAME_FILL','SHAPE_FILL'],'F7F7F4'],
 ['color/ink','COLOR',['TEXT_FILL'],'202B2D'],
 ['color/muted','COLOR',['TEXT_FILL'],'606E73'],
 ['color/accent','COLOR',['FRAME_FILL','SHAPE_FILL','TEXT_FILL'],'145F5A'],
 ['color/border','COLOR',['STROKE_COLOR'],'C8D0CE'],
 ['spacing/4','FLOAT',['GAP'],4],
 ['spacing/8','FLOAT',['GAP'],8],
 ['spacing/12','FLOAT',['GAP'],12],
 ['spacing/16','FLOAT',['GAP'],16],
 ['radius/8','FLOAT',['CORNER_RADIUS'],8]
];
const variables=[];
for(const [name,type,scopes,raw] of specs){
 const v=figma.variables.createVariable(name,collection,type);v.scopes=scopes;
 const value=type==='COLOR'?{r:parseInt(raw.slice(0,2),16)/255,g:parseInt(raw.slice(2,4),16)/255,b:parseInt(raw.slice(4,6),16)/255,a:1}:raw;
 v.setValueForMode(collection.defaultModeId,value);variables.push({id:v.id,name:v.name,type,scopes,value});
}
const styles=[];
for(const [name,style,size,line] of [['Body','Regular',14,20],['Medium','Medium',14,20],['Heading','Semi Bold',24,32]]){
 const s=figma.createTextStyle();s.name=name;s.fontName={family:'Inter',style};s.fontSize=size;s.lineHeight={unit:'PIXELS',value:line};styles.push({id:s.id,name});
}
return {createdNodeIds:[work.id],mutatedNodeIds:[page.id],pages:{Starter:page.id,Work:work.id},collection:{id:collection.id,name:collection.name,mode:collection.defaultModeId},variables,styles};
