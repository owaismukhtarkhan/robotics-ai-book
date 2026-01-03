# Hardware & Lab Setup

Building a Physical AI system requires a balance between simulation power and edge intelligence.

## Digital Twin Workstation

High-fidelity simulators like NVIDIA Isaac Sim require substantial GPU resources.

:::danger VRAM Bottleneck
The primary bottleneck for Physical AI simulation is **Video RAM (VRAM)**. Complex scenarios with high-resolution sensors and multiple robots will crash if you provide less than 12GB of VRAM.
:::

| Component | Target Spec | Minimum Requirement |
| :--- | :--- | :--- |
| **GPU** | NVIDIA RTX 4080 (16GB VRAM) | RTX 4070 Ti (12GB VRAM) |
| **CPU** | 13th Gen Intel i9 / Ryzen 9 | 12th Gen Intel i7 / Ryzen 7 |
| **RAM** | 64GB DDR5 | 32GB DDR4/DDR5 |
| **Storage** | 2TB NVMe SSD | 1TB NVMe SSD |

## Economy Jetson Student Kit

For mobile robotics and modular Physical AI, we recommend this standard kit (Approx. $700).

| Component | Description | Price (Est) |
| :--- | :--- | :--- |
| **NVIDIA Jetson Orin Nano** | 8GB Developer Kit (40 TOPS) | $499 |
| **Intel RealSense D435i** | Depth Camera for VSLAM/Object Detection | $200 |
| **ReSpeaker Mic Array v2.0** | Far-field voice capture for VLA commands | $70 |
| **Waveshare UPS HAT** | Mobile power management | $30 |

## Robot Lab Tier Options

Depending on your budget and mechanical interest, choose one of the following hardware paths:

### Option A: Proxy/Dog (Entry Level)
- **Model:** Unitree Go2 or Xiaomi CyberDog 2.
- **Focus:** Quadruped locomotion, basic VSLAM, and edge-based voice control.

### Option B: Miniature Humanoid (Experimental)
- **Model:** Leju Kuavo or similar developer kits.
- **Focus:** Bipedal balance, URDF modeling, and complex motor control.

### Option C: Premium Humanoid (Advanced)
- **Model:** Unitree G1 or Fourier Intelligence GR-1.
- **Focus:** Full-scale VLA implementation, dextrous manipulation, and collaborative tasks.
