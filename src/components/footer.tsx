import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="justify-end bg-zinc-800">
      <footer className="flex justify-center space-x-64 text-zinc-100 font-semibold">
        <Link target="_blank" to="https://www.linkedin.com/in/ylano-dev">Linkedin</Link>
        <Link target="_blank" to="https://github.com/ylano">GitHub</Link>
        <Link to="">Curriculo</Link>
      </footer>
    </div>
  );
}
