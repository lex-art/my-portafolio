import React, { useState, useEffect } from "react"
import { ThemeContext } from "../context/theme-context"
import '../styles/index.scss';
import './index.scss'
import { graphql } from "gatsby"
import { useTranslation } from "gatsby-plugin-react-i18next"
import { getDefaultTheme } from '../helpers/get-theme'
import { Aside } from "../components/aside/Aside" 
import { Home } from "../components/Home/home"


const IndexPage = () => {
  const { t } = useTranslation();
  const [theme, setTheme] = useState(getDefaultTheme());

  useEffect(() => {
    window.document.body.className = `theme-${theme}`;
  }, [theme]);

  return (
    <React.StrictMode>
      <ThemeContext.Provider value={{ theme, setTheme }}>
      <Aside/>
        <main className="container-background">
        
          <Home/>
        </main>
      </ThemeContext.Provider>
    </React.StrictMode>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>

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