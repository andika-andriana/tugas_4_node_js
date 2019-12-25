// fileName: api-routes.js

// initialize Express router
let router = require("express").Router();

// set default API responses
router.get("/", function(req, res) {
  res.json({
    status: "API its Working",
    message: "Welcome to TugasCRUD crafted!"
  });
});

// Import siswa controller
var siswaController = require("./siswaController");

// Contact routes
router
  .route("/siswa")
  .get(siswaController.index)
  .post(siswaController.new);
router
  .route("/siswa/:siswa_id")
  .get(siswaController.view)
  .get(siswaController.view)
  .patch(siswaController.update)
  .put(siswaController.update)
  .delete(siswaController.delete);
// exports API module
module.exports = router;
