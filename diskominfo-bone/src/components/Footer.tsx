const Footer = () => {
  return (
    <footer className="bg-green-700 relative">
      <div className="container mx-auto px-6 2xl:px-0 xl:max-w-7xl">
        <div className="py-6 md:py-12 flex flex-col gap-6 md:gap-12 bg-no-repeat" style={{ backgroundImage: "url('/images/menu.svg')", backgroundPosition: "100% 100%" }}>
          <a href="/" aria-current="page" className="w-[fit-content] nuxt-link-exact-active nuxt-link-active">
            <img src="/images/pemkab-bone.png" width="50" height="38" alt="Beranda" />
          </a>
          
          <div className="min-w-0 grid grid-cols-1 md:grid-cols-2 lg:flex lg:justify-between gap-6 text-white">
            <div className="flex items-start gap-3">
              <img src="/icons/location.svg" alt="Lokasi" width="18" height="18" className="py-1" />
              <div className="flex flex-col gap-1">
                <p className="font-roboto font-bold leading-7">
                  Kantor Bupati Bone
                </p>
                <div className="flex flex-col text-sm leading-6">
                  <p>Jl. A. Mappanyukki, Macanang, Kec. Tanete Riattang,</p>
                  <p>Kabupaten Bone, Sulawesi Selatan 92713</p>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <img src="/icons/email.svg" alt="Email" width="18" height="18" className="py-1" />
              <div className="flex flex-col gap-1">
                <p className="font-roboto font-bold leading-7">
                  Surel
                </p>
                <a href="mailto:lpse.bonekab@gmail.com" className="text-sm leading-6">Lpse.bonekab@gmail.com</a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <img src="/icons/feedback.svg" alt="Umpan Balik" width="20" height="20" className="py-1" />
              <div className="flex flex-col gap-1">
                <p className="font-bold">
                  Umpan Balik
                </p>
                <button type="button" className="text-sm text-left leading-6">
                  Isi survei performa situs web
                </button>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <img src="/icons/network.svg" alt="Lokasi" width="20" height="20" className="py-1" />
              <div className="flex w-full flex-col gap-2">
                <p className="font-bold">
                  Media Sosial
                </p>
                <a href="https://www.instagram.com/humas.bone/" className="text-sm leading-6">Instagram</a>
                <a href="https://www.facebook.com/humas.bone/" className="text-sm leading-6">Facebook</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full py-4 lg:py-6 border-t border-green-500">
        <div className="container mx-auto px-6 2xl:px-0 xl:max-w-7xl">
          <div className="flex flex-col items-center lg:items-start gap-5">
            <p className="font-lato text-sm font-normal leading-6 text-white text-center lg:text-left">
              Copyright © 2025 <br className="lg:hidden" /> Pemerintah Daerah Kabupaten Bone. All Right Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 