# AI-Friendly SEO — Implementation Guide & Future Update Playbook

**Portfolio:** https://portfolio.eunus.dev
**Tech:** Hugo (Doks theme) + Netlify
**Last updated:** 2026-04-11

---

## What Was Implemented

### Layer 1 — Foundation Fixes (params.toml + content)

| File | What was fixed |
|------|---------------|
| `config/_default/params.toml` | `description` (was empty), `schemaName` (was missing), `schemaLinkedIn` (was empty), `schemaGitHub` (was missing), `domainTLD` (was `doks.netlify.app`), `titleHome` (was `Doks Theme`), `copyRight` (was theme author) |
| `content/en/_index.md` | `title` + `description` were empty — now have SEO-optimized values |

### Layer 2 — AI Crawler Access

| File | What was added |
|------|---------------|
| `layouts/robots.txt` | 15 AI crawlers explicitly allowed (GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, Claude-Web, Claude-SearchBot, anthropic-ai, Google-Extended, PerplexityBot, Applebot-Extended, meta-externalagent, FacebookBot, cohere-ai, Amazonbot, Bytespider, YouBot, CCBot) |
| `layouts/index.headers` | `X-Robots-Tag: index, follow, max-snippet:-1, max-image-preview:large` globally + `Content-Type: text/markdown` for llms.txt files |

### Layer 3 — LLM Content Files

| File | Purpose |
|------|---------|
| `static/llms.txt` | Short summary for AI crawlers (~80 lines). Links to llms-full.txt. Contains: about, skills, experience, project list, domains, hiring, contact. |
| `static/llms-full.txt` | Extended version (~300+ lines). Contains: recruiter quick-match guide, full identity, detailed skills, experience, **per-project descriptions**, FAQ, contact. This is the primary file AI crawlers ingest. |

### Layer 4 — JSON-LD Structured Data

All in `layouts/partials/head/structured-data.html`:

| Schema | What it does |
|--------|-------------|
| **Person** | Name, jobTitle, email, knowsAbout (16 technologies), worksFor, hasOccupation (with SOC code 15-1252), sameAs (LinkedIn, GitHub, blog), image |
| **ProfilePage** | Homepage-only wrapper — signals this is a person's profile page, with `mainEntity` pointing to Person `@id` |
| **WebPage** | Every page — includes `speakable` CSS selectors targeting `.display-4`, `.h5.text-muted`, `.lead` |
| **FAQPage** | Homepage-only — 11 Q&A pairs (6 general + 5 recruiter-targeted per domain) |
| **ItemList** | Homepage-only — all 12 projects as `SoftwareApplication` entities with name, description, category, keywords, author `@id` link |
| **BreadcrumbList** | Auto-generated from URL path |
| **Article** | Blog/docs/tutorial pages only |

### Layer 5 — HTML & Meta

| File | What was added |
|------|---------------|
| `layouts/partials/head/custom-head.html` | `<meta name="author">`, `<meta name="robots">`, `<link rel="me">` (GitHub, LinkedIn), `<link rel="alternate">` to llms.txt and llms-full.txt |
| `layouts/index.html` | Semantic `aria-label` on all 5 sections, `<time datetime>` on all timeline dates, descriptive `alt` on profile image |

---

## File Map — Where Everything Lives

```
config/_default/
  params.toml          ← SEO config (description, schema params, OG settings)
  config.toml          ← Hugo config (baseURL, sitemap, outputs)

content/en/
  _index.md            ← Homepage front matter (title, description)

layouts/
  index.html           ← Homepage template (hero, projects, experience, blog, github)
  index.headers        ← Netlify _headers (X-Robots-Tag, CORS, CSP)
  robots.txt           ← AI crawler directives
  partials/head/
    structured-data.html  ← ALL JSON-LD schemas (Person, ProfilePage, FAQ, ItemList, etc.)
    custom-head.html      ← AI meta tags (author, robots, rel="me", llms.txt links)
    seo.html              ← Standard meta robots, title, description, canonical (theme)
    opengraph.html        ← OG tags (theme)
    twitter_cards.html    ← Twitter cards (theme)

static/
  llms.txt             ← Short AI summary
  llms-full.txt        ← Extended AI content (recruiter guide, full projects, FAQ)
```

