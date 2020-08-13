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

## Know More about VxBox

- You would like to give some height and width to VxBox.

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

> Above code creates a container of red color along with height & width of 100px with a child as VelocityX Text which is centered
