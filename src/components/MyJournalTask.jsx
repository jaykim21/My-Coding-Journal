import React, { useEffect, useState } from 'react';
import TaskTable from './TaskTable';
import TaskForm from './TaskForm';

const JournalData = localStorage.getItem('journalTaskDetails') ? JSON.parse(localStorage.getItem('journalDetails')) : [];

const MyJournalTask = () => {
  const current = new Date();
  const currentdate = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
  
  const [journalArray, setJournalArray] = useState(JournalData);


  const [date, setDate] = useState(currentdate);
  const [inputTask, setInputTask] = useState('');

  


  const handleDate = (e) => {
    setDate(e.target.value)
  };

  const handleInputTask = (e) => {
    setInputTask(e.target.value)
  };


  const handleSave= (e) => {
    e.preventDefault();
    if ( inputTask !== ""){

        const journalId = Date.now();

        const journal = {journalId, date, inputTask};
        
        setJournalArray([...journalArray, journal]);

        setDate(currentdate);
        setInputTask("");
       

    }else { alert("Invalid Input")}
  }

  useEffect(()=>{
    localStorage.setItem("journalTaskDetails", JSON.stringify(journalArray))
  }, [journalArray])

  return (
    <div>
      <TaskForm 
      date = {currentdate}
      inputTask={inputTask}
      handleDate={handleDate}
      handleInputTask={handleInputTask}
      handleSave={handleSave}
      />
      <TaskTable 
      journalArray={journalArray}
      setJournalArray={setJournalArray}
      />
    </div>
  )
}

export default MyJournalTask
