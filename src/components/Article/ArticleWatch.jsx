import { Link } from "react-router-dom";

const ArticleWatch = () => {
  return (
    <div className="mt-3 w-full h-[500px] lg:h-[650px] 2xl:h-[692px] flex justify-center">
      <div className="bg-warna_hitam h-full w-full max-w-[1920px] bg-[url('https://www.apple.com/id/home/images/heroes/apple-watch-series-9/hero_apple_watch_series_9_order__d0fi9mb84dci_medium_2x.jpg')] bg-custom-size md:bg-custom-size7  lg:bg-[url('https://www.apple.com/id/home/images/heroes/apple-watch-series-9/hero_apple_watch_series_9_order__d0fi9mb84dci_mediumtall_2x.jpg')] lg:bg-custom-size6 2xl:bg-[url('https://www.apple.com/id/home/images/heroes/apple-watch-series-9/hero_apple_watch_series_9_order__d0fi9mb84dci_largetall_2x.jpg')] 2xl:bg-custom-size5 bg-center ">
        <div className="w-full h-[178px] flex flex-col items-center font-sans text-warna_background">
          <div className="mt-9 flex flex-col items-center">
            <h2 className="2xl:mr-14 sm:w-40 flex lg:mt-14 text-3xl lg:text-4xl font-semibold 2xl:text-[50px]">
              <i className=" flex items-center bx bxl-apple text-[30px] lg:text-[40px]"></i>
              WATCH
            </h2>
            <p className="mr-4 lg:mr-0 lg:text-xl">Series 9</p>
          </div>
          <p className="w-[360px] lg:w-[460px] lg:ml-9 2xl:w-[530px] flex text-center font-normal xl:font-semibold text-xl lg:text-2xl 2xl:ml-24 2xl:mt-3">
            Lebih pintar. Lebih cerah. Lebih perkasa.
          </p>
          <div className="mt-4 w-full h-20 flex justify-center items-center gap-3 lg:font-medium">
            <a
              className="bg-warna_biru w-32 h-9 lg:w-40 lg:h-11 flex justify-center items-center rounded-full"
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

export default ArticleWatch;
