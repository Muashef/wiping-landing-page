import './App.css';
import {
  Faq,
  Footer,
  GetInTouch,
  Header,
  HeroSection,
  SectionFive,
  SectionFour,
  SectionSix,
  SectionThree,
  SectionTwo,
} from './components';

function App() {
  return (
    <div className="grid grid-cols-1 w-full pt-[100px] md:pt-0">
      <Header />
      <HeroSection />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <Faq />
      <SectionSix />
      <GetInTouch />
      <Footer />
    </div>
  );
}

export default App;
