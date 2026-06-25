# Claude Changes Log

All changes made by Claude across sessions.

---

## 2026-06-25

### Certificate Images & Verification — All from PDF certificates in `/certificates/` folder

#### 1. Factual Fixes from Certificates (`src/pages/Certifications.tsx`, `src/pages/Facilities.tsx`, `src/pages/About.tsx`)
- **NABL validity**: `"Valid until 24/04/2026"` → `"Valid until 24/04/2030"` (cert TC-15118 issued 25/04/2026)
- **NABL feature**: `"Valid until April 2026"` → `"Valid until April 2030"`
- **IAS effective date**: `"Effective since 2023"` → `"Effective December 17, 2025"` (cert TL-1015)
- **IAS feature**: `"Effective since 2023"` → `"Effective December 2025"`
- **IEC code**: `"BRTPM9840F"` → `"AALCC9227D"` (new IEC cert issued 24/04/2025 under Pvt. Ltd.)
- **IEC validity**: `"Issued 10/09/2019"` → `"Issued 24/04/2025"` + feature `"Active since 2019"` → `"Active since 2025"`
- **Facilities incorporation stat**: `"2022"` → `"2024"` (`Facilities.tsx` — confirmed 11/06/2024 by Company Registration cert)
- **About timeline**: `year: "2022", title: "Incorporation"` → `title: "NABL Accreditation"` (2022 was NABL year, not incorporation)
- **About timeline**: `year: "2024", title: "Global Reach"` → `title: "Incorporation & Global Reach"` (Pvt. Ltd. incorporated 2024)

#### 2. Certificate Images Updated (`src/assets/`)
- `cert-nabl.png` — replaced with new NABL TC-15118 cert (valid 2030)
- `cert-ias.png` — new file, IAS TL-1015 effective December 2025
- `cert-ccsea.png` — new file, CCSEA name change approval letter (07.11.2024)
- `cert-msme.png` — replaced with Udyam cert under "CRYST BIO SOLUTIONS PRIVATE LIMITED"
- `cert-iec.png` — replaced with new IEC AALCC9227D cert (24/04/2025)
- `cert-incorporation.png` — ⏳ still old, replacement not yet provided

#### 3. Certifications.tsx — Import Split (`src/pages/Certifications.tsx`)
- Removed shared `certIasCpcsea` import
- Added `import certIas from "@/assets/cert-ias.png"`
- Added `import certCcsea from "@/assets/cert-ccsea.png"`
- IAS card: `image` → `certIas`
- CCSEA card: `image` → `certCcsea`

---

## 2026-06-24

### Homepage — Branding & Display (Client Review Changes)

#### 1. Logo Visibility & Resolution — `src/components/CertLogoSlider.tsx`
- Removed `invert dark:invert-0` filter — was inverting logos in light mode, making them invisible
- Removed `opacity-80` — logos now full opacity
- Changed container bg from `bg-white/10` (transparent) → `bg-white dark:bg-white/95` (solid white card)
- Added stronger border: `border-gray-200 dark:border-gray-300/30`
- Upgraded shadow: `shadow-md hover:shadow-xl`

#### 2. Logo Alignment & Spacing — `src/components/CertLogoSlider.tsx`
- Container size: `w-36 md:w-44 h-24 md:h-28` → `w-44 md:w-52 h-28 md:h-32` (larger)
- Gap: `gap-12 md:gap-16` → `gap-8 md:gap-12` (balanced)
- Animation duration: 30s → 35s (easier to read)
- Padding: `px-4 py-3` → `px-5 py-4`

#### 3. USA References Removed — `src/data/servicesData.ts`
- Line 107 overview: removed `US EPA` from guideline list
- Line 109 (Acute Oral Toxicity guidelines): removed `"EPA OPPTS 870.1100"`
- Line 110 (Acute Dermal Toxicity guidelines): removed `"EPA OPPTS 870.1200"`
- Line 123 standards array: removed `"US EPA OPPTS"`

#### 4. "20+" Count
- Not found in codebase — already clean, no change needed

---

### Company Name Standardization — Audit

**Target:** `Cryst Bio Solutions Pvt. Ltd.`

**Result:** Already consistent across entire codebase. No changes needed.

**Checked files:** all `src/**/*.tsx`, `src/**/*.ts`, `index.html`, `README.md`, `src/data/`

**Acceptable short forms left intentionally:**
- `label="Why Cryst Bio"` (`src/pages/Home.tsx:442`) — UI nav label, space constraint
- Testimonials client quote strings (`src/pages/Testimonials.tsx`) — simulated first-person client speech

