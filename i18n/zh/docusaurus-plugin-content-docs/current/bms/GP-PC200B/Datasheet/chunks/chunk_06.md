

### 5.1 基本参数设置

<table>
  <tr>
    <th>序号</th>
    <th colspan="2">指标项目</th>
    <th>出厂默认参数</th>
    <th>是否可设</th>
    <th>备注</th>
  </tr>
  <tr>
    <td rowspan="6">1</td>
    <td rowspan="3">单体过充保护</td>
    <td>单体过充告警电压</td>
    <td>3600mV</td>
    <td>可设</td>
    <td></td>
  </tr>
  <tr>
    <td>单体过充保护电压</td>
    <td>3650mV</td>
    <td>可设</td>
    <td></td>
  </tr>
  <tr>
    <td>单体过充保护延时</td>
    <td>1.0S</td>
    <td>可设</td>
    <td></td>
  </tr>
  <tr>
    <td rowspan="3">单体过压保护解除</td>
    <td>单体过充保护解除电压</td>
    <td>3400mV</td>
    <td>可设</td>
    <td></td>
  </tr>
  <tr>
    <td>容量解除</td>
    <td>SOC &lt; 96%</td>
    <td>可设</td>
    <td></td>
  </tr>
  <tr>
    <td>放电解除</td>
    <td colspan="2">放电电流 &gt; 2A</td>
    <td></td>
  </tr>
  <tr>
    <td rowspan="5">2</td>
    <td rowspan="3">单体过放保护</td>
    <td>单体过放告警电压</td>
    <td>2600mV</td>
    <td>可设</td>
    <td></td>
  </tr>
  <tr>
    <td>单体过放保护电压</td>
    <td>2500mV</td>
    <td>可设</td>
    <td></td>
  </tr>
  <tr>
    <td>单体过放保护延时</td>
    <td>1.0S</td>
    <td>可设</td>
    <td></td>
  </tr>
  <tr>
    <td rowspan="2">单体过放保护解除</td>
    <td>单体过放保护解除电压</td>
    <td>2900mV</td>
    <td>可设</td>
    <td></td>
  </tr>
  <tr>
    <td>有充电时解除</td>
    <td colspan="2">接入充电器可激活</td>
    <td></td>
  </tr>
  <tr>
    <td rowspan="6">3</td>
    <td rowspan="3">总体过充保护</td>
    <td>总体过充告警电压</td>
    <td>56.5V</td>
    <td>可设</td>
    <td></td>
  </tr>
  <tr>
    <td>总体过充保护电压</td>
    <td>58.4V</td>
    <td>可设</td>
    <td></td>
  </tr>
  <tr>
    <td>总体过充保护延时</td>
    <td>1.0S</td>
    <td>可设</td>
    <td></td>
  </tr>
  <tr>
    <td rowspan="3">总体过压保护解除</td>
    <td>总体过充保护解除电压</td>
    <td>54.4V</td>
    <td>可设</td>
    <td></td>
  </tr>
  <tr>
    <td>容量解除</td>
    <td>SOC &lt; 96%</td>
    <td>可设</td>
    <td></td>
  </tr>
  <tr>
    <td>放电解除</td>
    <td colspan="2">放电电流 &gt; 2A</td>
    <td></td>
  </tr>
  <tr>
    <td rowspan="5">4</td>
    <td rowspan="3">总体过放保护</td>
    <td>总体过放告警电压</td>
    <td>44V</td>
    <td>可设</td>
    <td></td>
  </tr>
  <tr>
    <td>总体过放保护电压</td>
    <td>40V</td>
    <td>可设</td>
    <td></td>
  </tr>
  <tr>
    <td>总体过放保护延时</td>
    <td>1.0S</td>
    <td>可设</td>
    <td></td>
  </tr>
  <tr>
    <td rowspan="2">总体过放保护解除</td>
    <td>总体过放保护解除电压</td>
    <td>46.5V</td>
    <td>可设</td>
    <td></td>
  </tr>
  <tr>
    <td>有充电时解除</td>
    <td colspan="2">接入充电器可激活</td>
    <td></td>
  </tr>
  <tr>
    <td rowspan="5">5</td>
    <td rowspan="3">充电过流保护</td>
    <td>充电过流告警电流</td>
    <td>145A</td>
    <td>可设</td>
    <td rowspan="5">连续出现10次将锁定该状态，不再自动解除</td>
  </tr>
  <tr>
    <td>充电过流保护电流</td>
    <td>210A</td>
    <td>可设</td>
  </tr>
  <tr>
    <td>充电过流保护延时</td>
    <td>1.0S</td>
    <td>可设</td>
  </tr>
  <tr>
    <td rowspan="2">充电过流保护解除</td>
    <td>自动解除</td>
    <td colspan="2">1min 后自动解除</td>
  </tr>
  <tr>
    <td>放电解除</td>
    <td colspan="2">放电电流 &gt; 1A</td>
  </tr>
  <tr>
    <td rowspan="5">6</td>
    <td rowspan="3">放电过流 1 保护</td>
    <td>放电过流 1 告警电流</td>
    <td>155A</td>
    <td>可设</td>
    <td rowspan="5">连续出现10次将锁定该状态，不再自动解除</td>
  </tr>
  <tr>
    <td>放电过流 1 保护电流</td>
    <td>210A</td>
    <td>可设</td>
  </tr>
  <tr>
    <td>放电过流 1 保护延时</td>
    <td>1.0S</td>
    <td>可设</td>
  </tr>
  <tr>
    <td rowspan="2">放电过流 1 保护解除</td>
    <td>自动解除</td>
    <td colspan="2">1min 后自动解除</td>
  </tr>
  <tr>
    <td>充电解除</td>
    <td colspan="2">充电电流 &gt; 1A</td>
  </tr>
  <tr>
    <td rowspan="2">7</td>
    <td rowspan="2">放电过流 2</td>
    <td>放电过流 2 保护电流</td>
    <td>&ge;250A</td>
    <td>可设</td>
    <td rowspan="4">连续出现10次将锁定该状态，不再自动解除</td>
  </tr>
  <tr>
    <td>放电过流 2 保护延时</td>
    <td>500mS</td>
    <td>可设</td>
  </tr>
  <tr>
    <td></td>
    <td rowspan="2">放电过流 2 保护解除</td>
    <td>自动解除</td>
    <td colspan="2">1min 后自动解除</td>
  </tr>
  <tr>
    <td></td>
    <td>充电解除</td>
    <td colspan="2">充电电流 &gt; 1A</td>
  </tr>
  <tr>
    <td rowspan="3">8</td>
    <td rowspan="3">短路保护</td>
    <td>短路保护功能</td>
    <td colspan="2">有（默认为功能开启）</td>
    <td rowspan="3">连续出现10次将锁定该状态，不再自动解除</td>
  </tr>
  <tr>
    <td rowspan="2">短路保护解除</td>
    <td colspan="2">有充电时，短路保护解除</td>
  </tr>
  <tr>
    <td colspan="2">负载移除后，将自动解除</td>
  </tr>
  <tr>
    <td rowspan="3">9</td>
    <td rowspan="3">MOS 高温保护</td>
    <td>MOS 过温告警温度</td>
    <td>90°C</td>
    <td>可设</td>
    <td></td>
  </tr>
  <tr>
    <td>MOS 过温保护温度</td>
    <td>115°C</td>
    <td>可设</td>
    <td></td>
  </tr>
  <tr>
    <td>MOS 保护解除温度</td>
    <td>85°C</td>
    <td>可设</td>
    <td></td>
  </tr>
  <tr>
    <td rowspan="12">10</td>
    <td rowspan="12">电芯温度保护</td>
    <td>充电低温告警温度</td>
    <td>5°C</td>
    <td>可设</td>
    <td></td>
  </tr>
  <tr>
    <td>充电低温保护温度</td>
    <td>0°C</td>
    <td>可设</td>
    <td></td>
  </tr>
  <tr>
    <td>充电低温保护解除温度</td>
    <td>10°C</td>
    <td>可设</td>
    <td></td>
  </tr>
  <tr>
    <td>充电高温告警温度</td>
    <td>50°C</td>
    <td>可设</td>
    <td></td>
  </tr>
  <tr>
    <td>充电高温保护温度</td>
    <td>55°C</td>
    <td>可设</td>
    <td></td>
  </tr>
  <tr>
    <td>充电高温保护解除温度</td>
    <td>50°C</td>
    <td>可设</td>
    <td></td>
  </tr>
  <tr>
    <td>放电低温告警温度</td>
    <td>-15°C</td>
    <td>可设</td>
    <td></td>
  </tr>
  <tr>
    <td>放电低温保护温度</td>
    <td>-20°C</td>
    <td>可设</td>
    <td></td>
  </tr>
  <tr>
    <td>放电低温保护解除温度</td>
    <td>-15°C</td>
    <td>可设</td>
    <td></td>
  </tr>
  <tr>
    <td>放电高温告警温度</td>
    <td>50°C</td>
    <td>可设</td>
    <td></td>
  </tr>
  <tr>
    <td>放电高温保护温度</td>
    <td>55°C</td>
    <td>可设</td>
    <td></td>
  </tr>
  <tr>
    <td>放电高温保护解除温度</td>
    <td>50°C</td>
    <td>可设</td>
    <td></td>
  </tr>
  <tr>
    <td rowspan="6">11</td>
    <td rowspan="6">环境温度告警</td>
    <td>环境低温告警温度</td>
    <td>-20°C</td>
    <td>可设</td>
    <td></td>
  </tr>
  <tr>
    <td>环境低温保护温度</td>
    <td>-30°C</td>
    <td>可设</td>
    <td></td>
  </tr>
  <tr>
    <td>环境低温保护解除温度</td>
    <td>-20°C</td>
    <td>可设</td>
    <td></td>
  </tr>
  <tr>
    <td>环境高温告警温度</td>
    <td>55°C</td>
    <td>可设</td>
    <td></td>
  </tr>
  <tr>
    <td>环境高温保护温度</td>
    <td>65°C</td>
    <td>可设</td>
    <td></td>
  </tr>
  <tr>
    <td>环境高温保护解除温度</td>
    <td>55°C</td>
    <td>可设</td>
    <td></td>
  </tr>
  <tr>
    <td rowspan="2">12</td>
    <td rowspan="2">消耗电流</td>
    <td>工作时自耗电电流</td>
    <td colspan="2">&le;45mA</td>
    <td></td>
  </tr>
  <tr>
    <td>低功耗模式电流</td>
    <td colspan="2">&le;200&mu;A</td>
    <td></td>
  </tr>
  <tr>
    <td rowspan="2">13</td>
    <td rowspan="2">均衡功能</td>
    <td>均衡开启电压</td>
    <td>&gt; 3400mV</td>
    <td>可设</td>
    <td></td>
  </tr>
  <tr>
    <td>开启压差</td>
    <td>&gt; 30mV</td>
    <td>可设</td>
    <td></td>
  </tr>
  <tr>
    <td>14</td>
    <td>容量默认设置</td>
    <td>电量低告警门槛</td>
    <td>SOC &lt; 5%</td>
    <td>可设</td>
    <td>充电时不告警</td>
  </tr>
  <tr>
    <td rowspan="2">15</td>
    <td rowspan="2">休眠功能</td>
    <td>休眠电压</td>
    <td>&lt; 3150mV</td>
    <td>可设</td>
    <td></td>
  </tr>
  <tr>
    <td>延迟时间</td>
    <td>5min</td>
    <td>可设</td>
    <td></td>
  </tr>
  <tr>
    <td>16</td>
    <td>电芯失效保护</td>
    <td>单体压差</td>
    <td>&gt; 1V 保护</td>
    <td>不可设</td>
    <td>不允许充放电</td>
  </tr>
  <tr>
    <td rowspan="2">17</td>
    <td rowspan="2">满充判断</td>
    <td>满充电压</td>
    <td>&ge; 55.2V</td>
    <td>可设</td>
    <td rowspan="2">更新 SOC 为 100%</td>
  </tr>
  <tr>
    <td>截止电流</td>
    <td>&le; 5A</td>
    <td>可设</td>
  </tr>
