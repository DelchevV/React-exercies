import './App.css';
import { useState } from 'react';


function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleChange = (event) => {
    setNewTask(event.target.value)
  }

  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      completed: false
    }
    setTodoList([...todoList, task])
  };

  const deleteAction = (taskName) => {
    const newTodoList = todoList.filter((task) => {
      return task === taskName ? false : true;
    })

    setTodoList(newTodoList)
  }

  const completeTask = (id) => {
    setTodoList(
      todoList.map((task)=>{
        if (task.id === id ){
          return {...task, completed: true}
        }else{
          return task
        }
      })
    )
    
  }

  return (
    <div className="App">
      <div className='addTask'>
        <input onChange={handleChange}></input>
        <button onClick={addTask}>Add Task</button>
      </div>

      <div className='list'>
        {todoList.map((task) => {
          return (
            <div className='task' style={ {backgroundColor: task.completed ? 'green' : 'white'}}>
              <h2>{task.taskName}</h2>
              <button onClick={() => completeTask(task.id)}>Complete</button>
              <button onClick={() => deleteAction(task)}>X</button>
            </div>
          )
        })}

      </div>

    </div>
  );
}

export default App;
