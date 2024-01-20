import { useState } from 'react';

import { RxCaretRight } from 'react-icons/rx';

// import SubscribePopup from './SubscribePopup';
import { content } from '../../assets/image';

export default function SubscribeSection() {
//   const [isPopupOpen, setIsPopupOpen] = useState(false);
//   const openPopup = () => {
//     setIsPopupOpen(true);
//   };
//   const closePopup = () => {
//     setIsPopupOpen(false);
//   };
  const [email, setEmail] = useState('');
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setEmail('');
  };

  return (
    <main>
      <section className="relative mb-16 overflow-hidden">
        <img
          role="presentation"
          src={content}
          className="absolute aspect-video h-full w-full bg-current object-cover"
          alt="subscribe background image"
        />
        <div className="relative mx-auto max-w-xl place-items-center px-6 py-10 text-center">
          <h1 className="text-2xl font-extrabold leading-snug text-[#fff] lg:text-5xl">
            Never miss an Update
          </h1>
          <p className="mt-5 text-lg font-normal leading-tight text-[#fff] lg:text-2xl">
            Subscribe to our Newsletter
          </p>
          <form
            className="mt-4 flex flex-row items-center"
            onSubmit={handleFormSubmit}
          >
            <div className="mx-auto flex w-full flex-row items-center justify-center">
              <input
                type="email"
                className="w-[22rem] border-transparent py-1 focus:ring-0 lg:w-[50rem] lg:rounded lg:p-3"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </form>
          <div className="my-6 flex flex-wrap items-center justify-center gap-4">
            {buttonsData.map(({ label }, index) => {
              return (
                <>
                  <button
                    onClick={()=>{}}
                    key={index}
                    className={'btn gap-2  normal-case text-[14px] font-semibold leading-7 tracking-widest px-[24px] py-[7px] rounded-full bg-blue-700 shadow-md flex justify-center items-center text-white'}
                  >
                    {label}
                    <RxCaretRight className="h-6 w-6 inline" />
                  </button>
                </>
              );
            })}
          </div>
        </div>
      </section>
      {/* <SubscribePopup isOpen={isPopupOpen} onClose={closePopup} /> */}
    </main>
  );
}


const buttonsData = [
  {
    label: 'Subscribe',
  },
];
