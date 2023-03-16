# Intro to MongoDB

[Intro to MongoDB](https://git.generalassemb.ly/SEIR-2-21-23/course-materials/blob/main/unit-2/week-1/d4-ejs-partials-and-mongodb/4.3-mongodb-intro.md)

### What's a Database?
`null`

### MongoDB vs. Relational SQL Databases

![Terminology](https://i.imgur.com/XdV3hSs.png)

### Key Differences

- Relational Database: Database locking basically means only one user can be operating in a table at one time, if two processes attempt to perform a task on the same data, one will have to wait for the other to finish first, in high frequency situations this can create significant database slow down to database consumers.

- NoSQL(MongoDB document database): `null`

### More About MongoDB

Instead of SQL (Structured Query Language), MongoDB uses JavaScript-like syntax for communicating with the database. Mongo also stores its records in collections of documents that are formatted in a JSON-like syntax called BSON.

## MongoDB Documents
`ISODate` is a data type used in MongoDB to represent dates and times in a standardized format. The `ISODate` is represented as a string, in the format "YYYY-MM-DDTHH:mm:ss.sssZ".

In MongoDB, the `ISODate` type is used to store date and time values in UTC format. This allows for consistent and accurate representation of dates and times across different time zones and applications.

### The Document _id
The `_id` is a special field that represents the document's unique identifier. If you're familiar with SQL databases, a document's `_id` is like a *primary key*.

## Creating a Database and Inserting Documents

### Database Implementation:

"The reason is that some entities are better off being embedded with its parent document instead, for example, comments that belong to a post. It would not make sense to have to query a separate comments collection to obtain the comments for a given post..."

```js
{
  "_id": 1,
  "name": "John Doe",
  "email": "john.doe@example.com",
  "posts": [
    {
      "_id": 1,
      "title": "My First Post",
      "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    }
  ]
}

```

### Data Modeling in MongoDB

