import { Routes, Route, BrowserRouter, Link, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
function App() {
  // const [count, setCount] = useState(0);
  // const [title, setTitle] = useState("Initial Value");
  // const [data , setData] = useState(null)

  // useEffect(() => {
  //   async function fetchUserData() {
  //     const url =
  //       "https://api.freeapi.app/api/v1/public/randomusers?page=1&limit=10";
  //     const options = {
  //       method: "GET",
  //       headers: { accept: "application/json" },
  //     };

  //     try {
  //       const response = await fetch(url, options);
  //       const data = await response.json();
  //       setData(data.data.data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }

  //   fetchUserData()
  // }, []);

  // const onValueChange = () => {
  //   setCount(count + 1);
  // };

  return (
    <BrowserRouter>
      <nav style={{ display: "flex", gap: "20px", padding: "10px" }}>
        <NavLink
          to="/"
          style={({ isActive }) => ({
            color: isActive ? "red" : "black",
          })}
        >
          Home
        </NavLink>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
