import dummy from './dummyImage.jpeg'
import Image from "next/image";
import {Uni} from "@/pages/components/Uni";
import {useEffect, useState} from "react";
export const UniPage = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const res = await fetch('http://localhost:8080/universities');
            const newData = await res.json();
            setData(newData.message);
        }
        fetchData();
    }, []);

    return(

        <div>
                <div className = "flex flex-col justify-center items-center bg-white h-96">
                    <input type="search" placeholder="Search University" className = " w-2/3 xl:w-1/2 py-2 px-7 xl:py-5 xl:px-10 m-10 border-2 rounded-2xl"/>
                    {data.map((d) => (
                        <Uni
                            name = {d.name}
                        />
                    ))}
                </div>

        </div>
    );
}