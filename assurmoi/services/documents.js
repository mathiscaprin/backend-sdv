const getAllDocuments = (req, res) => {
    res.status(200).json({ documents: [] });
}

const getDocument = (req, res) => {
    res.status(200).json({ document: req.params.id });
}

const createDocument = (req, res) => {
    res.status(201).json({ document: req.body });
}

const updateDocument = (req, res) => {
    res.status(200).json({
        message: "Successfully updated",
        document: req.body
    });
}

const deleteDocument = (req, res) => {
    res.status(200).json({ message: "Successfully deleted" });
}

module.exports = {
    getAllDocuments,
    getDocument,
    createDocument,
    updateDocument,
    deleteDocument
}