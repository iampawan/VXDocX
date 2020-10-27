---
id: context
title: BuildContext Extensions
---

VelocityX gives you powerful extensions for BuildContext.

## Navigation

**`navigation` extension for getting NavigatorState**

```dart
 context.navigation

 It is equivalent to Navigator.of(context)
```

---

### Next Page

**`nextPage` extension for going to next page**

:::note
It takes a page widget and an optional maintainState prop. By default it uses MaterialPageRoute.
:::

```dart
 context.nextPage(Widget page, {bool maintainState = true})

 Eg:  context.nextPage(HomePage())

```

---

### Next Replacement Page

**`nextReplacementPage` extension for going to next page as a replacement**

:::note
It takes a page widget and an optional maintainState prop. By default it uses MaterialPageRoute.
:::

```dart
 context.nextReplacementPage(Widget page, {bool maintainState = true})

 Eg:  context.nextReplacementPage(HomePage())

```

---

### Next And Remove Until Page

**`nextAndRemoveUntilPage` extension for going to next page and remove everything in stack**

:::note
It takes a page widget. By default it uses MaterialPageRoute.
:::

```dart
 context.nextAndRemoveUntilPage(Widget page)

 Eg:  context.nextAndRemoveUntilPage(HomePage())

```

---

### Pop Page

**`pop` extension for going to next page and remove everything in stack**

:::note
It just pops the current page.
:::

```dart
 context.pop()

```

---

## Theme

**`theme` extension for getting Theme**

```dart
 context.theme

 It is equivalent to Theme.of(context)
```

### TextTheme

**`textTheme` extension for getting Text Theme**

```dart
 context.textTheme

 It is equivalent to Theme.of(context).textTheme
```

**`captionStyle` extension for getting caption styled Text**

```dart
 context.captionStyle

 It is equivalent to Theme.of(context).textTheme.caption
```

:::note
As per our survey, this is a very much used styling.
:::

---

## [Check Responsive Props Using BuildContext Here](/responsive.md)
