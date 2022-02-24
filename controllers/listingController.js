const Listing = require("../models/listingModel");

const getListings = async (req, res) => {
  try {
    const todos = await Listing.find();
    res.status(200).json(todos);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getListings,
};
