# Infrastructure Plan: Production Deployment

## Deployment Target
- **Platform:** GitHub Pages
- **URL:** https://owaismukhtarkhan.github.io/robotics-ai-book/
- **Automation:** GitHub Actions (.github/workflows/deploy.yml)

## Configuration
- **Docusaurus Config:** Updated with `organizationName`, `projectName`, `url`, `baseUrl`, and `trailingSlash: false`.
- **Pages Source:** `GitHub Actions` (Set in Settings > Pages).

## Maintenance
- Deploys automatically on every push/merge to `main`.
- Site build takes ~3-5 minutes.
