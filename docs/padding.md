---
id: padding
title: Padding
---

VelocityX includes utilities for controlling a widget's padding..

:::tip
You can either use this or padding widget,
:::

---

## Padding All Sides

To give padding from all the directions.

| Vx     |   Properties   |            Flutter |
| ------ | :------------: | -----------------: |
| .p0()  | padding: 0px;  |  EdgeInsets.all(0) |
| .p1()  | padding: 1px;  |  EdgeInsets.all(1) |
| .p2()  | padding: 2px;  |  EdgeInsets.all(2) |
| .p4()  | padding: 4px;  |  EdgeInsets.all(4) |
| .p8()  | padding: 8px;  |  EdgeInsets.all(8) |
| .p12() | padding: 12px; | EdgeInsets.all(12) |
| .p16() | padding: 16px; | EdgeInsets.all(16) |
| .p20() | padding: 20px; | EdgeInsets.all(20) |
| .p24() | padding: 24px; | EdgeInsets.all(24) |
| .p32() | padding: 32px; | EdgeInsets.all(32) |
| .p64() | padding: 64px; | EdgeInsets.all(64) |

## Padding Horizontally

To give padding from left and right directions.

| Vx      |                Properties                |                              Flutter |
| ------- | :--------------------------------------: | -----------------------------------: |
| .px0()  |  padding-right: 0px; padding-left: 0px;  |   EdgeInsets.symmetric(horizontal:0) |
| .px1()  |  padding-right: 1px; padding-left: 1px;  |   EdgeInsets.symmetric(horizontal:1) |
| .px2()  |  padding-right: 2px; padding-left: 2px;  |   EdgeInsets.symmetric(horizontal:2) |
| .px4()  |  padding-right: 4px; padding-left: 4px;  |   EdgeInsets.symmetric(horizontal:4) |
| .px8()  |  padding-right: 8px; padding-left: 8px;  |   EdgeInsets.symmetric(horizontal:8) |
| .px12() | padding-right: 12px; padding-left: 12px; | EdgeInsets.asymmetric(horizontal:12) |
| .px16() | padding-right: 16px; padding-left: 16px; | EdgeInsets.asymmetric(horizontal:16) |
| .px20() | padding-right: 20px; padding-left: 20px; | EdgeInsets.asymmetric(horizontal:20) |
| .px24() | padding-right: 24px; padding-left: 24px; | EdgeInsets.asymmetric(horizontal:24) |
| .px32() | padding-right: 32px; padding-left: 32px; | EdgeInsets.asymmetric(horizontal:32) |
| .px64() | padding-right: 64px; padding-left: 64px; | EdgeInsets.asymmetric(horizontal:64) |

## Padding Vertically

To give padding from top and bottom directions.

| Vx      |                Properties                |                           Flutter |
| ------- | :--------------------------------------: | --------------------------------: |
| .py0()  |  padding-top: 0px; padding-bottom: 0px;  |  EdgeInsets.symmetric(vertical:0) |
| .py1()  |  padding-top: 1px; padding-bottom: 1px;  |  EdgeInsets.symmetric(vertical:1) |
| .py2()  |  padding-top: 2px; padding-bottom: 2px;  |  EdgeInsets.symmetric(vertical:2) |
| .py4()  |  padding-top: 4px; padding-bottom: 4px;  |  EdgeInsets.symmetric(vertical:4) |
| .py8()  |  padding-top: 8px; padding-bottom: 8px;  |  EdgeInsets.symmetric(vertical:8) |
| .py12() | padding-top: 12px; padding-bottom: 12px; | EdgeInsets.symmetric(vertical:12) |
| .py16() | padding-top: 16px; padding-bottom: 16px; | EdgeInsets.symmetric(vertical:16) |
| .py20() | padding-top: 20px; padding-bottom: 20px; | EdgeInsets.symmetric(vertical:20) |
| .py24() | padding-top: 24px; padding-bottom: 24px; | EdgeInsets.symmetric(vertical:24) |
| .py32() | padding-top: 32px; padding-bottom: 32px; | EdgeInsets.symmetric(vertical:32) |
| .py64() | padding-top: 64px; padding-bottom: 64px; | EdgeInsets.symmetric(vertical:64) |

---

## Custom Padding from all directions

```dart
anywidget.p({number})

eg: Text().p(10)

It will give 10px paddings from all directions.
```

## Custom Padding from left, top, right & bottom

```dart
anywidget.pLTRB({l,t,r,b})

eg: Text().pLTRB(1,2,3,4)

It will give 1px left, 2px top, 3px right, 4px bottom paddings.
```

## Custom Padding symmetrically

```dart
anywidget.pSymmetric(v:{number},h:{number})

eg: Text().pSymmetric(v:8,h:16)

It will give 8px vertical and 16px horizontal paddings.
```

## Custom Padding in only specified directions

```dart
anywidget.pOnly({sides}:{number})

eg: Text().pOnly(left:8,top:16)

It will give 8px left and 16px top paddings.
```

## To pad a widget from all directions

```dart
anywidget.p{number}()

eg: Text().p8()

It will give 8px paddings from all directions.
```

## Padding inside a box(container)

```dart
box.p{number}

eg: box.p12.make()

It will give 12px padding inside the container.
Similarly you can use all other padding methods with this.
```

---


