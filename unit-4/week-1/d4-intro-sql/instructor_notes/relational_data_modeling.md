[Relational Data Modeling](https://git.generalassemb.ly/SEIR-2-21-23/course-materials/blob/main/unit-4/week-1/d4-intro-sql/4.2-relational-data-modeling.md)

# Relational Data Design & Modeling

## Learning Objectives
- Identify the **data entities** for an application
- Identify **attributes** for a data entity
- Identify the **relationships** between data entities
- Understand the roles of **primary and foreign keys**
- Create an **Entity Relationship Diagram (ERD)** for an application


## 1. Intro to Data Modeling:

Read README for lecture here. 

**SQL vs MongoDB**
![SQL vs MongoDB](https://www.researchgate.net/profile/Smaqil-Burney/publication/340622952/figure/fig4/AS:880217438564360@1586871599608/SQL-vs-MongoDB-terms.png)

**Data Model**
*The circle represents the entity itself*
![Data Model](https://miro.medium.com/v2/resize:fit:800/1*aJVbC4VKd5-IzHLjNpWaew.png)

**ERD Symbols**
![Imgur](https://i.imgur.com/flJxzZQ.png)

## 2. Data Entities:

### What is a Data Entity?

A data entity is an object or concept in the real world that is represented in a database and has attributes that describe its properties.

Examples: **User, Post, Comment, Order, Product,** etc.
Each entity type will have one or more **attributes...**

```python
class User:
    def __init__(self, id, name, email):
        self.id = id
        self.name = name
        self.email = email

class Post:
    def __init__(self, id, title, content, author_id):
        self.id = id
        self.title = title
        self.content = content
        self.author_id = author_id

class Comment:
    def __init__(self, id, content, author_id, post_id):
        self.id = id
        self.content = content
        self.author_id = author_id
        self.post_id = post_id

class Order:
    def __init__(self, id, user_id, product_id, quantity):
        self.id = id
        self.user_id = user_id
        self.product_id = product_id
        self.quantity = quantity

class Product:
    def __init__(self, id, name, price):
        self.id = id
        self.name = name
        self.price = price
```

### The Attributes for a Data Entity

> 👉 You Do - Identify Attributes (1 minute)
> Identify what other attributes might a Book entity have?

<details>
<summary>
Attributes of a Book entity from ChatGPT
</summary>
<hr>

```python
class Book:
    def __init__(self, isbn, title, author, publisher, publication_date, pages, language, format, price):
        self.isbn = isbn
        self.title = title
        self.author = author
        self.publisher = publisher
        self.publication_date = publication_date
        self.pages = pages
        self.language = language
        self.format = format
        self.price = price
```

<hr>
</details>

### Mapping Between an Entity and a Relational Database

The conceptual data model serves as a plan or template that specifies how the final database will be organized.

In a relational database, each entity in the data model corresponds to a table, meaning that a Book entity would create a books table in the database.

```
Each **attribute** in an entity identifies a **column** in the table. For example, the **title** attribute will result in a column with the same name.

Each **row** in the table would represent an **instance** of the **entity**.
```
![What's Said Above:::](https://datacadamia.com/_media/data/modeling/relational_data_model.jpg?fetcher=raster&tok=448864&tseed=1286985913&w=500)

## 3. Designing an Entity Relationship Diagram (ERD)

To learn about data modeling, we'll design an ERD for an application...

### The Sample Application
`null`

### The Process

Reviewing an application's **user stories** is a good first step to creating the conceptual data model.

To design a basic ERD, we must identify three different components:
1. The data entities
2. The attributes (the data properties of an entity)
3. The relationships between the entities

### The Ticket Entity
`null`

### Distinguishing Between Attributes and Entities

If you answer "yes" to either of the following questions, the attribute is likely a candidate to be an entity instead:

- Would the attribute likely have attributes of its own?
- Could the attribute be in common with other entities? For example, a Customer for a Ticket is also likely to be common to other entities like Order, MarketingCampaign, Review, etc.

### 👉 You Do - Identifying Other Data Entities/Attributes (5 mins)

`null`

### Database Vocabulary - Database Normalization

What is **data normalization**?

Data normalization is the process of organizing and transforming data in a database to reduce redundancy and improve data integrity. It involves applying a series of rules to the data to ensure that it conforms to a standard format, such as removing duplicate data, converting data to the same units of measurement, and ensuring that data falls within a specified range.

Normalization typically involves dividing a database into two or more tables and establishing relationships between them. This allows data to be stored in a more efficient and organized manner, and makes it easier to maintain and update.

The purpose of data normalization is to minimize data redundancy, improve data consistency and accuracy, and ensure that data can be easily queried and analyzed. It is an important step in the database design process, as it can have a significant impact on the performance and scalability of a database system.

> Database Normalization is the process of designing a relational database to be more efficient by reducing redundancies.
> A relational database is able to perform searching & updating of data much more efficiently when it is "normalized".

## Relationships Between Entities

### What is `cardinality`?

In this context, cardinality refers to the number of instances or occurrences of one entity that can be associated with the instances or occurrences of another entity in a relationship. In other words, it describes the number of entities on either side of a relationship.

For example, a one-to-many relationship between two entities would mean that one instance of the first entity can be associated with many instances of the second entity, while each instance of the second entity can only be associated with one instance of the first entity.

Therefore, in the given sentence, the phrase "their cardinality" is referring to the way the entities are related in terms of how many instances of one entity can be associated with how many instances of another entity in the relationship.

There are three main types of cardinality:

- one-to-one (1:1)
- one-to-many (1:M)
- many-to-many (M:M)

### Example: One-To-One Relationship

`null`

## 4. Determining the Cardinality Between Entities

**❓ Which of the two tables would have to contain the Foreign Key (FK)?**
> The primary key uniquely identifies each row in a table, while a foreign key establishes a link between two tables by referencing the primary key of another table.


![Imgur](https://i.imgur.com/MxjCKgb.png)

![E Commerce Foreign Key Diagram](https://cloud.google.com/static/spanner/docs/images/foreign-keys-example.svg)


## 👉 You Do - Identify the Remaining Relationship (2 mins)

Identify the remaining relationships:

- Concert and Venue
- Concert and Performer

## 5. Summary

`null`

## 6. ❓ Essential Questions (1 min)