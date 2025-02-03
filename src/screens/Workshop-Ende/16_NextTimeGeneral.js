import { useNavigate } from "react-router-dom";
import FabTextArea from "../../components/FabTextArea";
import WeiterButton from "../../components/WeiterButton";
import RobiGifFlex from "../../components/RobiGifFlex";
import robiTastatur from "../../assets/robi-gifs/Robi_tastatur-min.gif";
import BackButton from "../../components/BackButton";

function Screen({ onSubmit, data }) {
  const navigate = useNavigate();

  return (
    <>
      <div className="question-and-back">
        <BackButton />
        <p>Was soll beim nächsten Mal anders sein?</p>
      </div>
      <RobiGifFlex src={robiTastatur} />
      <div className="flex-wrapper">
        <FabTextArea
          value={data}
          onChange={onSubmit}
          style={{ marginBottom: "auto" }}
        />
      </div>
      <WeiterButton navigateTo="/wiewars/iLiked" />
    </>
  );
}

export default Screen;
