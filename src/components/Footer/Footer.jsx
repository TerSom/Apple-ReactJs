import React from "react";

const Footer = () => {
  return (
    <footer className="mt-5 flex justify-center">
      <div className="h-[590.78px] lg:h-[590.77px] lg:mt-7 w-full max-w-[1024px] flex justify-center">
        <div className="h-full w-[95%]">
          <div className="text-warna_Abu font-medium text-xs">
            <ul>
              <li className="mt-3">
                * Apple Intelligence akan hadir tahun ini dalam versi beta di
                iPhone 15 Pro, iPhone 15 Pro Max, dan iPad serta Mac dengan M1
                dan lebih baru, dengan bahasa Siri dan perangkat yang diatur ke
                bahasa Inggris A.S., sebagai bagian dari iOS 18, iPadOS 18, dan
                macOS Sequoia.
              </li>
              <li className="mt-2">
                Beberapa fitur, bahasa tambahan, dan platform akan hadir pada
                tahun depan.
              </li>
              <li className="mt-2">Langganan diperlukan untuk Apple TV+.</li>
            </ul>
          </div>
          <hr className="text-warna_Abu mt-4 lg:mt-5" />
          <div className=" text-warna_Abu h-[316px] mt-6 flex flex-col lg:flex-row gap-[12px] text-xs lg:justify-between  ">
            <div className="flex-col flex gap-2">
              <span className="text-warna_hitam ">Belanja dan Belajar</span>
              <a href="" className="hidden lg:block">
                Mac
              </a>
              <a href="" className="hidden lg:block">
                iPad
              </a>
              <a href="" className="hidden lg:block">
                iPhone
              </a>
              <a href="" className="hidden lg:block">
                Watch
              </a>
              <a href="" className="hidden lg:block">
                TV & Rumah
              </a>
              <a href="" className="hidden lg:block">
                AirTag
              </a>
              <hr className="lg:hidden" />
              <span className="text-warna_hitam ">Dompet Apple</span>
              <a href="" className="hidden lg:block">
                Dompet
              </a>
              <hr className="lg:hidden" />
            </div>
            <div className="flex-col flex gap-2">
              <span className="text-warna_hitam ">Akun</span>
              <a href="" className="hidden lg:block">
              Kelola ID Apple Anda
              </a>
              <a href="" className="hidden lg:block">
              iCloud.com
              </a>
              <hr className="lg:hidden" />
              <span className="text-warna_hitam ">Hiburan</span>
              <a href="" className="hidden lg:block">
              Apple One
              </a>
              <a href="" className="hidden lg:block">
              Apple TV+
              </a>
              <a href="" className="hidden lg:block">
              Apple Music
              </a>
              <a href="" className="hidden lg:block">
              Apple Arcade
              </a>
              <a href="" className="hidden lg:block">
              Apple Fitness+
              </a>
              <a href="" className="hidden lg:block">
              Apple Podcasts
              </a>
              <a href="" className="hidden lg:block">
              Apple Books
              </a>
              <a href="" className="hidden lg:block">
              App Store
              </a>
              <hr className="lg:hidden" />
            </div>
            <div className="flex-col flex gap-2">
            <span className="text-warna_hitam ">Untuk Bisnis</span>
            <a href="" className="hidden lg:block">
            Apple dan Bisnis
              </a>
            <hr className="lg:hidden" />
            <span className="text-warna_hitam ">Untuk Pendidikan</span>
            <a href="" className="hidden lg:block">
            Apple dan Pendidikan
              </a>
            <hr className="lg:hidden" />
            </div>
            <div className="flex-col flex gap-2">
            <span className="text-warna_hitam ">Nilai-nilai Apple</span>
            <a href="" className="hidden lg:block">
            Aksesibilitas
              </a>
              <a href="" className="hidden lg:block">
              Pendidikan
              </a>
              <a href="" className="hidden lg:block">
              Lingkungan
              </a>
              <a href="" className="hidden lg:block">
              Privasi
              </a>
              <a href="" className="hidden lg:block">
              Rantai Pasokan
              </a>
            <hr className="lg:hidden" />
            <span className="text-warna_hitam ">Tentang Apple</span>
            <a href="" className="hidden lg:block">
            Newsroom
              </a>
              <a href="" className="hidden lg:block">
              Kepemimpinan Apple
              </a>
              <a href="" className="hidden lg:block">
              Investor
              </a>
              <a href="" className="hidden lg:block">
              Etika & Kepatuhan
              </a>
              <a href="" className="hidden lg:block">
              Acara
              </a>
              <a href="" className="hidden lg:block">
              Hubungi Apple
              </a>
            <hr className="lg:hidden" />
            </div>
          </div>
          <div className="mt-4 h-[137px] text-xs text-warna_Abu">
            <div className="flex gap-1">
              <a href="" className="text-warna_biru hover:underline">
                Temukan retailer
              </a>
              <span>di dekat Anda.</span>
            </div>
            <div className="mt-4 text-warna_AbuAbu">
              <a href="">Indonesia</a>
            </div>
            <div className="mt-4">
              <span>
                Hak cipta © 2024 Apple Inc. Seluruh hak cipta dilindungi
                undang-undang.
              </span>
            </div>
            <div className="w-full h-[16px] flex gap-2 mt-1">
              <a href="" className="text-warna_AbuAbu hover:underline">
                Kebijakan Privasi
              </a>
              <p>|</p>
              <a href="" className="text-warna_AbuAbu hover:underline">
                Ketentuan Penggunaan
              </a>
              <p>|</p>
              <a href="" className="text-warna_AbuAbu hover:underline">
                Legal
              </a>
              <p>|</p>
              <a href="" className="text-warna_AbuAbu hover:underline">
                Peta Situs
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
