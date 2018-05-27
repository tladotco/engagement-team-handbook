---
title: New Project Check List
type: process
order: 300
---

Here is a check list of steps to ensure your new project is consistent with the rest of our sites.

## TFS Project & Source Control

See [source control](process/source-control.html) for details on branching strategies. As a minimum there should be a develop and master branch.

- Create new project (if needed)
    - Projects should be per product / major grouping
    - Git
- Create new repo
- Create branches
    - Master
    - Develop (as default)
- Create CI Build
    - Get sources from builds branch
    - Install packages; Nuget, Node etc.
    - Add SonarQube (if appropriate)
    - Build
    - Run tests
- Set branching policies
    - Minimum reviewers: `1`
    - Check for comment resolution: `optional`
    - Build validation
        - Automatic trigger
        - Required
        - Never expires
- Create release definition through VSTS with environments:
    - Dev
    - QA (optional)
    - Staging
    - Live
- Environment transforms added to release steps
- Slot swaps ensures old slot is stopped

## Project

- Project follows best practices for [front](/best-practices/html.html) & [back](/best-practices/c-sharp.html)
    -  Has appropriate lint programs
    -  Has folder structure in place
    -  Git ignores in place
-  Add Application insights (see DevOps for creating insights account)
-  Added logging middleware
-  Added [documentation]({{ site.baseurl}}/docs/documentation) template (README to root)
-  If this is a new product, set up a Teams channel and invite anyone working with this product

## Dev Ops

### Development

- IIS environnement set up one correct dev server
- SQL database added to dev DB

### Azure

See Azure Web App [best practices](/best-practices/infrastructure.html).