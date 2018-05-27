---
title: Code Reviews
type: process
order: 400
---

Code reviews are an important step in our process. They are a two way process, someone can learn something from you or you can learn something from them. The aim of a code review is to:

1. Spot any issues
2. Suggest better approaches

Code reviews are entirely subjective, in opinion and scope. Small changes may just need a look over, big or high risk changes will need a full test and review.

## Submitting Code for Review

When you're happy with your changes, push them to your working branch and create a pull request into the correct branch (dependent on project branching strategy) i.e Develop. Write your changes in a high level fashion in the description.

Your code should be in a high quality before review, is your work [done](/process/definition-of-done.html)?

The code reviewer is not QA, you are. We all make mistakes, that's why we have code reviews - but take pride in your work, aim to deliver high quality.

### Review fails

If your review fails, no worries, not the end of the world! Resolve any comments in the PR, both by fixing the issues (or discussing it) and marking the comment as resolved. Ensure you have fixed (or discussed) any points outlined in the ticket. Push your changes and let your reviewer know, by way of the ticket

## Performing a Review

Code reviews are a discussion. Obviously, if something fails then you can't pass it - but other changes my be more on the fence. Here are some steps you should take to review code in an open friendly manner:

1. Review the code: has it met the ticket requirements, does it work, are there any issues (think: code smells, maintainability, documentation)
2. Walk through the PR with the person (face to face), highlight your issues and maybe slip a compliment!
3. Be clear, write the reasons for failing out in the ticket. If it spans multiple lines of codes, use the PR comments to highlight the problem areas - just ensure a comment in the ticket explains you have added comments to the PR.