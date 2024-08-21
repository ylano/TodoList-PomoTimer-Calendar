import { ChangeEvent, FormEvent, useState } from "react";

export default function TodoList() {
  type Task = {
    id: number;
    text: string;
  };

  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState("");
  const [nextId, setNextId] = useState(1);

  const addTask = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (newTask.trim() === "") return;

    setTasks([...tasks, { id: nextId, text: newTask }]);
    setNewTask("");
    setNextId(nextId + 1);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewTask(event.target.value); // Atualiza o estado da nova tarefa
  };

  const removeTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id)); // Filtra a tarefa a ser removida
  };

  return (
    <div className="w-full max-w-md">
      <div className="max-w-sm rounded-2xl p-2 m-10 bg-zinc-800">
        <p className=" text-zinc-100 flex p-2 items-center justify-center text-2xl font-semibold">
          To-Do List
        </p>
        <div className=" h-auto">
          <form
            onSubmit={addTask}
            className=" p-4 flex items-center justify-center"
          >
            <input
              type="text"
              value={newTask}
              onChange={handleChange}
              placeholder="Nova Tarefa"
              className=" max-w-64 text-center w-full p-2 rounded-2xl"
            />
            <button
              type="submit"
              className="max-w-64 text-sm font-semibold text-zinc-100 ml-2 p-2 bg-blue-500 rounded-lg hover:bg-blue-600"
            >
              Adicionar
            </button>
          </form>
          <ul className=" px-2 mt-4">
            {tasks.map((task) => (
              <li
                key={task.id}
                className="flex justify-between items-center mb-4 p-3 bg-zinc-100 rounded-lg"
              >
                <span className="break-all px-2 text-lg font-semibold text-zinc-900">
                  {task.text}
                </span>
                <button
                  onClick={() => removeTask(task.id)}
                  className=" text-sm font-semibold text-zinc-100 ml-2 p-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                >
                  Remover
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
