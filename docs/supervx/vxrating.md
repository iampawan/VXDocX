---
id: vxrating
title: VxRating
---

### VelocityX gives you <b>VxRating</b> - To show ratings to the user and the user can change it too. Fully customizable.

> By default.

:::important

## Video Tutorial

<iframe width="300" height="185" src="https://www.youtube.com/embed/bv5megfxLpU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
:::

:::note
The default rating count is 5 and the maximum rating is 10 (including half ratings).
:::

## Using VxRating

```dart
VxRating(
    onRatingUpdate: (value) {},
)
```

### Using the VxRating properties. Use onRatingUpdate() to get the selected value.

```dart
  VxRating(
    onRatingUpdate: (value) {},
    count: 5,
    selectionColor: Colors.teal,
    size: 30,
)
```

### Sample Output

<img src="https://i.imgur.com/zRhN3cL.png" alt="Rating sample" height="100"/>

---

:::tip

**Use default icon for better quality.**

:::

## Properties

| Prop (Type)            |   Default   |                                           Description |
| ---------------------- | :---------: | ----------------------------------------------------: |
| maxRating (double)     |     10      |                 The maximum rating which can be given |
| count (int)            |      5      |                                           Stars count |
| value (int)            |     10      |                              Currently selected value |
| size (double)          |     20      |                                Size of the icon/image |
| padding (double)       |      0      |                 To give space between the stars/icons |
| normalImage (dynamic)  |             | To provide a custom image of star/rating (unselected) |
| selectImage (dynamic)  |             |   To provide a custom image of star/rating (selected) |
| normalColor (Color)    | Colors.grey |                          Unselected color of the icon |
| selectionColor (Color) | Colors.red  |                            Selected color of the icon |
| isSelectable (bool)    |    true     |                    If the rating is selectable or not |
| stepInt (int)          |    false    |                         true if Half star not allowed |
