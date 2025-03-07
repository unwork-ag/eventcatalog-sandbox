---
id: product-service
version: 1.0.0
name: Product API
summary: API for managing and retrieving product details in the shopping application.
schemaPath: product-api.yml
specifications:
  openapiPath: product-api.yml
badges: []
owners:
  - product-management
setMessageOwnersToServiceOwners: true
sends: []
receives:
  - id: listProducts
    version: 1.0.0
  - id: getProductById
    version: 1.0.0
---
API for managing and retrieving product details in the shopping application.  

## Architecture diagram
<NodeGraph />
