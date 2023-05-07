import { Inter } from 'next/font/google';
import FirstPage from "./components/home/home";
import Filter from './components/filter/filter';
import Nav from "./components/navbar/navbar";
import { useState } from "react"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState([]);
  const [brand, setBrand] = useState([]);
  const [price, setPrice] = useState([]);

  return (
    <main
      className={`flex w-screen flex-col ${inter.className}`}
    >
      <Nav setSearch={setSearch} />
      <div>
        <div className='flex gap-7 m-7 mt-10'>
          <div className='ml-7'>
          <Filter setBrand={setBrand} setCategory={setCategory} setPrice={setPrice} />
          </div>
          <div className=' w-4/5'>
          <FirstPage search={search} brand={brand} category={category} price={price} />
          </div>
        </div>
      </div>
    </main>
  )
}
