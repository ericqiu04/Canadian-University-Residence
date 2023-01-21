import backImage from '../images/residence image.jpeg'
import Image from "next/image";
export const HomePage = () => {


    return(

        <div id = "homediv" className = "animate-fade bg-home-image bg-cover bg-blend text-white">
            <div className = "flex flex-col justify-center items-center w-full h-screen bg-black bg-opacity-75 brightness-100" >
                <h1 className = "px-20 py-5 xl:text-6xl text-bold font-bold sm:text-xl">
                    Canadian Uni Res Rater
                </h1>
                <button className = "py-3 px-5 border-4 bg-blue-300 border-blue-400 rounded-2xl animate-buttonFade">
                    Get started
                </button>
            </div>
        </div>


    )

}