---

### Content Corrections & Accreditation Updates

#### 1. "Laboratories" → "Laboratory" — `src/pages/Certifications.tsx:20`
- NABL desc: "Testing and Calibration Laboratories" → "Testing and Calibration Laboratory"

#### 2. ISO → GLP Compliance (where required)
- `src/data/faqData.ts:18`: "ISO 9001:2015 quality management systems" → "GLP compliance principles"
- Also updated "CPCSEA approved" → "CCSEA approved" in same FAQ answer
- `src/pages/Facilities.tsx:39`: `"ISO 17025"` badge → `"GLP Compliant"` (NABL badge already covers 17025)
- `src/pages/Testimonials.tsx:938`: `"ISO/IEC 17025:2017"` badge in array → `"GLP Compliant"`

#### 3. Accreditation References — CCSEA, IAS Accredited, Global CRO
- `src/components/SEOManager.tsx:185`: `"IAS Accreditation"` → `"IAS Accredited"` (consistent label)
- All badge arrays verified to include CCSEA, IAS Accredited, Global CRO
- ISO 10993 and ISO/IEC 17025:2017 kept where tied to specific factual NABL/IAS standards

---

### Research Capability Reordering — ⚠️ PENDING CLIENT CONFIRMATION

**Requested order:**
1. Medical Devices
2. Pesticides
3. Biopesticides
4. Nutraceuticals
5. Packaging
6. Educational Research

**Status: BLOCKED — needs client clarification before any code changes.**

**Current services in codebase:**
1. Agrochemical Testing (`slug: agrochemical-testing`)
2. Biocompatibility Testing (`slug: biocompatibility-testing`)
3. Toxicology Testing (`slug: toxicology-testing`)
4. Research Projects (`slug: research-projects`)
5. Histopathology & Clinical Pathology (`slug: histopathology-clinical-pathology`)
6. Microbiology Services (`slug: microbiology-services`)

**Questions for client:**
- Q1: Are the 6 new names **replacements** for the existing 6 service titles, or a **new separate section**?
- Q2: If replacements — what is the mapping? (e.g. "Medical Devices" = "Biocompatibility Testing"?)
- Q3: "Biopesticides", "Nutraceuticals", "Packaging", "Educational Research" have no existing counterparts — are these **new service pages** to be built from scratch?
- Q4: Renaming slugs will **break existing URLs** — confirm if that is acceptable or if redirects are needed.

---

### UI Improvements

#### 1. Spacing Reduction (Global)
- `src/index.css:131` `.section-padding`: `py-20 md:py-28` → `py-14 md:py-20` (affects every section site-wide)
- `src/components/WhyPartner.tsx:67`: `space-y-40 md:space-y-56` → `space-y-24 md:space-y-32`
- `src/pages/Home.tsx:195` (Counter Strip): `py-24 md:py-32` → `py-16 md:py-24`
- `src/pages/Home.tsx:501` (Certifications): `py-24` → `py-16`

#### 2. Content Readability — Acute Oral & Acute Dermal (`src/data/servicesData.ts`)
- **Acute Oral Toxicity (LD50)**: Expanded from 1 bare sentence to full clinical description — species, method name, observation endpoints, study duration, guideline full names
- **Acute Dermal Toxicity**: Expanded from 1 vague sentence to full clinical description — application method, skin prep, observation period, necropsy endpoints, guideline reference

#### 3. Image Replacement — ⚠️ PENDING CLIENT INPUT
- `sub-agro-oral-toxicity.jpg` and `sub-agro-dermal-toxicity.jpg` flagged as unclear/unreliable
- Cannot replace without client-supplied image files
- **Action required:** Client to provide replacement images for these two sub-services

---

### Why Choose Us — Accreditation Updates

#### `src/pages/About.tsx` — Global Standards keyPoints (drives About + Testimonials pages)
Replaced ISO 17025 reference with three specific accreditation items:
- `"NABL-accredited laboratory under ISO/IEC 17025:2017"` → `"GLP Compliance — documented quality systems for all preclinical studies"`
- `"Full compliance with ISO 10993, OECD, FDA, ASTM & USP"` → `"CCSEA Norms — full adherence to animal welfare and ethical regulations"`
- `"Regular third-party audits and quality assurance checks"` → `"IAEC Approval — institutional ethics committee clearance for each study protocol"`

