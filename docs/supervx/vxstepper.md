---
id: vxstepper
title: VxStepper
---

> VelocityX gives you <b>VxStepper</b> - A control for incrementing or decrementing a value along with the input field.

> By default, pressing a stepper’s button increments or decrements the stepper’s value repeatedly. The rate of change depends on the step counter. User can also set value through input field. To turn off this behavior, set the disableInput property to true.

:::important

## Video Tutorial

<iframe width="300" height="185" src="https://www.youtube.com/embed/2w5PXSqWDcs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
:::

:::note
The default value is 0 and the maximum value is 999 and the minimum value is 0 by default. The max should be greater than or equal to min and step should be greater than or equal to 1.
:::

## Using VxStepper

```dart
const VxStepper()
```

## Using the VxStepper value

```dart
   VxStepper(onChange: (value) {
          print(value);
    })
```

---

<img src="https://i.imgur.com/bpeLH4D.gif" alt="Stepper sample" height="500"/>

:::tip

This widget can be very useful specially for e-commerce applications.

:::

## Properties

Colons can be used to align columns.

| Prop (Type)               | Default |                                           Description |
| ------------------------- | :-----: | ----------------------------------------------------: |
| defaultValue (int)        |    0    |                                  Value of the stepper |
| min (int)                 |    0    |                                 Minimum allowed value |
| max (int)                 |   999   |                                 Maximum allowed value |
| step (int)                |    1    |                                        Update counter |
| disableInput (bool)       |  false  |                            For disabling manual input |
| onChange (ValueChanged)   |         |                          Callback for the final value |
| inputBoxColor (Color)     |         |               Sets color of the rectangular input box |
| inputTextColor (Color)    |         |   Sets color of the text in the rectangular input box |
| actionButtonColor (Color) |         |             Sets color of the circular action buttons |
| actionIconColor (Color)   |         | Sets color of the icon inside circular action buttons |
