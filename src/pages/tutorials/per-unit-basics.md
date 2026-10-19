---
layout: ../../layouts/TutorialLayout.astro
title: 'Sample: Per-unit basics for power systems'
pubDate: 2026-10-18
description: A worked, illustrative introduction to choosing base values and converting voltage and impedance to per-unit.
tags: [per-unit, fundamentals, calculations]
---

> **Educational example:** This tutorial uses simplified values for learning only. It is not a substitute for a verified study model or engineering review.

## Why use per-unit values?

Per-unit expresses an electrical quantity as a fraction of a selected base. With consistent three-phase bases, transformer ratios do not require manually changing impedance bases at every transformer, making multi-voltage network calculations easier to organize.

## Choose the bases

For this example, choose a three-phase apparent-power base of 100 MVA and a line-to-line voltage base of 11 kV on one side of a transformer.

The corresponding three-phase impedance base is:

```text
Z_base = (V_base,LL)^2 / S_base,3φ
       = (11 kV)^2 / 100 MVA
       = 1.21 ohm
```

The matching line-current base is:

```text
I_base = S_base,3φ / (sqrt(3) × V_base,LL)
       ≈ 5.25 kA
```

## Convert an impedance

If a hypothetical impedance is 0.121 ohm on this voltage base, its per-unit value is:

```text
Z_pu = Z_actual / Z_base
     = 0.121 / 1.21
     = 0.10 pu
```

When changing bases for an existing per-unit impedance, use:

```text
Z_pu,new = Z_pu,old × (S_base,new / S_base,old)
                     × (V_base,old / V_base,new)^2
```

The voltage bases in that expression must refer to the same side of the equipment. Check the chosen base quantities, units, and three-phase conventions before applying the method to real network data.
