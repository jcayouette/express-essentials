# HTTP Methods and Routes

## Routes:
Routes are how an application responds to a client request to a particular endpoint, which is a path and an HTTP request method.

## HTTP methods 

HTTP methods are actions taken on a specific resource, often corresponding ot create, read, update aand dlete (CRUD) operations.

- **GET**: Retrieves data from the server

  - Example: Get all items currently on your grocery list

- **POST**: Sends data to the server and creates a new resource

  - Example: Add a new item to your grocery list
 
- **PUT**: Updates an existing resource

  - Example: Change the quantity of an existing item on your grocery list

- **DELETE**: Deletes an existing resource

  - Example: Remove an item from your grocery list

## HTTP Messages

- **Requests**: Sent by the client ot trigger an action on the server

- **Responses**: Answers from the server

## Methods for routes in Express

```
app.get('/', (request, response)) => {
    response.send('This is a GET request at /')
}
```


