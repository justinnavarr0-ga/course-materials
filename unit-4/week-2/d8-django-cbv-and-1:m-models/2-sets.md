# 35 Questions To Test Your Knowledge of Python Sets

## What is a set?🤨🧐🤔

- [x] A set is an unordered collection of unique objects.
- [x] Duplicate values are removed when any object is converted to a set.

> We don’t often use sets in day to day programming, and most of us only touch set theory when writing SQL joins. However, it doesn’t hurt to be familiar with the basics.

<hr>
1. Does converting an object to a set maintain the object’s order?

No. A set is not an ordered data structure, so order is not maintained.

Look what happens when we convert the list `[3,2,1]` to a set. It becomes `{1,2,3}`.

```python
a = set([3,2,1])
a
#=> {1, 2, 3}
```

<hr>
2. Check if a set a subset of another set

This can be done with the `issubset()` method.

```python
a = {4,5}
b = {1,2,3,4,5}
a.issubset(b)
#=> True
b.issubset(a)
#=> False
```

<hr>
3. Check if a set is a subset, using comparison operators

A set, `s1`, is a subset of `s2` if all elements of `s1` are in `s2`.

The operators `<=` will return `True` if all elements of the 1st set exist in the 2nd set (aka. is a subset).

```python
a = {'a','b'}
b = {'a','b','c'}
a <= b
#=> True
b <= a
#=> False
```

<hr>
4. Is a set a subset of itself?

Yes.

Because a set contains all elements in itself, it is indeed a subset of itself. This is important to understand when we contrast “subset” with “proper subset” later.

```python
a = {10,20}
a.issubset(a)
#=> True
```

<hr>
5. Check if a specific value exists in a set

Like other types of iterables, we can check if a value exists in a set with the `in` operator.

```python
s = {5,7,9}
5 in s
#=> True
6 in s
#=> False
```

<hr>
6. Check if a value is not in a set

We can again use the `in` operator, but this time prefaced by `not`.

```python
s = {'x','y''z'}
'w' not in s
#=> True
'x' not in s
#=> False
```

<hr>
7. What is a set?

A set is an unordered collection of unique objects.

Duplicate values are removed when any object is converted to a set.

```python
set([1,1,1,3,5])
#=> {1, 3, 5}
```

In my personal experience, I use sets because they make operations like finding intersections, unions and differences easy.

<hr>
8. What is the difference between a subset and a proper subset?

A proper subset is a subset of a set, not equal to itself.

For example:

`{1,2,3}` is a proper subset of `{1,2,3,4}`.

`{1,2,3}` is not a proper subset of `{1,2,3}`, but it is a subset.

<hr>
9. Check if a set is a proper subset

We can check if a set is a proper subset of another set using the `<` operator.

```python
{1,2,3} < {1,2,3,4}
#=> True
{1,2,3} < {1,2,3}
#=> False
```

<hr>
10. Add an element to a set

Unlike lists, we can’t use the `+` operator to add elements to a set.

```python
{1,2,3} + {4}
#=> TypeError: unsupported operand type(s) for +: 'set' and 'set'
```

Use the `add` method to add elements.

```python
s = {'a','b','c'}
s.add('d')
s
#=> {'a', 'b', 'c', 'd'}
```

<hr>
11. Make a copy of a set

The `copy()` method makes a shallow copy of a set.

```python
s1 = {'a','b','c'}
s2 = s1.copy()
s2
#=> {'c', 'b', 'a'}
```

<hr>
12. Check if a set is a superset of another set

A set, `s1` is a superset of another set, `s2`, if all values in `s2` can be found in `s1`.

You can check if a set is a superset of another set with the `issuperset()` method.

```python
a = {10,20,30}
b = {10,20}
a.issuperset(b) #=> True
b.issuperset(a) #=> False
```

<hr>
13. Check if a set is a superset with comparison operators

In addition to `issuperset()`, we can check if a set is a superset using the `>=` comparison operators.

```python
a = {10,20,30}
b = {10,20}
a >= b #=> True
b >= a #=> False
```

<hr>
14. Is a set a superset of itself?

Because all the values in a set, `s1`, are in `s1`, it is a superset of itself. Though it is not a proper superset.

```python
a = {10,20,30}
a.issuperset(a)
#=> True
```

<hr>
15. Check if a set is a proper superset of another set

A set, `s1` is a proper superset of another set, `s2`, if all the values in `s2` are in `s1`, and `s1 != s2`.

This can be checked with the `>` operator.

```python
a = {10,20,30}
b = {10,20}
c = {10,20}
a > b #=> True
b > c #=> False
```

<hr>
16. Convert a set to a list

Calling the list constructor, `list()`, on a set converts a set to a list. But note that order is not guaranteed.

```python
a = {4,2,3}
list(a)
#=> [2, 3, 4]
```

<hr>
17. How can you iterate on values in a set?

A set can be iterated over like any other iterator with a loop. But note again, order is not guaranteed.

```python
s = {'a','b','c','d','e'}
for i in s:
    print(i)

#=> b
#=> c
#=> e
#=> d
#=> a
```

<hr>
18. Return the length of a set

The number of elements in a set can be returned with the `len()` function.

```python
s = {'a','b','c','d','e'}
len(s)
#=> 5
```

<hr>
19. Create a set

A set can be created using set notation with curly braces like, `{…}`, example:

```python
{1,2,3}
#=> {1, 2, 3}
```

Or with the set constructor, example:

```python
# set(1,2,3)
=> TypeError: set expected at most 1 arguments, got 3
set([1,2,3])
#=> {1, 2, 3}
```

But note the latter requires passing in another iterable object like a list.