---

## Future Update Playbook

### When you add a NEW PROJECT with details (name, features, URL)

**Files to update:**

1. **`layouts/index.html`** — Add project card to the marquee (and its duplicate for the infinite loop):
   ```html
   <div class="project-card">
     <div class="project-card-name">Project Name</div>
     <div class="project-card-stack">SaaS · Stack · Details</div>
   </div>
   ```

2. **`layouts/partials/head/structured-data.html`** — Add a new `ListItem` to the ItemList schema:
   ```json
   {
     "@type": "ListItem",
     "position": 13,
     "item": {
       "@type": "SoftwareApplication",
       "name": "Project Name",
       "description": "What this project does in one sentence.",
       "applicationCategory": "BusinessApplication",
       "operatingSystem": "Web",
       "url": "https://project-url.com",
       "author": { "@id": "https://portfolio.eunus.dev/#/schema/person/1" },
       "keywords": "keyword1, keyword2, keyword3"
     }
   }
   ```
   Also update `"numberOfItems"` count in the ItemList.

3. **`static/llms-full.txt`** — Add project to:
   - "For Recruiters — Quick Match Guide" section (one bullet)
   - "Key Projects" section (full description block):
     ```
     ### 13. Project Name
     - **Type:** SaaS / Enterprise / Mobile
     - **Architecture:** Modular Monolith / Microservices / etc.
     - **Stack:** Technologies used
     - **URL:** https://project-url.com (if public)
     - **Key Features:**
       - Feature 1: what it does
       - Feature 2: what it does
     - **Description:** 2-3 sentence summary.
     ```

4. **`static/llms.txt`** — Add one-line entry to "Key Projects" section:
   ```
   - **Project Name**: Stack details — brief description.
   ```
   Update the "Domains & Industries" line if it's a new domain.

5. **FAQ schema** (in `structured-data.html`) — If it's a notable domain (e.g., fintech, real estate), add a recruiter FAQ:
   ```json
   {
     "@type": "Question",
     "name": "Has Eunusur Rahaman built [domain] software?",
     "acceptedAnswer": {
       "@type": "Answer",
       "text": "Yes. Eunusur built [Project Name] — a [type] using [stack]. Key features include [features]."
     }
   }
   ```

### When you add PROJECT FEATURES / DETAILS to existing projects

**Files to update:**

1. **`structured-data.html`** — Update the `description` and `keywords` of the matching `SoftwareApplication` in the ItemList.

2. **`static/llms-full.txt`** — Update the project's description block. Add a `**Key Features:**` sub-list:
   ```
   - **Key Features:**
     - Multi-tenant SaaS with ABP Framework
     - Real-time dashboard with SignalR
     - PDF invoice generation with PdfSharp
     - Role-based access control
   ```

3. **FAQ schema** — Update the `acceptedAnswer.text` for any related FAQ to mention specific features.

### When you add a PROJECT URL (live site or demo)

**Files to update:**

1. **`structured-data.html`** — Add `"url": "https://project-url.com"` to the SoftwareApplication item.

2. **`static/llms-full.txt`** — Add `- **URL:** https://project-url.com` to the project block.

3. **`static/llms.txt`** — Optionally add the URL inline with the project entry.

### When you add NEW TOOLS / SKILLS

**Files to update:**

1. **`params.toml`** — No change needed (skills are not in params).

2. **`structured-data.html`** — Add to the `knowsAbout` array in Person schema AND to `hasOccupation.skills`:
   ```json
   "knowsAbout": [
     "ABP Framework", "ASP.NET Core", ..., "NEW TOOL"
   ],
   "hasOccupation": {
     "skills": "..., NEW TOOL"
   }
   ```

