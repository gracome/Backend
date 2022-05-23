 const model = require("./users.models");
const message = `Une erreur s'est produite veuillez réessayez .`


exports.create = async (req, res) => {
    try {
        var records = await model.create(req.body);
        if (_.isArray(records)) {
            res.json({ message, data: records })
        } else {
            res.json({ error: message })
        }
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: message })

        if (error instanceof ValidationError) {
            return res.status(400).json({ message: error.message, data: error });
        }
        if (error instanceof UniqueConstraintError) {
            return res.status(400).json({ message: 'error.message', data: error });
        }



    }
}
exports.delete = async (req, res) => {
    try {
        var records = await model.delete(req.body);
        if (_.isArray(records)) {
            res.json({ message, data: records })
        } else {
            res.json({ error: message })
        }
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: message })

        if (error instanceof ValidationError) {
            return res.status(400).json({ message: error.message, data: error });
        }
        if (error instanceof UniqueConstraintError) {
            return res.status(400).json({ message: 'error.message', data: error });
        }



    }
}
exports.update = async (req, res) => {
    try {
        var records = await model.put(req.body);
        if (_.isArray(records)) {
            res.json({ message, data: records })
        } else {
            res.json({ error: message })
        }
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: message })

        if (error instanceof ValidationError) {
            return res.status(400).json({ message: error.message, data: error });
        }
        if (error instanceof UniqueConstraintError) {
            return res.status(400).json({ message: 'error.message', data: error });
        }



    }
}

exports.findAll = async (req, res) => {
    try {
        var records = await model.get(req.body);
        if (_.isArray(records)) {
            res.json({ message, data: records })
        } else {
            res.json({ error: message })
        }
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: message })

        if (error instanceof ValidationError) {
            return res.status(400).json({ message: error.message, data: error });
        }
        if (error instanceof UniqueConstraintError) {
            return res.status(400).json({ message: 'error.message', data: error });
        }



    }
}

exports.findByPk = async (req, res) => {
    try {
        var records = await model.get(req.body);
        if (_.isArray(records)) {
            res.json({ message, data: records })
        } else {
            res.json({ error: message })
        }
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: message })

        if (error instanceof ValidationError) {
            return res.status(400).json({ message: error.message, data: error });
        }
        if (error instanceof UniqueConstraintError) {
            return res.status(400).json({ message: 'error.message', data: error });
        }



    }
}