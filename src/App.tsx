import SideBar from "./components/SideBar";
import ContentContainer from "./components/ContentContainer"
function App() {
  return (
    <>
      <div className="flex">
        <SideBar />
        <ContentContainer />
      </div>
    </>
  );
}

export default App;
