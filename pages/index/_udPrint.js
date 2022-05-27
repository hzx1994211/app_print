/*
 * @Author: huangzhenxiang
 * @Date: 2022-05-27 17:49:25
 * @LastEditors: huangzhenxiang
 * @LastEditTime: 2022-05-27 17:49:26
 */
/*
 * @Author: huangzhenxiang
 * @Date: 2022-05-25 16:26:53
 * @LastEditors: huangzhenxiang
 * @LastEditTime: 2022-05-27 17:48:16
 */
import { print } from '../../common/udFaceSheet'
/**
  * 打印文字:  T 3(字体编号) 1（字体大小） 300（x轴位置） 160（y轴位置） 1588888888（打印内容）\r\n 
  * 打印条形码: B 128(type类型) 1（宽度点数） 1（窄宽比例） 80（高度） 0（x轴位置） 50（y轴位置） SF7444435088888（扫码内容）
  * 横线 y轴要保持一致: L 10（起点开始划线x轴） 120（起点开始划线y轴） 560(结束划线x轴 可以理解为线长) 120（结束划线y轴） 2
  * y轴要保存一致
  * 反白线段注意 => IL 200（x0始点） 600（y0竖起点） 350（x1终点） 600（y1竖终点） 45（线宽）\r\n
  * 注意:水印需要放置在最后面，否则会影响后面的x轴
  */
//打印派件联
const printDispatch = function (outputStream, res) {
  var text = "! 0 200 200 1000 1\r\n"; // 1000 限制高度
  text += print.setText(3, 3, 220, 20, '【一票多件】')
  text += print.setText(3, 3, 480, 20, '派件联')

  //绘制边框
  text += print.setLine(10, 65, 560, 65) //上
  text += print.setLine(10, 800, 560, 800) //下
  text += print.setLine(10, 65, 10, 800) //左
  text += print.setLine(560, 65, 560, 800) //右

  text += print.setText(3, 1, 25, 80, '目的地码')
  text += print.setBarCode('VB', 1, 1, 90, 25, 400, 'SF:501462046574')
  text += print.setText(4, 0, 17, 415, 'GC17')
  text += print.setLine(130, 65, 130, 460) //目的地码右侧线
  text += print.setLine(10, 460, 560, 460) //目的地码下划线
  text += print.setMAG(3, 3) //字体放大
  text += print.setText(3, 1, 230, 80, '太和')
  text += print.setMAG(0, 0) //字体恢复正常
  text += print.setLine(130, 160, 560, 160) //标题下边线
  text += print.setLine(470, 65, 470, 230) //标题右边线
  text += print.setText(3, 1, 140, 185, '怀德分拨仓')
  text += print.setText(4, 0, 260, 170, 'H-A428')
  text += print.setText(4, 0, 410, 170, 'D1')
  text += print.setLine(130, 230, 560, 230) //分拨下边线
  text += print.setText(3, 1, 490, 88, '标准')
  text += print.setText(3, 1, 490, 120, '快递')
  text += print.setText(3, 1, 490, 185, '1/2')
  text += print.setText(3, 1, 132, 290, '收')
  text += print.setText(3, 1, 132, 350, '方')
  text += print.setLine(160, 230, 160, 460) //收方右侧线
  text += print.setText(3, 1, 175, 250, 'angliankiat')
  text += print.setText(3, 1, 380, 250, '133 1609 1916')
  text += print.setText(3, 1, 175, 290, '广州市白云区太和镇大和街道大李')
  text += print.setText(3, 1, 175, 320, '街道大李村大唐路自编168号（海运）')
  text += print.setBarCode('B', 3, 3, 80, 90, 480, '188043413264') //条形码
  text += print.setText(3, 1, 200, 570, '主单 188043413264')
  text += print.setLine(10, 600, 560, 600) //主单条形码下边线
  text += print.setText(3, 1, 25, 610, '件数：2')
  text += print.setText(3, 1, 25, 640, '物品名：衣物')
  text += print.setText(3, 1, 25, 670, '代收货款：20元')
  text += print.setLine(280, 600, 280, 800) //件数 衣物右侧线
  text += print.setText(3, 1, 300, 610, '计费重量：1KG')
  text += print.setText(3, 1, 300, 640, '付款方式：寄付')
  text += print.setLine(10, 700, 560, 700) //件数 衣物下边线
  text += print.setBold(1)
  text += print.setText(3, 1, 25, 710, '代收：2.0元')
  text += print.setText(3, 1, 25, 740, '回单：F3762728')
  text += print.setBold(0)
  text += print.setAW(10, 700, 280, 700, 100)
  text += print.setText(3, 1, 300, 710, '签收人：')
  text += print.setText(55, 0, 300, 760, '始发站：东侧一部')
  text += print.setText(55, 0, 300, 780, '2022/05/13 08:10:10')
  text += print.setText(3, 1, 480, 760, '已验视')
  //水印  注意:水印需要放置在最后面，否则会影响后面的x轴
  text += print.setBKT(4, 250, 340, 'A428')
  text += "PRINT\r\n"
  console.log(text)
  var arrayBuffer = plus.android.invoke(text, 'getBytes', 'gbk');
  //输出文件
  outputStream.write(arrayBuffer);
  //清空输出流
  outputStream.flush();
}

