'use client'

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { BsMoonStarsFill } from "react-icons/bs";
import { MdSunny } from "react-icons/md";

function ThemeToggler() {

  const { theme, setTheme } = useTheme()
  const systemTheme = 'system';
  const currentTheme = theme === 'system' ? systemTheme : theme;
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  
  return (

    <div className="flex flex-col items-center ">
      <div className="h-8 w-8 text-xl font-bold	">
        {currentTheme === 'dark' ? (
          <button
            className="text-link-text rounded-md p-2 hover:bg-background-1/30 hover:transition duration-500	"
            onClick={() => setTheme('light')}
          >
            {' '}
            <MdSunny />

          </button>
        ) : (
          <button
          className="text-link-text rounded-md p-2 hover:bg-background-1/30 hover:transition duration-500"
          onClick={() => setTheme('dark')}
        >
          {' '}
          <BsMoonStarsFill />
          </button>
        )}
      </div>
    </div>
  
  )
}

export default ThemeToggler
