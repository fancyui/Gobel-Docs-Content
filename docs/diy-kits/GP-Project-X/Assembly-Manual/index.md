---
sidebar_position: 1
sidebar_label: GP-Project-X Assembly Manual
toc_min_heading_level: 2
description: GP-Project-X LiFePO4 Low-Voltage Battery DIY Kit Official Assembly Manual, including parts list, module assembly, and main assembly steps.
keywords: [GP-Project-X, LiFePO4 battery, battery kit, DIY, assembly manual, Gobel Power]
---

# GP-Project-X Assembly Manual

| Item | Content |
| :--: | :--: |
| Brand | Gobel Power |
| Product Model | GP-Project-X |
| Manual Type | Assembly Manual |
| Applicable Product | LiFePO4 Low-Voltage Battery DIY Kit |
| Cell Specification | 314Ah LiFePO4 Lithium Iron Phosphate Cell, 1P16S in Series |
| BMS Specification | 200A, with 2A Active Balancing |

![Product Image](images/gp-px-final.jpg)

---

## Safety Precautions

Before assembling the GP-Project-X battery kit, please read and observe the following safety precautions carefully.

:::danger Electrical Safety

- **Power-off Operation**: Ensure all external power sources are disconnected during assembly to avoid live operation.
- **Electric Shock Prevention**: After battery assembly is complete, high voltage exists between terminals (rated 51.2V). Always confirm the circuit breaker is disconnected before touching.
- **Insulation Requirements**: All conductive parts must be properly installed with insulating materials to avoid short circuits.
:::

:::danger Battery Safety
- **Short Circuit Protection**: When cells and busbars are exposed, strictly prohibit using metal tools to touch both positive and negative poles simultaneously to prevent sparks or high temperatures from short circuits.
- **Temperature Requirements**: Cells should be assembled in a room temperature environment (10°C ~ 35°C), avoiding high temperature or extremely cold environments.
- **Polarity Confirmation**: When connecting cells, be sure to repeatedly confirm the correct positive and negative pole directions. Reverse connection will cause serious damage.
- **Cell Handling**: Individual 314Ah cells are heavy. Use correct posture when handling, seek help if necessary, and avoid injury.
:::

:::warning Mechanical Safety
- **Heavy Lifting**: The battery module is heavy after assembly. Use casters when moving and ensure the ground is flat.
- **Sharp Edge Protection**: Metal frames, busbars, and terminals may have sharp edges. It is recommended to wear protective gloves during operation.
- **Pinch Prevention**: When adjusting the moving cell compression side plate, be careful not to get fingers caught between the side plate and the cell.
:::

:::warning General Safety
- **Work Environment**: Assemble in a dry, well-ventilated indoor environment, away from flammable materials and water sources.
- **Keep Children Away**: During assembly and testing, ensure children stay away from the work area.
- **Qualified Tools**: Use tools with insulated handles, and ensure tool specifications match the screws to avoid stripping.
- **Personal Protection**: It is recommended to wear insulated gloves and safety glasses during assembly operations.
:::

:::note
Incorrect assembly may result in battery damage, fire, or personal injury. If you are uncertain about any step, please contact Gobel Power technical support.
:::

---

## Product Introduction

GP-Project-X is a LiFePO4 low-voltage (51.2V) battery DIY kit launched by Gobel Power, suitable for various 280Ah and 314Ah LiFePO4 cells. It adopts a modular design for simple and rapid installation.

### Main Features

- **Cell Specification**: Uses 314Ah LiFePO4 lithium iron phosphate cells
- **Connection Method**: 1P16S in series
- **BMS Protection**: 200A BMS, with 2A active balancing
- **Additional Protection**: Equipped with additional circuit breaker and fuse protection
- **Cell Layout**: Cells placed upright
- **Enclosure Option**: Optional transparent flame-retardant plastic enclosure

### Applicable Scenarios

GP-Project-X is suitable for home energy storage, off-grid solar systems, and other low-voltage large-capacity energy storage application scenarios.

---

## Parts List

