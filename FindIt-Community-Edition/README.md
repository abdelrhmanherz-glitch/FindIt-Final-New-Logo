# FindIt Community Edition — AI + Admin + Feedback + Support

A local university showcase with **fictional demo content** (not actual customers).

## Run on Windows PowerShell

1. Open the INNER `FindIt-Community-Edition` folder (where `package.json` lives).
2. `npm.cmd start`
3. Open `http://localhost:3000`
4. Admin: `http://localhost:3000/admin.html`

If port 3000 is busy, stop the previous Node server with Ctrl+C, or run `$env:PORT=3001; npm.cmd start` and use localhost:3001.

## Create or reset admin

`node server/setup-admin.js admin@findit.com "ChooseAUniquePassword123!" "Administrator"`

Do not use a demo password on a public deployment.

## What's included

- 24 fictional demo customer profiles (`@example.invalid` accounts cannot sign in), 48 sample item reports, 30 fictional demo reviews, 12 sample support tickets.
- Community feedback page with rating form; requires sign-in to submit.
- Customer service ticket form, user ticket history, and admin responses.
- Admin console for review moderation, support ticket replies/status, and per-customer history.
- Original AI Studio, item search, matching demo, English/Turkish controls, dashboards.
- User feedback and tickets are stored in `data/db.json` on this local machine.

**Important:** Demo customer profiles, testimonials, reports and tickets are clearly labeled fictional examples; don't represent them as genuine customers. This is not a production-grade service or a real AI model.

**Existing data:** This ZIP contains fresh demo data. To preserve accounts and reports from your previous edition, back up its `data/db.json` before migrating; don't overwrite the new database without merging the new `feedback` and `tickets` arrays.

## Tests

`npm.cmd test`

## Back up your demo database (new)

The current backend is **Node.js with a local JSON file** (`data/db.json`), not Firebase or Supabase. You do not need an API key to run this version. Before editing sample customers, items, feedback or support tickets, run:

```powershell
node server/backup-data.js
```

A timestamped copy will be created under `backups/`. It includes account and customer information, so keep it private and never upload it to a public repository. This is a local demo, not a production-ready database or real AI integration. To test code without starting the website, run `npm.cmd test`.

## Floating assistant and public reviews (November 2026)
- Floating **Ask FindIt** chat panel is available across the public website, with quick prompts and responses based on site navigation and keyword searches over reported items. This is a **local rule-based assistant**, not a generative AI model; it does not call an external AI API or require an API key.
- Public home page shows three feedback cards, with demo reviews clearly labeled. **Community feedback** page shows all published reviews. Signed-in members can submit feedback, and admins can moderate it in `/admin.html`.
- Existing local data in `data/db.json` is demo data. **When upgrading an existing installation, preserve your original `data/db.json`** and copy the updated `public/` files into your project; don't replace the database if you want to keep accounts and reports.
- Run from folder containing `package.json`: PowerShell `$env:PORT=3002; npm.cmd start`, then visit `http://localhost:3002` or `/admin.html`. If that port is occupied, stop the old FindIt server or choose an unused port.
