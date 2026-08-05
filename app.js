# Loyola Global Works — Website + Admin Prototype

This build follows the supplied LGW reference and brand guide:
- Obsidian #111111 / White #FFFFFF
- Graphite #292929 / Slate #555555 / Silver #A6A6A6 / Platinum #D9D9D9
- Cormorant Garamond + Montserrat
- Supplied LGW logo assets only
- Supplied LGW globe/hero artwork
- Editorial, premium, monochrome layout

## Files
- `index.html` — public website
- `admin.html` — admin/content management interface
- `styles.css`, `app.js` — site UI
- `assets/` — your supplied logo and hero files

## Admin
Open `/admin.html`.
Demo password: `LGW-admin`

The admin prototype supports:
- Hero and About copy editing
- Leadership/team publishing for CEO, Operations Lead, Talent Director and Client Success
- Unlimited job openings
- Per-job application fields
- Applicant submission view
- Logo, monogram and hero image uploads
- Draft / Publish workflow

## Important production note
This prototype stores changes in browser localStorage. That means it is excellent for reviewing the UI and workflow, but it is NOT yet a real multi-user CMS: a change made in one browser is not automatically published to other people's browsers.

For the production version, connect the same UI to a hosted database/CMS and secure authentication. The intended production structure is:
Public website -> CMS/API -> database + media storage
Admin -> authenticated CMS -> publish -> public website

## Getting a public URL
Upload this folder to a static host such as Netlify or Vercel to get a public URL. For true shared publishing, use the production CMS/database architecture above rather than browser storage.
