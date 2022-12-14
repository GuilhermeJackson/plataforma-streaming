import { useState } from "react";
import { List, X } from "phosphor-react";
import { Sidebar } from "./Sidebar";
import { Logo } from "./Logo";

export function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <header className="justify-around w-full py-5 flex items-center xl:justify-center bg-gray-700 border-b border-gray-600">
      <Logo />
      <div className="xl:hidden">
        {toggleMenu ? (
          <div>
            <X
              size={30}
              color="#81D8F7"
              className="cursor-pointer hover:bg-gray-500 rounded transition-all"
              onClick={() => setToggleMenu(false)}
            ></X>
            <div
              className="z-[100] xl:hidden fixed top-[4.6875rem] right-0 w-full h-full bg-gray-700
        translate-x-0 transition-all duration-500 ease-in-out"
            >
              <nav className="flex flex-col w-full">
                <Sidebar />
              </nav>
            </div>
          </div>
        ) : (
          <div>
            <List
              size={30}
              color="#81D8F7"
              className="cursor-pointer hover:bg-gray-500 rounded transition-all"
              onClick={() => setToggleMenu(true)}
            />
            <div className="z-[100] xl:hidden fixed top-[4.6875rem] right-0 w-full h-full bg-gray-700 translate-x-full transition-all duration-500 ease-in-out">
              <nav className="flex flex-col w-full">
                <Sidebar />
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
