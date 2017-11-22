---
title: Back End
---

- Follow Microsoft coding conventions, we use StyleCop to assist with this
- (Going forwards) SonarQube is used in builds to identify Bugs & Code Smells. SonarQube quality gates ensure code can only get better!
    - [SonarQube lint](https://marketplace.visualstudio.com/items?itemName=SonarSource.SonarLintforVisualStudio2017) extension for Visual Studio
- Try to follow [SOLID](https://scotch.io/bar-talk/s-o-l-i-d-the-first-five-principles-of-object-oriented-design) principles. Importantly:
    - Use IoC
    - Single responsibility is important - use layers: service, data etc.

## MVC

- Keep views and controllers light, if it's not it needs a service
- ViewModels over ViewBag

## Umbraco

- Prefer strongly typed models
- When using models builder, use the API version

## RESTful APIs

We follow Microsoft [RESTful API Guidelines](https://github.com/Microsoft/api-guidelines/blob/master/Guidelines.md), for full best practices see our [guide](http://wiki.theautonetwork.net/display/DT/RESTful+API) in the Wiki.