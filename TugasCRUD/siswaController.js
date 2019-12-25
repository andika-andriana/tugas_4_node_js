// fileName: siswaController.js

// Import siswa model
Siswa = require("./siswaModel");

// Handle index actions
exports.index = function(req, res) {
  Siswa.get(function(err, siswa) {
    if (err) {
      res.json({
        status: "error",
        message: err
      });
    }
    res.json({
      status: "success",
      message: "Data Siswa Berhasil Di Ambil",
      data: siswa
    });
  });
};

// Handle create siswa actions
exports.new = function(req, res) {
  var siswa = new Siswa();
  siswa.nama = req.body.nama ? req.body.nama : siswa.nama;
  siswa.tanggallahir = req.body.tanggallahir;
  siswa.jeniskelamin = req.body.jeniskelamin;
  siswa.hobi = req.body.hobi;
  // save the siswa and check for errors
  siswa.save(function(err) {
    if (err) res.json(err);
    res.json({
      message: "Siswa Berhasil Di Tambahkan!",
      data: siswa
    });
  });
};

// Handle view siswa info
exports.view = function(req, res) {
  Siswa.findById(req.params.siswa_id, function(err, siswa) {
    if (err) res.send(err);
    res.json({
      message: "Loading Details Siswa",
      data: siswa
    });
  });
};

// Handle update siswa info
exports.update = function(req, res) {
  Siswa.findById(req.params.siswa_id, function(err, siswa) {
    if (err) res.send(err);
    siswa.nama = req.body.nama ? req.body.nama : siswa.nama;
    siswa.tanggallahir = req.body.tanggallahir;
    siswa.jeniskelamin = req.body.jeniskelamin;
    siswa.hobi = req.body.hobi;
    // save the siswa and check for errors
    siswa.save(function(err) {
      if (err) res.json(err);
      res.json({
        message: "Siswa Berhasil  Terupdate",
        data: siswa
      });
    });
  });
};

// handle delete siswa
exports.delete = function(req, res) {
  Siswa.remove(
    {
      _id: req.params.siswa_id
    },
    function(err, contact) {
      if (err) res.send(err);
      res.json({
        status: "success",
        message: "Siswa deleted"
      });
    }
  );
};
