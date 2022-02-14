// downloads GA
export const loadGA = (callback) => {
  const existingScript = document.getElementById('googleAnalytics');

  if (!existingScript) {
    const script = document.createElement('script');
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-TB9DYKMJLD';
    script.id = 'googleAnlaytics';
    script.defer = true;

    document.body.appendChild(script);

    script.onload = () => {
      if (callback) callback();
    };
  }

  if (existingScript && callback) callback();
};

export const enableGA = () => {
  window.dataLayer = window.dataLayer || [];

  function gtag() {
    window.dataLayer.push(arguments);
  }

  gtag('js', new Date());
  gtag('config', process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS);
};

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