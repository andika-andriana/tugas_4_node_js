// fileName: siswaModel.js

// import mongoose
var mongoose = require("mongoose");

// setup schema
var siswaSchema = mongoose.Schema({
  nama: {
    type: String,
    required: true
  },
  tanggallahir: {
    type: String
  },
  jeniskelamin: {
    type: String
  },
  hobi: {
    type: String
  },
  create_date: {
    type: Date,
    default: Date.now
  }
});

// export siswa model
var Siswa = (module.exports = mongoose.model("siswa", siswaSchema));
module.exports.get = function(callback, limit) {
  Siswa.find(callback).limit(limit);
};
