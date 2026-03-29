# 💼 Portfolio — Business Consultant | AI & Automation Strategy 

A modern **React + TypeScript** portfolio for **Federico Mosqueira** — Business Consultant | AI & Automation Strategist specializing in **AI, automation, and low-code solutions**.  
The site showcases packaged services, methodology, and an embedded resume, with a clean UX optimized for **non-technical, B2B stakeholders**.

---

## 🎯 Project Goals

- Present a clear value proposition focused on **AI, automation, and low-code**.  
- Offer **packaged, ready-to-run services** and **sector-specific solutions**.  
- Demonstrate credibility through **methodology, testimonials, and FAQs**.  
- Provide a **resume mini-app** under `/resume` for quick professional context.

---

## ⚙️ Features & Tech Stack

- **React 19 + TypeScript**, **Vite 6** for fast developer experience.  
- **Tailwind CSS 4** (via CDN) for utility-first styling.  
- **Client-side routing** with `react-router-dom`.  
- **Modular components and pages**, including a dedicated resume mini-app.  
- **Simple build pipeline** and preview scripts.

---

## 🧩 Core Sections

### 🦸 Hero (`components/Hero.tsx`)
> Headline: “**Bridging AI’s potential to your business’s success.**”  
> Includes CTAs to services and resume, plus profile image.

### 💼 Services (`components/Services.tsx`)
Packaged offerings such as:
- Prototype Sprint  
- Citizen-Developer Training  
- Sector Packs  
Each highlighting **clear benefits and outcomes**.

### 🙋 About (`components/AboutMe.tsx`)
> “Meet Federico Mosqueira” — background, representative imagery, experience highlights, and consulting approach.

### 💬 Testimonials (`components/Testimonials.tsx`)
Rotating **quotes carousel** for **social proof**.

### ❓ FAQ (`components/Faq.tsx`)
Expandable Q&A covering:
- Timeline  
- ROI  
- GDPR  
- Adoption  
- Pricing models

---

## 📚 Additional Content

- **Methodology** → `components/Experience.tsx`: Step-by-step delivery workflow.  
- **Services listing & detail routes** → `pages/main-services`.  
- **Resume mini-app** → `/resume` (`resume/App.tsx`).

---

## 🗂️ Project Structure

.
├─ App.tsx
├─ index.html
├─ index.tsx
├─ package.json
├─ tsconfig.json
├─ vite.config.ts
├─ components/
│ ├─ Header.tsx
│ ├─ Hero.tsx
│ ├─ Services.tsx
│ ├─ AboutMe.tsx
│ ├─ Projects.tsx
│ ├─ Testimonials.tsx
│ ├─ Faq.tsx
│ ├─ ScrollToTop.tsx
│ ├─ icons/
│ └─ services/
│ ├─ BlockItem.tsx
│ ├─ ServiceList.tsx
│ ├─ ServicesHero.tsx
│ └─ Timeline.tsx
├─ pages/
│ ├─ HomePage.tsx
│ └─ main-services/
│ ├─ ServicesPage.tsx
│ └─ ServiceDetailPage.tsx
├─ resume/
│ ├─ App.tsx
│ ├─ constants.ts
│ ├─ components/...
│ └─ metadata.json
├─ public/
│ ├─ profile_pic.png
│ ├─ me_office_1.png
│ ├─ me_workshop_1.jpg
│ └─ me_workshop_2.png
└─ docs/
├─ Perfil_Profesional/
├─ Propuesta_de_Valor/
├─ Services/
├─ Stack_de_Herramientas/
├─ Workflow_and_Methodology/
├─ Plan_Comercial/
└─ Sitemap/



🗺 **Content sitemap:** `docs/Sitemap/____Portfolio_Structure_Sitemap__Real_Content.json`

---

## 🌐 Routes

| Route | Description |
|-------|--------------|
| `/` | Home (Hero, Services, Methodology, About, Testimonials, FAQ) |
| `/services` | Services catalog |
| `/services/:slug` | Service details (e.g. `ai-agents`, `ai-marketing-factory`, `ai-microapps`, `custom-copilots-and-assistants`, `google-workspace-admin`, `real-time-ai-avatars`) |
| `/resume/*` | Embedded resume mini-app |

---

## 🧰 Installation & Usage

### Prerequisites
- **Node.js 18+**

## 📖 Documentation (Reference)

| 🗂️ Section | 📁 Path |
|-------------|----------|
| **Perfil Profesional** | `docs/Perfil_Profesional/Perfil_Profesional__Documento_Maestro.md` |
| **Propuesta de Valor** | `docs/Propuesta_de_Valor/Propuesta_de_Valor__Documento_Maestro.md` |
| **Servicios (Blueprints)** | `docs/Services/Blueprints/Servicios__Documento_Maestro.md` |
| **Service Briefs** | `docs/Services/*.md` |
| **Stack de Herramientas** | `docs/Stack_de_Herramientas/Stack_de_Herramientas__Documento_Maestro.md` |
| **Workflow & Methodology** | `docs/Workflow_and_Methodology/Workflow_and_Methodology__Documento_Maestro.md` |
| **Plan Comercial** | `docs/Plan_Comercial/Plan_Comercial__Documento_Maestro.md` |
| **Project Sitemap** | `docs/Sitemap/portfoilio_sitemap.json` |
| **Content Sitemap** | `docs/Sitemap/____Portfolio_Structure_Sitemap__Real_Content.json` |

---

## 👤 Author

**Federico Mosqueira** — *Business Consultant | AI & Automation Strategy*  
📍 Based in **Antwerp, Belgium**  
💡 Focus: **AI**, **automation**, **low-code for non-technical teams**

---

## 📜 License

**License:** TBD  
> Add your preferred license terms here.

---

## 📬 Contact

- **Email:** [hello@federicomosqueira.site](mailto:hello@federicomosqueira.site)  
- **Website:** *(optional)*  
- **Book a discovery call:** *(link to calendar or contact form)*  