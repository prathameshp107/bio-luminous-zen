# Client Pending — Blocked Items & Required Inputs

All items below are **blocked on client**. No code changes possible until inputs received.

---

## A. CONTENT INPUTS NEEDED

### A1. Research Capability Order
**Requested order:**
1. Medical Devices
2. Pesticides
3. Biopesticides
4. Nutraceuticals
5. Packaging
6. Educational Research

**Problem:** These names don't match any existing service pages. Current services are:
- Toxicology Testing
- Biocompatibility Testing
- Agrochemical Testing
- Research Projects
- Histopathology & Clinical Pathology
- Microbiology Services

**Questions for client:**
- Q1: Are these 6 names **replacements** for existing service titles, or a **new separate section**?
- Q2: If replacements — what is the mapping? (e.g. "Medical Devices" = Biocompatibility Testing?)
- Q3: "Biopesticides", "Nutraceuticals", "Packaging", "Educational Research" have no existing pages — are these **new service pages** to build from scratch? If yes, provide full content for each.
- Q4: Renaming slugs will **break existing URLs**. Confirm if acceptable or if redirects are needed.

---

### A2. Research Services — CAF Website Content
**Requested:** "Use approved research topics from CAF website and Approved Research Topic Source"

**Problem:** No access to CAF (Cryst Bio Animal Facility) website or approved research topics document.

**Inputs needed from client:**
- URL of the CAF website OR exported/copied content
- List of approved research topics to display on website
- Replacement descriptions for the 4 remaining Research sub-services (if content must change):
  1. Custom Study Design & Protocol Development
  2. Pilot / Dose Range-Finding Studies
  3. Efficacy & Pharmacology Models
  4. PK/PD Studies

---

## B. IMAGE FILES NEEDED

### B1. Certificate Images (Certifications page)
Current images likely carry old "Crystal Biological Solutions" branding.

| Image needed | Current filename | Notes |
|---|---|---|
| NABL certificate (updated) | `cert-nabl.png` | Replace if renewed beyond April 2026 |
| IAS certificate (separate) | currently `cert-ias-cpcsea.png` | Needs own file — save as `cert-ias.png` |
| CCSEA certificate (separate) | currently `cert-ias-cpcsea.png` | Shares image with IAS — needs own file — save as `cert-ccsea.png` |
| MSME / Udyam certificate | `cert-msme.png` | Verify current; replace if old branding |
| IEC certificate | `cert-iec.png` | Verify current; replace if old branding |
| Incorporation certificate | `cert-incorporation.png` | Verify current — must show "Cryst Bio Solutions Pvt. Ltd." |

**Action:** Client to provide updated certificate scan images in PNG format, named as above.

---

### B2. Service Page Images
Two service images flagged as unclear or low-quality:

| Image | Page | Status |
|---|---|---|
| `sub-agro-oral-toxicity.jpg` | Agrochemical → Acute Oral Toxicity | ⚠️ Needs replacement |
| `sub-agro-dermal-toxicity.jpg` | Agrochemical → Acute Dermal Toxicity | ⚠️ Needs replacement |

**Action:** Client to provide replacement images (JPG or PNG, minimum 800×600px, relevant lab/testing imagery).

---

## C. VERIFICATION REQUIRED FROM CLIENT (Pre-Production)

### C1. Incorporation Year Conflict
- **Stat on Facilities page shows:** 2022 (Incorporated)
- **Certificate of Incorporation shows:** 11/06/2024
- **About page timeline shows:** "Evolved into Cryst Bio Solutions Pvt. Ltd." in year entry 2024

**Question:** Which year should be displayed publicly as the incorporation year?
- If 2022 = proprietorship founding year (Crystal Biological Solutions) → label should say "Founded" or "Established", not "Incorporated"
- If 2024 = Pvt. Ltd. incorporation date → Facilities stat should change from "2022" to "2024"

---

### C2. NABL Accreditation Validity
- **Currently shows:** Valid until 24/04/2026
- **Client requested:** Validity through 2030

**Question:** Has NABL been renewed? If yes:
- Provide new NABL certificate (PNG) → update `cert-nabl.png`
- Confirm new expiry date → update validity text on Certifications page

---

### C3. IAS Effective Date
- **Currently shows:** Effective since 2023

**Question:** Confirm the exact effective date on the IAS certificate (TL-1015).
- If different from 2023, provide correct year/date.

---

### C4. CCSEA Registration Status
- **Registration code:** `2030/PO/RcBiBt/S/18/CCSEA`
- **Currently shows:** "Registered" (no expiry date)

**Question:** Is this registration still active? Any renewal needed or renewal date to display?

---

### C5. MSME / Udyam Registration
- **Code:** `UDYAM-MH-26-0118144`
- **Registered:** 16/06/2021

**Question:** Still active under Cryst Bio Solutions Pvt. Ltd.? (Note: registration was likely under Crystal Biological Solutions — confirm entity name on certificate matches current company name.)

---

### C6. IEC Certificate
- **Code:** `BRTPM9840F`
- **Issued:** 10/09/2019

**Question:** Still active? Entity name on certificate — does it say "Cryst Bio Solutions Pvt. Ltd." or "Crystal Biological Solutions"?

---

## D. EXTERNAL PLATFORM UPDATES (Client Must Do Directly)

These cannot be changed in the website code — client must update on the respective platforms.

### D1. LinkedIn Company Page
- **Current handle:** `linkedin.com/company/crystal-biological-solutions`
- **Footer link points to this URL**
- **Action needed:** Client to update LinkedIn company page name and/or handle to reflect "Cryst Bio Solutions Pvt. Ltd."

### D2. Google Business / Google Maps Listing
- **Currently shows:** "Crystal Biological Solutions" on the embedded map (Contact page)
- **Action needed:** Client to update Google Business Profile name to "Cryst Bio Solutions Pvt. Ltd."
- After update, Google Maps embed on Contact page will automatically reflect the new name.

---

## E. DECISIONS NEEDED

### E1. "20+ Count" on Regulatory Affairs
- Client requested: change "20+" → "15+"
- **Current state:** No "20+" found anywhere in codebase — already clean
- **Question:** Confirm if there's a specific page/section where this count should appear, or if item is resolved.

### E2. "Calibration" in NABL description
- Removed "and Calibration" from NABL card (now reads "Testing Laboratory")
- NABL TC-15118 is a Testing + Calibration accreditation by definition
- **Question:** Confirm removing "Calibration" is intentional (some clients may need calibration services listed).

---

## F. SUMMARY TABLE

| # | Item | Type | Priority |
|---|------|------|----------|
| A1 | Research Capability Order — service mapping | Content | High |
| A2 | Research Services — CAF website content | Content | High |
| B1 | Certificate images (6 files) | Images | High |
| B2 | Service page images (2 files) | Images | Medium |
| C1 | Incorporation year conflict: 2022 vs 2024 | Verification | High |
| C2 | NABL validity — renewed to 2030? | Verification | High |
| C3 | IAS effective date — confirm 2023 | Verification | Medium |
| C4 | CCSEA registration — still active? | Verification | Medium |
| C5 | MSME registration — entity name match? | Verification | Medium |
| C6 | IEC certificate — entity name match? | Verification | Low |
| D1 | LinkedIn company page name/handle | External platform | Medium |
| D2 | Google Business listing name | External platform | Medium |
| E1 | "15+" count — which page? | Decision | Low |
| E2 | Removing "Calibration" from NABL — intentional? | Decision | Low |

---

*Last updated: 2026-06-25*
*All code-side changes from ClientChanges Required.md are complete except items listed above.*
