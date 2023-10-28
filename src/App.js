import React, { useState } from 'react';
import ReactPlayer from 'react-player';



const trackUrl = [
  "https://cdns-preview-0.dzcdn.net/stream/c-0aaac8863ef0071300c0c99eb5aa8b5b-4.mp3",
  "https://cdns-preview-b.dzcdn.net/stream/c-bdab5f5d846a91f14a01b75731dbc22a-7.mp3",
  "https://cdns-preview-f.dzcdn.net/stream/c-fc31a3c3db5e7283e3a70528f67c89c2-8.mp3",
  "https://cdns-preview-d.dzcdn.net/stream/c-dcfd5c0a4659df56e3f4a54946f4ddf5-6.mp3",
  "https://cdns-preview-c.dzcdn.net/stream/c-cfece9cfaa89304e72c7f568693bbbf3-4.mp3",
  "https://cdns-preview-3.dzcdn.net/stream/c-317614ee96aeb76afc0a2c51a20cf6bc-7.mp3",
  "https://cdns-preview-8.dzcdn.net/stream/c-843ac7d08fe24a4a7d456d3379a2698d-4.mp3",
  "https://cdns-preview-8.dzcdn.net/stream/c-856ae1ac2818012c04721ba8ad9b8677-9.mp3",
  "https://cdns-preview-1.dzcdn.net/stream/c-1d15e99e80c80a19842211e157080e1f-8.mp3",
  "https://cdns-preview-6.dzcdn.net/stream/c-65c0e09286c83c8c7e1891379414afed-8.mp3",
  "https://cdns-preview-d.dzcdn.net/stream/c-dccbfd5489031f7f0640e833105cfa2b-8.mp3",
  "https://cdns-preview-8.dzcdn.net/stream/c-8bbf0b1167b44b72bd75c369835fabe5-4.mp3"
].sort(() => Math.random() - 0.5);

const trackOptions = ["--", ...[
  "Enter the Haggis: Donald, Where's Yer Troosers",
  "The Electric Light Orchestra: Mr. Blue Sky",
  "Queen: Bohemian Rhapsody",
  "Mike Oldfield:Tubular Bells",
  "Daft Punk: Get Lucky",
  "Lady Gaga: Poker Face",
  "Soundgarden: Blackhole Sun",
  "Aerosmith: Walk This Way",
  "David Bowie: Lady Grinning Soul",
  "The Orb: Fluffy Little Clouds",
  "The Sex Pistols: God Save the Queen",
  "Rick Astley: Never Gonna Give You Up"
].sort((a, b) => a>b ? 1 : -1)];

const TuneGuessingGame = () => {
  const [trackId, setTrackId] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const playTrack = (trackId) => {
    setTrackId(trackId);
    setIsPlaying(true);
  };



  return (
    <div>
      <h1>🎵🎶The super music playa game!🎵🎶</h1>
      <fieldset class="trackcontainer">
      <legend>Select the name of each track, below</legend>
        {trackUrl.map(
          (trackUrl, index) => {
            const thisTrackIsPlaying = index === trackId - 1;
            return <fieldset class={thisTrackIsPlaying ? "activeTrackfield": "trackfield" }>
                <button onClick={() => playTrack(index + 1)}>Mystery Track {index + 1} ▶ </button>
              <label>Select name of track {index}:</label>
              <select name="tune" id="select{index}">
                {trackOptions.map(track => <option>{track}</option>)}
              </select>
            </fieldset>;
          }
        )};

      </fieldset>

      <fieldset class="footerButtonFieldSet">
      <legend>Game controls:</legend>
        <button onClick={() => { setIsPlaying(false); playTrack(0)}}>Shhhh!</button>
        <button onClick={() => alert("Who knows? Logic not yet implemented!")}>Check Answers</button>
      </fieldset>

      {trackId!==0 && (
        <ReactPlayer
          url={trackUrl[trackId - 1]}
          playing={isPlaying}
          visible="false"
          loop="true"
        />
      )}

    </div>
  );
};

export default TuneGuessingGame;
