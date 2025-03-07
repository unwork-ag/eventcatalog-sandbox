---
id: payment-service
version: 1.0.0
name: Payment API
summary: API for handling payment transactions.
schemaPath: payment-api.yml
specifications:
  openapiPath: payment-api.yml
badges: []
owners:
  - payment-management
setMessageOwnersToServiceOwners: true
sends: []
receives:
  - id: initiatePayment
    version: 1.0.0
  - id: getPaymentStatus
    version: 1.0.0
---
API for handling payment transactions.  

## Architecture diagram
<NodeGraph />
