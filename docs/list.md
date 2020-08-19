---
id: list
title: List
---

VelocityX includes the pre-build Ordered and Unorders list which you can use directly in the application to list he different widgets.

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
    return VxDiscList([
      "Flutter",
      "VelocityX",
      "Dart",
      "Fuschia"
    ]);
```

> Above code displays all the list with the numbers starting form one before label

#### VxDecimalList Constructor

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

#### VxDecimalList Properties

- Key **_key_** : Controls how one widget replaces another widget in the tree.

- List<String\> **__items_** : The String to displyed on screen.

- EdgeInsetsGeometry **_padding_** : The amount of space by which to inset the items.

- Color **_color_** : Defines Color of List items.

- double **_fontSize_** : Defines the font size of List Items.

- bool **_primary_** : Whether this is the primary scroll view associated with the parent.

---