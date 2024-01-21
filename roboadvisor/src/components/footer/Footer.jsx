import {
  FiLinkedin,
  FiTwitter,
  FiFacebook,
  FiInstagram,
  FiGithub,
  FiYoutube,
} from "react-icons/fi";
import { Logo } from '../utilies/Logo';
import { app, play } from '../../assets/image';

function Footer() {
  const year = new Date().getFullYear()
  return (
    <div className="app__footer">
      <div className="footer__main md:pt-[4rem] md:px-[97px] md:pb-[2rem] px-5 md:flex justify-between items-start bg-white ">
        <div className='main-one md:w-[33%] '>
          <Logo/>
          <p className="my-[16px] md:my-[3rem] leading-[1.7] text-[#667085] "> 
          You can do everything you need right in our app. But sometimes, it’s just easier to talk to a person. That’s why we have a gaggle of certified CPAs, CFAs, and CFPs standing by to answer your questions.
          </p>
        </div>
        <div className="flex flex-wrap justify-between gap-10">
        <ul className="text-[0.875rem]">
            <li className="footer__title text-gray-500 text-sm ">Product</li>
            <li className="pointer font-semibold pt-[1.4rem] ">Overview</li>
            <li className="pointer font-semibold pt-[1.4rem] ">Features</li>
            <li className="pointer font-semibold pt-[1.4rem] ">Solutions</li>
            <li className="pointer font-semibold pt-[1.4rem] ">Tutorials</li>
            <li className="pointer font-semibold pt-[1.4rem] ">Pricing</li>
        </ul>
        <ul className="text-[0.875rem]">
            <li className="footer__title text-gray-500 text-sm ">Company</li>
            <li className="pointer font-semibold pt-[1.4rem] ">About Us</li>
            <li className="pointer font-semibold pt-[1.4rem] ">Careers</li>
            <li className="pointer font-semibold pt-[1.4rem] ">Press</li>
            <li className="pointer font-semibold pt-[1.4rem] ">News</li>
            <li className="pointer font-semibold pt-[1.4rem] ">Contact</li>
        </ul>
        <ul className="text-[0.875rem]">
            <li className="footer__title text-gray-500 text-sm ">Resources</li>
            <li className="pointer font-semibold pt-[1.4rem] ">Blog</li>
            <li className="pointer font-semibold pt-[1.4rem] ">Events</li>
            <li className="pointer font-semibold pt-[1.4rem] ">Help Center</li>
            <li className="pointer font-semibold pt-[1.4rem] ">Tutorials</li>
            <li className="pointer font-semibold pt-[1.4rem] ">Support</li>
        </ul>
        <ul className="text-[0.875rem]">
            <li className="footer__title text-gray-500 text-sm ">Legal</li>
            <li className="pointer font-semibold pt-[1.4rem] ">Terms</li>
            <li className="pointer font-semibold pt-[1.4rem] ">Privacy</li>
            <li className="pointer font-semibold pt-[1.4rem] ">Cookies</li>
            <li className="pointer font-semibold pt-[1.4rem] ">Licencies</li>
            <li className="pointer font-semibold pt-[1.4rem] ">Contact</li>
        </ul>
        </div>
        <div className="app__logo flex flex-col gap-[1rem] pointer mt-7 md:mt-0">
            <p className="text-blue-600 font-semibold">Get the app</p>
            <img src={app} alt='app store' className="w-1/3 md:w-full"/>
            <img src={play} alt='app store' className="w-1/3 md:w-full"/>
        </div>
      </div>
      <div className="copyright md:flex justify-between py-[2rem]  px-[4rem] bg-[#f9fafb] ">
        <p className="text-[#667085] text-[0.875rem] ">© {year} Roboadvisor. All rights reserved.</p>
        <span className="socials flex items-center w-2/3 mx-auto gap-[1rem] ">
          <FiLinkedin className="outline-none text-gray-400"/>
          <FiTwitter className="outline-none text-gray-400"/>
          <FiFacebook className="outline-none text-gray-400"/>
          <FiInstagram className="outline-none text-gray-400"/>
          <FiGithub className="outline-none text-gray-400"/>
          <FiYoutube className="outline-none text-gray-400"/>
        </span>
      </div>
    </div>
  );
}

export default Footer;
