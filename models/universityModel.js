const connection = require("./conn");

const { ObjectId } = require("mongodb");

const getAll = async (country, page) => {
	const filter = country ? { country }: {}
	const LIMIT = 20

	return await connection()
        .then((db) => db.collection('universities')
				.find(filter)
				.project({ name: 1, country: 1, "state-province":1 })
				.limit(LIMIT)
				.skip((page - 1) * LIMIT)
				.toArray()
	);
}
	
const getById = async (id) => {
	if (!ObjectId.isValid(id)) return null;

	return await connection().then((db) =>
		db.collection("universities").findOne(ObjectId(id))
	);
};

const create = async (payload) => {

	const { alpha_two_code, web_pages, name, country, domains, "state-province": StateProvince } = payload;

	const filter = {
		domains,
		name,
		"state-province": StateProvince,
	};

	const university = await connection().then((db) =>
	db.collection("universities").findOne(filter)
	);

	if (university) return null;

	const result = await connection().then((db) =>
		db
			.collection("universities")
			.insertOne(payload)
	);

	return { _id: result.insertedId, alpha_two_code, web_pages, name, country, domains, "state-province": StateProvince };
}

const update = async ({ id, domains, web_pages, name }) => {
	if (!ObjectId.isValid(id)) return null;

	const result = await connection().then((db) =>
		db
			.collection("universities")
			.updateOne({ _id: ObjectId(id) }, { $set: { domains, web_pages, name } })
	);

	return result;
};

const exclude = async (id) => {
	if (!ObjectId.isValid(id)) return null;

	return await connection().then((db) => {
		return db.collection("universities").deleteOne({ _id: ObjectId(id) });
	});
};

module.exports = {
	getAll,
	getById,
	create,
	update,
	exclude
};
