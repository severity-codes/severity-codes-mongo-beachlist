// Import the necessary modules from Express and your BeachList model
const express = require('express');
const beachRouter = express.Router(); // Create a router object for handling routes
const BeachList = require('../models/BeachList.js'); // Import the BeachList model to interact with the beach database collection

// Endpoint to retrieve all beaches from the database
beachRouter.get("/", async (req, res, next) => {
    try {
        const beachList = await BeachList.find(); // Use the find method to fetch all beaches
        return res.status(200).send(beachList); // Send the fetched beaches back to the client with a 200 OK status
    } catch (err) {
        console.error(err); // Log any errors that occur
        res.status(500).send("Internal Server Error"); // Send a 500 Internal Server Error status if an error occurs
    }
});

// Endpoint to create a new beach and add it to the database
beachRouter.post('/', async(req, res, next) => {
    try {
        const newBeach = new BeachList(req.body); // Create a new beach instance with the data sent in the request body
        const savedBeach = await newBeach.save(); // Save the new beach to the database
        console.log(savedBeach); // Log the saved beach
        res.status(201).send(savedBeach); // Send the saved beach back to the client with a 201 Created status
    } catch (err) {
        console.error(err); // Log any errors that occur
        if (err.name === 'ValidationError') {
            // If a validation error occurs, send a 400 Bad Request status with the error message
            return res.status(400).json({ error: err.message });
        }
        // For any other errors, send a 500 Internal Server Error status
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Endpoint to delete a specific beach by its ID
beachRouter.delete("/:beachyId", async (req, res, next) => {
    try {
        // Attempt to find and delete the beach specified by the ID in the route parameter
        const deletedBeach = await BeachList.findOneAndDelete({ _id: req.params.beachyId });
        if (!deletedBeach) {
            // If no beach is found with the provided ID, send a 404 Not Found status
            return res.status(404).send({ message: "Beach not found." });
        }
        // If the beach is found and deleted, send a success message with a 200 OK status
        return res.status(200).send({ message: `Successfully deleted beach: ${deletedBeach.name}` });
    } catch (err) {
        console.error(err); // Log any errors that occur
        res.status(500).send({ message: "Error deleting beach." }); // Send a 500 Internal Server Error status if an error occurs
    }
});

// Endpoint to update a specific beach by its ID
beachRouter.put('/:Id', async (req, res, next) => {
    try {
        // Attempt to find the beach by ID and update it with the data sent in the request body
        const updatedBeachList = await BeachList.findOneAndUpdate(
            { _id: req.params.Id },
            req.body,
            { new: true } // Option to return the modified document rather than the original
        );
        return res.status(200).send(updatedBeachList); // Send the updated beach back to the client with a 200 OK status
    } catch (err) {
        console.error(err); // Log any errors that occur
        res.status(500).send("Internal Server Error"); // Send a 500 Internal Server Error status if an error occurs
    }
});

// Export the router so it can be used in other parts of the application
module.exports = beachRouter;
