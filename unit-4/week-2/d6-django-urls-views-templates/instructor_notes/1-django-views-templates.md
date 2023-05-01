

# Django URLs, Views, and Templates

Class Repo
[Django URLs, Views, and Templates](https://git.generalassemb.ly/SEIR-2-21-23/course-materials/blob/main/unit-4/week-2/d6-django-urls-views-templates/6.1-django-urls-views-templates.md)

Programming With Mosh
[Python Django Tutorial for Beginners](https://www.youtube.com/watch?v=rHux0gMZ3Eg)

## 1. Learning Django Game Plan

`null`

## 2. Review the Request/Response Cycle in Django

![Imgur](https://i.imgur.com/XaOz50J.png)

*How a request flows through a Django project:*

When a request is made to a Django project, it goes through a series of steps, which can be broadly summarized as follows:

1. **The request is received by the web server**: When a user makes a request to a Django project, the request is received by the web server, such as Apache or Nginx, that is configured to serve the Django project.

2. **The request is passed to Django**: The web server passes the request to Django via a WSGI (Web Server Gateway Interface) interface, which is a specification for how web servers communicate with web applications.

3. **URL routing**: Django matches the requested URL with a pattern defined in the project's URL configuration. This is done using the urls.py file, which contains a list of URL patterns and their corresponding views.

4. **View processing**: Once a URL pattern is matched, Django calls the view function associated with that URL pattern. The view function takes the request object as input, processes the request, and returns a response.

5. **Middleware processing**: Before and after the view function is called, any middleware classes defined in the project are executed. Middleware can modify the request or response, or perform additional processing, such as authentication or caching.

6. **Template rendering**: If the view function returns a template response, Django renders the template using the context data returned by the view. This involves substituting variables in the template with their corresponding values.

7. **Response processing**: Once the template is rendered, Django constructs an HTTP response, which includes the rendered content, any cookies or headers set by the view or middleware, and an HTTP status code.

8. **The response is sent to the web server**: The response is then passed back to the web server via the WSGI interface, which sends it to the client that made the request.

**In summary**, when a request is made to a Django project, it is first received by the web server, passed to Django via a WSGI interface, matched to a URL pattern, processed by a view function, and then passed through any middleware before being rendered and returned as an HTTP response.

## 3. Start the Cat Collector Project

### Create the database
```shell
createdb catcollector
# Linux Version
psql
CREATE DATABASE catcollector;
```

### Start the Project
```shell
cd ~/Desktop

django-admin startproject catcollector

cd catcollector

code .
```

### Create the App

- [x] Take a look at the INSTALLED_APPS list in catcollector/settings.py. Those pre-installed apps provide services such as the admin app and the ability to serve static files.

```shell
/Users/kennethga/Desktop/catcollector
python3 manage.py startapp main_app
```

```python
# settings.py
# Application definition

INSTALLED_APPS = [
    'main_app', // add this line here
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
]
```

### Connecting to the Database

Earlier, we created a dedicated catcollector PostgreSQL database. 

A Django project's configuration lives in settings.py. 

Let's update it to use our catcollector database:

```py
# settings.py

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'catcollector',
        # 'HOST': 'localhost',  <-- (optional) some computers might need this line
        # 'USER': 'admin', <-- (optional) postgres user name, if you have to sign into an account to open psql, you will want to add that user name here.
        # 'PASSWORD': 'password123', <-- (optional) postgres user password, if you have to sign into an account to open psql, you will want to add that user password here.
        # 'PORT': 3000 <-- if you desire to use a port other than 8000, you can change that here to any valid port id, some number between 1 and 65535 that isn't in use by some other process on your machine. The reason for this port number range is because of how TCP/IP works, a TCP/IP protocol network(the most widely used protocol used on the web) allocated 16 bits for port numbers. This means that number must be greater than 0 and less than 2^15 -1. 
    }
}
```

### Migrating the Pending Migrations

We use migrations to update the database's schema over time to meet the project's needs.

There are several migrations pending (i.e., waiting to be applied to the database) - so let's apply them:

```python
python3 manage.py migrate
```

## 4. Add the GitHub Remote to Sync With

### Connect to the Remote

`pass`

### Updating the Database After Syncing Code

```python
python3 manage.py
```

### Unable to Migrate Database Due to Errors

- [x] Do this in case of emergencies.

1. `dropdb <database name>`
2. `createdb <database name>`
3. `python3 manage.py migrate`
4. `python3 manage.py createsuperuser` (you'll learn about this next lesson)

## 5. Defining Routes (URLs)

Let's not forget that Django's routing system only cares about the
URL ("path") of the request and ignores the HTTP method.

<b>http://localhost:8000</b>

### One-time URL Setup

There's an existing project **catcollector/urls.py** that we could add additional routes to, 
however it is best practice for each Django app to **define it's own routes** and to include 
those URLs in the project.

1. Create the **urls.py** module:
```shell
touch main_app/urls.py
```

2. Let's include it in the project's urls file - **catcollector/urls.py**
```python
from django.contrib import admin
# Add the include function to the import
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    # '' represents the "starts with" path
    path('', include('main_app.urls')),
]
```

This is the URL configuration for a Django project called "catcollector". The `urlpatterns` list routes URLs to views, which are functions or classes that handle HTTP requests and return responses.

Here's what each URL pattern does:

- [x] `path('admin/', admin.site.urls)`: This pattern maps the URL `https://example.com/admin/` to the Django built-in admin site. This allows the user to access the admin interface of the Django project.

- [x] `path('', include('main_app.urls'))`: This pattern maps the root URL `https://example.com/` to the `main_app.urls` module. This means that any URL that starts with the root URL will be handled by the `main_app.urls` module. The `include()` function is used to include the `main_app.urls` module in the URLconf.

By using the `include()` function, the URL configuration in `main_app.urls` can be separated from the URL configuration in the project's main `urls.py` file. This helps keep the project organized and makes it easier to add new apps to the project in the future.

3. Now for the boilerplate needed in **main_app/urls.py:**

```python
# main_app/urls.py
from django.urls import path
from . import views

urlpatterns = [

]

```

- We are setting up URL patterns for a Django app called "main_app". 

- The `path` function has been imported to define the routes, and a list called `urlpatterns` has been created to hold the routes.

## Define **`main_app's`** Home Page URL:

- [x] Define the route to display the Home page.

```python
# main_app/urls.py
urlpatterns = [
  path('', views.home, name='home'),
]
```

This code sets up a URL pattern using the `path()` function from Django's URL dispatcher.

The **first argument** to the `path()` function is the URL pattern, which in this case is an empty string (''). This means that the URL will match the root URL of the website (e.g., **https://example.com/)**.

The **second argument** to the `path()` function is the view function that will be called when the URL pattern is matched. In this case, the view function is `views.home`, which means that the `home()` function from the `views.py` module of the current app (`.`) will be called.

Finally, **the name argument** is an optional argument that gives the URL pattern a name, which can be used to refer to it in other parts of the Django app (e.g., templates). In this case, the name is `'home'`.

```shell
# In console:
python3 manage.py runserver
    
    path('', views.home, name='home'),
AttributeError: module 'main_app.views' has no attribute 'home'
```

The Home page route has been defined! On to the view...

## 6. Defining View Functions

<details>
<summary>
❓ What is the equivalent to a Django View Function in Express?
</summary>
<hr>

**Controller Function**

<hr>
</details>

In the route for the Home page we referenced a view function named home.

We will define all of the app's views in **main_app/views.py**.

Let's define the `home` view function and render a non-existing template:

```python
# main_app/views.py

from django.shortcuts import render

# Define the home view
def home(request):
    # Include an .html file extension - unlike when rendering EJS templates
    return render(request, 'home.html')
```

Okay. Let's check `localhost:8000` and see what we get.

![DJANGO TemplateDoesNotExist at / error](https://i.imgur.com/J9WKz5A.png)

## 7. Using Django Templates:

By default, a Django project is configured to look for templates inside of a `templates` folder within each app's folder (`main_app`in this case).

Let's create that `templates` folder for `main_app` to hold all of its template files:

```shell
ls

mkdir main_app/templates
```

### Create a home.html Template

Now we can easily solve our error by creating the missing template and adding a bit of HTML:

1. Create a **templates/home.html** file
2. Add the HTML boilerplate (`!` + `[tab]`)
3. Add a `<h1>Home</h1>` within the `<body>`

> 👀 Unlike EJS templates, Django templates use the common `.html` file extension.

### 👉 You Do - Define another URL, View Function and Template (10 mins)

1. Go to catcollector/urls.py. Seems okay. Go to main_app/urls.py

2. Go to main_app/views.py. Write up an about function

3. Go to main_app/templates/about.html

*Django Templating Language (DTL)* has **not** been used yet to render dynamic data, and introduces the idea of using Template Inheritance to avoid repeating boilerplate code in future templates.

## 8. Template Inheritance (Partials):

**Django template inheritance** is a powerful feature that allows developers to create a base template that can be extended by other templates, reducing code duplication and making it easier to maintain and update the templates.

Let's create a `base.html` template (named by convention):

```shell
touch main_app/templates/base.html
```

The "base" template contains all of the boilerplate and markup that belongs on every template that extends it, such as the `<head>`, navigation, even a footer (if you wish).

> 👀 Multiple "base" templates are rarely needed but can be defined if need be.

This will be our sweet boilerplate for now:

```html
<!-- main_app/templates/base.html -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Cat Collector</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
</head>
<body>
  <header class="navbar-fixed">
    <nav>
      <div class="nav-wrapper">
        <ul>
          <li><a href="/" class="left brand-logo">&nbsp;&nbsp;Cat Collector</a></li>
        </ul>
        <ul class="right">
          <li><a href="/about">About</a></li>
        </ul>
      </div>
    </nav>
  </header>
  <main class="container">
    <!-- Most Important Part -->
    <!-- Template Inheritance -->
    {% block content %}
    <!-- This is where we're going to inject our template HTML code -->
    {% endblock %}
  </main>
  <footer class="page-footer">
    <div class="right">All Rights Reserved, &copy; 2023 Cat Collector &nbsp;</div>
  </footer>
</body>
</html>
```

Inside **main_app/templates/about.html**
```python
# main_app/templates/about.html
{% extends 'base.html' %}
{% block content %}

<h1>About the Cat Collector</h1>
<hr>
<p>Hire the Cat Collector!</p>
<footer>All Rights Reserved, &copy; 2022 Cat Collector</footer>

{% endblock %}
```

Refresh (or navigate to **localhost:8000/about**).

## 9. Including Static Files in a Template

In web development, `static files` refer to the files that are served to the client's web browser as-is, without any modification from the server, and typically include files like **images, CSS stylesheets, and JavaScript files** that are necessary for the front-end design and functionality of the website or application.

Django projects are pre-configured with a `'django.contrib.staticfiles'` app installed for the purpose of serving static files.

If you look at the bottom of `settings.py`, there is a **STATIC_URL = 'static/'** variable that declares the name of the folder that will contain static files within a Django app.

We need that, so let's create it:
```shell
ls
mkdir main_app/static
mkdir main_app/static/css
touch main_app/static/css/style.css
```

Just to make sure that style.css is properly loaded, let's put in a touch of hideous CSS:

```css
/* main_app/static/css/style.css */
body {
  background-color: red;
}
```

We also have to update **base.html** by first adding the load template tag at the top:

```html
<!-- main_app/templates/base.html -->
{% load static %}

<!DOCTYPE html>
```

Finally, add this `<link>` below the Materialize CDN:

```html
<!-- main_app/templates/base.html -->
<link rel="stylesheet" type="text/css" href="{% static 'css/style.css' %}">
```

The `static` DTL template tag ensures that the correct URL is assigned to the `href`.

> 👀 Django caches templates & statics, so we'll need to restart the server!

> "cache" refers to the temporary storage of data in memory, disk or other media, used to speed up access to that data. In the context of the sentence, Django caches templates and static files to improve performance by avoiding the need to reload them from disk on every request, but this also means that changes to these files may not be immediately reflected in the server response until the cache is cleared or the server is restarted.

Then, Refresh - and... "red city" tells us that style.css is being loaded. Let's update it with the following (more pleasing) CSS:

```css
/* main_app/static/css/style.css */

body {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

main {
  flex: 1 0 auto;
}

footer.page-footer {
  padding-top: 0;
  text-align: right;
}
```

## 10. Rendering Data in a Template

Render data dynamically using Django templating by implementing the following user story:

> As a User, when I click the **View All My Cats** link, I want to see a page listing of all of my cats.

Luckily the [process of how to add a feature to a web application](https://gist.github.com/jim-clark/9f9bd19d60d9ce2ec57be8242b6aee96) from the previous unit you had "tattooed" applies to all web frameworks!

- Step 1 - Identify the "Proper" Route
- Step 2 - Create the UI
- Step 3 - Define the Route
- Step 4 - Code the View
- Step 5 - Respond to the Client's HTTP Request

### Step 1 - Identify the "Proper" Route

Although Django's URL routing does not strictly follow RESTful routing methodology, it's still possible to use similar paths where applicable. In this case, Jim Clark has chosen to use the path **/cats** to display all cats in accordance with RESTful conventions.

### Step 2 - Create the UI

For the UI, it makes sense to add the **View All My Cats** link to the navigation bar in **base.html**:

```html
<!-- main_app/templates/base.html -->

<li><a href="/about">About</a></li>
<!-- new markup below -->
<li><a href="/cats">View All My Cats</a></li>
```

> 👀 It's important to continue to use leading slashes in the HTML!

A quick refresh and we have our link:

![Checkpoint Image](https://i.imgur.com/4DZVGiI.png)

### Step 3 - Define the Route

Now let's add the new route to **main_app/urls.py**:

```python
# main_app/urls.py
urlpatterns = [
  path('', views.home, name='home'),
  path('about/', views.about, name='about'),
  # route for cats index
  path('cats/', views.cats_index, name='index'),
]
```

Even though the **views.py** module currently only has a view called `cats_index`, we name it in a way that anticipates there may be other views with the same name (e.g., index) for other resources in the future (such as toys). This naming convention helps to avoid naming conflicts and maintain consistency in the application.

Of course, by referencing a nonexistent view, the server's not happy 😆.

### Step 4 - Code the View

When working in Django, we'll just have to get used to calling *controller functions* **views** instead.

Let's code the cats_index view inside of **views.py**:

```python
# main_app/views.py
# Add new view
def cats_index(request):
  # We pass data to a template very much like we did in Express!
  return render(request, 'cats/index.html', {
    'cats': cats
  })
```

Go ahead and check **http://localhost:8000/cats/**

> NameError at /cats/
> name 'cats' is not defined

Two interesting things above:

1. The first point is explaining that the index.html template has been placed in a subfolder called cats inside the templates folder, for better organization and to avoid naming conflicts with other templates.

2. The second point is drawing a comparison between how data is passed to a template in Express using a JavaScript object, and how it's done in Django using a dictionary. Specifically, the dictionary is passed as the third argument to Django's render function.

### ..We Need Some Cats! 🐈

In the next lesson, we'll create a Cat model, but for now we're simply going to use a Python list containing a couple of "cat" dictionaries placed near the top of **views.py**:

```python
# main_app/views.py

# Add this cats list below the imports
cats = [
  {'name': 'Lolo', 'breed': 'tabby', 'description': 'furry little demon', 'age': 3},
  {'name': 'Sachi', 'breed': 'calico', 'description': 'gentle and loving', 'age': 2},
]
```

**http://localhost:8000/cats/**

> TemplateDoesNotExist at /cats/
> cats/index.html

### Step 5 - Respond to the Client's HTTP Request

We need to create the cats/index.html template currently being rendered.

First we need the `templates/cats` folder we'll use to organize cat related templates:

```shell
mkdir main_app/templates/cats
```

Now create the **cats/index.html** template file:

```shell
touch main_app/templates/cats/index.html
```

Now the fun stuff!

```html
<!-- main_app/templates/cats/index.html -->

{% extends 'base.html' %}
{% block content %}

<h1>Cat List</h1>

{% for cat in cats %}
  <div class="card">
    <div class="card-content">
      <span class="card-title">{{ cat.name }}</span>
      <p>Breed: {{ cat.breed }}</p>
      <p>Description: {{ cat.description }}</p>
      {% if cat.age > 0 %}
        <p>Age: {{ cat.age }}</p>
      {% else %}
        <p>Age: Kitten</p>
      {% endif %}
    </div>
  </div>
{% endfor %}

{% endblock %}
```

There are two *control flow* template tag constructs you'll use quite a bit:

- The `{% for %}` / `{% endfor %}` block &larr; used to perform looping
- The `{% if %}` / `{% elif %} / {% else %} / {% endif %}` block &larr; used for branching.

> 👀 Django's template tags, which are used to embed Python code in templates, are designed to have a similar syntax to their Python language counterparts. However, the use of these tags does not involve embedding Python code in the same way that EJS embeds JavaScript. Additionally, some of the tags in Django's template language, such as endfor and endif, are not actual Python language constructs.

The double curly brace syntax `{{}}` is used to print the values of variables and object properties.

How to invoke methods on objects in Django's Template Language (DTL): 
- DTL is its own language, distinct from Python. 
- DTL is a templating language, used to structure information to be processed by another process, rather than a full programming language like Python.

## 11. Summary

The current application is a minimal but functioning Django app that has an index page that displays a hard-coded list of cats. 

The next lesson will focus on Django Models for performing CRUD operations on a Cat Model inside the database.

## 12. Labs for Cat Collector Lessons

In the Django lab, the aim is to repeat the process learned in the lesson, but this time with a different item to collect (such as finches) and to call the project name something relevant to the new item being collected.

The final version of your "______ Collector" will be a deliverable.

Because your completed Collector project will be fairly comprehensive, makes it a great candidate for an addition to your portfolio.

Be sure to create your project within your ________ folder and push it to a repo in your personal GitHub account.

