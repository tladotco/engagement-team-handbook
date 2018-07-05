---
title: Releases
type: process
order: 510
---

We aim to follow the Gitflow strategy of deploying sites in combination with CI/CD.

## Steps

To deploy a site of system, you can roughly follow these steps:

1. In Jira, Identify tickets ready to release
    a. Issues
    b. Search for Issues
    c. Set project to the one you want to deploy
    d. Set status to Ready to Release
2. Create a release version
    a. Projects > Project to be released
    b. Releases (in side bar)
    c. Create version, based on semantic versioning with details of that release
3. Tag tickets ready to release, easiest way to so this
    a. Go back to current search in step 1
    b. Tools > Bulk change (top right)
    c. Select all issues to be released > Next
    d. Edit issues > Next
    e. Change fix version > "replace all with" > set version > next
    f. Confirm
4. In VSTS, create branch from `develop` called `release/{your version number (no v. prefix)}`
    - CD should step in and the application should be built & deployed to dev then staging.
5. Check the application is running as expected
    - Are the changes working as expected?
    - Is core functionality working?
    - Can enquiries be put through?
    - Do the changes need to be reviewed by stakeholders before it goes out?

### Issues Found

6. Pull down the release branch, and hotfix issues
7. Pushed changes will automatically be released again
8. See step 5.

### No Issues found

6. In VSTS go to releases, approve the release waiting to go to live
7. Create a PR from release branch into master
    - Any hotfixes o release branch will need another PR from release branch to develop
8. When release is complete perform same staging checks on live
9.  If not happy *roll back the changes*
    - Application releases can be done by swapping slots in Azure - see that projects README for info on infrastructure names.
10.  Send out release email
    - Email group can be found in the [RACI Matrix](http://wiki.theautonetwork.net/display/PM/RACI+Matrix)
    - Write general description of changes
    - Copy release notes from Jira Release
11.  In Jira, go back to the "current search" from step 1. Bulk change and transition issues to done.
12.  Finally, approve release PR into master, someone will need to review a hotfix PR (if there is one) into master before this happens


