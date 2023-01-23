'../assets/hero_img.png';
import google_play from '../assets/google-play.png';
import ios_logo from '../assets/ios-logo.png';

const SectionTwo = () => {
  return (
    <div className="h-[277px] bg-[#2F80ED] w-full p-11 flex items-center justify-center">
      <div className="flex items-center gap-6 w-[80%] justify-between">
        <h2 className="font-[Inter] font-semibold text-[37.9px] leading-[46px] text-[#fff] w-[60%]">
          Find the best candidates with our speed-matching feature.
        </h2>
        <div className="flex items-center gap-8">
          <img src={google_play} alt="google_play_image" />
          <img src={ios_logo} alt="ios_image" />
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
