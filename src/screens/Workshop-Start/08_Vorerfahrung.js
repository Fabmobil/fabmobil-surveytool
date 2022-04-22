import WeiterButton from "../../components/WeiterButton";
import ClickablePicto from "../../components/ClickablePicto";
import pictoTiltbrush from "../../assets/pictograms/FM-Emoji_ohneRand1.png";
import pictoCalliope from "../../assets/pictograms/FM-Emoji_ohneRand20.png";
import pictoSculptgl from "../../assets/pictograms/FM-Emoji_ohneRand16.png";
import pictoBlender from "../../assets/pictograms/FM-Emoji_ohneRand18.png";
import pictoTinkercad from "../../assets/pictograms/FM-Emoji_ohneRand17.png";
import pictoArduino from "../../assets/pictograms/FM-Emoji_ohneRand24.png";
import pictoInkscape from "../../assets/pictograms/FM-Emoji_ohneRand19.png";

function Screen() {
  return (
    <>
      <div>
        <p>Welche Technologien hast du denn vor dem Kurs schon ausprobiert? </p>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flex: 1,
          position: "relative",
        }}
      >
        <div>
          <ClickablePicto src={pictoTiltbrush} />
          <ClickablePicto src={pictoCalliope} />
          <ClickablePicto src={pictoSculptgl} />
        </div>
        <div>
          <ClickablePicto src={pictoBlender} />
          <ClickablePicto src={pictoTinkercad} />
        </div>
        <div>
          <ClickablePicto src={pictoArduino} />
          <ClickablePicto src={pictoInkscape} />
        </div>
      </div>

      <WeiterButton navigateTo="/losgehts/anzahl-tage" />
    </>
  );
}

export default Screen;
