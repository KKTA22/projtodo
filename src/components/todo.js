import { useState, useEffect } from "react";
import "../App.css";

const Todo = () => {
  const [tasks, settasks] = useState([
    { nam: "sign in with google", comp: false },
    { nam: "enjoy", comp: false },
  ]);
  const [ntask, setntask] = useState("");

  const chck = () => {
    let nams = tasks.map((item) => item.nam);
    if (nams.includes(ntask)) {
      return true;
    }
    return false;
  };

  const subhand = (event) => {
    event.preventDefault();

    if (ntask === "" || ntask.replaceAll(" ", "").length === 0) {
      alert("empty text");
    } else if (chck()) {
      console.log("entered2");
      alert("duplicates not allowed");
    } else {
      settasks([{ nam: ntask, comp: false }, ...tasks]);
      setntask("");
    }
  };

  const subdel = (event) => {
    event.preventDefault();
    settasks(
      tasks.map((item) =>
        item.nam === event.target.attributes.t.value
          ? { ...item, comp: !item.comp }
          : item
      )
    );
  };

  const handdel = (event) => {
    event.preventDefault();
    settasks(
      tasks.filter((item) => item.nam !== event.target.attributes.t.value)
    );
  };
  return (
    <div className="todo">
      <form type="submit" className="inputform" onSubmit={subhand}>
        <input
          type="text"
          value={ntask}
          onChange={(ef) => setntask(ef.target.value)}
        ></input>
        <input type="submit"></input>
      </form>

      {tasks.map((task) => (
        <div className={task.comp ? "yes" : "no"} key={task.nam}>
          <h2 className="taskc">{task.nam} </h2>
          <h3>completed:{task.comp ? "yes" : "no"}</h3>
          <button t={task.nam} onClick={subdel}>
            {" "}
            toggle completetion{" "}
          </button>
          <button t={task.nam} onClick={handdel}>
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};
export default Todo;
