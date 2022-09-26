const axios = require('axios');
const connection = require("./models/conn");

const fetchUrl = async (country) => {
  try {
    const baseUrl = "http://universities.hipolabs.com/search?country=";
    const url = `${baseUrl}${country}`;

    const result = await axios.get(url);

    return result.data;
    
  } catch (err) {
    console.log(err)
  }
}

const saveData = async (universities) => {
  const db = await connection();
  const records = []
  
  universities.forEach (university => 
    records.push(db.collection("universities").insertOne(university))
  );
  await Promise.all(records)
}

const getUniversities = async () => {
  const countries = [
    "argentina",
    "brazil",
    "chile",
    "colombia",
    "paraguay",
    "peru",
    "suriname",
    "uruguay"
  ]

   const records = countries.map(async (country) => {
    const universities = await fetchUrl(country);

    return saveData(universities)
  });

  await Promise.all(records)

}

getUniversities().then(() => process.exit()).catch((err) => console.log(err))