|         No.          |         Name         |    Specification/Qty     |               Image                |
| :-------------------: | :------------------: | :--------------: | :-------------------------------: |
| <a id="部件01">01</a> |         Base         |       1 pc        |    ![Base](images/gp-px-base.jpg) |
| <a id="部件02">02</a> |       Metal Frame       |       2 pcs        |    ![Metal Frame](images/frame-cells.jpg) |
| <a id="部件03">03</a> |       Enclosure Back Panel       |       1 pc        |    ![Enclosure Back Panel](images/case-back.jpg) |
| <a id="部件04">04</a> |       Enclosure Front Panel       |       1 pc        |    ![Enclosure Front Panel](images/case-front.jpg) |
| <a id="部件05">05</a> |       Enclosure Side Panel       |       2 pcs        |    ![Enclosure Side Panel](images/case-side.jpg) |
| <a id="部件06">06</a> |       Enclosure Top Cover       |       1 pc        |    ![Enclosure Top Cover](images/case-top.jpg) |
| <a id="部件07">07</a> |    Moving Cell Compression Side Plate  |       2 pcs        |    ![Moving Cell Compression Side Plate](images/gp-px-moving-compression-plate.jpg) |
| <a id="部件08">08</a> |      H-Aluminum Alloy Slot Strip     |       4 pcs        |    ![H-Aluminum Alloy Slot Strip](images/h-slot-strip.jpg) |
| <a id="部件09">09</a> |     JK BMS 200A      |       1 pc        |    ![JK BMS 200A](images/jk-bms-200a.jpg) |
| <a id="部件10">10</a> |    JK BMS Communication Board     |       1 pc        |    ![JK BMS Communication Board](images/jk-comm-pcb.jpg) |
| <a id="部件11">11</a> |    Voltage Detection PCB Board A    |       1 pc        |    ![Voltage Detection PCB Board A](images/pcb-wiring-a.jpg) |
| <a id="部件12">12</a> |    Voltage Detection PCB Board B    |       1 pc        |    ![Voltage Detection PCB Board B](images/pcb-wiring-b.jpg) |
| <a id="部件13">13</a> |      Cell Epoxy Board      |      18 pcs        |    ![Cell Epoxy Board](images/epoxy-sheet-314.jpg) |
| <a id="部件14">14</a> |    Cell Bottom Insulation Film    |       4 pcs        |    ![Cell Bottom Insulation Film](images/film-cell-bottom.jpg) |
| <a id="部件15">15</a> |      BMS Mounting Plate       |       1 pc        |    ![BMS Mounting Plate](images/gp-px-bms-plate-.jpg) |
| <a id="部件16">16</a> |   BMS-Circuit Breaker Busbars   |       1 pc        |    ![BMS-Circuit Breaker Busbars](images/barsbar-bms-breaker.jpg) |
| <a id="部件17">17</a> |   Cell 8-9 Busbars      |       1 pc        |    ![Cell 8-9 Busbars](images/busbar-8-9.jpg) |
| <a id="部件18">18</a> |     Cell Series Busbars   |      14 pcs        |    ![Cell Series Busbars](images/busbar-314.jpg) |
| <a id="部件19">19</a> | Circuit Breaker-Battery Negative Output Terminal Busbars |   1 pc    |    ![Circuit Breaker-Battery Negative Output Terminal Busbars](images/busbar-breaker-pack-n.jpg) |
| <a id="部件20">20</a> |   BMS-Cell Total Negative Busbars |      1 pc        |    ![BMS-Cell Total Negative Busbars](images/busbar-cell-n-bms.jpg) |
| <a id="部件21">21</a> |  Fuse-Cell Total Positive Busbars |     1 pc        |    ![Fuse-Cell Total Positive Busbars](images/busbar-cell-p-fuse.jpg) |
| <a id="部件22">22</a> | Fuse-Battery Positive Output Terminal Busbars | 1 pc    |    ![Fuse-Battery Positive Output Terminal Busbars](images/busbar-fuse-pack-p.jpg) |
| <a id="部件23">23</a> |     Circuit Breaker Extension Lug   |       4 pcs        |    ![Circuit Breaker Extension Lug](images/breaker-stinger-lug.jpg) |
| <a id="部件24">24</a> |      Cell Metal Pressing Strip    |       2 pcs        |    ![Cell Metal Pressing Strip](images/pressing-strip.jpg) |
| <a id="部件25">25</a> |        Insulator        |       2 pcs        |    ![Insulator](images/Insulator.jpg) |
| <a id="部件26">26</a> | USB-RS485(RS232) Communication Cable |     1 pc        |    ![USB-RS485 Communication Cable](images/cable-usb-rs.jpg) |
| <a id="部件27">27</a> |    Battery Negative Output Terminal  |       1 pc        |    ![Battery Negative Output Terminal](images/terminal-pack-n.jpg) |
| <a id="部件28">28</a> |    Battery Positive Output Terminal  |       1 pc        |    ![Battery Positive Output Terminal](images/terminal-pack-p.jpg) |
| <a id="部件29">29</a> |      Metal Push Button Switch    |       1 pc        |    ![Metal Push Button Switch](images/push-button-switch.jpg) |
| <a id="部件30">30</a> |   JK BMS 4.5-inch Screen |       1 pc        |    ![JK BMS 4.5-inch Screen](images/jk-screen-4.jpg) |
| <a id="部件31">31</a> |        Caster          |   4 pcs (40kg load capacity each) |    ![Caster](images/2-inch-wheel.jpg) |
| <a id="部件32">32</a> |        Circuit Breaker        | 1 pc, 2P100A (total 200A) |    ![Circuit Breaker](images/2p100a-breaker.jpg) |
| <a id="部件33">33</a> |        Fuse        | 1 pc, 250A Class-T |    ![Fuse](images/fuse-200a.jpg) |

