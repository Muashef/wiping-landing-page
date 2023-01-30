'../assets/hero_img.png';
import google_play from '../assets/google-play.png';
import ios_logo from '../assets/ios-logo.svg';

const SectionTwo = () => {
  return (
    <div className="bg-[#2F80ED] mt-8 py-8 w-full md:p-11 flex items-center justify-center">
      <div className="flex flex-col items-center gap-6 w-full lg:w-[80%] justify-between md:flex-row">
        <h2 className="font-semibold text-xl text-center md:text-left w-full md:text-[37.9px] md:leading-[46px] text-[#fff] md:w-[60%]">
          Find the best candidates with our speed-matching feature.
        </h2>
        <div className="flex items-center gap-2 mt-10 md:mt-0 w-[90%] md:w-[40%] justify-between md:justify-start">
          <button
            className="
              flex items-center gap-1 bg-[#212121] py-2 px-4 rounded-md
            "
          >
            <img
              src={google_play}
              className="w-10 h-10"
              alt="google_play_image"
            />
            <div className="flex flex-col text-left">
              <span className="text-[#FAFAFA] uppercase text-[10px]">
                Get it on
              </span>
              <span className="text-[#FAFAFA] capitalize">Google Play</span>
            </div>
          </button>
          <button
            className="
              flex items-center gap-1 bg-[#212121] py-2 px-3 rounded-md
            "
          >
            <img src={ios_logo} className="w-10 h-10" alt="ios_image" />
            <div className="flex flex-col text-left">
              <span className="text-[#FAFAFA] text-[10px]">
                Download on the
              </span>
              <span className="text-[#FAFAFA] capitalize">App Store</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;