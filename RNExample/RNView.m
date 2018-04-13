//
//  RNView.m
//  RNExample
//
//  Created by lujh on 2018/4/13.
//  Copyright © 2018年 lujh. All rights reserved.
//

#import "RNView.h"
#import "RCTBundleURLProvider.h"
#import "RCTRootView.h"

@implementation RNView

- (instancetype)initWithFrame:(CGRect)frame {
    
    if (self = [super initWithFrame:frame]) {
#if TARGET_IPHONE_SIMULATOR
        [[RCTBundleURLProvider sharedSettings] setJsLocation:@"localhost"];
#else
        [[RCTBundleURLProvider sharedSettings] setDefaults];
#endif
        NSURL *jsCodeLocation;
        jsCodeLocation = [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index.ios" fallbackResource:nil];
        
        RCTRootView *rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation
                                                            moduleName:@"RN"
                                                     initialProperties:nil
                                                         launchOptions:nil];
        
        [self addSubview:rootView];
        rootView.frame = self.bounds;
    }
    return self;
}

@end
