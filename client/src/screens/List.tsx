import { useLoaderData, useNavigate } from "react-router-dom";
import { Task } from "../types";
import Card from "../components/Card";
import Button from "../components/Button";

const List = () => {
  const data = useLoaderData() as Task[];
  const navigate = useNavigate();
  return (
    <div>
      <div className="button-container">
        {data.length > 0 && (
          <Button
            label="Add Task"
            onClick={() => navigate("/task")}
            buttonType="primary"
            title="Add a new task"
          />
        )}
      </div>

      {data.length === 0 ? (
        <div className="button-center-container">
          <p>No Tasks</p>
          <Button
            label="Add a New Task"
            onClick={() => navigate("/task")}
            buttonType="primary"
            title="Add a new task"
          />
        </div>
      ) : (
        data.map((task: Task, index: number) => (
          <Card
            task={task}
            key={index}
            load={() => {
              navigate("/");
            }}
          />
        ))
      )}
    </div>
  );
};

export default List;
