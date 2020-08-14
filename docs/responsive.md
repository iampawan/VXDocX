---
id: responsive
title: Responsive Layout
---

VelocityX gives you everything to help you in creating responsive layouts.

:::tip

- You can either use BuildContext to access widths & heights or exclusive velocityx widgets.

- VelocityX offers two main widgets for responsiveness - VxDevice (Mobile/Web) and VxResponsive (All Devices)

:::

## Using BuildContext

**`isLandscape` to check if the orientation is landscape or portrait**

```dart
 context.isLandscape

 Eg Output - false
```

---

#### Breakpoints based on the guidelines in [Material Guidelines](https://material.io/guidelines/layout/responsive-ui.html)

**`mdColumns` to get responsive columns**

```dart
 context.mdColumns

 Eg Output - 4
```

---

**`mdGutter` to get responsive gutters**

```dart
 context.mdGutter

 Eg Output - 16.0
```

---

**`mdDeviceType` to get check device type (Handset, tablet)**

```dart
 context.mdDeviceType

 Eg Output - MobileDeviceType.handset
```

:::note
Note that this is based exclusively on the dimensions of the device and
not on the presence of a phone.
:::

---

**`mdDeviceSize` to get check device size (small, medium, large)**

```dart
 context.mdDeviceSize

 Eg Output - MobileDeviceSize.small
```

:::note
Symbolic sizes of mobile devices.
Note that the ranges are different depending on the [MobileDeviceType] of the device. Note also that only handsets can be [medium].
:::

---

**`mdWindowSize` to get check window size (xsmall, small, medium, large, xlarge)**

```dart
 context.mdWindowSize

 Eg Output - MobileWindowSize.xsmall
```

:::note
Symbolic window sizes of mobile devices.
:::

---

**`isMobile` to get check if the device is a mobile**

```dart
 context.isMobile

 Eg Output - true
```

:::note
Mostly used as a boolean to check if the device is a mobile (Android & iOS)
:::

---

## BuildContext for MediaQuery extensions

**`mq` to access mediaquery**

```dart
 context.mq
```

:::note
It is equivalent to MediaQuery.of(context)
:::

---

**`screenWidth` `screenHeight` to access screen width & height using MQ**

```dart
 context.screenWidth

 Eg Output - 410.26

 context.screenHeight

 Eg Output - 520.10

```

---

**`percentWidth` `percentHeight` to access screen width & height as a percentage using MQ**

```dart
 context.percentWidth * 20

 Eg Output - Returns 20 percent of width.

 context.percentHeight * 80

 Eg Output - Returns 80 percent of height.

```

---

**`safePercentWidth` `safePercentHeight` to access screen width & height as a percentage considering safe area using MQ**

```dart
 context.safePercentWidth * 20

 Eg Output - Returns 20 percent of width considering safe area.

 context.safePercentHeight * 80

 Eg Output - Returns 80 percent of height considering safe area.

```

---

## Using VelocityX Widgets

### VxDevice

:::tip
Use VxDevice when you just have to deal with Mobile & Web. Works great & easy to use but less control over sizing.
In case, if you want more options based on window size, use [VxResponsive]
:::

** You can specify two widgets depends on the screen size [mobile] and [web]. They must not be null **

```dart
VxDevice(mobile: Text("Hi Mobile"), web: Text("Hi Web"))
```

---

### VxResponsive

:::tip
VelocityResponsive widget can be used for making responsive apps based on different window sizes.
It offers more control over sizing.
You can specify multiple widgets depends on the screen size like [xsmall], [small], [medium],[large],
& [xlarge].

In case, if you want less options (just care about mobile & web), use [VxDevice]
:::

** The [fallback] must not be null. It will replace the non specified property for eg: medium **

```dart
VxResponsive(
          xsmall: Text("Hi Extra Small"),
          small: Text("Hi Small"),
          medium: Text("Hi Medium"),
          large: Text("Hi Large"),
          xlarge: Text("Hi Extra Large"),
          fallback: Text("Hi Nothing Specified"),
        )
```

---

## [Video Tutorial](https://youtu.be/0GjsJEF9MaA)