#### `src/pages/ServiceDetail.tsx:260` — "Why Choose Us for {service}" bullet list
- `"Internationally recognized certifications"` → `"CCSEA Norms and IAEC Approval for all in-vivo studies"`

---

### Content Cleanup

#### 1. Duplicate Accreditation Removed — `src/pages/Home.tsx`
- Removed `"CPCSEA Certified Animal Facility"` from `aboutFeatures` — CPCSEA is old name for CCSEA; merged into `"CCSEA Certified Animal Facility"`

#### 2. "Nationally & Internationally" Wording
- `src/pages/Certifications.tsx:26`: `"Nationally recognized"` → `"Nationally & Internationally recognised"`
- `src/pages/Home.tsx:187` (hero desc): `"toxicology testing & preclinical research...international standards"` → `"preclinical research and testing...national & international standards"`
- `src/pages/Home.tsx:259` (about text): updated to include "nationally & internationally recognised"
- `src/pages/About.tsx:114` (Vision): added "nationally & internationally"

#### 3. Repeated Toxicology References Removed
- `src/pages/Home.tsx:187`: removed "toxicology testing &" from hero description
- `src/pages/Home.tsx:259`: removed "Toxicology Testing and" from about paragraph (services section already shows it)
- `src/pages/About.tsx:302`: removed "Toxicology Testing and" from about paragraph
- `src/pages/About.tsx:93` (Mission): removed "toxicology," — toxicology is a subset of preclinical research
- `src/pages/About.tsx:114` (Vision): removed "toxicology," — same rationale

#### 4. Repeated Agrochemical References Removed
- `src/pages/Home.tsx:63` service card desc: removed "agrochemical" from description — title already says "Agrochemical Testing"

---

### Featured Projects — Biocompatibility Testing Cleanup (`src/data/servicesData.ts`)

Removed USP references and guidance document references from Biocompatibility Testing section:

- **Cytotoxicity Testing guidelines**: removed `"USP <87>"`
- **Acute Systemic Toxicity guidelines**: removed `"USP <88>"`
- **standards array**: removed `"USP <87> & <88>"` and `"FDA Guidance Documents"`

Remaining standards: `["ISO 10993 Series", "EU MDR 2017/745", "ASTM Standards"]`

---

### FDA Section — Remove Unnecessary FDA-Only Guidance Content

Removed standalone FDA-only references. Combined refs (OECD & FDA, GLP/OECD/FDA/ASTM) retained as contextual.

- `src/data/servicesData.ts` toxicology standards: removed `"FDA 21 CFR"`
- `src/data/servicesData.ts` research projects standards: removed `"FDA Guidance"`
- `src/pages/Certifications.tsx` standards list: removed `"FDA Standards"`
- `src/components/WhyPartner.tsx:34`: `"FDA-aligned protocols"` → `"OECD & CDSCO aligned protocols"`
- `src/pages/About.tsx:219` badges array: removed standalone `"FDA"` badge

---

### Irritation Studies — Content Correction & ISO Verification (`src/data/servicesData.ts`)

**"Irritation & Intracutaneous Reactivity"** sub-service (Biocompatibility Testing):

- **ISO error fixed**: Removed `"ISO 10993-10"` from guidelines — ISO 10993-10:2021 covers sensitization only, not irritation. Kept `"ISO 10993-23"` (Tests for irritation — correct standard).
- **Subcutaneous content corrected**: Description now explicitly covers intracutaneous AND subcutaneous injection routes, matching the actual ISO 10993-23 intracutaneous reactivity test procedure.
- **Endpoints added**: Description now lists all three endpoints covered — intracutaneous reactivity, primary skin irritation, ocular irritation.

Note: ISO 10993-10 on "Sensitization Testing" (line 137) left intact — correct there.

---

### Genotoxicity Testing — Additions (`src/data/servicesData.ts`)

**Bone Marrow Micronucleus Assay** added to both genotoxicity entries:
- **Biocompatibility "Genotoxicity Testing"**: description now explicitly names "Bone Marrow Micronucleus Assay (in-vivo erythrocyte micronucleus test in rodents)"; also added "clastogenic potential" endpoint. Guidelines unchanged (`ISO 10993-3`, `OECD 474` already covered it).
- **Toxicology "Genotoxicity Battery"**: description updated to name "Bone Marrow Micronucleus Assay" explicitly and reference full ICH S2(R1) standard battery.