//打印子单
const printSubOrder = (outputStream, res) => {
  var text = "! 0 200 200 1000 1\r\n"; // 1000 限制高度
  text += print.setText(3, 3, 510, 20, '子单')
  //绘制边框
  text += print.setLine(10, 65, 560, 65) //上
  text += print.setLine(10, 800, 560, 800) //下
  text += print.setLine(10, 65, 10, 800) //左
  text += print.setLine(560, 65, 560, 800) //右

  text += print.setText(3, 1, 22, 80, '目的地码')
  text += print.setBarCode('VB', 1, 1, 84, 25, 400, 'SF:501462046574')
  text += print.setText(4, 0, 17, 410, 'GC17')
  text += print.setLine(130, 65, 130, 455) //目的地码右侧线
  text += print.setLine(10, 455, 455, 455) //目的地码下划线
  text += print.setMAG(3, 3) //字体放大
  text += print.setText(3, 1, 230, 80, '太和')
  text += print.setMAG(0, 0) //字体恢复正常
  text += print.setLine(130, 160, 560, 160) //标题下边线
  text += print.setLine(455, 65, 455, 800) //标题右边线
  text += print.setText(3, 1, 140, 190, '怀德分拨仓')
  text += print.setMAG(2, 2) //字体放大
  text += print.setText(3, 1, 260, 170, 'H-A428')
  text += print.setText(3, 1, 410, 170, 'D1')
  text += print.setMAG(0, 0)
  text += print.setText(3, 3, 140, 250, '件数：2')
  text += print.setText(3, 3, 140, 280, '物品名：衣物')
  text += print.setText(3, 3, 140, 310, '始发地：东测一部')
  text += print.setLine(130, 230, 455, 230) //分拨下边线
  text += print.setText(3, 1, 490, 88, '标准')
  text += print.setText(3, 1, 490, 120, '快递')
  text += print.setBarCode('VB', 2, 2, 72, 485, 620, 'SF:501462046574')
  text += print.setText(3, 1, 25, 470, 'angliankiat')
  text += print.setText(3, 1, 200, 470, '133 1609 1916')
  text += print.setText(3, 1, 25, 510, '广州市白云区太和镇大和街道大李')
  text += print.setText(3, 1, 25, 540, '街道大李村大唐路自编168号（海运）')
  text += print.setMAG(2, 2)
  text += print.setText(3, 1, 360, 605, '2/2')
  text += print.setMAG(0, 0)
  text += print.setLine(10, 660, 455, 660) //分拨下边线
  text += print.setBarCode('B', 2, 2, 90, 26, 670)

  text += print.setText(3, 1, 470, 670, '已验视')
  text += print.setText(55, 0, 475, 700, '08:10:10')
  text += print.setText(55, 0, 470, 720, '2022/05/13')

  text += print.setText(3, 1, 25, 770, '主单 188043413264')
  text += print.setText(3, 1, 240, 770, '子单 XZ048979514')
  text += print.setRotateText('T270', 3, 1, 482, 260, '子单 XZ048979514') //逆时针旋转90度
  //水印  
  text += print.setBKT(4, -50, 340, 'A428')
  text += "PRINT\r\n"
  console.log(text)
  var arrayBuffer = plus.android.invoke(text, 'getBytes', 'gbk');
  //输出文件
  outputStream.write(arrayBuffer);
  //清空输出流
  outputStream.flush();
}

