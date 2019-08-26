var mongoose = require('mongoose');

var Schema = mongoose.Schemadx;

var GenreSchema = new Schema(
    {
        name: {type: String, required: true}
    }
);


//Virtual for genre's URL
GenreSchema
    .virtual('url')
    .get(function () {
        return '/catalog/genre/'+ this_id;
    });

//Export Genre Model
module.exports = mongoose.model('Genre', GenreSchema);

