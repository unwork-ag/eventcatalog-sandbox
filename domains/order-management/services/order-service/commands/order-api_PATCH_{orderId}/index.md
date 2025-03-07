---
id: 'order-api_PATCH_{orderId}'
version: 1.0.0
name: 'order-api_PATCH_{orderId}'
summary: Update order status
schemaPath: request-body.json
badges:
  - content: PATCH
    textColor: blue
    backgroundColor: blue
owners:
  - order-management
---
## Overview
Update the status of an order (e.g., cancel).




## PATCH `(/{orderId})`

### Parameters
- **orderId** (path) (required)



### Request Body
<SchemaViewer file="request-body.json" maxHeight="500" id="request-body" />


### Responses

#### <span className="text-orange-500">404 Not Found</span>
<SchemaViewer file="response-404.json" maxHeight="500" id="response-404" />

#### <span className="text-red-500">500 Internal Server Error</span>
<SchemaViewer file="response-500.json" maxHeight="500" id="response-500" />



## Architecture

<NodeGraph />
