import { Link } from "react-router-dom";

const ArticleiPhone = () => {
  return (
    <div className="w-full h-[500px] lg:h-[650px] 2xl:h-[692px] flex justify-center">
      <div className="bg-warna_hitam h-full w-full max-w-[1920px] bg-[url('https://www.apple.com/id/home/images/heroes/iphone-family/hero_iphone_family_a__c7v3mvx3jv42_small_2x.jpg')] bg-custom-size sm:bg-custom-size lg:bg-custom-size2 2xl:bg-custom-size3 bg-size bg-center ">
        <div className="mt-5 w-full h-[178px] flex flex-col items-center font-sans text-warna_background">
          <h2 className="mt-11 lg:mt-14 text-3xl lg:text-5xl font-semibold 2xl:text-[50px]">
            iPhone
          </h2>
          <p className="w-[320px] lg:w-[360px] flex text-center font-normal xl:font-semibold text-xl lg:text-2xl 2xl:mt-3">
            Sistem kamera tercanggih kami. Chip ultra cepat. Dan USB-C.
          </p>
          <div className="mt-4 w-full h-20 flex justify-center items-center gap-3 lg:font-medium">
            <a
              className="bg-warna_biru w-32 h-9 lg:w-40 lg:h-11 flex justify-center items-center rounded-full"
              href=""
            >
              Selengkapnya
            </a>
            <Link
              className="border border-warna_biru w-28 h-9 lg:w-32 lg:h-11 flex justify-center items-center rounded-full text-warna_biru hover:bg-warna_biru hover:text-warna_background"
              to='/Apple-ReactJs/Sales'
            >
              Beli iPhone
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleiPhone;
