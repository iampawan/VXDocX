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

<img src="https://lh3.googleusercontent.com/CJYaWl1rDGrK1i-a1EKsdvjLOpIAJkHHNtDUI3P9H4GpCmvXy0XrvObjbqyeKgXA0_2D38Bzlfj1A8jHIFj9KxzdaPPBwDeXQG9TNjhK0-R7pdtSJBoC3WQXfbqNcMXI-d7o6UTBmkDtMLuxrt9_0lvY1nfggA3iStWYdiljsH-9EmBqqO1l3hu75PuNqE0Wzeg-JZeAbGVIjimLfuncfD6CaWLyTdWUf9T5Rl-HTEPj2lUf6GGKCq5Zh6Qe1GBoCDsWEjg9LjmlsaY_9M7kYu61FPETLkBOTaiThHqDq2d2zperkAryKkB8I5jwnoZVcnhW-NJERNo86IzGjO70j4aein24RACT8Hrucxa3fnXGInv5iHz67z-9bIqVfs5oQF2fjYTfR_iTMWKG7YGpCiriPxaxJRB0TNKJiGtgcAMLSWBkNgNLwBVBzpRuk6r4oIUEyFuXEpNkj278JNXeTsdn9RfaZupCWlg1vT2eeX93lQeRlPMTOLoa1N5OYtdXc7HkhVxZXSwtCvNVMaMFVuCZyXq5TBrpKITPnuQYaMBPeBi-2bqpB0d7gDb8b1jYJWILn3r7d52EsbKCHRHrf4vEKQ0h5yI4KTYGjv3AZo9th_udgumaeDQorwFndVT7GDpX_EjtBWtl8phAQ6qhCAviJxa7ID3nIbtyGF9S8fygzy-xsGRclyNYpQn04k13ri6KLI-r8dIcqVmKNNgY9wSR=w429-h952-no?authuser=0" alt="Toast sample 1" height="500"/>

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
