import React from "react"
import {Heading} from "@/components/Heading.jsx"
import {DashboardNavbar, Sidenav} from "@/widgets/layout/index.js"
import micro from "../../../public/icons/main-icons/micro.svg"
import routes from "@/routes.jsx"

export function Settings() {

  const progressRange = {
    color: "progress-settings h-1.5 rounded-full",
    width: "w-[48px]"
  }

  return (
   <div className="flex">
     <Sidenav routes={routes} brandImg="/logo.png" />
     <div className="w-[825px] h-[650px]">
       <DashboardNavbar
         icon={micro}
         title={"ksy92"}
         color={progressRange.color}
         width={progressRange.width}
       />
       <div className="mt-12 mb-8 flex flex-col gap-12">
         <Heading heading="Настройки" />
       </div>
     </div>
   </div>
  );
}

export default Settings
