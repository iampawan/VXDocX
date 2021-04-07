---
id: list
title: List
---

VelocityX includes the pre-build Ordered and Unordered list which can be used directly in the application to list different widgets.

<Img src="https://i.imgur.com/n9MbtuO.png" alt="DiscList Example" height="500"/>                     <Img src="https://i.imgur.com/VjzyL5M.png" alt="DiscList Example" height="500"/>

>Above shows examples of the VxDiskList and the VxDecimalList widgets respectively. 

### VxDiscList class

VxDiscList is a pre-build widget which will allow you to create unordered bulleted (disc) list.

```dart
Widget build(BuildContext context) {
    return VxDiscList([
      "Flutter",
      "VelocityX",
      "Dart",
      "Fuschia"
    ]);
```

> Above code displays all the list with the disc before label

#### VxDiscList Constructor

```dart
const VxDiscList(
    this._items, {
    Key key,
    this.padding,
    this.color = Colors.black,
    this.fontSize = 14.0,
    this.primary = false,
  })
```

#### VxDiscList Properties

- Key **_key_** : Controls how one widget replaces another widget in the tree.

- List<String\> **__items_** : The String to displyed on screen.

- EdgeInsetsGeometry **_padding_** : The amount of space by which to inset the items.

- Color **_color_** : Defines Color of List items.

- double **_fontSize_** : Defines the font size of List Items.

- bool **_primary_** : Whether this is the primary scroll view associated with the parent.

---

### VxDecimalList class

VxDecimalList is a pre-build widget which will allow you to create ordered bulleted (Decimal Number) list.

```dart
Widget build(BuildContext context) {
    return VxDecimalList([
      "Flutter",
      "VelocityX",
      "Dart",
      "Fuschia"
    ]);
```

> Above code displays all the list with the numbers starting form one before label

#### VxDecimalList Constructor

```dart
const VxDecimalList(
    this._items, {
    Key key,
    this.padding,
    this.color = Colors.black,
    this.fontSize = 14.0,
    this.primary = false,
  })
```

#### VxDecimalList Properties

- Key **_key_** : Controls how one widget replaces another widget in the tree.

- List<String\> **__items_** : The String to displyed on screen.

- EdgeInsetsGeometry **_padding_** : The amount of space by which to inset the items.

- Color **_color_** : Defines Color of List items.

- double **_fontSize_** : Defines the font size of List Items.

- bool **_primary_** : Whether this is the primary scroll view associated with the parent.

---
