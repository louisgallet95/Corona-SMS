# Corona SMS

[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com)  [![forthebadge](https://forthebadge.com/images/badges/uses-js.svg)](https://forthebadge.com)  
[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/) 

Corona SMS is a simple tool allowing you to receive coronavirus statistics by sms.


# Usage

## Installation
You'll see, it's very simple :)

1) Installing Node.JS and npm on your computer
2) Copy the commands to your terminal 
```
sudo apt-update
sudo apt install -y git
git clone https://github.com/louisgallet95/Corona-SMS.git
cd Corona-SMS
sudo npm install
```
And that's it 

## Configuration
Our project uses Twilio to send SMS. You have to register on the platform and change the values below in the index.js file :

Replace the values "ACCOUNTSID HERE" and "AUTHTOKEN HERE" with your accountsid and authtoken available on your Twilio account.

Replace also the values +TWILIO NUMBER HERE and +YOUR NUMBER HERE with your Twilio number and your phone number with your country code.

## Usage
Simply type the following command in the terminal :  
``node index.js``

# Thanks to :
### NeoMaster_71 and SamuelGaborieau3 - OpenClassroom Forum

Made in 🇫🇷  by Louis Gallet with ❤️  
© L. GALLET - 2020
