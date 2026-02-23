---
id: issue
sidebar_position: 5
title: Issue
---

# The Fall of LiteTouch
## Why Migrate? 

The decision to decommission the LiteTouch system was not based on a desire for "new gadgets," but on the total operational failure of the home's original infrastructure. After 40 years of service, the system reached a point where it was no longer operational, nor maintainable.

---

## The Catalyst for Change

The migration was driven by critical points of failure:


### 1. Hardware Atrophy
Probably the major factor. After four decades, the mechanical and electrical components began to fail. Several of the 6-channel modules had burned out, and most critically, **none of the wall keypads were functional.** The house had reached a state where it was physically impossible to turn on the lights in many rooms.


### 2. The Death of the Ecosystem
LiteTouch, as a company, has ceased to exist. Because the hardware was entirely **proprietary**, there was no path for repairs. In Hawaii specifically, there is no longer any factory-authorized service or technical support. We were left with a "Black Box" system that no one could service.


### 3. LED Incompatibility
Not a major factor, however it should be noted that the original LiteTouch Dimmer Modules (08-2100-01) were engineered for incandescent and halogen loads. They are fundamentally incompatible with modern LED technology. This created a massive energy inefficiency and constant flickering. New infraestructure is able to use low-wattage LED fixtures throughout the house, drastically reducing the home's electrical footprint.


---

## The Solution

While there were many potential paths forward (detailed further in the **Alternatives** section), It was chosen to use a combination of **Shelly**, **Home Assistant (HA)**, and **CYD (Cheap Yellow Displays)**. 



### Key Advantages

Detailed technical breakdowns of each component are provided in the following chapters; however, the following points offer a glimpse into the core benefits of this new infrastructure.

#### 🔓 **No More Proprietary Lock-in**
The system is no longer tethered to a single manufacturer. Every component is off-the-shelf; if a part fails, it can be replaced or upgraded immediately without depending on a specific company or specialized service.

#### 📱 **Mobile & Remote Control**
The house is no longer limited to physical wall switches. The entire lighting grid is accessible via smartphone, tablet, or computer from anywhere in the world.

#### ⚡ **Real-Time Energy Intelligence**
Built-in power monitoring provides live data on wattage and consumption for every circuit. This allows for precise energy management and fault detection that the legacy system couldn't offer.

#### 🤖 **Advanced Automation (Smart Logic)**
The new infraestructure introduces "Smart" capabilities to the house. From scheduling outdoor lights based on local sunset times to complex occupancy-based scenes, the system can now work autonomously.

#### 💡 **Native LED Compatibility**
Designed for the modern era, this stack is fully compatible with LED technology. This ensures maximum energy efficiency.



