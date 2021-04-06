---
id: card
title: Card
---
VelocityX allows you to quicky create a card using ```.card()``` extension or ```VxCard()``` widget. You can eaily modify the properties like Shadow Color, Elevation, and Clip of VelocityX Card using different extensions

:::important

- You can either use this or ```Card()``` widget.

- If you are done with the Card properties do make sure to use ```.make()``` to get a container

:::.
**```VxCard()``` is a VelocityX widget which allows you to create a Card**

| Vx Widget       | Flutter Widget |
| --------------- | :------------: |
| VxCard()         |    Card()     |

**```.card()``` is a VelocityX extension which allows you to create a Card**

| Vx extension       | Flutter Widget |
| ---------------    | :------------: |
| .card()            |    Card()      |

Here are a few examples to help you get an idea of how to work with VelocityX Card widget.

<img src="https://lh3.googleusercontent.com/abwfezo8x8CLWgA-GAML_6oTj5vhBA-yE9Twn16QU3KhiznIqPqxmSE0eSJmlzuvd8r2oX4vrv3RUCJJoLvs-DK9YQhiXabSVDKdLuouOr43YupiDwWm8H7KwdGXS3mEvbvZZH0SnIcdl6CD75Qd7QJqNGH4xLpFrGB3a6kZghnpJrp8a1nk9iwYDyABkobna40SMNCR3YNd4WyJ-VZTgxTrhpuHRGG7qoWwVJfjP90gFIEQTcygVCSP8l3CA5Omy8sAcZF3YZrJGP3NV233CVSKX7ZYlHu0_-H9W-cvXvtmNw_fAJa4mS_0MetpGaqAwsPZJNr4ZwcwkuDIpllPwhZjUtp7ZJDVxGFqw5zHOjGeGnsgLnBvaWWDYt9vMLWSvl0y2zMBHPpj9dzZIboisUAImk30IABJcmiMCk5KNdj7S7w4wRChQfkaYGrthUyHSKrTVkIX0p1ML9caZINUWdWwzZGOSLoc75xNVrnx2emNvmprJl4YIkGQ4QlW1TsBUSTMkAMWxsPkz1uxuHp5u1DTcIU6Kp9YU3NKL6EKwN6jGlMKilgPyEPoY3feXU8aDn2vCGbVWNSTmAd86Gz34ENBmLUigYjk_Y2FcYgWRckUjKGYvce6yteWT8_De9AM0TponFYOJrtfom-kg5F1RAeTi5ThvrEPcgmx98lBpNtDYtYWS3_QJhXh_efxCzNS7vpjRl52rgjbXj-1mp7m0fqF=w429-h952-no?authuser=0" alt="Card Example" height="500"/>

>Above is an image showcasing a simple usage of the VxCard Widget

#### VxCard Sample using widget

```dart
  Widget build(BuildContext context) {
    return VxCard("VelocityX".text.make()).red600.make().centered();
  }

```

> Above code creates a card of red background with a text VelocityX

#### VxCard Sample using extension

```dart
  Widget build(BuildContext context) {
    return "VelocityX".text.make().card.red600.make().centered();
  }

```

#### VxCard Constructor

```dart
 VxCard(
    this._child,
  )
```

#### VxCard Properties

- Widget **__child_** : The child contained by the VxCard.

---

## Useful Methods

:::tip

- Use this methods before `.make()`

:::

### VxCard Color

- There are different ways to give colors to the VelocityX Card.

  - You can use VelocityX color palette using VelocityX extension as color name like
  ```.red600```. For e.g.

   ```dart
    return "VelocityX".text.make().card.red600.make();
    ```

  - You can use Flutter colors  using VelocityX extension like ```.color(Colors.red)```.  For e.g.

    ```dart
    return "VelocityX".text.make().card.color(Colors.red).make();
    ```

  - You can use hex color code with VelocityX extension like ```.hexColor("#cfcfcf")```.  For e.g.

    ```dart
    return "VelocityX".text.make().card.hexColor("#cfcfcf").make();
    ```

### VxCard Elevation

- You can provied custom elevation using VelocityX extension like ```.elevation(20)```.

```dart
    return "VelocityX".text.make().card.elevation(20).hexColor("#cfcfcf").make();
```

- Remove elevation using VelocityX extension like ```.zero```.

```dart
    return "VelocityX".text.make().card.zero.hexColor("#cfcfcf").make();
```

### VxCard Circular

- Maker your card complete circle using VelocityX extension like ```.circular```

```dart
    return "VelocityX".text.make().card.circular.make().centered();
```

- Remove defulat Border Radius and Elevation from VxCard using VelocityX extension like ```.zeroCircular```

```dart
    return "VelocityX".text.make().card.zeroCircular.make().centered();
```

### VxCard Shadow Color

- You can easily customize the card shadow color using VelocityX extension like ```.shadowColor(Colors.red)```

```dart
   return "VelocityX".text.make().card.shadowColor(Colors.red).make().centered();
```
