---
title: Incident Response
---

No one likes incidents, but the key thing is the *keep calm*. Follow these general steps:

1. Preliminary investigation, identify the level of incident:

# P1

2. Create a ticket, and an incident channel in Slack, invite all relevant parties (stakeholder, product owner, senior devs)
3. Send someone to notify stakeholder (just in case they aren't on Slack)
4. Begin formal debugging of issues
    - Check infrastructure (Azure, new relic); things like SQL, Web Apps 
    - Check application insights
    - Check logs
5. Log investigations and discoveries via Slack/Ticket

# P2

2. Debug issue to find cause
3. Create ticket with finding and notify tech product owner

# Other

2. Same as above, no need to notify product tech owner

The aim of the above is to ensure everyone who needs to make informed decisions can make them. The longer communication is left, the worse things can get. Logging the steps you have taken means even if a hotfix is applied, we can still walk through the steps at a later date and ensure we can either apply a better fix based on this information or, clean up any failed attempts to fix something.