import FabTextInput from "../../components/FabTextInput";
import WeiterButton from "../../components/WeiterButton";
import RobiGif from "../../components/RobiGif";
import robiLongarmtouch from "../../assets/robi-gifs/Robi_longarmtouch-min.gif";

function Screen({ data, onSubmit }) {
  return (
    <>
      <div>
        <p>Und wie lautet deine Postleitzahl?</p>
      </div>
      <div className="flex-vertical-center">
        <FabTextInput
          value={data}
          minLength="5"
          maxLength="5"
          pattern={/[0-9]{5}/}
          onChange={onSubmit}
        />
      </div>
      <WeiterButton navigateTo="/losgehts/geschlecht" />
      <RobiGif src={robiLongarmtouch} style={{ left: -100, bottom: 0 }} />
    </>
  );
}

export default Screen;
