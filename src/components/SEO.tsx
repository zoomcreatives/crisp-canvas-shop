import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

type SEOProps = {
  title: string;
  description: string;
};

export const SEO = ({ title, description }: SEOProps) => {
  const location = useLocation();
  const canonical = typeof window !== "undefined" ? window.location.origin + location.pathname : location.pathname;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
};
