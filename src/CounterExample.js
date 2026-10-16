// import React, {useState, useEffect} from "react";
// function CounterExample(){
//     const [count, setCount] = useState(0);
    

//     useEffect(() => {
//     document.title = `You clicked {count} times`;
//     });
//     return (
//         <div>
//         <p>You clicked {count} times</p>
//         <button onClick={() => setCount(count + 1)}>
//         Click me
//         </button>
//         </div>
//         );
// }

// export default CounterExample;






// import React, {useState, useEffect} from "react";
// function CounterExample(){
//     const [count, setCount] = useState(0);
//     const [demo, base] = useState(0);
    

//     useEffect(() => {
//     document.title = `You clicked ${demo} times`;
//     },[demo]);
//     return (
//         <div>
//         <p>You clicked {demo} times</p>
//         <button onClick={() => base(count + 1)}>
//         Click me
//         </button>
//         </div>
//         );
// }   

// export default CounterExample;


import React, {useState} from "react";
function CounterExample(){
    const [car, setCar] = useState({
        brand: "Ford",
        model: "Mustang",
        year: "1964",
        color: "red"
    });


    const updateColor = () => {
        setCar(previousState => {
            return { ...previousState, color: "blue"}
        });
    }
    return (
        <>
            <h1>My {car.brand}</h1>
            <p>
                It is a {car.color} {car.model} from {car.year}.
            </p>
            <button
                type="button"
                onClick={updateColor}> Blue</button>
        </>
        );
}   

export default CounterExample;