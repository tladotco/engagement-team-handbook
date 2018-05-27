---
title: Scripts
type: best-practices
order: 203
---

- Always use [ES6 syntax](https://github.com/lukehoban/es6features) (or latest) JavaScript and run through Babel
- Don't pollute global namespaces
    -  know your [scope](https://github.com/getify/You-Dont-Know-JS/tree/master/scope%20%26%20closures)
    -  see [module pattern](https://addyosmani.com/resources/essentialjsdesignpatterns/book/#modulepatternjavascript)
- Follow best practices of the framework you are using
- Debounce your scroll and resize events
- Try to load scripts via `async` (preferably) or `defer` attributes

## Typescript

<p class="todo">Some stuff about TS here.</p>

## Frameworks

### Vue.js

Vue should be adopted where possible, is planned to replace any JS still using jQuery. Components should be kept as lightweight as possible, heavy work should be moved to services injected in.

For full best practices, you can follow the [Vue.js style Guide](https://vuejs.org/v2/style-guide/).

### jQuery

<p class="tip">Going forwards, this should no longer be used.</p>

Prepend jQuery specific objects with a `$` to identify it as such.