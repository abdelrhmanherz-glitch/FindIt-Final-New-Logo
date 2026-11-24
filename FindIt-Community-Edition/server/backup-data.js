// Run: node server/backup-data.js
// Creates a local backup without changing the active database.
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const source = path.join(root, 'data', 'db.json');
const destinationDir = path.join(root, 'backups');
if (!fs.existsSync(source)) {
  console.error('No database yet. Start the app once, then retry.');
  process.exitCode = 1;
} else {
  const data = JSON.parse(fs.readFileSync(source, 'utf8'));
  if (!Array.isArray(data.users) || !Array.isArray(data.items)) {
    console.error('Database format is invalid. No backup created.');
    process.exitCode = 1;
  } else {
    fs.mkdirSync(destinationDir, { recursive: true });
    const stamp = new Date().toISOString().replace(/[:.]/g, '-');
    const target = path.join(destinationDir, `findit-backup-${stamp}.json`);
    fs.copyFileSync(source, target, fs.constants.COPYFILE_EXCL);
    console.log(`Backup saved: ${target}`);
    console.log(`Users: ${data.users.length} | Items: ${data.items.length} | Feedback: ${(data.feedback || []).length} | Tickets: ${(data.tickets || []).length}`);
    console.log('Keep backups private: they contain account and customer data.');
  }
}
