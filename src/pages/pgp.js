import React from "react";

import { Layout } from "../components";

const IndexPage = () => {
  return (
    <SiteWrapper>
      <h1>My PGP Key</h1>
      <pre>{pgpPublicKey}</pre>
    </SiteWrapper>
  );
};

export default IndexPage;
