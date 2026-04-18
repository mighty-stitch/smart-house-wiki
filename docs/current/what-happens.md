---
id: System Integration
title: What Happens When You Press a Switch
---

---

# System Integration

Now that we have the **Muscle (Shelly)**, the **Brain (Home Assistant)**, and the **Interface (CYD)**, how do they actually talk to each other? Here is the lifecycle of a single light command.

---

## What happens when I press a button in the CYD

When you walk up to a wall and tap the "Kitchen Light" button on the screen:

1. **The CYD:** Sends a signal over Wi-Fi to Home Assistant using the **ESPHome** protocol.
2. **Home Assistant:** Receives the request and looks up the linked **Entity ID**. It then sends a command to the Shelly Pro 4PM.
3. **The Shelly:** Flips the physical internal relay, sending 120V to the light bulb.
4. **The Feedback Loop:** The Shelly tells HA, "I am now ON." HA then tells the CYD to change the button color to ON. 

*This entire process happens in milliseconds.*

### A word on connectivity

The CYD, HA, and Shelly are all connected to the same network. So when you press a button on the CYD everything stays local, there is no cloud involved, meaning the system can work without Internet, but it cannot work without wifi. Wifi and Internet are not the same thing. 

Wi-Fi is the wireless technology that connects your local devices like iphones, CYD, shelly, while the internet is the global network of data you access through that connection. We use wifi to access the internet. Think of the internet as a worldwide highway system and Wi-Fi as your local driveway connecting your house to that highway. CYD + Shelly + HA works perfectly fine just using the local driveway, no need for highways


---

## What happens when I use the Shelly App
If you open the official Shelly App on your phone:

#### At Home (Local)
Your phone communicates directly with the Shelly over your local Wi-Fi. The light turns on instantly. Home Assistant "watches" the Shelly, notices the change, and updates the status on your CYD screens automatically so everything stays synced.

#### Away from Home (Remote)
When you are at a friend's house, your phone sends a command to the **Shelly Cloud**. The cloud then sends the command down to your Shelly Pro 4PM at home. Because the Shelly is always connected to the internet, you have full control from anywhere in the world.


---

## Summary of Roles
* **Shelly:** Manages the electricity and works even if the internet dies.
* **Home Assistant:** The "Traffic Controller" that links the screens to the switches.
* **CYD:** The convenient "Window" into the system that lets you control the house without a phone.

:::tip Reliability
Because of this integration, you never have a "ghost" light—where the app says it's off but it's actually on. Every piece of the puzzle is constantly talking to the others to ensure the status is always accurate.
:::
