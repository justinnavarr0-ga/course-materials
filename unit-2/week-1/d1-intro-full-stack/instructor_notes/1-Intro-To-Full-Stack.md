# Intro to Full-Stack Development & HTTP

[Intro to Full Stack Repo Standard Curriculum](https://git.generalassemb.ly/SEIR-2-21-23/course-materials/blob/main/unit-2/week-1/d1-intro-full-stack/1.1-intro-fullstack-http.md)

![Full Stack Development](https://i.imgur.com/PE14J3Y.jpg)

## 1. Why Learn Full-Stack Web Development?
- U.S News and World Report huh? Hmmm... 😬
- The bottom-line is: **Full-stack Developers are in demand!**

## 2. What is a Full-Stack Developer?

A full stack developer is a software engineer who is proficient in working with all the layers of a web application, including front-end development, back-end development, and database design.

In other words, a full stack developer has a broad set of skills and can handle everything from developing the user interface (UI) and user experience (UX) of a web application to designing and managing the server-side logic, databases, and APIs. They may work with various programming languages, frameworks, libraries, and tools to build a complete and functional web application.

Full stack developers are highly sought after in the software industry because they can independently handle the entire development process and bring a project from concept to deployment.

## 3. SEI Web Technology Stacks

Unit 2 - MEN Stack
Unit 3 - MERN
Unit 4 - Django PostgreSQL Python

## 4. Client/Server Architecture

![Client Server Model](https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Client-server-model.svg/500px-Client-server-model.svg.png)

- [x] Client-server architecture, alternatively called a client-server model, is a network application that breaks down tasks and workloads between clients and servers that reside on the same system or are linked by a computer network.

`null`

- It is important to realize that sometimes `clients are also servers`, and at times `a server could play the role of client and server`.

## 5. What is HTTP?

HTTP can be thought of as a postal service for the internet. Just as postal services enable the exchange of letters and parcels between different locations, HTTP enables the exchange of information between clients and servers on the web.

In this analogy, the web browser is like the sender of a letter, and the web server is like the recipient. The HTTP request is like the letter, which contains the message or data that the sender wants to send to the recipient. The HTTP response is like the reply from the recipient, which contains the requested data or an error message if something went wrong.

Just as postal services have specific procedures and guidelines for sending and receiving mail, `HTTP has its own set of rules and standards that ensure the secure and reliable transfer of data over the internet`.

[What are the rules for this HTTP package I'm sending?](https://www.cloudflare.com/learning/ddos/glossary/hypertext-transfer-protocol-http/)


## 6. Let's Make an HTTP Request

1. Open up Chrome browser.
2. Make a request to `Tinder`.
3. Each one of those lines represents a separate HTTP request made to a server! Find the line in the left-side pane with `tinder.com` and click on it: See the Response Headers? See the Request Headers?

There ya go. We just made an HTTP Request. 

`Response headers` and `request headers` are necessary to make an HTTP request because they provide important metadata and context to both the client and server, `which helps to ensure a reliable and secure data transfer process`.

## 7. Anatomy of HTTP Request/Response Messages

1. Open up terminal
2. For HTTP headers, run `curl -I https://tinder.com/`

#### Basic Curl GET request example:

First Try: `curl https://tinder.com/`
Then Try: `curl -v https://tinder.com/`

#### The Status Code of the Response

![HTTP Status Codes](https://devqa.io/assets/images/http-status-codes.png)

- 1xx Informational
- 2xx Success
- 3xx Redirection
- 4xx Client Error
- 5xx Server Error

#### The Body of the Message

`MIME` Types - A media type (also known as a` Multipurpose Internet Mail Extensions` or `MIME` type) indicates the nature and format of a document, file, or assortment of bytes.

- [x] Body
- [x] Content-Type 

In computer science and mathematics, `binary` is a system where numbers and values are expressed 0 or 1. `Binary is base-2`, meaning that it only uses two digits or bits. For computers, 1 is true or "on", and 0 is false or "off".

## 8. The Two Key Components of an HTTP Request:

The two key components of any HTTP request are:

- The **HTTP** method (GET in the example above), and
- The **Path/Endpoint** (/puppies in the example), also referred to as the URL (although more accurately is a URI)

## 9. HTTP Methods:

- `GET`
- `POST`
- `PUT/PATCH`
In summary, `PUT` is used to **completely** replace or create a resource, while `PATCH` is used to partially modify an existing resource.
- `DELETE`

Create Read Update Delete = CRUD

#### ❓ Quiz Time: Match up CRUD with HTTP Methods.

## 10. URLs

- URL stands for Uniform Resource Locator.
- The URL informs the server of what resource the client wants to GET. create (POST), DELETE or UPDATE.
- Developers often refer to just the path as a URL.

![Anatomy of the URL](https://www.terminusapp.com/blog/wp-content/uploads/2022/07/anatomy-of-url.png)

- [x] `https://www.reddit.com/search/?q=tinder`
- [x] `https://www.reddit.com/r/Tinder/`

## 11. Ways to Send HTTP Requests From the Browser

👀 In this unit our apps will rely on the user clicking links (`<a>` elements) and submitting forms (`<form>` elements) to interact with the app - that's it!

## 12. How HTTP Requests Run Code on the Server

HTTP requests are used to send information from a client (such as a web browser or mobile app) to a server. When a server receives an HTTP request, it can run code to process the request and generate a response.

For example, if a client sends an HTTP request to a server to retrieve some data, the server might run code to fetch the data from a database, format it into a JSON object, and send it back to the client in an HTTP response.

The server code that runs in response to an HTTP request is typically written in a server-side programming language such as PHP, Python, or Node.js. This code can access various resources and perform various operations on the server, such as interacting with databases, sending emails, or generating HTML pages.

*In summary, when an HTTP request is received by a server, it triggers the execution of server-side code, which can perform various operations and generate a response to send back to the client.*

[An Overview of HTTP MDN DOCS](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview)

![How HTTP Requests Run On Servers](https://i.imgur.com/ltB5IYA.png)

- An HTTP Request leaves the browser due to user clicking a link, submitting a form or making an API request.
- The HTTP Request matches a route in the app.
- The route maps the request to code.
- The code runs and ultimately sends an HTTP Response back to the browser.

1. The user submits the sign up form.

2. An HTTP request message with the form's data in the request body leaves the browser.

3. The HTTP request is received by the web app's routing and, in this case, would match the route defined to match a `POST /users` (**HTTP Method** & **Path**) HTTP request.

4. The purpose of a defined route is to map an HTTP request to code which is typically a function defined in the "controller" module.  The controller function would perform any necessary data operations, etc.

5. The controller function ultimately responds with an HTTP Response which can either:
    - Containing an HTML page in the message body (in the case of a GET request)
    - Or, with a Status Code of 302 (Redirect), make the browser issue a new GET request.

## 13. ❓ Essential Questions

1.  ❓❓❓ Huh??? Let me frame this one for y'all.
2. CRUD CREATE READ UPDATE DELETE... HTTP METHODS!! GET POST PUT DELETE

- In networking, a communications protocol or network protocol is the specification of a set of rules for a particular type of communication.

#### Common Internet protocols

Common Internet protocols include TCP/IP (Transmission Control Protocol/Internet Protocol), UDP/IP (User Datagram Protocol/Internet Protocol), HTTP (HyperText Transfer Protocol) and FTP (File Transfer Protocol).

#### TCP/IP
TCP/IP is a stream protocol. This means that a connection is negotiated between a client and a server. Any data transmitted between these two endpoints is guaranteed to arrive, thus it is a so-called lossless protocol. Since the TCP protocol (as it is also referred to in short form) can only connect two endpoints, it is also called a peer-to-peer protocol.

#### HTTP
HTTP is the protocol used to transmit all data present on the World Wide Web. This includes text, multimedia and graphics. It is the protocol used to transmit HTML, the language that makes all the fancy decorations in your browser. It works upon TCP/IP.

#### FTP
FTP is the protocol used to transmit files between computers connected to each other by a TCP/IP network, such as the Internet.

2. ❓❓❓ Name three HTTP methods/verbs.
3. ❓❓❓ What are the two key components of an HTTP Request that are typically used to match a route on the server?
4. ❓❓❓ Explain how an HTTP request makes code run on the server.


#### 14. Further Study

- [x] Ways to Send HTTP Requests Without Using the Browser
1. POSTMAN
2. cURL
3. node (NOT AXIOS, ...yet)

```js
// node-js-request.js
const fetch = require('node-fetch');

fetch('https://pokeapi.co/api/v2/pokemon/ditto')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
```

Error: Cannot find module 'node-fetch'

1. `npm i node-fetch@2.6.1`
2. Run `node node-js-request.js` in terminal.