---

## Tools and Materials Preparation

The following tools and materials are not included with this kit. Please prepare them yourself before assembly:

| No. | Tool/Material | Specification/Requirement | Purpose |
| :--: | :-------: | :-------: | :--: |
| 1 | Screwdriver/Electric Screwdriver | Matching kit screw specifications | Tighten all component fixing screws |
| 2 | Torque Wrench | Range covering 5N.m ~ 20N.m | Tighten screws according to torque requirements |
| 3 | Multimeter | DC voltage measurement range 0V ~ 100V | Detect cell voltage and total voltage |
| 4 | Insulated Gloves | Withstand voltage above 1000V | Electric shock protection during assembly |
| 5 | Safety Glasses | Anti-splash type | Prevent metal debris or sparks from injuring eyes |
| 6 | Workbench | Stable, flat, insulated surface | Place and assemble all components |

:::caution
Please ensure all tool insulated handles are intact. Metal-exposed tools may cause short circuits when touching cells.
:::

---

## Screw Torque Requirements

To ensure all connection points are reliably tightened without over-tightening and causing damage, please operate according to the following torque requirements:

| Screw Specification | Torque Requirement |
| :------: | :------: |
|    M5    |   5N.m   |
|    M6    |   8N.m   |
|    M8    |  15N.m   |
|   M10    | 15-20N.m |

:::caution
Use a torque wrench to tighten screws according to the above requirements. Insufficient torque may cause loose connections and overheating; excessive torque may damage threads or components.
:::

---

## Module Assembly

Before starting the main assembly, the following modules need to be pre-assembled.

### 1. Base Assembly

