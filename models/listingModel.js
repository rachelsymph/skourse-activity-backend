const mongoose = require("mongoose");

const listingSchema = mongoose.Schema(
  {
    id: { type: String },
    listing_url: { type: String },
    name: { type: String },
    description: { type: String },
    picture_url: { type: String },
    host_name: { type: String },
    property_type: { type: String },
    room_type: { type: String },
    accommodates: { type: String },
    bathrooms_text: { type: String },
    bedrooms: { type: String },
    beds: { type: String },
    amenities: { type: String },
    price: { type: String },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Listing", listingSchema);
