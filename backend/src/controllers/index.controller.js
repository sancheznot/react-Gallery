const controlIndex = {}

controlIndex.getIndex = (req, res, next) => {
    res.json({message: 'Control index'})
}

module.exports = controlIndex