import { useEffect, useState } from "react"


export default function Timer() {

        const [seconds, setSeconds] = useState(20);
        const [isActive, setIsActive] = useState(true);

        function stop() {
            setSeconds(0)
        }

        useEffect(() => {
     const timer = setInterval(() => {
        if(seconds > 0){
            setSeconds( seconds - 1 );
        }
            }, 1000)
            return () => clearInterval(timer)  
        })
        
    return (
        <div>
            <div><lottie-player src="https://assets9.lottiefiles.com/packages/lf20_9zrznuec.json"  background="transparent"  speed="0.8" loop  autoplay></lottie-player></div>
            <h1>{seconds}</h1>
        </div>
    )
}