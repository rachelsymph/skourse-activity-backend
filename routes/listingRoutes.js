const express = require("express");
const router = express.Router();
const { getListings } = require("../controllers/listingController");

router.route("/").get(getListings);

module.exports = router;
