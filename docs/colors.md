---
id: colors
slug: colors
title: Colors
---

VelocityX includes a generous palette of great-looking, well-balanced colors that are perfect for prototyping or for kicking off a brand new project.

:::tip
You can either use the color directly or get the hex value
:::

> To get a color

```dart
Vx.{colorname}{number}

eg: Vx.blue900
```

> To get a hexColor

```dart
Vx.{colorname}Hex{number}

eg: Vx.blueHex900
```

> To use a text color

```dart
.{colorname}{number}

 eg: text.blue900
```

> To set a text color

```dart
.color({yourcolor})

 eg: text.color(Colors.blue)
```

> To use a box(container) color

```dart
.{colorname}{number}

 eg: box.blue900
```

> To set a box(container) color

```dart
.color({yourcolor})

 eg: box.color(Colors.blue)
```

---

## Available Utility Methods

> Get color from the hex value

```dart
Color myColor = Vx.hexToColor(hexCode);
```

> Get int color from the hex value

```dart
int myColor = Vx.getColorFromHex(hexCode);
```

> Get Random Non-Primary Color

```dart
Color myColor = Vx.randomColor;
```

> Get Random Non-Primary Color

```dart
Color myColor = Vx.randomPrimaryColor;
```

> Get Random Non-Primary Opaque Color

```dart
Color myColor = Vx.randomOpaqueColor;
```

---

## Available Colors

### Gray

