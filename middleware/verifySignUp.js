const db = require("../models");
const permissons = db.PERMISSONS;
const User = db.employee;
checkDuplicateEmail = (req, res, next) => {
        User.findOne({
            where: {
                email: req.body.email
            }
        }).then(user => {
            if (user) {
                res.status(400).send({
                    message: "Failed! Email is already in use!"
                });
                return;
            }
            next();
        });
};
checkRolesExisted = (req, res, next) => {
    // if (req.body.roles) {
    //     console.log("permissons from body: ", req.body.roles);
    //     console.log(permissons)
    //
    //     if (!permissons.includes(req.body.roles)) {
    //         res.status(400).send({
    //             message: "Failed! Role does not exist = " + req.body.roles
    //         });
    //         return;
    //     }
    //
    // }

    next();
};
const verifySignUp = {
    checkDuplicateEmail: checkDuplicateEmail,
    checkRolesExisted: checkRolesExisted
};
module.exports = verifySignUp;