// import React, { useEffect } from 'react';
// import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Home from './components/Home';
// import Highlights from './components/Highlights';
// import About from './components/About';
// import IndustryFocus from './components/IndustryFocus';
// import Programme from './components/Programme';
// import Services from './components/Services';
// import Careers from './components/Careers';
// import Contact from './components/Contact';
// import Footer from './components/Footer';

// const ScrollToHashElement = () => {
//   const location = useLocation();

//   useEffect(() => {
//     if (location.hash) {
//       const element = document.getElementById(location.hash.substring(1));
//       if (element) {
//         element.scrollIntoView({ behavior: 'smooth' });
//       }
//     } else {
//       window.scrollTo(0, 0);
//     }
//   }, [location]);

//   return null;
// };

// const App = () => {
//   return (
//     <Router>
//       <div id="root">
//         <Navbar />
//         <main> {/* Wrap main content in a <main> tag */}
//           <ScrollToHashElement />
//           <Routes>
//             <Route
//               path="/"
//               element={
//                 <>
//                   <Home id="home" />
//                   <Highlights />
//                   <About id="about" />
//                   <IndustryFocus id="industryfocus" />
//                   <Programme id="programme" />
//                   <Services id="services" />
//                   <Careers id="careers" />
//                 </>
//               }
//             />
//             <Route path="/contact" element={<Contact />} />
//           </Routes>
//         </main>
//         <Footer />
//       </div>
//     </Router>
//   );
// };


// export default App;




// import React, { useEffect } from 'react';
// import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Home from './components/Home';
// import Highlights from './components/Highlights';
// import About from './components/About';
// import IndustryFocus from './components/IndustryFocus';
// import Programme from './components/Programme';
// import Services from './components/Services';
// import Careers from './components/Careers';
// import Contact from './components/Contact';
// import Footer from './components/Footer';
// import './App.css';

// const ScrollToHashElement = () => {
//   const location = useLocation();

//   useEffect(() => {
//     if (location.hash) {
//       const element = document.getElementById(location.hash.substring(1));
//       if (element) {
//         element.scrollIntoView({ behavior: 'smooth', block: 'start' });
//       } else {
//         window.scrollTo({ top: 0, behavior: 'smooth' });
//       }
//     }
//   }, [location]);
// };


// const App = () => {
//   useEffect(() => {
//     const handleContextMenu = (event) => {
//       event.preventDefault();
//     };

//     const handleKeyDown = (event) => {
//       if (event.ctrlKey && (event.key === 'u' || event.key === 'c')) {
//         event.preventDefault();
//       }
//     };

//     document.addEventListener('contextmenu', handleContextMenu);
//     document.addEventListener('keydown', handleKeyDown);

//     document.body.style.userSelect = 'none';
//     document.body.style.webkitUserSelect = 'none';
//     document.body.style.mozUserSelect = 'none';
//     document.body.style.msUserSelect = 'none';

//     return () => {
//       document.removeEventListener('contextmenu', handleContextMenu);
//       document.removeEventListener('keydown', handleKeyDown);
//     };
//   }, []);

//   return (
//     <Router>
//       <div>
//         <Navbar />
//         <main>
//           <ScrollToHashElement />
//           <Routes>
//             <Route
//               path="/"
//               element={
//                 <>
//                   <Home id="home" />
//                   <Highlights />
//                   <About id="about" />
//                   <IndustryFocus id="industryfocus" />
//                   <Programme id="programme" />
//                   <Services id="services" />
//                   <Careers id="careers" />
//                 </>
//               }
//             />
//             <Route path="/contact" element={<Contact />} />
//           </Routes>
//         </main>
//         <Footer />
//       </div>
//     </Router>
//   );
// };

// export default App;


// App.jsx
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Highlights from './components/Highlights';
import About from './components/About';
import IndustryFocus from './components/IndustryFocus';
import Programme from './components/Programme';
import Services from './components/Services';
import Careers from './components/Careers';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

const ScrollToHashElement = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [location]);

  return null;
};

const App = () => {
  return (
    <Router>
      <ScrollToHashElement />
      <div>
        <Navbar />
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Home id="home" />
                  <Highlights />
                  <About id="about" />
                  <IndustryFocus id="industryfocus" />
                  <Programme id="programme" />
                  <Services id="services" />
                  <Careers id="careers" />
                </>
              }
            />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
