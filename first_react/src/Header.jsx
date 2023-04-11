import { Button } from "./Button";

export function Header() {
  return (
    <header>
      <nav className="nav_menu">
        <h2>Byont</h2>
        <ul>
          <li>Who we are</li>
          <li>The problems</li>
          <li>Our services</li>
          <li>Testimonials</li>
        </ul>
        <Button />
      </nav>
    </header>
  );
}
