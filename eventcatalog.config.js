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
          {
            path: [
              path.join(__dirname, "openapi-files", "activityLog.1.0.yml"),
              path.join(__dirname, "openapi-files", "activityLog.2.0.yml")
            ],
            id: 'activitylog-service',
            owners: ['fw']
          }
        ],
        domain: { id: "activitylog", name: "ActivityLog", version: "0.0.1" },
        preserveExistingMessages: false,
        httpMethodsToMessages: {
          GET: 'query',
          PATCH: 'command',
          POST: 'command',
          PUT: 'command',
          DELETE: 'command',
        }        
      },
    ],
    [
      "@eventcatalog/generator-openapi",
      {
        services: [
          { 
            path: [
              path.join(__dirname, "openapi-files", "applications.1.0.yml"),
              path.join(__dirname, "openapi-files", "applications.2.0.yml")
            ],
            id: 'olss-applications-service', owners: ['fw'] 
          },
        ],
        domain: { id: "applications", name: "Applications", version: "0.0.1" },
        preserveExistingMessages: false,
        httpMethodsToMessages: {
          GET: 'query',
          PATCH: 'command',
          POST: 'command',
          PUT: 'command',
          DELETE: 'command',
        }        
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
