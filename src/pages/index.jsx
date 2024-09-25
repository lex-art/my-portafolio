import React, { useState, useEffect } from "react"
import { ThemeContext } from "../context/theme-context"
import '../styles/index.scss';
import { graphql } from "gatsby"
import { getDefaultTheme } from '../helpers/get-theme'
import { Aside } from "../components/Aside/Aside" 
import { Home } from '../views/Home/home'
import { Portafolio } from "../views/Portafolio/Portafolio";
import { About } from '../views/About/About'

const isBrowser = typeof window !== "undefined"

const IndexPage = () => {
  const [theme, setTheme] = useState(getDefaultTheme());

  useEffect(() => {
    if(isBrowser){
      window.document.body.className = `theme-${theme}`;
    }
  }, [theme]);

  return (
    <React.StrictMode>
      <ThemeContext.Provider value={{ theme, setTheme }}>
      <Aside/>
        <main>
          <Home/>
          <Portafolio/>
          <About/>
        </main>
      </ThemeContext.Provider>
    </React.StrictMode>
  )
}

export default IndexPage

export const Head = () =>(
  <>
   <title>Alexander</title>
   <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
   <link rel="shortcut icon" type="image/svg" href="assets/img/isologo.svg" />
  </>
)

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: {language: {eq: $language}}) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;