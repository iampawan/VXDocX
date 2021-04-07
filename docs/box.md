---
id: box
title: Box
---


VelocityX allows you to quicky create a Container using ```.box()``` extension or ```VxBox()``` widget.

:::important

- You can either use this or ```Container``` widget.

- If you are done with the box properties do make sure to use ```.make()``` to get a container

:::

**```VxBox()``` is a VelocityX widget which allows you to create a container**

| Vx Widget       | Flutter Widget |
| --------------- | :------------: |
| VxBox()         |    Container() |

**```.box()``` is a VelocityX extension which allows you to create a container**

| Vx extension       | Flutter Widget |
| ---------------    | :------------: |
| .box()            |    Container()  |

<img src="https://i.imgur.com/JJeRNPc.png" alt="Toast sample 1" height="500"/>

> Above is an example of a red VxBox with padded text as the child

#### VxBox Sample using widget

```dart
  Widget build(BuildContext context) {
    return VxBox(child: Text("VelocityX")).red500.make().centered();
  }
```

> Above code creates a container of red color with a child as VelocityX Text which is centered

#### VxBox Sample using extension

```dart
  Widget build(BuildContext context) {
    return "VelocityX".text.make().box.red500.make().centered();;
  }
```

> Above code creates a container of red color with a child as VelocityX Text which is centered

#### VxBox Constructor

```dart
VxBox({this.child})
```

#### VxBox Properties

- Widget **_child_** : The child contained by the VxBox.

-------

## Useful Methods

:::tip

- Use this methods before `.make()`

:::

### VxBox Height and Width

- Use ```height()``` and ```width()``` methods to apply height and width on VxBox

``` dart
Widget build(BuildContext context) {
    return VxBox(child: Text("Hello").centered())
        .height(100)
        .width(100)
        .red500
        .make()
        .centered();
}
```

> Above code creates a container of red color along with height & width of 100px with a child as VelocityX Text which is centered.

### VxBox Padding and Margin

Use ```padding()``` and ```margin()``` methods to apply padding and margin on VxBox.

:::note

- You can use VelocityX class to provide predefined EdgeInsets value.

:::

#### Using VelocityX class to get predefined EdgeInsets value

- ```Vx.m12``` - Set insets of 12 from all the side.

- ```Vx.mH12``` - Set insets of 12 in Horizontal way.

- ```Vx.mV12``` - Set insets of 12 in Vertical way.

``` dart
Widget build(BuildContext context) {
    return VxBox(child: Text("VelocityX").centered())
          .padding(Vx.m12)
          .red500
          .make()
}
```

> Above code sets a padding of 12 insets on VxBox.

``` dart
Widget build(BuildContext context) {
    return VxBox(child: Text("VelocityX").centered())
          .margin(Vx.m12)
          .red500
          .make()
}
```

> Above code sets a margin of 12 insets on VxBox.

### VxBox Color

- There are different ways to give colors to the VelocityX Box using getter and methods.

  - You can use VelocityX color palette using VelocityX getter as color name like
  ```.red600```. For e.g.

   ```dart
    return   Widget build(BuildContext context) {
    return VxBox(child: Text("VelocityX").centered())
        .red500
        .make()
        .centered();
  };
    ```

  - You can use Flutter colors  using VelocityX method like ```.color(Colors.red)```.  For e.g.

    ```dart
    return VxBox(child: Text("VelocityX").centered()).color(Colors.red).make();
    ```

  - You can use hex color code with VelocityX method like ```.hexColor("#cfcfcf")```.  For e.g.

    ```dart
    return VxBox(child: Text("VelocityX").centered()).hexColor("#cfcfcf").make();
    ```

### VxBox Alignment

There are multiple getters to align the VxBox

- You can align your VxBox to bottom center like this

    ```dart
    return VxBox(child: Text("VelocityX").centered()).alignBottomCenter
        .red500
        .make()
        .centered();
    ```

| Vx              | Flutter                |
| --------------- | ------------       |
| alignTopCenter  |  Alignment.topCenter   |
| alignTopLeft    |  Alignment.topLeft     |
| alignTopRight   |  Alignment.topRight    |
| alignCenter     |  Alignment.center      |
| alignCenterLeft |  Alignment.centerLeft  |
| alignCenterRight|  Alignment.centerRight |
| alignBottomCenter|  Alignment.bottomCenter|
| alignBottomLeft |  Alignment.bottomLeft  |
| alignBottomRight|  Alignment.bottomRight |

- You can use alignment method to set custom alignment

    ```dart
    return VxBox(child: Text("VelocityX").centered()).alignment(Alignment(20,10))
        .red500
        .make()
        .centered();
    ```

### VxBox Shadow

VelocityX offers predefined shadows to be used on VxBox

- shadow
- shadowXs
- shadowSm
- shadowMd
- shadowLg
- shadowXl
- shadow2xl

    ```dart
    return VxBox(child: Text("VelocityX").centered())
        .red500
        .shadow
        .height(100)
        .make()
        .centered();
    ```
