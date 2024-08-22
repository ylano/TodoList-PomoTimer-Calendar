import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="rounded-2xl p-4 m-4 bg-zinc-800">
      <nav className="flex justify-center space-x-64 text-zinc-100 font-semibold">
        <Link to="/">Home</Link>
        <Link to="Sobre">Sobre</Link>
        <Link to="/">Login</Link>
      </nav>
    </div>
  );
}
