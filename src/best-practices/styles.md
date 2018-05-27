---
title: Styles
type: best-practices
order: 205
---

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

In addition to this, if you need to share the same block/element name across other states you can use this little trick: 
  
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