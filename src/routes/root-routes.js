const express = require("express");
const router = express.Router();

router.get("/board", (req, res) => {
    res.render("pages/board", {
        title: "Board Members",
        boardMembers: [
            {
                fullName: "Undetermined",
                role: "President"
            },
            {
                fullName: "Undetermined",
                role: "Vice President"
            },
            {
                fullName: "Undetermined",
                role: "ICC Representative"
            },
            {
                fullName: "Undetermined",
                role: "Secretary"
            },
            {
                fullName: "Undetermined",
                role: "Publicist"
            },
        ]
    });
});

module.exports = router;