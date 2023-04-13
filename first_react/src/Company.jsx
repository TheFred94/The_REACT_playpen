export function Company(props) {
  return (
    <div className="logo">
      <p>{props.logo}</p>
      <h2>{props.name}</h2>
    </div>
  );
}
