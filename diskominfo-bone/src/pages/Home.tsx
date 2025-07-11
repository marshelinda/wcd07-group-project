import { useState, useEffect, useRef, type RefObject } from "react";
import {
  MagnifyingGlassIcon,
  ArrowTopRightOnSquareIcon,
  TrophyIcon,
  TruckIcon,
  BuildingOfficeIcon,
  TagIcon,
  CurrencyDollarIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/outline";
import {
  FaceSmileIcon,
  MegaphoneIcon,
  UserGroupIcon,
  ClockIcon,
  BriefcaseIcon,
  AcademicCapIcon,
}
 from "@heroicons/react/24/solid";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  const images = [
    "/images/banners/tarian.webp",
    "/images/banners/tradisi.webp",
    "/images/banners/pertunjukan.webp",
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const berandaRef = useRef<HTMLDivElement>(null);
  const profilRef = useRef<HTMLElement>(null);
  const beritaRef = useRef<HTMLElement>(null);
  const layananRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    try {
      localStorage.setItem('hasVisitedHome', 'true');
      console.log('Status kunjungan Home disimpan di Local Storage.');

      const lastVisit = localStorage.getItem('lastHomeVisit');
      if (lastVisit) {
        console.log('Terakhir mengunjungi Home pada:', new Date(parseInt(lastVisit)).toLocaleString());
      }
      localStorage.setItem('lastHomeVisit', Date.now().toString());

    } catch (error) {
      console.error('Gagal mengakses Local Storage:', error);
    }
  }, []); 
  const scrollToSection = (ref: RefObject<HTMLElement | null>) => {
    if (ref.current) {
      const navbarElement = document.querySelector('.navbar') as HTMLElement | null;
      const navbarHeight = navbarElement ? navbarElement.offsetHeight : 0;
      
      window.scrollTo({
        top: ref.current.offsetTop - navbarHeight, // Kurangi tinggi navbar
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="bg-[#0d2a2a] min-h-screen text-white font-sans relative">
      <div className="h-[740px] absolute w-full top-0 left-0">
        <div
          className="w-full h-full absolute top-0"
          style={{
            background:
              "radial-gradient(100% 820.78% at 0% 0%, rgba(0, 40, 19, 0.9) 0%, rgba(0, 32, 39, 0.7) 61.62%)",
          }}
        ></div>
        <div className="w-full h-full overflow-hidden relative">
          <img
            src={images[currentImageIndex]}
            alt="Carousel background"
            className="object-cover object-center w-full h-full xl:object-top"
          />
          <div
            className="w-full h-full absolute top-0"
            style={{
              background:
                "radial-gradient(100% 820.78% at 0% 0%, rgba(0, 40, 19, 0.9) 0%, rgba(0, 32, 39, 0.7) 61.62%)",
            }}
          ></div>
        </div>
      </div>

      <div className="relative z-10">
        <Navbar
          scrollToBeranda={() => scrollToSection(berandaRef)}
          scrollToProfil={() => scrollToSection(profilRef)}
          scrollToBerita={() => scrollToSection(beritaRef)}
          scrollToLayanan={() => scrollToSection(layananRef)}
        />

        <section id="beranda" ref={berandaRef}>
          <div className="relative flex flex-col items-center justify-center h-screen overflow-hidden pt-12 lg:pt-20">
            <div className="relative z-10 text-center px-4">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                MENJAWAB KEBUTUHAN INFORMASI
                <br />
                PUBLIK WARGA KABUPATEN BONE
              </h1>
              <p className="text-gray-300 font-medium leading-relaxed text-center max-w-xl lg:max-w-2xl mb-4 md:mb-7 text-sm md:text-base mx-auto">
                Temukan informasi publik terkini dari Pemerintah Daerah Kabupaten
                Bone
              </p>

              <div className="relative flex items-center max-w-2xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden h-14">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <MagnifyingGlassIcon className="h-6 w-6 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Pajak"
                  className="flex-grow pl-12 pr-4 text-gray-800 focus:outline-none h-full"
                />
                <button className="bg-[#1DB954] text-white px-4 h-[calc(100%-16px)] my-2 mr-2 font-bold hover:bg-green-600 focus:outline-none rounded-lg ml-auto">
                  Cari
                </button>
              </div>
            </div>
          </div>
        </section>

        <div className="bg-gray-50 py-16">
          <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

              <section id="profil" ref={profilRef}>
                <div className="mb-16">
                  <div className="bg-white rounded-2xl shadow-xl p-8 border-t-4 border-blue-600">
                    <div className="text-center mb-8">
                      <h1 className="text-4xl font-bold text-gray-900 mb-2">
                        Kabupaten Bone
                      </h1>
                      <p className="text-xl text-gray-600">Sulawesi Selatan, Indonesia</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                      <div className="text-center bg-blue-50 rounded-xl p-6 hover:shadow-lg transition-all">
                        <div className="text-5xl font-bold text-blue-600 mb-3">
                          717,268
                        </div>
                        <div className="text-gray-700 font-medium">Jumlah Penduduk</div>
                      </div>

                      <div className="text-center bg-green-50 rounded-xl p-6 hover:shadow-lg transition-all">
                        <div className="text-5xl font-bold text-green-600 mb-3">
                          27
                        </div>
                        <div className="text-gray-700 font-medium">Kecamatan</div>
                      </div>

                      <div className="text-center bg-purple-50 rounded-xl p-6 hover:shadow-lg transition-all">
                        <div className="text-5xl font-bold text-purple-600 mb-3">
                          372
                        </div>
                        <div className="text-gray-700 font-medium">Desa/Kelurahan</div>
                      </div>

                      <div className="text-center bg-red-50 rounded-xl p-6 hover:shadow-lg transition-all">
                        <div className="text-5xl font-bold text-red-600 mb-3">
                          4,559
                        </div>
                        <div className="text-gray-700 font-medium">Luas Wilayah (km²)</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-16">
                  <div className="mb-12">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Deskripsi Daerah & Wilayah</h2>
                    <p className="text-xl text-gray-600">Informasi lengkap tentang Kabupaten Bone</p>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="bg-white p-8 rounded-2xl shadow-lg">
                      <h2 className="text-3xl font-bold text-gray-900 mb-6">Deskripsi Daerah</h2>
                      <p className="text-gray-700 leading-relaxed">
                        Kabupaten Bone adalah salah satu Daerah otonom di provinsi Sulawesi Selatan, Indonesia. Ibu kota kabupaten ini terletak di Watampone. Kabupaten ini memiliki luas wilayah 4.559 km² dan berpenduduk sebanyak kurang lebih 717,268 jiwa (2010).
                      </p>
                    </div>

                    <div className="bg-white p-8 rounded-2xl shadow-lg">
                      <h2 className="text-3xl font-bold text-gray-900 mb-6">Wilayah</h2>
                      <p className="text-gray-700 mb-4 leading-relaxed">
                        Kabupaten Bone sebagai salah satu daerah yang berada di pesisir timur Sulawesi Selatan memiliki posisi strategis dalam perdagangan barang dan jasa di Kawasan Timur Indonesia.
                      </p>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h3 className="font-bold text-gray-900 mb-3">Rincian Luas Lahan:</h3>
                        <div className="grid grid-cols-2 gap-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-gray-600">Persawahan:</span>
                            <span className="font-medium text-green-700">88.449 Ha</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Tegalan/Ladang:</span>
                            <span className="font-medium text-green-700">120.524 Ha</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Sawah:</span>
                            <span className="font-medium text-green-700">88.449 Ha</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Tegalan/Ladang:</span>
                            <span className="font-medium text-green-700">120.524 Ha</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-16">
                  <div className="mb-12">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Visi Misi</h2>
                  </div>

                  <div className="bg-white p-8 rounded-2xl shadow-lg">
                    <div className="mb-8">
                      <h3 className="text-2xl font-bold text-blue-900 mb-4 flex items-center">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                          <span className="text-blue-600 font-bold">V</span>
                        </div>
                        Visi
                      </h3>
                      <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500">
                        <p className="text-lg text-gray-800 font-medium italic">
                          "TERWUJUDNYA MASYARAKAT KABUPATEN BONE YANG MAJU, MANDIRI, DEMOKRATIS DAN BERADAB"
                        </p>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-green-900 mb-4 flex items-center">
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                          <span className="text-green-600 font-bold">M</span>
                        </div>
                        Misi Pembangunan Kabupaten Bone
                      </h3>
                      <p className="text-gray-700 mb-6">
                        Untuk mewujudkan Visi Daerah ke depan dengan ciri kondisi, kehidupan yang diinginkan, ditetapkan Misi sebagai berikut:
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                          "Pengamalan Pancasila secara konsisten yang dijiwai nilai-nilai moral dan etika agama dalam masyarakat, berbangsa dan beragama.",
                          "Penguatan daya saing dan peningkatan kualitas produk unggulan daerah untuk mengurangi ketergantungan dalam upaya pembangunan daerah.",
                          "Mendorong dan mengembangkan kehidupan dan mekanisme politik daerah yang sehat didukung partisipasi aktif seluruh masyarakat dan lembaga-lembaga swadaya masyarakat.",
                          "Penguatan kelembagaan dan mengembangkan hubungan lembaga legislatif dan eksekutif yang efektif dan fungsional.",
                          "Mengupayakan peningkatan pendapatan rata-rata masyarakat dan penduduk diatas tingkat pemenuhan kebutuhan dasar manusia.",
                          "Melaksanakan ketertiban guna terciptanya kondisi yang kondusif bagi pengembangan aktifitas perekonomian dan sosial lainnya.",
                          "Mengupayakan penciptaan pertumbuhan ekonomi antar wilayah dalam daerah secara bersinergi fungsional.",
                          "Mengupayakan penciptaan kehidupan masyarakat yang aman, damai dan tentram dalam persamaan dan perbedaan.",
                          "Mewujudkan penegakan supremasi hukum dan Hak Azasi Manusia berlandaskan keadilan dan kebenaran."
                        ].map((misi, index) => (
                          <div key={index} className="flex items-start bg-green-50 p-4 rounded-lg">
                            <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-1 flex-shrink-0">
                              {index + 1}
                            </div>
                            <p className="text-gray-700 text-sm">{misi}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section id="berita" ref={beritaRef}>
                <div className="mb-16">
                  <div className="flex items-center justify-between mb-12">
                    <div>
                      <h2 className="text-4xl font-bold text-gray-900 mb-2">Berita Terkini</h2>
                      <p className="text-xl text-gray-600">Update terbaru dari Kabupaten Bone</p>
                    </div>
                    <button className="flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium transition-all shadow-lg hover:shadow-xl">
                      Lihat Semua Berita
                      <ArrowTopRightOnSquareIcon className="ml-2 h-5 w-5" />
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all group">
                      <div className="h-48 bg-gradient-to-br from-green-500 via-green-600 to-teal-600 flex items-center justify-center relative overflow-hidden">
                        <MegaphoneIcon className="h-16 w-16 text-white group-hover:scale-110 transition-transform" />
                        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity"></div>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center text-sm text-gray-500 mb-3">
                          <ClockIcon className="h-4 w-4 mr-2" />
                          16 Jun 2025
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                          Sekda Sulsel Pimpin Evaluasi Percepatan Koperasi Merah Putih, Capai 71 Persen
                        </h3>
                        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                          Sekda Sulsel memimpin evaluasi percepatan Koperasi Merah Putih, mencapai 71 persen, dengan daerah tertinggi yang berhasil.
                        </p>
                        <span className="inline-block bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full font-medium">
                          Pemerintahan
                        </span>
                      </div>
                    </div>

                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all group">
                      <div className="h-48 bg-gradient-to-br from-green-500 via-green-600 to-teal-600 flex items-center justify-center relative overflow-hidden">
                        <UserGroupIcon className="h-16 w-16 text-white group-hover:scale-110 transition-transform" />
                        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity"></div>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center text-sm text-gray-500 mb-3">
                          <ClockIcon className="h-4 w-4 mr-2" />
                          16 Jun 2025
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                          Wagub Sulsel Dorong Literasi Digital sebagai Benteng Perlindungan Anak
                        </h3>
                        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                          Wagub Sulsel mendorong literasi digital sebagai benteng perlindungan anak di era digital.
                        </p>
                        <span className="inline-block bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full font-medium">
                          Sosial
                        </span>
                      </div>
                    </div>

                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all group">
                      <div className="h-48 bg-gradient-to-br from-green-500 via-green-600 to-teal-600 flex items-center justify-center relative overflow-hidden">
                        <FaceSmileIcon className="h-16 w-16 text-white group-hover:scale-110 transition-transform" />
                        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity"></div>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center text-sm text-gray-500 mb-3">
                          <ClockIcon className="h-4 w-4 mr-2" />
                          12 Jun 2025
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                          Cegah Stunting, RSUD Haji Makassar Gelar Skrining Gizi untuk Balita
                        </h3>
                        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                          RSUD Haji Makassar menggelar skrining gizi untuk balita dalam upaya mencegah stunting.
                        </p>
                        <span className="inline-block bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full font-medium">
                          Kesehatan
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section id="layanan" ref={layananRef}>
                <div className="mb-16">
                  <div className="mb-12">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Layanan Terpopuler</h2>
                    <p className="text-xl text-gray-600">Akses cepat layanan publik untuk masyarakat Bone</p>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border-l-4 border-blue-500">
                      <div className="flex items-center text-blue-800 mb-8">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                          <UserGroupIcon className="h-8 w-8 text-blue-600" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold uppercase text-blue-600">Untuk</p>
                          <h3 className="text-2xl font-bold">Warga</h3>
                        </div>
                      </div>
                      <ul className="space-y-6">
                        <li className="flex items-start hover:bg-blue-50 p-3 rounded-lg transition-all">
                          <TrophyIcon className="h-6 w-6 text-blue-500 mr-4 mt-1 flex-shrink-0" />
                          <div>
                            <p className="font-semibold text-gray-900">Scholarship</p>
                            <p className="text-sm text-gray-600 mt-1">Program bantuan biaya pendidikan untuk warga Bone</p>
                          </div>
                        </li>
                        <li className="flex items-start hover:bg-blue-50 p-3 rounded-lg transition-all">
                          <TruckIcon className="h-6 w-6 text-blue-500 mr-4 mt-1 flex-shrink-0" />
                          <div>
                            <p className="font-semibold text-gray-900">Pembayaran Pajak Kendaraan</p>
                            <p className="text-sm text-gray-600 mt-1">Proses pembayaran pajak kendaraan di layanan Samsat</p>
                          </div>
                        </li>
                        <li className="flex items-start hover:bg-blue-50 p-3 rounded-lg transition-all">
                          <ChatBubbleLeftRightIcon className="h-6 w-6 text-blue-500 mr-4 mt-1 flex-shrink-0" />
                          <div>
                            <p className="font-semibold text-gray-900">Layanan Aspirasi Masyarakat</p>
                            <p className="text-sm text-gray-600 mt-1">Sampaikan aspirasi Anda kepada Pemkab Bone</p>
                          </div>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border-l-4 border-green-500">
                      <div className="flex items-center text-green-800 mb-8">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mr-4">
                          <BriefcaseIcon className="h-8 w-8 text-green-600" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold uppercase text-green-600">Untuk</p>
                          <h3 className="text-2xl font-bold">Usaha</h3>
                        </div>
                      </div>
                      <ul className="space-y-6">
                        <li className="flex items-start hover:bg-green-50 p-3 rounded-lg transition-all">
                          <BuildingOfficeIcon className="h-6 w-6 text-green-500 mr-4 mt-1 flex-shrink-0" />
                          <div>
                            <p className="font-semibold text-gray-900">Pendampingan Pembuatan NIB</p>
                            <p className="text-sm text-gray-600 mt-1">Fasilitasi pelaku usaha dalam pembuatan NIB</p>
                          </div>
                        </li>
                        <li className="flex items-start hover:bg-green-50 p-3 rounded-lg transition-all">
                          <TagIcon className="h-6 w-6 text-green-500 mr-4 mt-1 flex-shrink-0" />
                          <div>
                            <p className="font-semibold text-gray-900">Fasilitasi Merek</p>
                            <p className="text-sm text-gray-600 mt-1">Pendampingan UMKM untuk sertifikat merek</p>
                          </div>
                        </li>
                        <li className="flex items-start hover:bg-green-50 p-3 rounded-lg transition-all">
                          <CurrencyDollarIcon className="h-6 w-6 text-green-500 mr-4 mt-1 flex-shrink-0" />
                          <div>
                            <p className="font-semibold text-gray-900">Sertifikasi Halal</p>
                            <p className="text-sm text-gray-600 mt-1">Fasilitasi UMKM untuk sertifikat halal</p>
                          </div>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border-l-4 border-purple-500">
                      <div className="flex items-center text-purple-800 mb-8">
                        <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                          <UserGroupIcon className="h-8 w-8 text-purple-600" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold uppercase text-purple-600">Untuk</p>
                          <h3 className="text-2xl font-bold">Pencari Kerja</h3>
                        </div>
                      </div>
                      <ul className="space-y-6">
                        <li className="flex items-start hover:bg-purple-50 p-3 rounded-lg transition-all">
                          <MagnifyingGlassIcon className="h-6 w-6 text-purple-500 mr-4 mt-1 flex-shrink-0" />
                          <div>
                            <p className="font-semibold text-gray-900">Lowongan Kerja</p>
                            <p className="text-sm text-gray-600 mt-1">Temukan pekerjaan sesuai minat dan keahlian</p>
                          </div>
                        </li>
                        <li className="bg-gradient-to-r from-green-50 to-green-100 p-4 rounded-xl border-l-4 border-green-500">
                          <div className="flex items-start">
                            <AcademicCapIcon className="h-6 w-6 text-green-600 mr-4 mt-1 flex-shrink-0" />
                            <div className="flex-1">
                              <p className="font-semibold text-green-800">Pelatihan Ketenagakerjaan</p>
                              <p className="text-sm text-green-700 mt-1">Siap kerja dengan pelatihan bersertifikat kompetensi</p>
                            </div>
                            <ArrowTopRightOnSquareIcon className="h-5 w-5 text-green-600 ml-2" />
                          </div>
                        </li>
                        <li className="flex items-start hover:bg-purple-50 p-3 rounded-lg transition-all">
                          <MegaphoneIcon className="h-6 w-6 text-purple-500 mr-4 mt-1 flex-shrink-0" />
                          <div>
                            <p className="font-semibold text-gray-900">Pengaduan Ketenagakerjaan</p>
                            <p className="text-sm text-gray-600 mt-1">Sampaikan pengaduan masalah ketenagakerjaan</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Home;
