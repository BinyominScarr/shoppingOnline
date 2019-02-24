# Shopping Online

*Note:* &nbsp; I have inserted comments into all the Angular components where I thought they would be helpful, however I did not bother commenting the following:
* Angular services.
* Angular models.
* Angular HTML.
* Angular CSS.
* Node.Js.\
\
The reason I did not comment the above code is because I think it is pretty self explanatory.
To get a better understanding of the way the `Angular services` are run study the `service manager`
``` C:\Users\Binyomin\Desktop\Shopping Online\client\src\app\shared\managers\service.manager.ts```

### Project Description:
* This project is a mock &nbsp; `online shopping center`.
* Users can register/login to personal accounts.
* Users can browse through 4 categories of products.
* Every user gets a 'shopping cart' which they can add products to.
* Shopping carts are saved to the users account.
* Only the project's Administrator can add/edit products.

### See Live Demo:
TODO

### Demo:
![picture](shoppingonline.gif)

### Projects source of shopping center products:
*Note:* &nbsp; The images and their path must be downloaded and created by you.\
Link to images: &nbsp; http://pngimg.com/
```json

// PRODUCT CATEGORIES
[{"id": 1, "category": "milk & eggs"},
{"id": 2, "category": "fruits & vegetables"},
{"id": 3, "category": "fish & meat"},
{"id": 4, "category": "drinks & wine"}]

// PRODUCTS
[{"productName": "butter", "categoryId": 1, "price": 2.00, "image": "./assets/images/milk&eggs/milk/butter.png"},
{"productName": "cottage cheese", "categoryId": 1, "price": 1.50, "image": "./assets/images/milk&eggs/milk/cottageCheese.png"},
{"productName": "ice cream", "categoryId": 1, "price": 4.75, "image": "./assets/images/milk&eggs/milk/iceCream.png"},
{"productName": "milk", "categoryId": 1, "price": 2.25, "image": "./assets/images/milk&eggs/milk/milk.png"},
{"productName": "yogurt", "categoryId": 1, "price": 2.00, "image": "./assets/images/milk&eggs/milk/yogurt.png"},
{"productName": "eggs", "categoryId": 1, "price": 3.00, "image": "./assets/images/milk&eggs/eggs/eggs.png"},
{"productName": "apple", "categoryId": 2, "price": 4.00, "image": "./assets/images/fruits&vegetables/fruits/apple.png"},
{"productName": "grapes", "categoryId": 2, "price": 5.25, "image": "./assets/images/fruits&vegetables/fruits/grapes.png"},
{"productName": "mango", "categoryId": 2, "price": 7.00, "image": "./assets/images/fruits&vegetables/fruits/mango.png"},
{"productName": "peach", "categoryId": 2, "price": 2.50, "image": "./assets/images/fruits&vegetables/fruits/peach.png"},
{"productName": "persimmon", "categoryId": 2, "price": 3.75, "image": "./assets/images/fruits&vegetables/fruits/persimmon.png"},
{"productName": "pineapple", "categoryId": 2, "price": 8.00, "image": "./assets/images/fruits&vegetables/fruits/pineapple.png"},
{"productName": "carrot", "categoryId": 2, "price": 4.25, "image": "./assets/images/fruits&vegetables/vegetables/carrot.png"},
{"productName": "cucumber", "categoryId": 2, "price": 3.00, "image": "./assets/images/fruits&vegetables/vegetables/cucumber.png"},
{"productName": "onion", "categoryId": 2, "price": 3.50, "image": "./assets/images/fruits&vegetables/vegetables/onion.png"},
{"productName": "green pepper", "categoryId": 2, "price": 2.75, "image": "./assets/images/fruits&vegetables/vegetables/pepperGreen.png"},
{"productName": "red pepper", "categoryId": 2, "price": 2.75, "image": "./assets/images/fruits&vegetables/vegetables/pepperRed.png"},
{"productName": "yellow pepper", "categoryId": 2, "price": 2.75, "image": "./assets/images/fruits&vegetables/vegetables/pepperYellow.png"},
{"productName": "potato", "categoryId": 2, "price": 3.50, "image": "./assets/images/fruits&vegetables/vegetables/potato.png"},
{"productName": "tomato", "categoryId": 2, "price": 3.00, "image": "./assets/images/fruits&vegetables/vegetables/tomato.png"},
{"productName": "avocado", "categoryId": 2, "price": 6.75, "image": "./assets/images/fruits&vegetables/fruits/avocado.png"},
{"productName": "sushi", "categoryId": 3, "price": 20.00, "image": "./assets/images/fish&meat/fish/sushi.png"},
{"productName": "fried chicken", "categoryId": 3, "price": 15.00, "image": "./assets/images/fish&meat/chicken/friedChicken.png"},
{"productName": "chopped meat", "categoryId": 3, "price": 11.99, "image": "./assets/images/fish&meat/meat/chopped.png"},
{"productName": "ribs", "categoryId": 3, "price": 23.50, "image": "./assets/images/fish&meat/meat/ribs.png"},
{"productName": "sausage", "categoryId": 3, "price": 17.25, "image": "./assets/images/fish&meat/meat/sausage.png"},
{"productName": "seasoned meat", "categoryId": 3, "price": 24.00, "image": "./assets/images/fish&meat/meat/seasoned.png"},
{"productName": "shoulder", "categoryId": 3, "price": 19.90, "image": "./assets/images/fish&meat/meat/shoulder.png"},
{"productName": "steak", "categoryId": 3, "price": 27.00, "image": "./assets/images/fish&meat/meat/steak.png"},
{"productName": "water", "categoryId": 4, "price": 1.75, "image": "./assets/images/drinks&wine/water/water.png"},
{"productName": "coca cola", "categoryId": 4, "price": 2.50, "image": "./assets/images/drinks&wine/sweet/cocaCola.png"},
{"productName": "coca cola light", "categoryId": 4, "price": 2.50, "image": "./assets/images/drinks&wine/sweet/cocaColaLight.png"},
{"productName": "coca cola zero", "categoryId": 4, "price": 2.50, "image": "./assets/images/drinks&wine/sweet/cocaColaZero.png"},
{"productName": "pepsi", "categoryId": 4, "price": 2.00, "image": "./assets/images/drinks&wine/sweet/pepsi.png"},
{"productName": "sprite", "categoryId": 4, "price": 2.00, "image": "./assets/images/drinks&wine/sweet/sprite.png"},
{"productName": "beer", "categoryId": 4, "price": 3.00, "image": "./assets/images/drinks&wine/alcohol/beer.png"},
{"productName": "cognac", "categoryId": 4, "price": 30.00, "image": "./assets/images/drinks&wine/alcohol/cognac.png"},
{"productName": "absolut vodka", "categoryId": 4, "price": 35.00, "image": "./assets/images/drinks&wine/alcohol/vodkaAbsolut.png"},
{"productName": "grey goose vodka", "categoryId": 4, "price": 45.00, "image": "./assets/images/drinks&wine/alcohol/vodkaGreyGoose.png"},
{"productName": "smirnoff vodka", "categoryId": 4, "price": 37.00, "image": "./assets/images/drinks&wine/alcohol/vodkaSmirnoff.png"},
{"productName": "champagne", "categoryId": 4, "price": 12.00, "image": "./assets/images/drinks&wine/alcohol/wineChampagne.png"},
{"productName": "red wine", "categoryId": 4, "price": 13.75, "image": "./assets/images/drinks&wine/alcohol/wineRed.png"},
{"productName": "white wine", "categoryId": 4, "price": 12.50, "image": "./assets/images/drinks&wine/alcohol/wineWhite.png"}]
```
### Technologies Used in Project:
* `Mongo` - Database
* `Node.js` - Server
* `Angular` - Client
### To run this project on your local computer you will require the following:
* MongoDB
* Node.js
* Angular cli
### Download links for the above requirments:
`MongoDB` &nbsp;  https://www.mongodb.com/download-center/community \
`Node.js` &nbsp; https://nodejs.org/en/download/ \
`Angular Cli` &nbsp; In a cli (cmd/powershell/node) type: &nbsp; `npm install -g @angular/cli`
### Steps to run this project locally after installing all requirments:
TODO
* If you are using `Google Chrome` hit the windows button on your keyboard and type run and hit enter, in the window tjat opens type: `chrome.exe --user-data-dir="C:/Chrome dev session" --disable-web-security`
## Step 1 - Create the DB models
### User model
```json
{

  firstName: {
    type: String,
    trim: true,
    match: /[A-Za-z]/,
    required: true,
    minlength: 3,
    maxlength: 15
  },

  lastName: {
    type: String,
    trim: true,
    match: /[A-Za-z]/,
    required: true,
    minlength: 3,
    maxlength: 15
  },

  email: {
    type: String,
    trim: true,
    match: /[a-zA-Z0-9]+[@]{1}[a-zA-Z0-9]+[.]{1}[a-zA-Z]{1,}[.]?[a-zA-Z]{1,}/,
    required: true,
    unique: true,
    minlength: 3,
    maxlength: 254
  },

  password: {
    type: String,
    required: true,
    minlength: 64,
    maxlength: 64
  },

  israeliId: {
    type: String,
    trim: true,
    match: /[0-9]/,
    required: true,
    unique: true,
    minlength: 9,
    maxlength: 9
  },

  city: {
    type: String,
    trim: true,
    match: /[A-Za-z]/,
    required: true,
  },

  street: {
    type: String,
    trim: true,
    match: /[A-Za-z0-9]/,
    required: true,
  }

}
```
### Category model
```json
{
  id: {
    type: Number,
    required: true,
    unique: true
  },

  category: {
    type: String,
    trim: true,
    required: true,
    unique: true
  },

}
```
### Product model
```json
{

  productName: {
    type: String,
    trim: true,
    match: /[A-Za-z0-9]/,
    required: true,
    unique: true
  },

  categoryId: {
    type: Number,
    match: /[1-4]/,
    required: true,
    unique: false
  },

  price: {
    type: Number,
    trim: true,
    match: /^(00|[1-9]{1}[0-9]{0,2})[.]{1}[0-9]{2}$/,
    required: true,
  },

  image: {
    type: String,
    trim: true,
    match: /^\S+(\.png|\.jpg|\.jpeg|\.svg)$/,
    required: true,
    unique: true
  }

}
```
### Cart model
```json
{

  userId: {
    type: String,
    required: true,
    unique: true
  },

  creationDate: {
    type: String,
    required: true,
  }

}
```
### Product in cart model
```json
{

  productId: {
    type: String,
    match: /[0-9]/,
    required: true,
  },

  quantity: {
    type: Number,
    match: /[0-9]/,
    required: true
  },

  price: {
    type: Number,
    trim: true,
    match: /^([0-9]{1}|[0-9](.){1}([0-9]){2})$/,
    required: true
  },

  cartId: {
    type: String,
    required: true,
    unique: false
  }

}
```
### Order model
```json
{

  userId: {
    type: String,
    required: true,
  },

  cartId: {
    type: String,
    required: true,
  },

  total: {
    type: Number,
    trim: true,
    match: /^[0-9]*(\.)?([0-9])+[$]{1}$/,
    required: true,
  },

  city: {
    type: String,
    trim: true,
    match: /[A-Za-z]/,
    required: true,
  },

  street: {
    type: String,
    trim: true,
    match: /[A-Za-z0-9]/,
    required: true,
  },

  shippingDate: {
    type: String,
    required: true,
  },

  orderDate: {
    type: String,
    required: true,
  },

  fourLastDigits: {
    type: String,
    match: /[0-9]{4}/,
    required: true
  }

}
```
## Step 2 - Create the Server controllers
The server side will use `Express` as a server.

