import { useState, useEffect } from 'react';
import facebook from '../assets/facebook.png';
import twitter from '../assets/twitter.png';
import instagram from '../assets/instagram.png';
import linkedin from '../assets/linkedIN.png';


const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const updateCurrentYear = () => {
      setCurrentYear(new Date().getFullYear());
    }
    const intervalId = setInterval(updateCurrentYear, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="h-[60vh] py-28">
      <div className="w-[90%] md:w-[50%] mx-auto flex flex-col items-center justify-between text-center">
        <div className="w-full text-center">
          <h2 className="footer__text font-bold w-[25%] mx-auto order-2">Wiping</h2>
          <div className="w-full flex flex-col md:flex-row items-center justify-between my-3">
            <p
              className="text-[#212121] tracking-tighter 
            text-[14px] md:text-[21px] leading-[27px] mb-4"
            >
              Stay connected with like-minded individuals on our social
              networking app. Find friends, dates, and people with similar
              career experiences. Keep up to date with our latest features and
              events by following us on social media.
            </p>
          </div>

          <div
            className="w-full
            flex flex-col items-center justify-center my-3 space-y-5"
          >
            <p
              className="font-medium md:text-2xl mb-4 text-[#212121] md:w-[50%]
            text-[16px] text-center md:leading-[27px]
            "
            >
              Find your ideal match and that perfect job{' '}
              <span className="decoration-[#2F80ED] underline">real-time.</span>
            </p>
            <div className="flex items-center gap-4 mt-6 mb-4 lg:mt-0 lg:mb-0">
              <img src={facebook} alt="" />
              <img src={instagram} alt="" />

              <img src={twitter} alt="" />
              <img src={linkedin} alt="" />
            </div>
            <div className="flex flex-col mt-4">
              <p>© {currentYear}, Wiping</p>
              <p>All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
