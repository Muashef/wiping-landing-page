import hero_img from '../assets/hero_img.png';
import google_play from '../assets/google-play.png';
import ios_logo from '../assets/ios-logo.png';

const HeroSection = () => {
  return (
    <div className="w-full bg-white overflow-hidden">
      <div className="flex items-center w-[80%] justify-between gap-8 mx-auto">
        <div className="w-[50%]">
          <h2 className="font-[Inter] text-[46px] leading-[54px] font-semibold text-[#033B6C]">
            Networking is a <br />
            <span className="text-[#2F80ED]">TWO-WAY STREET</span>,
            <br /> let us connect you with the right people.
          </h2>
          <div className="flex items-center gap-8 mt-10">
            <img src={google_play} alt="google_play_image" />
            <img src={ios_logo} alt="ios_image" />
          </div>
        </div>
        <div className="relative">
          <img className="relative z-20" src={hero_img} alt="hero_image" />
          <div className="absolute z-0 w-[836px] h-[836px] bg-[#2f80ed] opacity-10 top-[-320px] left-[-100px]  rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
