---
name: Technical Need
about: Improve the platform, optimize, or refacto
title: ''
labels: technical
assignees: ''

---

<!-- Include a one sentence description -->

What it is

## Purpose

<!-- Concisely explain the reason to do this -->
<!-- Personal sentiments should be in a quote -->

This service makes a lot of redundant calls which is confusing and slower.

## Design

<!-- examples or pseudo code -->
<!-- mention any significant patterns, frameworks or libraries leveraged -->
<!-- it is not necessary to fully design here -->

Locator loads instead

```diff
- example.service.Builder
-    .using("set all the environment stuff")
-    .build();
+ example.service();
```

## Do

<!-- list of things to complete and test -->

- [ ] it is built

## Don't
<!-- optional list to call out negatives or pitfalls -->

- [ ] no conflicts with this other feature



<!-- 

# Usage Norm

Code bases also need to be maintained, not just built. Vulnerabilities may be discovered, or optimization, or just good old refactoring to make the code base easier to understand and support.

Being agile demands 2 things: initially not over-designing, and reflection. It's the art of taking it one step at a time towards your goal, but it relies highly heavily on looking back and making corrections using what was learned. Acknowledge that the process is not *finding perfect solutions* but rather *finding better solutions.*

-->
