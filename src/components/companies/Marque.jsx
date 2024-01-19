import Marquee from "react-fast-marquee";

// eslint-disable-next-line react/prop-types
export const Marque = () => {
  return (
    <>

      <Marquee autoFill={true} pauseOnHover={true}>
        {marqdata.map((item) => (
          <div key={item.id} className=" w-36 mx-10">
            <img src={item.image} alt="" className="object-cover w-full px-4 py-2" />
            <small className="block text-xs">{item.text}</small>
          </div>
        ))}
      </Marquee>
    </>
  );
};

const marqdata = [
  {
    id: "1",
    image: "https://www.wealthfront.com/next/contenthash/next/svg/optimized/nerdwallet.contenthash.91486057718363f6a3d741326df4b30d418430e2.svg",
    text:"Best Robo-advisor, Portfolio Options, 2023 1",
  },
  {
    id: "2",
    image: "https://www.wealthfront.com/next/contenthash/next/svg/optimized/investopedia.contenthash.cf25078cb7ce013008895c9476ff5a105e96c5c2.svg",
    text:"Best Robo-advisor, Portfolio Options, 2023 1",
  },
  {
    id: "3",
    image: "https://th.bing.com/th/id/R.b6c308ba8ef442bdf593f79612e1643e?rik=EewsF%2bAiVPhK%2bg&pid=ImgRaw&r=0",
    text:"Best Robo-advisor, Portfolio Options, 2023 1",
  },
  {
    id: "4",
    image: "https://th.bing.com/th/id/OIP.2CXU3XaJSABlHSRM_9J-qgHaEK?rs=1&pid=ImgDetMain",
    text:"Best Robo-advisor, Portfolio Options, 2023 1",
  },
];