</table>

注：以上参数设定是在 25°C 环境温度下的标准设置，不同温度的表现会有差异。

### 5.2 基本配置

<table>
  <tr>
    <th rowspan="14">功能</th>
    <td>存储</td>
    <td colspan="5">□无 □ 存储 400 条 ☑ 存储 10000 条</td>
  </tr>
  <tr>
    <td>电池容量</td>
    <td colspan="5">□50AH □100AH □150AH □200AH ☑ 280 AH</td>
  </tr>
  <tr>
    <td>显示屏接口</td>
    <td colspan="5">□无 □中文智能 □英文智能 ☑有</td>
  </tr>
  <tr>
    <td>充电限流</td>
    <td colspan="5">□无 □5A □10A ☑20A □ A<br/>定义：充电电流 &gt; 200A 开启</td>
  </tr>
  <tr>
    <td>干接点</td>
    <td colspan="5">□无 ☑有<br/>定义：干接点 1-PIN1 to PIN2 常开，故障保护时闭合；<br/>干接点 2-PIN3 to PIN4 常开，电池低告警闭合。</td>
  </tr>
  <tr>
    <td>加热膜接口</td>
    <td colspan="5">□无 ☑ 有（加热膜座子不焊接，客户自接座子并自己焊接，其它硬件电路保留）<br/>定义：加热开启温度允许（充电低温告警温度+1），加热膜关闭温度关联充电低温保护解除温度，当 BMS 进入充电低温保护状态，充电 MOS 关闭，增加加热膜请求充电电流为 10A（与德赛请求充电电流分开）；在并机时，若有电池出现充电低温保护状态，加热膜请求充电电流为 10A*充电低温保护状态数量；上位机可修改。</td>
  </tr>
  <tr>
    <td>CAN 并机</td>
    <td colspan="5">☑无 □有<br/>定义：</td>
  </tr>
  <tr>
    <td>风扣板接口</td>
    <td colspan="5">□无 ☑有<br/>定义：1.充电 MOS 关闭后，若检测到有充电电流，持续 8S 启动。<br/>2.放电 MOS 关闭后，若检测到有放电电流，持续 8S 启动。</td>
  </tr>
  <tr>
    <td>认证功能接口</td>
    <td colspan="5">☑MCU 升片看门狗 ☑双重总压检测 ☑双重电流检测</td>
  </tr>
  <tr>
    <td>弱电开关</td>
    <td colspan="5">□无 ☑有</td>
  </tr>
  <tr>
    <td>蜂鸣器</td>
    <td colspan="5">□无 ☑有</td>
  </tr>
  <tr>
    <td>定位功能接口</td>
    <td colspan="5">☑无 □有</td>
  </tr>
  <tr>
    <td>蓝牙&amp;WIFI</td>
    <td colspan="5">☑无 □有</td>
  </tr>
  <tr>
    <td>灯条接口</td>
    <td colspan="5">□无 ☑有</td>
  </tr>
  <tr>
    <th rowspan="3">通信</th>
    <td>拨码开关</td>
    <td colspan="5">□无 □1 位 □4 位 ☑6 位 ☑ 自动编码</td>
  </tr>
  <tr>
    <td>LED 灯</td>
    <td colspan="5">□无 □ALM ☑RUN ☑ON/OFF ☑SOC 6 个</td>
  </tr>
  <tr>
    <td>采样插座</td>
    <td colspan="5">☑立式 □卧式</td>
  </tr>
  <tr>
    <th rowspan="3">其他需求</th>
    <td>条码</td>
    <td colspan="5">□一维码 ☑二维码</td>
  </tr>
  <tr>
    <td>通信接口</td>
    <td colspan="5">☑RS232 □RS485 ☑并机 RS485 ☑CAN</td>
  </tr>
  <tr>
    <td>并机方式</td>
    <td colspan="5">□无 □RS485 □CAN</td>
  </tr>
  <tr>
    <th rowspan="5"></th>
    <td>升级方式</td>
    <td colspan="5">☑RS232 □RS485</td>
  </tr>
  <tr>
    <td>1</td>
    <td colspan="5">自动编码需支持主机唤醒从机，主机唤醒后从机能自动唤醒。</td>
  </tr>
  <tr>
    <td>2</td>
    <td colspan="5">LED 灯和条形灯亮灯逻辑二选一。</td>
  </tr>
  <tr>
    <td>3</td>
    <td colspan="5">手动编码和自动编码逻辑二选一。</td>
  </tr>
  <tr>
    <td>4</td>
    <td colspan="5">主动均衡最大支持 2A。</td>
  </tr>
  <tr>
    <td></td>
    <td>5</td>
    <td colspan="5">新增客供 MAP 表，见附件；<br/>表格数值为系数（单位微欧）；<br/>单机：<br/>请求充电电流=表中函数 X2X 充电过流警告值；</td>
  </tr>
  <tr>
    <td></td>
    <td>6</td>
    <td colspan="5">请求放电电流=表中系数 X 放电过流 1 告警值；<br/>并机：<br/>分别查每一台的请求电流，然后取最小的电流，乘上（并机数-保护数）。</td>
  </tr>
  <tr>
    <td></td>
    <td>7</td>
    <td colspan="5">逆变协议：<br/>RS485：鹏辉<br/>CAN：施耐德、维克托、德业、SMA、特能创新、美世乐、瑞迪、索瑞德、TBB、迈格瑞</td>
  </tr>
  <tr>
    <td></td>
    <td>8</td>
    <td colspan="5">增加加热膜功能：<br/>定义：加热开启温度关联（充电低温告警温度+1），加热膜关闭温度关联充电低温保护解除温度，上位机可修改。</td>
  </tr>
  <tr>
    <td></td>
    <td>9</td>
    <td colspan="5">主板上加热膜座子不焊接（客户自购座子，并自己焊接）。</td>
  </tr>
  <tr>
    <td></td>
    <td>10</td>
    <td colspan="5">BMS 需支持屏通协议的功能。</td>
  </tr>
  <tr>
    <td></td>
    <td>11</td>
    <td colspan="5">读取端并机总电流改为“读取并机总电压-0.5V”，请求充电电压=最高单剂电压。</td>
  </tr>
  <tr>
    <td></td>
    <td>12</td>
    <td colspan="5">1、在 010-Victron CAN 2021.01.07(维克多)协议中，当均衡开启时，取消 BMS 上传逆变器正偏差报告。<br/>2、在 001-PYLON CAN Inverter EMS(派能) 协议中，修改掩码标记 1 和 2 的范围：掩码标记 1 的 Bit5 为充电告警值-低电量告警值+2%；强制标记 2 的 Bit4 为低电量告警值+1%-低电量告警值+3%；流充关闭，低电量告警值-10%。</td>
  </tr>
  <tr>
    <td></td>
    <td>13</td>
    <td colspan="5">BMS 在未休眠状态下开启自耗电，休眠状态下关闭，功率为 7W。</td>
  </tr>
  <tr>
    <td></td>
    <td>14</td>
    <td colspan="5">232 的波特率修改为 115200。</td>
  </tr>
  <tr>
    <td></td>
    <td>15</td>
    <td colspan="5">支持多种双向表，详情见上位机协议选择界面。</td>
  </tr>
  <tr>
    <td></td>
    <td>16</td>
    <td colspan="5">导入 A 威标准 SOC 算法。</td>
  </tr>
  <tr>
    <td></td>
    <td>17</td>
    <td colspan="5">请求逻辑：<br/>1. 仅当第一次满足条件触发一小时后，如果 SOC 大于间歇式充电门限，向逆变器请求“低请求电压”，其他正常情况下，向逆变器请求“正常请求电压”。<br/>2. 间歇式充电门限：即 Gap Charge Threshold 值，默认 95（可设）。<br/>3. 低请求电压：取 总休止保护恢复值 (Pack OVP Release) 值（可设）。<br/>4. 正常请求电压：取 电池包截止电压 (Pack FullCharge Voltage) 值（可设）。<br/>目的：<br/>1. 当电池 SOC 低于某个值 (TSOC) 的时候，向逆变器请求最大放电电流=-10。<br/>2. 当电池电压低于某个值 (PACK_UV_ALARM) 的时候，向逆变器请求最大放电电流=0。<br/><br/>定义：<br/>SOC：电池当前 SOC（取所有 pack 平均 SOC）。<br/>VOL：电池当前电压（取所有 pack 平均电压）。<br/>SOC_LOW_ALARM：软件设置中 SOC Low Alarm 低电量告警 (%) 值（取主机设置值）。<br/>PACK_UV_ALARM：软件设置中 Pack UV Alarm 总体过放告警 (V) 值（取主机设置值）。<br/>TSOC：一个变量。<br/>TSOC_STATE：指示当前是否因低电量而导致向逆变器请求最大放电电流=-10，默认为 0。<br/>TVOL_STATE：指示当前是否因低电压而导致向逆变器请求最大放电电流=0，默认为 0。<br/>基准最大放电电流：软件设置中 DCG_OC_ALARM 放电过流告警 (A) 值 (MAP 系数，向向逆变器请求最大放电电流。</td>
  </tr>
  <tr>
    <td></td>
    <td>18</td>
    <td colspan="5">TSOC 的值：<br/>1. 当 SOC_LOW_ALARM &le; 5%，TSOC 固定取值 SOC_LOW_ALARM (目的是留一个口子，从而不使用 TSOC 动态变化逻辑)。<br/>2. 当 SOC_LOW_ALARM &gt; 5%，TSOC 的值会发生变化。<br/><br/>TSOC 的值变化：<br/>1. 如果电池连续 4 天不触发放电条件：<br/>在 96 小时及以上时，将 TSOC 提高到 50%。<br/>在 192 小时及以上时，将 TSOC 提高到 70%。<br/>2. 一旦触发放电条件，TSOC 重置为 SOC_LOW_ALARM。<br/><br/>向逆变器请求最大放电电流：<br/>1. 如果 SOC &lt; TSOC，设置 TSOC_STATE = 1。<br/>2. 如果 VOL &lt; PACK_UV_ALARM，设置 TVOL_STATE = 1。<br/>3. 如果 TVOL_STATE = 1，向逆变器请求最大放电电流=0。<br/>4. 如果 TVOL_STATE = 0 且 TSOC_STATE = 1，向逆变器请求最大放电电流=-10。<br/>向逆变器请求最大放电电流的退出：<br/>1. 如果 SOC &gt; TSOC + 20%，设置 TSOC_STATE = 0。<br/>2. 如果 VOL &gt; PACK_UV_ALARM + 3V，设置 TVOL_STATE = 0。<br/>3. 如果 TSOC_STATE = 0 且 TVOL_STATE = 0，向逆变器请求最大放电电流=基准最大放电电流。</td>
  </tr>
  <tr>
    <td></td>
    <td>19</td>
    <td colspan="5">并机时，向逆变器上报电池平均总电压。</td>
  </tr>
  <tr>
    <td></td>
    <td>20</td>
    <td colspan="5">排除板载蓝牙 WIFI 模块，J75 外接蓝牙 WIFI 接口需要保留电路和座子，客户外接 WIFI 模块。<br/>J75-外接蓝牙 WIFI 接口做成 232 协议，波特率为 115200。</td>
  </tr>
  <tr>
    <td></td>
    <td>21</td>
    <td colspan="5">支持 63 台电池并机。</td>
  </tr>
  <tr>
    <td></td>
    <td>22</td>
    <td colspan="5">新增客供通用多 CAN 协议，对应内部协议编号：010-Victron CAN 2023.09.22，并设为默认 CAN 协议。<br/>BMS 上传数据要求：<br/>0x35E 上传：Gobel<br/>0x370 上传：Gobel<br/>0x371 上传：Power<br/>0x360 上报填充<br/>0x378 上报累计充放电容量</td>
  </tr>
  <tr>
    <td></td>
    <td>23</td>
    <td colspan="5">J75-外接蓝牙 WIFI 接口串口 232 协议修改：<br/>把正常响应 RTN = 0x00，改为 RTN = Cmd (Bms 接收的命令)。</td>
  </tr>
  <tr>
    <td></td>
    <td>24</td>
    <td colspan="5">修改主动均衡的策略：<br/>均衡开启由低压差启动变更为开启电压 (上位机可设)，如下图<br/>a. 静置开启条件：Gmax &gt; 均衡开启电压值 且 压差 &gt; 30mv。<br/>b. 静置关闭条件：Gmax &lt; 均衡开启电压值 或 压差 &lt; 20mv。<br/>c. 充放电开启条件：Gmax &gt; 均衡开启电压值 且 压差 &gt; 50mv。<br/>d. 充放电关闭条件：Gmax &lt; 均衡开启电压值 或 压差 &lt; 40mv。<br/>e. 开启关闭压差 500 次循环增加 1mv，最大 20mv。<br/>f. 开启一小时运行时间 1H，关闭均衡后要等待 10min 才能再次开启开启。<br/>g. 电池温度高 105 退出。<br/>h. 平均电压大于 3625mv 不启动。</td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td colspan="5">j. 压差大于 1000mv 不启动。<br/>k. 高温告警不启动。<br/>l. 故障不启动。<br/>m. 温度/保护不启动。<br/>n. 过压保护可以启动，欠压保护不启动。<br/>o. 去除流大于 0.5C 不启动的逻辑。<br/>p. 电流小于 2A 为静置。<br/>q. 每隔 1 分钟判断一次是否开启或继续维持均衡。<br/><br/>![图片](./images/page10_img1.png)</td>
  </tr>
</table>
