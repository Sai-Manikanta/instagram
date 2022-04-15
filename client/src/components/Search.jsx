import { useState } from 'react'
import { BiSearch } from 'react-icons/bi'

const Search = () => {
    const [query, setQuery] = useState('');
    const [showSearchIcon, setShowSearchIcon] = useState(true);

    return(
        <div className="bg-gray-100 w-64 flex rounded-lg overflow-hidden">
            {showSearchIcon && <BiSearch className="text-gray-400 self-center grow-0 ml-2.5" size="1.3rem" />}
            <form className="grow">
                <input 
                  type="text" 
                  className="bg-gray-100 w-full py-1 px-2 focus:outline-none" 
                  placeholder="Search"
                  onChange={e => setQuery(e.target.value)}
                  onFocus={() => setShowSearchIcon(false)}
                  onBlur={() => setShowSearchIcon(true)}
                />
            </form>
            {!showSearchIcon && <button className="bg-gray-300 self-center mr-2 h-5 w-5 rounded-full text-xs flex justify-center items-center text-white border" onClick={() => setQuery('')}>x</button>}
        </div>
    )
}

export default Search