import Top_Section from "./top_section";
import Bold from "./bold.png";
import Italics from "./italics.png";
import Strike_Through from "./Strike_through.png";
import Heading from "./heading.png";

const Left_create = () => {
  return (
    <>
      <div className="flex justify-between">
        <div className="text-gray-300 text-lg font-bold">Create a post</div>
        <div className="text-gray-300 text-md font-semibold flex mr-2">
          <p>Draft</p>
          <p className="bg-gray-400 w-4 pl-1 rounded-md text-black ml-1">0</p>
        </div>
      </div>
      <br />
      <hr className="border-gray-400" />
      <br />

      <div id="drop_down"></div>

      <div id="main_section">
        <Top_Section />
        <div className="bg-reddit_dark border border-gray-500 rounded-md">
          <form>
            <input
              type="text"
              placeholder="Title"
              className="border text-sm text-gray-400 p-2 w-full rounded-md border-gray-400 bg-neutral-800"
            ></input>
          </form>
          <div id="changable" className="bg-neutral-700">
            <div>
              <button>
                <img src={Bold} className="w-7 h-7 m-1" />
              </button>
              <button>
                <img src={Italics} className="w-5 h-5 m-1" />
              </button>
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-white m-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                  />
                </svg>
              </button>
              <button>
                <img src={Strike_Through} className="w-7 h-7 m-1" />
              </button>
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-6 h-6 text-white m-1"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.28 5.22a.75.75 0 010 1.06L2.56 10l3.72 3.72a.75.75 0 01-1.06 1.06L.97 10.53a.75.75 0 010-1.06l4.25-4.25a.75.75 0 011.06 0zm7.44 0a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06-1.06L17.44 10l-3.72-3.72a.75.75 0 010-1.06zM11.377 2.011a.75.75 0 01.612.867l-2.5 14.5a.75.75 0 01-1.478-.255l2.5-14.5a.75.75 0 01.866-.612z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-white m-1 ml-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                  />
                </svg>
              </button>
              <button>
                <img src={Heading} className="w-7 h-7 m-1" />
              </button>
            </div>
            <textarea
              className="w-full bg-reddit_dark p-2 text-gray-400 mb-0 h-56"
              placeholder="Text(Optional)"
            ></textarea>
          </div>
        </div>
        <div className="flex">
          <button className="flex border border-gray-500 rounded-full mx-2 px-4 py-1 my-2">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-gray-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </div>
            <p className="text-gray-500 font-bold">OC</p>
          </button>
          <button className="flex border border-gray-500 rounded-full mx-2 px-4 py-1 my-2">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-gray-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </div>
            <p className="text-gray-500 font-bold">OC</p>
          </button>
          <button className="flex border border-gray-300 rounded-full mx-2 px-4 py-1 my-2">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-gray-300"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </div>
            <p className="text-gray-300 font-bold">NSFW</p>
          </button>
          <button className="flex border border-gray-300 rounded-full mx-2 px-4 py-1 my-2">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-gray-300"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 6h.008v.008H6V6z"
                />
              </svg>
            </div>
            <p className="text-gray-300 font-bold ml-1">OC</p>
          </button>
        </div>
        <br />
        <hr className="border-gray-400" />
        <br />
        <div className="flex justify-end">
          <button className="flex border border-gray-300 rounded-full mx-2 px-4 py-1 my-1">
            <p className="text-gray-300 font-bold ml-1">Save Draft</p>
          </button>
          <button className="flex border border-gray-300 rounded-full mx-2 px-4 py-1 my-1 bg-gray-200">
            <p className="text-gray-500 font-bold ml-1">Post</p>
          </button>
        </div>
        <div>
          <form className="flex justify-start">
            <input type="checkbox" id="ck"></input>
            <label for="ck" className=" text-white ml-3">
              Send me post reply notifications
            </label>
          </form>
          <p className="text-blue-600">
            <a href="/">Connect accounts to share your post</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Left_create;
