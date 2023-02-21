import { useContext, useEffect, useState } from "react"
import { UserContext } from "../context/UserContext"

export default function Decompte() {


    const { CategorieTable } = useContext(UserContext)

    const [seconds, setSeconds] = useState(3)
    useEffect(() => {
        const timer = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1)
            } else if (seconds === 0) {
                window.location = `http://localhost:3000/Quiz/${CategorieTable[0].categorieQuiz}`
            }
        }, 1000)
        return () => clearInterval(timer)
    })


    

    return(
        <div>
            <h1>Attention!</h1>
            <span>{seconds}</span>
        </div>
    )
}