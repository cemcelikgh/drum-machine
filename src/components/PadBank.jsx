import Keycap from "./Keycap";

function PadBank({power, kit, setSoundName}) {

  return (
    <div id='pad-bank'>
      {kit.map(sound => (
        <Keycap
          key={sound.name}
          power={power}
          sound={sound}
          setSoundName={setSoundName}
        />
      ))}
    </div>
  );

};

export default PadBank;
