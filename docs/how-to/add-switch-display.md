---
id: add-switch-display
title: Add / Configure a Switch Display
---


# Transforming a CYD into a Light Switch

This guide will walk you through how to take a raw ESP32-CYD (Cheap Yellow Display) and flash it with the custom layouts to turn it into a smart light switch for your home.

You don't need to be a programmer, and you definitely don't need to read pages of technical manuals. I have already did the heavy lifting by creating the files (the "blueprints") for you. All that is left is "copy-paste" some names and send the file to the screen. It’s as easy as moving a photo to a thumb drive.


## What You Are Actually Doing

When you configure a CYD, you are creating firmware for it using **ESPHome**. That firmware contains: The screen layout, the button configuration, the Wi-Fi credentials and the connection settings to Home Assistant.

Once uploaded, the device runs independently. It does not need to stay connected to your computer. It becomes part of the system. Think of it as installing a personality into a blank screen.


---

## Set up

To get started, you will need the following tools downloaded on your computer:

* **Python:** The engine that runs the setup tools.
* **Homebrew:** A "helper" app that makes installing Python very easy (for Mac users).
* **ESPHome:** The specific tool that talks to the CYD screen.
* **VS Code:** A simple text editor where you will type the names of your lights.
* **GitHub Files:** A copy of my pre-made layouts. [Download the files here](https://github.com/mighty-stitch/smart-home).

> **Note:** If you already have these installed and configured, you can skip the SET UP section


### 1. Install Visual Studio Code
VS Code is the text editor we use to modify the CYD files. It highlights errors and makes the YAML code easy to read.

1. Download it from [code.visualstudio.com](https://code.visualstudio.com/).


### 2. Install Homebrew & Python

First you need to get python, if you have homebrew already in your computer then you can let homebrew take care of the installation. However, if don't have homebrew, you can either install python straight from the [web](https://www.python.org/) or install homebrew. 

The instruction below show you how to both install Homebrew and python

1.  Open your **Terminal** (Search for "Terminal" on your Mac).
2.  Paste this line and hit Enter to install Homebrew:
```js
 /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```
3.  Once that finishes, type this to install Python:

```js
 brew install python
```
   
4. After installation, verify it works by opening Terminal and running:

```js
 python3 --version
```
    
### 3. Download the Configuration Files
I have prepared the specific CYD configuration files on GitHub. You don't need to use Git commands; you can just grab the package:

1.  Navigate to the [Smart home](https://github.com/mighty-stitch/smart-home)..
2.  Click the green **Code** button.
3.  Select **Download ZIP**.
4.  Extract the ZIP file to a folder on your Desktop (e.g., `smart-home-main`).


### 4. Create a Virtual Environment
To keep your computer clean and avoid software conflicts, we create an isolated "Virtual Environment" inside your project folder.

1.  In your terminal, navigate to your extracted folder:
    ```bash
    cd Desktop/smart-home-main
    ```
2.  Create the environment:
    ```bash
    python3 -m venv esphome_env
    ```
3.  **Activate it:**
    * **Mac/Linux:** `source venv/bin/activate`
    * **Windows:** `.\venv\Scripts\activate`

:::info
You will know it worked if you see `(esphome_env)` appear at the start of your terminal prompt.
:::


### 5. Install ESPHome
Now that you are inside your virtual environment, install the ESPHome software that handles the compilation and flashing:

```bash
pip install esphome
```


### Summary Checklist

Before moving to the next step, ensure:

- [ ] **Homebrew and Python** are installed.
- [ ] **Visual Studio** are installed.
- [ ] You have **extracted** the project files from the ZIP.
- [ ] Your terminal shows `(esphome_env)` (the environment is active).
- [ ] **ESPHome** is installed and ready.

:::tip Next Steps
Now that your "workshop" is ready, we can move on to modifying the YAML files and flashing your first CYD!
:::












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



open -a "Visual Studio Code" .



## 5. Customizing the "Recipe" (The YAML)

Open your chosen file in VS Code. Look for the `substitutions:` block at the very top. This is the **only** part you need to edit.

## adding to HA 

Very important step, otherwise it won't work

```yaml
substitutions:
  # 1. Put the Home Assistant names of your lights here:
  light_1_entity: "switch.8_room_2_light"
  light_2_entity: "switch.24_room_2_outlet"
  light_3_entity: "switch.9_up_hall_single_lgt"
  
  # 2. Give this specific screen a unique ID name:
  device_name: "room-2-display"

```