import { useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import { ThemeProvider } from "@mui/material/styles";
import { StylesProvider } from "@mui/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Fab } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import CollectionsIcon from "@mui/icons-material/Collections";
import ArticleIcon from "@mui/icons-material/Article";
import { theme } from "../utils/materialTheme";
import "../styles/global.scss";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }

    if ("serviceWorker" in navigator) {
      window.addEventListener("load", function () {
        navigator.serviceWorker
          .register("/sw.js", {
            scope: ".",
          })
          .then(
            function (registration) {
              console.log(
                "Service Worker registration successful with scope: ",
                registration.scope
              );
            },
            function (err) {
              console.log("Service Worker registration failed: ", err);
            }
          );
      });
    }
  }, []);

  return (
    <>
      <Head>
        <title>EVEC - experience next generation</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <ThemeProvider theme={theme}>
        <StylesProvider injectFirst>
          <CssBaseline />
          <main className="layout">
            <Component {...pageProps} />
            <div className="navicons">
              <Link href="/">
                <Fab color="secondary" aria-label="home">
                  <HomeIcon />
                </Fab>
              </Link>
              <Link href="/gallery">
                <Fab color="warning" variant="string" aria-label="gallery">
                  <CollectionsIcon />
                </Fab>
              </Link>
              <Link href="/documents">
                <Fab color="info" variant="string" aria-label="documents">
                  <ArticleIcon />
                </Fab>
              </Link>
            </div>
          </main>
        </StylesProvider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
