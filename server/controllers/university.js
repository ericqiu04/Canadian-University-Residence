const cheerio = require('cheerio');
const axios = require('axios');
const pretty = require('pretty')

const url = "https://www.universitystudy.ca/canadian-universities/"

exports.getUniversity = async(req, res) => {
    const {data} = await axios.get(url)
    const $ = cheerio.load(data)

    const univItems = $(".row-university td");
    const universities = []

    univItems.each((index, el) => {
        const university = {name: "", location: ""}
        university.name = $(el).children("a").text()
        university.location = $(el).text()
        universities.push(university)

    })
    res.status(200).json({
        message: universities[0].name,
    });

}