* User controller
  * `POST` - Handles the registration logic.
  * `GET` - Handles the login logic.
* Category controller
  * `GET` - Returns all product categories from the DB.
* Product controller
  * `GET` - Returns all existing products from the DB.
  * `POST` - Adds a new product to the DB.
  * `PUT` - Updates an existing product in the the DB.
* Cart controller
  * `GET` - Retrieves a users cart from the DB if it exists.
  * `POST` - Creates a new cart in the DB if the user is new.
* Product in cart controller
  * `GET` - Retrieves all products from the DB that the user saved in their cart.
  * `POST` - Adds a product to the cart if the same type of product is not yet in the cart.
  * `PUT` - Increments the amount and price of a product which is already in the cart.
  * `DELETE` - Removes a specific product from the cart.
  * `DELETE /:clearcart` - Removes all of the products from the cart.
* Order controller
  * `GET` - Retrieves all of the orders ever made on the local project.
  * `POST` - Handles the logic for placing an order.
## Step 3 - Test the server with `curl`
### User controller `curl` test
*Note:* &nbsp; The password must be sent to the server as a lowercase SHA256 hash of a string which is at least 8 characters long.
```
Original password: 12345678
SHA256 hash: ef797c8118f02dfb649607dd5d3f8c7623048c9c063d532cc95c5ed7a898a64f
```
* `POST` request with valid data for a new user (registration).
```
curl -v -X POST -H "Content-type: application/json" -d "{\"firstName\":\"john\",\"lastName\": \"doe\",\"email\": \"jd@gmail.com\",\"password\":\"ef797c8118f02dfb649607dd5d3f8c7623048c9c063d532cc95c5ed7a898a64f\",\"israeliId\":\"999999999\",\"city\":\"ashdod\",\"street\":\"zzz\"}" localhost:8200/shopping/api/users
```
```
> POST /shopping/api/users HTTP/1.1
> Host: localhost:8200
> User-Agent: curl/7.55.1
> Accept: */*
> Content-type: application/json
> Content-Length: 195
>
* upload completely sent off: 195 out of 195 bytes
< HTTP/1.1 201 Created
< X-Powered-By: Express
< xx-auth: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjVjNDljYzY5NmEwMmY5NzcyY2YyYmJlNiIsImZpcnN0TmFtZSI6ImpvaG4iLCJsYXN0TmFtZSI6ImRvZSIsImVtYWlsIjoiamRAZ21haWwuY29tIiwicGFzc3dvcmQiOiJlZjc5N2M4MTE4ZjAyZGZiNjQ5NjA3ZGQ1ZDNmOGM3NjIzMDQ4YzljMDYzZDUzMmNjOTVjNWVkN2E4OThhNjRmIiwiaXNyYWVsaUlkIjoiOTk5OTk5OTk5IiwiY2l0eSI6ImFzaGRvZCIsInN0cmVldCI6Inp6eiIsIl9fdiI6MH0sImlzTG9nZ2VkSW4iOnRydWUsImlhdCI6MTU0ODM0MDMyOX0.j_9pp4rVxmZfRiuJVsEiBEFur0lMT3JVe9UEn-UhSq8
< Content-Type: text/html; charset=utf-8
< Content-Length: 29
< ETag: W/"1d-wz3Jeh9HyIOdCM9kGFrt6H7wvKg"
< Date: Thu, 24 Jan 2019 14:32:09 GMT
< Connection: keep-alive
<
{"status":"register success"}* Connection #0 to host localhost left intact
```
* `POST` request with invalid data for a new user (email is invalid).
```
curl -v -X POST -H "Content-type: application/json" -d "{\"firstName\":\"john\",\"lastName\": \"doe\",\"email\": \"jd@gmail.c\",\"password\":\"ef797c8118f02dfb649607dd5d3f8c7623048c9c063d532cc95c5ed7a898a64f\",\"israeliId\":\"999999999\",\"city\":\"ashdod\",\"street\":\"zzz\"}" localhost:8200/shopping/api/users
```
```
> POST /shopping/api/users HTTP/1.1
> Host: localhost:8200
> User-Agent: curl/7.55.1
> Accept: */*
> Content-type: application/json
> Content-Length: 193
>
* upload completely sent off: 193 out of 193 bytes
< HTTP/1.1 400 Bad Request
< X-Powered-By: Express
< Content-Type: application/json; charset=utf-8
< Content-Length: 419
< ETag: W/"1a3-Khmj721S8TbYG3tIfcv5Zfly5rs"
< Date: Thu, 24 Jan 2019 14:33:37 GMT
< Connection: keep-alive
<
{"errors":{"email":{"message":"Path `email` is invalid (jd@gmail.c).","name":"ValidatorError","properties":{"message":"Path `email` is invalid (jd@gmail.c).","type":"regexp","regexp":{},"path":"email","value":"jd@gmail.c"},"kind":"regexp","path":"email","value":"jd@gmail.c"}},"_message":"User validation failed","message":"User validation failed: email: Path `email` is invalid (jd@gmail.c).","name":"ValidationError"}* Connection #0 to host localhost left intact
```
* `GET` request with valid data (login).
```
curl -v -X GET -H "xx-auth: ef797c8118f02dfb649607dd5d3f8c7623048c9c063d532cc95c5ed7a898a64fjd@gmail.com" localhost:8200/shopping/api/users
```
```
> GET /shopping/api/users HTTP/1.1
> Host: localhost:8200
> User-Agent: curl/7.55.1
> Accept: */*
> xx-auth: ef797c8118f02dfb649607dd5d3f8c7623048c9c063d532cc95c5ed7a898a64fjd@gmail.com
>
< HTTP/1.1 200 OK
< X-Powered-By: Express
< Access-Control-Allow-Origin: *
< xx-auth: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjVjNDljYzY5NmEwMmY5NzcyY2YyYmJlNiIsImZpcnN0TmFtZSI6ImpvaG4iLCJsYXN0TmFtZSI6ImRvZSIsImVtYWlsIjoiamRAZ21haWwuY29tIiwicGFzc3dvcmQiOiJlZjc5N2M4MTE4ZjAyZGZiNjQ5NjA3ZGQ1ZDNmOGM3NjIzMDQ4YzljMDYzZDUzMmNjOTVjNWVkN2E4OThhNjRmIiwiaXNyYWVsaUlkIjoiOTk5OTk5OTk5IiwiY2l0eSI6ImFzaGRvZCIsInN0cmVldCI6Inp6eiIsIl9fdiI6MH0sImlzTG9nZ2VkSW4iOnRydWUsImlhdCI6MTU0ODM0MjI2NX0.SS0TAl7eFckLWzg6jMKHfg-10CY8nTxFLK3IHIOplgA
< Content-Type: text/html; charset=utf-8
< Content-Length: 26
< ETag: W/"1a-lntZxpO/NYZB2ktprU25dMf3tHs"
< Date: Thu, 24 Jan 2019 15:04:25 GMT
< Connection: keep-alive
<
{"status":"login success"}* Connection #0 to host localhost left intact
```
* `GET` request with invalid data (one character in the hash string changed).
```
curl -v -X GET -H "xx-auth: ef797c8118f02dfb649606dd5d3f8c7623048c9c063d532ac95c5ed7a898a64fjd@gmail.com" localhost:8200/shopping/api/users
```
```
> GET /shopping/api/users HTTP/1.1
> Host: localhost:8200
> User-Agent: curl/7.55.1
> Accept: */*
> xx-auth: ef797c8118f02dfb649606dd5d3f8c7623048c9c063d532ac95c5ed7a898a64fjd@gmail.com
>
< HTTP/1.1 401 Unauthorized
< X-Powered-By: Express
< Access-Control-Allow-Origin: *
< Content-Type: text/plain; charset=utf-8
< Content-Length: 12
< ETag: W/"c-dAuDFQrdjS3hezqxDTNgW7AOlYk"
< Date: Thu, 24 Jan 2019 15:16:56 GMT
< Connection: keep-alive
<
Unauthorized* Connection #0 to host localhost left intact
```
### Category controller `curl` test
* `GET` request.
```
curl -v -X GET localhost:8200/shopping/api/categories
```
```
> GET /shopping/api/categories HTTP/1.1
> Host: localhost:8200
> User-Agent: curl/7.55.1
> Accept: */*
>
< HTTP/1.1 200 OK
< X-Powered-By: Express
< Access-Control-Allow-Origin: *
< Content-Type: application/json; charset=utf-8
< Content-Length: 311
< ETag: W/"137-N4Z3rC0AoLW0tAISEJhEm6Kebh0"
< Date: Thu, 24 Jan 2019 15:24:05 GMT
< Connection: keep-alive
<
[{"_id":"5bea196dc8395148e818acfa","id":1,"category":"milk & eggs","__v":0},{"_id":"5bea196dc8395148e818acfb","id":2,"category":"fruits & vegetables","__v":0},{"_id":"5bea196dc8395148e818acfc","id":3,"category":"fish & meat","__v":0},{"_id":"5bea196dc8395148e818acfd","id":4,"category":"drinks & wine","__v":0}]* Connection #0 to host localhost left intact
```
### Product controller `curl` test
* `GET` request.
```
curl -v -X GET localhost:8200/shopping/api/products
```
```
> GET /shopping/api/products HTTP/1.1
> Host: localhost:8200
> User-Agent: curl/7.55.1
> Accept: */*
>
< HTTP/1.1 200 OK
< X-Powered-By: Express
< Access-Control-Allow-Origin: *
< Content-Type: application/json; charset=utf-8
< Content-Length: 6304
< ETag: W/"18a0-THgKeUIEl6/wkDqdYiTs1Rjdff4"
< Date: Thu, 24 Jan 2019 15:36:03 GMT
< Connection: keep-alive
<
[{"_id":"5c3cf060c25ae6b150b90dbf","productName":"butter","categoryId":1,"price":2,"image":"./assets/images/milk&eggs/milk/butter.png"},{"_id":"5c3cf060c25ae6b150b90dc0","productName":"cottage cheese","categoryId":1,"price":1.5,"image":"./assets/images/milk&eggs/milk/cottageCheese.png"},{"_id":"5c3cf060c25ae6b150b90dc1","productName":"ice cream","categoryId":1,"price":4.75,"image":"./assets/images/milk&eggs/milk/iceCream.png"},{"_id":"5c3cf060c25ae6b150b90dc2","productName":"milk","categoryId":1,"price":2.25,"image":"./assets/images/milk&eggs/milk/milk.png"},{"_id":"5c3cf060c25ae6b150b90dc3","productName":"yogurt","categoryId":1,"price":2,"image":"./assets/images/milk&eggs/milk/yogurt.png"},{"_id":"5c3cf060c25ae6b150b90dc4","productName":"eggs","categoryId":1,"price":3,"image":"./assets/images/milk&eggs/eggs/eggs.png"},{"_id":"5c3cf060c25ae6b150b90dc5","productName":"apple","categoryId":2,"price":4,"image":"./assets/images/fruits&vegetables/fruits/apple.png"},{"_id":"5c3cf060c25ae6b150b90dc6","productName":"grapes","categoryId":2,"price":5.25,"image":"./assets/images/fruits&vegetables/fruits/grapes.png"},{"_id":"5c3cf060c25ae6b150b90dc7","productName":"mango","categoryId":2,"price":7,"image":"./assets/images/fruits&vegetables/fruits/mango.png"},{"_id":"5c3cf060c25ae6b150b90dc8","productName":"peach","categoryId":2,"price":2.5,"image":"./assets/images/fruits&vegetables/fruits/peach.png"},{"_id":"5c3cf060c25ae6b150b90dc9","productName":"persimmon","categoryId":2,"price":3.75,"image":"./assets/images/fruits&vegetables/fruits/persimmon.png"},{"_id":"5c3cf060c25ae6b150b90dca","productName":"pineapple","categoryId":2,"price":8,"image":"./assets/images/fruits&vegetables/fruits/pineapple.png"},{"_id":"5c3cf060c25ae6b150b90dcb","productName":"carrot","categoryId":2,"price":4.25,"image":"./assets/images/fruits&vegetables/vegetables/carrot.png"},{"_id":"5c3cf060c25ae6b150b90dcc","productName":"cucumber","categoryId":2,"price":3,"image":"./assets/images/fruits&vegetables/vegetables/cucumber.png"},{"_id":"5c3cf060c25ae6b150b90dcd","productName":"onion","categoryId":2,"price":3.5,"image":"./assets/images/fruits&vegetables/vegetables/onion.png"},{"_id":"5c3cf060c25ae6b150b90dce","productName":"green pepper","categoryId":2,"price":2.75,"image":"./assets/images/fruits&vegetables/vegetables/pepperGreen.png"},{"_id":"5c3cf060c25ae6b150b90dcf","productName":"red pepper","categoryId":2,"price":2.75,"image":"./assets/images/fruits&vegetables/vegetables/pepperRed.png"},{"_id":"5c3cf060c25ae6b150b90dd0","productName":"yellow pepper","categoryId":2,"price":2.75,"image":"./assets/images/fruits&vegetables/vegetables/pepperYellow.png"},{"_id":"5c3cf060c25ae6b150b90dd1","productName":"potato","categoryId":2,"price":3.5,"image":"./assets/images/fruits&vegetables/vegetables/potato.png"},{"_id":"5c3cf060c25ae6b150b90dd2","productName":"tomato","categoryId":2,"price":3,"image":"./assets/images/fruits&vegetables/vegetables/tomato.png"},{"_id":"5c3cf060c25ae6b150b90dd3","productName":"sushi","categoryId":3,"price":20,"image":"./assets/images/fish&meat/fish/sushi.png"},{"_id":"5c3cf060c25ae6b150b90dd4","productName":"fried chicken","categoryId":3,"price":15,"image":"./assets/images/fish&meat/chicken/friedChicken.png"},{"_id":"5c3cf060c25ae6b150b90dd5","productName":"chopped meat","categoryId":3,"price":11.99,"image":"./assets/images/fish&meat/meat/chopped.png"},{"_id":"5c3cf060c25ae6b150b90dd6","productName":"ribs","categoryId":3,"price":23.5,"image":"./assets/images/fish&meat/meat/ribs.png"},{"_id":"5c3cf060c25ae6b150b90dd7","productName":"sausage","categoryId":3,"price":17.25,"image":"./assets/images/fish&meat/meat/sausage.png"},{"_id":"5c3cf060c25ae6b150b90dd8","productName":"seasoned meat","categoryId":3,"price":24,"image":"./assets/images/fish&meat/meat/seasoned.png"},{"_id":"5c3cf060c25ae6b150b90dd9","productName":"shoulder","categoryId":3,"price":19.9,"image":"./assets/images/fish&meat/meat/shoulder.png"},{"_id":"5c3cf060c25ae6b150b90dda","productName":"steak","categoryId":3,"price":27,"image":"./assets/images/fish&meat/meat/steak.png"},{"_id":"5c3cf060c25ae6b150b90ddb","productName":"water","categoryId":4,"price":1.75,"image":"./assets/images/drinks&wine/water/water.png"},{"_id":"5c3cf060c25ae6b150b90ddc","productName":"coca cola","categoryId":4,"price":2.5,"image":"./assets/images/drinks&wine/sweet/cocaCola.png"},{"_id":"5c3cf060c25ae6b150b90ddd","productName":"coca cola light","categoryId":4,"price":2.5,"image":"./assets/images/drinks&wine/sweet/cocaColaLight.png"},{"_id":"5c3cf060c25ae6b150b90dde","productName":"coca cola zero","categoryId":4,"price":2.5,"image":"./assets/images/drinks&wine/sweet/cocaColaZero.png"},{"_id":"5c3cf060c25ae6b150b90ddf","productName":"pepsi","categoryId":4,"price":2,"image":"./assets/images/drinks&wine/sweet/pepsi.png"},{"_id":"5c3cf060c25ae6b150b90de0","productName":"sprite","categoryId":4,"price":2,"image":"./assets/images/drinks&wine/sweet/sprite.png"},{"_id":"5c3cf060c25ae6b150b90de1","productName":"beer","categoryId":4,"price":3,"image":"./assets/images/drinks&wine/alcohol/beer.png"},{"_id":"5c3cf060c25ae6b150b90de2","productName":"cognac","categoryId":4,"price":30,"image":"./assets/images/drinks&wine/alcohol/cognac.png"},{"_id":"5c3cf060c25ae6b150b90de3","productName":"absolut vodka","categoryId":4,"price":35,"image":"./assets/images/drinks&wine/alcohol/vodkaAbsolut.png"},{"_id":"5c3cf060c25ae6b150b90de4","productName":"grey goose vodka","categoryId":4,"price":45,"image":"./assets/images/drinks&wine/alcohol/vodkaGreyGoose.png"},{"_id":"5c3cf060c25ae6b150b90de5","productName":"smirnoff vodka","categoryId":4,"price":37,"image":"./assets/images/drinks&wine/alcohol/vodkaSmirnoff.png"},{"_id":"5c3cf060c25ae6b150b90de6","productName":"champagne","categoryId":4,"price":12,"image":"./assets/images/drinks&wine/alcohol/wineChampagne.png"},{"_id":"5c3cf060c25ae6b150b90de7","productName":"red wine","categoryId":4,"price":13.75,"image":"./assets/images/drinks&wine/alcohol/wineRed.png"},{"_id":"5c3cf060c25ae6b150b90de8","productName":"white wine","categoryId":4,"price":12.5,"image":"./assets/images/drinks&wine/alcohol/wineWhite.png"},{"_id":"5c499169b851427bfe30bdb3","productName":"avocado","__v":0,"categoryId":2,"image":"./assets/images/fruits&vegetables/fruits/avocado.png","price":6.75}]* Connection #0 to host localhost left intact
```
* `POST` request with valid data for a new product.
```
curl -v -X POST -H "Content-type: application/json" -d "{\"productName\":\"pear\",\"categoryId\":2,\"price\": 4.00,\"image\":\"http://pngimg.com/uploads/pear/pear_PNG3466.png\"}" localhost:8200/shopping/api/products
```
```
> POST /shopping/api/products HTTP/1.1
> Host: localhost:8200
> User-Agent: curl/7.55.1
> Accept: */*
> Content-type: application/json
> Content-Length: 109
>
* upload completely sent off: 109 out of 109 bytes
< HTTP/1.1 201 Created
< X-Powered-By: Express
< Content-Type: application/json; charset=utf-8
< Content-Length: 146
< ETag: W/"92-8sNMagOJdC10uUdetl6tWJAE8as"
< Date: Thu, 24 Jan 2019 15:45:13 GMT
< Connection: keep-alive
<
{"_id":"5c49dd8992106b466cd7e315","productName":"pear","categoryId":2,"price":4,"image":"http://pngimg.com/uploads/pear/pear_PNG3466.png","__v":0}* Connection #0 to host localhost left intact
```
*Note:* &nbsp; Although only the Admministrator should be allowed to post new products, as of now only the client side has that validation.
* `PUT` request, updated price from 4.00 (previous `POSt` request) to 4.25.
```
curl -v -X PUT -H "Content-Type: application/json" -d "{\"productName\":\"pear\",\"categoryId\":2,\"price\": 4.25,\"image\":\"http://pngimg.com/uploads/pear/pear_PNG3466.png\"}" localhost:8200/shopping/api/products
```
```
> PUT /shopping/api/products HTTP/1.1
> Host: localhost:8200
> User-Agent: curl/7.55.1
> Accept: */*
> Content-Type: application/json
> Content-Length: 109
>
* upload completely sent off: 109 out of 109 bytes
< HTTP/1.1 201 Created
< X-Powered-By: Express
< Content-Type: application/json; charset=utf-8
< Content-Length: 28
< ETag: W/"1c-9CSp0YZbwVi1S/g+0CyT4pOh1+k"
< Date: Thu, 24 Jan 2019 16:12:54 GMT
< Connection: keep-alive
<
{"n":1,"nModified":1,"ok":1}* Connection #0 to host localhost left intact
```
### Cart controller `curl` test
* `GET` request with valid data (user `MongoDB` id).
```
curl -v -X GET -H localhost:8200/shopping/api/carts?customerId=5c48d630713f884324381ba2
```
```
> GET /shopping/api/carts?customerId=5c48d630713f884324381ba2 HTTP/1.1
> Host: localhost:8200
> User-Agent: curl/7.55.1
> Accept: */*
>
< HTTP/1.1 200 OK
< X-Powered-By: Express
< Access-Control-Allow-Origin: *
< Content-Type: application/json; charset=utf-8
< Content-Length: 124
< ETag: W/"7c-Tc4lKaNj2+EdXengSj7sI0z8Td4"
< Date: Thu, 24 Jan 2019 16:28:29 GMT
< Connection: keep-alive
<
{"_id":"5c48d633713f884324381ba3","customerId":"5c48d630713f884324381ba2","creationDate":"Wed Jan 23 2019 23:01:39","__v":0}* Connection #0 to host localhost left intact
```
* `POST` request with valid data for a new cart (simulating a new user).
```
curl -v -X POST -H "Content-type: application/json" -d "{\"customerId\":\"5c49cc696a02f9772cf2bbe6\",\"creationDate\":\"Thu Jan 24 2019 18:40:03\"}" localhost:8200/shopping/api/carts
```
```
> POST /shopping/api/carts HTTP/1.1
> Host: localhost:8200
> User-Agent: curl/7.55.1
> Accept: */*
> Content-type: application/json
> Content-Length: 83
>
* upload completely sent off: 83 out of 83 bytes
< HTTP/1.1 201 Created
< X-Powered-By: Express
< Content-Type: application/json; charset=utf-8
< Content-Length: 124
< ETag: W/"7c-hmeChhXm7Zx2IbI/IQ56Mf0fpOk"
< Date: Thu, 24 Jan 2019 16:40:03 GMT
< Connection: keep-alive
<
{"_id":"5c49ea6392106b466cd7e316","customerId":"5c49cc696a02f9772cf2bbe6","creationDate":"Thu Jan 24 2019 18:40:03","__v":0}* Connection #0 to host localhost left intact
```
*Note:* &nbsp; As of now there is no validation on the server side for data going into the cart controller since it is automatic with no user interaction, even tho this leaves it vulnerable.
### Product In Cart controller `curl` test
* `GET` request with valid data (cartId).
```
curl -v -X GET localhost:8200/shopping/api/productincart?cartId=5c48d633713f884324381ba3
```
```> GET /shopping/api/productincart?cartId=5c48d633713f884324381ba3 HTTP/1.1
> Host: localhost:8200
> User-Agent: curl/7.55.1
> Accept: */*
>
< HTTP/1.1 200 OK
< X-Powered-By: Express
< Access-Control-Allow-Origin: *
< Content-Type: application/json; charset=utf-8
< Content-Length: 145
< ETag: W/"91-/l9WyjkiwN6yRSz4HT89OAtRw6o"
< Date: Thu, 24 Jan 2019 16:55:03 GMT
< Connection: keep-alive
<
[{"_id":"5c48d98a713f884324381ba8","productId":"5c3cf060c25ae6b150b90dc6","quantity":1,"price":5.25,"cartId":"5c48d633713f884324381ba3","__v":0}]* Connection #0 to host localhost left intact
```
* `POST` request with valid data to add a product to a cart.
```
curl -v -X POST -H "Content-type: application/json" -d "{\"productId\":\"5c3cf060c25ae6b150b90dc5\",\"quantity\":\"1\",\"price\":\"4\",\"cartId\":\"5c48d633713f884324381ba3\"}" localhost:8200/shopping/api/productincart
```
```
> POST /shopping/api/productincart HTTP/1.1
> Host: localhost:8200
> User-Agent: curl/7.55.1
> Accept: */*
> Content-type: application/json
> Content-Length: 103
>
* upload completely sent off: 103 out of 103 bytes
< HTTP/1.1 201 Created
< X-Powered-By: Express
< Content-Type: application/json; charset=utf-8
< Content-Length: 140
< ETag: W/"8c-jWZBTmvmqTnSR/evK9skFZ1ieNs"
< Date: Thu, 24 Jan 2019 17:37:04 GMT
< Connection: keep-alive
<
{"_id":"5c49f7c092106b466cd7e317","productId":"5c3cf060c25ae6b150b90dc5","quantity":1,"price":4,"cartId":"5c48d633713f884324381ba3","__v":0}* Connection #0 to host localhost left intact
```
* `PUT` request with valid data to increment the amount of a product which is already in the cart.
```
curl -v -X PUT -H "Content-Type: application/json" -d "{\"productId\":\"5c3cf060c25ae6b150b90dc5\",\"qty\": 2,\"price\": 8, \"cartId\":\"5c48d633713f884324381ba3\"}" localhost:8200/shopping/api/productincart
```
```
> PUT /shopping/api/productincart HTTP/1.1
> Host: localhost:8200
> User-Agent: curl/7.55.1
> Accept: */*
> Content-Type: application/json
> Content-Length: 102
>
* upload completely sent off: 102 out of 102 bytes
< HTTP/1.1 201 Created
< X-Powered-By: Express
< Content-Type: application/json; charset=utf-8
< Content-Length: 28
< ETag: W/"1c-9CSp0YZbwVi1S/g+0CyT4pOh1+k"
< Date: Thu, 24 Jan 2019 19:14:13 GMT
< Connection: keep-alive
<
{"n":1,"nModified":1,"ok":1}* Connection #0 to host localhost left intact
```
* `DELETE` request (removes one specific product from the cart).
```
curl -v -X DELETE "localhost:8200/shopping/api/productincart?cartId=5c48d633713f884324381ba3&productId=5c3cf060c25ae6b150b90dc5"
```
```
> DELETE /shopping/api/productincart?cartId=5c48d633713f884324381ba3&productId=5c3cf060c25ae6b150b90dc5 HTTP/1.1
> Host: localhost:8200
> User-Agent: curl/7.55.1
> Accept: */*
>
< HTTP/1.1 204 No Content
< X-Powered-By: Express
< ETag: W/"e-O6wjzRYDyhFZBXnno9+gyqQ12rA"
< Date: Thu, 24 Jan 2019 19:43:55 GMT
< Connection: keep-alive
<
* Connection #0 to host localhost left intact
```
* `DELETE` request with `/clearcart` as a parameter (removes all the products from the cart).
```
curl -v -X DELETE "localhost:8200/shopping/api/productincart/clearcart?cartId=5c48d633713f884324381ba3
```
```
> DELETE /shopping/api/productincart/clearcart?cartId=5c48d633713f884324381ba3 HTTP/1.1
> Host: localhost:8200
> User-Agent: curl/7.55.1
> Accept: */*
>
< HTTP/1.1 204 No Content
< X-Powered-By: Express
< ETag: W/"e-4T3w7X1bF/F7Z2hsYaqFGWtN9mY"
< Date: Thu, 24 Jan 2019 19:46:05 GMT
< Connection: keep-alive
<
* Connection #0 to host localhost left intact
```
### Order controller `curl` test
* `GET` request.
```
curl -v -X GET localhost:8200/shopping/api/orders
```
```
> GET /shopping/api/orders HTTP/1.1
> Host: localhost:8200
> User-Agent: curl/7.55.1
> Accept: */*
>
< HTTP/1.1 200 OK
< X-Powered-By: Express
< Access-Control-Allow-Origin: *
< Content-Type: application/json; charset=utf-8
< Content-Length: 252
< ETag: W/"fc-U6WYGVRXvtwJSjUiWNO9NurDBwk"
< Date: Thu, 24 Jan 2019 19:57:57 GMT
< Connection: keep-alive
<
[{"_id":"5c4a18bc8fd4377f1c27eee0","customerId":"5c124914a9dbd29798309f74","cartId":"5c48d5a2713f884324381b9e","total":4,"city":"ashdod","street":"zzz","shippingDate":"2019-01-24","orderDate":"Thu Jan 24 2019 21:57:48","fourLastDigits":"8888","__v":0}]* Connection #0 to host localhost left intact
```
* `POST` request with valid data for an order.
```
curl -v -X POST -H "Content-type: application/json" -d "{\"customerId\":\"5c49cc696a02f9772cf2bbe6\",\"cartId\":\"5c49ea6392106b466cd7e316\",\"total\":\"4\",\"city\":\"ashdod\",\"street\":\"zzz\",\"shippingDate\":\"2019-01-24\",\"orderDate\":\"Thu Jan 24 2019 22:05:48\",\"fourLastDigits\":\"1111\"}" localhost:8200/shopping/api/orders
```
```
> POST /shopping/api/orders HTTP/1.1
> Host: localhost:8200
> User-Agent: curl/7.55.1
> Accept: */*
> Content-type: application/json
> Content-Length: 211
>
* upload completely sent off: 211 out of 211 bytes
< HTTP/1.1 201 Created
< X-Powered-By: Express
< Content-Type: application/json; charset=utf-8
< Content-Length: 250
< ETag: W/"fa-+YONEIbspJA0tDVSBwpYS/ppppI"
< Date: Thu, 24 Jan 2019 20:05:24 GMT
< Connection: keep-alive
<
{"_id":"5c4a1a848fd4377f1c27eee1","customerId":"5c49cc696a02f9772cf2bbe6","cartId":"5c49ea6392106b466cd7e316","total":4,"city":"ashdod","street":"zzz","shippingDate":"2019-01-24","orderDate":"Thu Jan 24 2019 22:05:48","fourLastDigits":"1111","__v":0}* Connection #0 to host localhost left intact
```
*Note:* &nbsp; There are obviously many more valid/invalid requests we can make, to see the results of other controllers valid/invalid requests simply refer to the models for validation requirments and construct a `curl` request based on them.
