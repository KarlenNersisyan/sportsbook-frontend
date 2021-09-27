import { useEffect } from "react";

function App() {
  useEffect(() => {
    fetch("https://sportsbook-task.herokuapp.com/products")
      .then((r) => r.json())
      .then((r) => console.log(r))
      .catch(console.log());
  }, []);

  return <div>Hi There!</div>;
}

export default App;
