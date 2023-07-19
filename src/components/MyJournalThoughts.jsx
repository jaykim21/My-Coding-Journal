import React, { useEffect, useState } from 'react';
import ThoughtsForm from './ThoughtsForm';
import ThoughtsTable from './ThoughtsTable';

const JournalData = localStorage.getItem('journalDetails') ? JSON.parse(localStorage.getItem('journalDetails')) : [];

const MyJournalThoughts = () => {
  const current = new Date();
  const currentdate = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
  
  const [journalArray, setJournalArray] = useState(JournalData);


  const [date, setDate] = useState(currentdate);
  const [inputThoughts, setInputThoughts] = useState('');


  const handleDate = (e) => {
    setDate(e.target.value)
  };

  const handleInputThoughts = (e) => {
    setInputThoughts(e.target.value)
  };


  const handleSave= (e) => {
    e.preventDefault();
    if ( inputThoughts !== ""){

        const journalId = Date.now();

        const journal = {journalId, date, inputThoughts};
        
        setJournalArray([...journalArray, journal]);

        setDate(currentdate);
        setInputThoughts("");
       

    }else { alert("Invalid Input")}
  }

  useEffect(()=>{
    localStorage.setItem("journalDetails", JSON.stringify(journalArray))
  }, [journalArray])

  return (
    <div>
        <ThoughtsForm 
        date = {currentdate}
        inputThoughts={inputThoughts}
        handleDate={handleDate}
        handleInputThoughts={handleInputThoughts}
        handleSave={handleSave}
        />
        <ThoughtsTable 
        journalArray={journalArray}
        setJournalArray={setJournalArray}
        />
    </div>
  )
}

export default MyJournalThoughts
