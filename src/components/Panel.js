import { useState, useEffect } from "react";
import smoothPianoKit from "../data/smoothPianoKit";
import heaterKit from "../data/heaterKit";

function Panel({
  power, setPower, kit, setKit, soundName, volume, setVolume
}) {

  const [displayText, setDisplayText] = useState('');

  function toggleKit() {
    if (kit[0].name === 'Heater-1') {
      setKit(smoothPianoKit);
      setDisplayText('Smooth Piano Kit');
    } else {
      setKit(heaterKit);
      setDisplayText('Heater Kit');
    }
  };

  function handleVolumeChange(event) {
    setVolume(event.target.value);
    [...document.getElementsByTagName('audio')]
      .forEach(audio => {audio.volume = volume});
    setDisplayText(`Volume: ${Math.round(volume * 101)}%`);
  };

  useEffect(() => {
    setDisplayText(soundName);
  }, [soundName]);

  return (
    <div className="panel">
      <i className={`fa-solid fa-power-off
          ${power ? 'toggle-on' : 'toggle-off'}`
      }
        onClick={() => { setPower(!power) }}
      ></i>
      <p>POWER</p>
      <p id="display">
        {power ? displayText : ''}
      </p>
      <input type="range"
        min="0" max="1"
        step="0.01"
        value={volume}
        onChange={power ? handleVolumeChange : null}
      />
      <i className={`fa-solid fa-arrow-right-arrow-left
        ${kit[0].name === 'Heater-1' ? 'drum-kit' : 'piano-kit'}`
      }
        onClick={power ? toggleKit : null}
      ></i>
      <p>BANK</p>
    </div>
  );

};

export default Panel;
