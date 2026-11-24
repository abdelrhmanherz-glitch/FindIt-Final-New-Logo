const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { spawnSync } = require('node:child_process');
const root = path.resolve(__dirname, '..');
test('backup creates a valid JSON snapshot without changing the database', () => {
  const source = path.join(root, 'data', 'db.json');
  const before = fs.readFileSync(source);
  const run = spawnSync(process.execPath, ['server/backup-data.js'], { cwd: root, encoding: 'utf8' });
  assert.equal(run.status, 0, run.stderr);
  const match = run.stdout.match(/Backup saved: (.+)/);
  assert.ok(match, run.stdout);
  const backup = match[1].trim();
  assert.deepEqual(fs.readFileSync(source), before);
  assert.deepEqual(JSON.parse(fs.readFileSync(backup, 'utf8')), JSON.parse(before.toString()));
  fs.unlinkSync(backup);
});
