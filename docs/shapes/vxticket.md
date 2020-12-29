---
id: vxticket
title: VxTicket
---

### Draws a ticket that represents a shape

**Use `VxTicket() or .ticket()` to draw a ticket shape.**

> A movie ticket like shape.

```dart
  VxTicket(
        width: 150,
        height: 70,
        isTwoSided: true,
        backgroundColor: Colors.pink,
      )
```

### Extension

```dart
  .ticket(
        width: 150,
        height: 70,
        isTwoSided: true,
        backgroundColor: Colors.pink,
      )
```

## Properties

| Prop (Type)             |                          Default                          |                                                                                  Description |
| ----------------------- | :-------------------------------------------------------: | -------------------------------------------------------------------------------------------: |
| backgroundColor (Color) | ThemeData.primaryColorLight or Themedata.primarycolordark |                                                                 The color to fill the ticket |
| child (Widget)          |                                                           |                                                                             Any child widget |
| width (double)          |       MediaQuery.of(context).size.shortestSide / 2        |                                                                          Width of the ticket |
| height (double)         |       MediaQuery.of(context).size.shortestSide / 4        |                                                                         Height of the ticket |
| isTwoSided (bool)       |                           false                           |                                                                      Ticket style both sides |
| isHardEdged (bool)      |                           false                           | The ticket type is by default curvish. If isHardEdged is true then it will be pointed edged. |
