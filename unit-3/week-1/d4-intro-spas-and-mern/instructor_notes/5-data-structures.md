# Intro to Data Structures

[My GA Modules](https://my.generalassemb.ly/)

### 02/10 Learning Objectives: 

By the end of this lesson, you'll be able to:

- Explain how data structures are used in computer science.
- Define the five basic operations to perform on a data structure.
- Build an array and perform basic functions in it.

### 03/10 Why Data Structures?

Data structures are used to organize and manipulate data in a way that allows for efficient and effective access and modification. They provide a way to store and organize large amounts of information in a way that makes it easier to work with and analyze.

An analogy to understand data structures is to think of a library. A library organizes books in a specific way to make it easy for people to find the information they are looking for. The books are categorized by genre, author, title, and other attributes, and placed on shelves accordingly. This organization allows people to quickly locate books on specific topics or by specific authors.

Similarly, data structures organize data in a specific way based on their attributes, such as sorting them by value or organizing them into hierarchies. By using data structures, programmers can efficiently access and manipulate large amounts of data, much like how a library allows people to quickly find and retrieve books.

### 04/10 Choosing a Data Structure

- [x] No one data structure is equally efficient for all actions, and some data structures don’t support certain actions at all. That’s why it’s critical to structure your data well from the get-go.

Choosing the right data structure is an important aspect of software development as it can have a significant impact on the performance and efficiency of your code. Here are some key considerations when selecting a data structure:

1. `Understand the problem you are trying to solve:` You should have a clear understanding of the problem you are trying to solve and the type of data that you will be working with. This will help you identify the most suitable data structure for your needs.

2. `Consider the operations you will be performing:` You should also consider the operations you will be performing on the data, such as searching, inserting, deleting, and sorting. Different data structures are optimized for different operations, so choosing the right one can have a significant impact on the performance of your code.

3. `Analyze the time and space complexity:` Each data structure has its own time and space complexity characteristics. It is important to analyze these characteristics to determine whether the data structure is suitable for your needs. For example, if you have a large amount of data, you may need to consider a data structure that has a low space complexity.

4. `Think about the maintainability and readability of your code:` The data structure you choose should not only be efficient but also easy to read and maintain. If your code is difficult to read and maintain, it can be challenging to fix bugs and add new features in the future.

Overall, `choosing the right data structure requires a balance between efficiency, maintainability, and readability.` By carefully analyzing your needs and the characteristics of different data structures, you can select the one that best meets your requirements.

### 05/10 The Importance of Understanding Data Structures

Understanding data structures is crucial for efficient and effective software development. Data structures provide a way to store and organize data in a way that allows for efficient access and modification. By selecting the right data structure for a given problem, programmers can optimize the performance of their code and minimize the use of resources. Additionally, a strong understanding of data structures is important for solving complex problems and developing algorithms. Without this knowledge, it can be challenging to develop efficient solutions and maintainable code. Therefore, understanding data structures is a fundamental skill for any programmer.

### 06/10 Starting With Basics: The Array

An array is a collection of items that can be accessed individually via an index that lists the position of items in that array.

### 07/10 Characteristics of Arrays:

Arrays share a few key characteristics. They...

- Are indexed. In most programming languages, the index starts at 0.
- Depending on the programming language, can be either fixed size (Java, C) or changeable size (JavaScript, Ruby).
- Are typically restricted to one data type — integers, strings, Booleans, etc.

Their specifications are also consistent across most programming languages.

![Yay! Arrays!](https://i.imgur.com/Q11HPhr.png)

### 08/10 Putting Arrays to Work

You want to calculate the average daily temperature for the week using your computer science skills. You also know you probably want to use a loop to get this answer. Simple enough!

```js
let weatherData = [54, 57, 51, 51, 55, 58, 56]
```

### 09/10 Limitations of Arrays

Unfortunately, an array can’t immediately answer all of the questions we might ask about our weather data

```js
let weatherData = [54, 57, 51, 51, 55, 58, 56]
```

- Did any two days have the same average temperature?
- Which temperature appears the most?

To answer these questions, we’d have to write additional code to process data inside the array.

Or, we could just use a different data structure! An alternate structure may allow us to store the data points — in this example, the temperatures — in a way that answers our questions without having to write any extra code.

Let’s take a quick look at the data structures we’ll cover throughout the rest of this unit.

### 10/10 The Great Data Structures

Linked Lists, Stacks, Queues, Hash Tables, Sets, Binary Trees, Trees, AVL Trees, Graphs.


