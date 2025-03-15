export default function Product({ params }) {
  const id = params.id;
  // do some prodcessing to fetch some data
  return <h1>This is product page {id}</h1>;
}
