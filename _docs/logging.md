---
title: Logging
---

This is an area we are actively working on. All of our systems are required to log events, so any issues can be debugged _somewhere_. That somewhere is the issue, and we are going to attempt to solve it with centralised logging - watch this space.

All of our sites record telemetry to Application Insights each of which can be found via the Azure portal. Our infrastructure uses [new relic](https://rpm.newrelic.com/api/v1/partners/800/sso?token=gsepDnjnPLsGAAPbseTIfnVVoShEUPgZcSkWmOE&timestamp=1511448634&subscription_id=78e49f08-9bdc-4b66-b2f0-8df340ef310d&resource_name=TheLeadAgency).

As a general guide, Umbraco & Orchard log all their events to their `app_data` folder via Log4Net.