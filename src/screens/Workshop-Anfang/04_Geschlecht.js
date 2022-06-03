import DoubleColumnContainer from "../../components/DoubleColumnContainer";
import MultipleChoiceTool from "../../components/MultipleChoiceTool";
import FabTextInput from "../../components/FabTextInput";
import WeiterButton from "../../components/WeiterButton";
import RobiGif from "../../components/RobiGif";
import robiTastatur from "../../assets/robi-gifs/Robi_tastatur-min.gif";

const ANSWER_OPTIONS = ["divers", "weiblich", "männlich", "keine Angabe"];

function changePredefinedValues(data, vals) {
  return { ...data, predefinedValues: vals };
}

function changeFreeValue(data, val) {
  return { ...data, freeValue: val };
}

function Screen({ data, onSubmit }) {
  console.log(data);
  return (
    <>
      <div style={{ marginBottom: 203 }}>
        <p>
          Was hast du für ein <br /> Geschlecht?
        </p>
      </div>
      <DoubleColumnContainer>
        <MultipleChoiceTool
          options={ANSWER_OPTIONS}
          data={(data && data.predefinedValues) || null}
          onChange={(vals) => onSubmit(changePredefinedValues(data, vals))}
        />
        <FabTextInput
          style={{ flex: 1 }}
          value={(data && data.freeValue) || null}
          onChange={(val) => onSubmit(changeFreeValue(data, val))}
        />
      </DoubleColumnContainer>

      <WeiterButton navigateTo="/losgehts/besuch" />
      <RobiGif
        src={robiTastatur}
        style={{ width: 256, height: 256, left: 128, top: 106 }}
      />
    </>
  );
}

export default Screen;
