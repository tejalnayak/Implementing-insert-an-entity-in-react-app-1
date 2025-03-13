import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Book Library</h1>
      <button onClick={() => navigate("/add-book")}>Add Book</button>
      {/* Book list rendering here */}
    </div>
  );
}

export default App;
