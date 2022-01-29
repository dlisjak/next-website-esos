// log the pageview with their URL
export const pageview = (url) => {
  if (typeof window === "undefined") return;
  if (!window.gtag) return;
  window.gtag('config', process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
    page_path: url,
  })
}

// log specific events happening.
export const event = ({ action, params }) => {
  if (typeof window === "undefined") return;
  if (!window.gtag) return;
  window.gtag('event', action, params)
}