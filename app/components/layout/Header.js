import styles from "./header.scss";
import Link from "next/link";

export default function Footer() {
  return (
    <header className="header">
      <section className="container">
        <div className="container__inner">
          <nav className="header__nav">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/posts">Posts</Link>
          </nav>
        </div>
      </section>
    </header>
  );
}
