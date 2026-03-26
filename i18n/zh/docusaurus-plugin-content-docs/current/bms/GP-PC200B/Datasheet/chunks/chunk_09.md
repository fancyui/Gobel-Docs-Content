

### 8.1 通讯接口图示

&gt; 接口板接口图示

<table>
  <tr>
    <td><img src="./images/page14_img1.png" width="200" /></td>
    <td><img src="./images/page14_img2.png" width="200" /></td>
  </tr>
  <tr>
    <td>CAN 和 RS485 接口</td>
    <td>干接点</td>
  </tr>
  <tr>
    <td><img src="./images/page14_img3.png" width="200" /></td>
    <td><img src="./images/page14_img4.png" width="200" /></td>
  </tr>
  <tr>
    <td>并联通讯端口</td>
    <td>RS232 通讯接口</td>
  </tr>
</table>

### 8.2 接口定义说明

&gt; 接口板通讯接口，管脚定义如下：

<table>
  <tr>
    <th colspan="2">RS232 通讯接口--采用 6P6C 立式 RJ11 插座</th>
  </tr>
  <tr>
    <th>RJ11 引脚</th>
    <th>定义说明</th>
  </tr>
  <tr>
    <td>2</td>
    <td>NC</td>
  </tr>
  <tr>
    <td>3</td>
    <td>TX（单板）</td>
  </tr>
  <tr>
    <td>4</td>
    <td>RX（单板）</td>
  </tr>
  <tr>
    <td>5</td>
    <td>GND</td>
  </tr>
</table>

<table>
  <tr>
    <th colspan="2">CAN--采用 8P8C 立式 RJ45 插座</th>
    <th colspan="2">RS485--采用 8P8C 立式 RJ45 插座</th>
  </tr>
  <tr>
    <th>RJ45 引脚</th>
    <th>定义说明</th>
    <th>RJ45 引脚</th>
    <th>定义说明</th>
  </tr>
  <tr>
    <td>1、7、3、6、8</td>
    <td>NC</td>
    <td>9、16</td>
    <td>RS485-B1</td>
  </tr>
  <tr>
    <td>5</td>
    <td>CANL</td>
    <td>10、15</td>
    <td>RS485-A1</td>
  </tr>
  <tr>
    <td>4</td>
    <td>CANH</td>
    <td>11、14</td>
    <td>GND</td>
  </tr>
  <tr>
    <td>2</td>
    <td>GND</td>
    <td>12、13</td>
    <td>NC</td>
  </tr>
</table>

<table>
  <tr>
    <th colspan="2">RS485--采用 8P8C 立式 RJ45 插座</th>
    <th colspan="2">RS485--采用 8P8C 立式 RJ45 插座</th>
  </tr>
  <tr>
    <td>RJ45 引脚</td>
    <td>定义说明</td>
    <td>RJ45 引脚</td>
    <td>定义说明</td>
  </tr>
  <tr>
    <td>1、8</td>
    <td>RS485-B</td>
    <td>9、16</td>
    <td>RS485-B</td>
  </tr>
  <tr>
    <td>2、7</td>
    <td>RS485-A</td>
    <td>10、15</td>
    <td>RS485-A</td>
  </tr>
  <tr>
    <td>3、6</td>
    <td>GND</td>
    <td>11、14</td>
    <td>GND</td>
  </tr>
  <tr>
    <td>4</td>
    <td>GND</td>
    <td>13</td>
    <td>UP_IN</td>
  </tr>
  <tr>
    <td>5</td>
    <td>DN_OP+</td>
    <td>12</td>
    <td>GND</td>
  </tr>
</table>

&gt; 保护板接口，管脚定义如下：

### 1) 采样接口