**Brain Implant Study** — placed under Implantation Studies (ISO 10993-6), not genotoxicity (correct placement):
- "Implantation Studies" description now includes "intracranial (brain)" as implantation site
- Added note: "Brain Implant Studies available for applicable neural and neurostimulation devices" — reflects "(if applicable)" qualifier from client

---

### Hemocompatibility — Full Section Revision (`src/data/servicesData.ts`)

**Sub-service revised** ("Hemocompatibility Testing"):
- Old: bare 1-sentence description (haemolysis, thrombogenicity, complement activation)
- New: full ISO 10993-4 coverage — haemolysis (direct/indirect), thrombogenicity (platelet activation, coagulation cascade, thrombus formation), complement activation (CH50, alternative pathway), leukocyte activation; lists device categories (cardiovascular implants, extracorporeal circuits, intravascular catheters, blood storage)

**Project example replaced**:
- Removed: `"Surgical Mesh Evaluation"` (implantable, not blood-contacting — wrong category)
- Added: `"Intravascular Catheter Hemocompatibility"` (cardiovascular device, full ISO 10993-4 package — correct fit)

---

### Toxicology Section — Duplicate Slides/Pages Cleanup (`src/data/servicesData.ts`)

**Audit result:** No separate sub-service cards exist for Ames Test, Micronucleus, Biocompatibility, or Histopathology within the Toxicology section. Current state was already consolidated:
- **Ames Test + Micronucleus** → merged into single "Genotoxicity Battery" sub-service card (one card, not two)
- **Biocompatibility** → separate top-level service (`slug: biocompatibility-testing`), not duplicated in Toxicology
- **Histopathology** → separate top-level service (`slug: histopathology-clinical-pathology`), only mentioned as a study endpoint in Repeated-Dose Toxicity description (scientifically required — not a duplicate page)

**Changes made to remove duplication impression:**
- `shortDesc`: removed "FDA" reference; replaced "genotoxicity, and carcinogenicity studies" enumeration with broader scope description covering all 8 sub-services
  - Old: `"...OECD and FDA guidelines including acute, sub-acute, chronic toxicity, genotoxicity, and carcinogenicity studies."`
  - New: `"...OECD and ICH guidelines including acute, sub-acute, chronic, reproductive, and safety pharmacology studies."`
- `features` array: removed `"FDA Compliance"` (standalone FDA — removed per earlier FDA cleanup), `"Genotoxicity"`, `"Carcinogenicity"` (these are sub-services, not feature-level tags; listing them implied separate standalone pages)
  - Old: `["OECD Guidelines", "FDA Compliance", "Genotoxicity", "Carcinogenicity"]`
  - New: `["OECD Guidelines", "GLP Compliance", "ICH Guidelines", "CDSCO Compliant"]`

---

### Guideline Updates — Acute Toxicity, Chronic Toxicity, Genotoxicity (`src/data/servicesData.ts`)

**Acute Oral Toxicity (Agrochemical):**
- Added OECD 420 (Fixed Dose Procedure) to guidelines; description updated to name all three methods
- `["OECD 423", "OECD 425"]` → `["OECD 420", "OECD 423", "OECD 425"]`

**Single-Dose Acute Toxicity (Toxicology):**
- OECD 401 withdrawn 2002 — replaced with current oral, dermal, inhalation guidelines per route
- `["OECD 401–403", "ICH M3(R2)"]` → `["OECD 420/423/425", "OECD 402", "OECD 403/433/436", "ICH M3(R2)"]`

**Acute Inhalation Toxicity (Agrochemical):**
- Added OECD 433 (Fixed Concentration Procedure, 2018)
- `["OECD 403", "OECD 436"]` → `["OECD 403", "OECD 433", "OECD 436"]`

**Chronic Toxicity & Carcinogenicity (Toxicology):**
- Expanded ICH carcinogenicity guidelines: split S1A/S1B, added S1B(R1) and S1C(R2)
- `["OECD 451/452/453", "ICH S1A/S1B"]` → `["OECD 451/452/453", "ICH S1A", "ICH S1B(R1)", "ICH S1C(R2)"]`

**Genotoxicity Battery (Toxicology):**
- Description revised to ICH S2(R1) standard battery terminology; HPRT gene mutation assay (OECD 476) added explicitly
- Added extended battery mention
- `["OECD 471/473/474", "ICH S2(R1)"]` → `["OECD 471", "OECD 473", "OECD 474", "OECD 476", "ICH S2(R1)"]`

