# Module 3: The AI-Robot Brain

This module focuses on **Embodied Intelligence**. We transition from basic mechanics to high-level perception and path planning using NVIDIA's ecosystem.

## NVIDIA Isaac Sim & USD

**NVIDIA Isaac Sim** is built on the **Universal Scene Description (USD)** format.
- **USD Advantage:** Allows for non-destructive editing and collaborative 3D workflows between engineers and artists.
- **Workflow:** Export your robot from URDF to USD for high-fidelity photorealistic simulation.

## Isaac ROS: VSLAM & Nav2

**Isaac ROS** provides hardware-accelerated packages for common robotic tasks:
1. **VSLAM (Visual Simultaneous Localization and Mapping):** Uses camera feeds to determine the robot's position in an unknown environment.
2. **Nav2 (Navigation 2):** A modular navigation stack that handles obstacle avoidance and global path planning.

:::tip Sim-to-Real Transfer
To ensure algorithms learned in simulation work on physical hardware ([Hardware Lab Guide](/docs/hardware-lab/index.md)), use **Domain Randomization**. This involves varying light, textures, and physics parameters during training so the AI doesn't overfit to the virtual world.
:::

## Weekly Breakdown

### Week 6: Computer Vision
- GPU-accelerated OpenCV integration.
- Training object detection models for robotic interaction.

### Week 7: VSLAM & Navigation
- Implementing real-time mapping.
- Tuning Nav2 parameters for humanoid balance.

### Week 8: Photo-realistic Rendering
- Advanced light modeling in Isaac Sim.
- Testing vision models against complex synthetic backgrounds.
