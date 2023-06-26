import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import Event from './components/Event';
import Footer from './components/Footer';
import Eventdesc from "./components/Eventdesc";
import Faq from "./components/Faq";
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import img_1 from './components/assets/images/img_1.png'
import img_2 from './components/assets/images/img_2.png'
import img_3 from './components/assets/images/img_3.png'
import img_4 from './components/assets/images/img_4.png'
import img_5 from './components/assets/images/img_5.png'

// import Homepage from "./components/Homepage";
// import Eventcard from './components/Eventcard';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <div style={{ height: '50vh' }}></div>
      <div className="bgdiv">
        <About />
        <Router>
          <Routes>
            <Route exact path={`/`} element={<Event />} />
            <Route exact path={`/event1`} element={<Eventdesc imglink={img_1} name='Codigo' descc='Get ready to put your coding skills to the test and rise to the challenge at Codigo! Join us for an exhilarating event filled with thought-provoking coding questions and a thrilling competition. This event consists of two rounds, where in the first round participants have to qualify quiz to assure their entry in the next round i.e. final round and final round will be conducted on HackerRank. Show off your expertise and discover new techniques as you compete against fellow programmers.' rlink="https://docs.google.com/forms/d/e/1FAIpQLSeoMr3UdAlLvr1YNp6M7x_RWhEAbPd5G8SLN9EMMNVPi8cMPg/viewform" photo1='https://previews.123rf.com/images/richcat/richcat1112/richcat111200006/11479159-graphic-illustration-of-man-in-business-suit-as-user-icon-avatar.jpg' Name1='Name' branch1='CSE' photo2='https://previews.123rf.com/images/richcat/richcat1112/richcat111200006/11479159-graphic-illustration-of-man-in-business-suit-as-user-icon-avatar.jpg' Name2='Name 2' branch2='CSE' photo3='https://previews.123rf.com/images/richcat/richcat1112/richcat111200006/11479159-graphic-illustration-of-man-in-business-suit-as-user-icon-avatar.jpg' Name3='Name 3' branch3='CSE' />} />
            <Route exact path={`/event2`} element={<Eventdesc imglink={img_2} name='Debugger king' descc='Are you a master of debugging? Do you have a knack for solving complex programming issues? Then get ready for the ultimate debugging showdown! Our upcoming debugging contest will bring together the best and brightest programmers to showcase their skills and compete in a series of challenging debugging scenarios.' rlink="https://www.hackerrank.com/debugger-king-2k23" photo1='https://previews.123rf.com/images/richcat/richcat1112/richcat111200006/11479159-graphic-illustration-of-man-in-business-suit-as-user-icon-avatar.jpg' Name1='Name' branch1='CSE' photo2='https://previews.123rf.com/images/richcat/richcat1112/richcat111200006/11479159-graphic-illustration-of-man-in-business-suit-as-user-icon-avatar.jpg' Name2='Name 2' branch2='CSE' photo3='https://previews.123rf.com/images/richcat/richcat1112/richcat111200006/11479159-graphic-illustration-of-man-in-business-suit-as-user-icon-avatar.jpg' Name3='Name 3' branch3='CSE' />} />
            <Route exact path={`/event3`} element={<Eventdesc imglink={img_3} name='Carpe Diem' descc="Our upcoming dual teamwork problem-solving event is the ultimate challenge for anyone looking to put their logical thinking skills to the test. With two-person teams working together to solve a series of challenging puzzles and problems, our event promises to be an exciting and engaging experience for all participants." rlink="https://docs.google.com/forms/d/e/1FAIpQLSdJk5_2DYHx0yJH8xGkX_KAlL8k2NDE-r8MsEG2Y21xLyocdw/viewform" photo1='https://previews.123rf.com/images/richcat/richcat1112/richcat111200006/11479159-graphic-illustration-of-man-in-business-suit-as-user-icon-avatar.jpg' Name1='Name' branch1='CSE' photo2='https://previews.123rf.com/images/richcat/richcat1112/richcat111200006/11479159-graphic-illustration-of-man-in-business-suit-as-user-icon-avatar.jpg' Name2='Name 2' branch2='CSE' photo3='https://previews.123rf.com/images/richcat/richcat1112/richcat111200006/11479159-graphic-illustration-of-man-in-business-suit-as-user-icon-avatar.jpg' Name3='Name 3' branch3='CSE' />} />
            <Route exact path={`/event4`} element={<Eventdesc imglink={img_4} name='Wield The Web' descc='Unleashing the Power of Web Development. Showcase your creativity and technical prowess in this exciting event by submitting your web development projects. Attend a Webinar on Git and GitHub then the very first round is a quiz round based on the topics HTML, CSS, JS, and git& GitHub And in the second round participants have to give submission of their link with their GitHub.' rlink="https://docs.google.com/forms/d/e/1FAIpQLSd0GxwSUgwoHnv-uC1iowFTghz4PEAcqqZsnVjNz9ZYG4-XCg/viewform" photo1='https://previews.123rf.com/images/richcat/richcat1112/richcat111200006/11479159-graphic-illustration-of-man-in-business-suit-as-user-icon-avatar.jpg' Name1='Name' branch1='CSE' photo2='https://previews.123rf.com/images/richcat/richcat1112/richcat111200006/11479159-graphic-illustration-of-man-in-business-suit-as-user-icon-avatar.jpg' Name2='Name 2' branch2='CSE' photo3='https://previews.123rf.com/images/richcat/richcat1112/richcat111200006/11479159-graphic-illustration-of-man-in-business-suit-as-user-icon-avatar.jpg' Name3='Name 3' branch3='CSE' />} />
            <Route exact path={`/event5`} element={<Eventdesc imglink={img_5} name='CTF' descc="We're thrilled to announce our upcoming Capture the Flag (CTF) event, where the best and brightest in cybersecurity will come together to showcase their skills, creativity, and strategic thinking. Our event will bring together talented hackers from around the world to compete in a variety of challenges, including cryptography, reverse engineering, web exploitation, and more." rlink="https://ctfmmmut.cf/register" photo1='https://previews.123rf.com/images/richcat/richcat1112/richcat111200006/11479159-graphic-illustration-of-man-in-business-suit-as-user-icon-avatar.jpg' Name1='Name' branch1='CSE' photo2='https://previews.123rf.com/images/richcat/richcat1112/richcat111200006/11479159-graphic-illustration-of-man-in-business-suit-as-user-icon-avatar.jpg' Name2='Name 2' branch2='CSE' photo3='https://previews.123rf.com/images/richcat/richcat1112/richcat111200006/11479159-graphic-illustration-of-man-in-business-suit-as-user-icon-avatar.jpg' Name3='Name 3' branch3='CSE' />} />
          </Routes>
        </Router>
        <Faq />
      </div>
      <Footer />
    </>
  );
}

export default App;
