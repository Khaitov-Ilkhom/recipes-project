import { BiSearch } from "react-icons/bi"; 
import Container from "../container/Container"
import { Link } from "react-router-dom";
import { useState } from "react";



const Header = () => {

   const [searchTerm, setSearchTerm] = useState<string>("");

   const handleSearch = (e: React.FormEvent) => {
     e.preventDefault(); 
     console.log("Search term:", searchTerm);
   };

   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
     setSearchTerm(e.target.value); 
   };
  
  return (
      <div className="bg-gray-800">
        <Container>
          <div className="flex justify-between items-center py-4">
            <h2 className="text-3xl font-semibold text-white"><span className="text-gray-400">Recipes</span>
            </h2>
            <div className="flex gap-4 items-center pl-2 bg-[#ffffff1a] w-full max-w-[500px]">
              <form
                  onSubmit={handleSearch}
                  className="flex items-center gap-2 justify-between w-full"
              >
                <input
                    className="outline-none border-none bg-transparent w-full text-white placeholder-gray-400"
                    type="text"
                    placeholder="Search"
                    value={searchTerm}
                    onChange={handleChange}
                />
                <button
                    onClick={handleSearch}
                    type="button"
                    className="bg-gray-600 text-xl px-4 py-2 text-white hover:bg-gray-700 transition-colors"
                >
                  <BiSearch/>
                </button>
              </form>
            </div>
            <ul className="flex gap-6">
              <li className="text-lg border-b border-transparent text-white transition-transform hover:border-gray-400">
                <Link to="/">Home</Link>
              </li>
              <li className="text-lg border-b border-transparent text-white transition-transform hover:border-gray-400">
                <Link to="/">Explore</Link>
              </li>
              <li className="text-lg border-b border-transparent text-white transition-transform hover:border-gray-400">
                <Link to="/">Help</Link>
              </li>
            </ul>
          </div>
        </Container>
      </div>

  );
}

export default Header
