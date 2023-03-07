import Button from "../UI/Btn";
import dots from "../assets/bg-dots.svg";
const Card = ({ img, browser, version, extra }) => {
  return (
    <article
      className={`flex flex-col items-center gap-4 rounded-xl px-4 py-8 shadow-xl ${extra}`}
    >
      <img src={img} alt="" />
      <h3 className="text-veryDarkBlue">Add to {browser}</h3>
      <p className="text-sm text-grayishBlue">Minimum version {version}</p>
      <img src={dots} alt="" />
      <Button bgColor="bg-softBlue" txtColor="text-white">
        Add & Install Extension
      </Button>
    </article>
  );
};

export default Card;
