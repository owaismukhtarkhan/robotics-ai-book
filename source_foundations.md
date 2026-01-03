# Source Content: Physical AI & Humanoid Robotics (Pages 3-9)

## 1. Introduction to Physical AI
Physical AI (or Embodied AI) is the field of engineering and science concerned with creating systems that can perceive, reason about, and interact with the physical world. Unlike "Digital AI" (like LLMs in a browser), Physical AI must handle the constraints of gravity, friction, and real-time physical safety.

### The Loop: Perception -> Cognition -> Action
* **Perception:** Sensors like LIDAR, RGB-D cameras, and IMUs provide the "vision."
* **Cognition:** The "Brain" (LLMs, VLAs) processes the data and plans a movement.
* **Action:** Actuators (Motors, Hydraulics) execute the plan in the real world.

## 2. Humanoid Robotics Overview
Humanoid robots are designed to mimic the human form. This allows them to operate in environments built for humans (stairs, doorways, tools).

### Degrees of Freedom (DoF)
A Humanoid robot typically requires:
* **Head:** 2-3 DoF (Pan/Tilt).
* **Arms:** 7 DoF each (mimicking human shoulder, elbow, wrist).
* **Hands:** 5-11 DoF for dexterous manipulation.
* **Legs:** 6 DoF each (Hip, Knee, Ankle).
* **Total:** Usually between 26 to 50+ active joints.

## 3. Hardware Requirements & Edge Intelligence
To run Physical AI, high-performance computing is non-negotiable.

### Digital Twin Workstation (Simulation)
* **GPU:** NVIDIA RTX 4070 Ti / 4080 or better (Minimum 12GB VRAM).
* **CPU:** 12th Gen Intel i7 or AMD Ryzen 7000 series.
* **RAM:** 32GB+ DDR5.

### Edge Kits (Deployment)
* **NVIDIA Jetson Orin Nano:** For small-scale mobile robots.
* **NVIDIA Jetson Orin AGX:** For full-scale humanoids requiring high TOPS (Tera Operations Per Second) for real-time VLA models.

## 4. Key Concepts in Humanoid Mechanics
* **URDF (Unified Robot Description Format):** The XML-based file format used to describe the robot's geometry, joints, and physical properties.
* **Inverse Kinematics (IK):** The mathematical process of calculating the joint angles required to move an end-effector (hand/foot) to a specific target in 3D space.
* **Odometry:** Estimating the robot's change in position over time based on sensor data.

## 5. The Physical AI Stack
1. **Simulation Layer:** NVIDIA Isaac Sim / Gazebo (Safe testing).
2. **Middleware:** ROS 2 (Communication between nodes).
3. **Intelligence:** Foundation Models (GPT-4o, Claude 3.5, RT-2).