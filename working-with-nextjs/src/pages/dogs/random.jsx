export default function RandomDog({ imgUrl }) {
  console.log(data);
  return (
    <>
      <h1>Random dog</h1>
      <img src={imgUrl} alt="Random dog" />
    </>
  );
}

// BACKEND
export async function getServerSideProps() {
  const api = "https://dog.ceo/api/breeds/image/random";
  const res = await fetch(api);
  const data = await res.json();
  console.log(data);

  return {
    props: {
      imgUrl: data.message,
    },
  };
}
