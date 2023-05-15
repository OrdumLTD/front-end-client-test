import SearchIcon from "@/assets/svg-icons/search-icon.svg";
import Image from "next/image"

function SearchBar() {
  return (
    <div className="xl:w-80 -mt-1">
      <form>
        <label className="relative block">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <Image src={SearchIcon} alt="Search lense" />
          </span>
          <input
            className="w-full bg-white placeholder:font-italitc border border-black rounded-full py-2 pl-10 pr-4 focus:outline-none"
            placeholder="Search for grants"
            type="text"
          />
        </label>
      </form>
    </div>
  );
}

export default SearchBar;
