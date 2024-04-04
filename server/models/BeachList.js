// Import the mongoose module to create a schema and model
const mongoose = require('mongoose');

// Define the schema for the beach list
const BeachListSchema = new mongoose.Schema({
    // Define the 'name' field as a String. It is required with a custom error message.
    name: {
        type: String,
        required: [true, "Beach name is required"], // Ensures this field must be provided, with a custom error message if not
    },
    // Define the 'location' field as a String. It is optional in this schema.
    location: {
        type: String,
        // No 'required' validator here, implying this field is optional
    },
    // Define the 'description' field as a String. This field is also optional.
    description: {
        type: String, // Expected to store textual information about the beach
    },
    // Define the 'accessibility' field as a String, storing information on how to access the beach.
    accessibility: {
        type: String, // This could include details on parking, public transit options, etc.
    },
    // Define the 'amenities' field to store a list of strings.
    // This can include any amenities available at the beach like 'restrooms', 'showers', etc.
    amenities: {
        type: [String], // An array of strings, each representing a different amenity
    }
}, { timestamps: true }); // Enable automatic creation of createdAt and updatedAt timestamps

// Create the model from the schema. This model represents the collection where the documents created
// from this schema will be stored in the MongoDB database.
const BeachList = mongoose.model('BeachList', BeachListSchema);

// Export the model to be used in other parts of the application, allowing for CRUD operations on the 'beachlists' collection.
module.exports = BeachList;
