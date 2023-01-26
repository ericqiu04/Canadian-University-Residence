import dummy from './dummyImage.jpeg'
import Image from "next/image";
import {Uni} from "@/pages/components/Uni";
import {useEffect, useState} from "react";
export const UniPage = () => {
    const [data, setData] = useState([]);
    const [inputText, setInputText] = useState("");
    const inputHandler = (e) => {
        //convert input text to lower case
        var lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
    };
    useEffect(() => {
        async function fetchData() {
            const res = await fetch('http://localhost:8080/universities');
            const newData = await res.json();
            setData(newData.message);
        }
        fetchData();
    }, []);

    const filteredData = data.filter((el) => {
        //if no input the return the original
        if (inputText === '') {
            return el;
        }
        //return the item which contains the user input
        else {
            return el.name.toLowerCase().includes(inputText)
        }
    })

    return(

        <div>
                <div className = "flex flex-col justify-center items-center bg-white w-screen">
                    <input onChange = {inputHandler} type="search" placeholder="Search University" className = " w-2/3 xl:w-1/2 py-2 px-7 xl:py-5 xl:px-10 m-10 border-2 rounded-2xl"/>
                    <div className = "xl:grid xl:grid-cols-3 ">
                        {filteredData.map((d) => (
                            <Uni
                                input = {inputText}
                                name = {d.name}
                            />
                        ))}
                    </div>
                </div>

        </div>
    );
}