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
        <p className="text-sm md:leading-[2] text-[#667085] ">
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
      question: "This sounds complicated. I bet this is complicated, right?",
      answer:
        "What we do is complicated. What you do is really really not. Just answer a few questions, and we’ll build an investment portfolio with your name on it. Then, as soon as your money arrives, we invest it just like we said we would. Bada bing, etc.",
    },
    {
      question: "What if I don’t like your picks? Can I choose my own investments? ",
      answer:
        "Yup. You can customize your Wealthfront portfolio six ways to Sunday, both when you’re first opening a new account or at any point afterwards.",
    },
    {
      question:
        "Tax-loss what now?",
      answer:
        "Tax-Loss Harvesting. It’s a way to take advantage of changes in the market to help reduce your tax bill and give you more money to invest. For most clients, it generates savings worth at least 11 times our advisory fee, which means your tax savings more than pay for our fee.",
    },
    {
      question:
        "I love everything about this. How do I give you my money?",
      answer:
        "We make it easy! Electronic bank deposit, wire transfer or account transfer from your brokerage to roboadvisor",
    },
    {
      question: "But I’ve already got investments somewhere else.",
      answer:
        "Again, that’s not a question. But you don’t always need to sell your investments to move them. We make the transfer process free, simple, and tax-efficient.",
    },
    {
      question: "How is this different than investing in the S&P 500?",
      answer:
        "Investing in the S&P means only investing in US equities. Fortunately for us, the world is bigger than that. We use 10 global asset classes to diversify your investment and better weather anything the market throws at you.",
    },
  ];