import './App.css';
import { useState } from 'react';
import PadBank from './components/PadBank';
import Panel from './components/Panel';
import heaterKit from './data/heaterKit';

function App() {

  const [power, setPower] = useState(true);
  const [kit, setKit] = useState(heaterKit);
  const [soundName, setSoundName] = useState('');
  const [volume, setVolume] = useState(0.7);

  return (
    <div id='drum-machine'>
      <PadBank
        power={power}
        kit={kit}
        setSoundName={setSoundName}
      />
      <Panel
        power={power}
        setPower={setPower}
        kit={kit}
        setKit={setKit}
        soundName={soundName}
        volume={volume}
        setVolume={setVolume}
      />
    </div>
  );

};

export default App;
