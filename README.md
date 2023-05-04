# " MVC  -  CRUD REST API WITH POSTGRES"

## Setup

Check that the API server works:
- Run `npm install`
- Run `npm run dev`
- Navigate to `http://localhost:9000`

### Database Setup 

Once you have created a  ```setup.sql``` 👍

please run :

```npm run setup-db```

# WHAT IS MVC & REST API's 

# MVC

MVC Pattern stands for Model-View-Controller Pattern. This pattern is used to separate application's concerns.

- **Model** - Model represents an object or JAVA POJO carrying data. It can also have logic to update controller if its data changes.
- **View** - View represents the visualization of the data that model contains.
- **Controller** - Controller acts on both model and view. It controls the data flow into model object and updates the view whenever data changes. It keeps view and model separate.

The **Model View Controller** (MVC) design pattern specifies that an application consist of a data model, presentation information, and control information. The pattern requires that each of these be separated into different objects. MVC is more of an architectural pattern, but not for complete application. MVC mostly relates to the UI / interaction layer of an application. You’re still going to need business logic layer, maybe some service layer and data access layer.

**UML Diagram MVC Design Pattern**

![https://media.geeksforgeeks.org/wp-content/uploads/MVC-Design-Pattern.png](https://media.geeksforgeeks.org/wp-content/uploads/MVC-Design-Pattern.png)

- The **Model** contains only the pure application data, it contains no logic describing how to present the data to a user. (Its just a data that is shipped across the application like for example from back-end server view and from front-end view to the database. In java programming, Model can be represented by the use of POJO (Plain-old-java-object) which is a simple java class.
- The **View** presents the model’s data to the user. The view knows how to access the model’s data, but it does not know what this data means or what the user can do to manipulate it. View just represent, displays the application’s data on screen. View page are generally in the format of .html or .jsp in java programming (which is flexible).
- The **Controller** exists between the view and the model. It is where the actual business logic is written. It listens to events triggered by the view (or another external source) and executes the appropriate reaction to these events. In most cases, the reaction is to call a method on the model. Since the view and the model are connected through a notification mechanism, the result of this action is then automatically reflected in the view.

**Advantages**

- Multiple developers can work simultaneously on the model, controller and views.
- MVC enables logical grouping of related actions on a controller together. The views for a specific model are also grouped together.
- Models can have multiple views.
- The overall components of an application are easily manageable & are less dependent on each other for proper functioning of application.

**Disadvantages**

- The framework navigation can be complex because it introduces new layers of abstraction and requires users to adapt to the decomposition criteria of MVC.
- Knowledge on multiple technologies becomes the norm. Developers using MVC need to be skilled in multiple technologies.
## Resful APIs

RESTful APIs most commonly utilize HTTP requests. Four of the most common HTTP methods in a REST environment are `GET`, `POST`, `PUT`, and `DELETE`, which are the methods by which a developer can create a CRUD system.

`Create`: Use the `HTTP POST` method to create a resource in a REST environment \
`Read`: Use the `GET` method to read a resource, retrieving data without altering it \
`Update`: Use the `PUT` method to update a resource \
`Delete`: Use the `DELETE` or `DESTROY` method to remove a resource from the system

### RESTful = HTTP

  - `index /customer - GET` - AS A USER I CAN SEE ALL THE CUSTOMER
  - `show /customer/:id` - GET
  - `create /customer/:id` - POST
  - `update /customer/:id` - PATCH
  - `destory /customer/:id` - DELETE

  - `index /bank_details - GET` - AS A USER I CAN SEE ALL THE CUSTOMERS
  - `show /bank_details/:id` - GET
  - `create /bank_details/:id` - POST
  - `update /bank_details/:id` - PATCH
  - `destory /bank_details/:id` - DELETE


## Available HTTP Methods

| HTTP Method |	CRUD operation |	Entire Collection (e.g. /users) |	Specific Item (e.g. /users/{id}) |
|-------------|----------------|----------------------------------|----------------------------------|
|GET|	Read	|200 (OK), list of entities. Use pagination, sorting and filtering to navigate big lists.|200 (OK), single entity.404 (Not Found), if ID not found or invalid.|
|POST|	Create|	201 (Created), Response contains response similar to GET /user/{id} containing new ID.|	not applicable|
|PATCH	|Update|	Batch API	|200 (OK) or 204 (No Content). 404 (Not Found), if ID not found or invalid.|
|DELETE|	Delete|	204 (No Content). 400(Bad Request) if no filter is specified.| 204 (No Content).404 (Not Found), if ID not found or invalid.|
|PUT	|Update/Replace |	not implemented	|not implemented|

### GET
The HTTP GET method is used to read (or retrieve) a representation of a resource. In case of success (or non-error), GET returns a representation in JSON and an HTTP response status code of 200 (OK). In an error case, it most often returns a 404 (NOT FOUND) or 400 (BAD REQUEST).

> NOTE
According to the design of the HTTP specification, GET requests are used only to read data and not change it. So, they are considered safe. That is they can be called without risk of data modification or corruption—calling it once has the same effect as calling it 10 times.

### POST
The POST method is most often utilized to create new resources. In particular, it is used to create subordinate resources. That is subordinate to some other (e.g. parent) resource. In other words, when creating a new resource, POST to the parent and the service takes care of associating the new resource with the parent, assigning an ID (new resource URI), etc.

On successful creation, HTTP response code 201 is returned.

>CAUTION POST is not a safe operation. Making two identical POST requests will most likely result in two resources containing the same information but with different identifiers.

>NOTE
It is possible to create both primary and related API resources via a single API request.

### PATCH
PATCH is used to modify resources. The PATCH request only needs to contain the changes to the resource, not the complete resource.

In other words, the body should contain a set of instructions describing how a resource currently residing on the server should be modified to produce a new version.

>CAUTION
PATCH is not a safe operation. Collisions from multiple PATCH requests may be dangerous because some patch formats need to operate from a known base point; otherwise, they will corrupt the resource. Clients using this kind of patch application should use a conditional request (e.g., GET a resource, ensure it was not modified and apply PATCH) such that the request will fail if the resource has been updated since the client last accessed the resource.

### DELETE
DELETE is quite easy to understand. It is used to delete a resource identified by filters or ID.

On successful deletion, the HTTP response status code 204 (No Content) returns with no response body.

>IMPORTANT
If you DELETE a resource, it is removed. Repeatedly calling DELETE on that resource will often return a 404 (NOT FOUND) status code since it was already removed and, therefore, is no longer findable.


## Technoloies 

* javascript
* node.js
* Express.js
* NPM
* nodemon
* json
* CRUD 
* RESFUL API
* Git
* Postgres - Database
* Hoppscotch - (Testing the API End-Points)
* Postman - (Testing the API End-Points)
* Mockroo - ( mock data)
* jest - ( Testing framework )
* SuperTest (HTTP assertions made easy via superagent.)

## Process

nce Nodejs and Express.js was installed, the following code was added:

```index.js```

The following code:

```js
require('dotenv').config();
const app = require('./app')


const port = process.env.PORT || 5000
 
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
```
In the ```app.js```

```js
const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const app = express()

app.use(cors())
app.use(logger('dev'))


app.get('/', (req, res) => {
  res.send('Welcome to the API!!')
})

module.exports = app
```

## WORK FLOW TO BUILD AN API

  MODEL/DB -> CONTROLLER ->  ROUTER -> APP

## DEBUG AN API

  3000/ -> APP -> ROUTER -> CONTROLLER -> MODELS/DB


/port/end-point

### Routes

- /end-point


### Controllers



### Models / Database



## NPM PACKAGES 

* cors
* dotenv
* express
* morgan
* nodemon

#### Database
* pg

## Testing

* jest 
* supertest

### Package.json

Include these scripts:

```js
"scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js",
  },
  ```

Dependencies:

```js
 "dependencies": {
        "cors": "^2.8.5",
        "dotenv": "^16.0.3",
        "express": "^4.18.2",
         "morgan": "^1.10.0",
          "pg": "^8.10.0"****
    },
    "devDependencies": {
        "jest": "^29.5.0",
        "nodemon": "^2.0.22",
        "supertest": "^6.3.3"
    },
```

### CREATE POSTGRES DATABASE IN pgAdmin

1. Open pgAdmin
2. Connect to database server
3. Edit => New Object => New database
4. done
Or use plain SQL when connection to any database: CREATE DATABASE my_database;

### DataBase connection and setup

Database connection: 

`db.js`

```js
const { Pool } = require("pg");

const db = new Pool({
  connectionString: process.env.DB_URL,
});

module.exports = db;
```



Database setup:

`setup-db.js`

```js
const fs = require('fs'); // to read and write with files
require("dotenv").config(); // Load environment config

// Load in the SQL statements
const sqlQuery = fs.readFileSync('../database/customer-setup.sql', '../database/bank_detail-setup.sql').toString();

// Get a link to the database
const db = require("../config/db");

// Run the query
db.query(sqlQuery)
    .then(data => console.log("Set-up complete."))
    .catch(error => console.log(error));
```

### Data for my database 

I used [Mockroo](https://www.mockaroo.com/) for mock data for both customer and bank details.


## TESTING

TESTING FLOW:
1. SETUP
2. EXECUTION
3. VERIFICATION

The THREE A's:
1. Act - Act on the object (through some mutator). You may need to give it parameters (again, possibly test objects).
   
2. Arrange - Set up the object to be tested. We may need to surround the object with collaborators. For testing purposes, those collaborators might be test objects (mocks, fakes, etc.) or the real thing.
   
3. Assert - Make claims about the object, its collaborators, its parameters, and possibly (rarely!!) global state. 

### Red, Green, Refactor

The red, green, refactor approach helps developers compartmentalize their focus into three phases:

* Red — think about what you want to develop - (WRITE FAILING TEST)
* Green — think about how to make your tests pass - (WRITE THE MINIMUM OF CODE TO MAKE THE TEST PASS)
* Refactor — think about how to improve your existing implementation - (IMPROVE THE CODE)


Please add the following in to the ```package.json``` file:

```json
"scripts": {
    "test": "jest --watchAll",
    "coverage": "jest --coverage"
  },
```
#### Test- Jest - Coverage 
```Branches``` represent if statements which conditions have been fulfilled at least once during the unit tests.

```Functions``` represent functions that have been called at least once during the unit tests.

```Lines``` represent code lines that have executed at least once during the unit tests.

```Statements``` represent instructions that have been executed at least once during the unit tests. For example, we can have a line that contains two statements:



The cde below allows a one time setup and to group the tests together:

```js
const request = require("supertest");
const app = require("../app");

describe("api server", () => {
  let api;

  beforeAll(() => {
    api = app.listen(5000, () => {
      console.log("Test server listening on port 5000");
    });
  });

});
```
To run the test:

``` npm run test ```

To run coverage of the test: 

``` jest --coverage ``` 


![Testing Pyramid](/assets/pyramid-progression.jpg "Testing Pyramid")

![Testing Pyramid](/assets/auto-pyramind.png "Testing Pyramid")

### One-Time Setup
In some cases, you only need to do setup once, at the beginning of a file. This can be especially bothersome when the setup is asynchronous, so you can't do it inline. Jest provides ```beforeAll``` and ```afterAll``` hooks to handle this situation.


```beforeAll()``` Runs a function before any of the tests in this file run. If the function returns a promise, Jest waits for that promise to resolve before running tests.

This is often useful if you want to set up some global state that will be used by many tests.

```afterAll()``` Runs a function after each one of the tests in this file completes. If the function returns a promise, Jest waits for that promise to resolve before continuing.

This is often useful if you want to clean up some temporary state that is created by each test.

Jest will throw an error, if the same test function is passed a ```done()``` callback and returns a promise. This is ```done``` as a precaution to avoid memory leaks in your tests.

Use Jest's ```done``` function when testing code that relies on callbacks to inform Jest that the test has finished. Call the ```done``` function after your assertions to ensure that Jest waits for the callback to complete before finishing the test.