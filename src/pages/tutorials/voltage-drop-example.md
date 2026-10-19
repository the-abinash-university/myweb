---
layout: ../../layouts/TutorialLayout.astro
title: 'Sample: A simple voltage-drop estimate'
pubDate: 2026-10-11
description: An illustrative single-phase approximation showing how current and impedance relate to voltage drop.
tags: [voltage, distribution, fundamentals]
---

> **Educational example:** The simplified values and assumptions here are not suitable for equipment selection, compliance checks, or operating decisions.

## Set up the example

Suppose a short, single-phase circuit carries 20 A through a conductor with an assumed loop resistance of 0.08 ohm and loop reactance of 0.04 ohm. Assume a load power factor of 0.9 lagging and a nominal voltage of 230 V.

The corresponding power-factor angle has:

```text
sin(acos(0.9)) ≈ 0.436
```

## Estimate the voltage drop

Using a common approximate single-phase expression:

```text
ΔV ≈ I × (R × cos(φ) + X × sin(φ))
   ≈ 20 × (0.08 × 0.9 + 0.04 × 0.436)
   ≈ 1.79 V
```

As a percentage of nominal voltage:

```text
ΔV% ≈ 100 × 1.79 / 230 ≈ 0.78%
```

## What this estimate leaves out

The approximation assumes the stated impedance and operating conditions. It does not establish compliance with a voltage limit and does not account for every network, temperature, harmonic, motor-starting, or operating condition. For a real installation, verify the circuit model and governing requirements with a suitable method.
