import { Link, useNavigate } from "react-router-dom";

import * as Entry from "../pages/EntryPage";
import * as Feed from "../pages/FeedPage";
import { signOut } from "../services/Authenticator";

export function Navigation({ loggedIn }: { loggedIn: boolean }) {
  const navigate = useNavigate();

  const exit = async () => {
    await signOut();
    navigate(Entry.path);
  };

  return (
    <nav className="flex justify-between px-10 py-4 bg-[#A3C08A] items-center">
      {loggedIn && (
      <Link to={Feed.path}>
        <div className="text-[#444444] text-[32px] font-semibold font-Montserrat">
          Ивент-афиша
        </div>
      </Link>
      )}
      {loggedIn && (
        <div className="flex items-center">
          <button
            className="text-[25px] h-[45px] px-8 bg-[#739953] rounded-[20px] text-white font-semibold font-Montserrat"
            onClick={exit}
          >
            Выход
          </button>
        </div>
      )}
    </nav>
  );
}
