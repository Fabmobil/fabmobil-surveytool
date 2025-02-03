import DoubleColumnContainer from "../../components/DoubleColumnContainer";
import SingleChoiceTool from "../../components/SingleChoiceTool";
import RobiGifFlex from "../../components/RobiGifFlex";
import robiTastatur from "../../assets/robi-gifs/Robi_tastatur-min.gif";
import BackButton from "../../components/BackButton";
import { useNavigate } from "react-router-dom";

const ANSWER_OPTIONS = ["divers", "weiblich", "männlich", "keine Angabe"];
const nextRoute = "/losgehts/besuch"
function changePredefinedValues(data, vals) {
  return { ...data, predefinedValues: vals };
}

function Screen({ data, onSubmit }) {
  const navigate = useNavigate();
  
  return (
    <>
      <div className="question-and-back" style={{ marginBottom: 0 }}>
        <BackButton />
        <p>
          Was hast du für ein <br /> Geschlecht?
        </p>
      </div>
      <RobiGifFlex src={robiTastatur} style={{ marginTop: -52 }} />
      <DoubleColumnContainer>
        <SingleChoiceTool
          options={ANSWER_OPTIONS}
          answer={data}
          onSelect={(value) => {
            onSubmit(value);
            setTimeout(() => navigate(nextRoute), 500);
          }}
        />
      </DoubleColumnContainer>
    </>
  );
}

export default Screen;
