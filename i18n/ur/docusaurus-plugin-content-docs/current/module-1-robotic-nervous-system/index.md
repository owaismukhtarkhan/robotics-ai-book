# ماڈیول 1: روبوٹک نروسس سسٹم (ROS 2)

**Focus:** روبوٹ کنٹرول کے لیے مڈل ویئر۔

یہ ماڈیول روبوٹ کے لیے ا fundamental communication layer کو کور کرتا ہے: **Middleware**. ہم ROS 2 (روبوٹ آپریٹنگ سسٹم) پر توجہ مرکز کرتے ہیں، جو "نروسس سسٹم" کا کام کرتا ہے، جو sensors سے brain تک signals کو carry کرتا ہے اور brain سے motors تک commands کو carry کرتا ہے۔

## مڈل ویئر اور ROS 2 آرکیٹیکچر

ROS 2 ایک تقسیم شدہ framework ہے جو **DDS (Data Distribution Service)** کا استعمال reliable، real-time messaging کے لیے کرتا ہے۔ اس کا آرکیٹیکچر various "nodes" کو independent کام کرنے کی اجازت دیتا ہے جبکہ synchronized رہتا ہے۔

### بنیادی تصورات:
- **Nodes:** Individual processes جو computation perform کرتے ہیں (مثلاً ایک "Camera Node" یا ایک "Motor Driver Node")۔
- **Topics:** Asynchronous buses continuous data flow کے لیے (مثلاً sensor readings)۔
- **Services:** Synchronous "Request-Response" communication discrete tasks کے لیے (مثلاً "Take a Photo")۔
- **Actions:** Long-running tasks feedback کے ساتھ (مثلاً "Navigate to Goal")۔

## ROS 2 نوڈس، ٹوپکس، اور سروسز

ROS 2 different components of a robotic system کے interaction کے infrastructure کو enable کرتا ہے:

- **ROS 2 Nodes:** Individual processes جو computation perform کرتے ہیں۔ ہر node typically sensor data processing، control algorithm execution، یا user interface management جیسے specific task handle کرتا ہے۔
- **Topics:** Asynchronous communication channels جو nodes کو data streams publish and subscribe کرنے کی اجازت دیتے ہیں۔ یہ real-time sensor data flow اور command distribution enable کرتے ہیں۔
- **Services:** Synchronous request-response communication discrete tasks کے لیے جن کو immediate responses کی ضرورت ہوتی ہے۔

## rclpy کا استعمال کرتے ہوئے Python ایجنٹس کو ROS کنٹرولرز سے جوڑنا

Python ROS Client Library (rclpy) Python-based AI agents اور ROS 2 control systems کے درمیان seamless integration کی اجازت دیتا ہے:

- **rclpy:** ROS 2 کا Python client library جو APIs provide کرتا ہے nodes، publishers، subscribers، services، اور actions create کرنے کے لیے۔
- **Node Creation:** Python nodes create کرنے کا طریقہ جو AI agents سے interface کر سکتے ہیں۔
- **Message Passing:** Python AI modules اور ROS 2 controllers کے درمیان data exchange کے techniques۔

## URDF (Unified Robot Description Format) کو ہیومنائیڈز کے لیے سمجھنا

**URDF (Unified Robot Description Format)** روبوٹ کا XML skeleton ہے، جو ہیومنائیڈ روبوٹس کے complex kinematic structures کے لیے خاص طور پر اہم ہے:

1. **Links:** Physical parts (legs، arms، torso، head، hands for humanoids)۔
2. **Joints:** How the links move (fixed، revolute، continuous، prismatic for complex humanoid joints)۔
3. **Visual & Collision:** How the robot looks اور how it physically interacts with walls/objects۔
4. **Inertial:** Mass اور center of gravity for physics engines، especially critical for humanoid balance۔
5. **Materials:** Visual properties for simulation rendering۔

## ہفتہ وار ٹوٹکا

### ہفتے 3-4: ROS 2 آرکیٹیکچر اور بنیادی تصورات
- ROS 2 architecture اور DDS communication کو سمجھنا۔
- اپنا پہلا ROS 2 workspace اور packages سیٹ اپ کرنا۔
- ROS 2 tools (ros2، rqt، rviz) کو متعارف کرنا۔

### ہفتہ 5: نوڈ ڈیولپمنٹ اور کمیونیکیشن
- Python استعمال کرتے ہوئے custom ROS 2 nodes create کرنا rclpy کے ساتھ۔
- inter-node communication کے لیے Topics، Services، اور Actions implement کرنا۔
- sensor data flow کے لیے publisher اور subscriber nodes build کرنا۔

### ہفتہ 6: Python ایجنٹ انضمام
- rclpy استعمال کرتے ہوئے Python AI agents کو ROS controllers سے جوڑنا۔
- Python-based AI systems سے interface کرنے والے ROS nodes create کرنا۔
- AI modules اور robot controllers کے درمیان message passing۔

### ہفتہ 7: URDF برائے ہیومنائیڈ روبوٹس
- URDF format استعمال کرتے ہوئے specifically humanoids کے لیے robot models build کرنا۔
- humanoid models کو visual، collision، اور inertial properties add کرنا۔
- humanoid kinematics کے لیے complex joint structures کو سمجھنا۔

### ہفتہ 8: TF (ٹرانسفارمز) اور کوآرڈینیٹ سسٹمز
- humanoid robotics میں coordinate transformations کو سمجھنا۔
- complex humanoid structures میں multiple coordinate frames manage کرنے کے لیے TF2 کے ساتھ کام کرنا۔
- humanoid movement کے لیے different reference frames کے درمیان data transforming۔

### ہفتہ 9: روبوٹ اسٹیٹ مینجمنٹ
- humanoid robots کے لیے joint states اور robot poses publish کرنا۔
- complex humanoid kinematics کے لیے robot state publishers implement کرنا۔
- humanoid systems میں multiple degrees of freedom manage کرنا۔

### ہفتہ 10: اعلیٰ ROS 2 تصورات
- humanoid systems کے لیے parameter management اور dynamic reconfiguration۔
- complex humanoid control کے لیے ROS 2 launch files اور lifecycle nodes کے ساتھ کام کرنا۔
- humanoid robot control کے لیے real-time considerations۔

### ہفتہ 11: انضمام اور ٹیسٹنگ
- complete humanoid robot system میں all components integrate کرنا۔
- humanoid configurations میں all nodes اور sensors کے درمیان communication test کرنا۔
- humanoid robot systems کے لیے debugging اور optimization۔

### ہفتہ 12: ماڈیول کا جائزہ اور جائزہ
- humanoid robots کے لیے robotic nervous system کا comprehensive review۔
- ماڈیول 2 کے لیے final assessment اور preparation۔