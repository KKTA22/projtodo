import { useState, useEffect } from "react";
import "../App.css";
const Todo = (uid) => {
  //console.log(uid.uid)
  const [tasks, settasks] = useState([]);
  const [loading,setloading]=useState(true);
  const c = 1;
  useEffect(() => {
    fetch("https://serv.kkant.repl.co/todos?uid=" + uid.uid)
      .then((response) => response.json())
      .then((data) => settasks(data));

      return ()=>{setloading(false)}


  }, [c]);

  useEffect(() => {
    if (tasks.length === 0) {
      console.log("entered");
      return;
    } else {
      fetch("https://serv.kkant.repl.co/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ uid: uid.uid, todos: tasks }),
      });
    }
  }, [tasks]);
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
      {loading?<h1>Loading</h1>:<></>}
      <ul className="tasks">
      {tasks.map((task) => (
        <li className={task.comp ? "yes" : "no"} key={task.nam}>
          <h2 className="taskc">{task.nam} </h2>
          <h3>completed:{task.comp ? "yes" : "no"}</h3>
          <button t={task.nam} onClick={subdel}>
            {" "}
            toggle completetion{" "}
          </button>
          <button t={task.nam} onClick={handdel}>
            Remove
          </button>
        </li>
      ))}
      </ul>
    </div>
  );
};
export default Todo;