- ![#F7FAFC](https://via.placeholder.com/35/F7FAFC/000000?text=+) &nbsp; `gray100`
- ![#EDF2F7](https://via.placeholder.com/35/EDF2F7/000000?text=+) &nbsp; `gray200`
- ![#E2E8F0](https://via.placeholder.com/35/E2E8F0/000000?text=+) &nbsp; `gray300`
- ![#CBD5E0](https://via.placeholder.com/35/CBD5E0/000000?text=+) &nbsp; `gray400`
- ![#A0AEC0](https://via.placeholder.com/35/A0AEC0/000000?text=+) &nbsp; `gray500`
- ![#718096](https://via.placeholder.com/35/718096/000000?text=+) &nbsp; `gray600`
- ![#4A5568](https://via.placeholder.com/35/4A5568/000000?text=+) &nbsp; `gray700`
- ![#2D3748](https://via.placeholder.com/35/2D3748/000000?text=+) &nbsp; `gray800`
- ![#1A202C](https://via.placeholder.com/35/1A202C/000000?text=+) &nbsp; `gray900`

---

### Red

- ![#FFF5F5](https://via.placeholder.com/35/FFF5F5/000000?text=+) &nbsp; `red100`
- ![#FED7D7](https://via.placeholder.com/35/FED7D7/000000?text=+) &nbsp; `red200`
- ![#FEB2B2](https://via.placeholder.com/35/FEB2B2/000000?text=+) &nbsp; `red300`
- ![#FC8181](https://via.placeholder.com/35/FC8181/000000?text=+) &nbsp; `red400`
- ![#F56565](https://via.placeholder.com/35/F56565/000000?text=+) &nbsp; `red500`
- ![#E53E3E](https://via.placeholder.com/35/E53E3E/000000?text=+) &nbsp; `red600`
- ![#C53030](https://via.placeholder.com/35/C53030/000000?text=+) &nbsp; `red700`
- ![#9B2C2C](https://via.placeholder.com/35/9B2C2C/000000?text=+) &nbsp; `red800`
- ![#742A2A](https://via.placeholder.com/35/742A2A/000000?text=+) &nbsp; `red900`

---

### Pink

- ![#FFF5F7](https://via.placeholder.com/35/FFF5F7/000000?text=+) &nbsp; `pink100`
- ![#FED7E2](https://via.placeholder.com/35/FED7E2/000000?text=+) &nbsp; `pink200`
- ![#FBB6CE](https://via.placeholder.com/35/FBB6CE/000000?text=+) &nbsp; `pink300`
- ![#F687B3](https://via.placeholder.com/35/F687B3/000000?text=+) &nbsp; `pink400`
- ![#ED64A6](https://via.placeholder.com/35/ED64A6/000000?text=+) &nbsp; `pink500`
- ![#D53F8C](https://via.placeholder.com/35/D53F8C/000000?text=+) &nbsp; `pink600`
- ![#B83280](https://via.placeholder.com/35/B83280/000000?text=+) &nbsp; `pink700`
- ![#97266D](https://via.placeholder.com/35/97266D/000000?text=+) &nbsp; `pink800`
- ![#702459](https://via.placeholder.com/35/702459/000000?text=+) &nbsp; `pink900`

---

### Orange

- ![#FFFAF0](https://via.placeholder.com/35/FFFAF0/000000?text=+) &nbsp; `orange100`
- ![#FEEBC8](https://via.placeholder.com/35/FEEBC8/000000?text=+) &nbsp; `orange200`
- ![#FBD38D](https://via.placeholder.com/35/FBD38D/000000?text=+) &nbsp; `orange300`
- ![#F6AD55](https://via.placeholder.com/35/F6AD55/000000?text=+) &nbsp; `orange400`
- ![#ED8936](https://via.placeholder.com/35/ED8936/000000?text=+) &nbsp; `orange500`
- ![#DD6B20](https://via.placeholder.com/35/DD6B20/000000?text=+) &nbsp; `orange600`
- ![#C05621](https://via.placeholder.com/35/C05621/000000?text=+) &nbsp; `orange700`
- ![#9C4221](https://via.placeholder.com/35/9C4221/000000?text=+) &nbsp; `orange800`
- ![#7B341E](https://via.placeholder.com/35/7B341E/000000?text=+) &nbsp; `orange900`

---

### Yellow

- ![#FFFFF0](https://via.placeholder.com/35/FFFFF0/000000?text=+) &nbsp; `yellow100`
- ![#FEFCBF](https://via.placeholder.com/35/FEFCBF/000000?text=+) &nbsp; `yellow200`
- ![#FAF089](https://via.placeholder.com/35/FAF089/000000?text=+) &nbsp; `yellow300`
- ![#F6E05E](https://via.placeholder.com/35/F6E05E/000000?text=+) &nbsp; `yellow400`
- ![#ECC94B](https://via.placeholder.com/35/ECC94B/000000?text=+) &nbsp; `yellow500`
- ![#D69E2E](https://via.placeholder.com/35/D69E2E/000000?text=+) &nbsp; `yellow600`
- ![#B7791F](https://via.placeholder.com/35/B7791F/000000?text=+) &nbsp; `yellow700`
- ![#975A16](https://via.placeholder.com/35/975A16/000000?text=+) &nbsp; `yellow800`
- ![#744210](https://via.placeholder.com/35/744210/000000?text=+) &nbsp; `yellow900`

---

### Green

- ![#F0FFF4](https://via.placeholder.com/35/F0FFF4/000000?text=+) &nbsp; `green100`
- ![#C6F6D5](https://via.placeholder.com/35/C6F6D5/000000?text=+) &nbsp; `green200`
- ![#9AE6B4](https://via.placeholder.com/35/9AE6B4/000000?text=+) &nbsp; `green300`
- ![#68D391](https://via.placeholder.com/35/68D391/000000?text=+) &nbsp; `green400`
- ![#48BB78](https://via.placeholder.com/35/48BB78/000000?text=+) &nbsp; `green500`
- ![#38A169](https://via.placeholder.com/35/38A169/000000?text=+) &nbsp; `green600`
- ![#2F855A](https://via.placeholder.com/35/2F855A/000000?text=+) &nbsp; `green700`
- ![#276749](https://via.placeholder.com/35/276749/000000?text=+) &nbsp; `green800`
- ![#22543D](https://via.placeholder.com/35/22543D/000000?text=+) &nbsp; `green900`

---

### Teal

- ![#E6FFFA](https://via.placeholder.com/35/E6FFFA/000000?text=+) &nbsp; `teal100`
- ![#B2F5EA](https://via.placeholder.com/35/B2F5EA/000000?text=+) &nbsp; `teal200`
- ![#81E6D9](https://via.placeholder.com/35/81E6D9/000000?text=+) &nbsp; `teal300`
- ![#4FD1C5](https://via.placeholder.com/35/4FD1C5/000000?text=+) &nbsp; `teal400`
- ![#38B2AC](https://via.placeholder.com/35/38B2AC/000000?text=+) &nbsp; `teal500`
- ![#319795](https://via.placeholder.com/35/319795/000000?text=+) &nbsp; `teal600`
- ![#2C7A7B](https://via.placeholder.com/35/2C7A7B/000000?text=+) &nbsp; `teal700`
- ![#285E61](https://via.placeholder.com/35/285E61/000000?text=+) &nbsp; `teal800`
- ![#234E52](https://via.placeholder.com/35/234E52/000000?text=+) &nbsp; `teal900`

---

### Blue

- ![#EBF8FF](https://via.placeholder.com/35/EBF8FF/000000?text=+) &nbsp; `blue100`
- ![#BEE3F8](https://via.placeholder.com/35/BEE3F8/000000?text=+) &nbsp; `blue200`
- ![#90CDF4](https://via.placeholder.com/35/90CDF4/000000?text=+) &nbsp; `blue300`
- ![#63B3ED](https://via.placeholder.com/35/63B3ED/000000?text=+) &nbsp; `blue400`
- ![#4299E1](https://via.placeholder.com/35/4299E1/000000?text=+) &nbsp; `blue500`
- ![#3182CE](https://via.placeholder.com/35/3182CE/000000?text=+) &nbsp; `blue600`
- ![#2B6CB0](https://via.placeholder.com/35/2B6CB0/000000?text=+) &nbsp; `blue700`
- ![#2C5282](https://via.placeholder.com/35/2C5282/000000?text=+) &nbsp; `blue800`
- ![#2A4365](https://via.placeholder.com/35/2A4365/000000?text=+) &nbsp; `blue900`

---

### Indigo

- ![#EBF4FF](https://via.placeholder.com/35/EBF4FF/000000?text=+) &nbsp; `indigo100`
- ![#C3DAFE](https://via.placeholder.com/35/C3DAFE/000000?text=+) &nbsp; `indigo200`
- ![#A3BFFA](https://via.placeholder.com/35/A3BFFA/000000?text=+) &nbsp; `indigo300`
- ![#7F9CF5](https://via.placeholder.com/35/7F9CF5/000000?text=+) &nbsp; `indigo400`
- ![#667EEA](https://via.placeholder.com/35/667EEA/000000?text=+) &nbsp; `indigo500`
- ![#5A67D8](https://via.placeholder.com/35/5A67D8/000000?text=+) &nbsp; `indigo600`
- ![#4C51BF](https://via.placeholder.com/35/4C51BF/000000?text=+) &nbsp; `indigo700`
- ![#434190](https://via.placeholder.com/35/434190/000000?text=+) &nbsp; `indigo800`
- ![#3C366B](https://via.placeholder.com/35/3C366B/000000?text=+) &nbsp; `indigo900`

---

### Purple

- ![#FAF5FF](https://via.placeholder.com/35/FAF5FF/000000?text=+) &nbsp; `purple100`
- ![#E9D8FD](https://via.placeholder.com/35/E9D8FD/000000?text=+) &nbsp; `purple200`
- ![#D6BCFA](https://via.placeholder.com/35/D6BCFA/000000?text=+) &nbsp; `purple300`
- ![#B794F4](https://via.placeholder.com/35/B794F4/000000?text=+) &nbsp; `purple400`
- ![#9F7AEA](https://via.placeholder.com/35/9F7AEA/000000?text=+) &nbsp; `purple500`
- ![#805AD5](https://via.placeholder.com/35/805AD5/000000?text=+) &nbsp; `purple600`
- ![#6B46C1](https://via.placeholder.com/35/6B46C1/000000?text=+) &nbsp; `purple700`
- ![#553C9A](https://via.placeholder.com/35/553C9A/000000?text=+) &nbsp; `purple800`
- ![#44337A](https://via.placeholder.com/35/44337A/000000?text=+) &nbsp; `purple900`

---

## **Checkout the [Color Palette](https://tailwindcss.com/docs/customizing-colors#default-color-palette) here **
