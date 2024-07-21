import { useEffect } from "react";

function Keycap({power, sound, setSoundName}) {

  function playSound(sound) {
    const track = document.getElementById(sound.key);
    track.currentTime = 0;
    track.play();
    setSoundName(sound.name);
    const btn = document.getElementById(`${sound.key}-btn`);
    btn.classList.add(`${sound.key.toLowerCase()}-key-color`);
    setTimeout(() => {
      btn.classList.remove(`${sound.key.toLowerCase()}-key-color`);
    }, 200);
  };

  useEffect(() => {
    document.addEventListener('keydown',
      (event) => {
        if (event.key.toUpperCase() === sound.key) {
          playSound(sound);
        }
      }
    )
  }, []);

  return (
    <button id={`${sound.key}-btn`}
      className="drum-pad russo-one-regular"
      onClick={() => {playSound(sound)}}
    >
      {power && (
        <audio id={sound.key}
          className="clip"
          src={sound.audio}
        ></audio>
      )}
      {!power && (
        <audio id={sound.key}
          className="clip"
          src={null}
        ></audio>
      )}
      {sound.key}
    </button>
  );
};

export default Keycap;
