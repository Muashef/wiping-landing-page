import hero_img from '../assets/hero_img.png';
import google_play from '../assets/google-play.png';
import ios_logo from '../assets/ios-logo.svg';

const HeroSection = () => {
  return (
    <div className="w-full bg-white overflow-hidden">
      <div className="flex flex-col items-center w-[90%] md:w-[80%] justify-between gap-8 mx-auto md:flex-row">
        <div className="w-full md:w-[50%]">
          <h2 className="text-[24px] mt-4 leading-9 text-center md:text-left md:text-[56px] md:leading-[54px] font-semibold text-[#033B6C]">
            Networking is a
            <span className="text-[#2F80ED]"> TWO-WAY STREET</span>, let us
            connect you with the right people.
          </h2>
          <div className="flex items-center gap-2 mt-10 w-full justify-between md:justify-start">
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
        <div className="relative">
          <img className="relative z-20" src={hero_img} alt="hero_image" />
          <div className="absolute w-[388px] h-[388px] bg-[#2f80ed] opacity-10 z-0 md:w-[836px] md:h-[836px] md:top-[-320px] md:left-[-100px] rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
