import React, { useState } from "react";
import {
  PresentationChartBarIcon,
  UserIcon,
  InboxIcon,
  CircleStackIcon,
  ClipboardDocumentListIcon,
} from "@heroicons/react/24/outline";
import Piak from "../assets/Pictures/PIAK.svg";
import Pdip from "../assets/Pictures/PDIP.svg";
import Dafduk from "../assets/Pictures/DAFDUK.svg";
import Sekre from "../assets/Pictures/SEKRETARIAT.svg";
import Capil from "../assets/Pictures/CAPIL.svg";

const bidangIcons = {
  PIAK: <CircleStackIcon className="w-5 h-5 mr-2" />, // Pengelolaan Informasi Administrasi Kependudukan
  DAFDUK: <UserIcon className="w-5 h-5 mr-2" />, // Pelayanan Pendaftaran Penduduk
  SEKRETARIAT: <PresentationChartBarIcon className="w-5 h-5 mr-2" />, // Sekretariat
  CAPIL: <ClipboardDocumentListIcon className="w-5 h-5 mr-2" />, // Pencatatan Sipil
  PDIP: <InboxIcon className="w-5 h-5 mr-2" />, // Pemanfaatan Data dan Inovasi Pelayanan
};

const SidebarButton = ({ label, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center p-4 mb-2 w-full text-left rounded-lg ${
        isActive ? "bg-red-500 text-white" : "bg-[#f7f7f7] text-black"
      } hover:bg-red-300 transition`}
    >
      {/* Tampilkan ikon sesuai dengan bidang */}
      {bidangIcons[label] || bidangIcons["Lainnya"]}
      <span className="font-bold text-lg">{label}</span>
    </button>
  );
};

function Bidang() {
  const [activeBidang, setActiveBidang] = useState("PIAK");

  const renderContent = () => {
    switch (activeBidang) {
      case "PIAK":
        return (
          <div>
            <img
              src={Piak}
              alt="PIAK"
              className="w-full h-auto max-h-48 object-contain mb-6"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4">
                Deskripsi Pekerjaan PIAK
              </h2>
              <p className="text-gray-700 mb-6 text-justify">
                Bidang Pengelolaan Informasi Administrasi Kependudukan mempunyai
                tugas merencanakan, mengkoordinasikan, membina, mengawasi dan
                mengendalikan serta mengevaluasi Sistem Informasi Administrasi
                Kependudukan, Pengolahan dan Penyajian Data Kependudukan, dan
                Tata Kelola dan Sumber Daya Manusia Teknologi Informasi dan
                Komunikasi.
              </p>

              <h3 className="text-xl font-bold mb-4 text-justify">Fungsi</h3>
              <ul className="list-decimal list-inside text-gray-700 text-justify">
                <li>Perencanaan program, kegiatan dan anggaran;</li>
                <li>
                  Pelaksanaan manajemen kinerja pegawai dalam lingkup tanggung
                  jawabnya;
                </li>
                <li>
                  Pelaksanaan koordinasi dengan instansi dan pihak terkait;
                </li>
                <li>
                  Pelaksanaan kegiatan penyusunan kebijakan Bidang Pengelolaan
                  Informasi Administrasi Kependudukan;
                </li>
                <li>
                  Pelaksanaan kegiatan pengelolaan jaringan komunikasi data;
                </li>
                <li>
                  Pelaksanaan kegiatan pengelolaan dan pengembangan aplikasi
                  Sistem Informasi Administrasi Kependudukan;
                </li>
                <li>
                  Pelaksanaan kegiatan koordinasi dan pengawasan jaringan
                  komunikasi data administrasi kependudukan ke Provinsi, Pusat
                  dan pihak lain;
                </li>
                <li>
                  Pelaksanaan kegiatan pelaksanaan dan pengawasan jaringan dari
                  Dinas ke Tempat Perekaman Data Kependudukan Kecamatan;
                </li>
                <li>
                  Pelaksanaan kegiatan pelaksanaan pencadangan data, konsolidasi
                  dan pengamanan database Sistem Informasi Administrasi
                  Kependudukan;
                </li>
                <li>Pelaksanaan kegiatan pengelolaan dan penggunaan server;</li>
                <li>
                  Pelaksanaan kegiatan penyajian data kependudukan hasil
                  pendaftaran penduduk dan pencatatan sipil;
                </li>
                <li>Pelaksanaan kegiatan penyusunan profil kependudukan;</li>
                <li>
                  Pelaksanaan kegiatan pengecekan, penghapusan, pengaktifan data
                  hasil pendaftaran penduduk dan pencatatan sipil;
                </li>
                <li>
                  Pelaksanaan kegiatan sinkronisasi data dengan Pemerintah Pusat
                  dan Provinsi;
                </li>
                <li>Pelaksanaan kegiatan digitalisasi arsip kependudukan;</li>
                <li>
                  Pelaksanaan bahan analisa kebutuhan pelatihan di bidang
                  teknologi dan Informasi Administrasi Kependudukan;
                </li>
                <li>
                  Pelaksanaan kegiatan bimbingan teknis berbasis teknologi
                  informasi bagi tenaga teknis;
                </li>
                <li>
                  Pelaksanaan prasarana dan sarana pelatihan teknologi Informasi
                  Administrasi Kependudukan;
                </li>
                <li>
                  Pelaksanaan kegiatan penyusunan data dan informasi Bidang
                  Pengelolaan Informasi Administrasi Kependudukan;
                </li>
                <li>
                  Pelaksanaan kegiatan pengelolaan dan pertanggungjawaban
                  keuangan Bidang Pengelolaan Informasi Administrasi
                  Kependudukan;
                </li>
                <li>
                  Pelaksanaan monitoring dan evaluasi serta penyusunan laporan
                  program dan kegiatan; dan
                </li>
                <li>
                  Pelaksanaan tugas kedinasan lain yang diberikan oleh pimpinan
                  sesuai tugas dan fungsinya.
                </li>
              </ul>
            </div>
          </div>
        );
      case "DAFDUK":
        return (
          <div>
            <img
              src={Dafduk}
              alt="DAFDUK"
              className="w-full h-auto max-h-48 object-contain mb-6"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4">
                Deskripsi Pekerjaan DAFDUK
              </h2>
              <p className="text-gray-700 mb-6 text-justify">
                Bidang Pelayanan Pendaftaran Penduduk mempunyai tugas
                merencanakan, mengkoordinasikan, membina, mengawasi dan
                mengendalikan serta mengevaluasi tugas pelayanan identitas
                penduduk, pelayanan pindah datang penduduk, dan pelayanan
                pendataan penduduk.
              </p>
              <h3 className="text-2xl font-bold mb-4">Fungsi</h3>
              <ul className="list-decimal list-inside text-gray-700 text-justify">
                <li>Perencanaan program, kegiatan, dan anggaran;</li>
                <li>
                  Pelaksanaan manajemen kinerja pegawai dalam lingkup tanggung
                  jawabnya;
                </li>
                <li>
                  Pelaksanaan koordinasi dengan instansi dan pihak terkait;
                </li>
                <li>
                  Pelaksanaan kegiatan penyusunan kebijakan Bidang Pelayanan
                  Pendaftaran Penduduk;
                </li>
                <li>
                  Pelaksanaan kegiatan verifikasi dan validasi isian formulir
                  biodata penduduk dan kelengkapan berkas pendaftaran biodata
                  penduduk;
                </li>
                <li>
                  Pelaksanaan kegiatan penerbitan Surat Keterangan Kependudukan;
                </li>
                <li>
                  Pelaksanaan kegiatan perekaman biodata penduduk yang telah
                  diisi ke dalam komputer dan mengirimkan melalui jaringan
                  komunikasi data ke bank data kependudukan;
                </li>
                <li>
                  Pelaksanaan kegiatan pencetakan hasil perekaman biodata
                  penduduk;
                </li>
                <li>
                  Pelaksanaan kegiatan pelaksanaan pelayanan penerbitan dokumen
                  kependudukan yang meliputi Biodata Penduduk, Kartu Keluarga,
                  dan Kartu Tanda Penduduk Elektronik;
                </li>
                <li>
                  Pelaksanaan kegiatan pencatatan dalam Buku Harian Peristiwa
                  Kependudukan dan Peristiwa Penting kependudukan;
                </li>
                <li>
                  Pelaksanaan kegiatan pendokumentasian isian formulir biodata
                  penduduk dan hasil pelayanan pendaftaran identitas penduduk;
                </li>
                <li>
                  Pelaksanaan kegiatan verifikasi dan validasi atas persyaratan
                  kepindahan dan kedatangan penduduk;
                </li>
                <li>
                  Pelaksanaan kegiatan penerbitan surat keterangan kependudukan;
                </li>
                <li>
                  Pelaksanaan kegiatan pencatatan dalam Buku Induk Penduduk dan
                  Buku Mutasi Penduduk;
                </li>
                <li>
                  Pelaksanaan kegiatan pelaksanaan proses pengisian dan
                  penandatanganan Surat Keterangan Pindah Datang Penduduk;
                </li>
                <li>
                  Pelaksanaan kegiatan pelaksanaan pendokumentasian hasil
                  pelayanan pendaftaran pindah datang penduduk;
                </li>
                <li>
                  Pelaksanaan kegiatan verifikasi dan validasi penduduk non
                  permanen dan penduduk rentan;
                </li>
                <li>
                  Pelaksanaan kegiatan verifikasi dan validasi atas persyaratan
                  pelayanan penduduk non permanen dan penduduk rentan;
                </li>
                <li>
                  Pelaksanaan kegiatan permohonan penduduk non permanen dan
                  penduduk rentan;
                </li>
                <li>
                  Pelaksanaan kegiatan permohonan Surat Keterangan Tempat
                  Tinggal untuk Warga Negara Asing;
                </li>
                <li>
                  Pelaksanaan kegiatan penerbitan Surat Keterangan penduduk non
                  permanen dan Surat Keterangan Orang Terlantar untuk Warga
                  Negara Indonesia;
                </li>
                <li>
                  Pelaksanaan kegiatan penerbitan Surat Keterangan Tempat
                  Tinggal untuk Warga Negara Asing;
                </li>
                <li>
                  Pelaksanaan kegiatan penyusunan data dan informasi di Bidang
                  Pelayanan Pendaftaran Penduduk;
                </li>
                <li>
                  Pelaksanaan kegiatan pengelolaan dan pertanggungjawaban
                  keuangan di Bidang Pelayanan Pendaftaran Penduduk;
                </li>
                <li>
                  Pelaksanaan monitoring dan evaluasi serta penyusunan laporan
                  program dan kegiatan; dan
                </li>
                <li>
                  Pelaksanaan tugas kedinasan lain yang diberikan oleh pimpinan
                  sesuai tugas dan fungsinya.
                </li>
              </ul>
            </div>
          </div>
        );
      case "SEKRETARIAT":
        return (
          <div>
            <img
              src={Sekre}
              alt="SEKRETARIAT"
              className="w-full h-auto max-h-48 object-contain mb-6"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4">
                Deskripsi Pekerjaan SEKRETARIAT
              </h2>
              <p className="text-gray-700 mb-6 text-justify">
                Sekretaris mempunyai tugas merencanakan, mengkoordinasikan dan
                mensinkronisasikan, membina, mengawasi dan mengendalikan serta
                mengevaluasi pelaksanaan tugas Kesekretariatan, Bidang Pelayanan
                Pendaftaran Penduduk, Bidang Pelayanan Pencatatan Sipil, Bidang
                Pengelolaan Informasi Administrasi Kependudukan, dan Bidang
                Pemanfaatan Data dan Inovasi Pelayanan dan UPTD.
              </p>

              <h3 className="text-2xl font-bold mb-4">Fungsi</h3>
              <ul className="list-decimal list-inside text-gray-700 text-justify">
                <li>Perencanaan program, kegiatan, dan anggaran;</li>
                <li>
                  Pelaksanaan manajemen kinerja pegawai dalam lingkup tanggung
                  jawabnya;
                </li>
                <li>
                  Pengkoordinasian, sinkronisasi, pembinaan, pengawasan,
                  pengendalian, dan evaluasi tugas-tugas kesekretariatan, Bidang
                  Pelayanan Pendaftaran Penduduk, Bidang Pelayanan Pencatatan
                  Sipil, Bidang Pengelolaan Informasi Administrasi Kependudukan,
                  dan Bidang Pemanfaatan Data dan Inovasi Pelayanan dan UPTD;
                </li>
                <li>
                  Pelaksanaan fasilitasi tugas-tugas Bidang Pelayanan
                  Pendaftaran Penduduk, Bidang Pelayanan Pencatatan Sipil,
                  Bidang Pengelolaan Informasi Administrasi Kependudukan, dan
                  Bidang Pemanfaatan Data dan Inovasi Pelayanan dan UPTD;
                </li>
                <li>
                  Pelaksanaan koordinasi dengan instansi dan pihak terkait;
                </li>
                <li>
                  Pelaksanaan kegiatan penyusunan kebijakan Kesekretariatan
                  Dinas;
                </li>
                <li>
                  Pelaksanaan kegiatan Penyusunan Rencana Strategis dan Rencana
                  Kinerja Tahunan, pengelolaan Proses Bisnis dan Standar
                  Operasional Prosedur, serta Sistem Pengendalian Intern
                  Pemerintah dan Manajemen Risiko Dinas;
                </li>
                <li>
                  Pelaksanaan koordinasi dan verifikasi penyusunan Rencana Kerja
                  dan Anggaran serta Dokumen Pelaksanaan Anggaran Dinas;
                </li>
                <li>Pelaksanaan kegiatan evaluasi kinerja Dinas;</li>
                <li>
                  Pelaksanaan kegiatan penyusunan bahan Laporan Keterangan
                  Pertanggungjawaban Walikota, Laporan Penyelenggaraan
                  Pemerintah Daerah, dan Sistem Akuntabilitas Kinerja Instansi
                  Pemerintah Dinas;
                </li>
                <li>
                  Pelaksanaan kegiatan pengelolaan dan penatausahaan keuangan
                  Dinas;
                </li>
                <li>
                  Pelaksanaan kegiatan penatausahaan aset dan barang milik
                  daerah Dinas;
                </li>
                <li>
                  Pelaksanaan pengelolaan gaji dan tunjangan di lingkungan
                  Dinas;
                </li>
                <li>
                  Pelaksanaan fasilitasi pengelolaan dan penyiapan bahan
                  tanggapan pemeriksaan/pengawasan;
                </li>
                <li>
                  Pelaksanaan kegiatan pengadaan, pemeliharaan, dan perbaikan
                  barang milik daerah Dinas;
                </li>
                <li>
                  Pelaksanaan kegiatan fasilitasi Reformasi Birokrasi,
                  pembangunan Zona Integritas, dan Manajemen Perubahan serta
                  pengembangan inovasi Dinas;
                </li>
                <li>
                  Pelaksanaan kegiatan fasilitasi kelembagaan, analisis
                  kebijakan dan pemecahan masalah, penjaminan mutu, serta
                  manajemen sumber daya Dinas;
                </li>
                <li>
                  Pelaksanaan kegiatan tata kelola persuratan, tata naskah
                  dinas, kearsipan, kepustakaan, dokumentasi, keprotokolan, dan
                  kehumasan Dinas;
                </li>
                <li>
                  Pelaksanaan kegiatan penyediaan jasa komunikasi, sumber daya
                  air, dan listrik Dinas;
                </li>
                <li>
                  Pelaksanaan kegiatan penyediaan akomodasi dan jamuan
                  rapat/pertemuan, dan kunjungan tamu di lingkungan Dinas;
                </li>
                <li>
                  Pelaksanaan kegiatan pengelolaan perencanaan dan administrasi
                  kepegawaian, pendidikan dan pelatihan, sosialisasi, dan
                  bimbingan teknis implementasi peraturan perundang-undangan di
                  lingkungan Dinas;
                </li>
                <li>
                  Pelaksanaan kegiatan pengelolaan sistem informasi dan
                  komunikasi Dinas;
                </li>
                <li>
                  Pelaksanaan kegiatan fasilitasi perancangan produk hukum
                  Dinas;
                </li>
                <li>
                  Pelaksanaan kegiatan penyusunan dan pelayanan data dan
                  informasi Dinas;
                </li>
                <li>
                  Pelaksanaan monitoring dan evaluasi serta penyusunan laporan
                  program dan kegiatan;
                </li>
                <li>
                  Pelaksanaan fungsi lain yang diberikan oleh pimpinan sesuai
                  tugas dan fungsinya.
                </li>
              </ul>
            </div>
          </div>
        );
      case "CAPIL":
        return (
          <div>
            <img
              src={Capil}
              alt="CAPIL"
              className="w-full h-auto max-h-48 object-contain mb-6"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4">
                Deskripsi Pekerjaan Pencatatan Sipil
              </h2>
              <p className="text-gray-700 mb-6 text-justify">
                Bidang Pelayanan Pencatatan Sipil mempunyai tugas merencanakan,
                mengkoordinasikan, membina, mengawasi dan mengendalikan serta
                mengevaluasi Administrasi Kelahiran, Administrasi Perkawinan dan
                Perceraian, dan Administrasi Perubahan Status Anak,
                Pewarganegaraan dan Kematian.
              </p>

              <h3 className="text-2xl font-bold mb-4">Fungsi</h3>
              <ul className="list-decimal list-inside text-gray-700 text-justify">
                <li>Perencanaan program, kegiatan, dan anggaran;</li>
                <li>
                  Pelaksanaan manajemen kinerja pegawai dalam lingkup tanggung
                  jawabnya;
                </li>
                <li>
                  Pelaksanaan koordinasi dengan instansi dan pihak terkait;
                </li>
                <li>
                  Pelaksanaan kegiatan penyusunan kebijakan Bidang Pelayanan
                  Pencatatan Sipil;
                </li>
                <li>
                  Pelaksanaan kegiatan verifikasi dan validasi terhadap
                  pelaporan kelahiran;
                </li>
                <li>
                  Pelaksanaan kegiatan perekaman data berdasarkan pelaporan
                  kelahiran;
                </li>
                <li>
                  Pelaksanaan kegiatan proses pencatatan, penerbitan, dan
                  penandatanganan Register Akta Kelahiran, Kutipan Akta
                  Kelahiran, dan Kutipan Kedua atau Salinan Akta Kelahiran;
                </li>
                <li>
                  Pelaksanaan kegiatan penyerahan Kutipan Akta Kelahiran dan
                  Kutipan Kedua atau Salinan Akta Kelahiran;
                </li>
                <li>
                  Pelaksanaan kegiatan penerbitan Tanda Bukti Pelaporan
                  Kelahiran yang terjadi di Luar Negeri;
                </li>
                <li>
                  Pelaksanaan kegiatan pendokumentasian hasil pelayanan
                  pendaftaran dan pencatatan kelahiran;
                </li>
                <li>
                  Pelaksanaan kegiatan verifikasi dan validasi terhadap
                  pelaporan perkawinan dan perceraian;
                </li>
                <li>
                  Pelaksanaan kegiatan perekaman data berdasarkan pelaporan
                  perkawinan dan perceraian;
                </li>
                <li>
                  Pelaksanaan kegiatan proses pencatatan, penerbitan, dan
                  penandatanganan Register Akta Perkawinan dan Perceraian,
                  Kutipan Akta Perkawinan dan Perceraian, Kutipan Kedua atau
                  Salinan Akta Perkawinan dan Perceraian;
                </li>
                <li>
                  Pelaksanaan kegiatan penyerahan Kutipan Akta Perkawinan dan
                  Perceraian, Kutipan Kedua atau Salinan Akta Perkawinan dan
                  Perceraian;
                </li>
                <li>
                  Pelaksanaan kegiatan penerbitan Tanda Bukti Pelaporan
                  Perkawinan dan Perceraian yang terjadi di Luar Negeri;
                </li>
                <li>
                  Pelaksanaan kegiatan pendokumentasian hasil pelayanan
                  Pencatatan perkawinan dan perceraian;
                </li>
                <li>
                  Pelaksanaan kegiatan verifikasi dan validasi terhadap
                  pelaporan Perubahan Status Anak, Pewarganegaraan, dan
                  Kematian;
                </li>
                <li>
                  Pelaksanaan kegiatan perekaman data berdasarkan pelaporan
                  Perubahan Status Anak, Pewarganegaraan, dan Kematian;
                </li>
                <li>
                  Pelaksanaan kegiatan proses pencatatan pinggir Perubahan
                  Status Anak, Pewarganegaraan pada Register Akta-akta Catatan
                  Sipil dan penandatanganan Register, Kutipan atau Kutipan Kedua
                  atau Salinan Akta Kematian;
                </li>
                <li>
                  Pelaksanaan kegiatan penyerahan Pencatatan Pinggir Akta
                  Catatan Sipil;
                </li>
                <li>
                  Pelaksanaan kegiatan pendokumentasian hasil pelayanan
                  Pencatatan Perubahan Status Anak, Pewarganegaraan, dan Akta
                  Kematian dan Tanda Bukti Pelaporan Kematian di Luar Negeri;
                </li>
                <li>
                  Pelaksanaan kegiatan penerbitan Tanda Bukti Pelaporan Kematian
                  di Luar Negeri;
                </li>
                <li>
                  Pelaksanaan kegiatan penyusunan data dan informasi Bidang
                  Pelayanan Pencatatan Sipil;
                </li>
                <li>
                  Pelaksanaan kegiatan pengelolaan dan pertanggungjawaban
                  keuangan Bidang Pelayanan Pencatatan Sipil;
                </li>
                <li>
                  Pelaksanaan monitoring dan evaluasi serta penyusunan laporan
                  program dan kegiatan; dan
                </li>
                <li>
                  Pelaksanaan tugas kedinasan lain yang diberikan oleh pimpinan
                  sesuai tugas dan fungsinya.
                </li>
              </ul>
            </div>
          </div>
        );
      case "PDIP":
        return (
          <div>
            <img
              src={Pdip}
              alt="PDIP"
              className="w-full h-auto max-h-48 object-contain mb-6"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4 text-justify">
                Deskripsi Pekerjaan PDIP
              </h2>
              <p className="text-gray-700 mb-6">
                Bidang Pemanfaatan Data dan Inovasi Pelayanan mempunyai tugas
                merencanakan, mengkoordinasikan, membina, mengawasi dan
                mengendalikan serta mengevaluasi Kerjasama, Pemanfaatan Data dan
                Dokumen Kependudukan, dan Inovasi Pelayanan.
              </p>

              <h3 className="text-2xl font-bold mb-4 text-justify">Fungsi</h3>
              <ul className="list-decimal list-inside text-gray-700 text-justify">
                <li>Perencanaan program, kegiatan dan anggaran;</li>
                <li>
                  Pelaksanaan manajemen kinerja pegawai dalam lingkup tanggung
                  jawabnya;
                </li>
                <li>
                  Pelaksanaan koordinasi dengan instansi dan pihak terkait;
                </li>
                <li>
                  Pelaksanaan kegiatan penyusunan kebijakan Bidang Pemanfaatan
                  Data dan Inovasi Pelayanan;
                </li>
                <li>
                  Pelaksanaan kegiatan penyusunan tata cara kerjasama
                  kependudukan dengan institusi lain;
                </li>
                <li>
                  Pelaksanaan kegiatan pelaksanaan pembinaan dan penyuluhan
                  administrasi kependudukan dan pencatatan sipil;
                </li>
                <li>
                  Pelaksanaan kegiatan pelaksanaan penegakan hukum terhadap
                  pelanggaran administrasi kependudukan dan pencatatan sipil
                  bekerjasama dengan instansi terkait;
                </li>
                <li>
                  Pelaksanaan kegiatan kerjasama antar daerah dalam pelaksanaan
                  administrasi kependudukan;
                </li>
                <li>
                  Pelaksanaan kegiatan penyusunan tata cara pemanfaatan data
                  kependudukan dengan institusi lain;
                </li>
                <li>
                  Pelaksanaan kegiatan data kependudukan yang akan dimanfaatkan
                  institusi lain;
                </li>
                <li>
                  Pelaksanaan kegiatan pelayanan data kependudukan melalui
                  teknologi informasi;
                </li>
                <li>
                  Pelaksanaan kegiatan penginformasian data kependudukan melalui
                  teknologi informasi dan media lainnya;
                </li>
                <li>
                  Pelaksanaan kegiatan pengesahan dokumen kependudukan
                  berdasarkan database kependudukan;
                </li>
                <li>
                  Pelaksanaan kegiatan penyusunan kajian pengembangan dan
                  inovasi pelayanan administrasi kependudukan dan pencatatan
                  sipil;
                </li>
                <li>
                  Pelaksanaan kegiatan penyusunan rencana perubahan pelayanan
                  administrasi kependudukan dan pencatatan sipil;
                </li>
                <li>
                  Pelaksanaan kegiatan penyusunan rencana perubahan prasarana
                  dan sarana pelayanan administrasi kependudukan dan pencatatan
                  sipil;
                </li>
                <li>
                  Pelaksanaan kegiatan penyusunan rencana perubahan penyusunan
                  kebijakan pelayanan administrasi kependudukan dan pencatatan
                  sipil;
                </li>
                <li>
                  Pelaksanaan kegiatan penyusunan data dan informasi Bidang
                  Pendayagunaan Infrastruktur;
                </li>
                <li>
                  Pelaksanaan kegiatan pengelolaan dan pertanggungjawaban
                  keuangan di Bidang Pemanfaatan Data dan Inovasi Pelayanan;
                </li>
                <li>
                  Pelaksanaan monitoring dan evaluasi serta penyusunan laporan
                  program dan kegiatan; dan
                </li>
                <li>
                  Pelaksanaan tugas kedinasan lain yang diberikan oleh pimpinan
                  sesuai tugas dan fungsinya.
                </li>
              </ul>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex justify-center bg-gray-100 py-10">
      <div className="flex flex-col gap-10 md:flex-row md:space-x-6 max-w-6xl w-full mx-5 md:mx-5">
        <div className="h-fit  bg-white p-4 shadow-lg rounded-lg md:w-1/3 lg:w-1/4 ">
          <SidebarButton
            label="PIAK"
            isActive={activeBidang === "PIAK"}
            onClick={() => setActiveBidang("PIAK")}
          />
          <SidebarButton
            label="DAFDUK"
            isActive={activeBidang === "DAFDUK"}
            onClick={() => setActiveBidang("DAFDUK")}
          />
          <SidebarButton
            label="SEKRETARIAT"
            isActive={activeBidang === "SEKRETARIAT"}
            onClick={() => setActiveBidang("SEKRETARIAT")}
          />
          <SidebarButton
            label="CAPIL"
            isActive={activeBidang === "CAPIL"}
            onClick={() => setActiveBidang("CAPIL")}
          />
          <SidebarButton
            label="PDIP"
            isActive={activeBidang === "PDIP"}
            onClick={() => setActiveBidang("PDIP")}
          />
        </div>
        <div className="bg-white p-6 shadow-lg rounded-lg lg:w-3/4 ">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}

export default Bidang;
