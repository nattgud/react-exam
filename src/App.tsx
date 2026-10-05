import './App.css'
import ErrorBoundary from "./ErrorBoundary.tsx";
import { Routes, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Nav from "./components/Nav"
import Home from "./pages/Home"
import Users from "./pages/Users"
import Statistics from "./pages/Statistics.tsx"
import UserPage from "./pages/UserPage"
import { UsersRound } from "lucide-react";

function App() {
  const { data: userList, isLoading, error } = useQuery({
    queryKey: ["userlist"],
    queryFn: async () => {
      const res = await fetch(
        "https://api-userapi.onrender.com/api/users/getUsers",
        {
          headers: {
            "x-api-key": "elev-hemlighet-2026"
          }
        }
      );
      return await res.json();
    },
    staleTime: (24*60*60*1000)/100
  });
  if (error) return <p>Error.</p>;

  return (
    <>
      <div className="bg-gray-800 h-dvh text-gray-300 grid grid-rows-[0.1fr_0.1fr_2fr]">
        <header className="py-2 px-2 text-3xl">
          <NavLink to="/"><h1 className="flex gap-2"><UsersRound size="40"></UsersRound>Adminpanel</h1></NavLink>
        </header>
        <ErrorBoundary>
	        <nav className="text-amber-400 p-2 flex justify-center gap-2 justify-items-center bg-gray-500">
            <Nav isLoading={isLoading||!userList}></Nav>
        	</nav>
        </ErrorBoundary>
        <ErrorBoundary>
          <main className="p-2">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/users" element={<Users userlist={userList} />} />
              <Route path="/stats" element={<Statistics userlist={userList} />} />
              <Route path="/user/:id" element={<UserPage userlist={userList} />} />
            </Routes>
          </main>
        </ErrorBoundary>
      </div>
    </>
  )
}

export default App
