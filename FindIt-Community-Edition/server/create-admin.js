const crypto=require('node:crypto');const {load,save}=require('./store');const {hash}=require('./auth');
const [,,emailArg,password,nameArg]=process.argv;const email=String(emailArg||'').trim().toLowerCase();
if(!/^\S+@\S+\.\S+$/.test(email)||!password||password.length<12){console.error('Usage: node server/create-admin.js email@example.com "SecurePassword123!" "Admin Name" (password >=12 characters)');process.exit(1)}
const db=load();if(db.users.some(u=>u.email===email)){console.error('Email already exists; choose another email.');process.exit(1)}
db.users.push({id:crypto.randomUUID(),name:nameArg||'Administrator',email,password:hash(password),role:'admin'});save(db);console.log('Admin account created. Sign in on /admin.html');
