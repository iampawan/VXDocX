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

> Below are some examples of differet text styles using the VelocityX text properties and widget.

<img src="https://i.imgur.com/txeFqLq.png" height="500"/>

#### You can use any string and convert it to a text widget.

```dart
{string}.text.make()

eg: 'Pawan'.text.make()

// It will produce a text with String as Pawan
```

#### You can use velocityx text with the Text widget itself.

```dart
TextWidget.text

eg: Text('pawan').text.red500.make()

// It will produce a text with String as pawan and color as red.
// It will also override any text property if you specify again.
```

#### You can use any string and convert it to a text widget.

```dart
{string}.text

eg: 'Pawan'.text.make()

//It will produce a text with String as Pawan
```

#### You can use velocityx text with the Text widget itself.

```dart
TextWidget.text

eg: Text('pawan').text.red500.make()

// It will produce a text with String as pawan and color as red.
// It will also override any text property if you specify again.
```

---

## Font Scale

VelocityX offers many predefined fontSizes as text properties

| Prop (Type) |            Desciption             |
| ----------- | :-------------------------------: |
| xs          |  Extra Small (scaleFactor 0.75)   |
| sm          |     Small (scaleFactor 0.875)     |
| base        |      Normal (scaleFactor 1)       |
| lg          |     Large (scaleFactor 1.125)     |
| xl          |  Extra Large (scaleFactor 1.25)   |
| xl2         |  2 Extra Large (scaleFactor 1.5)  |
| xl3         | 3 Extra Large (scaleFactor 1.875) |
| xl4         | 4 Extra Large (scaleFactor 2.25)  |
| xl5         |   5 Extra Large (scaleFactor 3)   |
| xl6         |   6 Extra Large (scaleFactor 4)   |

> Example

```dart
'Velocityx'.text.xl2.make();

//Sets the fontSize as 2 Extra Large
```

#### Set a custom font size

```dart
'VelocityX'.text.size(20).make();

// where 20 is the font size
```

---

## Font Weight

VelocityX offers many predefined font weights as text properties

| Prop (Type) |   Desciption    |
| ----------- | :-------------: |
| hairLine    | Font Weight 100 |
| thin        | Font Weight 200 |
| light       | Font Weight 300 |
| normal      | Font Weight 400 |
| medium      | Font Weight 500 |
| semiBold    | Font Weight 600 |
| bold        | Font Weight 700 |
| extraBold   | Font Weight 800 |
| extraBlack  | Font Weight 900 |

> Example

```dart
'Velocityx'.text.bold.make();

//Sets the fontweight as bold(w700)
```

#### Set a custom font weight

```dart
'Velocityx'.text.fontWeight(FontWeight.w600).make();

// Sets the font weight to w600
```

---

## Font Style

VelocityX offers predefined italic style as a text property

```dart
'Velocityx'.text.italic.make();
```

---

## Text Alignment

VelocityX offers many predefined text alignments as text properties

| Prop (Type) |    Desciption     |
| ----------- | :---------------: |
| center      | TextAlign.center  |
| start       |  TextAlign.start  |
| end         |   TextAlign.end   |
| justify     | TextAlign.justify |

> Example

```dart
'Velocityx'.text.center.make();

//Sets the alignment of the text as center
```

---

## Letter Spacing

VelocityX offers many predefined text spacing as text properties

| Prop (Type) |     Desciption      |
| ----------- | :-----------------: |
| tightest    | Letter Spacing -3.0 |
| tighter     | Letter Spacing -2.0 |
| tight       | Letter Spacing -1.0 |
| wide        | Letter Spacing 1.0  |
| wider       | Letter Spacing 2.0  |
| widest      | Letter Spacing 3.0  |

> Example

```dart
'Velocityx'.text.wide.make();

//Sets the letter spacing as 1.0 of the text

```

#### Set a custom letter spacing

```dart
'Velocityx'.text.letterSpacing(4.0).make();

// Sets the letterSpacing as 4.0
```

---

## Text Decoration

VelocityX offers many predefined text decorations as text properties

| Prop (Type) |         Desciption         |
| ----------- | :------------------------: |
| underline   |  TextDecoration.underline  |
| lineThrough | TextDecoration.lineThrough |
| overline    |  TextDecoration.overline   |

> Example

```dart
'Velocityx'.text.underline.make();

// Sets the text to undelined.
```

---

## Line Height

VelocityX offers many predefined line heights as text properties

| Prop (Type)   |    Desciption     |
| ------------- | :---------------: |
| heightTight   | Line Height 0.75  |
| heightSnug    | Line Height 0.875 |
| heightRelaxed | Line Height 1.25  |
| heightLoose   |  Line Height 1.5  |

> Example

```dart
'Velocityx'.text.heightSnug.make();

//Sets the line height as 0.875 of the text

```

#### Set a custom line height

```dart
'Velocityx'.text.lineHeight(4.0).make();

// Sets the line height as 4.0
```

---

## Text Utilities

VelocityX offers many predefined regular used utilities as text properties

| Prop (Type) |      Desciption      |
| ----------- | :------------------: |
| uppercase   | WELCOME TO VELOCITYX |
| lowercase   | welcome to velocityx |
| capitalize  | Welcome To Velocityx |
| hidePartial | **\*** To Velocityx  |

> Example

```dart
'Velocityx'.text.lowercase.make();

// Sets the text as lowercase - velocityx
```

---

# Using All Together

> Demo

```dart
'velocityx'.text.red500.xl2.bold.center.heightRelaxed.underline.wide.uppercase.make()

// Sets text color as red500
// Sets size as xl2
// Sets text to bold
// Sets text alignment to center
// Sets line height as heightRelaxed
// Sets text decoration as underline
// Sets text letter spacing as wide
// Sets text string as uppercase
```

---
