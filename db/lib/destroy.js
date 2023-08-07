const it = (model, id) => model.destroy({ where: { id: id } });

module.exports = {
    it
}