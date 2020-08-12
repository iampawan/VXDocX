---
id: flex
title: Flex
---

VelocityX includes utilities for controlling the direction of widgets.

| Vx Widget       | Flutter Widget |
| --------------- | :------------: |
| VStack()        |    Column()    |
| HStack()        |     Row()      |
| ZStack()        |    Stack()     |
| VxBlock()       |       -        |
| VxInlineBlock() |       -        |

### VStack class

A VelocityX VStack widget which is used to display it's children in vertical array. VStack widget does not scroll automatically, If VStack has more children than the available room then it is considered as an error.

If you have N number of widget as children for VStack and you want to scroll them. Then consider using `scorllVertical()` extention.

:::note
`scorllVertical()` is an extention which makes children scroll vertically.
:::

For a Horizontal variant, see [HStack](#hstack-class).

#### VStack Sample

```dart
VStack(
    [
        Text("VelocityX is Super"),
        Text("Sample Text"),
        Text("Yet, Another Sample Text"),
    ],
).scrollVertical().p20();
```

**_Above code displays all the texts in Vertical manner_**

#### VStack Constructor

```dart
VStack(this.children, // should not be null
      {Key key,
      this.alignment = MainAxisAlignment.start,
      this.crossAlignment = CrossAxisAlignment.start,
      this.axisSize = MainAxisSize.min})
```

#### VStack Properties

- Key **_key_** : Controls how one widget replaces another widget in the tree.

- List<Widgets\> **_children_** : The widgets below this widget in the tree.

- MainAxisAlignment **_alignment_** : How the children should be placed along the main axis.

- CrossAxisAlignment **_crossAlignment_** : How the children should be placed along the cross axis.

- MainAxisSize **_axisSize_** : How much space should be occupied in the main axis.

---

### HStack class

A VelocityX HStack widget which is used to display it's children in Horizontal array.HStack widget dose not scroll automatically, If HStack has more children then available room then it is considered as an error.

If you have N number of widget as children for HStack and you want to scroll them. Then consider using `scrollHorizontal()` extention.

:::note
`scrollHorizontal()` is an extention which makes children scroll Horizontal.
:::

For a Vertical variant, see [VStack](#vstack-class).

#### HStack Sample

```dart
HStack(
    [
        Text("VelocityX is Super").px12(),
        Text("Sample Text").px12(),
        Text("Yet, Another Sample Text").px12(),
    ],
).scrollHorizontal().p20();
```

**_Above code displays all the texts in Horizontal manner_**

#### HStack Constructor

```dart
  const HStack(this.children, // should not be null
      {Key key,
      this.alignment = MainAxisAlignment.start,
      this.crossAlignment = CrossAxisAlignment.center,
      this.axisSize = MainAxisSize.min})
```

#### HStack Properties

- Key **_key_** : Controls how one widget replaces another widget in the tree.

- List<Widgets\> **_children_** : The widgets below this widget in the tree.

- MainAxisAlignment **_alignment_** : How the children should be placed along the main axis.

- CrossAxisAlignment **_crossAlignment_** : How the children should be placed along the cross axis.

- MainAxisSize **_axisSize_** : How much space should be occupied in the main axis.

---

### ZStack class

A VelocityX ZStack widget is used to display it's children relative to the edges of its box.
ZSack is useful if you want to overlap several children in a simple way, for example having some text and an image, overlapped with a gradient color as background.

:::note
Use `alignment` property to align the children of ZStack class.Default Alignment is top start
:::

#### ZStack Sample

```dart
ZStack(
    [
        VxBox().blue500.height(110.0).width(110.0).make(),
        VxBox().green500.height(90.0).width(90.0).make(),
        VxBox().red500.height(70.0).width(70.0).make(),
    ],
    alignment: Alignment.center,
).p20();
```

**_Above code displays Overlapping Box(containers) which are align in center_**

#### ZStack Constructor

```dart
  const ZStack(this.children, // should not be null
      {Key key,
      this.alignment = AlignmentDirectional.topStart,
      this.fit = StackFit.loose,
      this.overflow = Overflow.clip})
```

#### ZStack Properties

- Key **_key_** : Controls how one widget replaces another widget in the tree.

- List<Widgets\> **_children_** : The widgets below this widget in the tree.

- AlignmentGeometry **_alignment_** : How to align the non-positioned and partially-positioned children in the ZStack.

- StackFit **_fit_** : How to size the non-positioned children in the stack.

- Overflow **_overflow_** : Whether overflowing children should be clipped.

---
