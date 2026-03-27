import { useState } from "react";
import Navbar from "../components/Navbar";
import { generateIdea } from "../utils/api";

export default function Home() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleGenerate = async () => {
    const res = await generateIdea(input);
    setResult(res.output);
  };

  return (
    <div>
      <Navbar />
      <div style={{ padding: "2rem" }}>
        <h1>🚀 Onframe AI Builder</h1>

        <input
          type="text"
          placeholder="Enter product idea..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button onClick={handleGenerate}>Generate</button>

        <p>{result}</p>
      </div>
    </div>
  );
}