**Reproductive & Developmental Toxicity (Toxicology):**
- Updated to ICH S5(R3) study type nomenclature (FEED, EFD, PPND); added OECD 421, 422, 443
- `["ICH S5(R3)", "OECD 414/416"]` → `["ICH S5(R3)", "OECD 414", "OECD 421", "OECD 422", "OECD 443"]`

**Safety Pharmacology + Toxicokinetics / ADME** — removed from Toxicology sub-services per client request.

---

### Toxicology Projects & Scope Cleanup (`src/data/servicesData.ts`)

- **NCE Preclinical Package** scope: removed "safety pharmacology" (sub-service removed)
- **Industrial Chemical REACH Dossier** → replaced with **Biosimilar Preclinical Toxicology** (Biosimilar Developer, CDSCO context)
- **Cosmetic Ingredient Safety** → replaced with **Herbal Medicine Safety Dossier** (Ayurvedic Drug Manufacturer, Schedule Y)
- **Toxicology standards**: removed "EU REACH", replaced with "CDSCO Guidelines"

---

### Research Projects Section — Sub-Service Cleanup (`src/data/servicesData.ts`)

Removed 4 sub-services per client instruction:
- "Formulation Development Support"
- "Bioanalytical Method Development"
- "Regulatory Submission Support"
- "Academic & Grant-Funded Research" (= "Research Topics")

Remaining Research sub-services (4):
1. Custom Study Design & Protocol Development
2. Pilot / Dose Range-Finding Studies
3. Efficacy & Pharmacology Models
4. PK/PD Studies

### ⚠️ PENDING — Research Section Content from CAF Website

Client instruction: "use content directly from CAF Website and Approved Research Topic Source."

**Cannot action without client-provided content.** No access to the CAF (Cryst Bio Animal Facility) website or approved research topic document.

**Action required:** Client to provide:
- URL or exported content from CAF website
- List of approved research topics to display
- Any replacement sub-service descriptions from that source

---

### Histopathology Section Cleanup (`src/data/servicesData.ts`)

**Removed sub-service:**
- "Digital Pathology & Image Analysis" — removed per client instruction (keep histopathology only)

**Hematology Analysis — DLC removed:**
- Description: removed "differential leukocyte count" 
- Guidelines: `["CBC", "DLC", "PT/APTT"]` → `["CBC", "PT/APTT"]`

Remaining Histopathology sub-services (7):
1. Tissue Processing & Embedding
2. Sectioning & Staining
3. Immunohistochemistry (IHC)
4. Microscopic Examination & Peer Review
5. Hematology Analysis
6. Clinical Chemistry
7. Urinalysis

---

### Toxicology shortDesc Correction

After removing Safety Pharmacology sub-service, the `shortDesc` incorrectly still referenced "safety pharmacology studies." Fixed:
- Old: `"...acute, sub-acute, chronic, reproductive, and safety pharmacology studies."`
- New: `"...acute, sub-acute, chronic, genotoxicity, and reproductive toxicity studies."`

---

### Histopathology Standards Cleanup (`src/data/servicesData.ts`)

Removed inappropriate/aspirational standards from Histopathology `standards` array:
- Removed: `"ASCP Guidelines"` — American Society for Clinical Pathology (US-only professional body, not held)
- Removed: `"ISO 15189"` — Medical lab quality standard (not an accreditation Cryst Bio holds)
- Removed: `"INHAND Nomenclature"` — internal pathology nomenclature system, excessive detail for client-facing list
- Added: `"OECD Guidelines"` — internationally relevant, consistent with other service pages
- Old: `["GLP Standards", "ASCP Guidelines", "STP Best Practices", "INHAND Nomenclature", "ISO 15189"]`
- New: `["GLP Standards", "STP Best Practices", "OECD Guidelines"]`

---

### Microbiology Section Overhaul (`src/data/servicesData.ts` + `src/pages/ServiceDetail.tsx`)

**ServiceDetail.tsx — conditional Overview section:**
- Wrapped entire `{/* Overview */}` `<section>` in `{service.overview && (...)}` — section hidden when `overview` is empty string. Applies to any service.

**Microbiology data changes:**
- `overview`: cleared to `""` — hides "About This Service" introduction + guideline tags section
- `shortDesc`: replaced "environmental monitoring" with "bioburden determination"
- `features`: replaced `"Environmental Monitoring"` with `"Bioburden Testing"`
- Removed sub-service: `"Environmental Monitoring"` (guidelines: ISO 14644, EU GMP Annex 1)
- Removed sub-service: `"Water Testing"` (guidelines: USP <1231>, WHO Guidelines)
- `standards`: removed `"ISO 14644"` (cleanroom/environmental standard — no longer relevant)

