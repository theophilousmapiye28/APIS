import React from "react";
import Link from "next/link";
import Image from "next/image";


const Header = () => {
  return (
    <div className=" flex  py-3 px-5 md:px-6 lg:px-10  text-white bg-blue">
 <a href=""></a>
      <button className="flex place-self-center bg-aqua  rounded-xl h-5 w-12 g-gradient-to-r from-green to-orange"></button>
       <div className=" flex items-center hidden md:flex md:space-x-7 pl-10 font-semibold">
        <Link href="/">Home</Link>
        <Link href="/portfolio">Trending</Link>
        <Link href="/aboutUs">Tv</Link>
        <Link href="/news">News</Link>
      </div>

    <div className="flex self-end pl-[590px] hidden md:flex md:space-x-7 ">
      
             <a href="" className="w-5 place-self-center "><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 20 20"><path fill="currentColor" d="M17 7v3h-5v5H9v-5H4V7h5V2h3v5z"/></svg></a>
       <button className="flex items-center border border-solid border-white border-md  rounded-sm">EN</button>
           <a href="" className="h-4 place-self-center text-white"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 50 50"><path fill="currentColor" d="M42 36c-6.5 0-7.4-6.3-8.2-11.9C32.9 17.9 32.1 12 25 12s-7.9 5.9-8.8 12.1C15.4 29.7 14.5 36 8 36v-2c4.6 0 5.3-3.9 6.2-10.1S16.2 10 25 10s9.9 7.7 10.8 13.9S37.4 34 42 34z"/><path fill="currentColor" d="M25 40c-2.8 0-5-2.2-5-5h2c0 1.7 1.3 3 3 3s3-1.3 3-3h2c0 2.8-2.2 5-5 5"/><path fill="currentColor" d="M8 34h34v2H8zm19-24c0 1.1-.9 1.5-2 1.5s-2-.4-2-1.5s.9-2 2-2s2 .9 2 2"/></svg></a>
<a href=""><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M10 18a7.95 7.95 0 0 0 4.897-1.688l4.396 4.396l1.414-1.414l-4.396-4.396A7.95 7.95 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8s3.589 8 8 8m0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6s-6-2.691-6-6s2.691-6 6-6"/></svg></a>

</div>
      
 </div>
  );
};

export default Header;