Place the **Base ([01](#部件01))** on the workbench, and install the **Casters ([31](#部件31))** on the four corners of the base bottom, ensuring the caster directions are consistent and they can rotate normally.

![Base Assembly](images/assem-gp-px-base-full.jpg)

### 2. Enclosure Front Panel Assembly

Place the **Enclosure Front Panel ([04](#部件04))** face up, and install the **JK BMS 4.5-inch Screen ([30](#部件30))** and **Metal Push Button Switch ([29](#部件29))** into the corresponding openings on the enclosure front panel, securing them with screws.

![Enclosure Front Panel Assembly](images/assem-case-front.jpg)

### 3. Negative Enclosure Side Panel Assembly

Lay one **Enclosure Side Panel ([05](#部件05))** flat, and install the **Battery Negative Output Terminal ([27](#部件27))** onto the corresponding position on the side panel, securing it with screws. Confirm the terminal orientation is correct.

![Negative Enclosure Side Panel Assembly](images/assem-case-side-n.jpg)

### 4. Positive Enclosure Side Panel Assembly

Lay the other **Enclosure Side Panel ([05](#部件05))** flat, and install the **Battery Positive Output Terminal ([28](#部件28))** onto the corresponding position on the side panel, securing it with screws.

:::note
The negative enclosure side panel assembly and the positive enclosure side panel assembly are mirror images. Be sure to confirm the terminal orientation is correct during installation to avoid orientation errors during subsequent main assembly.
:::

![Positive Enclosure Side Panel Assembly](images/assem-case-side-p.jpg)

### 5. Circuit Breaker Assembly

Insert the **Circuit Breaker Extension Lugs ([23](#部件23))** into the four terminal ports of the **Circuit Breaker ([32](#部件32))** respectively, and secure them with screws. Ensure each lug has good contact with the terminal port.

![Circuit Breaker Assembly](images/assem-breaker.jpg)

### 6. BMS Assembly

Use the **BMS Mounting Plate ([15](#部件15))** as the base, and install the following components in sequence:
- Install the **JK BMS 200A ([09](#部件09))** onto the BMS mounting plate
- Install the **JK BMS Communication Board ([10](#部件10))** next to the BMS
- Install the **Insulators ([25](#部件25))** onto the corresponding positions of the mounting plate (for fixing the fuse)
- Install the **Fuse ([33](#部件33))** onto the insulators
- Install the assembled **Circuit Breaker Assembly** onto the BMS mounting plate
- Use the **BMS-Circuit Breaker Busbars ([16](#部件16))** to connect the BMS and circuit breaker

![BMS Assembly](images/assem-gp-px-bms-plate.jpg)

### 7. Lower Cell Module Assembly (Cells 9-16)

Lay the **Metal Frame ([02](#部件02))** flat on the workbench, and assemble the lower cell module according to the following steps:

a. Observe the metal frame; one side has a fixed side plate. When facing the metal frame, **keep the fixed side plate on the left**.

b. Lay the **Cell Bottom Insulation Film ([14](#部件14))** on the bottom of the metal frame. Place the cells according to the diagram, and use the **Cell Series Busbars ([18](#部件18))** to connect the cells in series sequentially.

![Lower Cell Module Top View](images/assem-cells-b.jpg)

![Cell Layout and Busbars Connection Diagram](images/bottom-frame-diagram.jpg)

:::note
The left side in the image is the fixed side plate, and the right side is the moving cell compression side plate.
:::

c. Install the **Moving Cell Compression Side Plate ([07](#部件07))** on the other side of the metal frame, and adjust the compression force on the cells by adjusting the 4 screws on the side plate, ensuring the cells are tightly arranged but not excessively squeezed.

![Adjusting Cell Compression Side Plate](images/assem-cells-side.jpg)

d. Place the **Cell Metal Pressing Strip ([24](#部件24))** on top of the cells, and secure them with screws onto the fixed side plate and the moving cell compression side plate.

:::note
One end of the cell metal pressing strip has a long slotted hole; this end should face the moving cell compression side plate to accommodate the side plate position adjustment.
:::

e. Place the **Voltage Detection PCB Board B ([12](#部件12))** on the cell metal pressing strip, with the end of the PCB board with terminals facing left. Then connect the detection wires on Voltage Detection PCB Board B to the corresponding cell busbars sequentially.

### 8. Upper Cell Module Assembly (Cells 1-8)

The assembly method for the upper cell module assembly is the same as the lower cell module assembly. The differences are:
- The position layout of the cell busbars is different (please refer to the diagram)
- Use **Voltage Detection PCB Board A ([11](#部件11))** instead of Voltage Detection PCB Board B

![Upper Cell Module Top View](images/assem-cells-t.jpg)

![Cell Layout and Busbars Connection Diagram](images/top-frame-diagram.jpg)

---

## Main Assembly

After completing all module pre-assembly, proceed with the main assembly according to the following steps.

### 1. Place Base Assembly

Place the assembled base assembly on the ground, and check whether all four **Casters ([31](#部件31))** are securely fixed and can rotate and lock normally.

### 2. Install Lower Cell Module

Carefully place the lower cell module assembly onto the base, and use screws to securely fix the cell module to the base.

![Installing Lower Cell Module](images/gp-px-step1.jpg)

### 3. Install Upper Cell Module

Place the upper cell module assembly on top of the lower cell module assembly, **ensuring the moving cell compression side plates of the upper and lower modules are on the same side**. Use screws to fix the upper and lower cell modules together.

![Installing Upper Cell Module](images/gp-px-step2.jpg)

### 4. Connect Cell 8 and Cell 9

Use the **Cell 8-9 Busbars ([17](#部件17))** to connect Cell 8 at the top of the lower module with Cell 9 at the bottom of the upper module, completing the series connection of the 16 cells.

![Connecting Cell 8 and 9](images/gp-px-step3.jpg)

### 5. Install BMS Assembly

Fix the BMS assembly on top of the upper cell module assembly, **with the fuse side facing left**. Use screws to securely fix the BMS mounting plate to the cell module frame.

![Installing BMS Assembly](images/gp-px-step4.jpg)

### 6. Connect Main Circuit and Detection Wires

- Use the **Fuse-Cell Total Positive Busbars ([21](#部件21))** to connect the positive pole of Cell 16 with the **Fuse ([33](#部件33))**
- Use the **BMS-Cell Total Negative Busbars ([20](#部件20))** to connect the negative pole of Cell 1 with the **JK BMS 200A ([09](#部件09))**
- Use communication cables to connect the voltage detection PCB boards with the BMS

![Main Circuit Connection Front](images/gp-px-step5.jpg)

![Main Circuit Connection Back](images/gp-px-step5-1.jpg)

### 7. Install Enclosure Assembly

Install each enclosure assembly onto the base, **positive side panel on the left, negative side panel on the right**. Connect the cables of the **JK BMS 4.5-inch Screen ([30](#部件30))** and **Metal Push Button Switch ([29](#部件29))** to the BMS.

![Installing Enclosure Assembly](images/gp-px-step6.jpg)

### 8. Connect Output Terminals

- Use the **Circuit Breaker-Battery Negative Output Terminal Busbars ([19](#部件19))** to connect the circuit breaker with the **Battery Negative Output Terminal ([27](#部件27))**
- Use the **Fuse-Battery Positive Output Terminal Busbars ([22](#部件22))** to connect the fuse with the **Battery Positive Output Terminal ([28](#部件28))**

![Connecting Output Terminals](images/gp-px-step7.jpg)

### 9. Secure Enclosure Side Panels

Insert the **H-Aluminum Alloy Slot Strips ([08](#部件08))** into the gaps between the enclosure side panels and the enclosure front/back panels, and secure all enclosure side panels one by one.

![Securing Enclosure Side Panels](images/gp-px-step8.jpg)

### 10. Install Enclosure Top Cover

Place the **Enclosure Top Cover ([06](#部件06))** on top of the battery, ensuring the top cover is aligned with all sides of the enclosure and sits steadily.

![Installing Enclosure Top Cover](images/gp-px-step9.jpg)

### 11. Assembly Complete

Check whether all screws are tightened, all busbars are installed in place, and all cables are connected correctly. After confirmation, the GP-Project-X battery kit assembly is complete.

---

## Contact Information

If you encounter any unresolved issues or have any questions, please contact Gobel Power technical support:

- **Official Website**: [www.gobelpower.com](https://www.gobelpower.com)
- **Technical Support Email**: cs@gobelpower.com

---
