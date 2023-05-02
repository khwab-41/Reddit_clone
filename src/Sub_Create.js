import Avatar from "./avatar.png";

const Sub_Create = () => {
  return (
    <>
      <div className="bg-black p-4">
        <div className="bg-reddit_dark flex mx-4 px-4 rounded-md border border-gray-700">
          <div className="rounded-full overflow-hidden mt-3">
            <img src={Avatar} className="h-8 w-8 rounded-full bg-slate-400" />
          </div>
          <form className="w-full mr-3">
            <input
              type="text"
              className="rounded-md h-8 m-3 p-2 text-sm w-full bg-neutral-700 text-white focus: outline-none"
              placeholder="New Post"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default Sub_Create;
