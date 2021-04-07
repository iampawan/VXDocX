---
id: vxswiper
title: VxSwiper
---

### VelocityX gives you <b>VxSwiper</b> - A simple yet flexible way to add carousel view in your application.

:::important

## Video Tutorial

<iframe width="300" height="185" src="https://www.youtube.com/embed/5fdyEdMr9kc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
:::

## Features

- Auto Play
- Infinite Scroll
- Fast Scrolling
- Custom child widgets
- With extension method

<img src="https://im5.ezgif.com/tmp/ezgif-5-791d37e36f60.gif"/>

## Using VxSwiper

```dart
 VxSwiper(
    items: [1,2,3,4,5].map(index) {
      return "Item $index".text.white.make()
         .box.rounded.alignCenter.color(Vx.randomOpaqueColor).make()
         .p4();
    }).toList(),
)
```

## Using VxSwiper Builder

:::note
**This method will save memory by building items once it becomes necessary. This way they won't be built if they're not currently meant to be visible on screen.
It can be used to build different child item widgets related to content or by item index.**
:::

```dart
 VxSwiper.builder(
    itemCount: 10,
    height: 400,
    itemBuilder: (context, index) {
      return "Item $index".text.white.make()
         .box.rounded.alignCenter.color(Vx.randomOpaqueColor).make()
         .p4();
    },
)
```

## Params

```dart
 VxSwiper.builder(
    itemCount: 10,
    height: 400,
    aspectRatio: 16/9,
    viewportFraction: 0.8,
    initialPage: 0,
    enableInfiniteScroll: true,
    reverse: false,
    autoPlay: true,
    autoPlayInterval: Duration(seconds: 3),
    autoPlayAnimationDuration: Duration(milliseconds: 800),
    autoPlayCurve: Curves.fastOutSlowIn,
    enlargeCenterPage: true,
    isFastScrollingEnabled: false,
    onPageChanged: callbackFunction,
    scrollDirection: Axis.horizontal,
    itemBuilder: (context, index) {
      return "Item $index".text.white.make()
         .box.rounded.alignCenter.color(Vx.randomOpaqueColor).make()
         .p4();
    },
)
```

:::caution

**If you pass the `height` parameter, the `aspectRatio` parameter will be ignored.**
:::

## Using extension method `.swiper()`

```dart
List.generate(50,
   (index) => "Item $index".text.white.make()
   .box.rounded.alignCenter.color(Vx.randomOpaqueColor).make()
   .p4())
   .swiper(
     height: context.isMobile ? 200 : 400,
     enlargeCenterPage: true,
     onPageChanged: (index) {
       print(index);
     },
     isFastScrollingEnabled: true,
     scrollDirection:
         context.isMobile ? Axis.horizontal : Axis.horizontal)
```

## Properties

| Prop (Type)                          |           Default           |                                                                   Description |
| ------------------------------------ | :-------------------------: | ----------------------------------------------------------------------------: |
| height (double)                      |              0              |                  Set carousel height and overrides any existing `aspectRatio` |
| aspectRatio (double)                 |            16/9             |                       Aspect ratio is used if no `height` have been declared. |
| viewportFraction (double)            |             0.8             |                    The fraction of the viewport that each page should occupy. |
| initialPage (int)                    |              0              |                   The initial page to show when first creating the `VxSwiper` |
| realPage (int)                       |            10000            |                                            The actual index of the `PageView` |
| enableInfiniteScroll (bool)          |            true             |      Determines if swiper should loop infinitely or be limited to item length |
| reverse (bool)                       |            false            |                                    Reverse the order of items if set to true. |
| autoPlay (bool)                      |            false            |                                Enables auto play, sliding one page at a time. |
| autoPlayInterval (Duration)          |    Duration(seconds: 5)     |                            Sets Duration to determent the frequency of slides |
| autoPlayAnimationDuration (Duration) | Duration(milliseconds: 800) | The animation duration between two transitioning pages while in auto playback |
| autoPlayCurve (Curve)                |    Curves.fastOutSlowIn     |                                       Determines the animation curve physics. |
| pauseAutoPlayOnTouch (Duration)      |              -              |   Sets a timer on touch detected that pause the auto play with given duration |
| enlargeCenterPage (bool)             |            false            |              Determines if current page should be larger then the side images |
| onPageChanged (Function(int))        |              -              |                Called whenever the page in the center of the viewport changes |
| scrollPhysics (ScrollPhysics)        |              -              |         The physics for scrolling. Default to clamp if fast scrolling enabled |
| isFastScrollingEnabled (bool)        |            false            |         `isFastScrollingEnabled` can be used to scrolling fast the `PageView` |
| scrollDirection (Axis)               |       Axis.horizontal       |                                    he axis along which the page view scrolls. |
