import axios from "axios";
import { useState } from "react";
import copy from "clipboard-copy";

export default function Home() {
  const [keyword, setKeyword] = useState('travel');
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState(null);

  const getHashtags = async () => {
    try {
      setLoading(true);
      const res = await axios.get("api/generate/", {
        params: { keyword },
      });
      setResponse(res.data.data.hashtags);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  const copyToClipboard = (hashtag, index) => {
    copy(hashtag);
    setCopiedIndex(index);

    // Reset the copied indicator after a short delay
    setTimeout(() => {
      setCopiedIndex(null);
    }, 1000);
  };

  return (
    <div className="flex flex-col md:px-12 px-4 bg-background font-poppins items-center min-h-screen">
      <h1 className="md:text-6xl text-4xl font-bold text-center text-active mt-10">
        Hashtag Generator
      </h1>
      <h2 className="text-primary text-center text-2xl font-light mt-6" style={{ color: "#001F3F" }}>
        Get the best hashtags for your content.
      </h2>

      <form
        className="sm:mx-auto mt-20 justify-center w-full sm:flex"
        onSubmit={(e) => {
          getHashtags();
          e.preventDefault();
          e.stopPropagation();
        }}
      >
        <input
          type="text"
          className="sm:w-1/3 w-full rounded-lg px-5 py-3 text-background font-bold text-lg focus:outline-none focus:ring-2 focus:ring-active"
          placeholder="Enter your keyword eg: travel"
          onChange={(e) => {
            setKeyword(e.target.value);
            setResponse(null);
          }}
          style={{ color: "black" }}
        />

        <div className="mt-4 sm:mt-0 sm:ml-3">
          <button
            className="w-full rounded-lg px-5 py-3 bg-active font-bold text-lg text-background hover:bg-primary sm:px-10"
            type="submit"
          >
            {loading ? (
              <span className="animate-pulse">Loading..</span>
            ) : (
              <>Generate</>
            )}
          </button>
        </div>
      </form>
      {response && (
  <div className="mt-10">
    <p className="grid sm:grid-cols-4 grid-cols-1 sm:gap-5 gap-1 p-6 bg-primary rounded-lg">
      {response.slice(0, 20).map((item, index) => (
        <span
          key={item.relevance}
          onClick={() => copyToClipboard(item.hashtag, index)}
          className={`hashtag-item ${index === copiedIndex ? "copied" : ""}`}
        >
          <span className="font-bold">{index + 1}</span>
          <span>#</span>
          {item.hashtag}
        </span>
      ))}
    </p>
  </div>
)}

      <style jsx>{`
        .hashtag-item {
          position: relative;
          cursor: pointer;
          margin-bottom: 0.5em; /* Add margin between each hashtag item */
        }

        .copied {
          animation: copiedAnimation 1s;
        }

        @keyframes copiedAnimation {
          0% {
            background-color:  #ADD8E6; /* Light green */
          }
          100% {
            background-color: #ffffff; /* White */
          }
        }


      `}</style>
    </div>
  );
}
