<!--
 * @Author: huangzhenxiang
 * @Date: 2022-05-24 14:46:44
 * @LastEditors: huangzhenxiang
 * @LastEditTime: 2022-05-27 17:50:06
-->
<template>
	<view>
		<view style="text-align: center;margin-bottom: 20rpx;">
			已配对蓝牙设备
		</view>
    <view @click="startSearch">获取已配对蓝牙</view>
		<view style="text-align: center;padding: 10rpx 0;border: 1rpx solid #2B85E4;border-radius: 15rpx;" class="uni-flex uni-row" v-for="(device,index) in deviceList" :key="index">
			<view style="width: 30rpx;">{{index+1}}</view>
			<view style="width: 180rpx;">{{device.name}}</view>
			<view style="width: 310rpx;">{{device.address}}</view>
			<view class="flex-item"><button type="primary" plain size="mini" @click="printSomething(device)">连接蓝牙</button></view>
		</view>
    <view @click="printTest(outputStream)" style="margin-top:20px">打印</view>
	</view>
	
</template>

<script>
import { initPrinter,printSomething } from '../../common/udFaceSheet'
import { printDispatch,printSubOrder,printStub,printPaySheet } from './_udPrint'
	export default {
		data() {
			return {
				deviceList: [],
        outputStream:null, //蓝牙连接fun
			}
		},
		onLoad(p) {
			var that = this;
			// #ifdef APP-PLUS
			
			// #endif
		},
		methods: {
      add() {
        console.log('------');
      },
      //获取已配对蓝牙
      startSearch() {
        this.deviceList = initPrinter()
        // this.initPrinter();
      },
      //蓝牙连接
			printSomething: function(dev,sb) {
        this.outputStream = printSomething(dev)
			},
      //打印
			printTest: function(outputStream) {
        // 打印派件联
        // printDispatch(outputStream)
        // 打印子单
        // printSubOrder(outputStream)
        //打印存根联
        // printStub(outputStream)
        //打印货款联
        printPaySheet(outputStream)
			},

		}
	}
</script>

<style scoped>
	page{
		padding: 0;
		margin: 0;
	}
	.picked {
		background-color: lavender;
	}
</style>
