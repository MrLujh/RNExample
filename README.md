# RNExample---react-native 示例

## 前言

    对于 React Native，iOS 开发者社区也是褒贬不一。有一部分的开发者认为React Native无论在性能，开发成本还是效率都要比苹果原生那套要好，成为开发的首选；也有一部分的开发着认为React Native 不过是 Facebook 的又一个玩具，以它现在的稚嫩还难以对原生的 Swift/Objective-C 造成足够威胁。对一门新兴的技术是否值得在开发采用，取决于该技术的本身是否具备足够的优点和是否符合目前的开发需求。


## 起源

* Native App 优点是功能强大、性能优越。但终究是受制于苹果，而且多版本维护十分痛苦。

* 为了不受苹果掌控，Facebook 曾花费大量的人力物力进行移动 HTML5 技术研发。虽然有些成果，但始终离 Native App 有差距，而且这个差距可能永远赶不上。

* 在转型 Native App 开发后，Facebook 内部其实还在研发一种新的移动技术，并开始使用这种技术开发内部 App。这个技术便是 React Native。

* 2015年3月，Facebook 正式公开发布 React Native，并将该技术开源。虽然当时开发平台仅支持 Mac OS，部署也仅支持 iOS 平台。

* 2015年9月15日，Facebook 发布了 React Native for Android，把 Web 和原生平台的 JavaScript 开发技术扩展到了 Google 的流行移动平台 Android 上。至此，React Native 实现了跨平台的特性。

## 开发模式升级

* 模块化

    * 先按功能把工程做横向分层，在业务层再做纵向梳理。把不同的模块代码简单的放在一个文件夹里，而工程的组织形式并没有发生变化。跨团队基本不会在同一个模块代码上产生冲突。
    
* 插件化

    * 进一步发展，业务越来越复杂，团队工作越发细分，人也越来越多，代码量越来越大。简单的使用文件夹来组织模块的方式显得力不从心。多业务跨团队，不同的开发节奏，复杂的依赖关系，导致我们会花掉大量的时间解决编译不过的问题。等待其他模块集成这件事居然成了我们开发效率最大的瓶颈。

* 插件化

    * 代码独立，先从形式上解耦
    
    * 独立代码工程化，为独立运行打下基础
    
    * 梳理依赖关系，独立工程可编译
    
    * 放弃源码依赖，提速集成编译

## 解耦思路

* 工欲善其事，必先利其器。这句话每个人都在说，却不是每个人都能做到。一个具有工具文化的团队会在质量，效率各个方面都会有很大优势。
  
* 一个工程，从原始状态迅速膨胀到天猫现在的体量的，依赖关系之复杂，超乎想象。

* 耦合三类：

    * 界面耦合，就是用户操作流程里，不同界面间的跳转，这些界面的跳转是硬编码
    
    * 依赖耦合，顾名思义，两个模块之间的有依赖，就是耦合
    
    * 工程耦合，每个模块有自己的生命周期和运行时，每个模块在生产环境里又需要依赖主工程的运行时
    
    * 放弃源码依赖，提速集成编译
    
## 使用    

* 路由&无参数

    * 由ViewController向TestViewController跳转，在ViewController中将通过路由找到TestViewController
    
```objc       
UIViewController *doc = [[RouterManager sharedInstance]
                             performAction:@"TestViewController"
                             params:nil
                             shouldCacheTarget:NO];

[self.navigationController pushViewController:doc animated:YES];
```

* 路由&带参数

    * 由ViewController向TestViewController跳转，在ViewController中将通过路由找到TestViewController，
    传入的参数赋值给目标控制器，在TestViewController中只需声明一下入参接收对应的key
```objc       
@implementation UIViewController (routerManager)

- (id)createVC:(NSDictionary *)dict{
    
    Class class = getClassFromAtcion(_cmd);
    if (class) {
        
        UIViewController *doc = self;
        doc = [[class alloc]init];
        doc = [doc mj_setKeyValues:dict];
        return doc;
    }
    return nil;
}
@end
```

```objc       
UIViewController *doc = [[RouterManager sharedInstance]
                             performAction:@"TestViewController"
                             params:@{
                                      @"info":@{
                                              @"user":@"我是正向传值参数:push",
                                              }
                                      }
                             shouldCacheTarget:NO];

[self.navigationController pushViewController:doc animated:YES];
```    

* 路由&带参数&回调反向传值

    * 在ViewController和TestViewController中同时声明一个blcok,在demo中有详细说明
```objc       
- (IBAction)popBtnClick:(UIButton *)sender
{
    
    self.backblock(@"我是返回值参数:pop");
    
    [self.navigationController popViewControllerAnimated:YES];
}
```

```objc       
__weak typeof(self) weakSelf = self;
self.backWithDict = ^(NSString *str) {
        
        weakSelf.backLabel.text = str;
};
    
UIViewController *doc = [[RouterManager sharedInstance]
                             performAction:@"TestViewController"
                             params:@{
                                      @"info":@{
                                              @"user":@"我是正向传值参数:push",
                                              },
                                      @"backblock":self.backWithDict
                                      }
                             shouldCacheTarget:NO];

[self.navigationController pushViewController:doc animated:YES];
```    


![Mou icon](https://github.com/MrLujh/Fastlane--Packaging/blob/master/111.gif)

