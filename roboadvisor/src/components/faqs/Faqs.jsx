import { useState } from "react";
import { minuscircle, pluscircle } from "../../assets/icons";

function Faqs() {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }

    setSelected(i);
  };

  return (
    <div className="app__faqs md:flex justify-between py-[4rem] px-5 md:px-[97px]">
      <div className="faqs__one md:w-[40%] ">
        <p className="support text-blue-700 text-sm font-bold tracking-[0.99px] ">Support</p>
        <h1 className="faqs__header text-gray-800 text-4xl font-bold tracking-[-0.96px] my-[1rem] mx-0 ">FAQs</h1>
        <p className="faqs__txt leading-[2] text-[#667085] ">
          Everything you need to know about the product and billing. Can’t find
          the answer you’re looking for? Please chat to our friendly team.
        </p>
      </div>
      <div className="faqs__two md:w-[53%] ">
        {data.map((item, i) => {
          return (
            <div className={selected === i ? "item" : "faqs__box"} key={i}>
              <div>
                <h3 onClick={() => toggle(i)}>{item.question}</h3>
                <p className={selected === i ? "show" : "content"}>{item.answer}</p>
              </div>
              <div>
                <img onClick={() => toggle(i)} src={selected === i ? minuscircle : pluscircle} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Faqs;


const data = [
    {
      question: "How many participants can join a ClearLink video conference?",
      answer:
        "ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.",
    },
    {
      question: "Can I use ClearLink on multiple devices? ",
      answer:
        "ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.",
    },
    {
      question:
        "Is ClearLink compatible with other video conferencing platforms?",
      answer:
        "ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.",
    },
    {
      question:
        "How does ClearLink ensure the security of my video conferences?",
      answer:
        "ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.",
    },
    {
      question: "Do I need to download any software to use ClearLink? ",
      answer:
        "ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.",
    },
    {
      question: "What kind of customer support does ClearLink provide?",
      answer:
        "ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.",
    },
  ];