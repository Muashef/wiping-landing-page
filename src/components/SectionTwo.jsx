'../assets/hero_img.png';
import google_play from '../assets/google-play.png';
import ios_logo from '../assets/ios-logo.png';

const SectionTwo = () => {
  return (
    <div className="bg-[#2F80ED] mt-8 py-8 w-full md:p-11 flex items-center justify-center">
      <div className="flex flex-col items-center gap-6 w-full lg:w-[80%] justify-between md:flex-row mx-auto">
        <h2 className="font-semibold text-sm text-center md:text-left w-full md:text-[37.9px] md:leading-[46px] text-[#fff] md:w-[60%]">
          Find the best candidates with our speed-matching feature.
        </h2>
        <div className="max-w-full flex items-center justify-center gap-3 lg:gap-8 md:w-[30%] mx-auto">
          <img
            className="w-full md:w-[50%]"
            src={google_play}
            alt="google_play_image"
          />
          <img className="w-full md:w-[60%]" src={ios_logo} alt="ios_image" />
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
