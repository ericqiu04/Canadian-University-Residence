import dummy from './dummyImage.jpeg'
import Image from "next/image";
import {useEffect, useState} from "react";
export const UniPage = () => {
    const [data, setData] = useState("Hello World");


    useEffect(() => {
        fetch('http://localhost:8080/universities')
            .then(response => response.json())
            .then(data => setData(data.message))
            .catch(error => console.log(error));
    }, []);
    return(

        <>

            <div className = "flex flex-col justify-center items-center bg-white h-96">
                <input type="search" placeholder="Search University" className = " w-2/3 xl:w-1/2 py-2 px-7 xl:py-5 xl:px-10 m-10 border-2 rounded-2xl"/>
                <div className = "border-2 rounded-2xl xl:py-20 xl:px-20 py-5 px-20">
                    <h2 className = "xl:text-4xl text-2xl">
                        {data}
                    </h2>
                </div>
            </div>

        </>
    );
}