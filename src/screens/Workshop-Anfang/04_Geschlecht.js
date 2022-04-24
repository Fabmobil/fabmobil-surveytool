import DoubleColumnContainer from "../../components/DoubleColumnContainer";
import MultipleChoice from "../../components/MultipleChoice";
import FabTextInput from "../../components/FabTextInput";
import WeiterButton from "../../components/WeiterButton";
import RobiGif from "../../components/RobiGif";
import robiTastatur from "../../assets/robi-gifs/Robi_tastatur-min.gif";

const ANSWER_OPTIONS = ["divers", "weiblich", "männlich", "keine Angabe"];

function Screen() {
  return (
    <>
      <div style={{ marginBottom: "auto" }}>
        <p>Was hast du für ein Geschlecht?</p>
      </div>
      <DoubleColumnContainer style={{ marginBottom: 126 }}>
        <MultipleChoice options={ANSWER_OPTIONS} />
        <FabTextInput style={{ flex: 1 }} />
      </DoubleColumnContainer>
      <WeiterButton navigateTo="/losgehts/besuch" />
      <RobiGif src={robiTastatur} style={{ width: 180, right: 0, top: 145 }} />
    </>
  );
}

export default Screen;
