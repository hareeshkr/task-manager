import { patchCall } from "../services/apiCalls";
import { useState } from "react";
import { Task } from "../types";
import Popup from "./Popup";
import { useNavigate } from "react-router-dom";

interface Props {
  task: Task;
  load: () => void;
}

const Card = ({ task, load }: Props) => {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const toggleCompleted = async () => {
    try {
      const res = await patchCall(`/${task._id}`, {
        completed: !task.completed,
      });
      res.status === 200 && load();
    } catch (error) {
      setError("Error updating task");
      return;
    }
  };

  return (
    <>
      <div
        className={`card-container ${
          task.completed && "card-container-completed"
        }`}
      >
        <input
          type="checkbox"
          className="card-checkbox"
          checked={task.completed}
          title={task.completed ? "Mark it pending" : "Mark it completed"}
          onChange={() => {}}
          onClick={toggleCompleted}
        />
        <div
          className="card-info"
          onClick={() => {
            navigate(`/task/${task._id}`);
          }}
        >
          <h3 title="Title of the task">{task.title}</h3>
          <p title="Description of the task">{task.description}</p>
        </div>
      </div>
      {error && (
        <Popup closePopup={() => setError("")}>
          <div className="error-popup">
            <h3>Error !</h3>
            <p>{error}</p>
          </div>
        </Popup>
      )}
    </>
  );
};

export default Card;
