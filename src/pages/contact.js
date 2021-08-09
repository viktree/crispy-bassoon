import React from "react";

import { ContactForm, SiteWrapper } from "../components";

const IndexPage = () => (
  <SiteWrapper>
    <h1>Contact</h1>
    <p>
      Please leave a message after the &hellip; you don&#8217;t even have to
      wait for the tone!
    </p>
    <ContactForm />
  </SiteWrapper>
);

export default IndexPage;
