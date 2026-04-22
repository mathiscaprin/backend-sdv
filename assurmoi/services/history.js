const getAllHistories = (req, res) => {
    res.status(200).json({ histories: [] });
}

const getHistory = (req, res) => {
    res.status(200).json({ history: req.params.id });
}

const createHistory = (req, res) => {
    res.status(201).json({ history: req.body });
}

const updateHistory = (req, res) => {
    res.status(200).json({
        message: "Successfully updated",
        history: req.body
    });
}

const deleteHistory = (req, res) => {
    res.status(200).json({ message: "Successfully deleted" });
}

module.exports = {
    getAllHistories,
    getHistory,
    createHistory,
    updateHistory,
    deleteHistory
}