import { Link } from "react-router-dom";

const SectionMacBook = () => {
  return (
    <div className="mt-3 w-full h-[500px] md:h-[490px] md:w-[366px] lg:h-[490px] lg:w-[494px] 2xl:h-[580px] 2xl:w-[850px] flex justify-center">
      <div className="bg-warna_hitam h-full w-full max-w-[1920px] bg-[url('https://www.apple.com/v/home/bq/images/promos/macbook-air-m3/promo_macbook_air_m3__e43jegok3wuq_small_2x.jpg')] bg-custom-size md:bg-[url('https://www.apple.com/v/home/bq/images/promos/macbook-air-m3/promo_macbook_air_m3__e43jegok3wuq_medium.jpg')] md:bg-custom-size8  lg:bg-[url('https://www.apple.com/v/home/bq/images/promos/macbook-air-m3/promo_macbook_air_m3__e43jegok3wuq_medium_2x.jpg')] lg:bg-custom-size8 2xl:bg-[url('https://www.apple.com/v/home/bq/images/promos/macbook-air-m3/promo_macbook_air_m3__e43jegok3wuq_large_2x.jpg')] 2xl:bg-custom-size10 bg-size bg-center ">
        <div className="w-full h-[178px] flex flex-col items-center font-sans text-warna_hitam">
          <div className="mt-9 flex flex-col items-center">
            <h2 className="2xl:mr-14  flex lg:mt-0 text-3xl lg:text-4xl font-semibold 2xl:ml-10 2xl:text-[50px] gap-2 ">
              Macbook Air
            </h2>
          </div>
          <p className=" flex text-center font-normal xl:font-semibold text-xl lg:text-2xl 2xl:mt-3">
            Laptop M3 tipis. Bertenaga fantastis.
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

export default SectionMacBook;
