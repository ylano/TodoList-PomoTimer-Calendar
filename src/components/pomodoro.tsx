import { useState, useEffect } from "react";

export default function Pomodoro() {
  const [seconds, setSeconds] = useState<number>(1500);
  const [isActive, setIsActive] = useState<boolean>(false);

  // Função para alternar o estado ativo/inativo do timer
  function toggle() {
    setIsActive(prevState => !prevState);
  }

  // Função para resetar o timer
  function reset() {
    setSeconds(1500);
    setIsActive(false);
  }

  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | null = null;
    if (seconds === 0) {
      reset()
    }
    if (isActive) {
      interval = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds - 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      if (interval) {
        clearInterval(interval);
      }
    }

    // Limpar o intervalo quando o componente for desmontado ou os efeitos mudarem
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isActive, seconds]);

  return (
    <div className=" w-full max-w-sm rounded-2xl p-6 m-10 bg-zinc-800">
      <h1 className="text-zinc-100 flex items-center text-xl font-semibold justify-center">
        Pomodoro
      </h1>
      <div className="text-center text-zinc-100 text-2xl mt-4">
        {Math.floor(seconds / 60)}:{('0' + (seconds % 60)).slice(-2)}
      </div>
      <div className="flex justify-center mt-4 space-x-4">
        <button
          className={`px-4 py-2 font-semibold rounded-lg text-white ${isActive ? 'bg-green-500 hover:bg-green-600' : 'bg-red-500 hover:bg-red-600'
            }`}
          onClick={toggle}
        >
          {isActive ? 'Pause' : 'Start'}
        </button>
        <button
          className="px-4 py-2 font-semibold rounded-lg bg-gray-500 text-white hover:bg-gray-600"
          onClick={reset}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
