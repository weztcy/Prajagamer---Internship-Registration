import React from "react";
import Kantor from "../assets/Pictures/kantor.svg";

function Tentang() {
  return (
    <div className="py-10 px-4 md:px-10">
      {/* Tentang Mobile */}
      <div className="lg:hidden text-3xl md:text-5xl flex flex-col justify-between items-center mx-auto gap-10 md:gap-10">
        <div className="text-center">
          <div className="font-bold">Tentang Disdukcapil</div>
          <div className="text-[#D24545] font-bold">Kota Semarang</div>
        </div>

        <div className="w-full flex justify-center">
          <img
            src={Kantor}
            alt="Kantor Disdukcapil"
            className="w-[250px] md:w-[370px]"
          />
        </div>

        <div className="text-justify   text-lg md:text-2xl ">
          Dinas Kependudukan dan Pencatatan Sipil (Disdukcapil) Kota Semarang
          merupakan salah satu Organisasi Perangkat Daerah Kota Semarang yang
          bertanggung jawab melaksanakan urusan pemerintahan daerah terkait
          pelayanan administrasi kependudukan dan pencatatan sipil. Tugas pokok
          ini dilaksanakan berdasarkan prinsip otonomi daerah dan tugas
          pembantuan, memastikan pelayanan kepada masyarakat dalam hal
          administrasi kependudukan berjalan efektif dan sesuai ketentuan.
        </div>
      </div>

      {/* Tentang Desktop */}
      <div className="hidden lg:flex text-3xl md:text-5xl flex-col md:flex-row justify-between items-start mx-auto gap-10 md:gap-20">
        <div className="md:w-3/4">
          <div className="font-bold">Tentang Disdukcapil</div>
          <div className="text-[#D24545] font-bold">Kota Semarang</div>
          <div className="text-justify py-6 md:py-10 text-lg md:text-2xl">
            Dinas Kependudukan dan Pencatatan Sipil (Disdukcapil) Kota Semarang
            merupakan salah satu Organisasi Perangkat Daerah Kota Semarang yang
            bertanggung jawab melaksanakan urusan pemerintahan daerah terkait
            pelayanan administrasi kependudukan dan pencatatan sipil. Tugas
            pokok ini dilaksanakan berdasarkan prinsip otonomi daerah dan tugas
            pembantuan, memastikan pelayanan kepada masyarakat dalam hal
            administrasi kependudukan berjalan efektif dan sesuai ketentuan.
          </div>
        </div>
        <div className="w-full md:w-auto flex justify-center">
          <img src={Kantor} alt="" className="w-[250px] md:w-[370px]" />
        </div>
      </div>
    </div>
  );
}

export default Tentang;
