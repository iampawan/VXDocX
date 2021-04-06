---
id: list
title: List
---

VelocityX includes the pre-build Ordered and Unordered list which can be used directly in the application to list different widgets.

<Img src="https://lh3.googleusercontent.com/y2R6y7JyqGNYj6ce71C-p6PkTGbfcL-ldrRUXYxY14x0EF2w_bTI_gMjkUvaL48CWoEQbjaUTBQgszEJ1cLhzRBErOTQetvvugm8EvLC2kCJtQgevF_QgE0XbwibvBPs3GDYQdkut7J6M-VTI9s8demBRDhEs0II-nIjieFuHZlT7syE4Y700JkwBXtaZamFmyavgUoy0c3R7yS6jlMLR-yzEXrsTXDgw7wYVd7nyHMZYidJ0T2blDyIHL1GmI7PfT6qPgpMBcWop9W8e1imfqOYnZxVlaLI9_1iZy_MGZL-70PBzT2YkuokP_DuTrO5PDJHUt4nifR7DjE9RhQXkmVM35pXHLI8stmkuPb4d4u__1lx-W-2Chn2mg-slUvw_BT6azmNWxKFLbIxWMsXlB3DGJXJlkSUVW7rhZKOf0bdTtF_KYFIJnysZm_TP8gnHgBVDEsA1DgmjoPds91RJYGGZbzT3HJy6daZEO-yVREkZk-EmUXHgEQzl9IB7RmTwswhxqu3VYcvgHfX72yDnKiIfiI8P98kCS4Z8b-k9f_QzNqaYYjyyHFsIYoCr3A9Cl0wgTgLgNG-_p3hZHQiILEWWk2IGi4tlRT7_J9EyQSYzf7pRgks11R3kTU038o1hMC6UW7-RW-SKd3ovY3IfzKQISs-segHyBi4LzVU64-OEPKpvAQ1zTydo7V16tyMyeCe53m03s5iRxZSJZJnJmj_=w429-h952-no?authuser=0" alt="DiscList Example" height="500"/>                     <Img src="https://lh3.googleusercontent.com/EIGcWiayDVAw7L6bxuzHzSegcAzXJUk57JEqyHmcD92c4G7iI--h7x9zwVrI6gQJS08uxLdIDr3aQUYuj9g-Pa4K54oOiFKc22PgwE3bvb7gxK-ycReCdZ714cW4ktEwLyDepiUBxZIei2-jud5tL6VRy6M5xqVZucd2CfnW7WmOY_yLKR0tmhNK71NP2xBf3-pEjbiyYTJROi7JC-rzQU74bLEmg80SGLSWXHNNIKPlLLFSyEZlRqvAZ2qSDu9fmU-ny_92-2FJcg5Mbo2w7VSMh7u47tvuW3WxKujH-F7489eyKBv3NL5ndcgUgqEe_QCkT6iQzTK-DqqYu5s44fSiikYu0nkfghnE6-bE3wu53z_cxpcyQ73mUDPVWpLSuJVvjAa2dPFUoyZXwRm-39UCcWf_h7AuvIv7CQXO2GGWoPZZ_ll-i3r-TTxyzci_L5kPurOOQyKuJB4NgPFnot19RIRlqMiVudc9wK3hem8D1z47axCAF7y5jeOtT028V0O9RgoeoP2_K6ewB0xPd6wP-7R3_l5-KiGiu07_q1mvrRi7zh3t8nZtorUa15l8Q6KlfI5BvVeTxxEcMV-T4aub9c1riKXH5QbYvGFzbBCGyncgAUx2pMTUpB3r5PbiqZLUtlAG00EliZuvfmUhN2_5m50kVy6XbdCCqoDA5Nfot6rUleoC4aJRLCFDAeKlXZjRUwGybfhtkcNqqlwUSfrK=w429-h952-no?authuser=0" alt="DiscList Example" height="500"/>

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
