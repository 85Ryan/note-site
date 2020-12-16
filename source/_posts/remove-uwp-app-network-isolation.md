---
title: 解除 Windows 10 UWP 应用网络隔离
url: remove-uwp-app-network-isolation
categories:
  - utilities
tags:
  - windows 10
  - UWP
  - 网络隔离
date: 2020-12-16 16:29:12
cover:
---


## TL;DR

<!-- more -->

UWP（通用 Windows 平台，Universal Windows Platform）是微软在 Windows 10 中引入的一个同性质应用程序架构平台。所有 UWP 应用均运行在被称为 App Container 的虚拟沙箱环境中，其安全性及纯净度远胜于传统的 EXE 应用。但 App Container 机制同时也阻止了网络流量发送到本机（即 loopback）， 使大部分网络抓包调试工具无法对 UWP 应用进行流量分析。同样的，该机制也阻止了 UWP 应用访问 localhost，即使你在系统设置中启用了代理，也无法令 UWP 应用访问本地代理服务器。

不过，Windows 10 自带了一款名为 `CheckNetIsolation.exe` 命令行工具可以帮助我们将 UWP 及 Windows 8 Metro 应用添加到排除列表，具体步骤如下：

## 通过注册表获取应用 SID

使用 `Win + R` 快捷键打开**运行**窗口，输入 `Regedit` 打开注册表编辑器，然后定位到：

```
HKEY_CURRENT_USER\Software\Classes\Local Settings\Software\Microsoft\Windows\CurrentVersion\AppContainer\Mappings
```

`Mappings` 目录下的一大串字符即为  对应应用的 SID 值，点击相应的 SID 即可查看应用的名称：'DisplayName`。

## 解除网络隔离

以管理员身份运行**命令提示符**，输入以下命令：

```
CheckNetIsolation.exe loopbackexempt -a -p=SID
```

完成后就大功告成了！

## 使用脚本

按上面的步骤为每个应用解除非常麻烦，可以使用下面一条命令为电脑中安装的所有 UWP 应用解除限制：

```
FOR /F "tokens=11 delims=\" %p IN ('REG QUERY "HKCU\Software\Classes\Local Settings\Software\Microsoft\Windows\CurrentVersion\AppContainer\Mappings"') DO CheckNetIsolation.exe LoopbackExempt -a -p=%p
```

也可以制作成脚本：

```
@echo off

FOR /F "tokens=11 delims=\" %%p IN ('REG QUERY "HKCU\Software\Classes\Local Settings\Software\Microsoft\Windows\CurrentVersion\AppContainer\Mappings"') DO CheckNetIsolation.exe LoopbackExempt -a -p=%%p
```

ENJOY IT!
