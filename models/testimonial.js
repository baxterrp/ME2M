var mongoose = require('mongoose'),
    schema = mongoose.Schema;

var testimonialSchema = new schema({
   client: String,
   date: String,
   message: String
}, {collection: 'testimonials'});

module.exports = mongoose.model('Testimonial', testimonialSchema);