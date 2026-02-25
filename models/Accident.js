const mongoose = require('mongoose');

const AccidentSchema = new mongoose.Schema({
    location: { type: String, required: true },
    description: { type: String },
    severity: { type: String, enum: ['Low', 'Medium', 'High'], default: 'Low' },
    reportedAt: { type: Date, default: Date.now },
    status: { type: String, enum: ['Pending', 'Resolved'], default: 'Pending' }
});

module.exports = mongoose.model('Accident', AccidentSchema);