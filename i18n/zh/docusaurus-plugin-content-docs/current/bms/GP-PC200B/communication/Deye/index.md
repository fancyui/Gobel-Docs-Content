---
sidebar_position: 1
sidebar_label: 德业
toc_min_heading_level: 2
description: GP-PC200B BMS与德业混合逆变器的连接与设置指南
keywords: [GP-PC200B, BMS, 德业, Deye, 逆变器, 连接, 设置, diy, 手册]
---

# GP-PC200B BMS与德业混合逆变器的连接与设置指南

![GP-PC200B BMS 连接德业逆变器](images/deye.jpg)

本手册介绍如何将搭载 GP-PC200B BMS 的电池组与德业混合逆变器进行物理连接与参数设置，使电池与逆变器之间通过 CAN 协议正常通讯。

**适用产品**：Gobel Power GP-PC200B BMS 搭配德业混合逆变器系列。

## 所需材料

进行本连接设置需要准备以下材料和设备。

| 序号 | 名称 | 说明 |
|:---:|:---|:---|
| 1 | 搭载 GP-PC200B BMS 的电池组 | 电池组需已正确安装 GP-PC200B BMS 并正常运行 |
| 2 | 德业混合逆变器 | 支持 CAN 通讯协议的德业混合逆变器 |
| 3 | 网线（直通线） | 两端 RJ45 接头线序对称的直通网线，用于连接 BMS 与逆变器 |

:::caution 网线要求

请确保使用的网线为两端对称的直通线（非交叉线），且网线两端 RJ45 接头完好无松动。网线长度根据实际安装位置选择，建议不超过 10 米以保证通讯稳定性。
:::

## 连接与设置

以下步骤将引导您完成 BMS 协议配置、物理连接以及逆变器参数设置。

### BMS 通讯协议设置

首先需要将 GP-PC200B BMS 的 CAN 通讯协议设置为德业兼容模式。

1. 登录 GP-PC200B BMS 管理界面
2. 进入通讯协议设置页面
3. 将 CAN 通讯协议设置为 **Deye** 或 **Pylon** 模式

:::tip 协议选择

德业逆变器兼容 Deye 和 Pylon 两种 CAN 通讯协议。如其中一种协议无法正常通讯，可尝试切换至另一种。
:::

> 详细的 BMS 协议设置步骤请参考官方文档：  
> [GP-PC200B 通讯协议设置指南](https://docs.gobelpower.com/docs/bms/GP-PC200B/communication/)

### 物理连接

使用网线将 BMS 与逆变器进行物理连接。

1. 确认电池组与逆变器均已断电
2. 取出 **网线（直通线）**，将一端插入主电池 **CAN 端口**
3. 将网线另一端插入德业逆变器的 **BMS 端口**

:::tip

电池应正确拨号，详情请见GP-PC200B 通讯协议设置指南
:::

:::caution

连接前务必确认两端设备均已断电。带电插拔通讯线缆可能导致通讯接口损坏。
:::

### 逆变器参数设置

完成物理连接后，启动逆变器，在逆变器触摸屏幕中进行以下设置。

**第一步：进入电池设置页面**

在逆变器屏幕主页，点击进入 **系统设置（System Setup）** 页面，然后点击 **电池设置（Battery Setting）** 选项。

![逆变器系统设置页面](images/deye-inverter-system-setup.jpg)

**第二步：配置电池参数**

在 **电池设置（Battery Setting）** 页面中，依次设置以下参数：

- **电池模式（Batt Mode）**：选择 **锂电池（Lithium）**
- **电池容量（Batt Capacity）**：输入电池组总容量，计算公式为：电池标签上标注的标称容量 × 电池数量
- **最大充电电流（Max A Charge）**：输入电池组最大充电电流，该值应小于或等于电池标签上标注的最大持续充电电流 × 电池数量
- **最大放电电流（Max A Discharge）**：输入电池组最大放电电流，该值应小于或等于电池标签上标注的最大持续放电电流 × 电池数量

![逆变器电池设置页面](images/deye-inverter-battery-setup.jpg)

**第三步：核对 BMS 通讯数据**

完成参数设置后，在逆变器屏幕中进入 **Li-BMS** 页面，查看逆变器从电池 BMS 读取到的实时数据，逐一核对以下项目：

| 核对项目 | 正确值 |
|:---|:---|
| 电池电压 | 应等于电池平均电压 |
| 电池 SOC | 应等于电池平均 SOC |
| 充电电流限制 | 应等于上一步计算的最大充电电流值 |
| 放电电流限制 | 应等于上一步计算的最大放电电流值 |

![逆变器 Li-BMS 数据页面](images/deye-inverter-bms-info.jpg)

**第四步：确认通讯正常**

如以上所有数据核对无误，说明电池与逆变器之间的 CAN 通讯已成功建立，连接设置完成。

:::note 更多设置

如需了解更多逆变器设置选项，请参阅德业逆变器官方手册：[www.deyeinverter.com](https://www.deyeinverter.com/)
:::

## 附录

### 参考链接

| 资源 | 链接 |
|:---|:---|
| GP-PC200B BMS 通讯协议设置 | [https://docs.gobelpower.com/docs/bms/GP-PC200B/communication/](https://docs.gobelpower.com/docs/bms/GP-PC200B/communication/) |
| 德业逆变器官方手册 | [https://www.deyeinverter.com/](https://www.deyeinverter.com/) |

### 常见问题

**Q：逆变器 Li-BMS 页面无数据显示？**

A：请检查以下项目：
- 确认主电池拨号正确
- 确认 BMS 的 CAN 通讯协议已正确设置为 Deye 或 Pylon 模式
- 检查网线两端是否牢固插入 CAN 端口和 BMS 端口
- 确认网线为直通线，排除网线本身故障
- 尝试将逆变器与 BMS 断电后重新启动

**Q：逆变器显示的电池数据与实际不符？**

A：确认 BMS 的 CAN 通讯协议已正确设置为 Deye 或 Pylon 模式。
