import React from 'react'

const SubCounter2 = React.memo (({ onClick, counter2 })=> {
    console.log('subCounter2')

    return (
        <>
            <button onClick={onClick}>SubCounter2</button>
            <div>{counter2}</div>
        </>
    )
}
)
export default SubCounter2