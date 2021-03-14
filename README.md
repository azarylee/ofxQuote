# OFX QUOTE  
The OFX QUOTE is a simple Currency Converter with react application for searching latest currency.

## Usage
Please make sure you have installed node / yarn, then you can use npm install / yarn install to running the application.

## Overview

1. assets -- which the document has images or icons.
2. components -- which the document has many stateless components. They can be used in everywhere without side-effects.
3. model -- check the type.
4. style -- includes components' scss and common style.
5. views -- that is pages used in the project.
6. currencies and region -- that is mock json data.

## Conclusion
Thank you for giving me the opportunity to finish this interesting project. I used grid to make the structure, so that every device can be have a same one. Moreover, I have not use other UI plugin, Axios and so on, in order reduce the application's size and improve the first render speed.

The Input and Select, I have check the value before submit the request. Meanwhile, restrict some input. For instance, No special signal in first name and last name input, and only can entry number in phone number input.

After submit, I will check the value. Once there are anything not suitable, the notification will display the error message so that the user can know what the wrong is.
