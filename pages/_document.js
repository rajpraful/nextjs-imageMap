import Document, { Html, Head, Main, NextScript } from "next/document";
import React from "react";
import { ServerStyleSheets } from "@mui/styles";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    const description =
        "Guide or broacher for Electic Vehicle Experience Center",
      title = "EVEC - experience next generation",
      name = "EVEC";
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />

          {/* Allow installing the app to the homescreen */}
          <meta name="application-name" content={name} />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta name="apple-mobile-web-app-title" content={name} />
          <meta
            name="msapplication-config"
            content="https://www.vidyawin.com/icons/icon-48x48.png"
          />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="msapplication-tap-highlight" content="no" />

          <link
            rel="apple-touch-icon"
            sizes="192x192"
            href="https://www.vidyawin.com/icons/icon-192x192.png"
          />
          {/* <link rel="shortcut icon" type="image/x-icon" href="/icons/favicon.ico" /> */}

          {/* Adding Manifest json */}
          <link rel="manifest" href="/manifest.json" />

          {/* PWA primary color */}
          <meta name="theme-color" content="#ffffff" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

MyDocument.getInitialProps = async (ctx) => {
  // Render app and page and get the context of the page with collected side effects.
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    styles: [
      ...React.Children.toArray(initialProps.styles),
      sheets.getStyleElement(),
    ],
  };
};

export default MyDocument;
