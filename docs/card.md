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

#### VxBox Properties

- Widget **__child_** : The child contained by the VxCard.

---

## Useful Methods

:::tip

- Use this methods before `.make()`

:::

### VxCard Background Color

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
