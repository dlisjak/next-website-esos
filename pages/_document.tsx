import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="sl">
        <title>Domov | ESOS Digital</title>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link
            href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
        <footer>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                function downloadGAOnload() {
                  var element = document.createElement("script");
                  element.src = "https://www.googletagmanager.com/gtag/js?id=G-TB9DYKMJLD";
                  element.defer = true;
                  document.head.appendChild(element);
                }

                window.onload = () => {
                  downloadGAOnload();
                  window.dataLayer = window.dataLayer || [];

                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
                }
              `,
            }}
          ></script>
        </footer>
      </Html>
    );
  }
}

export default MyDocument;
