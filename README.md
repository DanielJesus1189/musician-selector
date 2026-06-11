# Musician Selector

A full-stack web application that lets you select musicians and view live aggregated counts of their instruments and vocal ranges.

## Project Overview

| Layer | Technology | What it does |
|-------|------------|--------------|
| **Database** | SQLite (in‑memory) | Stores 50 seeded musicians (`id`, `name`, `instrument`, `vocalRange`). |
| **API** | Node.js + Express | Serves a **GET** endpoint `/api/musicians` that returns every musician as JSON. |
| **Frontend** | Plain HTML + Vanilla JS (no build step) | Renders a checkbox for each musician, tracks selections, and updates live aggregated counts of instruments and vocal ranges. |
| **Packaging** | `npm` | `package.json` defines the start script and required dependencies. |

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the server:
   ```bash
   npm start
   ```

3. Open your browser to **http://localhost:3000**

## Features

- **50 Seeded Musicians** – Each with a name, instrument, and vocal range
- **Live Selection** – Check/uncheck musicians to see instant updates
- **Aggregated Counts** – View total counts by instrument and vocal range
- **No Build Step** – Pure vanilla JavaScript and HTML
- **RESTful API** – Easy to extend with additional endpoints

## File Structure

```
musician-selector/
├─ public/
│   └─ index.html          ← Front‑end UI
├─ server.js                ← Express + SQLite back‑end
├─ package.json             ← npm metadata
└─ README.md                ← this file
```

## How It Works

1. **Server starts** and creates an in-memory SQLite database with 50 randomly seeded musicians
2. **Frontend loads** and fetches the musician list via `/api/musicians`
3. **Checkboxes render** for each musician with instrument and vocal range labels
4. **Selection updates counts** – Every time you check/uncheck a musician, the aggregated totals recalculate instantly
