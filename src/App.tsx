import Header from "./components/header";
import Footer from "./components/footer";
import TodoList from "./components/todolist";
import Pomodoro from "./components/pomodoro";
import Calendar from "./components/calendar";

function App() {
  return (
    <div>
      <Header />
      <div className="justify-between items-start flex  h-screen">
        <TodoList />
        <Pomodoro />
        <Calendar />
      </div>
      <Footer />
    </div>
  );
}

export default App;
