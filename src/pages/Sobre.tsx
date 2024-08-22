import { NavLink } from "react-router-dom";

const Sobre = () => {
  return (
    <div className="h-screen">
    <div className=" max-w-4xl mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-4 text-gray-800">O que é esse site?</h1>
      <p className="text-lg mb-6 text-gray-700">
        Esse site foi produzido com a intenção de desenvolver melhor meus estudos.
      </p>
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Tecnologias Utilizadas:</h2>
      <ul className="list-disc list-inside pl-5 mb-6 text-gray-700">
        <li>React</li>
        <li>Tailwind CSS</li>
        <li>TypeScript</li>
      </ul>
      <p className="text-lg text-gray-700">
        Desenvolvido por{' '}
        <NavLink 
          to="https://github.com/ylano" 
          target="_blank" 
          className="text-blue-500 hover:underline"
        >
          Francisco Ylano
        </NavLink>
      </p>
    </div>
    </div>
  );
};

export default Sobre;
