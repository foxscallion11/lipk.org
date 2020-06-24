---
title: '常用浏览器跨域设置'
date: '2020-06-24'
slug: 'browser-cross-domain'
disable_mathjax: true
---

## Chrome

右键快捷方式「目标」添加 `--user-data-dir="C:/Chrome dev session" --disable-web-security`，要注意“--”前有空格。

例如：

```bash
"C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" --user-data-dir="C:/Chrome dev session" --disable-web-security
```

## Firefox

目前实测网络上流传的，通过修改设置跨域的方法都失效了，使用 [CORS Everywhere](https://addons.mozilla.org/en-US/firefox/addon/cors-everywhere/) 这个插件吧。

## Internet Explorer

1. 设置，打开「Internet选项」*インターネットオプション*。
2. 选择页签「安全」*セキュリティ*。
3. 点击「自定义级别」*レベルのカスタマイズ*。
4. 设置「启用」*有効にする*，「跨域浏览窗口和框架」和「通过域访问数据源」。
  日语系统为：「スクリプトを実行しても安全だとマークされていない Activexコントロールの初期化とスクリプトの実行」和
  「トメイン間でのデータソースのアクセス」