Remaining Microbiology sub-services (6): Sterility Testing, Bacterial Endotoxin (LAL), Microbial Limit Testing, Antimicrobial Effectiveness, Disinfectant Efficacy, Bioburden Testing.

---

### Case Studies Section Revision (`src/pages/ServiceDetail.tsx`)

Updated "Featured Projects" section description to reference company credentials:
- Old: `"Selected examples of how we've helped clients achieve their research and regulatory objectives."`
- New: `"Selected studies executed at Cryst Bio Solutions Pvt. Ltd. under NABL-accredited and IAS-accredited conditions, meeting global standards for regulatory acceptance."`

---

### Process Steps Update (`src/pages/Home.tsx`)

Updated all 4 `processSteps` descriptions:

| Step | Old desc | New desc |
|------|----------|----------|
| 01 Consultation | "Discuss your research needs..." | Added "Cryst Bio Solutions Pvt. Ltd." |
| 02 Study Design | "...OECD, **FDA**, GLP & USP guidelines" | Replaced FDA with ICH; added "global standards" |
| 03 Execution | "...**CPCSEA-certified**, NABL-accredited..." | "CPCSEA-certified" → "NABL-accredited and IAS-accredited" + "CCSEA-approved" |
| 04 Reporting | "...delivered on time." | Added "for national and international submission" |

---

### CPCSEA → CCSEA Global Audit

CPCSEA (old name) → CCSEA (current name) standardised across all files.

**`src/pages/Testimonials.tsx`**
- Line ~935: `"CPCSEA-approved"` → `"CCSEA-approved"` (inline text)
- Line ~938 badge array: removed `"CPCSEA Approved"` → `["NABL Accredited", "CCSEA", "GLP Compliant", "IAS Accredited", "Global CRO"]`
- Line ~1011 badge array: removed `"CPCSEA Certified"` → `["NABL Accredited", "CCSEA", "ISO 10993", "OECD Compliant", "IAS Accredited", "Global CRO"]`

**`src/pages/Contact.tsx`**
- Line ~696 badge array: removed `"CPCSEA"` → `["NABL", "CCSEA", "ISO 10993", "IAS Accredited", "OECD", "Global CRO"]`

**`src/components/Footer.tsx`**
- Line ~35 accreditations array: removed `"CPCSEA"` → `["NABL", "IAS Accredited", "CCSEA", "MSME", "IEC", "Global CRO"]`

**`src/pages/Facilities.tsx`**
- All 5 remaining "CPCSEA" occurrences in Animal Facility section → "CCSEA"

---

### ISO 17025 / NABL / ISO 9001 Review (`src/pages/Certifications.tsx` + `src/data/faqData.ts`)

- Verified NABL accreditation number TC-15118 under ISO/IEC 17025:2017
- Verified IAS accreditation number TL-1015 under ISO/IEC 17025:2017
- Both are real credentials — retained as-is
- ISO 9001 references: kept where factually supported; no fabricated cert numbers added
- `src/data/faqData.ts`: "CPCSEA approved" → "CCSEA approved" (same audit pass)

---

### Infrastructure Section — `src/pages/Facilities.tsx`

**Section heading:**
- Old: "Infrastructure"
- New: "Modern Laboratory Infrastructure"

**Stats array (4 items):**
- Old: `["NABL Accredited", "10+", "6+", "ISO 17025"]` (approx)
- New: `[{ value: "NABL", label: "Accredited Lab" }, { value: "2022", label: "Incorporated" }, { value: "6+", label: "Dedicated Testing Areas" }, { value: "Global", label: "Reach" }]`

**complianceBadges:**
- `["NABL", "GLP Compliant", "CCSEA", "MSME", "IAS Accredited", "Global CRO"]`

**Intro section:**
- Label changed to: "Modern Laboratory Infrastructure"
- Added "purpose-built preclinical facility" to description
- Added vision statement paragraph: `"Aiming Towards World-Class GLP Laboratory — delivering globally accepted preclinical data from India."`

---

### Facility Highlights — `src/pages/Facilities.tsx`

**State-of-the-Art Labs (`keyPoints`):**
- Added: "Fully Equipped Bioanalytical Laboratory"
- Added: "Dedicated Genotoxicology Facility"
- Kept: dedicated areas for tox/histo/micro; regular calibration per ISO/IEC 17025:2017

**Advanced Equipment section label:**
- Old: "Analytical Instrumentation"
- New: "Testing Equipment"

