---
title: CSS Flex 弹性盒子布局基本语法
url: css-flex-box-layout-basic-grammar
categories:
  - css
tags:
  - css
  - html
  - flex
  - 弹性布局
date: 2019-10-18 10:57:31
cover:
---

**[CSS 弹性盒子布局（CSS Flexible Box Layout）](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Flexible_Box_Layout)**是 CSS 的模块之一，定义了一种针对用户界面设计而优化的 CSS 盒子模型。在弹性布局模型中，弹性容器的子元素可以在任何方向上排布，也可以“弹性伸缩”其尺寸，既可以增加尺寸以填满未使用的空间，也可以收缩尺寸以避免父元素溢出。子元素的水平对齐和垂直对齐都能很方便的进行操控。

<!-- more -->

## 基本概念

![CSS Flex Container](/assets/images/css/css-flex-container.png 'CSS Flex 容器模型')

采用 Flex 布局的元素，称为 Flex 容器（flex-container)，容器中的直系子元素就会成变 Flex 元素（flex-item）。

Flex 容器默认存在两根轴：水平的主轴（main-axis）和垂直的交叉轴（cross-axis），主轴的起始位置称为 main-start，结束位置称为 main-end；同样地，交叉轴的起始和结束位置分别称为：cross-start、cross-end。

容器内单个元素的宽度（占据的主轴空间）称为 main-size，高度（占据的交叉轴空间）称为 cross-size。

## flex 容器及属性

### 设置 flex 容器

任何一个容器都可以设置为 Flex 布局：

```css
.container {
  display: flex;
}
```

行内元素使用 Flex 布局：

```css
.container {
  display: inline-flex;
}
```

{% note warn %}
设为 Flex 布局以后，子元素的`float`、`clear`和`vertical-align`属性将失效。
{% endnote %}

### flex-direction

`flex-direction` 通过设置容器主轴来定义元素的排列方向，有四个值：

```css
.container {
  flex-direction: row | row-reverse | column | column-reverse;
}
```

![flex-direction](/assets/images/css/container-flex-direction.png 'flex-direction 属性')

- row（默认值）：水平方向，起点在左端
- row-reverse：水平方向，起点在右端
- column：垂直方向，起点在上方
- columm-reverse：垂直方向，起点在下方

### flex-wrap

`flex-wrap` 控制容器内元素如何换行，有三个值：

```css
.container {
  flex-direction: nowrap | wrap | wrap-reverse;
}
```

- nowrap（默认值）：不换行
- wrap：换行，第一行在上方
- wrap-reverse：换行，第一行在下方

### flex-flow

`flex-flow`属性是`flex-direction`属性和`flex-wrap`属性的简写形式，默认值为`row nowrap`：

```css
.container {
  flex-flow: [flex-direction] || [flex-wrap];
}
```

### justify-content

`justify-content` 定义元素在主轴上的对齐方式，有五个值：

```css
.container {
  justify-content: flex-start | flex-end | center | space-between | space-around;
}
```

![justify-content](/assets/images/css/container-justify-content.png 'justify-content 属性')

- flex-start（默认值）：对齐主轴开始端（main-start）
- flex-end：对齐主轴结束端（main-end）
- center：沿主轴居中对齐
- space-between：沿主轴两端对齐，项目之间的间隔都相等
- space-around：每个元素两侧的间隔相等

{% note warn %}
`space-around` 会为第一个元素和最后一个元素与容器边框间设置间隔，因此相邻元素间的间隔比元素与容器边框间的间隔大一倍。
{% endnote %}

### align-items

`align-items` 定义元素在交叉轴上的对齐方式，有五个值：

```css
.container {
  align-items: stretch | flex-start | flex-end | center | baseline;
}
```

![align-items](/assets/images/css/container-align-items.png 'align-items 属性')

- stretch（默认值）：如果项目未设置高度或设为 `auto`，将占满整个容器的高度（最高的元素定义了容器的高度）
- flex-start：对齐交叉轴的起始端（cross-start）
- flex-end：对齐交叉轴的结束端（cross-end）
- center：沿交叉轴居中对齐
- baseline: 项目的第一行文字的基线对齐

### align-content

align-content 定义多行元素在垂直方向上的对齐方式，有六个值：

```css
.container {
  align-content: stretch | flex-start | flex-end | center | space-between | space-around;
}
```

![align-content](/assets/images/css/container-align-content.png 'align-content 属性')

- stretch（默认值）：每行拉伸占满整个交叉轴
- flex-start：对齐交叉轴的起始端（cross-start）
- flex-end：对齐交叉轴的结束端（cross-end）
- center：沿交叉轴居中对齐
- space-between：与交叉轴两端对齐，轴线之间的间隔平均分布
- space-around：每一行上下两端的间隔都相等

## flex 元素属性

### order

`order` 属性定义元素的排列顺序。数值越小，排列越靠前，默认值为`0`。

```css
.flex-item {
  order: [integer];
}
```

### flex-grow

`flex-grow` 属性定义元素的放大比例，默认值为`0`，即如果存在剩余空间，也不放大。

```css
.flex-item {
  flex-grow: [number];
}
```

如果所有元素的`flex-grow`属性都为`1`，则它们将等分剩余空间（如果有的话）。如果一个元素的`flex-grow`属性为`2`，其他元素都为`1`，则前者占据的剩余空间将比其他项多一倍。

### flex-shrink

`flex-shrink`属性定义了元素的缩小比例，默认为`1`，即如果空间不足，该元素将缩小。

```css
.flex-item {
  flex-shrink: [number];
}
```

如果所有元素的`flex-shrink`属性都为`1`，当空间不足时，都将等比例缩小。如果一个元素的`flex-shrink`属性为`0`，其他元素都为`1`，则空间不足时，前者不缩小。

负值对该属性无效。

### flex-basis

`flex-basis`属性定义了在分配多余空间之前，元素占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为`auto`，即元素的本来大小。

```css
.flex-item {
  flex-shrink: [length] | auto;
}
```

### flex

`flex`属性是`flex-grow`, `flex-shrink`和`flex-basis`的简写，默认值为`0 1 auto`。后两个属性可选。

```css
.flex-item {
  flex: none | [ < 'flex-grow' > < 'flex-shrink' >? || < 'flex-basis' > ];
}
```

{% note tip %}
该属性有两个快捷值：`auto` (`1 1 auto`) 和 `none` (`0 0 auto`)。
建议优先使用这个属性，而不是单独写三个分离的属性，因为浏览器会推算相关值。
{% endnote %}

### align-self

`align-self`属性允许单个元素有与其他元素不一样的对齐方式，可覆盖`align-items`属性。默认值为`auto`，表示继承父元素的`align-items`属性，如果没有父元素，则等同于`stretch`。

```css
.flex-item {
  align-self: auto | flex-start | flex-end | center | baseline | stretch;
}
```

{% note tip %}
该属性可能取 6 个值，除了`auto`，其他都与`align-items`属性完全一致。
{% endnote %}

## 浏览器兼容性

![css-flex-box-browser-compatibility](/assets/images/css/css-flex-box-browser-compatibility.png)
