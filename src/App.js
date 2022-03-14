import { useState, useEffect } from "react"
import History from "./History.js"
import Button from "./Button.js"
import Statistics from "./Statistics.js"
import Course from "./Course.js";
import axios from "axios";
import "./App.css"


// const App = () => {
//   const [countries, setCountries] = useState([])
//   const [filter, setFilter] = useState("")
//   const [showAll, setShowAll] = useState([])
//   const [filtered, setFiltered] = useState([])



// const filterChange = (e) => {
//   setFilter(e.target.value)
// }

// useEffect(() => {
//   axios.get("https://restcountries.com/v3.1/all").then(response => {
//   setCountries(response.data)
//   // console.log(response.data);


// }).then(()=>{
//   const index = countries.find(object => {
//     return object.name.common === "Greece"

// })
// })
// },[])




// const showMore = (index) => {
//   // e.preventDefault()
//   setShowAll( (showAll)=>[...showAll], showAll[index] =!showAll[index])

//   }

//   useEffect (() => {
//     const F =  countries.filter(count => count.name.common.includes(filter)).map(c => c.name.common)
//     setFiltered(F)
//     setShowAll(Array(F.length).fill(false))
//   }, [filter])


  

//   // console.log(filtered);
//   // console.log(showAll);


// return (
//   <>
//     <div>
//       Find Countries : <input value={filter} onChange={filterChange} />
//     </div>

    
    
//     {countries.filter(count => count.name.common.includes(filter)).length<10 && countries.filter(count => count.name.common.includes(filter)).length>1  ? countries.filter(count => count.name.common.includes(filter)).map((count,index )=>  <div><p>{count.name.common} <button onClick={()=>showMore(index)} value={showAll}>Show</button> {showAll[index] && <p>show all</p>} </p>  </div> )  : 
//       filter  === "" ? <p></p> :
//       countries.filter(count => count.name.common.includes(filter)).length === 1 ? countries.filter(count => count.name.common.includes(filter)).map(count => <div> <h1>{count.name.common}</h1> <p>{count.capital}</p> <p>Area {count.area}</p> <h1>Languages</h1> <ul>{Object.keys(count.languages).map(language=><li>{count.languages[language]}</li>)}</ul> <img src={count.flags.png} /> </div> ) :
//        <p>Too many matches</p> 

//     }  
    
//   </>
// )

// }






const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState("")
  const [filter, setNewFilter] = useState("")
  const [success, setSuccess] = useState("")


const nameChange =(e)=>{
setNewName(e.target.value)
}
useEffect(()=>{
  axios.get("http://localhost:3001/db").then((response)=>setPersons(response.data.persons))
console.log(persons)
},[])

// function success() {
//     return <div className="success">Added {e.name}</div>
// }



const addPerson = (e) => {
  e.preventDefault()
  const newPerson = {
  name:newName,
  number:newNumber,
   }
   console.log(persons)

   axios.post("http://localhost:3001/persons", newPerson).then(response => {
    // setPersons([...persons, response.data] )
    setNewName("")
    axios.get("http://localhost:3001/db").then((response)=>setPersons(response.data.persons))
    .then((success) => { 
        setSuccess( <div className="success">Added  {newName}</div>) 
        setTimeout(() => {
            setSuccess(null) }, 5000)
              })
   
   })
  
setNewName("")
setNewNumber("")

}




const numberChange = (e) => {
  setNewNumber(e.target.value)
}

const filterChange = (e) => {
  setNewFilter(e.target.value)
}

const deletePerson = (e) => {
  
axios.delete(`http://localhost:3001/persons/${e}`)
  
  window.confirm("do u really want to delete this number ?")
//   persons.find(e => e === id 
console.log(e)
const deletedName = persons.find(person=>person.id==e).name
       setSuccess(`deleted ${deletedName}`) 
  setTimeout(() => {
      setSuccess(null) }, 5000)
  setPersons(persons.filter(per=> per.id !== e ))
}


