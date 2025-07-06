import React,{useState,useEffect} from "react";
import './DigitalClock.css'


function DigitalClock(){

    const [time,setTime]=useState(new Date())

    useEffect(()=>{
        const timeIntervel=setInterval(()=>{//here we set time after render
            setTime(new Date())
        },1000)

        return()=>{
              clearInterval(timeIntervel)// and clean after render
        }
          
        



    },[])


    function timing(){
        let hour=time.getHours();//we cannot use const in hour because we change the value for hour
                                //hour=hour%12 || 12 so we use let
        const min=time.getMinutes();
        const sec=time.getSeconds();
        const meridium=hour>=12 ? "PM":"AM"; // here the hour is greater than 12 means  it will change
                                            // to pm orelse it will be am
        
        hour= hour % 12 || 12;//here we changeing railway timing into normal timing
                                //by using "%" if the the time is 12 means it will display 0
                                // so , for that we use || for that 0== false so the 12 will store   
        return(`${zero(hour)}:${zero(min)}:${zero(sec)} ${zero(meridium)}`)//then we will return all the value
    }
   
   
   function zero(n){
    return( n<10 ? "0":"")+n // here the single digit values comes with 01,02 like that

   }
   
   
    return(

        <>
        <div className="main-container">
            <div className="container">
                <span>{timing()}</span>
            </div>

        </div>
        
        
        </>
    )






}
export default DigitalClock