<table>
  <tr>
    <th>接口</th>
    <th colspan="4">说明</th>
  </tr>
  <tr>
    <td>B+</td>
    <td colspan="4">电池正极，用来给 BMS 供电；</td>
  </tr>
  <tr>
    <td>B-</td>
    <td colspan="4">电池负极；</td>
  </tr>
  <tr>
    <td>P-</td>
    <td colspan="4">电池 PACK 负极（充放电同口）；</td>
  </tr>
  <tr>
    <td rowspan="14">电芯&amp;温度</td>
    <td>JA2-1</td>
    <td>BT12</td>
    <td>JA1-1</td>
    <td>BT16</td>
  </tr>
  <tr>
    <td>JA2-2</td>
    <td>BT11</td>
    <td>JA1-2</td>
    <td>BT15</td>
  </tr>
  <tr>
    <td>JA2-3</td>
    <td>BT10</td>
    <td>JA1-3</td>
    <td>BT14</td>
  </tr>
  <tr>
    <td>JA2-4</td>
    <td>BT9</td>
    <td>JA1-4</td>
    <td>BT13</td>
  </tr>
  <tr>
    <td>JA2-5</td>
    <td>BT8</td>
    <td>JA1-5</td>
    <td>GND</td>
  </tr>
  <tr>
    <td>JA2-6</td>
    <td>GND</td>
    <td>JA1-6</td>
    <td>NT4</td>
  </tr>
  <tr>
    <td>JA2-7</td>
    <td>NT3</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>JA4-1</td>
    <td>BT4</td>
    <td>JA3-1</td>
    <td>BT8</td>
  </tr>
  <tr>
    <td>JA4-2</td>
    <td>BT3</td>
    <td>JA3-2</td>
    <td>BT7</td>
  </tr>
  <tr>
    <td>JA4-3</td>
    <td>BT2</td>
    <td>JA3-3</td>
    <td>BT6</td>
  </tr>
  <tr>
    <td>JA4-4</td>
    <td>BT1</td>
    <td>JA3-4</td>
    <td>BT5</td>
  </tr>
  <tr>
    <td>JA4-5</td>
    <td>BT0</td>
    <td>JA3-5</td>
    <td>GND</td>
  </tr>
  <tr>
    <td>JA4-6</td>
    <td>GND</td>
    <td>JA3-6</td>
    <td>NT2</td>
  </tr>
  <tr>
    <td>JA4-7</td>
    <td>NT1</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td colspan="5">备注：引脚编号仅为方便排序，具体信号 PIN 脚请参考结构图</td>
  </tr>
</table>

### 2) 外部接口

