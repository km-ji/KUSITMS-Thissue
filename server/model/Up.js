const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const upSchema = new mongoose.Schema({
    upFrom: { //누가 이 이슈를 업!했는가
        type: Schema.Types.ObjectId,
        ref: 'Issue'
    }

});

const Up = mongoose.model('Up', upSchema);
module.exports = { Up }