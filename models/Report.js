const mongoose = require('mongoose');

const ReportSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String },
    generatedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Report', ReportSchema);