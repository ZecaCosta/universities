const University = require("../models/universityModel");

const getAllUniversities = async (req, res) => {
	try {	
		const { country, page } = req.query;
		const results = await University.getAll(country, page);

		if (results.length === 0 ) {
			res.status(404).json({ message: "Nenhuma universidade foi encontrada" });
			return;
		};

		res.status(200).json(results);
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
};

const getUniversityById = async (req, res) => {
	try {
		const { id } = req.params;
		const result = await University.getById(id);

		if (!result) {
			res.status(404).json({ message: "Universidade não encontrada" });
			return;
		};

		res.status(200).json(result);
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
};

const createUniversity = async (req, res) => {
	try {
		const result = await University.create(req.body);

		if (!result) {
			res.status(404).json({ message: "Universidade já existente" });
			return;
		};

		res.status(201).json(result);
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
};

const updateUniversity = async (req, res) => {
	try {
		const { domains, web_pages, name } = req.body;
		const { id } = req.params;
		const result = await University.update({ id, domains, web_pages, name });

		if (!result || result.matchedCount === 0) {
			res.status(404).json({ message: "Universidade não encontrada" });
			return;
		};

		res.status(200).json({ id, domains, web_pages, name }); 
	} catch (e) {
		res.status(500).json({ message: err.message });
	}
};

const deleteUniversity = async (req, res) => {
	try {
		const { id } = req.params;
		const result = await University.exclude(id);

		if (!result || result.deletedCount === 0) {
			res.status(404).json({ message: "Universidade não encontrada" });
			return;
		};

		res.status(200).json({ message: "Universidade deletada com sucesso" });
	} catch (err) {
		console.log(err);
		res.status(500).json({ message: err.message });
	}
};

module.exports = {
	getAllUniversities,
	getUniversityById,
	createUniversity,
	updateUniversity,
	deleteUniversity
};
