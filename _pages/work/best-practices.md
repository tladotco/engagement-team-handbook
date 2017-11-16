---
title: Best Practices
layout: master
---

We work across a lot of different systems and technologies, so it's important we follow industry best practices that have been tinkered to work within our team. It makes us better developers and more importantly encourages consistency across projects. Every effort should be made to automate this where possible, this is why we use linters to spy out issues before they even get committed.

This list isn't exhaustive, and it isn't final. The important thing is that these are reviewed and agreed as a team.

In general:

> Prefer readability and maintainability over performance

We can always optimise later!

## Front End

### Markup

- Always use the correct semantics, always use HTML5.
    - Remember your form attributes
    - There is a _lot_ of elements to use - [cheetsheet](https://www.wpkube.com/wp-content/uploads/2017/09/html-chatsheet.pdf).
- Avoid using `H1` elements more than once on a page
- Avoid viewport specific markup

### Scripts

- Always use ES6 (or latest) JavaScript and run through Babel
- Prefix your framework specific variables (in mixed framework projects), e.g `$mySelector` for jQuery
- Don't pollute global namespaces
    -  know your variable scope
    -  see [module pattern](https://addyosmani.com/resources/essentialjsdesignpatterns/book/#modulepatternjavascript)
- Follow best practices of the framework you are using
- Debounce your scroll and resize events
- Try to load scripts via `async` (preferably) or `defer` attributes

### Styles

- Use SASS in combination with BEM naming conventions. 
- Use [company SASS lint rules](/assets/tla-sass-lint-config.json) to lint your SASS
    -  Never ignore lint warnings without a comment explaining why
- Use CSS3 for transitions, animations or changes to presentation - not JS
- Use the [ITCSS](https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture) folder structure

### Node & Gulp

- Follow the standard gulp workflow for processing assets, ensuring your public folder is *ignored* from source control ![Gulp work flow. Source folder is processed by Gulp, and put into a public folder at build time](/image/gulp-workflow.png)
- Save dependencies correctly (dependent on project/framework): `--save-dev` over `--save`
- Minify assets and apply source mappings
- Use the [`gulp-load-plugins`](https://www.npmjs.com/package/gulp-load-plugins) package to automatically load gulp packages without the need for requiring every one


## Server Side

- Follow Microsoft coding conventions, we use StyleCop to assist with this
- (Going forwards) SonarQube is used in builds to identify Bugs & Code Smells. SonarQube quality gates ensure code can only get better!
    - [SonarQube lint](https://marketplace.visualstudio.com/items?itemName=SonarSource.SonarLintforVisualStudio2017) extension for Visual Studio
- Try to follow [SOLID](https://scotch.io/bar-talk/s-o-l-i-d-the-first-five-principles-of-object-oriented-design) principles. Importantly:
    - Use IoC
    - Single responsibility is important - use layers: service, data etc.

### MVC

- Keep views and controllers light, if it's not it needs a service
- ViewModels over ViewBag

### Umbraco

- Prefer strongly typed models
- When using models builder, use the API version

### RESTful APIs

We follow Microsoft [RESTful API Guidelines](https://github.com/Microsoft/api-guidelines/blob/master/Guidelines.md), for full best practices see our [guide](http://wiki.theautonetwork.net/display/DT/RESTful+API) in the Wiki.