---
title: Greenfield Project Check List
---

Here is a check list of steps to ensure your new project is consistent with the rest of our sites.

## TFS Project & Source Control

See [source control]({{ site.baseurl}}/docs/source-control) for details on branching strategies. As a minimum there should be a develop and master branch which trigger builds

![Gitflow and build triggers as used by TLA]({{ site.baseurl}}/image/tla-gitflow.svg)

- Create new project (if needed)
    - Projects should be per product / major grouping
    - Git
- Create new repo
- Create branches
    - Master
    - Develop (as default)
- Set branching policies
    - Minimum reviewers: `1`
    - Check for comment resolution: `optional`
    - Enforce merge strategy: `Squash merge`
    - Build validation for previous branch build - i.e. Develop will use Feature Build CI
        - Automatic trigger
        - Required
        - Never expires
- Create builds, each build _builds_ on the previous
    - Feature Branch Build CI
        - Get sources from builds branch
        - Install packages; Nuget, Node etc.
        - Add SonarQube (if appropriate)
        - Build
        - Run tests
    - Develop Branch Build CI
        - Smoke Tests (ping URLs for success etc)
        - Publish artefact for dev
    - Master/Release Branch CI Build
        - Extensive testing (Load testing, UI testing)
        - Optionally version with [SemVar](https://semver.org/) and tag Git Branch
- Create release definition through TFS
    - Dev
    - QA (optional)
    - Staging
    - Live
- Environment transforms added to release steps
- Slot swaps ensures old slot is stopped

## Project

- Project follows best practices for [front]({{ site.baseurl}}/docs/front-end-best-practices) & [back]({{ site.baseurl}}/docs/front-end-best-practices)
    -  Has appropriate lint programs
    -  Has folder structure in place
    -  Git ignores in place
-  Add Application insights (see DevOps for creating insights account)
-  Added logging middleware
-  Added [documentation]({{ site.baseurl}}/docs/documentation) template (README to root)

## Dev Ops

### Development

- IIS environnement set up one correct dev server
- SQL database added to dev DB

### Azure

- Resource group set up for environnement, `tla-appname-environment` and all resources below added to this resource group (where possible)
- Application insights account created
- App created in above resource group, `tla-appname` with optional `-type` if required. `EXT001` is the normal service plan to use.
    - (Optional) custom domain created and set
    - SSL set
    - Always on
    - PHP turned off
    - Application insights installed on web app
    - Staging slot cloned
- (Optional) Blob storage account created
- CDN end point for App & (optionally) storage account
- (Optional) Azure PaaS database created