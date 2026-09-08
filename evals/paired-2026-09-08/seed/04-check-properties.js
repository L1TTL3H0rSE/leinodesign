await Promise.all(['Regular','Medium'].map(style=>figma.loadFontAsync({family:'Inter',style})));
const c=figma.currentPage.query('COMPONENT[name=TextField]').first();
const defs=c.componentPropertyDefinitions;const keys=Object.fromEntries(Object.keys(defs).map(k=>[k.split('#')[0],k]));
const instance=c.createInstance();
instance.setProperties({[keys.Label]:'Test label',[keys.Value]:'Test value',[keys.Helper]:'Test helper',[keys['Show helper']]:false});
const values=instance.query('TEXT').values(['name','characters','visible']);
const passed=values.some(x=>x.name==='Label'&&x.characters==='Test label')&&values.some(x=>x.name==='Value'&&x.characters==='Test value')&&values.some(x=>x.name==='Helper'&&x.characters==='Test helper'&&x.visible===false);
const id=instance.id;instance.remove();if(!passed)throw new Error('Editable TextField check failed');
return {passed,values,createdNodeIds:[id],removedNodeIds:[id],mutatedNodeIds:[],retainedTestNodes:0};
