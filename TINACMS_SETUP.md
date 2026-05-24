# TinaCMS Setup Guide for BAKZ Portfolio

This document explains how to set up TinaCMS for visual content management of your portfolio.

## Overview

TinaCMS is configured to manage:
- **Projects** (game and video content)
- **Gallery items** (poster, photography, aigc)

Content is stored in JSON files in the `content/` directory.

## Current Setup

The portfolio is configured to work in two modes:

### 1. Static Mode (Default)
- Uses data from `data/projects.ts` and `data/gallery.ts`
- No TinaCMS credentials required
- Works out of the box

### 2. TinaCMS Mode
- Uses TinaCMS for visual editing
- Requires TinaCMS Cloud credentials
- Enables admin interface at `/admin`

## Setting Up TinaCMS Cloud

### Step 1: Create TinaCMS Account
1. Visit [tina.io](https://tina.io)
2. Sign up for a free account
3. Create a new project

### Step 2: Get Credentials
After creating a project, you'll receive:
- **Client ID**: Found in project settings
- **API Token**: Generated in project settings

### Step 3: Configure Environment
Update `.env.local` with your credentials:

```env
NEXT_PUBLIC_TINA_CLIENT_ID=your-actual-client-id
TINA_TOKEN=your-actual-api-token
NEXT_PUBLIC_TINA_BRANCH=main
```

### Step 4: Build with TinaCMS
```bash
# Build TinaCMS and Next.js together
npm run build:with-tina

# Or for development
npm run dev:with-tina
```

## Content Structure

### Projects (`content/projects/`)
Each project is a JSON file with structure:
```json
{
  "title": { "zh": "中文标题", "en": "English Title" },
  "description": { "zh": "中文描述", "en": "English Description" },
  "category": "game" | "video",
  "tags": ["tag1", "tag2"],
  "year": 2024,
  "thumbnail": "/images/thumbnail.jpg",
  "images": ["/images/img1.jpg", "/images/img2.jpg"],
  "tools": ["Tool1", "Tool2"],
  "links": { "behance": "...", "figma": "...", "youtube": "..." }
}
```

### Gallery (`content/gallery/`)
Each gallery item is a JSON file with structure:
```json
{
  "title": { "zh": "中文标题", "en": "English Title" },
  "description": { "zh": "中文描述", "en": "English Description" },
  "category": "poster" | "photography" | "aigc",
  "tags": ["tag1", "tag2"],
  "year": 2024,
  "image": "/images/image.jpg"
}
```

## Using TinaCMS Admin

Once configured with valid credentials:

1. Run `npm run dev:with-tina`
2. Visit `http://localhost:3000/admin`
3. Log in with your TinaCMS account
4. Edit content visually using the TinaCMS editor

## File Structure

```
bakz-portfolio/
├── content/
│   ├── projects/          # Project JSON files
│   │   ├── ue-scene-1.json
│   │   └── ...
│   └── gallery/           # Gallery JSON files
│       ├── poster-1.json
│       └── ...
├── tina/
│   └── config.ts          # TinaCMS schema configuration
├── lib/
│   └── tina.ts            # TinaCMS client utilities
├── hooks/
│   └── useTinaData.ts     # Data fetching hook
└── app/
    └── api/tina/          # API routes for TinaCMS
```

## Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server (static mode) |
| `npm run build` | Build for production (static mode) |
| `npm run dev:with-tina` | Start dev server with TinaCMS |
| `npm run build:with-tina` | Build with TinaCMS |
| `npm run tina:dev` | Start TinaCMS local server |
| `npm run tina:build` | Build TinaCMS only |

## Troubleshooting

### Build Fails with "Client not configured"
- Ensure `.env.local` has valid TinaCMS credentials
- Or use `npm run dev` instead of `npm run dev:with-tina`

### Content Not Updating
- Check that JSON files in `content/` are properly formatted
- Verify file names match the expected pattern (e.g., `ue-scene-1.json`)

### Admin Interface Not Accessible
- Ensure you're using `npm run dev:with-tina`
- Check that credentials are correctly set in `.env.local`

## Migration from Static Data

To migrate existing data to TinaCMS format:

1. Run the migration script (if available)
2. Or manually create JSON files in `content/projects/` and `content/gallery/`
3. Use the same structure as shown above
4. Test with `npm run dev:with-tina`

## Support

- TinaCMS Documentation: [tina.io/docs](https://tina.io/docs)
- TinaCMS Discord: [discord.gg/tina](https://discord.gg/tina)
