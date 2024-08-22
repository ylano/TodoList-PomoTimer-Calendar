import Pomodoro from "../components/pomodoro"
import TodoList from "../components/todolist"
import MyCalendar from "../components/calendar"

const Home = () => {
  return (
    <div className="h-screen">
      <div>
        <div className="justify-between items-start flex  h-screen">
          <TodoList />
          <Pomodoro />
          <MyCalendar />
        </div>

      <div></div>

      </div>
    </div>
  )
}

export default Home
