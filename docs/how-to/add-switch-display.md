---
id: add-switch-display
title: Add / Configure a Switch Display
---


# Transforming a CYD into a Light Switch

This guide will walk you through how to take a raw ESP32-CYD (Cheap Yellow Display) and flash it with the custom layouts to turn it into a smart light switch for your home.

You don't need to be a programmer, and you definitely don't need to read pages of technical manuals. I have already did the heavy lifting by creating the files (the "blueprints") for you. All that is left is "copy-paste" some names and send the file to the screen. It’s as easy as moving a photo to a thumb drive.


:::note In short
You do not need to write code from scratch. The layouts are already prepared. Your job is simply to:
choose the correct layout, insert the correct light name and flash the device. That's it
:::


## What You Are Actually Doing

When you configure a CYD, you are creating firmware for it using **ESPHome**. That firmware contains: The screen layout, the button configuration, the Wi-Fi credentials and the connection settings to Home Assistant.

Once uploaded, the device runs independently. It does not need to stay connected to your computer. It becomes part of the system. Think of it as installing a personality into a blank screen.


---

## 1. Explain It Like I'm Five (The "Magic Screen")

Imagine you bought a blank TV screen. Right now, it doesn't know it’s supposed to be a light switch; it’s just a box of parts. 

To make it work, we use a **"Recipe Book" (The YAML file)**. 
1. **The Layout:** You pick a page in the book that has the right number of buttons (1, 2, 3, etc.).
2. **The Names:** You write down the names of your lights on that page so the screen knows who to talk to.
3. **The Flash:** You "beam" that page into the screen using a computer. 

Once the screen reads the recipe, it grows its own buttons, connects to the Wi-Fi, and starts acting like a light switch!

---

## Set up

To get started, you will need the following tools downloaded on your computer:

* **Python:** The engine that runs the setup tools.
* **Homebrew:** A "helper" app that makes installing Python very easy (for Mac users).
* **ESPHome:** The specific tool that talks to the CYD screen.
* **VS Code:** A simple text editor where you will type the names of your lights.
* **GitHub Files:** A copy of my pre-made layouts. [Download the files here](https://github.com/mighty-stitch/smart-home).

> **Note:** If you already have these installed and configured, you can skip the next section and go straight to **"4. Choosing Your Layout."**


### The Installation Guide

If your computer is "empty," follow these steps to get your tools ready. 

#### Install Homebrew & Python

First you need to get python, if you have homebrew already in your computer then you can let homebrew take care of the installation. However, if don't have homebrew, you can either install python straight from the [web](https://www.python.org/) or install homebrew. 

The instruction below show you how to both install Homebrew and python

1.  Open your **Terminal** (Search for "Terminal" on your Mac).
2.  Paste this line and hit Enter to install Homebrew:
    `/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`
3.  Once that finishes, type this to install Python:
    `brew install python`
4. After installation, verify it works by opening Terminal and running:
    `python3 --version`

### Create a Virtual Environment
In your Terminal, we need to create and enter your private "sandbox":
1.  Create the folder: 
    `python3 -m venv esphome_env`
2.  Enter the folder (Activate it): 
    `source esphome_env/bin/activate`
    *(You will now see `(esphome_env)` appear at the start of your typing line. This means you are inside the safe zone!)*

### Install ESPHome 
Now that you are inside your safe space, install the tool:
1.  Type: `pip install esphome`
2.  Press **Enter**. You will see text scrolling; that means it’s working!

### Install VS Code
1.  Download **Visual Studio Code** from [code.visualstudio.com](https://code.visualstudio.com/).


open -a "Visual Studio Code" .

---



---

## 3. Initial Setup (The Environment)

If this is your first time, you need to prepare your "workshop" (your computer):

1.  **Install Python:** Download it from python.org.
2.  **Install ESPHome:** Open your computer's terminal (Command Prompt or PowerShell) and type:
    `pip install esphome`
3.  **Open VS Code:** Open the folder containing my YAML layout files.






---

## 4. Choosing Your Layout

I have designed several layouts. You just need to pick the one that fits the room.

### **Room & Sleep Layouts**
The number tells you how many buttons will appear on the screen.
* **Room 1–5 (`room_1.yaml` etc.):** Standard layouts for kitchens, halls, or living rooms.
* **Sleep 1–5 (`sleep_room_1.yaml` etc.):** These are exactly like the room layouts, but they have a **"Go to Bed" feature**. When you tap the screen at night, you can turn the backlight completely off so the room stays dark while you sleep.

### **Specialized Layouts**
* **LED-strip_room_4.yaml:** Used specifically for rooms with color-changing LED strips.
* **header_room_4.yaml:** A layout with a dedicated title bar at the top for room info.

---

## 5. Customizing the "Recipe" (The YAML)

Open your chosen file in VS Code. Look for the `substitutions:` block at the very top. This is the **only** part you need to edit.

```yaml
substitutions:
  # 1. Put the Home Assistant names of your lights here:
  light_1_entity: "switch.8_room_2_light"
  light_2_entity: "switch.24_room_2_outlet"
  light_3_entity: "switch.9_up_hall_single_lgt"
  
  # 2. Give this specific screen a unique ID name:
  device_name: "room-2-display"
