import { Link } from "react-router-dom";

const ArticleiPad = () => {
  return (
    <div className="mt-3 w-full h-[500px] lg:h-[650px] 2xl:h-[692px] flex justify-center">
      <div className="bg-warna_hitam h-full w-full max-w-[1920px] bg-[url('https://www.apple.com/v/home/bq/images/heroes/ipad-pro/hero_ipadpro__bpt7a9d8sh42_small_2x.jpg')] bg-custom-size lg:bg-[url('https://www.apple.com/v/home/bq/images/heroes/ipad-pro/hero_ipadpro__bpt7a9d8sh42_largetall_2x.jpg')] lg:bg-custom-size4 2xl:bg-[url('https://www.apple.com/v/home/bq/images/heroes/ipad-pro/hero_ipadpro__bpt7a9d8sh42_largetall_2x.jpg')] 2xl:bg-custom-size5 bg-size bg-center ">
        <div className="w-full h-[178px] flex flex-col items-center font-sans text-warna_background">
          <h2 className="mt-9 lg:mt-13 text-3xl lg:text-5xl font-semibold 2xl:text-[50px]">
            iPad Pro
          </h2>
          <p className="w-[350px] lg:w-[360px] flex text-center font-normal xl:font-semibold text-xl lg:text-2xl 2xl:mt-3">
            Tipis luar biasa. Luar biasa bertenaga.
          </p>
          <div className="mt-4 w-full h-20 flex justify-center items-center gap-3 lg:font-medium">
            <a
              className="bg-warna_biru w-32 h-9 lg:w-40 lg:h-11 flex justify-center items-center rounded-full"
              href=""
            >
              Selengkapnya
            </a>
            <Link
              className="border border-warna_biru w-16 h-9 lg:w- lg:h-11 flex justify-center items-center rounded-full text-warna_biru hover:bg-warna_biru hover:text-warna_background  "
              href=""
              to='/Apple-ReactJs/Sales'
            >
              Beli
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleiPad;
