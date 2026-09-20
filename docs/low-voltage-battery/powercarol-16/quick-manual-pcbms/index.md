---
sidebar_position: 2
sidebar_label: Quick Guide
toc_min_heading_level: 2
description: Gobel Power 51.2V 314Ah LiFePO4 low-voltage energy storage battery quick installation guide
keywords: [Gobel Power, GP-WP1-16K-PC200B, PowerCarol 16, waterproof, IP65, LiFePO4, energy storage battery, quick installation]
---

# Gobel PowerCarol 16 Quick Installation Guide

This guide applies to the Gobel Power PowerCarol 16 series (model GP-WP1-16K-PC200B) and is intended for experienced installers, listing only the key steps and points. For complete installation instructions, safety precautions, and troubleshooting, refer to the *Gobel PowerCarol 16 Installation Manual*.

<a id="Quick-Specs"></a>
## 1. Key Product Specifications

| Item | Parameter |
| :--- | :--- |
| Product name | Gobel PowerCarol 16 |
| Product model | GP-WP1-16K-PC200B |
| Rated voltage/capacity | 51.2V / 314Ah (approx. 16kWh) |
| Output terminals | 1 positive and 1 negative energy storage quick-connect terminal, max. current capacity 200A |
| Connection method | Parallel only (up to 63 units); series connection is strictly prohibited |
| Installation method | Floor-standing (with casters and handles) |
| Dimensions/weight | 477 × 959 × 270mm, approx. 125kg |
| Ingress protection | IP65, suitable for both indoor and outdoor installation |
| Operating environment | Charging 0°C ~ 55°C, discharging -20°C ~ 55°C, ≤95% RH (non-condensing) |

<a id="Quick-Interface"></a>
## 2. Key Panel Components

![Gobel PowerCarol 16 interface panel diagram](images/gp-wp1-16k-pc200b-interface-label.jpg)

| No. | Name | Purpose |
| :---: | :--- | :--- |
| 1 | RS485A/CAN port | Inverter communication |
| 2 | RS232 port | Connect to a PC host |
| 3 | WiFi interface | Wireless monitoring |
| 4 / 5 | RS485B / RS485C ports | Battery parallel communication |
| 6 | ON/OFF switch | Turn the BMS on/off |
| 9 | LED bar | Indicates SOC, Run, and Alarm status |
| 10 / 11 | Positive/negative terminals | Power cable connections (energy storage quick-connect terminals) |
| 12 | Circuit breaker | Switches the battery main circuit on/off |

<a id="Quick-Safety"></a>
## 3. Safety Essentials

:::danger Electric shock hazard
Before any operation, be sure to open the battery circuit breaker and press the ON/OFF switch to turn off the BMS; a residual voltage may remain between terminals after power-off. Wait at least 10 minutes and use a multimeter to confirm there is no voltage before wiring.
:::

:::caution
- Never short-circuit the positive and negative terminals, and never reverse-connect them; never connect batteries in series
- This product weighs 125kg; do not attempt to move it by force alone, and never lay it on its side or upside down
- Use insulated tools, wear insulated gloves, and remove metal jewelry
- Disassembling the battery is strictly prohibited except by manufacturer-authorized personnel
:::

<a id="Quick-Install"></a>
## 4. Installation

1. **Environmental requirements**: The floor must be level with sufficient load capacity, well ventilated, dry, and clean; keep ≥100mm clearance from walls on both sides of the battery, ≥300mm at the top, and reserve ≥800mm of operating space in front.

2. **Positioning**: Use the side handles together with the bottom casters to move the battery to the installation location (two people are recommended to prevent tipping). Once in position, lock the casters and use a spirit level to confirm the battery is level.

3. **Unboxing inspection**: Check the contents against the parts list; press the ON/OFF switch to power on, close the circuit breaker, and use a multimeter to measure the voltage between the positive and negative terminals — it should normally be between **40V ~ 58V**. If abnormal, do not install; contact technical support.

<a id="Quick-Wiring"></a>
## 5. Electrical Connections

### 5.1 Grounding

Complete the grounding connection of the battery system in accordance with local electrical codes and the inverter's requirements.

### 5.2 Power Cable Fabrication and Connection

- Provide your own 50mm² power cable; pass the cable through the tail cover of the energy storage quick-connect terminal (02), strip the wire, insert it to the bottom of the crimp copper ring, crimp with a matching crimping tool, then screw the tail cover back on and tighten it
- Crimp the other end of the cable according to the terminal specifications of the inverter or busbar, and tighten it to the torque required by the corresponding manual
- Insert the positive terminal into the battery's positive terminal and lock it fully in place, then connect the other end to the inverter's battery input positive; likewise for the negative

