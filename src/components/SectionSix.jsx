import google_play from '../assets/google-play.png';
import ios_logo from '../assets/ios-logo.svg';
import section_six_hero from '../assets/section-six-hero.png';

const SectionSix = () => {
  return (
    <div className="my-36">
      <div className="p-3 md:py-6 md:px-8 text-center w-[90%] md:w-[80%] mx-auto flex flex-col md:flex-row items-center justify-between bg-[#2F80ED] rounded-3xl md:rounded-[72px] overflow-hidden">
        <div>
          <h2 className="font-bold text-2xl md:text-5xl text-white">
            Get Wiping Now.
          </h2>
          <p className="text-sm md:text-2xl font-medium text-white">
            Real-time Social and Netorking App.
          </p>
          <div className="flex items-center gap-2 mt-10 w-full justify-between md:justify-start">
            <button
              className="
              flex items-center gap-1 bg-[#212121] py-2 px-1 rounded-md
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
        <div className="mb-[-35px] md:mb-[-40px]">
          <img src={section_six_hero} alt="section_six_hero_image" />
        </div>
      </div>
    </div>
  );
};

export default SectionSix;
