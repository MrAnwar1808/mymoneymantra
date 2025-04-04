
import './App.css';
import BankPartner from './Components/BankPartner/Partner';
import ProductsSection from './Components/BestProducts/ProductsSection';
import Blogs from './Components/Blogs/Blogs';
import EMICalculator from './Components/EmiCalculator/EMICalculator';
import Footer from './Components/Footer/Footer';
import MobileApps from './Components/MobileApp/AppContent';
import Navbar from './Components/NavBar/NavBar';
import SliderAdvs from './Components/Slides/Slides';
import ChooseUs from './Components/WhyChoose/ChooseUs';

function App() {
  return (
    <div className="App">
     <Navbar />
     <SliderAdvs />
     <ProductsSection />
     <EMICalculator />
     <BankPartner />
     <ChooseUs />
     <MobileApps />
     <Blogs />
     <Footer/>
    </div>
  );
}

export default App;
