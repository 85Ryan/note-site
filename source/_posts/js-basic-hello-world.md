---
title: 'JavaScript 基础：Hello, World'
url: js-basic-hello-world
categories:
  - javascript
tags:
  - JS
  - 基础
  - JavaScript
  - 笔记
date: 2019-11-01 20:36:43
cover:
---

## TL;DR

- JavaScript 可以直接写在 HTML 页面的`<script>`和`</script>`标签之间，也可以使用`src`属性引入单独的`.js`文件。
- `console.log()`可以在控制台中输入一段文本信息。
- 数字（Number）可以是任意数字，可以进行的`+`、`-`、`*`、`/`等算术运算。
- 字符串（String）须包围在引号中（可以是单引号，也可以是双引号）， 使用加号（`+`）可以进行字符串拼接。
- JavaScript 每一条语句以分号结尾（非必须），按照先后顺序执行，空行会被忽略。
- 注释单行代码：`//...`，注释多行代码：`/*...*/`。

<!-- more -->

## Hello, World

### 引入 JavaScript

JavaScript 脚本可以放在 HTML 页面上的两个位置：

- Header Script：`<head>`和`</head>`标签之间
- Body Script：`<body>`和`</body>`标签之间

#### 内部脚本（Internal Script）

脚本包围在`<script>`和`</script>`标签之间，放在 HTML 页面上：

```html index.html
<!DOCTYPE html>
<html lang="zh-cn">
  <head>
    <script>
      ...
    </script>
  </head>
  <body></body>
</html>
```

#### 外部脚本（External Script）

将脚本放在单独的 JavaScript 文件中，使用`script`标签的`src`属性，在 HTML 页面中引入：

```html index.html
<!DOCTYPE html>
<html lang="zh-cn">
  <head>
    <script src="main.js"></script>
  </head>
  <body></body>
</html>
```

{% note warn %}
JavaScript 作为一种脚本语言可以放在 HTML 页面中任何位置，但是浏览器解释 HTML 时是按先后顺序的，所以前面的 script 就先被执行。
{% endnote %}

### 第一行 JavaScript 代码

```js main.js
console.log('Hello, World!');
```

`console.log()`这行代码会在控制台输出一条信息，`()`内为要输出的内容，代码以`;`结束。

## 值与类型

JavaScript 常用的两种数据类型：**数字**与**字符串**。

### 数字（Number）

- 任意数字，可以是整数，也可以是实数。
- 主要用于统计，可以进行的`+`、`-`、`*`、`/`等算术运算。

### 字符串（String）

- 一段包围在引号中的一段文本。
- 引号可以是双引号，也可以是单引号，但必须保持统一，不能混用。
- 字符串不能像数字一样进行加减运算，但可以使用加号（`+`）进行字符串拼接。

## 语法规则

- JavaScript 对换行、缩进、空格不敏感，每一条语句以分号结尾。
- 语句按照先后顺序执行，空行会被忽略。

{% note info %}
(1) 分号不是必须的
(2) 通常每一条语句一行
{% endnote %}

## 注释

单行注释：

```js
// this is a comment line
```

多行注释：

```js
/* A comment
written on
several lines */
```
