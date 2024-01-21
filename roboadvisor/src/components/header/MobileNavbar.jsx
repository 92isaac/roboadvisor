/* eslint-disable react/prop-types */
import { CiGrid31 } from 'react-icons/ci'
import { FaUsers, FaTasks, } from 'react-icons/fa'
import { GrScheduleNew } from 'react-icons/gr'
import { MdPayment } from 'react-icons/md'
import { AiOutlineMessage } from 'react-icons/ai'
import { TbReport } from 'react-icons/tb'
import { IoMdArrowDropdown } from "react-icons/io";
import { Logo } from '../utilies/Logo'

export const MobileNavbar = ({handleChange}) => {
 

  return (
    <nav className='z-50 absolute bg-blue-50 min-h-screen transform transition-transform px-6 py-3 duration-300 ease-in-out '>
    <div className="flex pb-10 pt-7">
       <Logo />
    </div>
<ul>
    <li className='text-lg mb-8'>
        <a href='#' className='pl-3 text-sm' onClick={handleChange}> <CiGrid31  className="text-lg mr-4 inline-block" />                 Cash
</a>
    </li>
    <li className='text-lg mb-8'>
        <a href='#' className='pl-3 text-sm' onClick={handleChange}> <FaUsers  className="text-lg mr-4 inline-block" /> Bond</a>
    </li>
    <li className='text-lg mb-8'>
        <a href='/workspace/schedule-appointment' className='pl-3 text-sm' onClick={handleChange}> <GrScheduleNew  className="text-lg mr-4 inline-block" /> Automated Investing</a>
    </li>
    <li className='text-lg mb-8'>
        <a href='/workspace/payment' className='pl-3 text-sm' onClick={handleChange}> <MdPayment  className="text-lg mr-4 inline-block" /> Stocks</a>
    </li>
    <li className='text-lg mb-8'>
        <a href='/workspace/task' className='pl-3 text-sm' onClick={handleChange}> <FaTasks  className="text-lg mr-4 inline-block" /> Learn</a>
    </li>
    <li className='text-lg mb-8'>
        <a href='/workspace/messages' className='pl-3 text-sm' onClick={handleChange}> <AiOutlineMessage  className="text-lg mr-4 inline-block" /> Pricing</a>
    </li>
    <li className="text-lg mb-8">
        <div className="pl-3 text-sm">
          <TbReport className="text-2xl mr-4 inline-block" /> Sign up for Free{" "}
            <IoMdArrowDropdown className="inline-block ml-28" />
        </div>
      </li>
    
</ul>
</nav>
  )
}
