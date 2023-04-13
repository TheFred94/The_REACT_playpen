import { Button } from "./Button";

export function SplashText(props) {
  return (
    <article>
      <h1>Blockchain finally made accessible</h1>
      <p>Unleash the potential of blockchain to making your business secure, scalable, and accessible.</p>
      <Button>
        {props.label}
        {props.icon}
      </Button>
    </article>
  );
}
