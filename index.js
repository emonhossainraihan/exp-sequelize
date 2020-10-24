const models = require("./models");

(async () => {
    const users = await models.User.findAll();
    console.log(users)
})()