<table>
  <tr>
    <th>接口</th>
    <th>引脚编号</th>
    <th>信号</th>
    <th>描述</th>
    <th>备注</th>
  </tr>
  <tr>
    <td rowspan="14">J8<br/>接口板接口</td>
    <td>Pin1:</td>
    <td>CANH</td>
    <td rowspan="2">CAN 通讯接口</td>
    <td>对接 PCS 通讯</td>
  </tr>
  <tr>
    <td>Pin2:</td>
    <td>CANL</td>
    <td></td>
  </tr>
  <tr>
    <td>Pin3:</td>
    <td>GND_CAN</td>
    <td>GND_CAN</td>
    <td></td>
  </tr>
  <tr>
    <td>Pin4:</td>
    <td>GND</td>
    <td rowspan="3">RS4851 通信接口</td>
    <td rowspan="3">对接 PCS 通讯</td>
  </tr>
  <tr>
    <td>Pin5:</td>
    <td>RS485A1</td>
  </tr>
  <tr>
    <td>Pin6:</td>
    <td>RS485B1</td>
  </tr>
  <tr>
    <td>Pin7:</td>
    <td>GND</td>
    <td rowspan="2">保护板负极</td>
    <td></td>
  </tr>
  <tr>
    <td>Pin8:</td>
    <td>GND</td>
    <td></td>
  </tr>
  <tr>
    <td>Pin9:</td>
    <td>lamp6</td>
    <td>指示灯 6 正极</td>
    <td>50% LED</td>
  </tr>
  <tr>
    <td>Pin10:</td>
    <td>K1</td>
    <td>拨码开关 1 正极</td>
    <td></td>
  </tr>
  <tr>
    <td>Pin11:</td>
    <td>lamp5</td>
    <td>指示灯 5 正极</td>
    <td>66% LED</td>
  </tr>
  <tr>
    <td>Pin12:</td>
    <td>K2</td>
    <td>拨码开关 2 正极</td>
    <td></td>
  </tr>
  <tr>
    <td>Pin13:</td>
    <td>lamp4</td>
    <td>指示灯 4 正极</td>
    <td>83% LED</td>
  </tr>
  <tr>
    <td>Pin14:</td>
    <td>K3</td>
    <td>拨码开关 3 正极</td>
    <td></td>
  </tr>
  <tr>
    <td rowspan="10">J7<br/>接口板接口</td>
    <td>Pin15:</td>
    <td>lamp3</td>
    <td>指示灯 3 正极</td>
    <td>100% LED</td>
  </tr>
  <tr>
    <td>Pin16:</td>
    <td>K4</td>
    <td>拨码开关 4 正极</td>
    <td></td>
  </tr>
  <tr>
    <td>Pin17:</td>
    <td>lamp2</td>
    <td>指示灯 2 正极</td>
    <td>ALM LED</td>
  </tr>
  <tr>
    <td>Pin18:</td>
    <td>PW_OFF1</td>
    <td>弱电开关 1 正极</td>
    <td></td>
  </tr>
  <tr>
    <td>Pin19:</td>
    <td>lamp1</td>
    <td>指示灯 1 正极</td>
    <td>RUN LED</td>
  </tr>
  <tr>
    <td>Pin20:</td>
    <td>NRSTM</td>
    <td>复位按键正极</td>
    <td></td>
  </tr>
  <tr>
    <td>Pin1:</td>
    <td>GND</td>
    <td>保护板负极</td>
    <td></td>
  </tr>
  <tr>
    <td>Pin2:</td>
    <td>K6</td>
    <td>拨码开关 6 正极</td>
    <td>NC</td>
  </tr>
  <tr>
    <td>Pin3:</td>
    <td>K5</td>
    <td>拨码开关 5 正极</td>
    <td>NC</td>
  </tr>
  <tr>
    <td>Pin4:</td>
    <td>lamp9</td>
    <td>指示灯 9 正极</td>
    <td>ON/OFF LED</td>
  </tr>
  <tr>
    <td></td>
    <td>Pin5:</td>
    <td>lamp8</td>
    <td>指示灯 8 正极</td>
    <td>17%LED</td>
  </tr>
  <tr>
    <td></td>
    <td>Pin6:</td>
    <td>lamp7</td>
    <td>指示灯 7 正极</td>
    <td>33% LED</td>
  </tr>
  <tr>
    <td></td>
    <td>Pin7:</td>
    <td>COM2</td>
    <td rowspan="2">干接点 2</td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td>Pin8:</td>
    <td>NO2</td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td>Pin9:</td>
    <td>COM1</td>
    <td rowspan="2">干接点 1</td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td>Pin10:</td>
    <td>NO1</td>
    <td></td>
  </tr>
  <tr>
    <td rowspan="6">J1<br/>RS485 通讯</td>
    <td>Pin1:</td>
    <td>GND</td>
    <td>通信地</td>
    <td></td>
  </tr>
  <tr>
    <td>Pin2:</td>
    <td>GND</td>
    <td>通信地</td>
    <td></td>
  </tr>
  <tr>
    <td>Pin3:</td>
    <td>RS232_TX</td>
    <td rowspan="2">RS232 通信信号</td>
    <td></td>
  </tr>
  <tr>
    <td>Pin4:</td>
    <td>RS232_RX</td>
    <td></td>
  </tr>
  <tr>
    <td>Pin5:</td>
    <td>RS485A</td>
    <td rowspan="2">RS485 通信信号</td>
    <td></td>
  </tr>
  <tr>
    <td>Pin6:</td>
    <td>RS485B</td>
    <td></td>
  </tr>
  <tr>
    <td colspan="5">备注：引脚编号仅为方便排序，具体信号 PIN 脚请参考结构图</td>
  </tr>
