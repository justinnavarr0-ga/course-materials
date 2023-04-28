# Intro to Django

[Intro to Django](https://git.generalassemb.ly/SEIR-2-21-23/course-materials/blob/main/unit-4/week-1/d5-intro-django/5.1-intro-django.md)

### What is `psycopg2` and what does it do?

`Psycopg2` is a Python library that provides a `database adapter for PostgreSQL databases`. It allows Python applications to connect to and interact with PostgreSQL databases.

With `psycopg2`, **you can create and manage database connections, execute SQL statements, fetch query results, and perform other operations` on PostgreSQL databases.** The library is designed to be simple to use and efficient, with a focus on database performance and security.

In addition to providing a basic database adapter, psycopg2 also supports advanced features like connection pooling, server-side cursors, asynchronous queries, and more. This makes it a powerful tool for building high-performance, scalable Python applications that interact with PostgreSQL databases.

## 1. What is Django?

- [x] A powerful Object-Relational-Mapper (ORM) for working with relational databases using Python code instead of SQL.

![ORM and SQL](https://res.cloudinary.com/practicaldev/image/fetch/s--Eyc7He9R--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/i/naoee5v4f0g6p6khix3k.png)


## 2. Django's MVT Architecture

**Summary of Lecture**

**TLDR;** The Django MVT architecture replaces the controller with views and incorporates many of its responsibilities into the framework itself, while still maintaining the fundamental separation of concerns in the MV* family of design patterns.


**Django's MVT Summary**

Django's MVT (Model-View-Template) architecture is a software design pattern that separates the concerns of an application into three distinct components:

1. `Models`: represents the data and business logic of the application, which is typically stored in a database.

**Business logic** in an application refers to the rules and processes that define how the application should operate based on the requirements of the business or organization. Business logic is typically implemented within the application's codebase and is often based on industry-specific rules and regulations, making it an integral part of the application's functionality.

2. `Views`: handles the user input and the presentation of data, which interacts with the model to fetch and manipulate data.

3. `Templates`: defines the structure and layout of the user interface, which is rendered by the view and delivered to the client.

In this architecture, the view acts as a mediator between the model and the template, passing data between them and controlling the flow of the application. The MVT architecture allows for modular and scalable development, where each component can be modified and tested independently, resulting in a more maintainable and adaptable codebase. Additionally, Django's MVT architecture eliminates the need for a separate controller component, which is present in other MV* frameworks, simplifying the development process and reducing the amount of code that needs to be written.

## 3. Components of a Django Project


The diagram illustrates the structure of a Django project and highlights the naming conventions used by the framework

A Django project refers to what is commonly known as a web application, while a Django app refers to a module or a component of an application. A Django project can contain multiple apps, and an app can be used across multiple projects, allowing for modularity and reusability in the development process.

![Imgur](https://i.imgur.com/dwMmqX8.png)


## 4. Django's Routing Methodology

**Django's routing methodology** involves defining URL patterns in a Python module named urls.py, which only uses the URL to define routes, unlike other web frameworks like Express and Ruby on Rails that use both the HTTP verb and URL.

```python
# Django
# urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('hello/', views.hello),
]
```
versus
```js
// Express
// server.js
const express = require('express');
const app = express();

app.get('/hello', (req, res) => {
  res.send('Hello World!');
});
```

## 5. Installation & Set Up

```console
django-admin
pip3 list
pip3 install Django
pip3 install psycopg2-binary
pip list
```

## 6. Django Tutorial Setup

MongoDB created the database for us.
With Django, we actually have to create the database first.

You're going to have to create a new database per project.

## 7. Code the Django Official Tutorial App
`null`

Make sure you move into the correct folder

## 8. Initial Project and Database Setup

```python
django-admin

# Make sure you move into the correct folder
django-admin startproject mysite

ls

cd mysite

code .

# control + ~ to open up a terminal
```

In a Django app, **`manage.py`** is a command-line tool used to perform various tasks related to managing the application, such as running the development server, creating database tables, and managing migrations.

In a Django app, the **`__init__.py`** file is a special file that is executed when the app is imported and is used to define the app's configuration and specify any initialization code that needs to be run when the app is loaded.

**`settings.py, urls.py`** are all *modules* available to be imported. 

In a Django app, **`settings.py`** is a configuration file that contains various settings and options that control the behavior of the application, such as database settings, middleware configuration, and installed apps.

The **`urls.py`** (with our diagram, it is the **OUTER urls.py**) file in a Django app maps URL patterns to corresponding views, allowing the app to respond to incoming requests from a user's web browser.

## Time to run the server

Make sure you move into the correct folder
```shell
mysite python3 manage.py runserver
```

Browse to `localhost:8000` in your browser.

Shut down server

## CREATING THE POLLS APP

[CREATING THE POLLS APP](https://docs.djangoproject.com/en/4.2/intro/tutorial01/#creating-the-polls-app:~:text=the%20Polls%20app-,%C2%B6,-Now%20that%20your)

```shell
# Make sure you move into the correct folder
python3 manage.py startapp polls
```

Check the `polls` folder? 

- [x] `db.sqlite3` is used to store and manage data for your app.
- [x] `views.py` is for our controller functions (Now Called VIEWS)


Inside `mysite/settings.py`, 

```python
# mysite/settings.py

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'polls',
    }
}
```

Inside terminal shell (Make sure you're in the right folder)
```shell
mysite python3 manage.py runserver
```

We expect to see the same warning messages we saw before (18 unapplied migrations)

## Setting TIME_ZONE:

```python
# mysite/settings.py
TIME_ZONE = 'UTC'
# Change to...
TIME_ZONE = 'America/Los_Angeles'
```

[TIME ZONE DJANGO DOCS](https://docs.djangoproject.com/en/4.2/ref/settings/#std-setting-TIME_ZONE)

[SEE LIST OF TIME ZONES](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)


## Start at Write Your First View (Part 1)

GO GO GO!

[Write your first view](https://docs.djangoproject.com/en/4.2/intro/tutorial01/)

Start at `WRITE YOU FIRST VIEW`

## EXTRA BONUS: What are Python Django Migrations?

Python Django migrations are a way to manage changes to the data models (database schema) of a Django application over time.

When you make changes to your models, such as adding a field, Django generates a migration file that contains instructions for how to modify the database schema to match the new models. These migration files are stored in the migrations directory of your app and can be applied using the migrate command to update the database schema.

Migrations allow for the smooth evolution of database schema over time, without losing data or requiring manual updates to the database.

