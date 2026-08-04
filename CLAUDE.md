@AGENTS.md

# Git Author Email — CRITICAL

**Only use `shanupraveen1993@gmail.com` or `shanupraveen6@gmail.com` for ALL commits.**

Any other email (e.g. `ankitajoshi@nextaso.com`) causes Vercel to BLOCK deployments.

Before committing, verify: `git config user.email` must return one of the two approved emails.
If wrong, fix with: `git config user.email shanupraveen1993@gmail.com`

When spawning subagents that make commits, pass `--author="Praveen S <shanupraveen1993@gmail.com>"` explicitly.

# This repo = dark UX portfolio = praveen-resume.vercel.app ONLY

This is the ONLY repo that deploys to `praveen-resume.vercel.app`.
The repo at `/home/coder/Praveen/demo/` is the TripAI Vite app — it must NEVER deploy here.

Deploy command (always run from this directory):
```bash
vercel deploy --prod --scope team_04SZbLCeaQ1IHY2Jf8P8aWf0
vercel alias set <new-url> praveen-resume.vercel.app --scope team_04SZbLCeaQ1IHY2Jf8P8aWf0
vercel alias set <new-url> praveen-resume-shanupraveen1993-2166s-projects.vercel.app --scope team_04SZbLCeaQ1IHY2Jf8P8aWf0
```
Never alias to `portfolio-ai-india.vercel.app` or `tripai-thanjavur.vercel.app`.
