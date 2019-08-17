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



[Current Position](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/mongoose#Designing_the_LocalLibrary_models)



---
#### INDEX

[**Markdown Cheatsheet**: ](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet#emphasis) This is intended as a quick reference and showcase. For more complete info, see [John Gruber's original spec](http://daringfireball.net/projects/markdown/) and the [Github-flavored Markdown info page](http://github.github.com/github-flavored-markdown/).