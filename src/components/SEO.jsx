import { Helmet } from "react-helmet-async";

function SEO({
  title,
  description,
  keywords,
  image = "/logo.png",
  url = "https://see-future-website-ojyfz23zr-abubasheer004s-projects.vercel.app",
}) {
  return (
    <Helmet>
      <title>{title}</title>

      <meta name="description" content={description} />

      <meta name="keywords" content={keywords} />

      <meta name="author" content="SeeFuture Tech Hub" />

      <meta name="robots" content="index, follow" />

      <meta property="og:title" content={title} />

      <meta property="og:description" content={description} />

      <meta property="og:image" content={image} />

      <meta property="og:url" content={url} />

      <meta property="og:type" content="website" />

      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
  );
}

export default SEO;
