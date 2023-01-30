import hero_img from '../assets/hero_img.png';
import google_play from '../assets/google-logo.svg';
import ios_logo from '../assets/ios-logo.svg';

const HeroSection = () => {
  return (
    <div className="w-full overflow-hidden">
      <div className="flex flex-col items-center w-full max-w-[80vw] md:max-w-7xl justify-between gap-8 mx-auto md:flex-row">
        <div className="w-full md:max-w-[45%]">
          <h2 className="text-[21px] mt-4 leading-9 text-center md:text-left md:text-[58px] md:leading-[54px] font-semibold text-[#033B6C]">
            Networking is a
            <span className="text-[#2F80ED]"> TWO-WAY STREET</span>, let us
            connect you with the right people.
          </h2>
          <div className="flex items-center justify-center md:justify-start gap-3 lg:gap-4 mt-10 mx-auto">
            <img src={google_play} width={"140"} alt="google_play_image" />
            <img src={ios_logo} width={"140"} alt="ios_image" />
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
