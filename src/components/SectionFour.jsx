import algorithms from '../assets/algorithms.png';
import chat_clip from '../assets/chat-clip.png';
import match from '../assets/match.png';
import video from '../assets/video.png';
import realtime_hero from '../assets/realtime-hero.png';

const SectionFour = () => {
  return (
    <div>
      <div className="w-[80%] mx-auto">
        <header className="w-[30%]">
          <h2 className="font-bold realtime__text">
            Real-time
            <br />
            Features
          </h2>
        </header>
        <main className="flex justify-between gap-10 mt-8">
          <div className="w-[60%] relative">
            <img
              className="absolute left-[-29%] w-[100%]"
              src={realtime_hero}
              alt="realtime_hero_image"
            />
            <img
              className="absolute z-1 top-[80%] left-[-23%] w-[70%]"
              src={chat_clip}
              alt="chat_clip_image"
            />
          </div>
          <div className="w-[50%] ml-auto">
            <h2 className="font-semibold text-[36px] leading-[44px] text-[#2F80ED]">
              Meet People, Get that Job from Anywhere you are.
            </h2>
            <div className="flex items-start gap-6 mt-5">
              <img src={algorithms} alt="algorithms" />
              <div>
                <h3 className="font-semibold text-[28px] leading-[34px] text-[#2F80ED]">
                  Algorithms
                </h3>
                <p className="font-normal text-xl text-[#494E78]">
                  An app that combines speed dating, Ringall, and machine
                  learning to provide a face, maximum reach, and a voice.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-6 mt-5">
              <img src={match} alt="math_img" />
              <div>
                <h3 className="font-semibold text-[28px] leading-[34px] text-[#2F80ED]">
                  Match
                </h3>
                <p className="font-normal text-xl text-[#494E78]">
                  Find your closest match quickly using our algorithm and your
                  personal data.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-6 mt-5">
              <img src={video} alt="video-dial-in" />
              <div>
                <h3 className="font-semibold text-[28px] leading-[34px] text-[#2F80ED]">
                  Video Dial In
                </h3>
                <p className="font-normal text-xl text-[#494E78]">
                  Eliminate catfishing with our mandatory video call feature.
                  Put a face to the name!
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default SectionFour;
