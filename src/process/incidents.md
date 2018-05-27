---
title: Incidents
type: process
order: 700
---

No one likes incidents, but the key thing is the *keep calm*. Follow these general steps:

1. Preliminary investigation, identify the level of incident
2. Create a JIRA ticket for the affected product/vertical with identified priority.
    - If you're not on support, notify the person who is and decide who will deal with the incident

## P1

<p class="tip">A P1 is a business critical issue is either:
        - Something causing us to no longer be legally compliant
        - Impacting revenue</p>

3. Notify the Teams channel: Alerts > Business Critical
4. Notify key stakeholders (just in case they aren't on Teams), if you're not sure see the RACI Matrix.
5. Begin formal debugging of issues
    - Check infrastructure (Azure, new relic); things like SQL, Web Apps 
    - Check application insights
    - Check logs
6. Log investigations and discoveries via Teams/Ticket
    - If you're swamped dealing with the issue - assign someone on the team so act as your liaiser

## P2

2. Debug issue to find cause
3. Create ticket with findings and notify tech product owner

## Other

2. Same as above, no need to notify product tech owner

The aim of the above is to ensure everyone who needs to make informed decisions can make them. The longer communication is left, the worse things can get. Logging the steps you have taken means even if a hotfix is applied, we can still walk through the steps at a later date and ensure we can either apply a better fix based on this information or, clean up any failed attempts to fix something.