:::caution
Before connecting, confirm the inverter is powered off; be sure to verify correct positive/negative polarity — reverse connection will cause severe equipment damage. Poor crimping can cause abnormal heating or even burning, so after crimping, be sure to check each item to confirm it is secure.
:::

### 5.3 Communication Connections

- **Inverter communication**: Connect one end of the communication network cable to the RS485A/CAN port of the **master** battery, and the other end to the inverter's BMS communication interface (RS485 or CAN, depending on the inverter)
- **Outdoor installation**: The end connected to the battery (both ends for parallel cables) must be made waterproof using an RJ45 waterproof cable gland (06) and a crystal connector (07); see the "Fabricating Waterproof Communication Cables" chapter of the installation manual for the steps
- **Parallel communication** (for multiple units): Connect unit 1's RS485B to unit 2's RS485C, unit 2's RS485B to unit 3's RS485C, and so on in a daisy chain
- The supplied network cable has a symmetric pinout; if it does not match the inverter's pin definitions, you must make your own cable (e.g., for Victron inverters); see Appendix III of the installation manual for pin definitions

:::note
Parallel addresses are assigned automatically by the system (auto dialing); no manual DIP switch setting is required.
:::

### 5.4 Multiple Units in Parallel

- Connect the positive and negative terminals of each battery to the busbar via power cables, then connect the busbar to the inverter
- Never connect batteries of different models or different specifications in parallel

![Diagram of multiple batteries connected to the inverter](images/gp-wp1-16k-pc200b-multi-pack-with-inverter.jpg)

:::note
In the diagram, solid lines are power cables and the busbar, dotted lines are the inverter communication cables, and dash-dotted lines (-.-.-) are the battery parallel communication cables.
:::

<a id="Quick-Protocol"></a>
## 6. Communication Protocol Settings

When multiple units are connected in parallel, only the **master** needs to be set. Choose any one of the three methods:

1. **PC host**: Connect to a Windows PC via the RS232-USB communication cable (04) to configure
2. **Mobile APP**: Connect to a phone via the USB-Type C data cable (05) and configure in the Gobel Console APP
3. **Gobel VRM platform or APP**: Configure online once the battery is connected to the network

:::note
Before configuring, confirm that the inverter and battery are compatible (see the "Reference Documents" chapter of the installation manual for the compatibility list).
:::

<a id="Quick-PowerOn"></a>
## 7. Power-On

**BMS power-on (ON/OFF switch) → wait for self-test to complete → circuit breaker ON → inverter power-on**

1. Confirm all cables are securely connected and the area is clear of personnel and foreign objects
2. Press the ON/OFF switch on all batteries to power on, and wait until the LED bar shows normal status with no alarm
3. Switch the circuit breaker of all batteries to ON
4. Power on the inverter and set the battery type to lithium
5. Confirm the inverter can correctly read battery data (voltage, SOC, temperature, etc.), then proceed with charge/discharge testing

:::warning
Do not power on the inverter before or at the same time as closing the circuit breaker, and do not skip the waiting step; otherwise, inrush current may occur and damage the equipment.
:::

<a id="Quick-PowerOff"></a>
## 8. Power-Off

**Inverter shutdown → wait until it has fully stopped → circuit breaker OFF → BMS shutdown (ON/OFF switch)**

:::caution
A residual voltage may remain between terminals after shutdown; do not touch the terminals immediately.
:::

<a id="Quick-Troubleshooting"></a>
## 9. Quick Troubleshooting

| Symptom | Remedy |
| :--- | :--- |
| Inverter cannot read battery data | Check the communication cable connections; verify pin definitions; reset the communication protocol |
| Alarm indicator is lit | Investigate the cause of the fault; contact technical support if it cannot be resolved |
| Abnormal terminal voltage measured during unboxing (below 40V or above 58V) | Stop installation and use; contact technical support |
| WiFi/APP cannot connect | Reconfigure as described in the *WiFi User Guide* |
| Abnormal heating at the quick-connect terminal connection | After power-off, reinsert and tighten the terminal; re-crimp if necessary |

For detailed fault handling, emergency procedures, and communication pin definitions, refer to the appendices of the installation manual.

<a id="Quick-More"></a>
## 10. More Documents

- *Gobel PowerCarol 16 Installation Manual* (full version)
- *WiFi User Guide*, *PCBMS Software User Guide*, *Gobel Console User Guide*, *Inverter Compatibility List* (see the "Reference Documents" chapter of the installation manual)

## Contact

| Item | Information |
| :--- | :--- |
| Official website | [www.gobelpower.com](http://www.gobelpower.com) |
| Technical support email | [cs@gobelpower.com](mailto:cs@gobelpower.com) |
