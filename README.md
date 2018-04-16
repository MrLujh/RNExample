# RNExample---react-native 示例

## 前言

    对于 React Native，iOS 开发者社区也是褒贬不一。有一部分的开发者认为React Native无论在性能，开发成本还是效率都要比苹果原生那套要好，成为开发的首选；也有一部分的开发着认为React Native 不过是 Facebook 的又一个玩具，以它现在的稚嫩还难以对原生的 Swift/Objective-C 造成足够威胁。对一门新兴的技术是否值得在开发采用，取决于该技术的本身是否具备足够的优点和是否符合目前的开发需求。


## 起源

* Native App 优点是功能强大、性能优越。但终究是受制于苹果，而且多版本维护十分痛苦。

* 为了不受苹果掌控，Facebook 曾花费大量的人力物力进行移动 HTML5 技术研发。虽然有些成果，但始终离 Native App 有差距，而且这个差距可能永远赶不上。

* 在转型 Native App 开发后，Facebook 内部其实还在研发一种新的移动技术，并开始使用这种技术开发内部 App。这个技术便是 React Native。

* 2015年3月，Facebook 正式公开发布 React Native，并将该技术开源。虽然当时开发平台仅支持 Mac OS，部署也仅支持 iOS 平台。

* 2015年9月15日，Facebook 发布了 React Native for Android，把 Web 和原生平台的 JavaScript 开发技术扩展到了 Google 的流行移动平台 Android 上。至此，React Native 实现了跨平台的特性。

## React、React.js、React Native三者的联系

* React 是基础框架,提供了一套基础设计实现理念。
    
* React.js 是在 React 理念的指导下产生的专门用来开发网页的 web 前端框架。与 React 同时出现和发展，React 的相关概念都在 React.js 文档中。

* React Native 是用来开发移动端 app 的。只不过是用了 React.js 那套模式，而底层是对 Native Code 的封装及调用。


## React Native的优点

* 性能媲美原生应用

    * 由于 React Native 提供的组件是对原生 API 的暴露。虽然我们是用 js 写的代码，但实际上调用的是原生 API，原生的 UI 组件。体验上足以媲美原生应用。

* 开发效率高

    * 相比于原生开发，js 学习成本低、语法灵活。允许让 Web 开发者更多地基于现有经验开发 App。

* 组件化开发

    * React 强调将应用划分成多个互不相关的组件，每个组件作为一个独立的视图。这种类似搭积木的开发方式使得代码结构清晰、通用性高、可移植性高。上一个项目的某些组件，可以很方便地拿来在下一个项目中使用。对于那些优秀的第三方组件，也能很方便地集成到我们项目中来。

* 节约开发成本

    * 百分之90多界面可以通过 React Native 开发，一份代码同时可以适配 Android 和 iOS。并通过一些手段自动匹配不同屏幕大小的手机，再也不需要自己去计算视图的大小和位置。
    
* 实时远程调试

    * React Native 的调试比 Cordova 不知道好到哪里去了。开启了实时重载之后，代码一改，app 就自动更新成最新，对于 UI 的搭建简直是省了不少的编译时间。同时可以打开 XCode 实时的看到所有的 log 信息。

* 代码热部署

    * 我们知道 AppStore 审核流程超级久。而由于 React Native 是用的 js 来写的代码，实时编译的过程能让我们实现应用像网页一样做到热更新，随时发布。真正能够做到上架审核一次，永久 0 审核更新。

* 有效降低移动应用安装包体积

    * 对于普通复杂度的移动应用，使用 React Native 实现的安装包会比原生代码实现的安装包大。而当移动应用功能越复杂，React Native 安装包体积相比原生代码安装包就越小。
比如当原生代码实现的安装包大于 15MB 时，使用 React Native 改写代码后，安装包就小于原生代码实现的安装包。
    
## React Native的优缺点深层分析请看下面链接：

      http://www.sohu.com/a/206616854_100072094
      
      
![Mou icon](https://github.com/MrLujh/Fastlane--Packaging/blob/master/111.gif)

