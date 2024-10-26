import Home from '../Pages/Home';
import About from '../Pages/About';
import Contact from '../Pages/Contact';
import SliderSection from '../Pages/Slider';
import Projects from '../Pages/Projects';
import FadeInSection from './FadeIn';

function AppContent() {
  return (
    <div className="main-content">
      <FadeInSection><Home /></FadeInSection>
      <FadeInSection><About /></FadeInSection>
      <FadeInSection><SliderSection /></FadeInSection>
      <FadeInSection><Projects /></FadeInSection>
      <FadeInSection><Contact /></FadeInSection>
    </div>
  );
}

export default AppContent;
