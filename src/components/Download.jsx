import Card from "../UI/Card";
import chrome from "../assets/logo-chrome.svg";
import firefox from "../assets/logo-firefox.svg";
import opera from "../assets/logo-opera.svg";
const Download = () => {
  return (
    <section className="container mx-auto py-16 px-4">
      <header className="space-y-4 p-4 text-center">
        <h2 className="text-2xl font-semibold capitalize text-veryDarkBlue">
          Download the extension
        </h2>
        <p className="mx-auto max-w-[600px] leading-loose text-grayishBlue">
          We've got more browsers in the pipline. Please do let us know if
          you've got a favourite you'd like us to prioritize
        </p>
      </header>

      <section className="grid justify-center gap-4 md:min-h-[1000px] md:grid-cols-3">
        <Card
          img={chrome}
          version={62}
          browser="Chrome"
          extra="self-start md:sticky md:top-1"
        />
        <Card
          img={firefox}
          version={55}
          browser="Firefox"
          extra="self-center md:sticky md:top-1"
        />
        <Card img={opera} version={46} browser="Opera" extra="self-end" />
      </section>
    </section>
  );
};

export default Download;
