/*
 * @Author: huangzhenxiang
 * @Date: 2022-05-27 17:49:42
 * @LastEditors: huangzhenxiang
 * @LastEditTime: 2022-05-27 17:49:43
 */
/*
 * @Author: huangzhenxiang
 * @Date: 2022-05-24 13:45:39
 * @LastEditors: huangzhenxiang
 * @LastEditTime: 2022-05-26 17:39:24
 */

// 获取已配对蓝牙
export function initPrinter () {
  var that = this;
  let deviceList = [];
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
    console.log(temp, '---temp');
    deviceList.push(temp);
  }
  return deviceList
}

//连接蓝牙
export function printSomething (dev) {
  var that = this;
  var main = plus.android.runtimeMainActivity();
  //蓝牙适配器
  var BluetoothAdapter = plus.android.importClass("android.bluetooth.BluetoothAdapter");
  var UUID = plus.android.importClass("java.util.UUID");
  var uuid = UUID.fromString("00001101-0000-1000-8000-00805F9B34FB");
  //蓝牙本地适配器
  var BAdapter = BluetoothAdapter.getDefaultAdapter();
  console.log(dev, '----');
  var device = BAdapter.getRemoteDevice(dev.address);
  plus.android.importClass(device);
  //蓝牙连接
  let bluetoothSocket = device.createInsecureRfcommSocketToServiceRecord(uuid);
  plus.android.importClass(bluetoothSocket);
  console.log("开始连接打印机:" + dev.name);
  if (!bluetoothSocket.isConnected()) {
    bluetoothSocket.connect();
    if (bluetoothSocket.isConnected()) {
      console.log("设备已连接,开始发送打印文件");
      //读取数据
      let outputStream = bluetoothSocket.getOutputStream();
      plus.android.importClass(outputStream);
      // sb(this.outputStream);
      // 关闭蓝牙连接
      // this.bluetoothSocket.close();
      uni.showToast({
        title: '设备连接成功',
        duration: 2000
      });
      if (!bluetoothSocket.isConnected()) {
        console.log("设备已关闭");
      }
      return outputStream
    } else {
      uni.showToast({
        title: '设备连接失败',
        icon: 'error',
        duration: 2000
      });
    }
  } else {
    bluetoothSocket.close()
  }
}
export const print = {
  /**
   * 设置文字
   * type => 字体编号
   * size => 字体大小
   * x => x轴
   * y => y轴
   * t => 内容
   */
  setText: (type = 3, size = 1, x, y, t) => {
    let text = ''
    text += `T ${type} ${size} ${x} ${y} ${t}\r\n`;
    return text
  },
  /**
   * 设置文字旋转
   * rotate => 字体旋转 VT逆时针旋转90度 T90/180/270旋转度数
   * type => 字体编号
   * size => 字体大小
   * x => x轴
   * y => y轴
   * t => 内容
   */
  setRotateText: (rotate = 'T', type = 3, size = 1, x, y, t) => {
    let text = ''
    text += `${rotate} ${type} ${size} ${x} ${y} ${t}\r\n`;
    return text
  },

  /**
   * 设置线条
   * x0 => x0轴位置
   * y0 => y0轴位置
   * x1 => x1轴位置
   * y1 => y1轴位置
   * width => 线宽
   * ps:横线 y轴要保持一致, 竖线 x轴要保持一致
   */
  setLine: (x0, y0, x1, y1, width = 1) => {
    let text = ''
    text += `L ${x0} ${y0} ${x1} ${y1} ${width}\r\n`;
    return text
  },

  /**
   * 设置加粗
   * type => 1加粗 0取消
   */
  setBold: (type) => {
    let text = ''
    text += `SETBOLD ${type}\r\n`;
    return text
  },

  /**
   * 一维码
   * type => B水平条码  VB竖直条码
   * width => 宽
   * scale => 宽窄比例
   * height => 高
   * x => x轴位置
   * y => y轴位置
   * content => 扫描内容
   */
  setBarCode: (type = B, width = 1, scale = 1, height = 80, x, y, content) => {
    let text = ''
    text += "BT OFF\r\n";
    text += `${type} 128 ${width} ${scale} ${height} ${x} ${y} ${content}\r\n`;
    return text
  },

  /**
   * 二维码
   * x => x轴位置
   * y => y轴位置
   * content => 扫描内容
   */
  setQR: (x, y, size, content) => {
    let text = ''
    text += `B QR ${x} ${y} M 2 U ${size}\r\n`;
    text += `MA,QR code=${content}\r\n`;
    text += "ENDQR\r\n";
    return text
  },

  /**
   * 间距
   * t => 1-100   0是取消间距
   */
  setSP: (t) => {
    let text = ''
    text += `SETSP ${t}\r\n`;
    return text
  },
  /**
   * 设置水印
   * size => 字体大小
   * x => x轴
   * y => y轴
   * content => 水印内容
   */
  setBKT: (size, x, y, content) => {
    let text = ''
    text += "CENTER\r\n"
    text += "BACKGROUND 110\r\n"
    text += "SETMAG 5 5\r\n"
    text += `BKT 24 ${size} ${x} ${y} ${content}\r\n`
    text += "SETMAG 0 0\r\n"
    text += "BACKGROUND 0\r\n"
    return text
  },
  /**
   * 字体放大
   * w => 字体宽 支持1-16
   * h => 字体宽 支持1-16
   */
  setMAG: (w, h) => {
    let text = ''
    text += `SETMAG ${w} ${h}\r\n`
    return text
  },
  /**
   * 反白线段
   * x0 => 左上角x坐标
   * y0 => 左上角y坐标
   * x1 => 水平线段的右上角或者垂直线段的左下角的X坐标
   * y1 => 水平线段的右上角或者垂直线段的左下角的Y坐标
   * width => 反白线段的线宽
   */
  setAW: (x0, y0, x1, y1, width = 45) => {
    let text = ''
    text += `IL ${x0} ${y0} ${x1} ${y1} ${width}\r\n`
    return text
  }
}




