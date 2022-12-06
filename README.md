# nodejs-restapi-structure

This is a loosely coupled structure for restapi appilcation using nodejs. For implemantation I used express as router and mongodb as database.From receiving request to response the track is.
### router --> controller --> service --> database
### router <-- controller <-- service <-- database

I used OOP and constructor pattern. You can make it much better with your own idea.

Here is a diagram of structure:

## router
Here router catch the request and send it's conqueen ontroller. The result from controller will be router's response. You can modify the requst or add properties in request. I used express js for routing . Feel free to use Koa or Fastify or you can use your own!


## controller
Controller receive request and parse it. Then send it to services. Try to avoid writing business logic in controller. For example check controller folder.

## service
All the business logic, validation, sanitization is in service layer. Service layer communicate with database layer and send response to it's controller. service layer can communicate with it;s own services and also other services. Try to avoid controller invoking in service layer. You can improve or rebuild service layer for your own.

## database
In database layer I database will communicate with services. It receive required command from controller and parse it. I used mongoose orm. You can use native driver or other database language as you like. 

### How you can improve this structure?
1. Restructure pagination parser for narrowing document size.
2. You can improve get request response structure
3. You can use json schema for validation and sanitazion 
4. Divide big utility function to small function. 
And 1000 of things.
