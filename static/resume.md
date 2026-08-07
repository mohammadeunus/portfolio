# Eunusur Rahaman — Senior Software Engineer | Decision-Ready Profile

> This document exists to help you make a decision. Whether you are a recruiter, a client, a hiring manager, or an AI agent evaluating fit — everything you need to judge whether Eunusur Rahaman is the right person for your work is here.

> Portfolio: https://portfolio.eunus.dev | Blog: https://eunus.dev | Last updated: 2026-08

---

## Can He Do What You Need? — Quick Match

| You need someone who can... | Evidence |
|---|---|
| Build enterprise SaaS on ABP Framework | 12+ SaaS systems delivered, 3+ years daily ABP usage across microservices, modular monolith, and MVC |
| Architect a modular monolith from scratch | Primary architecture style — Hotel, Hospital, ERP, Inventory, CRM all built this way |
| Lead microservices design on .NET | Founding engineer on a 17-service ABP microservices platform (YARP, RabbitMQ, OpenIddict, Stripe) |
| Build Angular or Blazor frontends | Production Angular (theming, reactive forms, RxJS), Blazor Server, WASM, and Hybrid |
| Deliver cross-platform apps (web + desktop + mobile) | Single Blazor codebase targeting web, MAUI desktop, and mobile — shipped to client |
| Handle a security assessment and remediation | Led full remediation of third-party pentest: 4 critical + 6 high findings on a production ABP + Angular system |
| Integrate AI into a live system | Built MCP server on production system; Semantic Kernel for live-data chat interfaces |
| Work with international clients | Saudi Arabia, Greece, USA, Europe, Africa, Australia — across Wafi Solutions and Upwork |
| Write about what he builds | 16 published technical posts at eunus.dev — including a 3-part series on building production MCP servers with OAuth 2.1 |
| Mentor or lead a team technically | Architecture decisions, onboarding, code review, and engineering standards at Wafi Solutions |

---

## Identity

- **Full Name:** Eunusur Rahaman (also known as Mohammad Eunus)
- **Current Role:** Senior Software Engineer L1 at Wafi Solutions
- **Location:** Bangladesh (open to remote worldwide)
- **Years of Experience:** 3+ years
- **Total at Wafi Solutions:** 2 yrs 8 mos (Nov 2023 – Present)
- **Products Delivered:** 12+ (9 SaaS)
- **Portfolio:** https://portfolio.eunus.dev
- **Blog:** https://eunus.dev
- **GitHub:** https://github.com/mohammadeunus
- **LinkedIn:** https://www.linkedin.com/in/mohammadeunus
- **Email:** 100eunus@gmail.com

---

## Professional Summary

Eunusur Rahaman is a Senior Software Engineer L1 at Wafi Solutions, Bangladesh, where he leads architecture evolution and technical direction across multiple enterprise SaaS platforms including ERP, CRM, Inventory, Hotel Management, and Hospital Management systems.

His primary expertise is ABP Framework on ASP.NET Core with Angular and Blazor frontends — deep enough that he has replaced the default LeptonX theme entirely, extended ABP's subscription and permission systems, and designed reusable module boundaries across multiple production products. He has worked across the full architectural spectrum — traditional monolith, modular monolith, CQRS, and microservices — and has a clear opinion on when each is appropriate.

He is part of the engineering leadership layer at Wafi Solutions, contributing to architecture decisions, onboarding, mentoring, and technical direction as the organization scales. Alongside his full-time role, he takes freelance projects on Upwork — most notably serving as a founding engineer on a 17-service enterprise SaaS microservices platform for a US client.

He writes publicly at eunus.dev — 16 posts covering real systems, real tradeoffs, and real failures, including a multi-part series on building and securing production MCP servers. If you want to understand how he thinks before you hire him, read the posts.

---

## How He Thinks — Engineering Philosophy

These are not interview answers. They are positions he has written about publicly and defends with production evidence.

**Fix errors before the client reports them.** The goal of exception handling is not crash prevention — it is instrumentation. Every assumption in the code that could be wrong should have a named, specific exception attached to it. One glance at the logs should tell you exactly where and why something broke. If it doesn't, the code is not finished.