// adsfadsfsadfadsfdas



console.log()
// console.log(persons)
  return (
    <>

    {/* {persons.filter(item =>  item.name.includes(filter) || (item.number.includes(filter))) */}
{/*       
    } */}
    <div>
    Filter: 
    <input type="text" value={filter} onChange={filterChange}>
    </input>
    </div>
    <div>
      <h2>Phonebook</h2>
      {success!==null&& success!=="" && <div className="success">{success}</div>}
      <form>
        <div>
          name: <input value={newName} onChange={nameChange}/>
        </div>
        <div>Number: <input type="number" value={newNumber} onChange={numberChange} />
        </div>
        <div>
          <button type="submit" onClick={addPerson}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.filter(item =>  item.name[0]===filter || (item.number.includes(filter))).map(e=> <div><p>{e.name} {e.number}  <button onClick={()=>deletePerson(e.id)} >Delete</button> </p></div>)}
    </div>
    </>
  )
}















// const App = () => {
//   const [persons, setPersons] = useState([
//     { name: 'Arto Hellas' }
//   ]) 
//   const [newName, setNewName] = useState('')

//   const addNote = (event) => {
//     event.preventDefault()
//     console.log('button clicked', event.target)
//   }

//   const handleNoteChange = (event) => {
//     console.log(event.target.value)
//     setNewName(event.target.value)
//   }

//   const addNote1 = (event) => {
//     event.preventDefault()
//     const noteObject = {
//       content: newName,
//       date: new Date().toISOString(),
//       important: Math.random() < 0.5,
//       id: notes.length + 1,
//     }
  
//     setPersons(persons.concat(noteObject))
//     setNewName('')
//   }

//   return (
//     <>
    
//       <h2>Phonebook</h2>
//       <form onSubmit={addNote}>
//         <div>
//           name: <input 
//           value={newName}
//           onChange={handleNoteChange} />
//         </div>
//         <div>
//           <button onClick={addNote1} type="submit">add</button>
//         </div>
//       </form>
//       <h2>Numbers</h2>
//       {persons}
//       </>
    
//   )
// }







// const App = () => {
//   const courses = [
//     {
//       name: 'Half Stack application development',
//       id: 1,
//       parts: [
//         {
//           name: 'Fundamentals of React',
//           exercises: 10,
//           id: 1
//         },
//         {
//           name: 'Using props to pass data',
//           exercises: 7,
//           id: 2
//         },
//         {
//           name: 'State of a component',
//           exercises: 14,
//           id: 3
//         },
//         {
//           name: 'Redux',
//           exercises: 11,
//           id: 4
//         }
//       ]
//     }, 
//     {
//       name: 'Node.js',
//       id: 2,
//       parts: [
//         {
//           name: 'Routing',
//           exercises: 3,
//           id: 1
//         },
//         {
//           name: 'Middlewares',
//           exercises: 7,
//           id: 2
//         }
//       ]
//     }
//   ]

//   // let total = courses[0].parts.reduce((accum,item) => accum + item.exercises, 0)
//   // let total1 = courses[1].parts.reduce((accum,item) => accum + item.exercises, 0)

  

//   return (
//     <>
//     <h1>{courses[0].name}</h1>

//    <Course courses={courses} name2={courses[1].name} />   

      

//     </>
//   )

  
// }


























// const App = () => {
//   const anecdotes = [
//     'If it hurts, do it more often',
//     'Adding manpower to a late software project makes it later!',
//     'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
//     'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
//     'Premature optimization is the root of all evil.',
//     'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
//     'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
//   ]
   
//   const [selected, setSelected] = useState(0)
//   const [votes, setVotes] = useState(Array.apply(null, new Array(7)).map(Number.prototype.valueOf,0))

//   // const newArr =  Array.apply(null, new Array(7)).map(Number.prototype.valueOf,0);

