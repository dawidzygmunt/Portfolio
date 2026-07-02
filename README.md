# Portfolio

My personal portfolio site — projects, skills, and work experience, with a bunch of scroll animations
sprinkled in. Built with Next.js (App Router) and Tailwind, animated with Framer Motion, with a few
Radix UI primitives (dialog, tooltip) for the accessible bits.

## Demo

https://dawidzygmuntdev.pl/

## Tech Stack

- Next.js / TypeScript
- Tailwind CSS
- Framer Motion (scroll-triggered animations)
- Radix UI (dialog, tooltip)
- Playwright (smoke tests)

## Running Locally

```bash
npm install
npm run dev
```

The site will be available at `http://localhost:3000`.

## Testing

Smoke tests run against a real browser via Playwright:

```bash
npm test        # headless run
npm run test:ui # interactive UI mode
```

## Docker

```bash
docker build -t portfolio .
docker run -p 3000:3000 portfolio
```

## Contact

There's no contact form — just get in touch directly:

- dawid.zygmunt86@gmail.com
- +48 696 633 888

## License

MIT
