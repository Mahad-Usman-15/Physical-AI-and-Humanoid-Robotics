---
sidebar_position: 1
---

# Chapter 1: ROS 2 Fundamentals - Introduction to Robot Operating System 2

## What is ROS 2?

The Robot Operating System 2 (ROS 2) is a flexible framework for writing robot software. It's a collection of tools, libraries, and conventions that aim to simplify the task of creating complex and robust robot applications. ROS 2 builds upon the success of ROS 1, bringing significant improvements in areas like real-time performance, security, and multi-robot systems.

## Key Concepts in ROS 2

### Nodes

Nodes are executable processes that perform computation. They are typically designed to do one thing well, such as controlling a motor, reading sensor data, or performing a localization algorithm.

### Topics

Topics are a named bus over which nodes exchange messages. Messages are data structures that contain information, such as sensor readings, motor commands, or status updates.

### Services

Services provide a request/response mechanism between nodes. A client node sends a request to a service server node, which performs an operation and sends back a response.

### Actions

Actions are used for long-running tasks that involve sending a goal, receiving continuous feedback, and eventually a result. They are built on top of topics and services and provide a more structured way to manage complex interactions.

## Setting Up Your ROS 2 Environment

To start working with ROS 2, you typically need to install it on a Linux distribution (Ubuntu is common).

```bash
# Example: Install ROS 2 Humble Hawksbill on Ubuntu 22.04
sudo apt update && sudo apt install locales
sudo locale-gen en_US en_US.UTF-8
sudo update-locale LC_ALL=en_US.UTF-8 LANG=en_US.UTF-8
export LANG=en_US.UTF-8

sudo apt install software-properties-common
sudo add-apt-repository universe

sudo apt update && sudo apt install curl -y
sudo curl -sSL https://raw.githubusercontent.com/ros/rosdistro/master/ros.key -o /usr/share/keyrings/ros-archive-keyring.gpg

echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/ros-archive-keyring.gpg] http://
packages.ros.org/ros2/ubuntu $(. /etc/os-release && echo UBUNTU_CODENAME) main" | sudo tee /etc/apt/sources.list.d/ros2.list > /dev/null

sudo apt update
sudo apt upgrade
sudo apt install ros-humble-desktop
```

## Creating Your First ROS 2 Package

A ROS 2 package is a directory that contains source code, configuration files, and build instructions.

```bash
# Create a new workspace
mkdir -p ~/ros2_ws/src
cd ~/ros2_ws/src

# Create a new package
ros2 pkg create --build-type ament_python my_robot_controller
```

## Cited Sources

<!-- TODO: Add at least 5 relevant sources here as per task T006 -->
- Source 1: [Placeholder for a relevant research paper or book]
- Source 2: [Placeholder for a relevant research paper or book]
- Source 3: [Placeholder for a relevant research paper or book]
- Source 4: [Placeholder for a relevant research paper or book]
- Source 5: [Placeholder for a relevant research paper or book]
