// import { Marque } from "./Marque"

import { Countup } from "./Countup";
import { Marque } from "./Marque";

export const Company = () => {
  return (
    <div>
      <div className="w-full mb-[20px] text-center text-sm font-normal mt-64 md:mt-0">
        Join 1,500+ users already trading the roboadvisor way
      </div>
      <Countup />
      <Marque />
    </div>
  );
};
