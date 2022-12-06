# nodejs-restapi-structure

This is a loosely coupled structure for restapi appilcation using nodejs. For implemantation I used express as router and mongodb as database.From receiving request to response the track is.
### router --> controller --> service --> database
### router <-- controller <-- service <-- database

I used OOP and constructor pattern for optimizaion. You can make it much better with your idea.

Here is a diagram of structure:

## router
Here router catch the request and send it's conqueen ontroller. The result from controller will be router's response. You can oy the requst or add properties in request. 
