var mongoose = require('mongoose');
var Band = mongoose.model('Band');

exports.get = function (req, res) {
    var bandName = req.params.name;

    Band.find({ name: bandName }, function (err, band) {
        if (band.length === 0) {
            res.render('createband', {
                name: bandName
            });
        } else {
            console.log('Found a band' + band.name);
        }
    });
};
