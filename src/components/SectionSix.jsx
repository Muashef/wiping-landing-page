import google_play from '../assets/google-play.png';
import ios_logo from '../assets/ios-logo.png';
import section_six_hero from '../assets/section-six-hero.png';

const SectionSix = () => {
  return (
    <div className="my-36">
      <div className="p-8 text-center w-[90%] md:w-[80%] mx-auto flex flex-col md:flex-row items-center justify-between bg-[#2F80ED] rounded-3xl md:rounded-[72px] overflow-hidden">
        <div>
          <h2 className="font-bold text-2xl md:text-5xl text-white mb-3">
            Get Wiping Now.
          </h2>
          <p className="text-sm md:text-xl font-medium text-white">
            Real-time Social and Networking App.
          </p>
          <div className="w-full flex items-center justify-center gap-3 lg:gap-8 mt-10 mb-32 lg:mb-0 mx-auto">
            <img
              className="w-[40%]"
              src={google_play}
              alt="google_play_image"
            />
            <img className="w-[50%]" src={ios_logo} alt="ios_image" />
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
