# Nestor Plumbing Works - Modern Website

A professional, component-based 3-page website for Nestor Plumbing Works in Accra, built with clean developer-style UI architecture.

## 📁 Project Structure

```
Nestor website/
├── index.html          # Home page
├── about.html          # About Us page
├── contact.html        # Contact page
├── styles.css          # Design system & core styles
├── script.js           # JavaScript interactions
├── logo.png            # Nestor logo (NEEDS TO BE ADDED)
└── README.md           # This file
```

## 🎨 Design System

- **Dark Theme**: #0b0b0b background
- **Primary Color**: Deep Blue (#1e3a8a)
- **Accent Color**: Subtle Orange (#ff8c42)
- **Typography**: Inter Font (premium, clean)
- **Icons**: Font Awesome 6.4.0
- **Spacing**: 8px base system
- **Responsive**: Mobile-first design

## 🚀 Features

### Pages

1. **Home Page (index.html)**
   - Sticky navbar with logo and call button
   - Hero section with visual and headline
   - Services grid (6 reusable service cards)
   - Why Choose Us section with features
   - Testimonials section with real customer feedback
   - CTA section
   - Footer with links and contact info

2. **About Page (about.html)**
   - Company story and mission
   - Values/principles grid (6 core values with icons)
   - Local trust section (Accra-focused)
   - CTA to contact

3. **Contact Page (contact.html)**
   - Contact form with validation
   - Multiple contact methods (phone, WhatsApp, email)
   - Contact information cards
   - Map placeholder with directions
   - WhatsApp CTA section
   - Emergency call section

### Components

- **Navbar**: Sticky with blur effect, logo, navigation links, call button
- **ServiceCard**: Reusable card with icon, title, description
- **TestimonialCard**: Star rating, customer quote, avatar
- **ValueCard**: Icon + text grid for principles
- **ContactForm**: Styled inputs with validation
- **CTA Section**: Bold call-to-action banner
- **Footer**: Multi-column layout with links and socials

### Interactions

- Smooth scroll behavior
- Intersection Observer for fade-in animations
- Hover effects on cards and buttons
- Button micro-interactions (scale + glow)
- Form validation with visual feedback
- Active navigation link highlighting
- Mobile menu support

## 🖼️ Logo Setup

The website references `logo.png` in the navbar. To use the Nestor Plumbing Works logo:

1. Save the provided logo image as `logo.png` in the same directory as the HTML files
2. The logo dimensions should be approximately **48px height** (width adjusts automatically)
3. Supported formats: PNG, JPG, SVG

If you need to adjust the logo size, edit the `.navbar-logo` class in `styles.css`:

```css
.navbar-logo {
  height: 48px; /* Adjust this value */
  width: auto;
  object-fit: contain;
}
```

## 🎯 Business Information

- **Name**: Nestor Plumbing Works
- **Location**: Nii Adaman Street, Accra
- **Phone**: 024 953 6716
- **Hours**: 24/7 Availability
- **Rating**: 4.7/5 (11 reviews)

All business details are hardcoded in the HTML. To update, search and replace:

- Phone: `024 953 6716` → your phone number
- WhatsApp: `233249536716` → your WhatsApp number (country code + number)
- Address: `Nii Adaman Street, Accra` → your address
- Email: `info@nestorplumbing.com` → your email

## 🔤 Typography

The site uses **Inter Font** from Google Fonts. No additional font files needed—they're loaded via CDN:

```html
<link
  href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
  rel="stylesheet"
/>
```

## 📱 Icons

Font Awesome 6.4.0 is used for all icons:

```html
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
/>
```

Common icons used:

- `fas fa-phone` - Phone
- `fab fa-whatsapp` - WhatsApp
- `fas fa-envelope` - Email
- `fas fa-tools` - Tools
- `fas fa-wrench` - Wrench
- `fas fa-droplet` - Water droplet
- `fas fa-star` - Stars
- And many more...

## 💻 JavaScript Features

Located in `script.js`:

- **Intersection Observer**: Lazy animations on scroll
- **Form Validation**: Client-side validation with visual feedback
- **Call Handler**: `initiateCall()` - triggers phone dialing
- **WhatsApp Handler**: `initiateWhatsApp()` - opens WhatsApp chat
- **Link Manager**: Active navigation highlighting
- **Year Update**: Automatically updates copyright year

## 🔧 Customization Guide

### Change Primary Color

Edit the CSS custom property in `styles.css`:

```css
--primary: #1e3a8a; /* Change this hex code */
--primary-light: #3b82f6;
```

### Change Accent Color

```css
--accent: #ff8c42; /* Orange - change to your color */
--accent-light: #ffb380;
```

### Update Business Phone

Search for `024 953 6716` and replace with your phone number throughout:

- `index.html`
- `about.html`
- `contact.html`
- `styles.css` (if any)

### Update WhatsApp Number

Search for `233249536716` and replace with your WhatsApp number (include country code):

- Add country code prefix (e.g., 233 for Ghana)
- Remove spaces or hyphens
- Format: `countrycodeYOURNUMBER`

### Modify Form Fields

In `contact.html`, edit the `<select>` options for "Service Needed":

```html
<option value="emergency">Emergency Repairs</option>
<!-- Add or remove options as needed -->
```

## 📊 SEO Meta Tags

Each page has descriptive meta tags for search engines. Update them in each HTML file:

```html
<meta name="description" content="Your description here" />
```

## 🎬 Animations

Powered by CSS keyframes:

- `fade-in`: Gradually appears
- `slide-up`: Slides up from bottom
- `pulse-soft`: Subtle pulsing effect
- `stagger`: Timed animations for multiple elements

Adjust animation speed in CSS custom properties:

```css
--transition-fast: 150ms;
--transition-base: 250ms;
--transition-slow: 350ms;
```

## 📦 Files Overview

| File           | Purpose                             | Lines  |
| -------------- | ----------------------------------- | ------ |
| `index.html`   | Home page with all main sections    | ~450   |
| `about.html`   | Company information and values      | ~350   |
| `contact.html` | Contact form and information        | ~400   |
| `styles.css`   | Complete design system + components | ~1000+ |
| `script.js`    | Interactions, forms, animations     | ~200   |

## 🚀 To Deploy

1. Replace `logo.png` with actual logo image
2. Update business contact info if needed
3. Upload all files to your web host:
   - `index.html`
   - `about.html`
   - `contact.html`
   - `styles.css`
   - `script.js`
   - `logo.png`
4. Test all links and forms
5. Verify responsiveness on mobile devices

## 📞 Quick Contact Info

- **Phone**: 024 953 6716
- **WhatsApp**: https://wa.me/233249536716
- **Address**: Nii Adaman Street, Accra
- **Hours**: 24/7 Open

## 🎨 Design Notes

- Clean, minimal navbar with sticky positioning
- Asymmetrical layout for realistic feel
- Card-based service display
- Gradient backgrounds subtly used
- No stock images—uses icons and shapes
- Professional typography hierarchy
- Consistent 8px spacing system
- Mobile-responsive across all breakpoints

## ✨ Professional Features

- ✅ Semantic HTML5 structure
- ✅ Mobile-first responsive design
- ✅ Component-based architecture
- ✅ Smooth animations and transitions
- ✅ Form validation and feedback
- ✅ Accessibility considerations
- ✅ SEO-friendly markup
- ✅ Fast-loading (no heavy dependencies)
- ✅ Dark theme for modern feel
- ✅ Font Awesome icons throughout

---

**Built with attention to detail for a professional plumbing business in Accra.**
