---
id: index
sidebar_position: 1
title: Welcome Home
---

# Welcome

This guide contains everything you need to understand how the lightbulbs turn on in this rather unconventional house. Whether something breaks, becomes outdated and needs replacement, or you simply want to **"flex"** by using the existing features to make the house smarter and more convenient with new automations, this is your manual.

Material should be easy to read, I am using my "explain it to me like if I am five" approach.

---

## General Overview

:::info History of the Infrastructure
Before the infrastructure was updated, the lights were controlled by **LiteTouch**. Since the company ceased to exist and the brand was discontinued, the original system eventually stopped working.
:::

Today, the house no longer relies on a single proprietary "brain." Instead, the system has been modernized to rely on a distributed stack:

* **Home Assistant:** The central hub and automation engine.
* **Wi-Fi:** The communication backbone.
* **Smart Relays:** The physical switching components.
* **ESP32-CYD:** (Cheap Yellow Displays) The localized touch interfaces aka the display switches.

---

## Explain It Like I'm Five

Too technical? Here is the simplified version

Imagine the house used to have one giant, old robot named **LiteTouch** who lived in the basement. Every time you pushed a button, you were asking that one robot to turn on a light. When that robot was too old it stopped working and none of the buttons worked anymore.

Instead of buying one new giant robot (which is expensive and hard to fix), we gave the house a bunch of **Tiny Helpers**:

| Helper | Role | What it does |
| :--- | :--- | :--- |
| **The Brain** | Home Assistant | This is the boss. It lives on a small computer and tells everyone else what to do. |
| **The Walkie-Talkies** | Wi-Fi | This is how the boss talks to the helpers instantly without needing long, messy wires. |
| **The Muscle** | Smart Relays | These are little hidden switches. When the boss says "Light on!", the muscle clicks the physical switch for you. |
| **The Magic Screens** | ESP32-CYD | These are the little TV screens on the walls. They let you tell the boss what you want just by touching them. |

**The best part?** Because there are many tiny helpers instead of one giant robot, if one helper gets tired, we can just swap them out for a new one without the whole house going dark!

---

## What You Will Find Here

In this guide, you’ll learn:

- **What all the parts are** – the switches, sensors, and tiny computers that make the lights and devices work.  
- **How they connect** – like puzzle pieces that fit together so the whole house can talk.  
- **How to fix things** – in case a light stops working or a sensor gets confused (yes, even smart houses get grumpy).  
- **Extra stuff** – how to add new toys…  aka devices, to the house.

---

## Who This Is For

- **People who live here** – so you don’t get scared when a light does something unexpected.  
- **Electricians** – if you need to check wires or switches.  
- **Tech people** – if you like computers and want to see how the house talks to itself.  

Basically, anyone who wants to understand the house or help it work when it decides to be tricky.

---

## How to Use This Guide

Start with the **[Overview](basic/electrical-overview.md)** to see how the whole house works. Then, if a light breaks or you want to add something new, you can look at the right section — it’s like a map for your smart house.
