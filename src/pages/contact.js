import React from "react"

import { ContactForm, Layout, SEO } from "../components"

const IndexPage = () => (
  <Layout>
    <SEO title="Contact" />
    <h1>Contact</h1>
    Please leave a message after the &hellip; you don&#8217;t even have to wait
    for the tone!
    <br />
    <br />
    <ContactForm />
  </Layout>
)

export default IndexPage
