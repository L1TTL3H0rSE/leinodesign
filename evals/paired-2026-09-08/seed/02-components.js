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

if(figma.currentPage.children.length)throw new Error('Expected empty Starter canvas');
const board=figma.createAutoLayout('VERTICAL');ids.push(board.id);board.name='Starter components';board.x=48;board.y=48;board.resize(440,100);board.counterAxisSizingMode='FIXED';
for(const p of ['paddingTop','paddingBottom','paddingLeft','paddingRight'])bind(board,p,'spacing/16');
bind(board,'itemSpacing','spacing/16');bind(board,'cornerRadius','radius/8');fill(board,'color/background');
await label(board,'Heading','Starter components','Heading','color/ink');
const components=[];
for(const [name,text,bg,ink] of [
 ['Primary Button','Continue','color/accent','color/surface'],
 ['Secondary Button','Cancel','color/surface','color/ink'],
 ['NavItem','Overview','color/background','color/ink']
]){
 const c=figma.createComponent();ids.push(c.id);c.name=name;c.layoutMode='HORIZONTAL';c.primaryAxisSizingMode='AUTO';c.counterAxisSizingMode='AUTO';c.primaryAxisAlignItems='CENTER';c.counterAxisAlignItems='CENTER';
 board.appendChild(c);
 c.description=name==='Primary Button'?'Use for the main action. Edit Label to name the action.':name==='Secondary Button'?'Use for a supporting action. Edit Label to name the action.':'Use as a navigation entry. Edit Label to name its destination.';
 for(const p of ['paddingTop','paddingBottom'])bind(c,p,'spacing/12');
 for(const p of ['paddingLeft','paddingRight'])bind(c,p,'spacing/16');
 bind(c,'itemSpacing','spacing/8');bind(c,'cornerRadius','radius/8');fill(c,bg);
 if(name==='Secondary Button'){fill(c,'color/border','strokes');c.strokeWeight=1;}
 await label(c,'Label',text,'Medium',ink,c);
 components.push({id:c.id,name:c.name,properties:c.componentPropertyDefinitions,children:c.children.map(n=>({id:n.id,name:n.name,refs:n.componentPropertyReferences}))});
}
return {createdNodeIds:ids,mutatedNodeIds:[figma.currentPage.id],boardId:board.id,components};
