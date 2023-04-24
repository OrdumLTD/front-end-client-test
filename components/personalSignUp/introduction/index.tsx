interface Introduction {
    next: () => void;
}

const Introduction = ({next}: Introduction) => {
  return (
    <div className="mb-20 flex ">
      <div className="basis-6/12 flex flex-col gap-10">
        <form className="">
          <label>Team Name</label>
          <input
            className="mt-2 w-full text-sm bg-white placeholder:font-italitc border border-black rounded py-2 pl-2 pr-4 focus:outline-none"
            placeholder="What is the name of your team?"
            type="text"
          />
        </form>
        <form className="">
          <label>You are a ... </label>
          <input
            className="mt-2 w-full text-sm bg-white placeholder:font-italitc border border-black rounded py-2 pl-2 pr-4 focus:outline-none"
            placeholder="eg. front end architect, back end wiz, pixel pusher(designer)?"
            type="text"
          />
        </form>
        <form className="">
          <label>You are a ... </label>
          <input
            className="mt-2 w-full text-sm bg-white placeholder:font-italitc border border-black rounded py-2 pl-2 pr-4 focus:outline-none"
            placeholder="Sol gal/gropie, both?"
            type="text"
          />
        </form>
        <form className="">
          <label>About</label>
          <textarea
            className="mt-2 w-full text-sm bg-white placeholder:font-italitc border border-black rounded py-2 pl-2 pr-4 focus:outline-none resize-none min-h-[10rem]"
            placeholder="What's your thing?"
          />
        </form>

        <button className="bg-black text-white py-3" onClick={() => next()}>
          Next
        </button>
      </div>

      <div className="ml-20 mt-7">
        <form className="flex flex-col gap-5">
          <input
            className=" w-[rem-16] text-sm bg-white placeholder:font-italitc border border-black rounded py-2 pl-2 pr-4 focus:outline-none"
            placeholder="Email"
            type="text"
          />
          <input
            className=" w-[16rem] text-sm bg-white placeholder:font-italitc border border-black rounded py-2 pl-2 pr-4 focus:outline-none"
            placeholder="Discord"
            type="text"
          />
          <input
            className="mw-[16rem] text-sm bg-white placeholder:font-italitc border border-black rounded py-2 pl-2 pr-4 focus:outline-none"
            placeholder="Twitter"
            type="text"
          />
          <input
            className="mw-[16rem] text-sm bg-white placeholder:font-italitc border border-black rounded py-2 pl-2 pr-4 focus:outline-none"
            placeholder="Matix"
            type="text"
          />
          <input
            className="mw-[16rem] text-sm bg-white placeholder:font-italitc border border-black rounded py-2 pl-2 pr-4 focus:outline-none"
            placeholder="Website"
            type="text"
          />
          <input
            className="mw-[16rem] text-sm bg-white placeholder:font-italitc border border-black rounded py-2 pl-2 pr-4 focus:outline-none"
            placeholder="Github"
            type="text"
          />
        </form>
      </div>
    </div>
  );
};

export default Introduction;
