const crypto=require('node:crypto');const sessions=new Map();
function hash(password,salt=crypto.randomBytes(16).toString('hex')){return salt+':'+crypto.scryptSync(password,salt,64).toString('hex')}
function verify(password,stored){if(!stored||!stored.includes(':'))return false;const [salt,hex]=stored.split(':');const a=Buffer.from(hex,'hex'),b=crypto.scryptSync(password,salt,64);return a.length===b.length&&crypto.timingSafeEqual(a,b)}
function issue(user){const token=crypto.randomBytes(32).toString('hex');sessions.set(token,{id:user.id,expires:Date.now()+86400000});return token}
function current(req,db){const token=(req.headers.authorization||'').replace(/^Bearer /,'');const session=sessions.get(token);if(!session)return null;if(session.expires<Date.now()){sessions.delete(token);return null}return db.users.find(u=>u.id===session.id)||null}
function revoke(token){sessions.delete(token)}module.exports={hash,verify,issue,current,revoke};
