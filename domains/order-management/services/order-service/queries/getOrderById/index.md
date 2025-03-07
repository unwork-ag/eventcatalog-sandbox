---
id: getOrderById
version: 1.0.0
name: getOrderById
summary: Get order by ID
schemaPath: ''
badges:
  - content: GET
    textColor: blue
    backgroundColor: blue
owners:
  - order-management
---
## Overview
Retrieve details of a specific order.




## GET `(/{orderId})`

### Parameters
- **orderId** (path) (required)




### Responses

#### <span className="text-green-500">200 OK</span>
<SchemaViewer file="response-200.json" maxHeight="500" id="response-200" />

#### <span className="text-orange-500">404 Not Found</span>
<SchemaViewer file="response-404.json" maxHeight="500" id="response-404" />

#### <span className="text-red-500">500 Internal Server Error</span>
<SchemaViewer file="response-500.json" maxHeight="500" id="response-500" />



## Architecture

<NodeGraph />
