---
sidebar_position: 3
description: Learn about frequently asked questions (FAQ) for GP-PC200B BMS, including connection methods, firmware upgrades, parallel configuration, and inverter communication.
---

# GP-PC200B BMS Frequently Asked Questions (FAQ)

### Which operating systems are supported by the upper computer software?
Answer: Currently, only Windows operating system is supported.

### What type of communication cable is required to connect to the upper computer?
Answer: An RS232-USB communication cable is required. For each battery pack, we provide one such communication cable free of charge.

### Can users upgrade the BMS firmware by themselves?
Answer: Yes. We will provide the latest firmware installation package, upgrade tool, and corresponding operation manual.

### Does BMS support parallel operation? How many units can be connected in parallel at most?
Answer: Yes, it is supported. The system supports up to 63 BMS units running in parallel.

### How are the BMS communication addresses assigned when in parallel operation?
Answer: There are two methods:
1. **Manual dial code**: According to the dial code table in the specifications, manually set the dial code switches on each BMS to assign addresses.
2. **Automatic dial code**: Set all BMS dials to `000000` (or initial state), and the BMS will automatically assign communication addresses.

### How are the BMS units physically connected to each other in parallel operation?
Answer: When in parallel, use standard network cables to connect the RS485B and RS485C ports of each BMS in series (daisy-chain method).
> :::important
> **Note**: RS485B is the output port, and RS485C is the input port. The connection method is: RS485B of the first unit connects to RS485C of the second unit, and so on.
> :::important

### What happens if the BMS fails to communicate with the inverter?
Answer: If the inverter is set to "Lithium Battery Mode", it must establish normal communication with the BMS to operate. Once communication is interrupted or fails, the inverter will trigger an error alarm (Error) and stop drawing power from or charging the battery.

### Does it support WiFi remote monitoring and management?
Answer: Yes. By connecting an external WiFi module (provided by us), each battery in the parallel system can be remotely monitored and managed via the vrm.gobelpower.com platform or mobile app. Both the platform and the app are permanently free to use.