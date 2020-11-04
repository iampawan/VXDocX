---
id: release-notes
title: Release Notes
sidebar_label: Release Notes
---

### **What's new in this version of VelocityX**

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
