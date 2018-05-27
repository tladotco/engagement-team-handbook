---
title: Builds
type: best-practices
order: 300
---

## In General

- One build per project
- Always use continuous integration (CI)
- Where possible, keep environment config away from build config

### CI

Every project should have a single build pipeline triggered by a change in source control to a branch (any branch).

### One build

 There should no longer be a concept of a feature build and a master build anymore. The reason being is, if something new in the next build causes the build to break - how do we deal with that? The master branch could have triggered that build, by which point: code has been approved. To avoid this happening, we have one build to rule them all. If it fails after a change to a feature branch, if can't get past a code review and we know it's going to be the same behavior everywhere else.

### Environment vs Build

There needs to be a clear distinction between build variables & environment variables. This distinction isn't helped by ASP.NET's ubiquitous `web.config`. So how do we define the two?

Generally, it's going to be an environment variable. This includes all app settings and connection strings:

``` xml
<configuration>
    <appSettings>
        <add key="this-is-an-environment-var" value="Hello" />
    </appSettings>
    <connectionStrings configSource="connectionString.config" />
</configuration>
```
The config in the above is special as it can easily be changed in the deployment phase. VSTS will match VSTS variables to the keys in your config automatically.

If you need to do something outside of the above, then this will likely need to be done in the build. This has major downsides as it is a lot more complicated, so bear that in a mind.

## Front End

### Webpack

### Gulp

<p class="tip">We're beginning to drop Gulp in favour of Webpack</p>