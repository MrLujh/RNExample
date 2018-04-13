//
//  ViewController.m
//  RNExample
//
//  Created by lujh on 2018/4/13.
//  Copyright © 2018年 lujh. All rights reserved.
//

#import "ViewController.h"
#import "RNViewController.h"

@interface ViewController ()

@end

@implementation ViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    self.title = @"RN";
    
}

- (IBAction)pushRNBtnClick:(UIButton *)sender
{
    RNViewController *VC = [[RNViewController alloc] init];
    [self.navigationController pushViewController:VC animated:YES];
}

@end
