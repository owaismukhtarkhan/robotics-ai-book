# سمولیٹڈ سینسرس ان سمیولیشن

سیمیولیشن اور حقیقت کے درمیان فرق کو پُر کرنے کے لیے، ہمیں synthetic sensors ماڈل کرنا چاہیے جو ان کے physical counterparts کو نقل کرتے ہیں۔

## LIDAR (لائٹ ڈیٹیکشن اینڈ رینجنگ)

- **استعمال:** نقشہ بنانا اور رکاوٹوں سے بچنا۔
- **سمیولیشن:** virtual geometry کے خلاف ray-casts کا calculation کرکے `LaserScan` message generate کرتا ہے۔

## ڈیپتھ کیمرے (جیسے کہ Intel RealSense)

- **استعمال:** 3D پوائنٹ کلاؤڈ جنریشن اور آبجیکٹ ریکوگنیشن۔
- **سمیولیشن:** ایک depth buffer render کرنے کے لیے GPU استعمال کرتا ہے، ایک پکسل-بائی-پکسل فاصلہ میپ فراہم کرتا ہے۔

## IMU (انرٹیل میژورمینٹ یونٹ)

- **استعمال:** توازن اور اوریئنٹیشن (اوڈومیٹری)۔
- **سمیولیشن:** accelerometers اور gyroscopes کو ماڈل کرتا ہے Gaussian noise کے ساتھ real-world sensor drift کو simulate کرنے کے لیے۔

Hardware Lab کے لیے تجویز کردہ physical kits کے لیے [Hardware Lab](/docs/hardware-lab/index.md) دیکھیں۔