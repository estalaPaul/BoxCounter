# Box Counter

An Electron application that simulates and assembly line. It is made to be used with Arduino to signal the simulation.

## To Use

To clone and run this repository you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. You also need to be able to receive data from the Arduino Serial Port. From your command line:

```bash
# Clone this repository
git clone https://github.com/electron/electron-quick-start
# Go into the repository
cd electron-quick-start
# Install dependencies
npm install
# Connect Arduino and change the port being used in the file script/Arduino.js
super('port', baudRate);
# Run the app
npm start
```

### How it Works

The App dependes on the Arduino sending three things:
  1. "Start": This string make a box appear at the beginning of the first assembly line.
  2. "Garra": This string signals that the claw is in a ready position and activates the movement of the box.
  3. Count: This is the amount of boxes that have passed. Replace count with the number of boxes.

### DISCLAIMER

This app was created for the sole purpose of isubmitting a class project. It's in no way ready for production use or in an optimal state. This was built using the [electron-quick-start template](https://github.com/electron/electron-quick-start). 
