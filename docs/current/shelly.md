---
id: shelly
sidebar_position: 2
title: Shelly
---


# Shelly 

First lets me introduce Shelly which is not a product nor a framework, but a company. Shelly specializes in smart houses. They make everything from smart light bulbs and motion sensors to flood detectors and motorized window blind controllers. If it’s a device in your home that needs to be "smart," Shelly likely makes a version of it.

Shelly makes a lot of products, however for the purpose of this house you only need to know about the **Shelly Pro 4PM** 


## Shelly Pro 4PM

The **Shelly Pro 4PM** is the component that actually handles the electricity. It is a professional-grade, 4-channel smart relay designed to live inside your electrical panel.


:::note
You can think of shelly a smart switch / smart relay, or the muscle of the system. It handles the actual work of allowing electricity to flow, turning the lights on. Or to block the flow of electricity, turning the lights off
:::

### The Technical Specs

The "Pro" series is Shelly’s top-tier hardware, built specifically for reliability and high-capacity switching. 

**Physical Build** It features a DIN-rail mountable design, which means it snaps directly into standard electrical breaker boxes. It also includes a 1.8-inch color screen on the front that displays real-time status and power usage for all four circuits, which also allows you to control the lights from the device itsel.

**Power and Capacity** This device can handle a lot of weight. It supports up to **16A per channel**, with a total device limit of **40A**. It operates on standard house voltage (110V - 240V AC), making it a perfect one-to-one replacement for the old LiteTouch modules.

**Connectivity** Reliability is the priority here. The 4PM supports **Wi-Fi** (2.4GHz), **Bluetooth** (for easy setup), and most importantly, **LAN (Ethernet)**. By plugging an internet cable directly into the Shelly, we ensure the lights respond instantly without worrying about Wi-Fi interference.

**Intelligence and Safety** Inside is an ESP32 processor with 8MB of flash memory. It isn't just a "dumb" switch; it has built-in protection against over-powering, over-voltage, and over-heating. If something goes wrong with a light bulb, the Shelly senses it and shuts down that specific circuit automatically.

:::info Technical Note
The "4" in 4PM stands for the four channels, and the "PM" stands for Power Monitoring. Each channel is rated for up to 16A, with a total device limit of 40A.
:::

---

### More Than Just a Muscle

To keep the story simple, I have been portraying Shelly as the "muscle" that does the heavy lifting with the 120V electricity. While it definitely handles the power, Shelly is actually much smarter than that. In fact, if it had to, Shelly could run the whole show on its own.

#### A Brain of Its Own
Every Shelly Pro 4PM has its own internal computer (an ESP32 processor). This means it doesn't actually *need* Home Assistant or a CYD screen to function. It has its own memory and its own "mini-website" built right into the device. 

Even without the custom screens on the walls, you can use the official Shelly App on your phone. This allows the Shelly to act as a **Remote Switch**. Whether you are sitting on the couch or away from home, you can open the app and click a button to toggle the lights. The Shelly receives that command directly and executes it instantly.

Shelly gives you full **Independence**. 

* **No Home Assistant?** No problem. The Shelly can still run schedules (like turning the porch lights on at sunset) all by itself.
* **No CYD Screen?** You can still use the physical buttons on the front of the Shelly unit in the electrical panel or the app on your phone.


---

:::tip The "Safety Net"
Because Shelly is so independent, it acts as a safety net for the house. I use Home Assistant and the CYD screens to make the house *convenient*, but Shelly makes sure the house is *reliable*.
:::
---



