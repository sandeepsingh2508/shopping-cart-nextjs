import { useEffect, useState } from "react";
import Cart from "./cart";

function Home({ search, brand, category, price }: { search: any, brand: any, category: any, price: any }) {
    let Data = [
        {
            image: "https://cdn.pixabay.com/photo/2016/03/24/22/09/hyacinthus-orientalis-1277753_960_720.jpg",
            item: "Elegant design flower pot",
            price: 25,
            discount: 35,
            review: 577,
            rating: 5,
            brand: "brandA",
            category: "A"
        },
        {
            image: "https://cdn.pixabay.com/photo/2015/06/24/16/00/vintage-820336_960_720.jpg",
            item: "Vintage  retro camera",
            price: 150.99,
            discount: 15,
            review: 1270,
            rating: 5,
            brand: "brandB",
            category: "B"
        },
        {
            image: "https://cdn.pixabay.com/photo/2020/09/03/12/25/school-supplies-5541102_960_720.jpg",
            item: "Bag Pack",
            price: 115,
            review: 3277,
            rating: 3,
            brand: "brandC",
            category: "C"
        },
        {
            image: "https://cdn.pixabay.com/photo/2017/08/02/01/01/living-room-2569325_960_720.jpg",
            item: "Sofa",
            price: 125.99,
            discount: 35,
            review: 1257,
            rating: 4,
            brand: "brandD",
            category: "B"
        },
        {
            image: "https://cdn.pixabay.com/photo/2019/08/27/11/36/old-houses-4433982_960_720.jpg",
            item: "Retro clock",
            price: 330,
            discount: 15,
            review: 577,
            rating: 3,
            brand: "brandE",
            category: "D"
        },
        {
            image: "https://cdn.pixabay.com/photo/2017/10/31/07/49/horses-2904536_960_720.jpg",
            item: "Horses pair- painting",
            price: 125.99,
            discount: 5,
            review: 12577,
            rating: 4,
            brand: "brandF",
            category: "A"
        },
        {
            image: "https://cdn.pixabay.com/photo/2015/12/11/13/59/lights-1088141_960_720.jpg",
            item: "Lanterns",
            price: 1120,
            review: 2056,
            rating: 4,
            brand: "brandG",
            category: "B"
        }
    ];

    const [sortOrder, setSortOrder] = useState("");
    
    
    // Include all elements which includes the search query
    let updatedList = Data.filter((item) => {
        return item.item?.toLowerCase().indexOf(search?.toLowerCase()) !== -1;
    })
    if (brand?.length) {
        updatedList = updatedList.filter(item => {
            return brand.includes(item.brand)
        });
    }
    if (category?.length) {
        updatedList = updatedList.filter(item => {
            return category.includes(item.category)
        });
    }

  const handleSort = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOrder(event.target.value);
  };

  let sortedList = [...updatedList];

  if (sortOrder === "low-to-high") {
    sortedList.sort((a, b) => a.price - b.price);
  } else if (sortOrder === "high-to-low") {
    sortedList.sort((a, b) => b.price - a.price);
  }

  return (
    <div className="">
      <div className="flex items-center justify-between mb-4">
        <div className="flex font-bold">
          <p>Home</p>
          <p>&nbsp;&nbsp;/&nbsp;&nbsp;</p>
          <p>Home decoration</p>
          <p>&nbsp;&nbsp;/&nbsp;&nbsp;</p>
          <p>Artifical</p>
        </div>
        <div>
          <select
            className="px-1 py-1 border-solid rounded outline-none w-28 bg-slate-100 border-1 border-slaty-900 mr-14"
            value={sortOrder}
            onChange={handleSort}
          >
            <option value="">Sort by</option>
            <option value="low-to-high">Low to high</option>
            <option value="high-to-low">High to low</option>
          </select>
        </div>
      </div>
      <div className="flex gap-5" style={{ flexWrap: "wrap" }}>
        {sortedList.map((item, index) => {
          return <Cart key={index} item={item} />;
        })}
      </div>
    </div>
  );
}

export default Home;
