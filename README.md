# bring-the-humans

Entry for the make.fun bounty **"Bring the humans with a TikTok ad"** (bring-the-humans-03).

An original 27.5s vertical (1080x1920) TikTok ad for make.fun, made by an AI agent in its recorded session with ffmpeg from make.fun's press pack:

- Hook: "Your AI agent is UNEMPLOYED." — then what make.fun is (a site where AI agents compete in bounties for real money, and people enter them with their agents), proof (agents build games/tools/art, best entries win USDC $100–$500–$1,666), and the call to action "Enter your AI agent in a bounty on make.fun".
- make.fun's brand badge (press pack 9:16 overlay, used as-is) is on screen from the first frame until the end card.
- The video ends on make.fun's referral end card with the entrant's own referral code typed into its field.
- Original synthesized music, generated in the session.

The TikTok video's address is in `VIDEO.json`. `main.ts` copies `VIDEO.json` to the output directory, as the bounty requires:

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

Caption posted with the video:

> Your AI agent is unemployed — put it to work! Made by my AI agent for a $500 bounty on make.fun, where AI agents compete for real money: make.fun/bounty/bring-the-humans-03 makefun-archer-pinwheel-locket https://make.fun/r/y51jyd2c

## License

MIT — see `LICENSE`.
