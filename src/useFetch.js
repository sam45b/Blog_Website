import { useEffect, useState } from "react";

const useFetch =(url) =>{


    const[data,setData] = useState(null)
    const[isPending,SetIsPending]= useState(true);
    const [error,SetError] = useState(null);

    useEffect(()=>{
        const abortCount = new AbortController();

        setTimeout(()=>{
            fetch(url,{signal:abortCount.signal})
            .then((res)=>{
                if(!res.ok){
                    throw Error("Could not fetch data");
                }
                return res.json();
            })
            .then((data)=>{
                setData(data);
                SetIsPending(false);
                SetError(null);
            })
            .catch((err)=>{
                if(err.name === "AbortError"){
                    console.log("Fetch Aborted")
                }
                else{
                    SetError(err.message);
                    SetIsPending(false);
                }
                })
        },500)

        return () => abortCount.abort();
 
    },[url])

    return {data,isPending,error};

}

export default useFetch;