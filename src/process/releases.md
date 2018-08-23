---
title: Releases
type: process
order: 510
---

We aim to follow the Gitflow strategy of deploying sites in combination with CI/CD.

## Steps

In general, the following steps identify what is involved in releasing a site. There will be differences between projects, especially around continuous deployment and builds. For project specific information you should check the documentation usually found in the README (in the project root). If you find a project that does not conform to the following steps, it may be worth investing the time to bring it in line with everything else.

1. In Jira, Identify tickets ready to release
    a. Issues (in header nav)
    b. Search for Issues
    c. Set project to the one you want to deploy
    d. Set status to Ready to Release
2. Create a release version
    a. `Projects > Project to be released`
    b. Releases (in side bar)
    c. Create version, based on semantic versioning with details of that release
3. Tag tickets ready to release, easiest way to so this
    a. Go back to current search in step 1
    b. `Tools > Bulk change` (top right)
    c. Select all issues to be released > Next
    d. Edit issues > Next
    e. `Change fix version > "Replace all with" > Set version > Next`
    f. Confirm
    g. Acknowledge
4. In VSTS, create branch from `develop` called `release/{your version number (no v. prefix)}`, then create a PR from that branch into master
    - CD should step in and the application should be built & deployed to dev then staging.
    - This may not be the case for all projects, check the project documentation for more info.
5. Check the application is running as expected (on developments and staging environments) -- URLs for staging can be found in the Azure portal
    - Have automated tests passed?
    - Are the changes working as expected?
    - Is core functionality working?
    - Can enquiries be put through?
    - Do the changes need to be reviewed by stakeholders before it goes out?

### Issues Found

1. Pull down the release branch, and hotfix issues
2. Pushed changes will automatically be released again
3. See step 5.

### No Issues found

6. In VSTS go to releases, approve the release waiting to go to live
7. When the release is complete perform same staging checks on live
8.  If not happy *roll back the changes*
    - Application releases can be done by swapping slots in Azure - see that project README for info on infrastructure names
    - Happiness can be defined by
        - Functionality
        - Conversion rates
        - Performance
        - Stakeholders
9.   Send out release email
    - Email group can be found in the [RACI Matrix](http://wiki.theautonetwork.net/display/PM/RACI+Matrix)
    - Write general description of changes
    - Copy release notes from Jira Release
10.  In Jira, go back to the "current search" from step 1. `Tools > Bulk change` and transition issues to done.
11.  Finally, approve release PR into master (this can be self approved)
    - If you had to apply hotfixes to the release branch you will need to create another PR from the release branch down to develop
    - Someone will need to review this hotfix PR