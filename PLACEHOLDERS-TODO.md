# Placeholders & TODOs

This document lists all placeholders, incomplete integrations, and items that still need to be completed.

## Email Addresses ✅ COMPLETED

**Locations:**
- `app/contact/page.tsx` - ✅ Updated to ads@onlydeb.com
- `app/work-with-me/page.tsx` - ✅ Updated to ads@onlydeb.com

**Status:** All email addresses updated to `ads@onlydeb.com`

## Calendar Integration (HIGH PRIORITY)

**Location:** `app/work-with-me/page.tsx` (line 226)
**Current State:** Placeholder comment only
**Action Required:** Integrate Calendly or TidyCal booking system

**Implementation Options:**
1. Calendly embed code
2. TidyCal integration
3. Custom calendar solution

## Profile Image (MEDIUM PRIORITY)

**Location:** `app/about/page.tsx` (line 30)
**Current State:** Placeholder comment only
**Action Required:** Add actual professional profile image

**Files Needed:**
- `public/profile.jpg`
- Update references in `lib/seo.ts`

## Environment Variables (HIGH PRIORITY)

**Missing .env.local file with:**
```
NEXT_PUBLIC_SITE_URL=https://onlydeb.com
```

**Locations needing updates:**
- `README.md`
- `DEPLOYMENT.md`
- `wrangler.toml` (commented out)

## Form Backend Integration (HIGH PRIORITY)

**Contact Form:** `app/contact/page.tsx` - Currently simulated
**Lead Magnet Form:** `components/ui/LeadMagnet.tsx` - Currently simulated

**Action Required:** Implement actual form submission backend

## Social Media Links (MEDIUM PRIORITY)

**LinkedIn:** `app/contact/page.tsx` (line 28)
- Current: `@performanceoperator` with href="#"
- Needs: Actual LinkedIn profile URL

## SEO Images (MEDIUM PRIORITY)

**Missing Files:**
- `public/og-image.jpg` (for social sharing)
- `public/profile.jpg` (referenced in structured data)

## Search Engine Verification (LOW PRIORITY)

**Location:** `lib/seo.ts` (lines 56-57)
**Current:** Placeholder verification codes
**Action Required:** Add real Google Search Console verification

## Priority Order

### HIGH PRIORITY (Required for Launch)
1. Replace email placeholders
2. Calendar integration
3. Form backend integration
4. Environment variables

### MEDIUM PRIORITY (Polish)
1. Profile image
2. LinkedIn link
3. OG image

### LOW PRIORITY (Optional)
1. Search verification codes
2. Brand color customization

## Quick Actions

**Find/Replace Commands:**
```bash
# Replace email placeholder
contact@example.com → your-actual-email@onlydeb.com

# Update LinkedIn
@performanceoperator → your-linkedin-handle
href="#" → "https://linkedin.com/in/your-profile"
```

**Files to Create:**
- `.env.local`
- `public/profile.jpg`
- `public/og-image.jpg`

## Notes

- Analytics (GA4 & Hotjar) are fully implemented ✅
- All forms work with validation but need backend ⚠️
- Website is fully functional for browsing and testing ✅
- SEO metadata is complete ✅ 