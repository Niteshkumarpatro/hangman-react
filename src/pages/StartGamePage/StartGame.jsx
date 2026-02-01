import TextInputFormContainer from "../../components/TextInputForm/TextInputFormContainer";
import { useNavigate } from "react-router-dom";

function StartGame() {
  const navigate = useNavigate(); // this created the navigator object

  function handleSubmit() {
    navigate("/play"); // navigate takes the route and moves us there
  }
  return (
    <div>
      <h1>Start Game</h1>

      <TextInputFormContainer onSubmit={handleSubmit} />
    </div>
  );
}
export default StartGame;
