---
id: vxcircle
title: VxCircle
---

### Draws a circle that represents a shape

**Use `VxCircle() or .circle()` to draw a circular shape.**

<img src="https://i.imgur.com/erze2pz.png" alt="Circle sample photo" height="500"/>

> The circle’s radius equals half the length of the frame rectangle’s smallest edge.

```dart
  VxCircle(
        radius: 50
        backgroundColor: Colors.green,
      )
```

### Extension

```dart
  .circle(
        radius: 50
        backgroundColor: Colors.green,
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

    Eg: .circle().shadow2xl

```

## Properties

| Prop (Type)                       |                          Default                          |                        Description |
| --------------------------------- | :-------------------------------------------------------: | ---------------------------------: |
| backgroundColor (Color)           | ThemeData.primaryColorLight or Themedata.primarycolordark |       The color to fill the circle |
| child (Widget)                    |                                                           |                   Any child widget |
| radius (double)                   |       MediaQuery.of(context).size.shortestSide / 2        |               Radius of the circle |
| border (BoxBorder)                |                                                           |           Border to provide stroke |
| customDecoration (BoxDecoration)  |                                                           | To fully provide custom decoration |
| gradient (Gradient)               |                                                           |                To provide gradient |
| backgroundImage (DecorationImage) |                                                           |        To provide background image |
| blendMode (BlendMode)             |                                                           |              To provide blend mode |
| shadows (List of BoxShadow)       |                                                           |              To give shadow effect |
