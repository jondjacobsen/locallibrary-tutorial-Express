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

>[Current position](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/skeleton_website#Views_(templates))


---
#### INDEX

[**Markdown Cheatsheet**: ](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet#emphasis) This is intended as a quick reference and showcase. For more complete info, see [John Gruber's original spec](http://daringfireball.net/projects/markdown/) and the [Github-flavored Markdown info page](http://github.github.com/github-flavored-markdown/).