</table>

### 3) 其他接口

<table>
  <tr>
    <th>接口</th>
    <th>引脚编号</th>
    <th>信号</th>
    <th>描述</th>
    <th>备注</th>
  </tr>
  <tr>
    <td rowspan="5">J5<br/>GPS 板接口（NC）</td>
    <td>Pin1:</td>
    <td>GPRS_B+</td>
    <td>电池正极（BMS 无控制电路）</td>
    <td></td>
  </tr>
  <tr>
    <td>Pin2:</td>
    <td>GND</td>
    <td>GPS 地</td>
    <td></td>
  </tr>
  <tr>
    <td>Pin3:</td>
    <td>13V</td>
    <td>13V</td>
    <td></td>
  </tr>
  <tr>
    <td>Pin4:</td>
    <td>GPRS_TX</td>
    <td>GPS 通讯信号</td>
    <td></td>
  </tr>
  <tr>
    <td>Pin5:</td>
    <td>GPRS_RX</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td rowspan="3">J9<br/>脱扣器</td>
    <td>Pin1:</td>
    <td>B+</td>
    <td>脱扣器驱动正极</td>
    <td></td>
  </tr>
  <tr>
    <td>Pin2:</td>
    <td>CON_EN</td>
    <td>脱扣器驱动负极</td>
    <td></td>
  </tr>
  <tr>
    <td>Pin3:</td>
    <td>POS-REV</td>
    <td>脱扣器驱动反馈</td>
    <td></td>
  </tr>
  <tr>
    <td rowspan="2">J10<br/>弱电开关</td>
    <td>Pin1:</td>
    <td>GND</td>
    <td>弱电开关负极</td>
    <td></td>
  </tr>
  <tr>
    <td>Pin2:</td>
    <td>PW-OFF1</td>
    <td>弱电开关检测信号</td>
    <td></td>
  </tr>
  <tr>
    <td rowspan="3">J11<br/>自动编码</td>
    <td>Pin1:</td>
    <td>UP_IN+</td>
    <td>自动编码输入信号</td>
    <td></td>
  </tr>
  <tr>
    <td>Pin2:</td>
    <td>GND</td>
    <td>自动编码地</td>
    <td></td>
  </tr>
  <tr>
    <td>Pin3:</td>
    <td>DN_OP+</td>
    <td>自动编码输出信号</td>
    <td></td>
  </tr>
  <tr>
    <td rowspan="2">J12<br/>双重电流检测</td>
    <td>Pin1:</td>
    <td>DISLC+</td>
    <td rowspan="2">双重电流检测信号</td>
    <td></td>
  </tr>
  <tr>
    <td>Pin2:</td>
    <td>CHARC-</td>
    <td></td>
  </tr>
  <tr>
    <td rowspan="3">J13<br/>灯条通信</td>
    <td>Pin1:</td>
    <td>GND</td>
    <td>灯条通信地</td>
    <td></td>
  </tr>
  <tr>
    <td>Pin2:</td>
    <td>DOUT</td>
    <td>灯条信号输出</td>
    <td></td>
  </tr>
  <tr>
    <td>Pin3:</td>
    <td>5V</td>
    <td>灯条供电</td>
    <td></td>
  </tr>
  <tr>
    <td rowspan="3">J75<br/>外接蓝牙 WIFI 接口</td>
    <td>Pin1:</td>
    <td>GND</td>
    <td>地</td>
    <td></td>
  </tr>
  <tr>
    <td>Pin2:</td>
    <td>5V</td>
    <td>外接蓝牙-232 通讯供电</td>
    <td></td>
  </tr>
  <tr>
    <td>Pin3:</td>
    <td>RS232_TX</td>
    <td>外接蓝牙-232 通讯信号</td>
    <td></td>
  </tr>
  <tr>
    <td rowspan="3">P3<br/>WIFI 接口</td>
    <td>Pin4:</td>
    <td>RS232_RX</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>Pin1:</td>
    <td>GND</td>
    <td>预留：地</td>
    <td></td>
  </tr>
  <tr>
    <td>Pin2:</td>
    <td>WIFI_RST</td>
    <td>预留：WIFI 配网按键</td>
    <td></td>
  </tr>
  <tr>
    <td rowspan="2">JH1<br/>加热膜</td>
    <td>Pin1:</td>
    <td>B+</td>
    <td>加热膜输出正极</td>
    <td></td>
  </tr>
  <tr>
    <td>Pin2:</td>
    <td>P-</td>
    <td>加热膜输出负极</td>
    <td></td>
  </tr>
  <tr>
    <td rowspan="2">JH2<br/>加热膜</td>
    <td>Pin1:</td>
    <td>B+</td>
    <td>加热膜输出正极</td>
    <td></td>
  </tr>
  <tr>
    <td>Pin2:</td>
    <td>P-</td>
    <td>加热膜输出负极</td>
    <td></td>
  </tr>
  <tr>
    <td colspan="5">备注：引脚编号仅为方便排序，具体信号 PIN 脚请参考结构图</td>
  </tr>
