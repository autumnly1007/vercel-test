async function getMovies(title) {
  const res = await fetch('/api/movie', {
    method: 'POST',
    body: JSON.stringify({ title }),
  });
  const json = await res.json();
  console.log(json);
}
getMovies('frozen');
