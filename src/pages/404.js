import React from "react";

import SiteWrapper from "../components/layout";
import SEO from "../components/seo";

const NotFoundPage = () => (
  <SiteWrapper>
    <SEO title="404: Not found" />
    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </SiteWrapper>
);

export default NotFoundPage;
