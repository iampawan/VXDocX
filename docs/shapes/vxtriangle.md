---
id: vxtriangle
title: VxTriangle
---

### Draws a triangle that represents a shape

**Use `VxTriangle() or .triangle()` to draw a triangular shape.**

<img src="https://i.imgur.com/kHNYMlG.png" alt="Sample photo of triangle widget" height="500"/>

> The triangle with 3 sides.

```dart
  VxTriangle(
       height: 120,
       width: 180,
       backgroundColor: Vx.indigo700
      )
```

### Extension

```dart
  .triangle(
        height: 120,
        width: 180,
        backgroundColor: Vx.indigo700
      )
```

## Properties

| Prop (Type)             |                          Default                          |                    Description |
| ----------------------- | :-------------------------------------------------------: | -----------------------------: |
| backgroundColor (Color) | ThemeData.primaryColorLight or Themedata.primarycolordark | The color to fill the triangle |
| child (Widget)          |                                                           |               Any child widget |
| width (double)          |       MediaQuery.of(context).size.shortestSide / 2        |          Width of the triangle |
| height (double)         |       MediaQuery.of(context).size.shortestSide / 2        |         Height of the triangle |
| strokeWidth (double)    |                                                           |       Width to provide stroke. |
