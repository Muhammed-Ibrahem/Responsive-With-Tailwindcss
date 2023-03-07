import { useState } from "react";
import arrow from "../assets/icon-arrow.svg";
import Button from "../UI/Btn";
const txt =
  "Here are some of our FAQs. If you have any other questions you'd like answered please feel free to email us.";
const accordion = [
  {
    id: 1,
    text: "What is Bookmark?",
  },
  {
    id: 2,
    text: "How can I request a new browser?",
  },
  {
    id: 3,
    text: "Is there a mobile app?",
  },
  {
    id: 4,
    text: "What about other Chromium browsers?",
  },
];
const FAQ = () => {
  const [faq, setFaq] = useState("What is Bookmark?");
  return (
    <section className="container mx-auto flex flex-col items-center justify-center gap-8 py-36 px-4">
      <header className="space-y-4 p-4 text-center">
        <h2 className="text-3xl font-semibold capitalize text-veryDarkBlue">
          Frequently Asked Questions
        </h2>
        <p className="mx-auto max-w-[500px] leading-loose text-grayishBlue">
          {txt}
        </p>
      </header>

      <ul className="sm:5/6 w-full lg:w-1/2">
        {accordion.map((e) => {
          return (
            <li className="" key={e.id}>
              <div className="flex items-center justify-between gap-2 border-b py-4">
                <span>{e.text}</span>
                <img
                  onClick={() => {
                    if (e.text !== faq) {
                      setFaq(e.text);
                    } else {
                      setFaq("");
                    }
                  }}
                  className={`cursor-pointer ${
                    e.text === faq ? "rotate-180" : ""
                  }`}
                  src={arrow}
                  alt="Down Arrow Icon"
                />
              </div>
              <p
                className={` overflow-hidden text-grayishBlue transition-all ${
                  e.text === faq ? "h-[210px] sm:h-[133px] py-4" : "h-0"
                }`}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                iste adipisci repudiandae similique iusto ab illo inventore
                consectetur, autem ducimus sint porro laboriosam explicabo ut
                error libero quos est possimus.
              </p>
            </li>
          );
        })}
      </ul>
      <Button bgColor="bg-softBlue" txtColor="text-white">
        More Info
      </Button>
    </section>
  );
};

export default FAQ;
