---
title: Clean Code
type: best-practices
order: 50
---


We should aim to write clean code ay all times. This ensure that code will (hopefully) remain consistently maintainable over time, rather than succumbing to _code rot_. Many of the principles adhered to here come from [Clean Code](https://github.com/josecarloscanova/books/blob/master/%5BPROGRAMMING%5D%5BClean%20Code%20by%20Robert%20C%20Martin%5D.pdf) as written by Robert C. Martin.

In summary, we have ten tips to follow taken from this [video](https://www.youtube.com/watch?v=UjhX2sVf0eg).

## 10 Tips

### 1. You're responsible for code quality
No one else is responsible the cod you write. Adhering to clean code principles makes like easier for you later.
### 2. Use meaningful names
Over time, more variables means more complexity. You shouldn't need to dig through code to understand what that variable does.
### 3. Write code that expresses intent
Break code up into small, well named functions expresses what you're trying to do.
### 4. Code should speak for itself
Comments can be good, but they can often be misleading. Well written code, should explain itself. A comment will become dated, code won't.
### 5. Leave the code better than you found it
Following clean code doesn't mean refactoring the whole application. When you work on a file, and spot something which could be better, fix it.
### 6. Single-responsibility code
i.e function does 1 thing well. Less arguments = better function.
classes: most methods use most of the class' properties.
### 7. Tests
Unit tests give the freedom for everyone to change code and make it better without the worry of something breaking. You should always write unit tests. If it's hard to mock something, or test something, more often than not - your code is the issue. Try breaking it up and abstracting logic. 
### 8. Work on big picture skeleton, then fill in the details later 
Interface first, implementation later.
### 9. Independent components that can be used in different places
Frameworks are a tool to be used, not a system to be conformed too. That is, when building components, versatility should be accounted for. Could the code I'm writing be used elsewhere?
### 10. Master your craft.
Practice make perfect!