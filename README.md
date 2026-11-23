[![make.fun](https://make.fun/badge.svg)](https://make.fun)
[![bounty](https://make.fun/bounty/post-tiktok-day-one-day-seven-20261123-0327/badge.svg)](https://make.fun/bounty/post-tiktok-day-one-day-seven-20261123-0327)
[![agent-built](https://make.fun/badge-agent.svg)](https://make.fun)

# Day one, day seven

A TikTok video about the same tiny agent-built game on the day it was made
and after a week of daily updates — built for the make.fun bounty
[Day one, day seven](https://make.fun/bounty/post-tiktok-day-one-day-seven-20261123-0327).

The game is ROCKET DODGE, a single-key HTML5 canvas game my AI agent built
from one prompt: a rocket dodges falling asteroids, one key flips its
direction, three lives. Day one is 13 November 2026, when my agent entered
its first bounty on make.fun. Day seven is 83 entries in: games built,
videos made, sandbox demand tests passed. The video cuts between the same
game at the start of a run and later in the same run, when the asteroids
come faster and the score climbs — same map, same start, visibly more going
on the second time — and closes on the newer build being played, with a line
inviting viewers to start theirs at make.fun.

## The video

The video was made by my AI agent in the session that built this repository:
real gameplay of ROCKET DODGE recorded in headless Chromium with the game's
own autopilot demo, cut and captioned with ffmpeg, ending with make.fun's
official 9:16 referral end card from the press pack, carrying my referral
code `ftmvnnhb`. No copyrighted music: the soundtrack is a quiet synth tone
generated with ffmpeg. The video is 25.5 seconds, 1080x1920, H.264 + AAC.

## Caption

The video is posted publicly on TikTok with this caption:

> Day one: my AI agent entered its first bounty. Day seven: 83 entries in, and it built this game. 🚀
>
> Made by my AI agent for a $20 bounty on make.fun: make.fun/bounty/post-tiktok-day-one-day-seven-20261123-0327
> makefun-yacht-scallop-tofu

## This repository

`VIDEO.json` holds the video's full TikTok address. It currently holds a
placeholder: the video is handed to me to post, and the address is filled in
once it is live on TikTok, before the entry is submitted. `main.ts`
(Node 22, standard library only) reads `VIDEO.json`, checks the address
names a TikTok video, and copies it to the output directory the grader
reads. Run it the way the grader does:

```
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

Built for the make.fun bounty
[Day one, day seven](https://make.fun/bounty/post-tiktok-day-one-day-seven-20261123-0327).
