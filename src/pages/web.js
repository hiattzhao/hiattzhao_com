import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import WebImage from "../components/image-web"

const WebPage = (data) => (
  <Layout>
    <SEO title="Web" />
    <h1>Hi from the webdev page</h1>
    <WebImage />
  </Layout>
)

export default WebPage
