---
title: Workflow
type: process
order: 2
---

## Jira

This will be a short run through of the Jira process we adopt. The Wiki contains more extensive details on its use, experience will also help with this.

- All work, however small, is managed via Jira.
- Log all time against tickets - logging time ensures we are putting the effort into the right place
- Keep your ticket status up to date
- It's good etiquette to leave tickets unassigned, and trust it will be picked up by the appropriate person

### Doing Work

1. Start ticket and assign to self (in progress)
2. Ensure you're clear on requirements before starting
3. When [done](/process/definition-of-done.html), place into review, add a link to the PR to be reviewed
4. Before starting your next piece;
    -   Are there any other tickets in review that you can review?
    -   Are there any tickets waiting to be released?

### Reviewing Work

1. Set your name in the reviewer field - this stops anyone reviewing work at the same time as you
2. Perform review, see [Code Reviews](/process/code-reviews.html) for more info.
3. Happy, transition to the next step as is appropriate for the work
3. Not happy? Fail the review, list reasons for failure in ticket comments
 
## Support Queues

There are three support queues at TLA which handle work items in different ways. You will be assigned a queue to work on during planning sessions at the beginning of a sprint. Here we will cover your role within each queue and what the expectations are.

### Support
1. Dealing with [Incidents](/process/incidents.html)
2. [Triaging](/process/triage.html) Tickets
3. Supporting BAU
    - Code Reviews
    - Deployments
    - Work

The support queue is assigned on a fortnightly rota basis. The support queue is front line support for the business and you will be expected to triage incoming work requests via a support Kanban in Jira. The duty support developer works hand-in-hand with the BAU team, and will perform any small or critical bug fixes as they come in.

This is an excellent role for getting to know various aspects of the business, but can sometimes feel a bit like the deep-end! Familiarize yourself with how to deal with [incidents](/process/incidents.html) and how to [triaging](/process/triage.html). The BAU squad is there to help you, so don't be afraid to ask them to do your code reviews. Likewise, the rest of the team will always be available help with incidents.

When the support queue is quiet it's a great time to help the BAU team with code reviews or any work they're struggling to get done. It's also an opportunity to fix them issues that might be niggling you, or to brush up on some learning.

### BAU

- Supports the business in a general capacity
- Will be expected to deliver work to deadlines, with an understanding that these may slip

The BAU team works off a BAU Kanban board, in a top to bottom capacity. That is, tickets at the top of the board are picked up first (regardless of knowledge of skill). The BAU squad is more insulated against changing requirements and tasks then support.

BAU is expected to help support with reviews and in exceptional circumstances will be required to drop work and help with any major incidents whenever support becomes inundated,


### Project

- Delivers features and large pieces of work
- Is solely dedicated to delivering that system or feature

Project teams are usually a two-person team working in timeboxed sprints to deliver work on a road map basis. Project teams are a guaranteed resource to a particular large piece of work and as such are not subject to the change in requirements as support and BAU are.

On a project team you're expected to plan and deliver features within an agreed time box; with the aim that each sprint ending is another useable feature delivered.