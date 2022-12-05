import fetch from 'node-fetch';

const { OMDB_API_KEY } = process.env;

export default async function handler(request, response) {
  const { title } = JSON.parse(request.body);
  const res = await fetch(`https://omdbapi.com/?apiKey=${OMDB_API_KEY}&s=${title}`);
  const json = await res.json();
  response.status(200).json(json);
}
