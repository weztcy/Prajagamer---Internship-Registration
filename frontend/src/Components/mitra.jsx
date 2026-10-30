import React from "react";
import Univ from "../assets/Pictures/univ.svg";

function mitra() {
  return (
    <div className="py-10">
      <div className="text-center text-xl md:text-3xl lg:text-5xl font-bold flex-col pb-10 px-5 ">
        Instansi Pendidikan ternama di indonesia telah berkejasama dengan{" "}
        <span className="text-[#D24545]">Disdukcapil Kota Semarang</span>{" "}
      </div>
      <div className="flex justify-center items-center h-full">
  <img
    src={Univ}
    alt=""
    className="max-w-full h-auto"
  />
</div>

    </div>
  );
}

export default mitra;
