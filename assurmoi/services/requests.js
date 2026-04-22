const getAllRequests = (req, res) => {
    res.status(200).json({ requests: [] });
}

const getRequest = (req, res) => {
    res.status(200).json({ request: req.params.id });
}

const createRequest = (req, res) => {
    res.status(201).json({ request: req.body });
}

const updateRequest = (req, res) => {
    res.status(200).json({
        message: "Successfully updated",
        request: req.body
    });
}

const deleteRequest = (req, res) => {
    res.status(200).json({ message: "Successfully deleted" });
}

module.exports = {
    getAllRequests,
    getRequest,
    createRequest,
    updateRequest,
    deleteRequest
}