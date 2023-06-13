import React from "react";
import Image from "next/image";
import{AiFillHeart} from 'react-icons/ai'
function CardComponent() {
  return (
    <>
      <div className="grid place-items-center h-screen w-screen">
        <div className="h-[300px] w-[200px] border border-gray-600 bg-[#363739] rounded-md overflow-clip hover:scale-150  transition-transform duration-300">
          <div className="flex justify-center relative">
            <Image
              src="/Images/watch.jpg"
              alt="watch"
              height={100}
              width={200}
              className="h-[180px]"
            />
            <div className="absolute bg-[#808183] px-3 py-1 rounded-md left-1 top-1">
                <p className="text-[10px] text-white">Price Drop</p>
            </div>
            <div className="h-fit w-fit rounded-full absolute bottom-1 right-1 p-1 bg-[#808183] text-white active:text-red-600 active:bg-white"><AiFillHeart/></div>
          </div>
          <div className="px-3 text-white">
            <h1>Rolex Diamond Watch</h1>
            <p className="text-xs">41mm Mens Two Tone 18K and Stainless Steel Fully</p>
            <p className="text-sm">₹ 2.60 Lakh/ Piece</p>
            <p className="text-[10px]"><a href="#">Rolex.com</a></p>
            <p className="text-xs">Free Shipping</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardComponent;