//   // const newArr = Array.apply(null, new Array(7)).map(Number.prototype.valueOf,0)
//   // console.log(newArr);
//     const max = Math.max(...votes);
//     const index = votes.indexOf(max)

 
 
//   const change = () => {
//     // Math.floor(Math.random() * anecdotes.length + 1);
//     // setSelected(change);
//     setSelected( Math.floor(Math.random() * anecdotes.length ))
//   }

//   const addVote = () => {
//     const votesCopy = [...votes];
//     votesCopy[selected] += 1;
//     setVotes(votesCopy)
//   };

  
  
  

//   return (
//     <div>
      
//       {anecdotes[selected]}     <br />
//       has {votes[selected]} Votes     <br />             
//       <Button handleClick = {change} text="next anecdote" />
//       <Button handleClick = {addVote} text="Vote" />
//       <History index={index} anecdote={anecdotes} />
//     </div>
//   )
// }



















// const App = () => {
//   const [left, setLeft] = useState(0)
//   const [right, setRight] = useState(0)
//   const [center, setCenter] = useState(0)
//   const [all, setAll] = useState(0)
//   const [arr, setArr] = useState([])
//   // const [allClicks, setAllClicks] = useState([])

//   const handleLeftClick = () => {
//     setLeft(left + 1)
//     setArr(arr.concat("L"))
//     setAll(all + 1)
//   }

//   const handleRightClick = () => {
//     setRight(right + 1)
//     setArr(arr.concat("R"))
//     setAll(all + 1)

//   }

//   const handleCenterClick =() => {
//     setCenter(center + 1)
//     setArr(arr.concat("C"))
//     setAll(all + 1)

//   }

  
 

//   return (
//     <div>
//     <h1>Give Feedback</h1>
//       <Button handleClick={handleLeftClick} text="Good" />
//       <Button handleClick={handleRightClick} text="Neutral" />
//       <Button handleClick={handleCenterClick} text="Bad" />
//     <Statistics  arr={arr} left= {left} right={right} center={center} all={all} />


      

//     </div>
//   )
// }




// const App = (props) => {
//   const [timer, setTimer] = useState(2)

//   const timerPlus = () => {
//     setTimer(timer + 1)
//   }

//   const timerMinus = () => {
//     setTimer (timer -1 )
//   };

//   const timerNull = () => {
//     setTimer(0)
//   }
  
  
//   return (
//     <>
//       <p>{timer}</p>
//       <button onClick={() => timerPlus()}>+</button>
//       <button onClick={() => timerMinus()}>-</button>
//       <button onClick={() => timerNull()}>Zero</button>
//     </>
//   )

// }







// import Hello from "./Header.js"

// const App = () => {
//   const name = 'Peter'
//   const age = 10
//   const [counter, setCounter] = useState(0)
//   setTimeout (
//     () => setCounter(counter + 1),
//     1000
//   )
//   return (
//     <div>
//       <h1>Greetings</h1>
//       <Hello name="Maya" age={26 + 10} />
//       <Hello name={name} age={age} />
//     </div>
//   )
// }


export default App;





























// import Content from "./Content.js"
// import Content1 from "./Content1"

// const App = () => {
//   const course = 'Half Stack application development'
//   const part1 = {
//     name: 'Fundamentals of React',
//     exercises: 10
//   }
//   const part2 = {
//     name: 'Using props to pass data',
//     exercises: 7
//   }
//   const part3 = {
//     name: 'State of a component',
//     exercises: 14
//   }

//   return (
//    <>
//      <div className="App">
//        <Header course={course} />
//        <Header name={part1.name} />
//        <Header exercises={part1.exercises} />
//        <Content name={part2.name} />
//        <Content exercises={part2.exercises} />
//        <Content1 name={part3.name} />
//        <Content exercises={part3.exercises} />

//      </div>
//    </>
//   )
// }

// export default App;