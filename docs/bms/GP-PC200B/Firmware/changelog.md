---
sidebar_position: 3
sidebar_label: Changelog
---


# GP-PC200B BMS Firmware Changelog

=======================

**Hardware Versions:**

Main Board: **P16S200A-51706-1.2**

Communication Board: **IOB-31834B-1.0**

=======================

### P41755V110-51706-1.30A-002

- Fixed abnormal voltage detection.

- Updated active balancing logic:

	a. Resting mode activation conditions: CVmax &gt; balancing activation voltage and voltage difference &gt; 30 mV.

	b. Resting mode deactivation conditions: CVmax &lt; balancing activation voltage or voltage difference &lt; 20 mV.

	c. Charge/discharge activation conditions: CVmax &gt; balancing activation voltage and voltage difference &gt; 50 mV.

	d. Charge/discharge deactivation conditions: CVmax &lt; balancing activation voltage or voltage difference &lt; 40 mV.

	e. For every 500 cycles of activation/deactivation, increase the threshold by 1 mV, up to a maximum of 20 mV.

	f. Maximum run time per activation is 1 hour; after deactivation, a 10-minute interval is required before restarting.

	g. Apply a 10-second filter to voltage data.

	h. Do not activate if the average cell voltage is greater than 3625 mV.

	j. Do not activate if voltage difference exceeds 1000 mV.

	k. Do not activate during high-temperature alarm.

	l. Do not activate when a fault is present.

	m. Do not activate during temperature protection.

	n. Overvoltage protection allows activation; undervoltage protection does not.

	o. Removed.

	p. Current &lt; 2 A is considered resting.

	q. Evaluate activation or switching balancing cells every 1 minute.

- Modified dynamic SOC protection logic (currently disabled): 

	After protection is triggered, the discharge current request changes from 0 A to 10 A.



### P41755V110-51706-1.30-000

- Supports 63 battery packs in parallel; setting all to 000000 enables automatic dialing.

- Modified WIFI-RS232 protocol: the “normal RTN” in returned data is changed to the requested CID2.

### P41755V110-51706-1.10-000

- Supports 31 battery packs in parallel.

- Dynamic SOC protection logic: 

	a. When SOC is lower than Minimum Discharge SOC, DCL is 0  (Released after SOC +30%)
	When battery voltage is lower than Pack Under Voltage Alarm, DCL is 0 (Release after voltage + 3V)

	b. Dynamic Minimum Discharge SOC: Increased if not fully charged for certain days
	Default: 10%

	c. 4 days without full charge: 50%

	d. 8 days without full charge: 70%

	e. After fully charge: reset to default

> 	Set SOC Alarm to be below 5% to bypass dynamic Minimum Discharge SOC logic. (Warning: check battery voltage and charge battery to full regularly if disable automatic SOC management to prevent over discharge) 

- Max Request Charge Voltage (CVL) logic: 

	a. 1 hour after fully charging, Max Request Charge Voltage is changed to Pack OVP Release Value. 

	b. Max Request Charge Voltage is recovered to Pack FullCharge Voltage Value after SOC drops to 95%.

- Fully condition: 

	a. Fully condition voltage ≥ Max Charge Voltage - 0.5V

	b. Fully condition current ≤ Current

