---
id: esp32-cyd
sidebar_position: 4
title: ESP32 CYD Display
---


# The CYD: Your Wall Interface

The **CYD**, which stands for **Cheap Yellow Display**, is the visual face of the house. While the Shelly is in the electrical panel and Home Assistant is hidden on a closet, the CYD is what you actually interact with every day.

## What is the CYD?
The CYD is a low-cost, 3.5-inch touchscreen powered by an **ESP32** chip. It is a highly versatile device used by hobbyists for everything from mini-TVs to weather stations. 

In this house, I am using it specifically as a **Smart Wall Switch**. Instead of a standard plastic toggle, we have a dynamic screen that can control multiple lights, or display the time.

### Powered by ESPHome
To make the CYD talk to Home Assistant, I use **ESPHome**. 
* **What it is:** ESPHome is a system that allows me to write a simple configuration file and "flash" it onto the screen.
* **How it works:** It turns the CYD into a native part of Home Assistant. Once the screen is on the Wi-Fi, it shows up instantly, allowing the buttons on the screen to trigger the Shelly relays in the panel.

---

## A Word on Electricity (Low Voltage)
Safety and wiring are handled differently for these screens than for standard 120V switches. While the Shelly handles the high-power stuff, the CYDs run on **Low Voltage DC**.

* **The Setup:** The house is wired with a **24V / 20A** DC powersupply.
* **The Conversion:** The CYD operates on **5V**. 
* **The Buck Converter:** Because we are sending 24V through the walls to prevent power loss over long distances, there is a small converter tucked behind every switch box. This "steps down" the 24V to the 5V the CYD requires.

:::warning Safety Note
This entire system is DC (Direct Current) for the CYD. It is separated from the 120V AC lines, making it much safer to work on and modify behind the wall plates.
:::

---

## Making a CYD a Switch

To turn a brand new CYD into a house controller or switch, you need to "flash" it with our custom firmware using your laptop. The process is pretty staightfoward

1. **Connection:** The CYD is plugged into a laptop via USB.
2. **Environment:** We use a Python virtual environment to run the ESPHome tools.
3. **Flashing:** Running the `esphome run` command compiles the code and uploads it to the device.

#### The Configuration Files
The code is already written—you don't need to be a programmer to set a new one up. You only need to modify a few variables in the configuration file:
* **CYD Name:** Giving the device a unique ID (e.g., `room-4`).
* **Target IDs:** Mapping the on-screen buttons to the specific **Light IDs** you want to control ((e.g., `room-4`).)

:::note
For more detailed instruction on how to add or modify and existing cyd check the "how to" section
:::



