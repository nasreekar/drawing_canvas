# Colloborative Drawing Canvas
This is a simple code example of how both canvas and sockets work and as well as create a realtime drawing canvas that is powered by Node.js and web sockets and p5.js.

## Functionality
Currently as per the code, the app runs on `localhost:4200` while node server is running (`node server` in terminal). This can be later hosted on public server where people from different locations can access the app and play with it. Apart from the main functionality of colloborative drawing, I have added a small functionality *download* where in we can download the canvas we worked on. 

## Server Side
The first thing we need to do is create a web socket server. For this we will be using Node.js and the module Socket.io. Socket.io makes its super easy to get a web socket server up and running.
To install Sockets.io, type `npm install socket.io` in the terminal

## Client Side
I'm using Javascript, Basic HTML files and p5.js as the client side.
p5.js is a JavaScript library that starts with the original goal of Processing, to make coding accessible for artists, designers, educators, and beginners, and reinterprets this for today's web. For more information and tutorials about p5.js please check the github link [here](https://github.com/processing/p5.js)

## Media
I have posted a working video of the app in the [videos]() folder. 

## Future Updates
Functionalities like selecting the color, brush thickness etc can be implemented for better functionality and user experience.

## References
This example is developed based on the video tutorial series by [David Shiffman](https://www.youtube.com/watch?v=bjULmG8fqc8&list=PLRqwX-V7Uu6b36TzJidYfIYwTFEq3K5qH)

