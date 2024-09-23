const fs = require('node:fs');
fs.writeFile(
  'Biodata.txt',
  'Hello nama saya Raissya, saya kelas XI TJKT 2 , Alamat saya di Mustika Grande Blok G8 No 3, Umur saya 16',
  function (error) {
    if (error) {
      console.error('terjadi eror', error);
    } else {
      console.log('File berhasil dibuat');
    }
  }
);