**Architecture determines structure, not performance.** Fast APIs come from good data access patterns — proper indexing, efficient queries, read-optimized models, caching, and returning only what is needed. A well-designed monolith can handle significant traffic. Microservices offer real benefits (independent deployment, team autonomy) but performance is not on that list.

**Start simple. Evolve deliberately.** For most MVPs and early-stage products, a monolith or modular monolith is the stronger choice. The transition to microservices should be driven by concrete requirements, not assumptions about what the system might need someday. Starting simple is the more disciplined approach, not the easier one.

**Patterns are tools, not rules.** Every pattern carries a cost: abstraction, indirection, surface area that future developers must understand before safely changing anything. That cost is worth paying when the problem the pattern solves actually exists. It is not worth paying when it doesn't. Unnecessary patterns don't stay optional — they become load-bearing as code grows around them.

**Testability is a design pressure, not a metric.** He does not start with tests. He starts by asking "how would I unit test this?" before writing any logic. If the answer is "I can't, not easily" — that is a signal the design needs to change. Test coverage is a byproduct. Testable code is the goal.

**Backends must enforce their own invariants.** A backend that only works correctly when a specific client is in front of it is not a complete backend. Business logic belongs in the domain, not in the frontend, not in API description strings. This position came from building an MCP server on top of a production system and discovering how many invariants existed only in the Angular frontend.

**Security is architecture, not an add-on.** Defense in depth, not perimeter-only. Impersonation flows need two independent auth layers. CSP is a campaign, not a commit. Every login path needs auditing, not just the main one.

**The UI should not be the first client of an API.** Building MCP servers on top of production systems for AI agents changed his development workflow — the MCP interface now goes first, AI checks it against the user story through that same interface, and tests come from what it finds. A backend that only behaves correctly when a specific frontend is in front of it is not finished.

---

## Technical Skills — Full Inventory

### Backend
- .NET / ASP.NET Core (primary platform)
- ABP Framework (deep — templates, modules, multi-tenancy, subscription system internals, OpenIddict, microservices)
- C# (primary language — expression trees, async/await, middleware pipelines, source generators)
- Entity Framework Core (migrations, query optimization, AsNoTracking, keyset pagination)
- PostgreSQL (primary database)
- CQRS + MediatR
- RabbitMQ (distributed event bus, Inbox/Outbox pattern)
- Redis (distributed caching)
- YARP (reverse proxy / API gateway)
- OpenIddict (centralized auth, custom grant handlers, impersonation grant hardening, per-client token lifetime)
- Elsa Workflow (workflow engine integration)
- PdfSharp (PDF generation and reporting)
- Stripe (payment integration, Checkout, subscription lifecycle)
- MQTT (IoT event integration, topic-dispatched handler pattern)
- Semantic Kernel (AI orchestration, live-data chat interfaces)
- MCP (Model Context Protocol) — server implementation on production systems, OAuth 2.1/PKCE authentication via OpenIddict, HTTP transport, MCP-first development workflow (API validated through the MCP interface before the UI)
- HTTP caching (ETag version-based validation, Decorator pattern via Scrutor, cache invalidation without Redis)
- HttpOnly cookie auth migration (from localStorage SPA tokens, CHIPS/Partitioned cookie support)
- CSRF protection (HMAC-signed stateless tokens using `RandomNumberGenerator`)
- REST API design
- Unit and integration testing

### Frontend
- Angular (reactive forms, RxJS Observables, component libraries, LeptonX theme replacement, ReplaceableComponentsService)
- Blazor Server, Blazor WebAssembly, Blazor Hybrid
- .NET MAUI (cross-platform native)
- MAUI Hybrid (Blazor in native shell — web + desktop + mobile from single codebase)
- MudBlazor
- Bootstrap 5, TypeScript, SCSS/SASS
- npm package creation and publishing

