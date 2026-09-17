import { useEffect } from "react";
import type { Product } from "@/data/products";
import { productSeo } from "@/data/products";

const setMeta = (selector: string, attribute: "name" | "property", value: string) => {
  let element = document.head.querySelector<HTMLMetaElement>(selector);
  const created = !element;

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, selector.match(/="([^"]+)"/)?.[1] ?? "");
    document.head.appendChild(element);
  }

  const previousValue = element.getAttribute("content");
  element.setAttribute("content", value);

  return { element, created, previousValue };
};

const restoreMeta = ({ element, created, previousValue }: { element: HTMLMetaElement; created: boolean; previousValue: string | null }) => {
  if (created) {
    element.remove();
  } else if (previousValue === null) {
    element.removeAttribute("content");
  } else {
    element.setAttribute("content", previousValue);
  }
};

/** Keeps the document head in sync with the currently viewed product. */
export const ProductMetadata = ({ product }: { product: Product }) => {
  useEffect(() => {
    const seo = productSeo[product.handle] ?? {
      title: `${product.title} | Research Purpose | Precision Peptides`,
      description: product.description,
    };
    const pageUrl = new URL(`/product/${product.handle}`, window.location.origin).href;
    const imageUrl = product.image ? new URL(product.image, window.location.origin).href : undefined;
    const previousTitle = document.title;
    const changes = [
      setMeta('meta[name="description"]', "name", seo.description),
      setMeta('meta[property="og:title"]', "property", seo.title),
      setMeta('meta[property="og:description"]', "property", seo.description),
      setMeta('meta[property="og:type"]', "property", "product"),
      setMeta('meta[property="og:url"]', "property", pageUrl),
      setMeta('meta[name="twitter:card"]', "name", "summary_large_image"),
      setMeta('meta[name="twitter:title"]', "name", seo.title),
      setMeta('meta[name="twitter:description"]', "name", seo.description),
    ];

    if (seo.keywords) {
      changes.push(setMeta('meta[name="keywords"]', "name", seo.keywords));
    }

    if (seo.researchContent) {
      changes.push(setMeta('meta[name="research-content"]', "name", seo.researchContent));
    }

    if (imageUrl) {
      changes.push(setMeta('meta[property="og:image"]', "property", imageUrl));
      changes.push(setMeta('meta[name="twitter:image"]', "name", imageUrl));
    }

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    const canonicalCreated = !canonical;
    const previousCanonical = canonical?.getAttribute("href") ?? null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = pageUrl;

    const structuredData = document.createElement("script");
    structuredData.type = "application/ld+json";
    structuredData.dataset.productMetadata = product.handle;
    structuredData.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Product",
      name: product.title,
      description: seo.description,
      image: imageUrl ? [imageUrl] : undefined,
      url: pageUrl,
      category: "Research peptide",
      brand: { "@type": "Brand", name: "Precision Peptides" },
      additionalProperty: seo.researchContent
        ? [{ "@type": "PropertyValue", name: "Research information", value: seo.researchContent }]
        : undefined,
    });
    document.head.appendChild(structuredData);
    document.title = seo.title;

    return () => {
      document.title = previousTitle;
      changes.forEach(restoreMeta);
      structuredData.remove();
      if (canonicalCreated) {
        canonical?.remove();
      } else if (canonical && previousCanonical === null) {
        canonical.removeAttribute("href");
      } else if (canonical) {
        canonical.href = previousCanonical;
      }
    };
  }, [product]);

  return null;
};
