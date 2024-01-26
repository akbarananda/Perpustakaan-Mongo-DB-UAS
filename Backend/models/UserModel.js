import mongoose from "mongoose";

const User = mongoose.Schema({
    judul:{
        type: String,
        required: true
    },
    nama:{
        type: String,
        required: true
    },
    kategori:{
        type: String,
        required: true
    },
    tglawal:{
        type: Date,
        required: true
    },
    tglakhir:{
        type: Date,
        required: true
    }
});

export default mongoose.model('Users', User);