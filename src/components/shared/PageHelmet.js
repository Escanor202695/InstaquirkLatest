import React from "react";
import { Helmet } from "react-helmet";

const PageHelmet = ({ pageTitle }) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{pageTitle}</title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Instaquirk - Consulting React Template"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      </Helmet>
    </>
  );
};

export default PageHelmet;
