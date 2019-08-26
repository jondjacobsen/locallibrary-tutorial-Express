## Express web framework (Node.js/JavaScript)
---
> Express is a popular unopinionated web framework, written in JavaScript and hosted within the Node.js runtime environment. The module explains some of the key benefits of this framework, how to set up your development environment and how to perform common web development and deployment tasks.
---
#### Progress
* 7/21/2019 - Finished through [Rendering Data](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction#Rendering_data_(views))
* 7/22/2019 - Section One [Complete](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction#See_also)
* 7/22/2019 - Started [Setting up a Node development environment](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/development_environment)
* 7/23/2019 - Up to and through [Using NPM](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/development_environment#Using_NPM)
* 7/28/2019 - Through [Adding Dependencies](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/development_environment#Adding_dependencies)
* 7/28/2019 - Through [Development Dependencies](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/development_environment#Development_dependencies)
* 7/28/2019 - Main Topic - [Intalling the Express Generator](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/development_environment#Installing_the_Express_Application_Generator)
> 7/28/2019 - [COMPLETED SECTION](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/development_environment#Summary)
---
## Express Tutorial: The Local Library website
---
> The first article in our practical tutorial series explains what you'll learn, and provides an overview of the "local library" example website we'll be working through and evolving in subsequent articles.

* [x] Section Complete
---
## Express Tutorial Part 2: Creating a skeleton website
---
This second article in our Express Tutorial shows how you can create a "skeleton" website project which you can then go on to populate with site-specific routes, templates/views, and database calls.

#### What view engine should I use?

For this project, we'll use the Pug templating engine (this is the recently-renamed Jade engine), as this is one of the most popular Express/JavaScript templating languages and is supported out of the box by the generator.

#### What CSS stylesheet engine should I use?

As with templating engines, you should use the stylesheet engine that will allow your team to be most productive. For this project, we'll use the ordinary CSS (the default) as our CSS requirements are not sufficiently complicated to justify using anything else.

#### What database should I use?

The generated code doesn't use/include any databases. Express apps can use any database mechanism supported by Node (Express itself doesn't define any specific additional behavior/requirements for database management).

We'll discuss how to integrate with a database in a later article.

* Note: Now if you edit any file in the project the server will restart (or you can restart it by typing rs on the command prompt at any time). You will still need to reload the browser to refresh the page.
We now have to call "npm run <scriptname>" rather than just npm start, because "start" is actually an NPM command that is mapped to the named script. We could have replaced the command in the start script but we only want to use nodemon during development, so it makes sense to create a new script command.

* #### Terminal Command - DEBUG MODE: npm devstart
---
#### Routes

The route defines a callback that will be invoked whenever an HTTP GET request with the correct pattern is detected. The matching pattern is the route specified when the module is imported ('/users') plus whatever is defined in this file ('/'). In other words, this route will be used when an URL of /users/ is received.
___
#### Views 

The views (templates) are stored in the **/views** directory (as specified in **app.js**) and are given the file extension .pug. The method **Render.render()** is used to render a specified template along with the values of named variables passed in an object, and then send the result as a response. In the code below from /routes/index.js you can see how that route renders a response using the template "index" passing the template variable "title".

---
```javascript
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
```
---
### Express Tutorial Part 3: Using a Database (with Mongoose)
---

This article briefly introduces databases, and how to use them with Node/Express apps. It then goes on to show how we can use Mongoose to provide database access for the LocalLibrary website. It explains how object schema and models are declared, the main field types, and basic validation. It also briefly shows a few of the main ways in which you can access model data.

---
#### Overview

Library staff will use the Local Library website to store information about books and borrowers, while library members will use it to browse and search for books, find out whether there are any copies available, and then reserve or borrow them. In order to store and retrieve information efficiently, we will store it in a database.

Express apps can use many different databases, and there are several approaches you can use for performing Create, Read, Update and Delete (CRUD) operations. This tutorial provides a brief overview of some of the available options and then goes on to show in detail the particular mechanisms selected.

---
#### What ORM/ODM should I use?

There are many ODM/ORM solutions available on the NPM package manager site (check out the odm and orm tags for a subset!).

A few solutions that were popular at the time of writing are:

* [Mongoose: ](https://www.npmjs.com/package/mongoose) Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment.
    
* [Waterline: ](https://www.npmjs.com/package/waterline) An ORM extracted from the Express-based Sails web framework. It provides a uniform API for accessing numerous different databases, including Redis, MySQL, LDAP, MongoDB, and Postgres.
    
* [Bookshelf: ](https://www.npmjs.com/package/bookshelf) Features both promise-based and traditional callback interfaces, providing transaction support, eager/nested-eager relation loading, polymorphic associations, and support for one-to-one, one-to-many, and many-to-many relations. Works with PostgreSQL, MySQL, and SQLite3.
    
* [Objection: ](https://www.npmjs.com/package/objection) Makes it as easy as possible to use the full power of SQL and the underlying database engine (supports SQLite3, Postgres, and MySQL).
    
* [Sequelize](https://www.npmjs.com/package/sequelize) is a promise-based ORM for Node.js and io.js. It supports the dialects PostgreSQL, MySQL, MariaDB, SQLite, and MSSQL and features solid transaction support, relations, read replication and more.
    
* [Node ORM2](https://node-orm.readthedocs.io/en/latest) is an Object Relationship Manager for NodeJS. It supports MySQL, SQLite, and Progress, helping to work with the database using an object-oriented approach.

* [JugglingDB](http://1602.github.io/jugglingdb) is cross-DB ORM for NodeJS, providing a common interface to access most popular database formats. Currently supporting MySQL, SQLite3, Postgres, MongoDB, Redis and js-memory-storage (self-written engine for test-usage only).

As a general rule, you should consider both the features provided and the "community activity" (downloads, contributions, bug reports, quality of documentation, etc.) when selecting a solution. At the time of writing Mongoose is by far the most popular ODM, and is a reasonable choice if you're using MongoDB for your database.

---

### Using Mongoose and MongoDb for the LocalLibrary


![alt text][logo]

[logo]: https://cms-assets.tutsplus.com/uploads/users/34/posts/29527/preview_image/mongoose.jpg

* [Mongoose ODM](https://www.npmjs.com/package/mongoose) - to access our library data. Mongoose acts as a front end to MongoDB, an open source NoSQL database that uses a document-oriented data model. A “collection” of “documents”, in a MongoDB database, is analogous to a “table” of “rows” in a relational database.
---
### Designing the LocalLibrary models
![alt_text][database]

[database]: https://mdn.mozillademos.org/files/15645/Library%20Website%20-%20Mongoose_Express.png

---

### Mongoose Primer

#### Defining and creating models

Models are defined using the Schema interface. The Schema allows you to define the fields stored in each document along with their validation requirements and default values. In addition, you can define static and instance helper methods to make it easier to work with your data types, and also virtual properties that you can use like any other field, but which aren't actually stored in the database (we'll discuss a bit further below).
This section provides an overview of how to connect Mongoose to a MongoDB database, how to define a schema and a model, and how to make basic queries. 

#### Defining Schemas

```javascript
//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var SomeModelSchema = new Schema({
  a_string: String,
  a_date: Date
});
```
In the case above we just have two fields, a string and a date. In the next sections, we will show some of the other field types, validation, and other methods.

#### Creating a model

Models are created from schemas using the mongoose.model() method:

```javascript
// Define schema
var Schema = mongoose.Schema;

var SomeModelSchema = new Schema({
  a_string: String,
  a_date: Date
});

// Compile model from schema
var SomeModel = mongoose.model('SomeModel', SomeModelSchema );
```

#### Schema types (fields)

A schema can have an arbitrary number of fields — each one represents a field in the documents stored in MongoDB. An example schema showing many of the common field types and how they are declared is shown below.

```javascript
var schema = new Schema(
{
  name: String,
  binary: Buffer,
  living: Boolean,
  updated: { type: Date, default: Date.now() },
  age: { type: Number, min: 18, max: 65, required: true },
  mixed: Schema.Types.Mixed,
  _someId: Schema.Types.ObjectId,
  array: [],
  ofString: [String], // You can also have an array of each of the other types too.
  nested: { stuff: { type: String, lowercase: true, trim: true } }
})
```
Most of the SchemaTypes (the descriptors after “type:” or after field names) are self-explanatory. The exceptions are:

* ObjectId: Represents specific instances of a model in the database. For example, a book might use this to represent its author object. This will actually contain the unique ID (_id) for the specified object. We can use the populate() method to pull in the associated information when needed.
* Mixed: An arbitrary schema type.
* []: An array of items. You can perform JavaScript array operations on these models (push, pop, unshift, etc.). The examples above show an array of objects without a specified type and an array of String objects, but you can have an array of any type of object.

The code also shows both ways of declaring a field:

* Field name and type as a key-value pair (i.e. as done with fields name, binary and living).
* Field name followed by an object defining the type, and any other options for the field. Options include things like:
    * default values.
    * built-in validators (e.g. max/min values) and custom validation functions.
    * Whether the field is required
    * Whether String fields should automatically be set to lowercase, uppercase, or trimmed (e.g. { type: String, lowercase: true, trim: true })

For more information about options see [SchemaTypes](http://mongoosejs.com/docs/schematypes.html) (Mongoose docs).

#### Validation

Mongoose provides built-in and custom validators, and synchronous and asynchronous validators. It allows you to specify both the acceptable range or values and the error message for validation failure in all cases.

The built-in validators include:


* All SchemaTypes have the built-in required validator. This is used to specify whether the field must be supplied in order to save a document.
* Numbers have min and max validators.
* Strings have:
    * enum: specifies the set of allowed values for the field.
    * match: specifies a regular expression that the string must match.
    * maxlength and minlength for the string.

The example below (slightly modified from the Mongoose documents) shows how you can specify some of the validator types and error messages:

```javascript
var breakfastSchema = new Schema({
  eggs: {
    type: Number,
    min: [6, 'Too few eggs'],
    max: 12,
    required: [true, 'Why no eggs?']
  },
  drink: {
    type: String,
    enum: ['Coffee', 'Tea', 'Water',]
  }
});
```

#### Virtual properties

Virtual properties are document properties that you can get and set but that do not get persisted to MongoDB. The getters are useful for formatting or combining fields, while setters are useful for de-composing a single value into multiple values for storage. The example in the documentation constructs (and deconstructs) a full name virtual property from a first and last name field, which is easier and cleaner than constructing a full name every time one is used in a template.
For complete information on field validation see [Validation](http://mongoosejs.com/docs/validation.html) (Mongoose docs).

For more information see [Virtuals](http://mongoosejs.com/docs/guide.html#virtuals) (Mongoose documentation).

#### Methods and query helpers

A schema can also have instance methods, static methods, and query helpers. The instance and static methods are similar, but with the obvious difference that an instance method is associated with a particular record and has access to the current object. Query helpers allow you to extend mongoose's [chainable query builder API](http://mongoosejs.com/docs/queries.html) (for example, allowing you to add a query "byName" in addition to the find(), findOne() and findById() methods).

---

### Using Models

We provide a brief overview below. For more information see: [Models](http://mongoosejs.com/docs/models.html) (Mongoose docs).

#### Creating and modifying documents

[Examples are here](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/mongoose#Using_models)

Every model has an associated connection (this will be the default connection when you use mongoose.model()). You create a new connection and call .model() on it to create the documents on a different database.

You can access the fields in this new record using the dot syntax, and change the values. You have to call save() or update() to store modified values back to the database.

#### Searching for records

You can search for records using query methods, specifying the query conditions as a JSON document. The code fragment below shows how you might find all athletes in a database that play tennis, returning just the fields for athlete name and age. Here we just specify one matching field (sport) but you can add more criteria, specify regular expression criteria, or remove the conditions altogether to return all athletes.

```javascript
var Athlete = mongoose.model('Athlete', yourSchema);

// find all athletes who play tennis, selecting the 'name' and 'age' fields
Athlete.find({ 'sport': 'Tennis' }, 'name age', function (err, athletes) {
  if (err) return handleError(err);
  // 'athletes' contains the list of athletes that match the criteria.
})
```
#### Searching for records

ou can search for records using query methods, specifying the query conditions as a JSON document. 

```javascript
var Athlete = mongoose.model('Athlete', yourSchema);

// find all athletes who play tennis, selecting the 'name' and 'age' fields
Athlete.find({ 'sport': 'Tennis' }, 'name age', function (err, athletes) {
  if (err) return handleError(err);
  // 'athletes' contains the list of athletes that match the criteria.
})
```

f you don't specify a callback then the API will return a variable of type Query. You can use this query object to build up your query and then execute it (with a callback) later using the exec() method.
```javascript
// find all athletes that play tennis
var query = Athlete.find({ 'sport': 'Tennis' });

// selecting the 'name' and 'age' fields
query.select('name age');

// limit our results to 5 items
query.limit(5);

// sort by age
query.sort({ age: -1 });

// execute the query at a later time
query.exec(function (err, athletes) {
  if (err) return handleError(err);
  // athletes contains an ordered list of 5 athletes who play Tennis
})
```

Above we've defined the query conditions in the find() method. We can also do this using a where() function, and we can chain all the parts of our query together using the dot operator (.) rather than adding them separately. The code fragment below is the same as our query above, with an additional condition for the age.

```javascript
Athlete.
  find().
  where('sport').equals('Tennis').
  where('age').gt(17).lt(50).  //Additional where query
  limit(5).
  sort({ age: -1 }).
  select('name age').
  exec(callback); // where callback is the name of our callback function.
```
---
The [find()](http://mongoosejs.com/docs/api.html#query_Query-find) method gets all matching records, but often you just want to get one match. The following methods query for a single record:

* [findById()](http://mongoosejs.com/docs/api.html#model_Model.findById): Finds the document with the specified id (every document has a unique id).
* [findOne()](http://mongoosejs.com/docs/api.html#query_Query-findOne): Finds a single document that matches the specified criteria.
* [findByIdAndRemove()](http://mongoosejs.com/docs/api.html#model_Model.findByIdAndRemove), findByIdAndUpdate(), findOneAndRemove(), findOneAndUpdate(): Finds a single document by id or criteria and either update or remove it. These are useful convenience functions for updating and removing records.
---



    Note: There is also a count() method that you can use to get the 
    number of items that match conditions. This is useful if you want 
    to perform a count without actually fetching the records.

#### Working with related documents — population

You can create references from one document/model instance to another using the ObjectId schema field, or from one document to many using an array of ObjectIds. The field stores the id of the related model. If you need the actual content of the associated document, you can use the populate() method in a query to replace the id with the actual data.

For example, the following schema defines authors and stories. Each author can have multiple stories, which we represent as an array of ObjectId. Each story can have a single author. The "ref" (highlighted in bold below) tells the schema which model can be assigned to this field.

```javascript
var mongoose = require('mongoose')
  , Schema = mongoose.Schema

var authorSchema = Schema({
  name    : String,
  stories : [{ type: Schema.Types.ObjectId, ref: 'Story' }]
});

var storySchema = Schema({
  author : { type: Schema.Types.ObjectId, ref: 'Author' },
  title    : String
});

var Story  = mongoose.model('Story', storySchema);
var Author = mongoose.model('Author', authorSchema);
```

We can save our references to the related document by assigning the _id value. Below we create an author, then a story, and assign the author id to our story's author field.

```javascript
var bob = new Author({ name: 'Bob Smith' });

bob.save(function (err) {
  if (err) return handleError(err);

  //Bob now exists, so lets create a story
  var story = new Story({
    title: "Bob goes sledding",
    author: bob._id    // assign the _id from the our author Bob. This ID is created by default!
  });

  story.save(function (err) {
    if (err) return handleError(err);
    // Bob now has his story
  });
});
```

Our story document now has an author referenced by the author document's ID. In order to get the author information in the story results we use populate(), as shown below.

```javascript
Story
.findOne({ title: 'Bob goes sledding' })
.populate('author') //This populates the author id with actual author information!
.exec(function (err, story) {
  if (err) return handleError(err);
  console.log('The author is %s', story.author.name);
  // prints "The author is Bob Smith"
});
```
    Note: Astute readers will have noted that we added an author to our story, 
    but we didn't do anything to add our story to our author's stories array. 
    How then can we get all stories by a particular author? One way would be to 
    add our story to the stories array, but this would result in us having two 
    places where the information relating authors and stories needs to be 
    maintained.

    A better way is to get the _id of our author, then use find() to search for this in the author field across all stories.

```javascript
Story
.find({ author : bob._id })
.exec(function (err, stories) {
  if (err) return handleError(err);
  // returns all stories that have Bob's id as their author.
});
```
For more detailed information see [Population](http://mongoosejs.com/docs/populate.html) (Mongoose docs).

#### One schema/model per file
  
While you can create schemas and models using any file structure you like, we highly recommend defining each model schema in its own module (file), exporting the method to create the model. This is shown below:

```javascript
// File: ./models/somemodel.js

//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var SomeModelSchema = new Schema({
  a_string          : String,
  a_date            : Date,
});

//Export function to create "SomeModel" model class
module.exports = mongoose.model('SomeModel', SomeModelSchema );
```
You can then require and use the model immediately in other files. Below we show how you might use it to get all instances of the model.

```javascript
//Create a SomeModel model just by requiring the module
var SomeModel = require('../models/somemodel')

// Use the SomeModel object (model) to find all SomeModel records
SomeModel.find(callback_function);
```

---
### Setting up the MongoDB database

For this tutorial, we're going to use the [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) free cloud-hosted [sandbox](https://www.mongodb.com/cloud/atlas/pricing) database. This database tier is not considered suitable for production websites because it has no redundancy, but it is great for development and prototyping. 

(other popular choices at the time of writing include [Compose](https://www.compose.com/), [ScaleGrid](https://scalegrid.io/pricing.html) and [ObjectRocket](https://www.mongodb.com/cloud/atlas)).

---

### Install Mongoose

Open a command prompt and navigate to the directory where you created your skeleton Local Library website. Enter the following command to install Mongoose (and its dependencies) and add it to your package.json file, unless you have already done so when reading the Mongoose Primer above.

```shell script
npm install mongoose
```
---

### Connect to MongoDB

Open /app.js (in the root of your project) and copy the following text below where you declare the Express application object (after the line var app = express();). Replace the database url string ('insert_your_database_url_here') with the location URL representing your own database (i.e. using the information from mongoDB Atlas).

```javascript
//Set up mongoose connection
var mongoose = require('mongoose');
var mongoDB = 'insert_your_database_url_here';
mongoose.connect(mongoDB, { useNewUrlParser: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
```
---

### TESTING - create some items
    
In order to test the models (and to create some example books and other items that we can use in our next articles) we'll now run an independent script to create items of each type:

1) Download (or otherwise create) the file [populatedb.js](https://raw.githubusercontent.com/hamishwillee/express-locallibrary-tutorial/master/populatedb.js) inside your express-locallibrary-tutorial directory (in the same level as package.json).   

        You don't need to know how populatedb.js works; it just adds sample data into the database.

2) Enter the following commands in the project root to install the async module that is required by the script (we'll discuss this in later tutorials, ) 

```javascript
npm install async
```

3) Run the script using node in your command prompt, passing in the URL of your MongoDB database (the same one you replaced the insert_your_database_url_here placeholder with, inside app.js earlier): Be sure to pass it as a string by wrapping it with '  ' 
```javascript
node populatedb '<your mongodb url>​​​​'
```
---
### Summary[**](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/mongoose#Summary)

In this article, we've learned a bit about databases and ORMs on Node/Express, and a lot about how Mongoose schema and models are defined. We then used this information to design and implement Book, BookInstance, Author and Genre models for the LocalLibrary website.

Last of all we tested our models by creating a number of instances (using a standalone script). In the next article we'll look at creating some pages to display these objects.


* [Database integration](https://expressjs.com/en/guide/database-integration.html) (Express docs)
* [Mongoose website](http://mongoosejs.com/) (Mongoose docs)
* [Mongoose Guide](http://mongoosejs.com/docs/guide.html) (Mongoose docs)
* [Validation](http://mongoosejs.com/docs/validation.html) (Mongoose docs)
* [Schema Types](http://mongoosejs.com/docs/schematypes.html) (Mongoose docs)
* [Models](http://mongoosejs.com/docs/models.html) (Mongoose docs)
* [Queries](http://mongoosejs.com/docs/queries.html) (Mongoose docs)
* [Population](http://mongoosejs.com/docs/populate.html) (Mongoose docs)
---

[Current Position](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/mongoose#Setting_up_the_MongoDB_database)


---
#### INDEX

[**Markdown Cheatsheet**: ](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet#emphasis) This is intended as a quick reference and showcase. For more complete info, see [John Gruber's original spec](http://daringfireball.net/projects/markdown/) and the [Github-flavored Markdown info page](http://github.github.com/github-flavored-markdown/).