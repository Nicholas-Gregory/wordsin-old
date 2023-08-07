const it = (model, id, data) => model.update(data, { where: { id: id } });

module.exports = {
    it
}