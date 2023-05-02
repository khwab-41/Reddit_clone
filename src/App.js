import Header from "./Header";
import SubHeader from "./subHeader";
import Sub_Create from "./Sub_Create";
import Post_slide from "./post_slide";
import Left_create from "./left_create";
import Right_create from "./right_create";

function App() {
  return (
    <>
      <Header />
      <SubHeader />
      <Sub_Create />
      <Post_slide />
      <Post_slide />
      <div id="post_create" className="mx-10 flex">
        <div className="w-full mr-5">
          <Left_create />
        </div>
        <div className="w-1/4 left-0">
          <Right_create />
        </div>
      </div>
    </>
  );
}

export default App;
