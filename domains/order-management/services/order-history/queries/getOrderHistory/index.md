---
id: getOrderHistory
version: 1.0.0
name: getOrderHistory
summary: Retrieve order history
schemaPath: ''
badges:
  - content: GET
    textColor: blue
    backgroundColor: blue
owners:
  - order-management
---
## Overview
Fetch a list of past orders with optional filters like date range and status.




## GET `(/)`

### Parameters
- **startDate** (query): Start date for the order history range (YYYY-MM-DD)
- **endDate** (query): End date for the order history range (YYYY-MM-DD)
- **status** (query): Filter orders by status (pending, shipped, delivered, canceled)
- **customerId** (query): Customer ID for retrieving specific customer order history (optional if authenticated user)




### Responses

#### <span className="text-green-500">200 OK</span>
<SchemaViewer file="response-200.json" maxHeight="500" id="response-200" />



## Architecture

<NodeGraph />
