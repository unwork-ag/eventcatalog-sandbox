---
id: getBearer
version: 1.0-oas3
name: getBearer
summary: Retrieve a token either by credentials or SharedServices token
schemaPath: request-body.json
badges:
  - content: POST
    textColor: blue
    backgroundColor: blue
  - content: 'tag:authentication'
    textColor: blue
    backgroundColor: blue
owners:
  - payment-management
---
## Overview
Application specific authentication endpoint to request token.




## POST `(/openlab/sdms/authentication/v1.0/login)`




### Request Body
<SchemaViewer file="request-body.json" maxHeight="500" id="request-body" />


### Responses

#### <span className="text-green-500">200 OK</span>
<SchemaViewer file="response-200.json" maxHeight="500" id="response-200" />

#### <span className="text-orange-500">400 Bad Request</span>
<SchemaViewer file="response-400.json" maxHeight="500" id="response-400" />

#### <span className="text-orange-500">401 Unauthorized</span>
<SchemaViewer file="response-401.json" maxHeight="500" id="response-401" />

#### <span className="text-orange-500">403 Forbidden</span>
<SchemaViewer file="response-403.json" maxHeight="500" id="response-403" />

#### <span className="text-red-500">500 Internal Server Error</span>
<SchemaViewer file="response-500.json" maxHeight="500" id="response-500" />



## Architecture

<NodeGraph />
