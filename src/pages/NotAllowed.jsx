import React, { useState } from "react";

const NotAllowed = () => {
    const [counter, setCounter] = useState(5);
    const navigate = useNavigate();
    useEffect(()=>{
        const timer = setInterval(()=> {
            navigate("/");
        }, 5000);

        const countDown = setInterval(() => {
            setCounter((prevCounter) =>{
                if(prevCounter <= 1){
                    clearInterval(countDown);
                    return 0;
                }
                return prevCounter - 1;
            });
        }, 1000);
        return () => {
            clearTimeout(timer);
            clearInterval(countDown);
        };
    },[navigate]);
    return (
        <div></div>
    )
}