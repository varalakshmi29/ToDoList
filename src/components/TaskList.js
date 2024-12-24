import React, { useState } from "react";

const TaskList = ({ tasks, toggleComplete, removeTask, editTask }) => {
  const [editingIndex, setEditingIndex] = useState(null);
  const [newText, setNewText] = useState("");

  const handleEdit = (index) => {
    setEditingIndex(index);
    setNewText(tasks[index].text); // Populate input with current task text
  };

  const handleSave = (index) => {
    editTask(index, newText);
    setEditingIndex(null); // Exit edit mode
    setNewText("");
  };

  return (
    <ul style={{ padding: 0, listStyle: "none" }}>
      {tasks.map((task, index) => (
        <li
          key={index}
          className={task.completed ? "completed" : ""}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "10px",
            background: "#f8f5ff",
            margin: "10px 0",
            padding: "10px 15px",
            borderRadius: "8px",
            border: "1px solid #e0d7f5",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              flex: 1, // Ensure this section stretches correctly
            }}
          >
            {/* Checkbox */}
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleComplete(index)}
              style={{
                width: "20px",
                height: "20px",
                cursor: "pointer",
                accentColor: "#28a745",
                flexShrink: 0, // Prevent resizing
              }}
            />
            {/* Editable Text Field */}
            {editingIndex === index ? (
              <input
                type="text"
                value={newText}
                onChange={(e) => setNewText(e.target.value)}
                style={{
                  flex: 1,
                  padding: "5px",
                  border: "2px solid #b19cd9",
                  borderRadius: "5px",
                  fontSize: "1rem",
                }}
              />
            ) : (
              <span
                style={{
                  flex: 1,
                  textAlign: "left",
                }}
              >
                {task.text}
              </span>
            )}
          </div>
          {/* Action Buttons */}
          <div style={{ display: "flex", gap: "5px" }}>
            {editingIndex === index ? (
              <button
                onClick={() => handleSave(index)}
                style={{
                  backgroundColor: "#ff7f7f",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  padding: "5px 10px",
                  cursor: "pointer",
                }}
              >
                Save
              </button>
            ) : (
              <>
                <button
                  onClick={() => handleEdit(index)}
                  style={{
                    backgroundColor: "#836fff",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    padding: "5px 10px",
                    cursor: "pointer",
                  }}
                >
                  Edit
                </button>
                <button
                  onClick={() => removeTask(index)}
                  style={{
                    backgroundColor: "#ff4a4a",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    padding: "5px 10px",
                    cursor: "pointer",
                  }}
                >
                  Remove
                </button>
              </>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
