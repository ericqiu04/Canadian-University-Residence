import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import getTest from "@/pages/api/backend";
import {useState, useEffect} from "react";
import { HomePage} from './components/home';

const inter = Inter({ subsets: ['latin'] })


export default function Home() {
    const [data, setData] = useState("Hello World");


    useEffect(() => {
        fetch('http://localhost:8080/')
            .then(response => response.json())
            .then(data => setData(data.message))
            .catch(error => console.log(error));
    }, []);

  return (
    <>
      <div>
        <HomePage/>
      </div>
    </>
  )
}
