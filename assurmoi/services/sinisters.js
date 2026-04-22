const getAllSinisters = (req, res) => {
    res.status(200).json({ sinisters: [] });
}

const getSinister = (req, res) => {
    res.status(200).json({ sinister: req.params.id });
}

const createSinister = (req, res) => {
    res.status(201).json({ sinister: req.body });
}

const updateSinister = (req, res) => {
    res.status(200).json({
        message: "Successfully updated",
        sinister: req.body
    });
}

const deleteSinister = (req, res) => {
    res.status(200).json({ message: "Successfully deleted" });
}

module.exports = {
    getAllSinisters,
    getSinister,
    createSinister,
    updateSinister,
    deleteSinister
}