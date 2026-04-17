---
id: home-assistant
sidebar_position: 3
title: Home Assistant
---

# Home Assistant: The Brain

While the Shelly Pro 4PM is the "muscle", **Home Assistant (HA)** is the "local brain," the central nervous system of the entire house. It is the command center that allows all our different pieces of hardware to talk to each other.

### What is Home Assistant?
Home Assistant is an open-source hub that lives on a dedicated computer in the house (in this case a Raspberry Pi). Its primary job is **unification**. Instead of having ten different apps for ten different light bulbs, HA brings everything into one single interface.

#### Why do we need HA if Shelly is already "Smart"?
It’s a fair question: If Shelly can handle its own schedules and apps, why add another layer?

The answer is the **CYD (Cheap Yellow Display)**.
* **The Problem:** The CYD screens on our walls are custom hardware. They don't know "how" to talk to a Shelly relay directly.
* **The Solution:** Home Assistant acts as the **Translator**. When you tap a button on a CYD screen, the screen tells Home Assistant. Home Assistant then instantly tells the Shelly to flip the switch. 

:::info Interoperability
Without Home Assistant, the CYDs would just be glowing plastic squares. HA is the bridge that turns a touch-screen command into a physical light turning on.
:::

### **Explain It Like I’m Five**
Imagine the house is like a big international meeting where everyone speaks a different language:

* **The CYD (The Face)** only speaks **Spanish**. It knows you want the lights on, but it can’t tell the switches directly.
* **The Shelly (The Muscle)** only speaks **French**. It is ready to pull the lever, but it doesn't understand Spanish.
* **Home Assistant (The Brain)** is the **World-Class Translator**. It sits in the middle, listens to the Spanish command from the screen, translates it into French, and tells the switch exactly what to do.

Because Home Assistant is a master translator, I can add new "experts" to the meeting whenever I want, let's say wireless remote to control the lights or a third party switch. Even if they speak a third language, Home Assistant just learns to translate for them too, and the whole house keeps talking perfectly.

---

### How to Access & Manage HA

You can access Home Assistant from any web browser on your local network:
**Link:** [http://homeassistant.local:8123](http://homeassistant.local:8123)

#### Small overview of the Website

The interface is very simple. It is split into two main areas: the **Sidebar** (your navigation) and the **Dashboard** (your controls).

##### 1. The Dashboard (Home)
This is your main "Overview" tab. It’s the visual control center where you see your light switches, power usage graphs, and the status of the house at a glance.

##### 2. The Sidebar
While there are many options, you really only need to care about two:
* **Home (Overview):** Shows all the lights in the house grouped by house rooms.
* **Settings:** The "Engine Room" of the house.


![HA](/img/HA.png)


Out of these two sections settings is the most important area for managing the house hardware. There are many things that can be adjusted and added in settings. However the two most important are: 

* **Add Devices:** Go to **Devices & Services** to link a new Shelly Pro 4PM or a new CYD screen to the network.
* **Identify Hardware:** You can check the specific **Name ID** or IP address of your CYD screens here.


:::note Local Privacy
One of the best things about HA is that it runs **locally**. Your data doesn't go to a random server in the cloud just to turn on your kitchen light—it stays inside your walls.
:::


---

### Expanding the Empire: What else can HA do?

Controlling the Shelly Pro 4PM is just the beginning. Home Assistant acts as the "Glue" that lets you add almost any smart device to the house and make them work together.  Because Home Assistant supports over 2,000 different brands, we can integrate almost anything:

#### 1. Voice Control
You can bridge your Shelly and CYD setup into **Apple HomeKit**, **Google Assistant**, or **Alexa**. This adds a third way to control the house: if you aren't near a CYD screen and don't have your phone, you can just use your voice.

#### 2. Smart Automations
This is where the house actually becomes "smart." You can create logic that handles the boring stuff for you:
* **Master Switches:** One tap on a CYD screen can trigger a "Goodbye" routine that kills every Shelly relay and turns off the TV.
* **Occupancy:** Use motion sensors to turn on the hallway lights if you walk by at night.

#### 3. Security
You can integrate door sensors or cameras. If a door opens while you aren't home, Home Assistant can tell the Shelly to flash every light in the house or send a notification to your phone.

:::info One App to Rule Them All
The best part is that even if you buy different brands of bulbs or sensors, they all end up looking the same on your CYD screens and in the HA app.
:::