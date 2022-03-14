

const Course = (props) => {
    let total = props.courses[0].parts.reduce((accum,item) => accum + item.exercises, 0)
    let total1 = props.courses[1].parts.reduce((accum,item) => accum + item.exercises, 0)
    return (
        <>
    <p>{props.courses[0].parts.map(props => <p>{props.name}{props.exercises} </p> )} </p>
       <p>Total Number of Exercises : {total}</p>
       <h1>{props.name2}</h1>
       <p>{props.courses[1].parts.map(props =>
        <p>{props.name}{props.exercises}  </p> )}
      </p>
      <p>Total Number of Exercises :{total1}</p>
    {/* <p>{props.part2} + {props.part22}</p>
    <p>{props.part3} + {props.part33}</p> */}
    </>
    )
}

export default Course;