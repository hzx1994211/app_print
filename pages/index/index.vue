<template>
	<view>
		<view style="text-align: center;margin-bottom: 20rpx;">
			已配对蓝牙设备
		</view>
    <view @click="startSearch">搜索蓝牙</view>
		<view style="text-align: center;padding: 10rpx 0;border: 1rpx solid #2B85E4;border-radius: 15rpx;" class="uni-flex uni-row" v-for="(device,index) in deviceList" :key="index">
			<view style="width: 30rpx;">{{index+1}}</view>
			<view style="width: 180rpx;">{{device.name}}</view>
			<view style="width: 310rpx;">{{device.address}}</view>
      <!--  -->
			<view class="flex-item"><button type="primary" plain size="mini" @click="printSomething(device,printTest)">连接蓝牙</button></view>
		</view>
    <view @click="printTest(outputStream)" style="margin-top:20px">打印</view>
    <view @click="add" style="margin-top:20px">测试蓝牙</view>
	</view>
	
</template>

<script>
	export default {
		data() {
			return {
				show: {
					setting: false
				},
				deviceList: [],
        outputStream:null,
        bluetoothSocket:null
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
        uni.navigateTo({
          url: '../add/index'
        });
      },
      startSearch() {
        this.initPrinter();
      },
			showPrinterList: function() {
				var that = this;
				that.show.setting = true;
				for (var i = 0; i < that.deviceList.length; i++) {
					if (that.deviceList[i].name == that.device.name) {
						that.deviceList[i].checked = true
					}
				}
			},
      //搜索蓝牙
			initPrinter: function() {
				var that = this;
				that.deviceList = [];
				var main = plus.android.runtimeMainActivity();
				var Context = plus.android.importClass("android.content.Context");
				var BManager = main.getSystemService(Context.BLUETOOTH_SERVICE);
				plus.android.importClass(BManager); 
				var BAdapter = BManager.getAdapter();
				plus.android.importClass(BAdapter); 
				var lists = BAdapter.getBondedDevices();
				plus.android.importClass(lists);
				var iterator = lists.iterator();
				plus.android.importClass(iterator);
				while (iterator.hasNext()) {
					var d = iterator.next();
					plus.android.importClass(d);
					var temp = {
						name: d.getName(),
						address: d.getAddress(),
						status: d.getBondState(),
						uuids: d.getUuids(),
						op: d
					};
					that.deviceList.push(temp);
				}
			},
			printSomething: function(dev,sb) {
				var that = this;
				var main = plus.android.runtimeMainActivity();
        //蓝牙适配器
				var BluetoothAdapter = plus.android.importClass("android.bluetooth.BluetoothAdapter");
				var UUID = plus.android.importClass("java.util.UUID");
				var uuid = UUID.fromString("00001101-0000-1000-8000-00805F9B34FB");
        //蓝牙本地适配器
				var BAdapter = BluetoothAdapter.getDefaultAdapter();
        console.log(dev,'----');
				var device = BAdapter.getRemoteDevice(dev.address);
				plus.android.importClass(device);
        //蓝牙连接
				this.bluetoothSocket = device.createInsecureRfcommSocketToServiceRecord(uuid);
				plus.android.importClass(this.bluetoothSocket);
				console.log("开始连接打印机:"+dev.name);
				if (!this.bluetoothSocket.isConnected()) {
					this.bluetoothSocket.connect();
					if (this.bluetoothSocket.isConnected()) {
						console.log("设备已连接,开始发送打印文件");
						this.outputStream = this.bluetoothSocket.getOutputStream();
						plus.android.importClass(this.outputStream);
						// sb(this.outputStream);
            // 关闭蓝牙连接
						// this.bluetoothSocket.close();
            uni.showToast({
						    title: '设备连接成功',
						    duration: 2000
						});
						if (!this.bluetoothSocket.isConnected()) {
							console.log("设备已关闭");
						}
					} else {
						uni.showToast({
						    title: '设备连接失败',
							icon:'error',
						    duration: 2000
						});
					}
				}
			},
			printTest: function(outputStream) {
				var that = this;
				var text = "! 0 200 200 1000 1\r\n"; // 1000 限制高度
        //打印文字:  T 3(字体编号) 1（字体大小） 300（x轴位置） 160（y轴位置） 1588888888（打印内容）\r\n 
				//一维码
				text += "BT OFF\r\n";
        //打印条形码: B 128(type类型) 1（宽度点数） 1（窄宽比例） 80（高度） 0（x轴位置） 50（y轴位置） SF7444435088888（扫码内容）
				text += "B 128 1 1 80 0 50 SF7444435088888\r\n";
				
				//单号
        text += "SETBOLD 1\r\n";
				text += "T 3 0 0 130 SF7444435088888\r\n";
        text += "SETBOLD 0\r\n";
        //打印线条
        //横线 y轴要保持一致: L 10（起点开始划线x轴） 120（起点开始划线y轴） 560(结束划线x轴 可以理解为线长) 120（结束划线y轴） 2
				text += "L 10 150 560 150 2\r\n";
        //------------- 收件信息 -------------
        //加粗
        text += "SETBOLD 1\r\n";
        text += "T 3 1 30 170 收\r\n";
        // 取消加粗
        text += "SETBOLD 0\r\n";
        text += "T 3 1 70 170 懂调度\r\n";
        text += "T 3 1 160 170 领送\r\n";
        text += "T 3 1 300 170 1588888888\r\n";
        text += "T 3 1 70 240 北京市朝阳区建国路15号1号院\r\n";
        text += "L 10 280 560 280 2\r\n";
        //------------- 寄件信息 -------------
        //加粗
        text += "SETBOLD 1\r\n";
        text += "T 3 1 30 300 寄\r\n";
        // 取消加粗
        text += "SETBOLD 0\r\n";
        text += "T 3 1 70 300 小曾\r\n";
        text += "T 3 1 160 300 领送\r\n";
        text += "T 3 1 70 330 深圳市宝安区西乡镇固戍\r\n";
        text += "L 10 360 560 360 2\r\n";
        //------------- 收款信息 -------------
        text += "T 3 1 30 370 收款:20元\r\n";
        //画竖线 x轴要保持一致
        text += "L 160 360 160 440 2\r\n"; //收款竖线
        text += "T 3 1 200 370 服务:领送\r\n";
        text += "T 3 1 200 400 签收人:领送\r\n";
        text += "L 10 440 400 440 2\r\n";  // 横线

        text += "T 3 1 30 460 托寄物:9\r\n";
        text += "L 10 480 400 480 2\r\n"; // 横线

        text += "T 3 1 30 500 回单:否:9\r\n";
        //服务/签收人竖线
        text += "L 400 360 400 520 2\r\n";
        // 横线
        text += "L 10 520 560 520 2\r\n";
        // -------------右侧信息 --------
        text += "T 3 1 420 390 C5501/1\r\n";
        text += "T 3 1 420 460 重量：2\r\n";
        text += "T 3 1 420 500 打印:\r\n";
        text += "T 3 2 480 500 2022-05-20\r\n";
        text += "T 3 1 10 540 备注:梵蒂冈地方个梵蒂冈梵恢复\r\n";
        //打印二维码
        text += "B QR 10 560 M 2 U 5\r\n";
				text += "MA,QR MMM={'k1':'023WA','k2':'023CA','k3':'005','k4':'T4','k5':'SF7444435088888','k6':'','k7':'51ba5363'}\r\n";
				text += "ENDQR\r\n";
        
        // 打印水印
        text += "CENTER\r\n"
        text += "BACKGROUND 110\r\n"
        text += "SETMAG 2 2\r\n"
        text += "BKT 24 0 200 560 已验收\r\n"
        text += "BACKGROUND 0\r\n"

        // 反白线段
        text += "CENTER\r\n"
        /**
         * 反白线段注意 =>TL:IL 200（x0始点） 600（y0竖起点） 350（x1终点） 600（y1竖终点） 45（线宽）\r\n
         */ 
        text += "T 3 0 160 600 SAVE\r\n"
        text += 'IL 200 600 350 600 45\r\n'

				// text += "END\r\n";
				text += "PRINT\r\n"
				console.log(text)
				var arrayBuffer = plus.android.invoke(text, 'getBytes', 'gbk');
        //输出文件
				outputStream.write(arrayBuffer);
        //清空输出流
				outputStream.flush();
			},
			printBox: function(p, l, w, k, s) { //起点坐标、长高、宽、线宽、显示(上左下右)
				var text = "";
				if (s.t) {
					text = text.concat("L ", p.x, " ", p.y, " ", w, " ", p.y, " ", k, "\r\n");
				}
				if (s.l) {
					text = text.concat("L ", p.x, " ", p.y, " ", p.x, " ", p.y+l, " ", k, "\r\n");
				}
				if (s.b) {
					text = text.concat("L ", p.x, " ", p.y+l, " ", w, " ", p.y+l, " ", k, "\r\n");
				}
				if (s.r) {
					text = text.concat("L ", w, " ", p.y+l, " ", w, " ", p.y, " ", k, "\r\n");
				}
				return text;
			},
			cutLine: function(p, str) {
				var r = "";
				var max = 18;
				var n = parseInt(str.length / max);
				for (var i = 0; i < n; i++) {
					var temp = str.substr(i * max, max);
					r += "T 3 0 " + p.x + " " + (p.y + 40 * i) + " " + temp + "\r\n"
				}
				var w = str.substr(n * max);
				r += "T 3 0 " + p.x + " " + (p.y + 40 * n) + " " + w + "\r\n";
				return r;
			},
			printLineList: function(p, list) {
				var r = "";
				for (var i = 0; i < list.length&&i<5; i++) {
					r += "T 3 0 " + p.x + " " + (p.y + 40 * i) + " " + list[i] + "\r\n"
				}
				return r;
			},
			printLineList2: function(p, list) {
				var r = "";
				for (var i = 0; i < list.length&&i<10; i=i+2) {
					r += "T 3 0 " + p.x + " " + (p.y + 60 * i) + " " + list[i] + "\r\n";
					if((i+1)<list.length){
						r += "T 3 0 " + (p.x+150) + " " + (p.y + 60 * i) + " " + list[i+1] + "\r\n";
					}
				}
				return r;
			},
			mySleep:async function(time){
				await this.mypromise(time);
			},
			mypromise:function(time){
				return new Promise((resolve) => setTimeout(resolve, time));
			}
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
