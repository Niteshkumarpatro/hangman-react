import PlayGame from "./pages/PlayGamePage/PlayGame";
import StartGame from "./pages/StartGamePage/StartGame";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    // <div>
    //   <h1 className="text-3xl font-bold">Welcome To HangMan</h1>
    //   <TextInputFormContainer onSubmit={(value) => console.log("value coming from the hidden form is", value)
    //   } />
    // </div>


    <>
    <div>Navbar</div>
      <Routes>
        <Route path="/play" element={<PlayGame />} />
        <Route path="/start" element={<StartGame />} />
        <Route path="*" element={<div>Page not found</div>} />
      </Routes>
    </>

  );
}
export default App;
