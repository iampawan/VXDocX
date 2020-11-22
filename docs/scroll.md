---
id: scroll
title: Scroll
---

VelocityX includes widgets which can be used to add scroll behaviour.

:::tip
You can either use `VxScrollVertical`, `VxScrollHorizontal` or `SingleChildScrollView`.
:::

### VxScrollVertical

`VxScrollVertical` is a widget that can be used to create vertical scroll behaviour in the application.

```dart
Widget build(BuildContext context) {
    return VxScrollVerticial(
      physics: AlwaysScrollableScrollPhysics(),
      child: <Widget>[
        'First Text'.text.make(),
        'Second Text'.text.make()
      ].vStack(),
    );
```

#### Using Extension Method

```dart
Widget build(BuildContext context) {
    return [
        'First Text'.text.make(),
        'Second Text'.text.make()
      ].vStack().scrollVerticial(physics: AlwaysScrollableScrollPhysics()),
    ;
```

> Above code creats a vertical scrollable list with two widgets.

#### `VxScrollVertical` Constructor

```dart
const VxScrollVertical({
  Key key,
  this.controller,
  this.physics,
  this.padding,
  this.child,
}) : super(key: key)
```

#### `VxScrollVertical` Properties

- `Key` `key` : A Key is an identifier for Widgets, Elements and SemanticsNodes.
  A new widget will only be used to update an existing element if its key is the same as the key of the current widget associated with the element.

- `Widget` `child` : The widget that scrolls.
  This widget can only have one child. To lay out multiple children, let this widget's child be a widget such as Row, Column, or Stack, which have a children property, and then provide the children to that widget.

- `EdgeInsetsGeometry` `padding` : The amount of space by which to inset the child..

- `ScrollController` `controller` : An object that can be used to control the position to which this scroll view is scrolled. It can also be used to read the current position, set the initial position or jump to a particular position.

- `ScrollPhysics` `physics`: Determines the physics of a Scrollable widget. The most common scroll physics are `AlwaysScrollableScrollPhysics`, `BouncingScrollPhysics`, `NeverScrollableScrollPhysics`. To know more visit [Flutter Dev Website](https://api.flutter.dev/flutter/widgets/ScrollPhysics-class.html).

---

### VxScrollHorizontal

`VxScrollHorizontal` is a widget that can be used to create horizontal scroll behaviour in the application.

```dart
Widget build(BuildContext context) {
    return VxScrollHorizontal(
      physics: AlwaysScrollableScrollPhysics(),
      child: <Widget>[
        'First Text'.text.make(),
        'Second Text'.text.make()
      ].hStack(),
    );
```

#### Using Extension Method

```dart
Widget build(BuildContext context) {
    return [
        'First Text'.text.make(),
        'Second Text'.text.make()
      ].hStack().scrollHorizontal(),
    ;
```

> Above code creats a horizontal scrollable list with two widgets.

#### `VxScrollHorizontal` Constructor

```dart
const VxScrollHorizontal({
  Key key,
  this.controller,
  this.physics,
  this.padding,
  this.child,
}) : super(key: key)
```

#### `VxScrollHorizontal` Properties

- `Key` `key` : A Key is an identifier for Widgets, Elements and SemanticsNodes.
  A new widget will only be used to update an existing element if its key is the same as the key of the current widget associated with the element.

- `Widget` `child` : The widget that scrolls.
  This widget can only have one child. To lay out multiple children, let this widget's child be a widget such as Row, Column, or Stack, which have a children property, and then provide the children to that widget.

- `EdgeInsetsGeometry` `padding` : The amount of space by which to inset the child..

- `ScrollController` `controller` : An object that can be used to control the position to which this scroll view is scrolled. It can also be used to read the current position, set the initial position or jump to a particular position.

- `ScrollPhysics` `physics`: Determines the physics of a Scrollable widget. The most common scroll physics are `AlwaysScrollableScrollPhysics`, `BouncingScrollPhysics`, `NeverScrollableScrollPhysics`. To know more visit [Flutter Dev Website](https://api.flutter.dev/flutter/widgets/ScrollPhysics-class.html).

---
