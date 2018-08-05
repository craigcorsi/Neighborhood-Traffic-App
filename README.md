![Logo](./client/src/images/NTAlogo.png) A MERN application that renders cross sections of street data as interactive applets utilizing the Abelian sandpile model to study traffic flow and crowd behavior in a give neighborhood.  

# About Abelian Sandpiles:

The sandpile model (proposed by Bak, Tang, and Wiesenfeld circa 1987) is a simple N-by-N grid, wherein each grid cell (box) can have 0 to 3 sand particles. At each iteration, a single grain of sand (particle) is added to the system by dropping it on a random cell in the sandpile table. Once a box stockpiles 4 particles of sand, the grains are then distributed (toppled over) to the neighboring cells, with each neighbor gaining a grain of sand. This toppling over of grains from one cell to the neighboring cells can lead the entire system to "criticality" causing "avalanches" (this can be thought of as a series of topples that occurs every time a box collects four grains of sand) resulting in some grains leaving the system when the toppling over happens at the grid's edge (boundary). With the same internal mechanism (dropping of a grain of sand) governing the sandpile, the resulting avalanche sizes can have varying largeness.

The end state of the abelian sandpile does not depend on the order in which you carry out the "topples."  That's what makes it "abelian."  Addition is abelian; adding 2 then adding 3 is the same as adding 3 and then 2.  Abelian sandpiles are one of the earliest models to demonstrate self-organized criticality (SOC) -- a mechanism present in complex systems, a property of dynamic systems to organize microscopic behavior to be spatial scale independent. Systems displaying SOC do not require any external tuning of parameters; the system organizes itself into the critical behavior.  As result, wherever the system starts, it finds its way to the critical threshold and stays there as long as new sand keeps getting added at constant rate.

source: https://nbviewer.jupyter.org/github/eflegara/BTW-Sandpile-Model/blob/master/Sandpile.ipynb

# Sandpile illustration:

[![Avalanche Dynamics](https://img.youtube.com/vi/zHoiZtyA82E/0.jpg)](https://www.youtube.com/watch?v=zHoiZtyA82E)

Courtesy of R.M. Dimeo; the color of a pixel records the number of 'topples' that have taken place at that location, so each avalanche "heats up" the area it covers.

# Create React Express App

## About This Boilerplate

This setup allows for a Node/Express/React app which can be easily deployed to Heroku.

The front-end React app will auto-reload as it's updated via webpack dev server, and the backend Express app will auto-reload independently with nodemon.

## Starting the app locally

Start by installing front and backend dependencies. While in this directory, run the following command:

```
yarn install
```

This should install node modules within the server and the client folder.

After both installations complete, run the following command in your terminal:

```
yarn start
```

Your app should now be running on <http://localhost:3000>. The Express server should intercept any AJAX requests from the client.
