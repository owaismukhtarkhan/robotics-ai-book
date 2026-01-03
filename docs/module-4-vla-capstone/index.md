# Module 4: Vision-Language-Action (VLA)

The final module explores the convergence of Large Language Models (LLMs) and physical robotics, creating robots that can understand and execute human instructions.

## The VLA Pipeline

We move beyond hard-coded scripts to conversational robotics using a three-stage pipeline:

1. **Perception (Whisper):** Converts spoken human commands into text.
2. **Cognition (LLM):** Reasons about the command and decomposes it into sub-tasks (e.g., "Go to the kitchen" -> 1. Locate door, 2. Navigate, 3. Detect kitchen).
3. **Action (ROS 2):** Sends velocity and joint commands to the physical or simulated actuators.

## Capstone Project Requirements

The final project requires building a "Conversational Humanoid Agent."

**Features Required:**
- Autonomous navigation through a dynamic environment.
- Voice-activated task execution (e.g., "Pick up the blue cube").
- Real-time obstacle avoidance.
- Status reporting back via speech synthesis.

Refer to [Hardware Lab](/docs/hardware-lab/index.md) for Tier Options (B or C) suitable for this capstone.

## Weekly Breakdown

### Week 9: Cognitive Planning
- Interfacing GPT-4o or Claude 3.5 with the ROS 2 environment.
- Writing task decomposition prompts.

### Week 10: Motion Control
- Implementing **Reinforcement Learning** for bipedal gait.
- Balance recovery algorithms in Isaac Sim.

### Week 11-12: VLA Integration & Capstone
- Integrating Whisper for speech-to-text.
- Finalizing the full perception-cognition-action loop.

### Week 13: Final Lab Demo
- Live demonstration of the autonomous conversational agent.
