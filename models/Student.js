const mongoose = require('mongoose')

// field status = hadir || terlambat || izin || sakit || alpha

const StudentSchema = new mongoose.Schema({
    nama: {
        type: String,
        required: [true, 'Silahkan isikan nama'],
    },
    kelas:{
        type: String,
        require: [true, 'Silahkan isikan kelas'],
    },
    no_absen:{
        type: String,
        require: [true, 'Silahkan isikan nomor absen'],
    },
    nis:{
        require: [true, 'Silahkan isikan nomor NIS'],
        type: String,
        unique: true
    },
    ttl:{
        type: String,
        require: [true, 'Silahkan isikan tempat tanggal lahir'],
    },
    agama:{
        type: String,
        require: [true, 'Silahkan isikan agama'],
    },
    alamat:{
        type: String,
        require: [true, 'Silahkan isikan alamat'],

    },
    email: {
        type: String,
        required: true, 
        unique: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Silahkan masukan email validasi!']
    }

},
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Students', StudentSchema)