**HVAC Systems:**
- Badge: "Air Quality Controlled"
- `keyPoints` reduced to 1 item: "Continuous air quality monitoring with automated controls"
- Removed: HEPA references and extra bullet points

**Water Purification:**
- Badge: "Purified Water"
- `keyPoints`: Multi-stage filtration + "Periodic Quality Check System"
- Removed: "USP Grade", "EP Grade", "Daily Quality Check" wording

---

### Animal Facility Section — `src/pages/Facilities.tsx`

**Description rewritten:**
- Old: vague paragraph with grammar issues; listed "rats, mice, rabbits, guinea pigs & hamsters"
- New: "Our CCSEA-registered animal breeding facility operates under strict regulatory guidelines with continuous veterinary oversight. Environmental parameters — including temperature, humidity, and photoperiod — are precisely controlled, with a standardised 12-hour light/dark cycle maintained across all housing areas to ensure optimal animal welfare, circadian consistency, and study reproducibility."

**Species list corrected:**
- Old: "rats, mice, rabbits, guinea pigs & hamsters"
- New: "mice, rats, and rabbits"

**Bullet points (4 total):**
1. "CCSEA registered and regularly audited facility"
2. "Species-specific housing for mice, rats, and rabbits"
3. "Photoperiod control with standardised 12-hour light/dark cycle" ← new
4. "Dedicated veterinary care and health monitoring programs"

---

### Certifications Page Overhaul (`src/pages/Certifications.tsx`)

**CPCSEA → CCSEA:**
- Cert card renamed: "CPCSEA Registration" → "CCSEA Registration"
- `FloatingText`: "CPCSEA" → "CCSEA"
- Code: `2030/PO/RcBiBt/S/18/CPCSEA` → `2030/PO/RcBiBt/S/18/CCSEA`
- Desc updated: "Committee for the Purpose of Control and Supervision..." → "Committee for Control and Supervision..."
- Features: "Small animal studies" → "CCSEA registered facility"

**NABL — Calibration references removed:**
- Desc: "Testing and Calibration Laboratory" → "Testing Laboratory"
- Feature: "Testing & calibration labs" → "Testing laboratory"
- Added company name to desc: "...at Cryst Bio Solutions Pvt. Ltd...."

**IAS — AC89 + date fix:**
- Desc: "AC89 criteria for Testing Laboratory, ISO/IEC 17025:2017 compliance" → "ISO/IEC 17025:2017 accreditation for Testing Laboratory at Cryst Bio Solutions Pvt. Ltd."
- Validity: "Effective January 12, 2024" → "Effective since 2023"
- Feature: "AC89 criteria compliance" → "Testing laboratory standard"
- Feature: "Effective since 2024" → "Effective since 2023"

**Incorporation cert:**
- Desc: removed "11th June 2024" date specificity; added company name to features

**Layout overlap fix:**
- `space-y-24` → `space-y-32` (increases gap between cert cards)
- Removed `min-h-[360px]` from per-cert wrapper div
- Removed nested `container mx-auto` from cert card loop (outer section already has container)

**⚠️ PENDING CLIENT ACTION — Certificate Images:**
- `cert-ias-cpcsea.png` used for BOTH IAS and CCSEA cards (same image) — client must supply separate images
- All cert images may carry old "Crystal Biological Solutions" branding — client must provide updated "Cryst Bio Solutions Pvt. Ltd." certificate scans
- If NABL cert renewed to 2030, update `validity` field and replace `cert-nabl.png`
- Suggested new image filenames: `cert-ccsea.png`, `cert-ias.png`

---

### Contact Email — Global Update

`info@crystbio.com` → `enquiry@crystbio.com` across all files:

| File | Occurrences |
|------|-------------|
| `src/components/Footer.tsx` | 2 |
| `src/components/SEOManager.tsx` | 1 (SITE_EMAIL constant) |
| `src/data/faqData.ts` | 1 |
| `src/pages/Contact.tsx` | 4 (FORMSUBMIT_EMAIL + value + href + inline text) |
| `src/pages/PrivacyPolicy.tsx` | 3 |
| `src/pages/TermsOfService.tsx` | 2 |

---

### Global Audit — Duplicate Accreditations, CCSEA, FDA, Company Name (`2026-06-25`)

