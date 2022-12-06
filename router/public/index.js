const router  = require("express").Router()



router.use("/admin", require("./admin"))
router.use("/project-data", require("./projectData"))



module.exports = router
