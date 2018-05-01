---
title: Documentation
---

Documentation is really important, we have a lot of systems and a lot of different people with different skills. We love to include documentation as part of a project and subsequently code reviews. To do this we use the README in the root of the document.

This is a great [tool](https://marketplace.visualstudio.com/items?itemName=MadsKristensen.MarkdownEditor) for editing [markdown in Visual Studio](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet). Here is a markdown cheat sheet that should help.

- Markdown should be added to any larger subsystems.
- Keep documentation light - anything off topic or in depth should be kept in the Wiki and linked to.
- Images should be saved in a documentation folder with the markdown. 
- Diagrams should be saved as an image, and the link to edit set as a caption.

## Project README Template

```markdown
# Introduction
[What is this application? Where can you find it running (domain name etc.)?]
 
## Goals
[What does this project set out to achieve, what problem is is solving?]
 
# Support
 
- Support requests are dealt with via [Jira](http://jira.theautonetwork.net/projects/[YOUR_PROJECT_NAME])
- For help you can contact the team working with this application on the relevant Product channel within Microsoft Teams.
- Logs can be found [Location of logs]
- Telemetry for this application is managed via [Application Insights](https://portal.azure.com/#resource/subscriptions/78e49f08-9bdc-4b66-b2f0-8df340ef310d/resourceGroups/TLA-RG-PROD-NE-001/providers/microsoft.insights/components/carkeys/overview).
 
## Common Problems
| Problem        | Solution
| ------------- |:-------------:|
| [Problem]    | [Fix] |
| [Problem]    | [Fix] |
 
# Architecture
## Project Overview
[List the the repos that are part of this project]
 * [Project Source](http://tfs.theautonetwork.net:8080/tfs/DefaultCollection/)
### General
[Write general notes here. Does this system do anything unique or different? Keep it light, anything in-depth or diagrams which aren't summarizing should be linked too within the wiki.]
 
###  Pages/Sections (of UI accessible places)
[List of accessible place within the application]
| Name | URL |
| ----- | ---- |
| Example | example/`parameter` |
 
### Dependencies
[Add stuff dependent on this project, and  stuff this project is dependent on]
 
## Infrastructure
[General Notes]
[Infrastructure diagram or list of systems such as:
* Azure Web Apps
* VMs
* SQL Servers
* Redis
* Storage Accounts
* CDN
* Document DB
etc..]
# API References
[Prefer link to Swagger or]
 
## API Name
 
GET : `url/to/your/call`
[Sample request]

# Workflow, Build & Tests
## Workflow
[What source control work flow does this project use?]
## Builds
[General description, anything non-standard?]
* E.g **Feature CI** - Builds and tests feature branches
* E.g **Master CI** - Builds and tests feature branches, releases to dev.
 
## Tests
[General description, any expected code coverage? Do you use SonarQube?]
### Test Plan
[Either link to test plan in Wiki or complete table]
 
| Test Name | Steps | Expected |
| ------------- |------------- | -------------|
| [Name]    | [Steps] | [Outcome] |
| [Name]    | [Steps] | [Outcome] |
 
# Release
## Overview
[General description, how do you manage versioning?]
* [Octopus Deploy](link) / [TFS](Link)
### [Environment Name]
1. [Add steps to release, include setting version number, updating Jira release, what stakeholders to notify (try to use job titles)?, do you run your test plan? For which release types (patch, minor, major)?]
 
## Release History
[Either link to Jira release notes, or list here.]
 
# Local Environment
## System Requirements
* [Software requirements]
*
## How To
1. [Steps to set up local environment]

````

## Wiki

- Other