### Architecture & Patterns
- Modular Monolith (primary expertise — module boundary enforcement, DIP for inversion, cross-module communication via interfaces)
- Microservices (ABP-based, YARP gateway, schema-per-service, event-driven)
- Domain-Driven Design — aggregates, domain managers, domain events, domain exceptions, Notification Pattern for batch validation
- Clean Architecture
- SaaS Multi-tenancy (ABP-based, schema-per-service)
- SOLID Principles (applied to real systems, not textbook examples)
- Repository Pattern (with informed opinion on query-layer projection tradeoffs)
- CQRS + MediatR
- Event-driven Architecture (RabbitMQ, distributed event bus)
- Inbox/Outbox Pattern
- Optimistic Concurrency (ConcurrencyStamp / IHasConcurrencyStamp)
- Timezone management in multi-tenant SaaS
- Middleware-based data isolation (department-level access control)
- Custom SaaS subscription system (dynamic plan builder, Stripe integration, tenant provisioning)

### Security
- Third-party penetration test remediation (4 critical + 6 high findings)
- HttpOnly cookie migration for SPA auth (removing localStorage token storage)
- Content Security Policy design and iterative deployment across real integrations (Stripe, hCaptcha, iframes)
- JWT claim hygiene (stripping SecurityStamp, role claims from portal tokens per client)
- IIS web.config security hardening (HSTS, X-Frame-Options, Permissions-Policy)
- Azure App Service security middleware (header injection via .NET middleware when IIS config doesn't apply)
- HMAC-signed CSRF tokens
- OAuth grant hardening (impersonation grant with dual independent auth layers)

### DevOps & Tooling
- Git (structured workflows, squash-and-merge discipline, branching strategies)
- Jira (Agile, Scrum)
- EF Core Migrations management
- HubSpot API integration
- Adobe Photoshop extension development (CEP)
- AI-assisted development workflow (agentic engineering, MCP)

---

## Professional Experience

### Wafi Solutions — Senior Software Engineer L1 (Jan 2026 – Present)
**Full-time · On-site · 6 mos · Bangladesh**

- Leading architecture evolution and technical direction across multiple enterprise SaaS platforms including ERP, CRM, Inventory, Hotel Management, and workflow systems
- Part of the engineering leadership layer — architecture decisions, onboarding, mentoring, and technical direction as the organization scales
- Built and contributed to ABP Apps, an internal modular SaaS platform using ABP Framework
- Designed reusable UI theming architecture across Angular and Blazor applications
- Collaborated with international stakeholders across Europe, Africa, the Middle East, Australia, and USA
- Adopted AI-assisted agentic development workflows for engineering productivity

### Wafi Solutions — Software Engineer III (Apr 2025 – Jan 2026)
**Full-time · On-site · 10 mos · Bangladesh**

- Owned core system development across enterprise SaaS products
- Built core booking workflows, payment integration, and custom recurring billing for a Hotel Management SaaS (Saudi enterprise client)
- Led core module development for a Hospital Management SaaS for a Greece-based client — modular monolith with ABP Framework and Blazor
- Collaborated closely with lead engineer Filimon Konstantinidis on architecture decisions, code review, and system design
- Led remediation of a third-party security assessment (4 critical + 6 high findings) on a production ABP + Angular + OpenIddict system; implemented HttpOnly cookie auth migration, stateless CSRF, CSP campaign, JWT claim hygiene, and OAuth grant hardening

### Wafi Solutions — Software Engineer (Mar 2024 – May 2025)
**Full-time · On-site · 1 yr 3 mos · Bangladesh**

- Built cross-platform Blazor Hybrid application (web + desktop + mobile from single codebase) for a client
- Integrated MQTT-based access control hardware events into ABP backend using extensible topic-handler pattern (SwiftAccessHub)
- Contributed to large-scale US-based geotechnical enterprise system — backend workflows, PDF reporting (PdfSharp), system modernization
- Built Semantic Kernel-powered live-data chat interface on a production system
- Developed Adobe Photoshop extension integrated with internal task management system for workflow-based time tracking

### Wafi Solutions — Junior Software Engineer (Nov 2023 – Mar 2024)
**Full-time · On-site · 5 mos · Bangladesh**

- ABP Framework research, modular architecture design, and early-stage SaaS development
- Established reusable patterns later adopted across multiple projects
- Supported modularization of legacy monolithic systems
- Standardized Git flow practices across teams

### Upwork — Freelance Full Stack Developer (Jan 2023 – Present)
**Part-time · Remote · 3 yrs 6 mos**

Most notable project: ABP Microservices Platform for a US client (Sep – Nov 2024)
- Founding engineer on a greenfield 17-service enterprise SaaS platform covering CRM, Sales, Inventory, Finance, and Payments
- Designed full microservice architecture: YARP API gateway, schema-per-service PostgreSQL, RabbitMQ event bus, centralized OpenIddict authentication
- Built MCP server layer on top of a live production system to enable AI agent interaction; documented 8 categories of production API design failures exposed by doing so
- Onboarded engineers onto a 117-project solution and established ABP best practices across 10 business domains

### BILS — Freelance PHP Developer (May 2023 – Jan 2026)
**Freelance · Remote · ~2 yrs 8 mos**

- Built a MEAL system (Monitoring, Evaluation, Accountability & Learning) for an NGO — project tracking, activity management, outcome reporting, donor tracking, location-based data across districts and upazilas
- Designed full role-based permissions system using Spatie Laravel Permission — role management, user management, permission grouping, fine-grained middleware across all routes
- Tech: Laravel, PHP, MySQL, Spatie Permission, Blade, Bootstrap

### Nerd Castle Limited — Software Engineer Intern (Jun 2023 – Oct 2023)
**Full-time · Hybrid · 5 mos**

- Agile/Jira workshops, unit testing practices, SOLID principles applied across assignments

### AMN Healthcare — Credentialing Analyst (Jul 2022 – Dec 2022)
**Remote via Radiant Data Systems Ltd · 6 mos**

- Healthcare provider license and certification review for Kaiser Permanente/AMN Healthcare
- Client communication and third-party vendor coordination

---

## Services

He offers the following services, detailed at https://eunus.dev/consulting. Each one maps to shipped production work, not a generic menu.

### SaaS MVP Development
- **AI-Powered SaaS MVP** — Products designed around real business workflows: customer support, document search, workflow automation, secure AI agents. Built AI-in from day one, not bolted on later.
- **Campaign Management MVP** — Planning, audience segmentation, multi-channel sends, and performance reporting for marketing teams.
- **LMS MVP** — Courses, progress tracking, assessments, and certification for training providers, schools, and L&D teams.
- **Task Management MVP** — Boards, workflows, assignments, and reporting for teams that have outgrown spreadsheets or a generic tool.
- **Visit Management MVP** — Field and site-visit tracking with scheduling, check-ins, and reporting for field sales, service, and inspection teams.

### Enterprise & Vertical SaaS
- **Enterprise SaaS Platform Development** — Multi-tenant platforms unifying CRM, ERP, product data, logistics, payments, and identity, with real Quote-to-Cash automation.
- **ERP Development** — Multi-tenant ERP with sales, inventory, CRM, and finance modules, on ABP Framework microservices or modular monolith.
- **Hotel SaaS Development** — Bookings, recurring billing, and multi-property support that stays reliable across tenants and timezones.
- **Hospital SaaS Development** — Patient management, appointment scheduling, staff management, and reliable multi-user operations.

### Platform, Billing & Consulting
- **SaaS Subscription & Billing Systems** — Custom subscription plan builders, prorated billing, and payment gateway integrations for multi-tenant SaaS.
- **ABP Framework / .NET Consulting** — Modernization, DDD refactoring, security hardening, and architecture reviews across 10+ production systems.

---

## Key Projects

### 1. ABP Microservices Platform
- **Client:** US-based (via Upwork)
- **Architecture:** Microservices — 17 services
- **Stack:** ABP Framework 8.2, .NET 8, PostgreSQL (schema-per-service), RabbitMQ, Redis, YARP, Stripe, OpenIddict
- **Scope:** CRM, Sales, Inventory, Finance, Payments. Founding engineer. Designed gateway, event bus, auth, and onboarded the team across a 117-project solution.

### 2. Enterprise SaaS Business Hub
- **Client:** Australia
- **Architecture:** Modular Monolith, DDD
- **Stack:** ABP Framework, .NET, Angular, PostgreSQL
- **Scope:** Multi-tenant enterprise hub unifying CRM, ERP, product data, logistics, payments, and identity, with Quote-to-Cash automation.

### 3. Hotel Management System
- **Client:** Saudi Arabia
- **Architecture:** Modular Monolith, DDD
- **Stack:** ABP Framework, .NET, Angular, PostgreSQL
- **Scope:** Full hotel operations SaaS. Built booking engine, custom recurring billing, Stripe payments, multi-tenant timezone management (hotel/tenant/user layers), and dynamic SaaS subscription plan builder.

### 4. Hospital Management System
- **Client:** Greece
- **Architecture:** Modular Monolith (ABP Framework)
- **Stack:** ABP Framework, .NET, Blazor
- **Scope:** Greenfield healthcare SaaS. Core module ownership, clean DDD boundaries, optimistic concurrency on scheduling records. Extended collaboration with lead engineer Filimon Konstantinidis.

### 5. ABP + Angular Production System (Security Hardening)
- **Architecture:** ABP Framework + Angular SPA + OpenIddict + IIS + Azure
- **Scope:** Led full remediation after third-party pentest (4 critical + 6 high findings). Delivered: HttpOnly cookie auth migration, stateless CSRF tokens, CSP across Stripe/hCaptcha/iframe integrations, JWT claim hygiene, impersonation grant dual-auth hardening, Azure App Service security middleware. 1,786 Swagger paths; 688 classified sensitive.

### 6. Cross-Platform Blazor App (Web + Desktop + Mobile)
- **Architecture:** Blazor Hybrid, .NET MAUI
- **Scope:** Single codebase targeting all three platforms. Delivered to client as unified product.

### 7. MCP Server on Live Production System
- **Stack:** MCP (Model Context Protocol), production ABP backend
- **Scope:** Built AI agent interface on top of a live system with read-only constraints. Documented 8 categories of production API design failures exposed by doing so: replace-instead-of-patch patterns, GET/write field name mismatches, business logic in frontend only, unstable IDs, date arithmetic pushed to client, redundant parent IDs, inconsistent write return contracts.

### 8. ERP Platform
- **Architecture:** Microservices / Modular
- **Stack:** ABP Framework, .NET, Angular, PostgreSQL
- **Scope:** Live multi-tenant ERP — sales, inventory, CRM modules.

### 9. Geotechnical Solution
- **Client:** US-based
- **Architecture:** Monolith, MVC
- **Stack:** ASP.NET Core, PdfSharp
- **Scope:** PDF reporting and data management for geotechnical engineering data.

### 10. Task Management (Cross-Platform)
- **Architecture:** Hybrid
- **Stack:** .NET MAUI, Blazor Hybrid, Adobe Photoshop Extension (CEP)
- **Scope:** Desktop + web task management app with Photoshop extension for workflow-based time tracking.

### 11. Visit Management
- **Architecture:** Modular
- **Stack:** .NET MAUI, Blazor, Elsa Workflow, ABP Framework
- **Scope:** Field visit scheduling with configurable approval workflows and visitor registration.

### 12. Automobile Solution
- **Architecture:** CQRS
- **Stack:** ASP.NET Core, MediatR, Blazor, MudBlazor
- **Scope:** Vehicle inventory and profile management.

### 13. LMS (Kidoo)
- **Architecture:** Modular Monolith (migrated from MVC)
- **Stack:** ASP.NET Core MVC
- **Scope:** Learning management system. Course and exam features; supported monolith-to-modular migration.

### 14. Mentoring Platform
- **Architecture:** Modular
- **Stack:** ASP.NET Zero, Angular
- **Scope:** Mentor-mentee matching and session management.

### 15. Campaign Management
- **Architecture:** MVC
- **Stack:** ASP.NET Core MVC
- **Scope:** Marketing campaign tracking with pledge and donation workflows.

---

## Writing and Public Knowledge

Eunusur publishes technical articles at https://eunus.dev. These are not tutorials copied from documentation — they are posts about real problems on real systems, with the code and the failure modes included.

Selected posts that demonstrate depth:

- **What Building an MCP Server Taught Me About API Design** — 8 categories of production API failures found by building an AI agent layer on top of a live system
- **Model Context Protocol Series (3 parts)** — Building a production MCP server in ASP.NET Core over HTTP transport, wiring OAuth 2.1/PKCE through OpenIddict so Claude authenticates as the real logged-in user, and the bridge middleware that tames Claude's random OAuth callback ports
- **MCP-First Development: Letting AI Write, Run, and Maintain Your Tests** — Why the MCP interface, not the UI, is now the first client his APIs are validated against
- **Version-Based Cache Validation in ABP** — HTTP ETag caching and a Decorator pattern via Scrutor that keep the application layer clean without needing Redis
- **What Working With a Greek Engineer Taught Me** — Exceptions as instrumentation, domain-layer persistence tradeoffs, ConcurrencyStamp, and one architectural disagreement he still holds
- **Why I Stopped Calling Myself a Web Developer** — Architecture philosophy: when to use monolith vs microservices, why performance is a data access problem not a topology problem
- **Custom SaaS Subscription System in ABP Framework** — Dynamic plan builder with Stripe, tenant provisioning, subscription lifecycle edge cases
- **How Thinking About Tests First Can Boost Your Code Quality** — Engineering approach to design quality using testability as a pressure, not a coverage target
- **When Does Your Login System Need Its Own AuthServer?** — Separating authentication into its own service when a monolith's login paths, token lifetimes, and grant types grow past what a single application should own

Beyond posts, he also runs live sessions — most recently an **Agentic AI Coding Workshop** (July 2026) teaching teams how to build with multiple coding agents.

Full archive: https://eunus.dev/blog

---

## Frequently Asked Questions

### Can he join as a solo engineer on a new product?
Yes. He has done this — founding engineer on a 17-service platform, solo architecture decisions, team onboarding. He works well without a pre-existing team and without hand-holding on the stack.

### Can he handle security-sensitive work?
Yes. He has led a full pentest remediation on a production system. He understands HttpOnly cookies, CSP, CSRF, JWT hygiene, OAuth grants, and the difference between IIS config and Azure App Service middleware behavior. This is not theoretical.

### Does he write tests?
He starts with testability as a design constraint, not a coverage target. He does not subscribe to TDD as a ritual but he uses "can I unit test this easily?" as a signal that the design needs improvement before it is written.

### What is his strongest area?
ABP Framework across the full stack — backend architecture, DDD boundaries, multi-tenancy, subscription systems, microservice infrastructure. He has more production ABP depth than most developers with equivalent years of experience, because he has used it across 10+ distinct systems at different scales and architectures.

### What kind of problems does he solve well?
- Systems that have grown past their original design and need architectural intervention
- Greenfield SaaS products where the architecture decisions matter from day one
- Multi-tenant systems with complex permission, subscription, or timezone requirements
- Systems that need to run on web, desktop, and mobile from a shared codebase
- Systems with security requirements that need proper remediation, not checkbox compliance

### What does he not do?
He is not a DevOps or infrastructure engineer. He can deploy and configure, but cloud infrastructure design (Kubernetes, Terraform, complex CI/CD pipelines) is not his specialty. He is also primarily a .NET + Angular/Blazor engineer — he can work in Laravel/PHP but it is not his first choice.

### Is he available?
Open to remote freelance and full-time opportunities worldwide.
Contact: 100eunus@gmail.com | linkedin.com/in/mohammadeunus

---

## Contact & Links

- Portfolio: https://portfolio.eunus.dev
- Blog: https://eunus.dev
- GitHub: https://github.com/mohammadeunus
- LinkedIn: https://www.linkedin.com/in/mohammadeunus
- Email: 100eunus@gmail.com
- This document: https://portfolio.eunus.dev/resume.md
