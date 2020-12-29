---
id: vxcapsule
title: VxCapsule
---

### Draws a capsule that represents a shape

**Use `VxCapsule() or .capsule()` to draw a capsule shape.**

> A capsule shape is equivalent to a rounded rectangle where the corner radius is chosen as half the length of the rectangle’s smallest edge.

```dart
 VxCapsule(
        width: 100,
        height: 50,
        backgroundColor: Colors.red,
      )
```

### Extension

```dart
  .capsule(
        width: 100,
        height: 50,
        backgroundColor: Colors.red,
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

    Eg: .capsule().shadowMd

```

## Properties

| Prop (Type)                       |                          Default                          |                        Description |
| --------------------------------- | :-------------------------------------------------------: | ---------------------------------: |
| backgroundColor (Color)           | ThemeData.primaryColorLight or Themedata.primarycolordark |      The color to fill the capsule |
| child (Widget)                    |                                                           |                   Any child widget |
| width (double)                    |         MediaQuery.of(context).size.shortestSide          |               Width of the capsule |
| height (double)                   |        MediaQuery.of(context).size.shortestSide/4         |              Height of the capsule |
| border (BoxBorder)                |                                                           |           Border to provide stroke |
| customDecoration (BoxDecoration)  |                                                           | To fully provide custom decoration |
| gradient (Gradient)               |                                                           |                To provide gradient |
| backgroundImage (DecorationImage) |                                                           |        To provide background image |
| blendMode (BlendMode)             |                                                           |              To provide blend mode |
| shadows (List of BoxShadow)       |                                                           |              To give shadow effect |
