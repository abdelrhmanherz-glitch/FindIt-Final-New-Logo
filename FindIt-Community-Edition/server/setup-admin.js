const crypto=require('node:crypto');
const {load,save}=require('./store');
const {hash}=require('./auth');
const [,,emailArg,password,nameArg]=process.argv;
const email=String(emailArg||'').trim().toLowerCase();
if(!/^\S+@\S+\.\S+$/.test(email)||!password||password.length<12){
 console.error('Usage: node server/setup-admin.js admin@example.com "StrongPassword123!" "Admin Name" (12+ characters)');process.exit(1);
}
const db=load();let u=db.users.find(x=>x.email===email);
if(u){u.role='admin';u.password=hash(password);u.name=nameArg||u.name;console.log('Existing local account updated to admin; password reset.');}
else {u={id:crypto.randomUUID(),name:nameArg||'Administrator',email,password:hash(password),role:'admin'};db.users.push(u);console.log('New admin account created.');}
save(db);console.log('Open http://localhost:3000/admin.html and sign in.');
