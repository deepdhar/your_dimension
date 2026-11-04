# Your Dimension — Website

Production-ready website for **Your Dimension**, a digital solutions and technology consultancy based in Siliguri, West Bengal, India.

**Tech stack:** Next.js 16 (App Router) · TypeScript · Tailwind CSS 4 · React Hook Form + Zod · Resend · Lucide Icons

---

## Getting Started

### 1. Clone and install dependencies

```bash
git clone <your-repo-url>
cd portfolio
npm install
```

### 2. Set up environment variables

Copy the example file:

```bash
cp .env.example .env.local
```

Edit `.env.local` and fill in the values:

| Variable | Description |
|---|---|
| `RESEND_API_KEY` | Your Resend API key (see below) |
| `CONTACT_TO_EMAIL` | The email address that receives enquiries |
| `CONTACT_FROM_EMAIL` | The verified sender email address (must be verified in Resend) |
| `NEXT_PUBLIC_SITE_URL` | Your production domain (e.g. `https://yourdimension.in`) |
| `NEXT_PUBLIC_LINKEDIN_URL` | LinkedIn profile URL (optional) |
| `NEXT_PUBLIC_INSTAGRAM_URL` | Instagram profile URL (optional) |

### 3. Run locally

```bash
npm run dev
```

The site will be available at [http://localhost:3000](http://localhost:3000).

---

## Setting Up Resend (Email)

The contact form sends emails using [Resend](https://resend.com), a developer-first email API.

### Step 1: Create a Resend account

1. Go to [resend.com](https://resend.com) and sign up for a free account.
2. The free tier supports up to 3,000 emails/month and 100/day — more than enough for contact form enquiries.

### Step 2: Verify a sending domain

1. In the Resend dashboard, go to **Domains** → **Add Domain**.
2. Enter your domain (e.g. `yourdimension.in`).
3. Add the DNS records Resend provides to your domain registrar.
4. Click **Verify** once the records have propagated.

> Until you verify a domain, you can only send to the email address you signed up with. For testing purposes, use `onboarding@resend.dev` as the from address.

### Step 3: Generate an API key

1. In the Resend dashboard, go to **API Keys** → **Create API Key**.
2. Give it a name (e.g. `yourdimension-website`).
3. Set the permission to **Sending access**.
4. Copy the key — you will only see it once.
5. Add it to your `.env.local` as `RESEND_API_KEY`.

### Step 4: Set email addresses

In `.env.local`:
- `CONTACT_TO_EMAIL` — the inbox you want to receive enquiries in (e.g. `hello@yourdimension.in`)
- `CONTACT_FROM_EMAIL` — a verified sender address from your verified domain (e.g. `website@yourdimension.in`)

---

## Testing the Contact Form

1. Start the dev server: `npm run dev`
2. Navigate to [http://localhost:3000/contact](http://localhost:3000/contact)
3. Fill in the form and submit
4. Check the inbox specified in `CONTACT_TO_EMAIL`

If the email does not arrive:
- Check the Resend dashboard for delivery logs
- Ensure the domain is verified
- Ensure `CONTACT_FROM_EMAIL` uses your verified domain
- Check the terminal for server-side error logs

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout (Header + Footer)
│   ├── page.tsx                # Homepage
│   ├── services/page.tsx       # Services page
│   ├── work/
│   │   ├── page.tsx            # Portfolio grid
│   │   └── [slug]/page.tsx     # Individual case study
│   ├── about/page.tsx          # About page
│   ├── contact/page.tsx        # Contact page
│   ├── privacy-policy/page.tsx # Privacy policy
│   ├── api/contact/route.ts    # Email API route (server-side)
│   ├── sitemap.ts              # Dynamic sitemap
│   └── robots.ts               # robots.txt
├── components/
│   ├── layout/                 # Header, Footer
│   ├── sections/               # Page sections (Hero, ServicesGrid, etc.)
│   └── ui/                     # Reusable UI components (Button, FadeIn, ContactForm)
├── data/
│   ├── services.ts             # Service definitions
│   └── projects.ts             # Portfolio case studies
└── lib/
    ├── config.ts               # Site-wide configuration
    └── validations.ts          # Zod contact form schema
```

---

## Adding New Projects

Open `src/data/projects.ts` and add a new entry following the `Project` interface. Each project requires:

- `title`, `industry`, `overview`
- `services`, `technologies`
- `slug` (URL-safe, used in routing)
- `category` (for filtering)
- `challenge`, `solution`, `approach`, `deliverables`, `outcome`
- `imageAlt`

> **Important:** Do not add fabricated client names, results, revenue figures, or testimonials. Use only real project information.

---

## Deploying

### Vercel (recommended)

```bash
npm install -g vercel
vercel --prod
```

Add all environment variables in the Vercel project settings under **Settings → Environment Variables**.

### Other platforms

Build the production bundle:

```bash
npm run build
npm run start
```

Ensure all environment variables are set in the host environment before building.

---

## Before Launch Checklist

- [ ] Replace placeholder case studies in `src/data/projects.ts` with real projects
- [ ] Configure `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL`
- [ ] Verify your sending domain in Resend
- [ ] Update `NEXT_PUBLIC_SITE_URL` to your production domain
- [ ] Add LinkedIn and Instagram URLs in environment variables
- [ ] Test the contact form end-to-end
- [ ] Update the `privacy-policy/page.tsx` last-updated date before launch
- [ ] Add a real favicon (`src/app/favicon.ico`)
- [ ] Add Open Graph image (`public/og-image.jpg`)

---

## License

Proprietary. All rights reserved. Your Dimension.
