

const Right_create = () => {
    return (
      <>
        <div id="outer">
          <div className="bg-neutral-300 text-black font-serif h-9 rounded-md flex justify-center">
            <p className="text-xl font-bold mt-1">r/Paint</p>
          </div>
          <div className="bg-reddit_dark p-4">
            <div className="flex justify-start">
              <div className="h-12 w-12 rounded-full relative">
                <img
                  className="rounded-full"
                  src="https://static.vecteezy.com/system/resources/previews/007/636/271/original/planet-logo-icon-design-template-free-vector.jpg"
                />
              </div>
              <p className="text-gray-200 ml-3 mt-2">r/paint</p>
            </div>
            <div>
              <p className="text-gray-200 mt-3">
                A forum oriented towards trades-oriented painting & finishing
                techniques, products and support. We welcome questions from the
                public as well! Having trouble painting your house or hoping to
                research a little? We're happy to help! There's no such thing as
                a stupid question in r/paint. For art related questions please
                see r/art
              </p>
            </div>
            <div className="flex mt-4">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8 text-gray-200"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75"
                  />
                </svg>
              </div>
              <p className="text-gray-400 ml-2 mt-1">Created May 2, 2023</p>
            </div>
            <hr className="border-gray-500 my-4" />
            <div className="flex justify-evenly">
              <div>
                <p className="text-xl font-bold text-gray-100">11.2 k</p>
                <p className="text-gray-500 text-sm">Members</p>
              </div>
              <div>
                <p className="text-xl font-bold text-gray-100">36</p>
                <p className="text-gray-500 text-sm">Online</p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default Right_create;