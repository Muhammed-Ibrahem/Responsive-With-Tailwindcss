import HeroImg from "../assets/illustration-hero.svg";
import BlueBg from "../UI/BlueBg";
import Button from "../UI/Btn";

const Hero = () => {
  return (
    <section className="relative">
      <div className=" container mx-auto flex flex-col gap-16 space-y-8 py-12 lg:flex-row lg:items-center">
        <article className=" space-y-4 p-4 text-center lg:w-1/2 lg:text-left">
          <h1 className="text-3xl font-semibold capitalize text-veryDarkBlue">
            a simple bookmark manager
          </h1>
          <p className="mx-auto max-w-[500px] leading-loose text-grayishBlue lg:mx-0">
            A clean and simple interface to organize your favourite websites.
            Open a new browser tab and see your sites load instantly. Try it for
            free
          </p>
          <div className="flex justify-center gap-8 lg:justify-start">
            <Button bgColor="bg-softBlue" txtColor="text-white">
              Get it on Chrome
            </Button>
            <Button bgColor="bg-white" txtColor="text-grayishBlue">
              Get it on Firefox
            </Button>
          </div>
        </article>
        <article className="relative -order-1 py-4 lg:order-none lg:w-1/2">
          <img src={HeroImg} alt="HERO ILLUSTRATION IMG" />
          <BlueBg roundDir="rounded-l-full" stickySide="left-[10%]" />
        </article>
      </div>
    </section>
  );
};
export default Hero;
