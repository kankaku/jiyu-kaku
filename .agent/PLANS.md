# ExecPlans

Use an ExecPlan when work spans multiple steps, involves verification, or may continue across sessions.

## Rules

- Keep plans short and execution-focused.
- Name files with an ordered prefix such as `001-setup.md`.
- Track status inline so the latest session can resume without reconstructing context.
- Record verification commands and outcomes.

## Template

```md
# <Plan Title>

## Objective

<One-paragraph goal>

## Steps

1. [ ] First concrete step
2. [ ] Second concrete step
3. [ ] Verification

## Notes

- Key assumptions
- Important decisions

## Verification

- Pending
```
