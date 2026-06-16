# Client Changes Required

This file tracks all changes made based on client requests. Update this file every time a new change is implemented.

---

## 1. Remove USA References (Country/Location Only)

**Date:** June 16, 2026

**Files Modified:**
- `src/components/SEOManager.tsx` — Removed `"US"` from `areaServed` array (`["IN", "EU", "US"]` → `["IN", "EU"]`)
- `src/pages/Testimonials.tsx` — Changed `"US-based CROs"` to `"international CROs"` in James Whitfield testimonial quote
- `src/pages/Testimonials.tsx` — Changed `client: "US Medical Device Startup"` to `client: "Medical Device Startup"` in case highlights

**Note:** US regulatory body references (FDA, USP, US EPA) were kept as they are internationally recognized standards.

---

## 2. Remove Inaccurate "20+" Count

**Date:** June 16, 2026

**Files Modified:** None

**Details:** No "20+" references were found anywhere in the codebase. Nothing to remove.

---

## 3. Company Name Standardization (Cryst Bio Solutions Pvt. Ltd.)

**Date:** June 16, 2026

**Files Modified:**
- `README.md` — Updated 2 references:
  - `# Cryst Bio Solutions Website` → `# Cryst Bio Solutions Pvt. Ltd. Website`
  - `Cryst Bio Solutions web application` → `Cryst Bio Solutions Pvt. Ltd. web application`

**Note:** The company name was already used consistently as "Cryst Bio Solutions Pvt. Ltd." across all source code files.

---

## 4. ClientChanges Required.md Created

**Date:** June 16, 2026

**Files Modified:** Created this file to track all client-requested changes.

---

## 5. Content Correction: "Laboratories" → "Laboratory"

**Date:** June 16, 2026

**Files Modified:**
- `src/data/faqData.ts` — Changed `"Our laboratories are NABL accredited"` → `"Our laboratory is NABL accredited"` (with verb agreement fix)
- `src/pages/About.tsx` — Changed `"one of the most trusted biocompatibility testing laboratories"` → `"the most trusted biocompatibility testing laboratory"` (with grammar fix)
- `src/pages/About.tsx` — Changed `"Our modern laboratories"` → `"Our modern laboratory"`
- `src/pages/Home.tsx` — Changed `"Our state-of-the-art laboratories"` → `"Our state-of-the-art laboratory"`
- `src/components/SEOManager.tsx` — Changed `"visual highlights of our laboratories"` → `"visual highlights of our laboratory"`

**Not Changed:** `Certifications.tsx` — "National Accreditation Board for Testing and Calibration Laboratories" (official NABL name, kept as-is)

---

## 6. ISO References → GLP Compliance References

**Date:** June 16, 2026

**Files Modified:**
- `src/components/WhyPartner.tsx` — Changed `"Compliant with ISO, OECD..."` → `"Compliant with GLP, OECD..."`
- `src/data/faqData.ts` — Changed `"GLP principles, ISO standards"` → `"GLP compliance"` (merged to avoid redundancy)
- `src/pages/Home.tsx` — Changed service tag `"ISO / USP"` → `"GLP / USP"` and process step `"ISO & USP"` → `"GLP & USP"`
- `src/pages/Facilities.tsx` — Changed badge `"ISO Accredited"` → `"GLP Compliant"`
- `src/data/servicesData.ts` — Changed `"USP, EP, IP, and ISO standards"` → `"USP, EP, IP, and GLP standards"`

**Not Changed (specific ISO numbers kept):** ISO 10993 (and variants), ISO/IEC 17025:2017, ISO 9001:2015, ISO 14644, ISO 11737, ISO 15189 — these are distinct technical standards.

---

## 7. Accreditation Section Update

**Date:** June 16, 2026

**Changes:** Added CCSEA, IAS Accredited, and Global CRO accreditation references alongside existing ones. Updated "IAS Recognised" → "IAS Accredited" for consistency.

**Files Modified:**
- `src/components/Footer.tsx` — Added `"CCSEA"`, `"IAS Accredited"`, `"Global CRO"` to accreditations array
- `src/pages/Facilities.tsx` — Added `"CCSEA"`, `"IAS Accredited"`, `"Global CRO"` to complianceBadges
- `src/pages/About.tsx` — Added `"CCSEA"`, `"IAS Accredited"`, `"Global CRO"` to badges array
- `src/pages/Home.tsx` — Added `"CCSEA Certified"`, `"IAS Accredited"`, `"Global CRO"` to aboutFeatures; shortened `"Global CRO with European Offices"` → `"Global CRO"`
- `src/components/SEOManager.tsx` — Added `"CCSEA Certification"` and `"Global CRO"` to hasCredential
- `src/pages/Contact.tsx` — Added `"CCSEA"`, `"IAS Accredited"`, `"Global CRO"` to badge list
- `src/pages/Testimonials.tsx` — Updated two badge arrays with CCSEA, IAS Accredited, Global CRO; changed `"IAS Recognised"` → `"IAS Accredited"`
