import { useState } from 'react';
import axios from 'axios';

const PredictForm = () => {
  const [length, setLength] = useState(0);
  const [followers, setFollowers] = useState(0);
  const [totalLikes, setTotalLikes] = useState(0);
  const [totalVideos, setTotalVideos] = useState(0);
  const [daysSinceDebut, setDaysSinceDebut] = useState(0);
  const [prediction, setPrediction] = useState(null);

  const handlePrediction = async () => {
    try {
      const response = await axios.post("https://heonhiteng-predict-tiktok.hf.space/--replicas/a88g4/", {
        inputs: [length, followers, totalLikes, totalVideos, daysSinceDebut],
      });

      setPrediction(response.data);
    } catch (error) {
      console.error('Prediction error:', error);
    }
  };

  return (
    <div>
      <h2>Gradio API Prediction</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handlePrediction();
        }}
      >
        <label>
          Length:
          <input type="number" value={length} onChange={(e) => setLength(e.target.valueAsNumber)} />
        </label>
        <br />
        <label>
          Followers:
          <input type="number" value={followers} onChange={(e) => setFollowers(e.target.valueAsNumber)} />
        </label>
        <br />
        <label>
          Total Likes:
          <input type="number" value={totalLikes} onChange={(e) => setTotalLikes(e.target.valueAsNumber)} />
        </label>
        <br />
        <label>
          Total Videos:
          <input type="number" value={totalVideos} onChange={(e) => setTotalVideos(e.target.valueAsNumber)} />
        </label>
        <br />
        <label>
          Days Since Debut:
          <input type="number" value={daysSinceDebut} onChange={(e) => setDaysSinceDebut(e.target.valueAsNumber)} />
        </label>
        <br />
        <button type="submit">Predict</button>
      </form>
      {prediction && (
        <div>
          <h3>Prediction Result:</h3>
          <pre>{JSON.stringify(prediction, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};


export default PredictForm;

