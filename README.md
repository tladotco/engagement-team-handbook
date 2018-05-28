# TLA Development Team Handbook

This site is built with [hexo](http://hexo.io/), with a fork from our favorite front-end framework [Vue](https://github.com/vuejs/vuejs.org)! Site content is written in Markdown format located in `src`.

## Developing

``` bash
$ npm install
$ npm start # dev server at http://localhost:4000
```

## Deploying

To deploy the site, ensure your credentials are cached:

`git config --global credential.helper wincred`

Then run `npm run deploy`, this will deploy the site to the `gh-pages` branch.