# Resume Website

PDF-style resume website built with Next.js and designed for Vercel.

## Add your resume

Place your LaTeX-generated PDF here:

`public/resume.pdf`

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Update the resume

Replace `public/resume.pdf`, then:

```bash
git add public/resume.pdf
git commit -m "Update resume"
git push
```

Vercel will automatically deploy the update while keeping the same project URL/domain.
