import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"


export const pageQuery = graphql`
  query {
    allGoogleSpreadsheetSheet1 {
      edges {
        node {
          id
          name
        }
      }
    }
  }
`;


const IndexPage = ({ data }) => {
  const items = data.allGoogleSpreadsheetSheet1.edges;
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site. My teste 3.</p>
      <p>Now go build something great.</p>


      {items.map(({ node }) => (
        <p key={node.id}>{node.name}</p>
      ))}

      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </Layout>
  )
}

export default IndexPage
