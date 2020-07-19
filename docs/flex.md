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

A VelocityX VStack widget which is used to display it's children in Vertical array.VStack widget dose not scroll automatically, If VStack has more children then available room then it is considered as an error.

If you have N number of widget as children for VStack and you want to scroll them. Then consider using `scorllVertical()` extention.

:::note
`scorllVertical()` is a extention which makes children scroll Vertically.
:::

For a Horizontal variant, see HStack.

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

### Constructor

```dart
VStack(this.children, // should not be null
      {Key key,
      this.alignment = MainAxisAlignment.start,
      this.crossAlignment = CrossAxisAlignment.start,
      this.axisSize = MainAxisSize.min})
```

### Properties

- Key ***key*** : Controls how one widget replaces another widget in the tree.

- List<Widgets\> ***children*** : The widgets below this widget in the tree.

- MainAxisAlignment ***alignment*** : How the children should be placed along the main axis.

- CrossAxisAlignment ***crossAlignment*** : How the children should be placed along the cross axis.

- MainAxisSize ***axisSize*** : How much space should be occupied in the main axis.
