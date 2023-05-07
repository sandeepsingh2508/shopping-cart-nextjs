import Image from "next/image";
import { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

const Cart = ({ item }: { item: any }) => {
  const [like, setLike] = useState(false);
  const img = "https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014__340.jpg";
  // let disc:Number

  let disc = +((item?.price * item?.discount) / 100).toFixed(2);

  return (
    <div className="w-64 mb-3 bg-white rounded-md drop-shadow-lg">
      <div className="relative">
        {!like ? <AiOutlineHeart size={20} className="absolute cursor-pointer right-3 top-3 text-slate-500" onClick={() => setLike(!like)} /> : <AiFillHeart color="#fff" size={20} className="absolute cursor-pointer right-3 top-3 text-slate-500" onClick={() => setLike(!like)} />}
        <Image src={item?.image} alt="Picture or bag" width={256} height={200} className="rounded-md " />
      </div>
      <div className="pt-4 pb-4 pl-4">
        <p className="mb-1 font-semibold">{item?.item}</p>
        <p className="mb-1 text-xs font-bold text-slate-600">Decoration</p>
        <p className="flex items-center">****&nbsp; ({item?.review})</p>
        <p className="text-2xl font-medium">${item?.price} &nbsp;
          {item?.discount ? <><span className="text-base line-through">${disc}</span>
            <span className="text-base text-emerald-500"> &nbsp;{item?.discount}% off</span></> : ""}</p>
      </div>
    </div>
  )
}

export default Cart;