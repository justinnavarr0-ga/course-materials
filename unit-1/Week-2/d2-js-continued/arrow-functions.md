Skip to content
 Enterprise
Search or jump to…
Pull requests
Issues
Explore
 
@pfulcher26 
SEI-Standard-Curriculum
/
SEIR-Course-Materials
Internal template
2
515
Code
Issues
2
Pull requests
2
Projects
Wiki
Security
Insights
You’re making changes in a project you don’t have write access to. Submitting a change will write it to a new branch in your fork pfulcher26/SEIR-Course-Materials, so you can send a pull request.
SEIR-Course-Materials
/
Unit_1
/
07-js-continued
/
7.1-js-arrow-functions.md
in
SEI-Standard-Curriculum:main
 

Tabs

8

Soft wrap
1
<img src="https://i.imgur.com/gGKrqF5.png">
2
​
3
# ES2015 (ES6) - Arrow Functions Walk-Through
4
​
5
##### Arrow functions have a more terse syntax than regular functions (`function` keyword):
6
​
7
```js
8
// regular function
9
let squares = [1, 2, 3].map(function (x) { return x * x });
10
// arrow function
11
let squares = [1, 2, 3].map(x => x * x);
12
```
13
​
14
##### A single parameter need not be wrapped in parens:
15
​
16
```js
17
x => { ... }  // one parameter
18
() => { ... }  // no parameters
19
(x, y) => { ... }  // two or more parameters
20
```
21
​
22
However, even though we can skip wrapping a single parameter with parens, many style guides recommend using them anyway:
23
​
24
```js
25
(x) => { ... }  // one parameter
26
```
27
​
28
##### The statement block of an arrow function behaves just like that of a regular function:
29
​
30
```js
31
const getGrade = (score) => {
32
  if (score === 100) return 'A+';
33
  score = Math.floor(score / 10);
34
  return ['F', 'F', 'F', 'F', 'F', 'F', 'D', 'C', 'B', 'A'][score];
35
};
36
```
37
​
38
##### If there's only a single **expression** (not a statement), curly braces are optional:
39
​
40
```js
41
const logThis = () => { console.log(this) };
42
const logThis = () => console.log(this);
43
```
44
​
45
##### Arrow functions will implicitly return the result of an **expression** without a block (braces):
No file chosen
Attach files by dragging & dropping, selecting or pasting them.
@pfulcher26
Propose changes
Commit summary
Create 7.1-js-arrow-functions.md
Optional extended description
Add an optional extended description…
 
© 2023 GitHub, Inc.
Help
Support
API
Training
Blog
About
GitHub Enterprise Server 3.3.8
