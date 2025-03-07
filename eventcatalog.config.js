import path from "path";
import url from "url";

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

/** @type {import('@eventcatalog/core/bin/eventcatalog.config').Config} */
export default {
  title: "EventCatalog",
  tagline: 'This internal platform provides a comprehensive view of our event-driven architecture across all systems. Use this portal to discover existing domains, explore services and their dependencies, and understand the message contracts that connect our infrastructure',
  organizationName: 'MyCompany',
  homepageLink: "https://eventcatalog.dev/",
  editUrl: "https://github.com/boyney123/eventcatalog-demo/edit/master",
  // By default set to false, add true to get urls ending in /
  trailingSlash: false,
  // Change to make the base url of the site different, by default https://{website}.com/docs,
  // changing to /company would be https://{website}.com/company/docs,
  base: "/",
  // Customize the logo, add your logo to public/ folder
  logo: {
    alt: "EventCatalog Logo",
    src: "/logo.png",
    text: "EventCatalog",
  },
  generators: [
    [
      "@eventcatalog/generator-openapi",
      {
        services: [
          { path: path.join(__dirname, "openapi-files", "product-api.yml"), id: 'product-service', owners: ['product-management'] },
        ],
        domain: { id: "products", name: "Products", version: "0.0.1" },
      },
    ],
    [
      "@eventcatalog/generator-openapi",
      {
        services: [
          { path: path.join(__dirname, "openapi-files", "order-api.yml"), id: 'order-service', owners: ['order-management'] },
          { path: path.join(__dirname, "openapi-files", "order-history.yml"), id: 'order-history', owners: ['order-management'] },
        ],
        domain: {
          id: "order-management",
          name: "Order management",
          version: "0.0.1",
        },
      },
    ],
    [
      "@eventcatalog/generator-openapi",
      {
        services: [
          { path: path.join(__dirname, "openapi-files", "payment-api.yml"), id: 'payment-service', owners: ['payment-management'] },
        ],
        domain: { id: "payment", name: "Payment", version: "0.0.1" },
      },
    ],
    [
      "@eventcatalog/generator-openapi",
      {
        services: [
          { path: path.join(__dirname, "openapi-files", "file-api.yaml"), id: 'file-service', owners: ['payment-management'] },
        ],
        domain: { id: "payment", name: "Payment", version: "0.0.1" },
      },
    ],    
  ],
  docs: {
    sidebar: {
      // TREE_VIEW will render the DOCS as a tree view and map your file system folder structure
      // LIST_VIEW will render the DOCS that look familiar to API documentation websites
      type: 'LIST_VIEW'
    },
  },
  // Enable RSS feed for your eventcatalog
  rss: {
    enabled: true,
    // number of items to include in the feed per resource (event, service, etc)
    limit: 20
  },
  // required random generated id used by eventcatalog
  cId: 'e6c39392-30ca-430e-83a5-23612816983d'
};
