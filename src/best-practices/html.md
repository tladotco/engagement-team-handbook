---
title: Markup
type: best-practices
order: 200
---

### Standard Document Structure

``` html
<html>
    <head lang="en-GB">
        <meta charset="utf-8" />
        <meta content="IE=edge,chrome=1" http-equiv="X-UA-Compatible" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <link rel="stylesheet" href="boss.css">
        <!-- Scripts can go in the head if you use the async or defer attributes. -->
        <script defer scr="my-amazing-script.js"></script>
    </head>
    ...
</html>
```

### Semantics

Always use the correct semantics, always use HTML5. There is a _lot_ of elements to use, checkout this [cheatsheet](https://www.wpkube.com/wp-content/uploads/2017/09/html-chatsheet.pdf). Some often forgotten ones:
- `article`
- `main`
- `aside`

### Form Attributes

Don't forget [form attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form) or your [input attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input). Some forgotton ones:

- `autocomplete`
- HTML 5 validation: `min`, `max`, `required`

## SEO

SEO considerations are important when creating any public facing site. 

- Avoid using `h1` elements more than once on a page
    - If you have to have more than one, stress the page title with a `strong` tag inside your `h1`

### No Duplicate Content

Nine times out of ten there is a way to use CSS to make content viewport specific. There is no need to duplicate markup then show and hide things with CSS. Always remember mobile first. Once you get it looking right on mobile, styles can be applied to get the same markup looking right for desktop.

### Meta Data

The page head tag should contain various meta data about the page for crawlers and social media sites. Here is a rough list:
 - Title
 - Description
 - Cannonical URL
 - [Open Graph](https://developers.facebook.com/docs/sharing/opengraph)
 - [Twitter Cards](https://developer.twitter.com/en/docs/tweets/optimize-with-cards/guides/getting-started.html)
 - [Open Schema](http://schema.org/) (prefer JSON LD format)

Below is a full example from Car Keys:

``` html
<head>
    <!-- Standard -->
    <title>Mini John Cooper Works Challenge review - Car Keys</title>
    <meta name="description" content="This is Mini’s most track-focused car and with the brand’s racing heritage, this should be an absolute riot. But how does it perform on the open road?">
    <link href="https://www.carkeys.co.uk/car-reviews/2018-mini-john-cooper-works-challenge-review" rel="canonical">
    <meta name="robots" content="index, follow">
    <!-- Open Graph -->
    <meta property="og:description" content="This is Mini’s most track-focused car and with the brand’s racing heritage, this should be an absolute riot. But how does it perform on the open road?" />
    <meta property="og:title" content="Mini John Cooper Works Challenge review - Car Keys" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://www.carkeys.co.uk/car-reviews/2018-mini-john-cooper-works-challenge-review" />
    <meta property="og:image" content="https://www.carkeys.co.uk/media/20765/p90222755_highres_mini-john-cooper-wor.jpg?center=0.5708333333333333,0.56944444444444442&amp;mode=crop&amp;width=1200&amp;height=800&amp;rnd=131716500260000000" />
    <meta property="og:determiner" content="" />
    <meta property="og:locale" content="en_GB" />
    <meta property="og:site_name" content="Car Keys" />
    <!-- Twitter -->
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:site" content=@CarKeys_UK />
    <meta name="twitter:creator" content="" />
    <!-- Schema -->
    <script type="application/ld+json">{"@context":"http://schema.org","@type":"Review","reviewRating":{"@type":"Rating","bestRating":5.0,"ratingValue":4.0,"worstRating":0.5},"author":{"@type":"Person","name":"Jack Healy"},"dateModified":"2018-05-24T15:40:26+00:00","datePublished":"2018-05-24T14:54:32+00:00","headline":"2018 Mini John Cooper Works Challenge review","inLanguage":"en-GB","publisher":{"@type":"Organization","logo":"https://www.carkeys.co.uk/media/19623/cklogo.jpg?mode=max&rnd=131667155520000000","email":"enquiries@carkeys.co.uk","telephone":"08444457863","address":{"@type":"PostalAddress","streetAddress":"CarKeys.co.uk Enquiries, Floor 13, 20 Chapel Street","addressLocality":"Unity Building","addressRegion":"Liverpool","postalCode":"L3 9AG","addressCountry":"GB"},"name":"Car Keys","url":"https://www.carkeys.co.uk","sameAs":["https://www.facebook.com/CarKeysGB","https://twitter.com/CarKeys_UK","https://instagram.com/carkeys_uk","https://www.youtube.com/user/MotorTorqueUK"]},"image":{"@type":"ImageObject","url":"https://www.carkeys.co.uk/media/20765/p90222755_highres_mini-john-cooper-wor.jpg?center=0.5708333333333333,0.56944444444444442&mode=crop&width=1200&height=800&rnd=131716500260000000"},"description":"This is Mini’s most track-focused car yet and with the brand’s racing heritage, this should be an absolute riot. But how does it perform on the open road?"}</script>
</head>
```

### Links

Use `rel="noopener"` on external links.

Avoid wrapping non-text objects within links. Having just text in a link is semantically correct, and better for SEO.

``` html
<!-- BAD -->
<a href="/saucy">
    <img src="saucy.jpg" />
    <h2>This looks amazing</h2>
</a>
```

``` html
<!-- GOOD -->
<article>
    <img src="saucy.jpg" />
    <h2><a class="link" src="/saucy">This looks amazing</a></h2>
</article>
```

To keep the UX feel whilst retaining SEO perfection, you can set a `::before` or `::after` pseudo on the link and "overlay" a link touch point with the following CSS:

``` css
.link {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    z-index: 1;
    content: '';
}
```

 ### Favicons

 You can generate all favocons and code from [here](https://realfavicongenerator.net).