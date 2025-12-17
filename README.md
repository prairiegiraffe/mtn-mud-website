# MTN MUD Website

Corporate website for MTN MUD - Service Based Drilling Fluids company with locations in Wyoming and North Dakota.

## Tech Stack

- **Framework**: [Astro 5.0](https://astro.build/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Hosting**: [Cloudflare Pages](https://pages.cloudflare.com/)
- **Database**: [Cloudflare D1](https://developers.cloudflare.com/d1/)
- **Storage**: [Cloudflare R2](https://developers.cloudflare.com/r2/)

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Run checks (TypeScript, ESLint, Prettier)
npm run check

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── assets/          # Images, logos, styles
├── components/      # Reusable UI components
├── layouts/         # Page layouts
├── lib/             # Utilities (auth, database)
├── pages/           # Routes and API endpoints
│   ├── admin/       # Admin dashboard
│   └── api/         # API routes
└── config.yaml      # Site configuration
```

## Environment Variables

For local development, create a `.dev.vars` file:

```
JWT_SECRET=your-secret-key
```

## Deployment

The site deploys automatically to Cloudflare Pages on push to `main`.

## Admin Access

Admin dashboard available at `/admin/login` for managing:

- Form submissions (contact & job applications)
- Job postings
- Products catalog
- User accounts
