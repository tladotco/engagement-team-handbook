---
title: Front End
---
## Markup

- Always use the correct semantics, always use HTML5
    - Remember your form attributes
    - There is a _lot_ of elements to use - [cheatsheet](https://www.wpkube.com/wp-content/uploads/2017/09/html-chatsheet.pdf).
- Avoid using `H1` elements more than once on a page
- Avoid viewport specific markup

## Scripts

- Always use ES6 (or latest) JavaScript and run through Babel
- Prefix your framework specific variables (in mixed framework projects), e.g `$mySelector` for jQuery
- Don't pollute global namespaces
    -  know your [scope](https://github.com/getify/You-Dont-Know-JS/tree/master/scope%20%26%20closures)
    -  see [module pattern](https://addyosmani.com/resources/essentialjsdesignpatterns/book/#modulepatternjavascript)
- Follow best practices of the framework you are using
- Debounce your scroll and resize events
- Try to load scripts via `async` (preferably) or `defer` attributes

## Styles

- Use SASS in combination with BEM naming conventions.  

  
```css
.block { 
    &__element
    {
        &--modifier {
            ...
        }
    }
} 
```
    - In addition to this, if you need to share the same block/element name across other states you can use this little trick: 
  
```css
$block: 'block';

.#{$block}
{
    &__element {
      ...
    }

    &--modifier {
        #{$block}__element {
            ...
        }
    }
}
```
- Use [company SASS lint rules](/assets/tla-sass-lint-config.json) to lint your SASS
    -  Never ignore lint warnings without a comment explaining why
- Use CSS3 for transitions, animations or changes to presentation - not JS
- Use the [ITCSS](https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture) folder structure

## Node & Gulp

- Follow the standard gulp workflow for processing assets, ensuring your public folder is *ignored* from source control ![Gulp work flow. Source folder is processed by Gulp, and put into a public folder at build time]({{ site.baseurl}}/image/gulp-workflow.png)
- Save dependencies correctly (dependent on project/framework): `--save-dev` over `--save`
- Minify assets and apply source mappings
- Use the [`gulp-load-plugins`](https://www.npmjs.com/package/gulp-load-plugins) package to automatically load gulp packages without the need for requiring every one