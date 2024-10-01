import { X } from "lucide-react";
import { useState } from "react";

const TopBar = () => {
  const [hidden, setHidden] = useState(
    //() => localStorage.getItem("hidden-topbar") === "true"
    false
  );

  return (
    <div
      className={`text-sm py-2 bg-foreground text-background ${
        hidden ? "hidden" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto relative flex items-center justify-center font-semibold ">
        <p>Free shiping to the end of the month!</p>
        <div
          onClick={() => {
            setHidden(true);
            localStorage.setItem("hidden-topbar", "true");
          }}
          title="close"
          className="absolute right-5 xl:right-0 top-1/2 -translate-y-1/2 cursor-pointer"
        >
          <X className="size-5" />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
