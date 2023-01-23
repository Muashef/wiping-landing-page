import google_play from '../assets/google-play.png';
import ios_logo from '../assets/ios-logo.png';
import section_six_hero from '../assets/section-six-hero.png';

const SectionSix = () => {
  return (
    <div className="my-36">
      <div className="p-10 w-[80%] mx-auto flex items-center justify-between bg-[#2F80ED] rounded-[72px]">
        <div>
          <h2 className='font-bold text-5xl text-white'>Get Wiping Now.</h2>
          <p className='text-2xl font-medium text-white'>Real-time Dating and HR Tool.</p>
          <div className="flex items-center gap-8 mt-10">
            <img src={google_play} alt="google_play_image" />
            <img src={ios_logo} alt="ios_image" />
          </div>
        </div>
        <div className='mb-[-40px]'>
          <img src={section_six_hero} alt="section_six_hero_image" />
        </div>
      </div>
    </div>
  );
};

export default SectionSix;
