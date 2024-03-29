import { FaFilter } from "react-icons/fa";

const Filter = ({ setBrand, setCategory, setPrice }: { setBrand: any, setCategory: any, setPrice: any }) => {
    const handleChange = (e: any) => {
        setBrand((prev: any) => {
            if (e.target.checked) {
                return [...prev, e.target.value]
            }
            return prev.filter((item: any) => item !== e.target.value)
        })
    }

    const handleCategory = (e: any) => {

        setCategory((pre: any) => {
            if (e.target.checked) {
                return [...pre, e.target.value]
            }
            return pre.filter((item: any) => item !== e.target.value)
        })
    }

    const handlePrice = (e: any) => {
        setPrice((pre: any) => {
            if (e.target.checked) {
                return [...pre, e.target.value]
            }
            return pre.filter((item: any) => item !== e.target.value)
        })

    }
    return (
        <div className="bg-white w-72 drop-shadow-lg">
            <div className="flex items-center justify-between h-10 px-5">
                <p>Filter</p>
                <FaFilter />
            </div>
            <hr className="" />
            <div className="py-3 pl-5">
                <p className="mb-1 font-semibold ">Brand</p>
                <div className="filter-font">

                <p><input type="checkbox" value="brandA" onChange={handleChange} /> &nbsp;Number A</p>
                <p><input type="checkbox" value="brandB" onChange={handleChange} /> &nbsp;Brand 2</p>
                <p><input type="checkbox" value="brandC" onChange={handleChange} /> &nbsp;Brand C</p>
                <p><input type="checkbox" value="brandE" onChange={handleChange} /> &nbsp;Miracle</p>
                <p><input type="checkbox" value="brandF" onChange={handleChange} /> &nbsp;Empty</p>
                </div>
            </div>
            <hr className="" />
            <div className="py-3 pl-5">
                <p className="mb-1 font-semibold">Category</p>
                <div className="filter-font">

                <p><input type="checkbox" value="A" onChange={handleCategory} /> &nbsp;Number A</p>
                <p><input type="checkbox" value="B" onChange={handleCategory} /> &nbsp;Brand 2</p>
                <p><input type="checkbox" value="C" onChange={handleCategory} /> &nbsp;Brand C</p>
                <p><input type="checkbox" value="D" onChange={handleCategory} /> &nbsp;Miracle</p>
                <p><input type="checkbox" value="E" onChange={handleCategory} /> &nbsp;Empty</p>
                </div>
            </div>
            <hr className="text-black" />
            <div className="py-3 pl-5">
                <p className="mb-1 font-semibold">Price</p>
                <p><input type="checkbox" value="0 100" onChange={handlePrice} /> &nbsp;{"< $100"}</p>
                <p><input type="checkbox" value="100 200" onChange={handlePrice} /> &nbsp;{"$100-$199"}</p>
                <p><input type="checkbox" value="200 600" onChange={handlePrice} /> &nbsp;{"$200-$599"}</p>
                <p><input type="checkbox" value="600 1000" onChange={handlePrice} /> &nbsp;{"$600-$999"}</p>
                <p><input type="checkbox" value="1000 2000000" onChange={handlePrice} /> &nbsp;{"> $1000"}</p>
            </div>
        </div>
    )
}

export default Filter