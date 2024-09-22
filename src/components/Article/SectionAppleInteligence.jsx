const SectionAppleInteligence = () => {
  return (
    <div className="mt-3 w-full h-[500px] md:w-[366px] md:h-[490px] lg:h-[490px] lg:w-[494px] 2xl:h-[580px] 2xl:w-[850px] flex justify-center">
      <div className="bg-warna_hitam h-full w-full max-w-[1920px] bg-[url('https://www.apple.com/id/home/images/promos/apple-intelligence/promo_ai__couihqxznyvm_small_2x.jpg')] bg-custom-size md:bg-[url('https://www.apple.com/id/home/images/promos/apple-intelligence/promo_ai__couihqxznyvm_medium_2x.jpg')] md:bg-custom-size8  lg:bg-[url('https://www.apple.com/id/home/images/promos/apple-intelligence/promo_ai__couihqxznyvm_medium_2x.jpg')] lg:bg-custom-size8 2xl:bg-[url('https://www.apple.com/id/home/images/promos/apple-intelligence/promo_ai__couihqxznyvm_large_2x.jpg')] 2xl:bg-custom-size10 bg-size bg-center ">
        <div className="w-full h-[178px] flex flex-col items-center font-sans text-warna_hitam">
          <div className="mt-9 flex flex-col items-center">
            <h2 className=" flex text-3xl lg:text-4xl font-semibold 2xl:text-[50px] gap-2 ">
              Apple Intelligence
            </h2>
          </div>
          <p className="flex text-center font-normal xl:font-semibold text-xl lg:text-2xl 2xl:ml- 2xl:mt-3">
            Al untuk kita semua.
          </p>
          <p className="mt-3 text-warna_AbuAbu flex text-center">
            Segera hadir tahun ini dalam versi beta berbahasa Inggris A.S.*
          </p>
          <div className="mt-4 w-full h-20 flex justify-center items-center gap-3 lg:font-medium">
            <a
              className="bg-warna_biru w-32 h-9 lg:w-40 lg:h-11 flex justify-center items-center rounded-full text-warna_background"
              href=""
            >
              Selengkapnya
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionAppleInteligence;
