import Button from "../UI/Btn";
const Form = () => {
  return (
    <section className="space-y-8 bg-softBlue py-12 px-4 text-center text-white">
      <header>
        <p className="text-sm uppercase tracking-[0.3rem]">
          35,000+ already joined
        </p>
        <h2 className=" mx-auto mt-4 max-w-[350px] text-2xl font-semibold">
          Stay up-to-date with what we're doing
        </h2>
      </header>
      <form className="flex flex-col justify-center gap-4 md:flex-row">
        <input
          className="rounded p-3 md:py-2 md:px-4"
          type="email"
          name=""
          id=""
          placeholder="Enter you email address"
        />
        <Button bgColor="bg-softRed" txtColor="text-white" extra="px-6 py-2">
          Contact Us
        </Button>
      </form>
    </section>
  );
};

export default Form;
