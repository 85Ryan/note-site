---
title: 使用命令行工具创建 macOS 动态壁纸
url: use-command-line-create-dynamic-wallpapers-for-macOS
categories:
  - utilities
tags:
  - 动态壁纸
  - macOS
  - 命令行
  - 工具
date: 2019-12-24 21:15:55
cover:
---

从 Mojave 开始，Apple 为 macOS 引入了动态壁纸，动态壁纸可以根据晨昏变化切换壁纸。下面这几篇文章详细分析了动态壁纸的工作原理：

- [macOS Mojave dynamic wallpaper](https://itnext.io/macos-mojave-dynamic-wallpaper-fd26b0698223)
- [macOS Mojave dynamic wallpapers (II)](https://itnext.io/macos-mojave-dynamic-wallpapers-ii-f8b1e55c82f)
- [macOS Mojave dynamic wallpapers (III)](https://itnext.io/macos-mojave-wallpaper-iii-c747c30935c4)

[Marcin Czachurski](https://github.com/mczachurski) 开发的一个小工具可以帮助我们创建一张类似的动态壁纸。

<!-- more -->

## 工具安装

需要先安装最新版本的 Xcode 以及 Swift 5。

### Homebrew 安装

在终端工具中运行以下命令：

```bash
brew tap mczachurski/wallpapper
brew install wallpapper
```

### 手动安装

在终端工具中运行：

```bash
git clone https://github.com/mczachurski/wallpapper.git
cd wallpapper
swift build --configuration release
sudo cp .build/x86_64-apple-macosx/release/wallpapper /usr/local/bin
```

安装完成后，运行 `wallpapper -h` 可以返回以下信息：

```bash
wallpapper: [command_option] -i inputFile
Command options are:
 -h			show this message and exit
 -o			output file name (default is 'output.heic')
 -i			input file name, json file with wallpaper description
```

## 配置照片

将用于创建动态壁纸的所有图片放在同一个文件夹，然后在文件夹中创建一个包含照片信息的配置文件：`config.json`，这个工具支持创建三种模式的动态壁纸：

- 根据太阳方位变化
- 根据时间变化
- 根据系统主题变化

### 根据太阳方位变化

根据太阳方位变化的壁纸，照片配置信息如下：

```json
[
  {
    "fileName": "1.png",
    "isPrimary": true,
    "isForLight": true,
    "altitude": 27.95,
    "azimuth": 279.66
  },
  {
    "fileName": "2.png",
    "altitude": -31.05,
    "azimuth": 4.16
  },

  ...,

  {
    "fileName": "16.png",
    "isForDark": true,
    "altitude": -28.63,
    "azimuth": 340.41
  }
]
```

参数：

- fileName：图片名称
- isPrimary：是否将图片用作记录整套壁纸元信息的默认图片
- isForLight：是否将图片用作“浅色”模式壁纸
- isForDark：是否将图片用作“深色”模式壁纸
- altitude：太阳高度角
- azimuth：太阳方位角

可以在这里查询具体位置的太阳方位：

- [https://keisan.casio.com/exec/system/1224682277](https://keisan.casio.com/exec/system/1224682277)
- [https://www.esrl.noaa.gov/gmd/grad/solcalc/](https://www.esrl.noaa.gov/gmd/grad/solcalc/)

### 根据时间变化

根据太阳方位变化的壁纸，照片配置信息如下：

```json
[
  {
    "fileName": "1.png",
    "isPrimary": true,
    "isForLight": true,
    "time": "2012-04-23T10:25:43Z"
  },
  {
    "fileName": "2.png",
    "time": "2012-04-23T14:32:12Z"
  }
]
```

参数：

- time：图片切换的时间

### 根据系统主题变化

根据系统主题（浅色/深色）变化的动态壁纸，照片配置信息可能相对简单，并且只需要两张照片即可：

```json
[
  {
    "fileName": "1.png",
    "isPrimary": true,
    "isForLight": true
  },
  {
    "fileName": "2.png",
    "isForDark": true
  }
]
```

## 创建壁纸

以上工作完成后，在终端工具中运行以下命令就可以生成 `heic` 文件了：

```bash
wallpapper -i config.json
```

完成后，将生成一个名为 `output.heic` 的新文件，然后就可以将它用作动态壁纸了！

Enjoy It!
