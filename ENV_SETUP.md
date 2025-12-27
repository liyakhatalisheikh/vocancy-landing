# Environment Variables Configuration

## Required for Production

### Formspree Form Submission
Set this in your Cloudflare Pages environment variables:

```
NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID
```

**How to get your Formspree ID:**
1. Go to https://formspree.io
2. Create a new form
3. Copy the form endpoint URL (looks like `https://formspree.io/f/xyzabc123`)
4. Add to Cloudflare Pages under Settings → Environment variables

**Local Development:**
Create a `.env.local` file (not tracked by git) with:
```
NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID
```
