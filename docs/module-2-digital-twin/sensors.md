# Synthetic Sensors in Simulation

To bridge the gap between simulation and reality, we must model synthetic sensors that mimic their physical counterparts.

## LIDAR (Light Detection and Ranging)
- **Use:** mapping and obstacle avoidance.
- **Simulation:** Generates a `LaserScan` message by calculating ray-casts against virtual geometry.

## Depth Cameras (e.g., Intel RealSense)
- **Use:** 3D point cloud generation and object recognition.
- **Simulation:** Uses the GPU to render a depth buffer, providing a pixel-by-pixel distance map.

## IMU (Inertial Measurement Unit)
- **Use:** Balancing and orientation (Odometry).
- **Simulation:** Models accelerometers and gyroscopes with added Gaussian noise to simulate real-world sensor drift.

Refer to the [Hardware Lab](/docs/hardware-lab/index.md) for the recommended physical kits for these sensors.
