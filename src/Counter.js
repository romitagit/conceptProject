import { useCallback, useState } from "react"
import SubCounter1 from "./SubCounter1"
import SubCounter2 from "./SubCounter2"

function Counter() {
    const [counter1, setCounter1] = useState(0)
    const [counter2, setCounter2] = useState(0)
  
    const handelCounter1 = () => {
        console.log('handelCounter1')
        setCounter1((prev)=>prev+ 1)
    }
    const handelCounter2 = () => {
        console.log('handelCounter2')
        setCounter2((prev)=>prev+ 1)
    }

    // const handelCounter2 = useCallback(() => {
    //     console.log('handelCounter2')
    //     setCounter2((prev)=>prev+ 1)
    // },[])
   // useCallback()
  
    return (
        <>
            <SubCounter1 onClick={()=>handelCounter1()} counter1={counter1}/>
            <SubCounter2 onClick={handelCounter2} counter2={counter2}/>
        </>
    )
}

export default Counter