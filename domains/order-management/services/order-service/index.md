---
id: order-service
version: 1.0.0
name: Order API
summary: API for managing orders in the shopping application.
schemaPath: order-api.yml
specifications:
  openapiPath: order-api.yml
badges: []
owners:
  - order-management
setMessageOwnersToServiceOwners: true
sends: []
receives:
  - id: listOrders
    version: 1.0.0
  - id: getOrderById
    version: 1.0.0
  - id: 'order-api_PATCH_{orderId}'
    version: 1.0.0
---
API for managing orders in the shopping application.  

## Architecture diagram
<NodeGraph />