**CPCSEA → CCSEA (global sed):**
- Applied `s/CPCSEA/CCSEA/g` across all `src/**/*.tsx` and `src/**/*.ts`
- Files updated: CertLogoSlider, SEOManager, About, AnimalSupply, AnimalDetail, Home, Facilities, Testimonials, Contact, faqData, Certifications, ServiceDetail, TermsOfService
- Image/variable names left unchanged (`logoCpcsea`, `certIasCpcsea` — filenames only)
- Zero CPCSEA text refs remain in source

**Duplicate CCSEA removed:**
- `src/pages/About.tsx:219` — sed created `"CCSEA", "CCSEA"` duplicate; removed one
- `src/components/SEOManager.tsx:183` — `"CCSEA Certification"` removed (line 184 already had `"CCSEA Registration"`)

**CCSEA label fixes:**
- `src/components/CertLogoSlider.tsx` alt: "CCSEA Certification" → "CCSEA Registration"
- `src/pages/Home.tsx:139`: "CCSEA Certified Animal Facility" → "CCSEA Registered Animal Facility"
- `src/pages/Home.tsx:476`: "CCSEA-certified animal facility" → "CCSEA-registered animal facility"

**FDA → CDSCO/ICH (compliance references only — testimonials kept as-is):**
- `src/pages/About.tsx:95`: "ISO 10993, OECD & FDA" → "ISO 10993, OECD & CDSCO"
- `src/pages/Home.tsx:79`: "OECD & FDA guidelines" → "OECD & ICH guidelines"
- `src/pages/Home.tsx:81`: tag "FDA / OECD" → "OECD / ICH"
- `src/pages/Home.tsx:141`: "OECD & FDA Compliant Protocols" → "OECD & CDSCO Compliant Protocols"
- `src/pages/Home.tsx:260`: "OECD, FDA, ASTM, and USP" → "OECD, CDSCO, GLP, and international standards"
- `src/pages/Services.tsx:26`: "ISO 10993, OECD, FDA, ASTM, and USP" → "ISO 10993, OECD, CDSCO, GLP, and international standards"
- `src/components/WhyPartner.tsx:29`: "GLP, OECD, FDA, ASTM & USP" → "GLP, OECD, CDSCO & ICH"
- `src/components/WhyPartner.tsx:33`: "OECD GLP certified" → "GLP compliant"
- FDA kept in Testimonials.tsx (factual regulatory outcomes — client quotes, real submissions)

**Company name — intentional "Crystal" references kept:**
- `src/pages/About.tsx:47` + `300`: "Crystal Biological Solutions" = predecessor company name in historical timeline — correct, intentional
- `src/components/Footer.tsx` LinkedIn URL: `crystal-biological-solutions` — client must update LinkedIn company page handle
- `src/pages/Contact.tsx:644` Google Maps embed: "Crystal%20Biological%20Solutions" — client must update Google Business listing name

---

### ⚠️ Pre-Production Verification Checklist (Client Must Confirm Before Go-Live)

| Item | Current Value | Status |
|------|--------------|--------|
| Incorporation year | Stat: 2022 (`Facilities.tsx`); Cert: 11/06/2024 | ⚠️ CONFLICT — client must confirm |
| NABL validity | Valid until 24/04/2026 | ⚠️ If renewed, update date + cert image |
| IAS effective date | "Effective since 2023" | ⚠️ Verify against actual IAS certificate |
| CCSEA registration | `2030/PO/RcBiBt/S/18/CCSEA` | ✓ Confirm still active |
| MSME Udyam | `UDYAM-MH-26-0118144`, registered 16/06/2021 | ✓ Confirm still active |
| IEC code | `BRTPM9840F`, issued 10/09/2019 | ✓ Confirm still active |
| Incorporation cert code | `U71200PN2024PTC231728` | ✓ Matches certificate |
| LinkedIn company URL | `crystal-biological-solutions` | ⚠️ Update LinkedIn page handle to `crystbiosolutions` or similar |
| Google Maps listing | "Crystal Biological Solutions" | ⚠️ Update Google Business name to "Cryst Bio Solutions Pvt. Ltd." |
| Cert images | Old "Crystal" branding possible | ⚠️ Replace with new Cryst Bio branded scans |
| NABL cert image | `cert-nabl.png` | ✅ Replaced — valid until 24/04/2030 |
| IAS + CCSEA images | Sharing `cert-ias-cpcsea.png` | ✅ Split — `cert-ias.png` and `cert-ccsea.png` separate |
| MSME + IEC images | Old branding | ✅ Replaced with new Cryst Bio certs |
| Incorporation cert image | `cert-incorporation.png` | ⏳ Still old — replacement pending |
