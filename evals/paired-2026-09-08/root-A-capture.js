const p=await figma.getNodeByIdAsync('2:2');await figma.setCurrentPageAsync(p);
const ids={list:'9:17',detail:'9:18',edit:'9:19',empty:'12:63',error:'12:123',compact:'18:111',note:'18:93'};
const screens={};for(const [k,id] of Object.entries(ids)){const n=await figma.getNodeByIdAsync(id);screens[k]={id,w:n.width,h:n.height,texts:n.findAllWithCriteria({types:['TEXT']}).map(t=>[t.id,t.characters]),edges:n.findAll(x=>'reactions'in x&&x.reactions.length>0).map(x=>({id:x.id,reactions:x.reactions}))};}
const master=await figma.getNodeByIdAsync('9:8');const rows=[];
for(const k of ['list','compact']){const n=await figma.getNodeByIdAsync(ids[k]);for(const i of n.findAllWithCriteria({types:['INSTANCE']})){const m=await i.getMainComponentAsync();if(m&&m.id===master.id) rows.push({screen:k,id:i.id,props:i.componentProperties,gap:i.itemSpacing,w:i.width,h:i.height});}}
return {screens,master:{id:master.id,gap:master.itemSpacing,bound:master.boundVariables.itemSpacing||null,props:master.componentPropertyDefinitions},rows};
