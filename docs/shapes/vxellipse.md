---
id: vxellipse
title: VxEllipse
---

### Draws a ellipse that represents a shape

**Use `VxEllipse() or .ellipse()` to draw a ellipse shape.**

<img src="https://i.imgur.com/J1Tgn3b.png" alt="Ellipse sample photo" height="500"/>

> An ellipse aligned inside the frame of the view containing it.

```dart
 VxEllipse(
        width: 100,
        height: 50,
        backgroundColor: Colors.pink,
      )
```

### Extension

```dart
  .ellipse(
        width: 100,
        height: 50,
        backgroundColor: Colors.pink,
      )
```

### Shadow Effect

> Predefined shadows to give awesome elevation to your shape. It ranges from 0-24. More number means more shadow.

```dart
// Available options

  {shape}.shadow      //Shadow value 6
  {shape}.shadowXs    //Shadow value 1
  {shape}.shadowSm    //Shadow value 2
  {shape}.shadowMd    //Shadow value 3
  {shape}.shadowLg    //Shadow value 4
  {shape}.shadowXl    //Shadow value 6
  {shape}.shadow2xl   //Shadow value 8
  {shape}.shadow3xl   //Shadow value 9
  {shape}.shadow4xl   //Shadow value 12
  {shape}.shadow5xl   //Shadow value 16
  {shape}.shadowMax   //Shadow value 24

    Eg: .ellipse().shadowMax

```

## Properties

| Prop (Type)                       |                          Default                          |                        Description |
| --------------------------------- | :-------------------------------------------------------: | ---------------------------------: |
| backgroundColor (Color)           | ThemeData.primaryColorLight or Themedata.primarycolordark |      The color to fill the ellipse |
| child (Widget)                    |                                                           |                   Any child widget |
| width (double)                    |         MediaQuery.of(context).size.shortestSide          |               Width of the ellipse |
| height (double)                   |        MediaQuery.of(context).size.shortestSide/4         |              Height of the ellipse |
| border (BoxBorder)                |                                                           |           Border to provide stroke |
| customDecoration (BoxDecoration)  |                                                           | To fully provide custom decoration |
| gradient (Gradient)               |                                                           |                To provide gradient |
| backgroundImage (DecorationImage) |                                                           |        To provide background image |
| blendMode (BlendMode)             |                                                           |              To provide blend mode |
| shadows (List of BoxShadow)       |                                                           |              To give shadow effect |
