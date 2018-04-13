//
//  RNViewController.m
//  RNExample
//
//  Created by lujh on 2018/4/13.
//  Copyright © 2018年 lujh. All rights reserved.
//

#import "RNViewController.h"
#import "RNView.h"

@interface RNViewController ()

@end

@implementation RNViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    
    self.title = @"RN模块";
    
    RNView * rnView = [[RNView alloc] initWithFrame:self.view.bounds];
    self.view = rnView;
}

@end
