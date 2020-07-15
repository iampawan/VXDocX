---
id: text
title: Text
---

VelocityX provides text with super powers.

:::important
When you are done with the text properties then use .make() to complete it as a widget.
:::

:::note
Text, SelectableText and RichText works the same just replace text with selectableText or richText.
:::

> You can use any string and convert it to a text widget.

```dart
{string}.text\n\neg: 'Pawan'.text.make()

It will produce a text with String as Pawan
```

> You can use velocityx text with the Text widget itself.

```dart
TextWidget.text

eg: Text('pawan').text.red500.make()

It will produce a text with String as pawan and color as red.
It will also override any text property if you specify again.
```

## Useful Methods
