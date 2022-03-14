

const Statistics = (props) => {

    // if (props.arr.length === 0){
    //     return ( 
    //     <>
    //     <h1>Statistics</h1>
    //     <p>No Feedbacks Given</p>
    //     </>
    //     )
    // }
    console.log(props.arr)
    return (
        <>
            <h1>Statistics</h1>

            {props.arr.length > 0 ?
                <>
                    <p>Good :{props.left}</p>
                    <p>Bad :  {props.center}</p>
                    <p>All : {props.all}</p>
                    <p>Positive : {props.all !== 0 && props.left / props.all * 100}  </p> </> : <p>No Feedbacks Given</p>}

        </>

    )
}

export default Statistics;