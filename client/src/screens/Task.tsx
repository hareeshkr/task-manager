import Button from "../components/Button";
import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { Task } from "../types";
import { deleteCall, patchCall, postCall } from "../services/apiCalls";
import Popup from "../components/Popup";

const TaskPage = () => {
  const data = useLoaderData() as { task: Task };
  const navigate = useNavigate();
  const [error, setError] = useState<string>("");
  const [deletePopup, setDeletePopup] = useState<boolean>(false);

  const submitTask = async (e: any) => {
    e.preventDefault();
    const newData = {
      title: e.target[0].value,
      description: e.target[1].value,
    };
    try {
      data
        ? await patchCall(`/${data?.task._id}`, newData)
        : await postCall("/", newData);
      navigate("/");
    } catch (error) {
      setError("Error updating task");
    }
  };

  const deleteTask = async () => {
    try {
      await deleteCall(`/${data?.task._id}`);
      navigate("/");
    } catch (error) {
      setError("Error deleting task");
    }
  };

  return (
    <>
      <form className="form-container" onSubmit={submitTask}>
        {/* <h1>{data ? "Edit Task" : "Add Task"}</h1> */}
        <div style={{ display: "grid" }}>
          <input
            type="text"
            id="title"
            defaultValue={data?.task.title}
            className="input-field"
            maxLength={50}
            minLength={3}
            placeholder="Enter title"
            required
            title="Enter title"
          />
          <p className="input-info">Max. Character: 50</p>
        </div>
        <div style={{ display: "grid" }}>
          <textarea
            style={{ resize: "none" }}
            id="description"
            rows={6}
            defaultValue={data?.task.description}
            className="input-field textarea"
            placeholder="Enter description"
            required
            title="Enter description"
          />
        </div>
        <div className="button-container">
          <Button
            label="Back"
            buttonType="transparent"
            onClick={() => {
              navigate(-1);
            }}
            title="Go back"
          />
          {data && (
            <Button
              label="Delete"
              buttonType="danger"
              onClick={() => {
                setDeletePopup(true);
              }}
              type="button"
              title="Delete task"
            />
          )}
          <Button
            label="Submit"
            buttonType="primary"
            type="submit"
            onClick={() => {}}
            title="Submit task"
          />
        </div>
      </form>
      {error && (
        <Popup closePopup={() => setError("")}>
          <div className="error-popup">
            <h3>Error !</h3>
            <p>{error}</p>
          </div>
        </Popup>
      )}
      {deletePopup && (
        <Popup closePopup={() => setDeletePopup(false)}>
          <div className="error-popup">
            <h3>Are you sure you want to delete this task ?</h3>
            <div className="button-container">
              <Button
                label="Cancel"
                buttonType="transparent"
                onClick={() => setDeletePopup(false)}
                title="Cancel delete"
              />
              <Button
                label="Delete"
                buttonType="danger"
                onClick={deleteTask}
                title="Confirm deletion of the task"
              />
            </div>
          </div>
        </Popup>
      )}
    </>
  );
};

export default TaskPage;
