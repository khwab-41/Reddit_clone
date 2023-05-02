const SubHeader = () => {
    return (
      <>
        <div
          className="h-32 bg-cover"
          style={{
            backgroundImage: 'url("https://i.redd.it/v5yx1brb2er01.png")',
          }}
        ></div>
        <div className="bg-reddit_dark h-20">
          <div className="mx-4 relative flex">
            <div className="h-24 w-24 rounded-full oerflow-hidden relative -top-8">
              <img
                className="rounded-full"
                src="https://static.vecteezy.com/system/resources/previews/007/636/271/original/planet-logo-icon-design-template-free-vector.jpg"
              />
            </div>
            <div className="pt-2 pl-4">
              <h1 className="text-gray-200 text-3xl">Reddit Clone: by Khwab</h1>
              <h2 className="text-gray-500 ">Hello</h2>
            </div>
            <button className="bg-white ml-7 h-10 mt-4 w-28 font-semibold rounded-3xl">
              Join
            </button>
          </div>
        </div>
      </>
    );
}

export default SubHeader;