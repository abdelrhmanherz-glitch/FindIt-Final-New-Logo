const test=require('node:test'),assert=require('node:assert/strict'),{score}=require('../server/match');
test('matches opposite types with shared category and words',()=>{const a={id:'1',type:'lost',status:'open',category:'Keys',title:'Silver keys',location:'Library'},b={id:'2',type:'found',status:'open',category:'Keys',title:'Silver keys',location:'Library'};assert.ok(score(a,b)>=70)});
test('does not match two lost reports',()=>assert.equal(score({id:'1',type:'lost',status:'open'},{id:'2',type:'lost',status:'open'}),0));
