import Image from "next/image";
import Link from "next/link";

const ProductList = () => {
  return (
    <div className=" mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
      {/* item-1 */}
      <Link
        href="/test"
        className=" w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className=" relative w-full h-80">
          <Image
            src="https://images.pexels.com/photos/2643698/pexels-photo-2643698.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            fill
            sizes="25vw"
            className=" absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          ></Image>
          <Image
            src="https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            fill
            sizes="25vw"
            className=" absolute object-cover rounded-md"
          ></Image>
        </div>
        <div className=" flex justify-between">
          <span className=" font-medium">Product Name</span>
          <span className=" font-semibold">$49</span>
        </div>
        <div className=" text-sm text-gray-500">
          Lorem ipsum dolor sit amet.
        </div>
        <button className=" rounded-2xl ring-1 ring-colorA text-colorA w-max py-2 px-4 text-xs hover:bg-colorA hover:text-white">
          Add to Cart
        </button>
      </Link>
      {/* item-2 */}
      <Link
        href="/test"
        className=" w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className=" relative w-full h-80">
          <Image
            src="https://images.pexels.com/photos/2643698/pexels-photo-2643698.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            fill
            sizes="25vw"
            className=" absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          ></Image>
          <Image
            src="https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            fill
            sizes="25vw"
            className=" absolute object-cover rounded-md"
          ></Image>
        </div>
        <div className=" flex justify-between">
          <span className=" font-medium">Product Name</span>
          <span className=" font-semibold">$49</span>
        </div>
        <div className=" text-sm text-gray-500">
          Lorem ipsum dolor sit amet.
        </div>
        <button className=" rounded-2xl ring-1 ring-colorA text-colorA w-max py-2 px-4 text-xs hover:bg-colorA hover:text-white">
          Add to Cart
        </button>
      </Link>
      {/* item-3 */}
      <Link
        href="/test"
        className=" w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className=" relative w-full h-80">
          <Image
            src="https://images.pexels.com/photos/2643698/pexels-photo-2643698.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            fill
            sizes="25vw"
            className=" absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          ></Image>
          <Image
            src="https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            fill
            sizes="25vw"
            className=" absolute object-cover rounded-md"
          ></Image>
        </div>
        <div className=" flex justify-between">
          <span className=" font-medium">Product Name</span>
          <span className=" font-semibold">$49</span>
        </div>
        <div className=" text-sm text-gray-500">
          Lorem ipsum dolor sit amet.
        </div>
        <button className=" rounded-2xl ring-1 ring-colorA text-colorA w-max py-2 px-4 text-xs hover:bg-colorA hover:text-white">
          Add to Cart
        </button>
      </Link>
      {/* item-4 */}
      <Link
        href="/test"
        className=" w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className=" relative w-full h-80">
          <Image
            src="https://images.pexels.com/photos/2643698/pexels-photo-2643698.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            fill
            sizes="25vw"
            className=" absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          ></Image>
          <Image
            src="https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            fill
            sizes="25vw"
            className=" absolute object-cover rounded-md"
          ></Image>
        </div>
        <div className=" flex justify-between">
          <span className=" font-medium">Product Name</span>
          <span className=" font-semibold">$49</span>
        </div>
        <div className=" text-sm text-gray-500">
          Lorem ipsum dolor sit amet.
        </div>
        <button className=" rounded-2xl ring-1 ring-colorA text-colorA w-max py-2 px-4 text-xs hover:bg-colorA hover:text-white">
          Add to Cart
        </button>
      </Link>
    </div>
  );
};

export default ProductList;
