import { Link } from "react-router-dom";

const SectionWATCH = () => {
  return (
    <div className="mt-3 w-full h-[500px] md:w-[366px] md:h-[490px] lg:h-[490px] lg:w-[494px] 2xl:h-[580px] 2xl:w-[850px] flex justify-center">
      <div className="bg-warna_hitam h-full w-full max-w-[1920px] bg-[url('https://www.apple.com/v/home/bq/images/promos/apple-watch-ultra-2/promo_apple_watch_ultra2_order__dyxqj5ia98om_small.jpg')] bg-custom-size md:bg[url('https://www.apple.com/v/home/bq/images/promos/apple-watch-ultra-2/promo_apple_watch_ultra2_order__dyxqj5ia98om_medium.jpg')] md:bg-custom-size8  lg:bg-[url('https://www.apple.com/v/home/bq/images/promos/apple-watch-ultra-2/promo_apple_watch_ultra2_order__dyxqj5ia98om_medium_2x.jpg')] lg:bg-custom-size8 2xl:bg-[url('https://www.apple.com/v/home/bq/images/promos/apple-watch-ultra-2/promo_apple_watch_ultra2_order__dyxqj5ia98om_large_2x.jpg')] 2xl:bg-custom-size10 bg-size bg-center ">
        <div className="w-full h-[178px] flex flex-col items-center font-sans text-warna_hitam">
          <div className=" flex flex-col items-center">
            <h2 className="2xl:mr-14 flex lg:mt-0 text-3xl lg:text-4xl 2xl:text-[50px] gap-2 font-bold ">
              <i className=" flex items-center bx bxl-apple text-[30px] lg:text-[40px] "></i>
              WATCH
            </h2>
            <p className="text-warna_orange font-bold text-xs ml-6 2xl:ml-0 2xl:mr-8 mt-2 ">
              ULTRA 2
            </p>
          </div>
          <p className=" flex text-center font-normal xl:font-semibold text-xl lg:text-2xl 2xl:mt-3">
            Petualangan level selanjutnya.
          </p>
          <div className="mt-4 w-full h-20 flex justify-center items-center gap-3 lg:font-medium">
            <a
              className="bg-warna_biru w-32 h-9 lg:w-40 lg:h-11 flex justify-center items-center rounded-full text-warna_background"
              href=""
            >
              Selengkapnya
            </a>
            <Link
              className="border border-warna_biru w-16 h-9 lg:w-20 lg:h-11 flex justify-center items-center rounded-full text-warna_biru hover:bg-warna_biru hover:text-warna_background"
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

export default SectionWATCH;
