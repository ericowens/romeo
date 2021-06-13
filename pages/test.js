
export async function getServerSideProps(context) {
  // Fetch data from external API
  const res = await fetch(`http://localhost:3000/api/form`)
  const data = await res.json()
  console.log(data)

  // Pass data to the page via props
  return { props: { data } }
}

export default function Index({ data }) {
  return (
    <div>Test Here {data.name}!!!</div>
  );
}