
import './App.css'
import { useState } from "react";
import ticketsData from "./data/tickets";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import TicketCard from "./components/TicketCard";
import TaskStatus from "./components/TaskStatus";
import Footer from "./components/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const [tasks, setTasks] = useState([]);
  const [resolved, setResolved] = useState(0);

  const handleAdd = (ticket) => {
    const exists = tasks.find((t) => t.id === ticket.id);
    if (exists) {
      toast.error("Already Added!");
      return;
    }
    setTasks([...tasks, ticket]);
    toast.success("Ticket Added!");
  };

  const handleComplete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
    setResolved(resolved + 1);
    toast.success("Ticket Completed!");
  };

  return (
    <>
      <Navbar />
      <Banner inProgress={tasks.length} resolved={resolved} />

      <div className="grid md:grid-cols-3 gap-4 p-4">
        <div className="md:col-span-2 grid md:grid-cols-2 gap-4">
          {ticketsData.map((ticket) => (
            <TicketCard
              key={ticket.id}
              ticket={ticket}
              handleAdd={handleAdd}
            />
          ))}
        </div>

        <TaskStatus tasks={tasks} handleComplete={handleComplete} />
      </div>

      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;