//打印存根联
const printStub = (outputStream, res) => {
  var text = "! 0 200 200 1000 1\r\n"; // 1000 限制高度
  text += print.setText(3, 3, 410, 20, '收件人存根联')
  //绘制边框
  text += print.setLine(10, 65, 560, 65) //上
  text += print.setLine(10, 800, 560, 800) //下
  text += print.setLine(10, 65, 10, 800) //左
  text += print.setLine(560, 65, 560, 800) //右

  text += print.setText(3, 1, 12, 105, '收')
  text += print.setText(3, 1, 12, 155, '方')
  text += print.setLine(40, 65, 40, 440) //收方右线
  text += print.setText(3, 1, 50, 75, 'angliankiat  133 1609 1916')
  text += print.setText(3, 1, 50, 115, '广东省广州市白云区太和镇大和街')
  text += print.setText(3, 1, 50, 145, '道大沥村大塘底路自编1688号（海')
  text += print.setText(3, 1, 50, 175, '运）')
  text += print.setLine(10, 250, 420, 250) //收方地址下线
  text += print.setLine(420, 65, 420, 440)//收方地址右线

  text += print.setText(3, 1, 12, 300, '寄')
  text += print.setText(3, 1, 12, 350, '方')
  text += print.setText(3, 1, 50, 260, 'Home Peanut  133 1609 1916')
  text += print.setText(3, 1, 50, 290, '广东省广州市白云区太和镇大和街')
  text += print.setText(3, 1, 50, 320, '运）')
  text += print.setLine(10, 440, 560, 440)

  text += print.setText(3, 1, 25, 450, '件数：2')
  text += print.setText(3, 1, 25, 480, '物品名：衣物')
  text += print.setText(3, 1, 25, 510, '报价费：0.0元')
  text += print.setText(3, 1, 25, 540, '代收货款：20元')
  text += print.setLine(10, 580, 560, 580)

  text += print.setText(3, 1, 320, 450, '计费重量：1KG')
  text += print.setText(3, 1, 320, 480, '付款方式：寄付')
  text += print.setText(3, 1, 320, 510, '签回单：F3762728')


  text += print.setQR(25, 600, 7, '二维码')
  text += print.setLine(210, 580, 210, 800)

  text += print.setText(3, 1, 220, 720, '始发站：东测一部')
  text += print.setText(3, 1, 220, 760, '已验视 2022/05/13 08:10:10')

  text += print.setBarCode('VB', 1, 1, 90, 460, 390, 'SF:501462046574')
  text += print.setRotateText('T270', 3, 1, 450, 130, '主单  188043413264') //逆时针旋转90度


  text += "PRINT\r\n"
  console.log(text)
  var arrayBuffer = plus.android.invoke(text, 'getBytes', 'gbk');
  //输出文件
  outputStream.write(arrayBuffer);
  //清空输出流
  outputStream.flush();
}

//打印货款联
const printPaySheet = (outputStream, res) => {
  var text = "! 0 200 200 1000 1\r\n"; // 1000 限制高度
  text += print.setText(3, 3, 480, 20, '货款联')

  //绘制边框
  text += print.setLine(10, 65, 560, 65) //上
  text += print.setLine(10, 800, 560, 800) //下
  text += print.setLine(10, 65, 10, 800) //左
  text += print.setLine(560, 65, 560, 800) //右

  text += print.setBarCode('B', 2, 2, 85, 80, 75)
  text += print.setText(3, 3, 200, 165, '主单 188043413264')
  text += print.setText(3, 3, 200, 195, '2022/05/13 08:42:48')
  text += print.setLine(10, 225, 560, 225)

  text += print.setText(3, 3, 20, 245, '收')
  text += print.setText(3, 3, 20, 305, '方')
  text += print.setLine(50, 225, 50, 545) //收方右线
  text += print.setLine(10, 380, 560, 380) //收方下线

  text += print.setText(3, 3, 65, 235, 'angliankiat  133 1609 1916')
  text += print.setText(3, 3, 65, 270, '广东省广州市白云区太和镇大和街道大沥村大')
  text += print.setText(3, 3, 65, 300, '底路自编1688号（海运）')

  text += print.setText(3, 3, 20, 400, '寄')
  text += print.setText(3, 3, 20, 470, '方')
  text += print.setLine(10, 545, 560, 545) //收方下线

  text += print.setText(3, 3, 65, 400, 'Home Peanut  133 1609 1916')
  text += print.setText(3, 3, 65, 435, '广东省广州市白云区太和镇大和街道大沥村大')
  text += print.setText(3, 3, 65, 465, '底路自编1688号（海运）')

  text += print.setText(3, 3, 25, 560, '件数：2')
  text += print.setText(3, 3, 25, 585, '物品名：衣物')
  text += print.setText(3, 3, 25, 615, '报价费：0.0元')
  text += print.setText(3, 3, 25, 645, '代收货款：20元')
  text += print.setLine(280, 545, 280, 800) //件数右线
  text += print.setLine(10, 680, 560, 680) //件数下线

  text += print.setText(3, 3, 290, 560, '计费重量：1KG')
  text += print.setText(3, 3, 290, 585, '付款方式：寄付')
  text += print.setText(3, 3, 290, 615, '运费：1.0元')
  text += print.setText(3, 3, 290, 645, '签回单：F3762728')
  text += print.setBold(1)
  text += print.setText(3, 3, 25, 695, '代收：2.0元')
  text += print.setBold(0)
  text += print.setAW(11, 679, 281, 679, 50)
  text += print.setText(3, 3, 25, 740, '已验视，111190007')
  text += print.setText(3, 3, 25, 775, '2022/05/13  08:10:10')

  text += print.setText(3, 3, 290, 695, '客户签字：')
  text += print.setText(3, 3, 420, 775, '年')
  text += print.setText(3, 3, 475, 775, '月')
  text += print.setText(3, 3, 535, 775, '日')
  text += "PRINT\r\n"
  console.log(text)
  var arrayBuffer = plus.android.invoke(text, 'getBytes', 'gbk');
  //输出文件
  outputStream.write(arrayBuffer);
  //清空输出流
  outputStream.flush();
}




export {
  printDispatch,
  printSubOrder,
  printStub,
  printPaySheet
}