3. **`static/llms-full.txt`** — Add to the relevant skills subsection (Backend, Frontend, Mobile, Architecture, Tooling).

4. **`static/llms.txt`** — Add to the Skills section.

5. **`layouts/index.html`** — If it's a primary skill, add to the stats line:
   ```html
   <li class="list-inline-item">Angular • Blazor • .NET • MAUI • NEW</li>
   ```

### When you update JOB TITLE or EMPLOYER

**Files to update:**

1. **`params.toml`** — Update `schemaJobTitle`, `schemaName` (if name changes).
2. **`structured-data.html`** — Update `worksFor.name`, `hasOccupation.name`.
3. **`static/llms.txt`** — Update About section + summary blockquote.
4. **`static/llms-full.txt`** — Update Identity, Professional Summary, Experience, Recruiter Guide.
5. **`content/en/_index.md`** — Update title and description.
6. **`layouts/index.html`** — Update hero section text.

### When you add CERTIFICATIONS or EDUCATION

**Files to update:**

1. **`structured-data.html`** — Add `hasCredential` to Person schema:
   ```json
   "hasCredential": [
     {
       "@type": "EducationalOccupationalCredential",
       "credentialCategory": "certification",
       "name": "AWS Certified Solutions Architect",
       "recognizedBy": {
         "@type": "Organization",
         "name": "Amazon Web Services"
       }
     }
   ]
   ```

2. **`static/llms-full.txt`** — Add a "## Certifications" or "## Education" section.
3. **`static/llms.txt`** — Add brief mention.

---

## Schema Validation

After any update, validate at:
- **Google Rich Results Test:** https://search.google.com/test/rich-results
- **Schema.org Validator:** https://validator.schema.org
- **Check llms.txt:** https://portfolio.eunus.dev/llms.txt
- **Check llms-full.txt:** https://portfolio.eunus.dev/llms-full.txt

---

## AI Crawler Reference

| AI Model | Crawlers | What they read |
|----------|----------|----------------|
| OpenAI (ChatGPT) | GPTBot, OAI-SearchBot, ChatGPT-User | llms.txt, llms-full.txt, JSON-LD, HTML |
| Anthropic (Claude) | ClaudeBot, Claude-Web, Claude-SearchBot, anthropic-ai | llms.txt, llms-full.txt, JSON-LD, HTML |
| Google (Gemini) | Google-Extended | JSON-LD (primary), HTML, sitemap |
| xAI (Grok) | Web crawl | llms.txt, HTML (Grok browses URLs shared on X) |
| Perplexity | PerplexityBot | llms-full.txt (loves structured Q&A), JSON-LD |
| Apple Intelligence | Applebot-Extended | Speakable schema, JSON-LD |
| Meta (Llama) | meta-externalagent, FacebookBot | OG tags, llms.txt, JSON-LD |
| Cohere | cohere-ai | llms-full.txt (RAG embeddings) |
| Amazon (Alexa) | Amazonbot | JSON-LD, structured data |
| ByteDance (Doubao) | Bytespider | llms.txt, HTML |

---

## Params.toml SEO Fields Reference

```toml
# These params are used in structured-data.html templates:
schemaName           # Person schema "name"
schemaJobTitle       # Person schema "jobTitle"
schemaEmail          # Person schema "email" (mailto:)
schemaLinkedIn       # Person sameAs + author sameAs
schemaGitHub         # Person sameAs + author sameAs
schemaBlogUrl        # Person sameAs
schemaAuthor         # Article author name
schemaAuthorLinkedIn # Article author sameAs
schemaAuthorGitHub   # Article author sameAs
schemaType           # "Person" or "Organization"
schemaImage          # Person/OG image filename
schemaLogo           # Organization logo filename
description          # Global meta description (fallback for all pages)
domainTLD            # Used in OG/Twitter card URLs
titleHome            # Homepage <title> tag
```