</table>

### 4) 屏接口

<table>
  <tr>
    <th>接口</th>
    <th>引脚编号</th>
    <th>信号</th>
    <th>描述</th>
    <th>备注</th>
  </tr>
  <tr>
    <td rowspan="4">J6<br/>5V 屏通信</td>
    <td>Pin1:</td>
    <td>GND</td>
    <td>通信地</td>
    <td></td>
  </tr>
  <tr>
    <td>Pin2:</td>
    <td>5V</td>
    <td>显示屏供电</td>
    <td></td>
  </tr>
  <tr>
    <td>Pin3:</td>
    <td>LCD_RX1</td>
    <td rowspan="2">显示屏通信信号</td>
    <td></td>
  </tr>
  <tr>
    <td>Pin4:</td>
    <td>LCD_RT1</td>
    <td></td>
  </tr>
  <tr>
    <td rowspan="5">J2/J4<br/>显示屏接口</td>
    <td>Pin1:</td>
    <td>GND</td>
    <td rowspan="2">预留：地</td>
    <td rowspan="5">立式、卧式可选</td>
  </tr>
  <tr>
    <td>Pin2:</td>
    <td>GND</td>
  </tr>
  <tr>
    <td>Pin3:</td>
    <td>13V</td>
    <td>预留：显示屏供电</td>
  </tr>
  <tr>
    <td>Pin4:</td>
    <td>LCD_RX1</td>
    <td rowspan="2">预留：显示屏信号</td>
  </tr>
  <tr>
    <td>Pin5:</td>
    <td>LCD_TX1</td>
  </tr>
  <tr>
    <td rowspan="5">J3<br/>显示屏接口</td>
    <td>Pin1:</td>
    <td>GND</td>
    <td rowspan="2">地</td>
    <td></td>
  </tr>
  <tr>
    <td>Pin2:</td>
    <td>GND</td>
    <td></td>
  </tr>
  <tr>
    <td>Pin3:</td>
    <td>13V</td>
    <td>显示屏供电</td>
    <td></td>
  </tr>
  <tr>
    <td>Pin4:</td>
    <td>LCD_RX1</td>
    <td rowspan="2">显示屏信号</td>
    <td></td>
  </tr>
  <tr>
    <td>Pin5:</td>
    <td>LCD_TX1</td>
    <td></td>
  </tr>
  <tr>
    <td colspan="5">备注：引脚编号仅为方便排序，具体信号 PIN 脚请参考结构图</td>
  </tr>
</table>

### 8.3 安装连接说明

保护板上有严格的顺序要求，依次连接 B-、P-、B+、P+，然后由低到高的顺序插接电池采样线连接器，所有连接线安装好后才能加载或充电器。

拆除时，先拔掉充电器或负载，依次由高到低的顺序拆卸电池采样线连接器，最后拆卸 B+、P+、B-、P-。