<hr>
20. Find the union of 2 sets.

The union of 2 sets can be found by using the `union()` method.

```python
s1 = {1,2,3,4,5}
s2 = {4,5,6,7,8}
s1.union(s2)
#=> {1, 2, 3, 4, 5, 6, 7, 8}
```

It can also be found with the `|` operator.

```python
s1 = {1,2,3,4,5}
s2 = {4,5,6,7,8}
s1 | s2
#=> {1, 2, 3, 4, 5, 6, 7, 8}
```

<hr>
21. Find the intersection of 2 sets

The intersection of 2 sets can be taken with the `intersection()` method.

```python
s1 = {1,2,3,4,5}
s2 = {4,5,6,7,8}
s1.intersection(s2)
# => {4, 5}
```

It can also be taken with the `&` operator.

```python
s1 = {1,2,3,4,5}
s2 = {4,5,6,7,8}
s1 & s2
# => {4, 5}
```

<hr>
22. Find the elements in s1 that are not in s2

This can be found with the `difference()` method.

```python
s1 = {1,2,3,4,5}
s2 = {4,5,6,7,8}
s1.difference(s2)
{1, 2, 3}
```

It can also be found with the `-` operator.

```python
s1 = {1,2,3,4,5}
s2 = {4,5,6,7,8}
s1 - s2
{1, 2, 3}
```

<hr>
23. Remove an element from a set

`remove()` removes an element from a set by value.

```python
s = {'x','y','z'}
s.remove('x')
s
#=> {'y', 'z'}
```

<hr>
24. Remove and return an unspecified element from a set

`pop()` removes and returns an element from a set, treating the set like an unordered queue.

```python
s = {'z','y','x'}
s.pop()
s
#=> {'y', 'z'}
```

<hr>
25. Check if 2 sets are disjoint

Sets, `s1` and `s2` are disjoint if they have no elements in common.

```python
a = {1,2,3}
b = {4,5,6}
c = {3}
a.isdisjoint(b) #=> True
a.isdisjoint(c) #=> False
```

<hr>
26. Add all elements from another set to an existing set

The `update()` method adds elements from another set.

```python
a = {1,2,3}
b = {3,4,5}
a.update(b)
a
#=> {1, 2, 3, 4, 5}
```

This can also be done with the `|=` operator.

```python
a = {1,2,3}
b = {3,4,5}
a |= b
a
#=> {1, 2, 3, 4, 5}
```

Note this is different from `union`. `union()` returns a new set instead of updating an existing set.

<hr>
27. Remove all elements from a set

`clear()` removes all elements from a set. The set can then be used for future operations and store other values.

```python
a = {1,2,3}
a.clear()
a
#=> set()
```

<hr>
28. Remove an element from a set if it exists

`discard()` removes an element if that element exists, otherwise it does nothing.

```python
a = {1,2,3}
a.discard(1)
a
#=> {2, 3}
a = {1,2,3}
a.discard(5)
a
#=> {1, 2, 3}
```

Contrast this to `remove()` which throws an error if you try to remove an element that doesn’t exist.

```python
a = {1,2,3}
a.remove(5)
a
#=> KeyError: 5
```

<hr>
29. What is the result of passing a dictionary to a set constructor?

Only the dictionary’s keys will exist in the returned set.

```python
d = {'dog': 1, 'cat':2, 'fish':3}
set(d)
#=> {'cat', 'dog', 'fish'}
```

<hr>
30. Can you zip 2 sets together?

Yes. But the values from each set may not be joined in order.

Notice how the 1st value in the integer set was combined with the 3rd value in the letter set, `(1, 'c')`.

```python
z = zip(
  {1,2,3},
  {'a','b','c'}
)
list(z)
#=> [(1, 'c'), (2, 'b'), (3, 'a')]
```

<hr>
31. Can a set be accessed by index?

No. Trying to access a set by index will throw an error.

```python
s = {1,2,3}
s[0]
#=> TypeError: 'set' object is not subscriptable
```

<hr>
32. What is the difference between a set and a tuple?

Tuples are immutable. Sets are mutable.

Values in a tuple can be accessed by index. Values in a set can only be accessed by value.

Tuples have order. Sets have no order.

Sets implement set theory, so they have lots of interesting functionality like union, intersect, difference, etc.

<hr>
33. What is the difference between a set and a frozenset?

Frozensets behave just like sets except they are immutable.

```python
s = set([1,2,3])
fs = frozenset([1,2,3])
s #=> {1, 2, 3}
fs #=> frozenset({1, 2, 3})
s.add(4)
s #=> {1, 2, 3, 4}
fs.add(4)
fs #=> AttributeError: 'frozenset' object has no attribute 'add'
```

<hr>
34. Update a set to equal the intersection of it and another set

`intersection_update()` updates the first set to be equal to the intersection.

```python
s1 = {1,2,3,4,5}
s2 = {4,5,6,7,8}
s1.intersection_update(s2)
s1
#=> {4, 5}
```

This can also be done with the `&=` operator.

```python
s1 = {1,2,3,4,5}
s2 = {4,5,6,7,8}
s1 &= s2
s1
#=> {4, 5}
```

<hr>
35. Remove the intersection of a 2nd set from the 1st set

`difference_update()` removes the intersection from the first set.

```python
s1 = {1,2,3,4,5}
s2 = {4,5,6,7,8}
s1.difference_update(s2)
s1
#=> {1, 2, 3}
```

The operator `-=` also works.

```python
s1 = {1,2,3,4,5}
s2 = {4,5,6,7,8}
s1 -= s2
s1
#=> {1, 2, 3}
```

<hr>
