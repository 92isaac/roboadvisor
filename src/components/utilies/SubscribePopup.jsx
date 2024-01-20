import { IoMdClose } from 'react-icons/io';

// eslint-disable-next-line react/prop-types
const SubscribePopup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className="text-accent bg-USAFPrimaryGrey fixed left-0 top-0 z-50 flex h-screen w-screen items-center justify-center p-10">
      <div className="bg-USAFPrimaryWhite animate-bounce-slow motion-safe relative flex w-full max-w-md flex-col rounded-xl p-4 font-serif">
        <button
          onClick={onClose}
          className="text-USAFPrimaryGreen absolute right-4 top-4  cursor-pointer text-xl"
        >
          <IoMdClose className="animate-zoomIn" />
        </button>
        <h2 className="text-USAFPrimaryGreen animate-bounce-slow mt-4 text-center text-lg sm:text-2xl md:text-3xl/loose">
          Thanks for your subscription! We appreciate your effort in helping the
          United Stated of Africa cultures a platform to spread awareness
        </h2>
      </div>
    </div>
  );
};

export default SubscribePopup;
