await Promise.all(['Regular','Medium','Semi Bold'].map(style=>figma.loadFontAsync({family:'Inter',style})));
const vars=Object.fromEntries((await figma.variables.getLocalVariablesAsync()).map(v=>[v.name,v]));
const styles=Object.fromEntries((await figma.getLocalTextStylesAsync()).map(s=>[s.name,s]));
const ids=[];
function fill(n,key,field='fills'){n[field]=[figma.variables.setBoundVariableForPaint({type:'SOLID',color:{r:0,g:0,b:0}},'color',vars[key])];}
function bind(n,key,token){n.setBoundVariable(key,vars[token]);}
async function label(parent,name,characters,style,color,owner){
 const t=figma.createText();ids.push(t.id);t.name=name;await t.setTextStyleIdAsync(styles[style].id);t.characters=characters;parent.appendChild(t);t.textAutoResize='WIDTH_AND_HEIGHT';fill(t,color);
 if(owner)t.componentPropertyReferences={characters:owner.addComponentProperty(name,'TEXT',characters)};
 return t;
}

const board=figma.currentPage.children.find(n=>n.name==='Starter components');
if(!board||board.children.some(n=>n.name==='TextField'))throw new Error('Unexpected Starter state');
const c=figma.createComponent();ids.push(c.id);c.name='TextField';c.layoutMode='VERTICAL';c.primaryAxisSizingMode='AUTO';c.counterAxisSizingMode='FIXED';c.resize(320,100);c.fills=[];board.appendChild(c);bind(c,'itemSpacing','spacing/8');
c.description='Use for a labeled text input. Edit Label, Value and Helper; toggle Show helper to hide supporting text.';
await label(c,'Label','Label','Medium','color/ink',c);
const input=figma.createAutoLayout('HORIZONTAL');ids.push(input.id);input.name='Input';c.appendChild(input);input.layoutSizingHorizontal='FILL';input.counterAxisAlignItems='CENTER';
for(const p of ['paddingTop','paddingBottom','paddingLeft','paddingRight'])bind(input,p,'spacing/12');
bind(input,'itemSpacing','spacing/8');bind(input,'cornerRadius','radius/8');fill(input,'color/surface');fill(input,'color/border','strokes');input.strokeWeight=1;
const value=await label(input,'Value','Enter a value','Body','color/ink',c);value.layoutSizingHorizontal='FILL';value.textAutoResize='HEIGHT';
const helper=await label(c,'Helper','Helpful supporting text','Body','color/muted',c);helper.layoutSizingHorizontal='FILL';helper.textAutoResize='HEIGHT';
helper.componentPropertyReferences={...helper.componentPropertyReferences,visible:c.addComponentProperty('Show helper','BOOLEAN',true)};
return {createdNodeIds:ids,mutatedNodeIds:[board.id],component:{id:c.id,name:c.name,properties:c.componentPropertyDefinitions},children:c.query('*').values(['id','type','name','componentPropertyReferences','boundVariables'])};
