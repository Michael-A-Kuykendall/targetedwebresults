# Formal Complaint: ZIO Bounty System Abuse

**To:** Algora Founders  
**From:** Mike Kuykendall  
**Date:** January 18, 2026  
**Subject:** Systematic Bounty Abuse in ZIO Organization

---

Dear Algora Founders,

I am filing a formal complaint regarding systematic bounty abuse in the ZIO organization, particularly zio-http, where external contributions are displaced and apparently copied by a CODEOWNER (@987Nabil) who self-merges and claims rewards. This appears enabled by leadership (@jdegoes adding bounties to @987Nabil-created issues).

## The Cycle

@987Nabil creates issue → @jdegoes adds bounty → Externals submit work → @987Nabil closes/ignores → Submits his own → Self-merges → Collects bounty. Of 11 sampled, 9 were created by @987Nabil himself and won by him.

## Statistical Evidence

- **Bounties won by @987Nabil:** 36/40 in zio-http (~90%)
- **His ZIO earnings:** $39,650 (38.5% of $103,075 total paid)
- **Bounty creator:** 100% @jdegoes (BDFL)
- **Self-merged:** 100% of wins; his overall rate 90% (vs. peers like #2 Algora earner @neo773 at 2%)
- **External contributors:** 4 sharing 10%
- **CODEOWNER earnings** (@987Nabil + @kyri-petrou): $55,745 (54.1%)

@987Nabil is Algora #1 ($40,050), 99% from ZIO. This concentration with anomalous self-merging isn't organic.

## Documented Cases (5 Bounties, $3,300 Value)

External PRs closed rapidly, @987Nabil submits after (same day to 14 months), self-merges. Examples:

- **#3083 ($2,500):** @Saturn225's 14-month work (43 files, academic citations) closed same day as @987Nabil's 1-file PR (identical test categories; no attribution).
- **#709 ($250):** My PR #3889 + 3 others closed same day as @987Nabil's merge.
- **#3736 ($666):** @ashum9's detailed PR closed in 1 hour 17 minutes (no functional review); @987Nabil merges 3 days later (same concepts).
- **#3711 ($250) & #3688 ($150):** antcybersec's PRs closed same day; @987Nabil merges later.

## Forensic Code Evidence

- **Character-for-character identical fix (#709, Header.scala):** Same regex escape (`/*` to `/\*`) in both PRs (mine Jan 16; his Jan 17).
- **Overlaps in #3083** (test suites), **#3736** (DatastarEvent.scala), **#3711** (stream mapping)—rewritten but derivative.

This suggests copying of external work.

## Retaliation and Communications

Blocked for "CoC violations" after feedback. From #709:

- **Community (Oct 2025):** "Does all zio bounties are reserved to @987Nabil?"
- **@987Nabil (Jan 2026):** Admitted bias, offered off-record "exclusive bounty" via Discord, accused me of "stealing my bounty!!!"

From #3736: @ashum9's PR closed in 1 hour with "not building" (post-closure comment).

Full records in attached report.

## Organizational Structure

@987Nabil (non-org member, CODEOWNER) as primary actor; enabled by @jdegoes (bounty addition, no intervention). Same group handles moderation—no oversight.

## What This Is

Appears as salary laundering: Public bounties attract effort, insiders displace/copy, capture funds. Algora trusts maintainers without checks on self-dealing.

## Required Actions

### Immediate

1. Freeze ZIO payouts
2. Audit all @987Nabil-won bounties (code originality, competing PRs, self-created issues)
3. Refund my $250 (#709 copying)
4. Review self-merger policy

### Systemic Safeguards

1. Concentration alerts (>50% by one user)
2. Self-merge prohibition
3. Timing validation
4. Maintainer disclosure

### Accountability

1. Public statement
2. Notify sponsors (Ziverge, Septimal Mind)
3. Updates to prevent enabled abuse

ZIO is a major customer, but ethically, should platforms enable such patterns?

## Broader Metrics

- **ZIO paid:** $103,075 (437 bounties)
- **Open:** $38,845 (69 issues)

All claims are based on publicly available GitHub and Algora data and can be independently verified.

Additionally, the character-for-character copying of my Header.scala fixes constitutes copyright infringement, which I am documenting with GitHub's copyright team.

**Please investigate immediately.**

---

Best regards,

**Mike Kuykendall**  
michaelallenkuykendall@gmail.com  
GitHub: https://github.com/Michael-A-Kuykendall  
Former U.S. Air Force Staff Sergeant  
Open Source Contributor & Bounty Hunter
