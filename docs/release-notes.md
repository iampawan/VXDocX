---
id: release-notes
title: Release Notes
sidebar_label: Release Notes
---

### **What's new in this version of VelocityX**

## [3.1.0] - May 23, 2021

- New Extensions - .shaderMask() and .safeArea()
- Added text theme support to textspan
- Gradient field exposed for VxSkeleton
- VxTextField now uses TextFormField
- Examples updated
- Bug Fixes

### VxNavigator 2.0 Updates

- Regex support added for URIs
- VxRoutePage for transitions
- VxObserver added for checking route changes
- Bug Fixes

### VxState Updates

- [Breaking] VxBuilder & VxConsumer now returns store.
- Store can be directly accessed as MyStore store - VxState.store
- Status for all async operations
- Bug Fixes

## [3.0.0] - April 19, 2021

- New Widget - VxPinView
- New Dialogs - VxDialogs
- New BottomSheets - VxBottomSheet
- New Preview Widget - VxPreview
- New Drawers - VxDrawer
- Added cursor and other props to VxTextField
- Bug Fixes for VxTextField
- Breaking - Desktop support added for VxPlatform
- Minor Bug Fixes
- Examples updated

## [2.6.1] - April 01, 2021

- Fixed issue with ZStack.
- Fixed issue with isEmptyOrNull String.

## [2.6.0] - March 16, 2021

- VxNavigator (Navigator 2.0) support added.
- AStack widget added.

## [2.5.0] - March 13, 2021

- VxAnimator added.
- VxLayout added for responsiveness.
- Direct Text Themes support
- Extended & Improved Color Pallete
- New Demo Added
- Added more gradient options
- size percentage widget added for sizedbox and container
- Flat button changed to Material button
- Fixed nullOK issues
- Added more clippers
- Added align() method for text and richtext
- Improvement in textfield
- Added VxState
- Minor bug fixes and improvements

## [1.4.1] - February 12, 2021

- Enhancements

## [1.4.0] - February 10, 2021

- Fixed nullOK issues
- Added more clippers
- Added align() method for text and richtext
- Improvement in textfield
- Added VxState
- Minor bug fixes and improvements

## [1.3.1] & [2.3.1-nullsafety.0] - Decemeber 29, 2020

- Introducing VxShapes with ext: VxCircle -> .circle(), VxEllipse -> .ellipse(), VxCapsule -> .capsule(), VxContinuousRectangle -> .continuousRectangle(), VxBevel -> .bevel(), VxTriangle -> .triangle() and VxTicket -> .ticket()
- VxPlatform added to create a common widget for different platforms.
- VxAnimator added exposing the animator package (Not available in 2.3.0-nullsafety.0).
- Added widget support to badge and new positions.
- Added isIntrinsic prop for some widgets like DataTable which doesn't support layout builder.
- Vx.getColorFromHex() added to convert hex to color.
- Label Style and TextStyle added to the VxTextField.
- Fixed shadow issues and introduced more shadows for box/container or similar widgets.
- More Extensions - context : screenDensity, string: isNumber(),isLetter(), isSymbol(), isCreditCardValid(), bool: toggle(), Iterable: sumBy, sumByDouble, averageBy, filter and more.
- Widget Extensions - stroke(), fractionalBox(), px(val), py(val), rotate60(), rotateN60(), clipHalf(), aspectRatio(), and positioned().
- withAnimation returns AnimationController to control and dispose it manually.
- Many Bug Fixes.

## [1.0.1] - November 21, 2020

- Added isFastScrollingEnabled to fast scroll the VxSwiper or swiper ext.
- Added .fontWeight method for texts to set custom font weight.
- Fixed an issue with compilation with some of the flutter versions.
- Fixed an issue with VxScrollVertical and VxScrollHorizontal where child was not working.
- Minor bug fixes.

## [1.0.0] - November 03, 2020

- Added VxTimeline widget.
- Added VxSkeleton widget with skeleton extension.
- Added VxMarquee widget with marquee extension.
- Added VxBadge widget with badge extension.
- Added VxToast widget with showToast & showLoading context extension.
- Extensions for ScrollController added.
- withAnimation & withRepeatAnimation added.
- onTap, onInkTap series added for more ease.
- VxTextField added.
- VxAnimatedHeight added.
- Offset, preferredSize, sliverBoxAdapter extensions added.
- vxPreviewRoute added along with materialRoute & cupertinoRoute extensions.
- expand,backgroundColor,cornerRadius,keepAlive,onFeedBackTap extensions added.
- Mouse Region extension methods added.
- Material extension added.

## [0.5.0] - October 11, 2020

- Compatible with latest flutter versions.
- numCurrency and numCurrencyWithLocale() added.
- circularAssetImage, circularNetworImage, circularAssetShadowImage added to string extension methods.
- orientation prop added to context extensions.
- randomColor, randomOpaqueColor and randomPrimaryColor added to Vx.
- VxPopupMenu widget and popupMenu ext Added.
- Added timeAgo ext for DateTime.
- New extension methods added for Context - mediaquery, theme, navigator, form, scaffold and overlay etc.
- New extension methods added for Icon.
- New props for VxBox - withConstraints(), foregroundDecoration.
- New props for VxText family - softWrap(), minFontSize(), maxFontSize(),stepGranularity(),overflowReplacement(),overflow, strutStyle(), wrapWords(), wordSpacing() and textBaseLine(),
- Documentations Improved.
- [BREAKING] Overflow has been removed and clip has been added with default as Clipbehavior.none. It can affect all the widgets which uses Stack or ZStack.
- [BREAKING] ScrollVertical and ScrollHorizontal has been renamed to VxScrollVertical and VxScrollHorizontal to maintain consistency.

## [0.4.1] - July 15, 2020

- Card color issue fixed.
- HStack and VStack now has cross alignment as center by default.
- Flags added to check debug, release, profile and web mode using Vx class.

## [0.4.0] - May 18, 2020

- Uses latest material design text specs.
- Shadow color method added to card.
- New transform extensions - flipX, flipY, flipHorizontal, flipVertical, customScale
- New theme extensions - lightTheme, darkTheme, customTheme
- New navigator extensions - nextPage, nextReplacementPage, nextAndRemoveUntilPage, pop.
- Bug fixes.
- Readme updated.
