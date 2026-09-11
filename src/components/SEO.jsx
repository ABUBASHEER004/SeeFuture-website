import { Helmet } from "react-helmet-async";

const siteUrl = (import.meta.env.VITE_SITE_URL || "https://see-future-website.vercel.app").replace(/\/$/, "");

function SEO({ title, description, keywords = "", image = "/logo.png", url }) {
  const canonical = url || siteUrl;
  const imageUrl = image.startsWith("http") ? image : `${siteUrl}${image}`;
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "SeeFuture Tech Hub",
    url: siteUrl,
    logo: imageUrl,
    email: "seefuture004@gmail.com",
    telephone: "+2348130262575",
    address: { "@type": "PostalAddress", addressLocality: "Kaduna", addressCountry: "NG" }
  };
  return <Helmet>
    <html lang="en" />
    <title>{title}</title>
    <meta name="description" content={description} />
    {keywords && <meta name="keywords" content={keywords} />}
    <meta name="author" content="SeeFuture Tech Hub" />
    <meta name="robots" content="index, follow" />
    <meta name="theme-color" content="#020617" />
    <link rel="canonical" href={canonical} />
    <meta property="og:site_name" content="SeeFuture Tech Hub" />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={imageUrl} />
    <meta property="og:url" content={canonical} />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={imageUrl} />
    <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
  </Helmet>;
}
export default SEO;
