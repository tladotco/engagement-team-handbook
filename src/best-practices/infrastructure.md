---
title: Infrastructure
type: best-practices
order: 300
---

### Azure Web App

- Resource group set up for environnement, `tla-appname-environment` and all resources below added to this resource group (where possible)
- Application insights account created
- App created in above resource group, `tla-appname` with optional `-type` if required.
    - (Optional) custom domain created and set
    - SSL set
    - Always on
    - PHP turned off
    - Application insights installed on web app
    - Staging slot cloned
- (Optional) Blob storage account created
- CDN end point for App & (optionally) storage account
- (Optional) Azure PaaS database created