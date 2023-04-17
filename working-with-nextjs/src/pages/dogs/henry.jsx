import Image from "next/image";

export default function Henry() {
  return (
    <>
      <h1>Henry page</h1>
      <Image src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e" alt="Cute Dog" width="4240" height="2823" sizes="(max-width: 750px) 100vw, 750px" />
    </>
  );
}
