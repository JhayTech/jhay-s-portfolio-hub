

## Plan: Portfolio Overhaul

### Summary of Changes

This plan covers 10 distinct updates across multiple files: services replacement, hero redesign, navbar changes, new projects, favicon/title, contact form email, name changes, and project modal improvements.

### 1. Replace Two Services with New Ones (ServicesSection.tsx)

Replace "CRM & Pipeline Management" and "Project Management" with:
- **API Integrations** - "Connect and integrate APIs for smooth data flow between your tools and platforms." (icon: `Settings` or `Plug`)
- **Automation Troubleshooting** - "Debug, optimize, and maintain your existing automation workflows for peak performance." (icon: `Wrench`)

### 2. Remove "Orlie Labrador" from Navbar (Navbar.tsx)

Remove the logo/brand text entirely from the navbar. Emphasize "Hire Me" link with a styled button (bg-primary, rounded, etc.) to make it stand out.

### 3. Change Name to "Orlie Labrador" (HeroSection.tsx, Footer.tsx)

- Hero: Change "Orlie John" / "Russell Labrador" to just "Orlie" / "Labrador"
- Footer: Update copyright to "Orlie Labrador"

### 4. Total Hero Page Makeover (HeroSection.tsx)

Redesign the hero with a more aggressive, impactful layout:
- Larger, bolder typography with more dramatic animations
- Stronger glow effects and more prominent CTA buttons
- Restructured layout for more visual impact
- Keep the AutomationNetwork background but enhance the overall presence

### 5. Update Projects (ProjectsSection.tsx)

Remove "n8n Integration Network" project. Add 4 new projects using uploaded images (copied to `src/assets/`):
- **Asana CRM Lead Engagement Workflow** (Zapier_2.png) - Zapier automation with Asana trigger, multi-path lead engagement, follow-up emails, AI recommendations
- **Automated Leads Enrichment** (Zapier_3.png) - Typeform lead capture, Apollo enrichment, priority-based routing, AI email drafts
- **Onboarding New Team Member** (PowerAutomate_Onboarding.png) - Power Automate flow with location-based logic, approval process, user creation, credential delivery
- **Microsoft 365 Admin Center** (365.png) - Admin center management screenshot
- **Microsoft Intune Administration** (Intune.png) - Intune role assignments and device management

Update the modal to show the **full-size image** (scrollable) when clicking a project, so the user can see the complete workflow screenshot.

### 6. Improve Project Modal (ProjectsSection.tsx)

Make the modal larger (max-w-3xl or max-w-4xl), with the image displayed at full width and scrollable content so users can see the entire workflow screenshot clearly.

### 7. Update Favicon and Browser Title (index.html)

- Change `<title>` to "Jhay's Portfolio Hub"
- Add a simple "J" favicon using an inline SVG data URI (no image file needed)
- Update og:title meta tag

### 8. Change Contact Form to Email (ContactSection.tsx)

Replace WhatsApp-based sending with `mailto:` link approach:
- On submit, open the user's email client with `mailto:orliejohnrusselllabrador@yahoo.com` with subject and body pre-filled from the form data
- Update button text from "Send Message via WhatsApp" to "Send Message via Email"
- Update toast messages accordingly

### 9. Copy Uploaded Images to Project

Copy these files to `src/assets/`:
- `user-uploads://Zapier_2.png` → `src/assets/zapier-2.png`
- `user-uploads://Zapier_3.png` → `src/assets/zapier-3.png`
- `user-uploads://PowerAutomate_Onboarding.png` → `src/assets/power-automate-onboarding.png`
- `user-uploads://365.png` → `src/assets/m365-admin.png`
- `user-uploads://Intune.png` → `src/assets/intune-admin.png`

### Technical Details

**Files modified:**
- `index.html` - title, favicon, meta tags
- `src/components/Navbar.tsx` - remove brand text, style "Hire Me" as button
- `src/components/HeroSection.tsx` - name change, hero redesign
- `src/components/ServicesSection.tsx` - replace 2 services
- `src/components/ProjectsSection.tsx` - remove n8n, add 4 new projects, enlarge modal with full image view
- `src/components/ContactSection.tsx` - switch to mailto
- `src/components/Footer.tsx` - name update

**New asset files:** 5 images copied to `src/assets/`

