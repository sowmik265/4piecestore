import Filter from "@/components/Filter";
import ProductList from "@/components/ProductList";
import Image from "next/image";

const ListPage = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 relative">
      {/* CAMPAIGN */}
      <div className=" hidden bg-pink-50 p-4 sm:flex justify-between h-64">
        <div className=" w-2/3 flex flex-col justify-center items-center gap-8">
          <h1 className=" text-4xl font-semibold leading-[48px] text-gray-700">
            Grab upto 50% on <br /> selected products
          </h1>
          <button className=" rounded-3xl bg-colorA text-white w-max py-3 px-5 text-sm">
            Buy Now
          </button>
        </div>
        <div className=" relative w-1/3">
          <Image
            src="/woman.png"
            alt="campaign"
            fill
            className=" object-contain"
          ></Image>
        </div>
      </div>
      {/* FILTER */}
      <Filter></Filter>
      {/* PRODUCTS */}
      <h1 className=" mt-12 text-xl font-semibold">Shoes For You!</h1>
      <ProductList></ProductList>
    </div>
  );
};

export default ListPage;
