const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("pages/home", {
        title: "Home",
    })
});

router.get("/social", (req, res) => {
    res.render("pages/social", {
        title: "Social Media",
    });
});

router.get("/board", (req, res) => {
    res.render("pages/board", {
        title: "Board Members",
        boardMembers: [
            {
                fullName: "Undetermined",
                roles: ["President", "Chief Executive Officer"]
            },
            {
                fullName: "Undetermined",
                roles: ["Vice President"]
            },
            {
                fullName: "Undetermined",
                roles: ["ICC Representative"]
            },
            {
                fullName: "Undetermined",
                roles: ["Secretary"]
            },
            {
                fullName: "Undetermined",
                roles: ["Publicist"]
            },
            {
                fullName: "Isaac G",
                roles: ["Full-Stack Site Developer"]
            },
            {
                fullName: "Undetermined",
                roles: ["Frontend Site Designer"]
            }
        ]
    });
});

module.exports = router;
