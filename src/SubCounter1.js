import React from 'react'

function SubCounter1({ onClick, counter1 }) {

    // if(counter1 > 3){
    //     throw new Error ('to many count')
    // }
console.log('subCounter1')
    return (
        <div>
            <button onClick={onClick}>SubCounter1</button>
            <div>{counter1}</div>
        </div>
    )
}

export default SubCounter1