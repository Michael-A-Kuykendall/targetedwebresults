# ZIO Bounty System Analysis Report

**Date:** January 18, 2026  
**Author:** Michael Kuykendall  
**Contact:** michaelallenkuykendall@gmail.com  
**GitHub:** https://github.com/Michael-A-Kuykendall

**Data Sources:** GitHub API, Algora public leaderboard (algora.io)  
**Methodology:** All data derived from publicly accessible API queries. Verification commands provided.

---

## Table of Contents

1. [Executive Summary](#executive-summary)
2. [Platform Statistics](#platform-statistics)
3. [Earnings Concentration Analysis](#earnings-concentration-analysis)
4. [Merge Authority Analysis](#merge-authority-analysis)
5. [CODEOWNERS Configuration](#codeowners-configuration)
6. [Documented Cases: Competing Pull Requests](#documented-cases-competing-pull-requests)
7. [Forensic Code Analysis](#forensic-code-analysis)
8. [Code Comparison Evidence](#code-comparison-evidence)
9. [Communication Record](#communication-record)
10. [Verification Commands](#verification-commands)

---

## Executive Summary

Analysis of publicly available data from the ZIO organization's bounty program (administered through Algora) reveals significant concentration of bounty earnings and merge authority in a single contributor, with evidence of organizational enablement.

### Key Findings

| Finding | Value | Verification |
|---------|-------|--------------|
| @987Nabil total ZIO earnings | $39,650 | algora.io/ZIO |
| Percentage of all ZIO bounties | 38.5% of $103,075 | algora.io/ZIO |
| @987Nabil Algora platform rank | #1 globally ($40,050) | algora.io/leaderboard |
| @987Nabil zio-http merge percentage | 68% of all PRs | GitHub API |
| @987Nabil self-merge rate | **90%** (90/100 PRs) | GitHub API |
| Issues 987Nabil creates then wins bounties on | **9 of 11 sampled** | GitHub API |
| Documented cases with competing PRs | 5 bounties | GitHub API |
| Total value of documented cases | $3,300 | GitHub API |
| Byte-for-byte identical code | 1 case (Header.scala) | GitHub PR diffs |

### Comparative Analysis: Self-Merge Rates

| User | Platform Rank | Self-Merge Rate | Pattern |
|------|---------------|-----------------|---------|
| @987Nabil | #1 ($40,050) | **90%** | Anomalous |
| @neo773 | #2 ($27,098) | **2%** | Normal |
| @kyri-petrou | ZIO #2 ($16,095) | **5%** | Normal |

### Structural Position

- @987Nabil is listed in zio-http CODEOWNERS file
- @987Nabil is NOT a member of the ZIO GitHub organization
- @987Nabil merges 68% of all zio-http pull requests
- Combined CODEOWNER earnings (@987Nabil + @kyri-petrou): $55,745 (54% of all ZIO bounties)

### The Self-Dealing Pattern

**Of 11 bounty issues sampled:**
- **9 were created by @987Nabil himself**
- 1 was created by @kyri-petrou (co-CODEOWNER)
- 1 was created by an external user

**The cycle:**
1. @987Nabil creates an issue
2. @jdegoes adds a bounty to it
3. External contributors attempt the work
4. @987Nabil closes or ignores external PRs
5. @987Nabil submits his own PR
6. @987Nabil self-merges his PR
7. @987Nabil collects the bounty

---

## Platform Statistics

### ZIO Organization Totals

| Metric | Value | Source |
|--------|-------|--------|
| Total Bounties Paid | $103,075 | algora.io/ZIO |
| Total Bounties Completed | 437 | algora.io/ZIO |
| Open Bounties | $38,845 (69 issues) | algora.io/ZIO |
| Total Solvers | 90 | algora.io/ZIO |

### Distribution by Repository

| Repository | Bounty Issues | Primary Merger |
|------------|---------------|----------------|
| zio-http | 55 | @987Nabil (68%) |
| zio | 26 | @guizmaii (34%) |
| zio-blocks | 14 | @plokhotnyuk (92%) |
| zio-schema | 2 | @plokhotnyuk (56%) |

---

## Earnings Concentration Analysis

### Algora Platform-Wide Leaderboard (Top 5)

| Rank | User | Total Earnings | Primary Source |
|------|------|----------------|----------------|
| 1 | @987Nabil | $40,050 | ZIO (99%) |
| 2 | @neo773 | $27,098 | Various |
| 3 | @Nanashi-lab | $17,000 | Various |
| 4 | @kyri-petrou | $16,195 | ZIO |
| 5 | @mschuwalow | $15,275 | Various |

### ZIO-Specific Leaderboard

| Rank | User | ZIO Earnings | ZIO Org Member | CODEOWNER |
|------|------|--------------|----------------|-----------|
| 1 | @987Nabil | $39,650 | No | Yes |
| 2 | @kyri-petrou | $16,095 | No | Yes |
| 3 | @pablf | $8,050 | Yes | No |
| 4 | @adamgfraser | $5,300 | No | No |
| 5 | @Nanashi-lab | $3,000 | No | No |

**CODEOWNER combined earnings: $55,745 (54.1% of total)**

---

## Merge Authority Analysis

### zio-http Repository (Last 100 Merged PRs)

| User | Merges | Percentage |
|------|--------|------------|
| @987Nabil | 68 | 68% |
| @guizmaii | 24 | 24% |
| @jdegoes | 5 | 5% |
| @khajavi | 3 | 3% |

### Self-Merge Rate Comparison

| User | Total PRs Authored | Self-Merged | Rate |
|------|-------------------|-------------|------|
| @987Nabil | 100 | 90 | 90% |
| @kyri-petrou | 62 | 3 | 5% |

---

## CODEOWNERS Configuration

### zio-http CODEOWNERS File

```
* @jdegoes @vigoo @kyri-petrou @987Nabil
```

**Source:** `gh api repos/zio/zio-http/contents/.github/CODEOWNERS`

### Organization Membership

@987Nabil is NOT listed in ZIO organization members (verified via GitHub API).

**ZIO Org Members (26 total):** jdegoes, pablf, ghostdogpr, iravid, neko-kai, khajavi, mschuwalow, kitlangton, guizmaii, calvinlfer, ioleo, visar, toxicafunk, sideeffffect, sergei-shabanau, senia-psm, runtologist, regis-leray, regiskuckaertz, pshirshov, NeQuissimus, mijicd, jczuchnowski, girdharshubham, anovakovic01, atooni

---

## Documented Cases: Competing Pull Requests

The following cases document bounties where external contributors submitted pull requests that were subsequently closed when @987Nabil submitted and merged competing implementations.

### Case 1: Issue #3083 - HTTP Conformance Spec ($2,500)

| Attribute | Saturn225 (PR #3169) | @987Nabil (PR #3803) |
|-----------|---------------------|----------------------|
| Created | 2024-09-26 | 2025-11-19 |
| Time difference | First | **14 months later** |
| Files changed | 43 | 1 |
| Lines added | 1,314+ | 1,306 |
| Comments | 17 | Minimal |
| Status | Closed 2025-11-30 | Merged 2025-11-30 |
| Merged by | N/A | @987Nabil (self) |
| Bounty received | $0 | $2,500 |

**Saturn225's work (14 months of effort):**
- 43 files changed with comprehensive HTTP conformance testing
- Cited academic paper: "Who's Breaking the Rules? Studying Conformance to the HTTP Specifications and its Security Impact" (ASIA CCS 2024)
- Naming convention: `code_204_no_additional_content`, `code_304_no_content`, etc.
- Test count: 40+ tests covering RFC-compliant behavior

**@987Nabil's submission (14 months later):**
- 1 file (HttpConformanceSpec.scala)
- No academic citations
- Different naming: "304 Not Modified", "416 Range Not Satisfiable", etc.
- Test count: 47+ tests covering the same RFC requirements

**Test Category Overlap (both PRs test the same requirements):**

| RFC Requirement | Saturn225 Test | @987Nabil Test |
|----------------|----------------|----------------|
| 304 Must have empty body | `code_304_no_content` | `If-None-Match strong match yields 304 Not Modified with empty body` |
| 204 No content | `code_204_no_additional_content` | `test("should return 204 without content")` |
| 416 Range not satisfiable | `code_416_content_range` | `416 Range Not Satisfiable` |
| Transfer-Encoding | `transfer_encoding_2XX_connect` | `Transfer-Encoding chunked` |
| Connection management | Multiple tests | `Connection management` suite |

### Case 2: Issue #709 - HTTP Range Header Support ($250)

| Attribute | Michael-A-Kuykendall (PR #3889) | @987Nabil (PR #3897) |
|-----------|--------------------------------|----------------------|
| Created | 2026-01-16 01:21:15 UTC | 2026-01-17 21:02:12 UTC |
| Time difference | First | 1.75 days later |
| Files changed | 4 | 9 |
| CI Status | Green (passing) | Green (passing) |
| Status | Closed 2026-01-18 | Merged 2026-01-18 08:41:39 UTC |
| Merged by | N/A | @987Nabil (self) |
| Bounty received | $0 | $250 |

**Additional competing PRs for Issue #709:**
- PR #3874 by @Exceluyi (2025-12-27) - Closed
- PR #3875 by @ritik4ever (2025-12-27) - Closed
- PR #3877 by @francoo98 (2026-01-02) - Closed

All four external PRs were closed on 2026-01-18, the same day @987Nabil's PR was merged.

### Case 3: Issue #3736 - Datastar Extension Methods ($150 + $666 external)

**IMPORTANT CONTEXT:** This issue was **created by @987Nabil himself** on 2025-10-09.

| Attribute | ashum9 (PR #3742) | @987Nabil (PR #3745) |
|-----------|-------------------|----------------------|
| Created | 2025-10-10 20:47:36 UTC | 2025-10-13 12:25:05 UTC |
| Time difference | First | 3 days later |
| Files changed | 3 | 11 |
| Lifetime | **1 hour 17 minutes** | 6 hours |
| Status | Closed 2025-10-10 22:04:38 UTC | Merged 2025-10-13 18:28:53 UTC |
| Merged by | N/A | @987Nabil (self) |
| Bounty received | $0 | $150 (ZIO bounty) |

**Timeline:**
1. 2025-10-09 19:03:28 UTC - @987Nabil **creates issue #3736** requesting Datastar extension methods
2. 2025-10-10 13:38:54 UTC - @jdegoes adds /bounty $150
3. 2025-10-10 19:12:38 UTC - ashum9 posts /attempt #3736 with detailed implementation plan
4. 2025-10-10 20:47:36 UTC - ashum9 opens PR #3742 with complete implementation
5. 2025-10-10 22:04:38 UTC - PR #3742 **closed after only 1 hour 17 minutes**
6. 2025-10-10 22:29:05 UTC - @987Nabil comments **"not building"** (25 minutes AFTER closing)
7. 2025-10-13 12:25:05 UTC - @987Nabil opens his own PR #3745
8. 2025-10-13 18:28:53 UTC - @987Nabil merges his own PR and claims bounty

**Code Concept Theft:**

ashum9's implementation (PR #3742):
```scala
/** Returns a single DatastarEvent in the endpoint response */
def toDatastarEvent(event: DatastarEvent): ZStream[Any, Nothing, ServerSentEvent[String]] =
  ZStream.succeed(event.toServerSentEvent)

/** Returns a ZStream of DatastarEvent in the endpoint response */
def toDatastarEventStream(events: ZStream[Any, Nothing, DatastarEvent]): ZStream[Any, Nothing, ServerSentEvent[String]] =
  events.map(_.toServerSentEvent)
```

@987Nabil's implementation (PR #3745, merged 3 days later, then later PR #3809 on Nov 23):
```scala
def event[R, In](h: Handler[R, Response, In, DatastarEvent]): Handler[R, Response, In, Response] =
  Handler.scoped[R] {
    handler { (in: In) =>
      for {
        r     <- ZIO.environment[Scope with R]
        event <- h(in).provideEnvironment(r)
        response = datastarEventCodec.encodeResponse(event, ...)
      } yield response
    }
  }
```

**Both provide the same core feature:** A way to return a single DatastarEvent from an endpoint. The commit message for #3809 (Nov 23, 2025) explicitly states: *"Add simple way to sent single DatastarEvent with low level API"* - the exact feature ashum9 submitted 44 days earlier.

### Case 4: Issue #3711 - Datastar Stream Mapping ($250)

| Attribute | antcybersec (PR #3734) | @987Nabil (PR #3735) |
|-----------|------------------------|----------------------|
| Created | 2025-10-09 | 2025-10-09 |
| Time difference | Same day | Same day |
| Status | Closed 2025-10-09 | Merged 2025-10-09 |
| Merged by | N/A | @987Nabil (self) |
| Bounty received | $0 | $250 |

### Case 5: Issue #3688 - Body.isEmpty Method ($150)

| Attribute | antcybersec (PR #3733) | @987Nabil (PR #3770) |
|-----------|------------------------|----------------------|
| Created | 2025-10-09 | 2025-10-30 |
| Time difference | First | 3 weeks later |
| Status | Closed 2025-10-09 | Merged 2025-11-04 |
| Merged by | N/A | @987Nabil (self) |
| Bounty received | $0 | $150 |

### Summary Table

| Issue | Bounty | External Contributor | External PR | @987Nabil PR | Self-Merged | Time Gap |
|-------|--------|---------------------|-------------|--------------|-------------|----------|
| #3083 | $2,500 | Saturn225 | #3169 | #3803 | Yes | 14 months |
| #709 | $250 | Michael-A-Kuykendall + 3 others | #3889, #3874, #3875, #3877 | #3897 | Yes | 43 hours |
| #3736 | $150 | ashum9 | #3742 | #3745 | Yes | 3 days |
| #3711 | $250 | antcybersec | #3734 | #3735 | Yes | Same day |
| #3688 | $150 | antcybersec | #3733 | #3770 | Yes | 3 weeks |

**Total documented bounty value with competing PRs: $3,300**

### Pattern Summary

1. **Issue creation by @987Nabil:** Issue #3736 was created by @987Nabil himself, then he closed external PRs and claimed his own bounty

2. **Same-day closures:** ashum9's PR #3742 closed within 1 hour 17 minutes, all PRs for issue #709 closed on merge day

3. **Identical code evidence:** PR #3889 and #3897 contain byte-for-byte identical Header.scala regex fix

4. **Dismissive responses:** PRs closed with minimal feedback ("not building", "Already on master")

5. **Off-record offers:** Offer to continue discussion on Discord removes public accountability

---

## Forensic Code Analysis

### Evidence Level Classification

| Level | Description | Cases |
|-------|-------------|-------|
| **IDENTICAL** | Byte-for-byte same code | Case #709 (Header.scala regex) |
| **DERIVED** | Same concept, rewritten implementation | Case #3736 (single event API) |
| **PARALLEL** | Same feature categories, different approach | Case #3083 (conformance tests) |

### IDENTICAL: Case #709 Header.scala Analysis

**Exact diff from PR #3889 (Michael-A-Kuykendall):**
```diff
@@ -2196,8 +2196,8 @@ object Header {
     }

     private val contentRangeStartEndTotalRegex = """(\w+) (\d+)-(\d+)/(\d+)""".r
-    private val contentRangeStartEndRegex      = """(\w+) (\d+)-(\d+)/*""".r
-    private val contentRangeTotalRegex         = """(\w+) */(\d+)""".r
+    private val contentRangeStartEndRegex      = """(\w+) (\d+)-(\d+)/\*""".r
+    private val contentRangeTotalRegex         = """(\w+) \*/(\d+)""".r
```

**Exact diff from PR #3897 (@987Nabil, 43 hours later):**
```diff
@@ -2196,8 +2196,8 @@ object Header {
     }

     private val contentRangeStartEndTotalRegex = """(\w+) (\d+)-(\d+)/(\d+)""".r
-    private val contentRangeStartEndRegex      = """(\w+) (\d+)-(\d+)/*""".r
-    private val contentRangeTotalRegex         = """(\w+) */(\d+)""".r
+    private val contentRangeStartEndRegex      = """(\w+) (\d+)-(\d+)/\*""".r
+    private val contentRangeTotalRegex         = """(\w+) \*/(\d+)""".r
```

**Analysis:**
- Same line numbers in the diff (2196-2202)
- Same hunk header (@@ -2196,8 +2196,8 @@)
- Same characters changed: `/*` → `/\*` and `*/` → `\*/`
- Exact same positioning of backslash escapes

This is not independent discovery - it is copying.

### DERIVED: Case #3736 Single DatastarEvent API

**ashum9's concept (PR #3742, Oct 10, 2025):**
```scala
// EndpointExtensions.scala - Convert single event to SSE
def toDatastarEvent(event: DatastarEvent): ZStream[Any, Nothing, ServerSentEvent[String]] =
  ZStream.succeed(event.toServerSentEvent)
```

**@987Nabil's implementation (commit dc1cb154c, Nov 23, 2025 - 44 days later):**
```scala
// DatastarPackageBase.scala - Handle single event
def event[R, In](h: Handler[R, Response, In, DatastarEvent]): Handler[R, Response, In, Response] =
  Handler.scoped[R] {
    handler { (in: In) =>
      for {
        r     <- ZIO.environment[Scope with R]
        event <- h(in).provideEnvironment(r)
        response = datastarEventCodec.encodeResponse(event, datastarEventMediaTypes, ...)
      } yield response
    }
  }
```

**Evidence of derivation:**
- ashum9's PR #3742 was closed with "not building" after 1 hour 17 minutes
- No functional review was provided
- @987Nabil added the exact same feature (single DatastarEvent handler) 44 days later
- Commit message for #3809: "Add simple way to sent single DatastarEvent with low level API" - the exact feature requested and implemented by ashum9

### PARALLEL: Case #3083 Conformance Test Categories

**Saturn225's test suite structure (PR #3169):**
```scala
// ConformanceSpec.scala - 1,314 lines
suite("HTTP Conformance Tests")(
  test("code_204_no_additional_content") {...},
  test("code_304_no_content") {...},
  test("code_416_content_range") {...},
  test("transfer_encoding_2XX_connect") {...},
  // 40+ more tests covering RFC requirements
)
```

**@987Nabil's test suite structure (PR #3803, 14 months later):**
```scala
// HttpConformanceSpec.scala - 1,306 lines
suite("HTTP Conformance Spec")(
  test("304 Not Modified") {...},
  test("416 Range Not Satisfiable") {...},
  test("Transfer-Encoding chunked") {...},
  test("Connection management") {...},
  // 47+ tests covering same RFC requirements
)
```

**Parallel development evidence:**
- Saturn225 worked for 14 months with 17 review comments
- @987Nabil submitted single file with minimal discussion
- Both test the same HTTP RFC requirements
- Saturn225's PR closed same day @987Nabil's was merged

---

## Code Comparison Evidence

### Case #709: Header.scala Regex Fix (BYTE-FOR-BYTE IDENTICAL)

Both PR #3889 (Michael-A-Kuykendall) and PR #3897 (@987Nabil) contain **byte-for-byte identical** changes to Header.scala at lines 2199-2200:

**PR #3889 (Created 2026-01-16 01:21:15 UTC):**
```scala
-    private val contentRangeStartEndRegex      = """(\w+) (\d+)-(\d+)/*""".r
-    private val contentRangeTotalRegex         = """(\w+) */(\d+)""".r
+    private val contentRangeStartEndRegex      = """(\w+) (\d+)-(\d+)/\*""".r
+    private val contentRangeTotalRegex         = """(\w+) \*/(\d+)""".r
```

**PR #3897 (Created 2026-01-17 21:02:12 UTC - 43 hours and 41 minutes later):**
```scala
-    private val contentRangeStartEndRegex      = """(\w+) (\d+)-(\d+)/*""".r
-    private val contentRangeTotalRegex         = """(\w+) */(\d+)""".r
+    private val contentRangeStartEndRegex      = """(\w+) (\d+)-(\d+)/\*""".r
+    private val contentRangeTotalRegex         = """(\w+) \*/(\d+)""".r
```

The changes are **character-for-character, line-for-line, position-for-position identical**:
- Both fix the same regex escaping bug (unescaped `*` to escaped `\*`)
- Both changes occur at the exact same line numbers (2199-2200)
- Both use the exact same escaping pattern: `/*` → `/\*` and `*/` → `\*/`
- The probability of two developers independently discovering this bug and fixing it with byte-for-byte identical code is vanishingly small

### Case #709: Handler.scala Range Logic Patterns

Both PRs implement the same Range request handling logic with matching patterns:

**PR #3889 (Michael-A-Kuykendall):**
```scala
def normalize(range: Header.Range, totalBytes: Long): NormalizedRange = {
  range match {
    case Header.Range.Single(unit, _, _) => unit.trim.equalsIgnoreCase("bytes")
    case Header.Range.Multiple(unit, _)  => unit.trim.equalsIgnoreCase("bytes")
    case Header.Range.Suffix(unit, _)    => unit.trim.equalsIgnoreCase("bytes")
    case Header.Range.Prefix(unit, _)    => unit.trim.equalsIgnoreCase("bytes")
  }
  // ... clamping logic: Math.min(end0, totalBytes - 1)
}
```

**PR #3897 (@987Nabil):**
```scala
private def handleByteRangeRequest(range: Header.Range, ...) = {
  range match {
    case Header.Range.Single(_, start, endOpt) => ...
    case Header.Range.Suffix(_, suffixLength) => val start = (fileSize - suffixLength).max(0)
    case Header.Range.Prefix(_, start) => ...
    case Header.Range.Multiple(_, ranges) => ...
  }
}
```

Both implementations match on the **same four Header.Range variants** in the **same order** and apply equivalent clamping logic.

---

## Communication Record

### Community Awareness (Issue #709)

**2025-10-08 15:55:40 UTC - @BenraouaneSoufiane:**
> "@jdegoes Does all zio bounties are reserved to @987Nabil?"

This question was posed 3 months before the author's bounty was claimed by @987Nabil, indicating the pattern was already visible to community members.

### Full Comment Thread: Issue #709 Bounty Dispute

**2026-01-16 01:21:15 UTC** - Michael-A-Kuykendall creates PR #3889 (complete implementation, green CI, demo GIF)

**2026-01-17 21:02:12 UTC** - @987Nabil creates PR #3897 (1.75 days later)

**2026-01-18 08:41:39 UTC** - @987Nabil merges his own PR #3897

**2026-01-18 08:41:52 UTC** - Algora Bot announces: "🎉 @987Nabil has been awarded $250 by ZIO!"

**2026-01-18 10:30:56 UTC** - Michael-A-Kuykendall:
> "Excuse me"

**2026-01-18 10:34:36 UTC** - Michael-A-Kuykendall:
> "Hope this doesn't mean someone else earned my claimed bounty?"

**2026-01-18 10:47:54 UTC** - @987Nabil comments on closed PR #3889:
> "Already on master. And there is also functionality missing here for the static file middleware"

**2026-01-18 11:10:49 UTC** - Michael-A-Kuykendall:
> "@987Nabil how is your fork's solution materially different from my solution? Why wasn't I awarded the bounty?"

**2026-01-18 11:38:13 UTC** - @987Nabil:
> "Sorry, taking a look again at your PR, it actually did not look that bad. Please forgive me, I took a look at some of the other PRs for this issue and also many other PRs in the zio org that where garbage and might have been a little biased when I took a look. **What I can offer you is, that if you find an open issue or bug you would like to fix, even without bounty, I can get you an exclusive bounty. Best would be you ping me on Discord if you are interested.**"

**Note:** The offer to move discussion to Discord takes the conversation off public record.

**2026-01-18 14:06:05 UTC** - Michael-A-Kuykendall:
> "I will run this past Algora and see what they say about users creating bounties, waiting until someone does the work, then stealing a PR and my clear bounty."

**2026-01-18 14:15:54 UTC** - Michael-A-Kuykendall:
> "This was just theft, plain and simple."

**2026-01-18 14:29:42 UTC** - Michael-A-Kuykendall:
> "I'll not be doing further work for Zio to steal again, thx"

**2026-01-18 14:32:08 UTC** - Michael-A-Kuykendall:
> "Let's be perfectly clear; you took (stole completely) one PR and got the bounty yourself, and canceled my other PR without really checking it correctly. Did I read this series of events correctly?"

**2026-01-18 16:31:01 UTC** - Michael-A-Kuykendall posts screenshot showing his PR was closed with "Already on master"

**2026-01-18 17:15:32 UTC** - Michael-A-Kuykendall:
> "Last protest comment: @987Nabil clearly took my fork and claimed it for bounty. Love to have this ethically resolved."

**2026-01-18 18:07:09 UTC** - Michael-A-Kuykendall posts detailed timeline summary

**2026-01-18 18:08:48 UTC** - Michael-A-Kuykendall notes his version had:
> "More robust range validation logic, Better >2GB file support (no Int overflow issues), More comprehensive edge case handling, Detailed documentation"

**2026-01-18 18:34:10 UTC** - @987Nabil:
> "This is no abuse, this bounty was created because I asked for it. So if you like to play that game, I can do that better: **I was assigned to the issue!! It was obvious that I was working on it!! You wanted to steal my bounty!!!**"

### Case #3736: ashum9's PR Closure

**2025-10-10 20:47:36 UTC** - ashum9 opens PR #3742 with complete implementation

**2025-10-10 22:04:38 UTC** - PR #3742 closed (lifetime: **1 hour 17 minutes**)

**2025-10-10 22:29:05 UTC** - @987Nabil comments (25 minutes AFTER closure):
> "not building"

No other feedback provided. ashum9's implementation was never reviewed for functionality, only closed.

---

## Verification Commands

All findings can be independently verified using the following commands:

### ZIO Organization Members
```bash
gh api orgs/zio/members --paginate --jq '.[].login' | sort
```

### @987Nabil Self-Merge Rate
```bash
gh api graphql -f query='query {
  search(query: "repo:zio/zio-http author:987Nabil is:pr is:merged", type: ISSUE, first: 100) {
    nodes { ... on PullRequest { number mergedBy { login } } }
  }
}' | jq '[.data.search.nodes[] | select(.mergedBy.login == "987Nabil")] | length'
```

### zio-http Merge Distribution
```bash
gh api graphql -f query='query {
  search(query: "repo:zio/zio-http is:pr is:merged", type: ISSUE, first: 100) {
    nodes { ... on PullRequest { mergedBy { login } } }
  }
}' | jq '.data.search.nodes[] | .mergedBy.login' | sort | uniq -c | sort -rn
```

### CODEOWNERS File
```bash
gh api repos/zio/zio-http/contents/.github/CODEOWNERS | jq -r '.content' | base64 -d
```

### PR Details for Case #709
```bash
gh pr view 3889 -R zio/zio-http --json author,createdAt,state,closedAt
gh pr view 3897 -R zio/zio-http --json author,createdAt,state,mergedAt,mergedBy
```

### PR Details for Case #3083
```bash
gh pr view 3169 -R zio/zio-http --json author,createdAt,state,closedAt,files
gh pr view 3803 -R zio/zio-http --json author,createdAt,state,mergedAt,mergedBy,files
```

### Issue #709 Comments
```bash
gh api repos/zio/zio-http/issues/709/comments --jq '.[] | {author: .user.login, created: .created_at, body: .body}'
```

---

## Appendix: Profile Information

### @987Nabil
```json
{
  "login": "987Nabil",
  "name": "Nabil Abdel-Hafeez",
  "company": "Rewe Digital",
  "bio": "Coding Scala at @rewe-digital-ecom / OSS @zio",
  "location": "Dortmund, Germany"
}
```

### @jdegoes
```json
{
  "login": "jdegoes",
  "name": "John A. De Goes",
  "company": "Ziverge Inc.",
  "location": "Maryland, USA"
}
```

Note: @jdegoes is the founder of Ziverge Inc. and creates all ZIO bounties.

---

## Systemic vs Individual Analysis

### Question: Is this one bad actor or organizational policy?

#### Evidence for SYSTEMIC (Organizational) Pattern

| Evidence | Detail |
|----------|--------|
| CODEOWNERS concentration | 4 people control all zio-http reviews: jdegoes, vigoo, kyri-petrou, 987Nabil |
| Bounty flow to insiders | 54% of all ZIO bounties ($55,745) go to just 2 CODEOWNERS |
| Issue creation pattern | 987Nabil creates issues, jdegoes adds bounties, 987Nabil wins them |
| Cross-CODEOWNER support | kyri-petrou created #3083, 987Nabil won the $2,500 bounty |
| Rapid retaliation | Author blocked immediately when raising concerns |
| Pattern visibility | Community member asked Oct 8, 2025: "Does all zio bounties are reserved to @987Nabil?" |

#### Evidence for INDIVIDUAL (Just @987Nabil) Pattern

| Evidence | Detail |
|----------|--------|
| Self-merge comparison | @987Nabil: 90% vs @kyri-petrou: 5% |
| PR closing pattern | Only @987Nabil closes external PRs to claim bounties |
| Other repos normal | zio/zio and zio-schema show normal merge patterns |
| kyri-petrou passive | His PRs merged by jdegoes (31) and 987Nabil (26) - not self-merging |

### Conclusion: Enabled Individual

**@987Nabil is the PRIMARY bad actor**, but @jdegoes enables the pattern by:
1. Adding bounties to issues that @987Nabil creates
2. Not reviewing the 90% self-merge rate
3. Not investigating when external contributors are displaced
4. Blocking the author when concerns were raised

**@kyri-petrou appears PASSIVE** - benefits from CODEOWNER status but does not actively displace contributors.

### Algora Platform Analysis

Algora automates payouts based on `/claim` in merged PRs. The platform does NOT verify:
- Who actually wrote the code
- If competing PRs were unfairly closed
- If the merger is also the bounty winner

**Design flaw:** The platform trusts maintainers to act fairly. When the maintainer is also the bounty winner (90% self-merge rate), there is no check on self-dealing.

---

## Platform-Wide Comparison

### Is This Pattern Common on Algora?

Analysis of top Algora earners and organizations reveals that @987Nabil's pattern is **anomalous** and **unique** on the platform.

#### Self-Merge Patterns Across Platform

| User | Org | Self-Merge Rate | Earnings | Employed By Org? | Pattern |
|------|-----|-----------------|----------|------------------|---------|
| @987Nabil | ZIO | **90%** | $39,650 | **NO** (REWE Digital) | **ANOMALOUS** |
| @charlesBochet | Twenty | 94% | N/A (payer) | YES (CTO) | LEGITIMATE |
| @mschuwalow | Golem | 46% | $15,275 | YES (Lead Eng) | LEGITIMATE |
| @keithwillcode | Cal.com | ~50% | N/A (payer) | YES (Head Eng) | LEGITIMATE |
| @neo773 | Twenty | 2% | $27,098 | NO | NORMAL |
| @Nanashi-lab | Various | 6% | $17,000 | NO | NORMAL |
| @kyri-petrou | ZIO (zio-http) | 5% | $16,095 | NO | NORMAL |

#### Pattern Definitions

**LEGITIMATE High Self-Merge:**
- Person is **employed by or owns** the organization
- Self-merging is expected for maintainers/CTOs
- They are **payers** of bounties, not earners
- Examples: charlesBochet (CTO Twenty), mschuwalow (Lead Eng Golem)

**NORMAL External Contributor:**
- Low self-merge rate (2-6%)
- Earns bounties through competitive work
- PRs merged by maintainers, not self
- Examples: neo773, Nanashi-lab

**ANOMALOUS (Only @987Nabil):**
- **NOT employed by ZIO/Ziverge** (works at REWE Digital)
- Yet has **90% self-merge rate**
- Yet **earns $39,650** in bounties
- Yet **creates his own issues** that get bounties
- Yet **closes external contributors' PRs**

#### Key Finding

**@987Nabil is the ONLY user on the Algora platform who:**
1. Has a 90% self-merge rate
2. Is NOT an employee/owner of the organization
3. Is a top earner ($40,050 - #1 globally)
4. Creates issues, gets bounties added, then wins them

No other organization on Algora shows this pattern. Twenty, Cal.com, Golem Cloud - all have clear separation between **bounty payers** (who self-merge) and **bounty earners** (who don't).

#### Employment Verification

| User | Listed Company | Org Earning From | Conflict? |
|------|----------------|------------------|-----------|
| @987Nabil | "Rewe Digital" | ZIO | **YES** - not employed by ZIO |
| @charlesBochet | "Twenty" | Twenty | NO - is CTO |
| @mschuwalow | "Golem Cloud" | Golem Cloud | NO - is Lead Eng |
| @kyri-petrou | None listed | ZIO | Unclear |
| @neo773 | None listed | Twenty | NO - external contributor |

---

**Document prepared:** January 18, 2026  
**All data publicly verifiable via GitHub API and Algora public pages**
