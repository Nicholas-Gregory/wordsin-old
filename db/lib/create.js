const it = (model, data) => Array.isArray(data) ? model.bulkCreate(data) : model.create(data);

module.exports = {
    it
}