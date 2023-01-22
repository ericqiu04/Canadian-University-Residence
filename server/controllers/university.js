const cheerio = require('cheerio');
const axios = require('axios');

exports.getUniversity = async(req, res) => {
    res.status(200).json({
        message: "Test api is working!",
    });

}