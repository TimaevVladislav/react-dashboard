import React from "react"
import {Tables} from "@/components/Tables.jsx"
import {CardRefferral, CardStatistics} from "@/components/CardRefferral.jsx"
import {DashboardNavbar, Sidenav} from "@/widgets/layout/index.js"

import free from "/public/icons/main-icons/free.svg"
import routes from "@/routes.jsx"

const Pagination = () => null

export function Refferral() {

  const progressRange = {
    color: "progress-refferral h-1.5 rounded-full",
    width: "w-[82px]"
  }

  return (
    <div className="flex">
      <Sidenav routes={routes} brandImg="/logo.png" />
      <div className="w-[825px] h-[650px]">
        <DashboardNavbar
          icon={free}
          title={"ksy92"}
          color={progressRange.color}
          width={progressRange.width}
        />
        <div className="mx-auto my-20 flex max-w-screen-lg flex-col gap-8">
          <div>
            <div className="flex justify-between">
              <CardRefferral />
              <CardStatistics />
            </div>
          </div>
          <Tables date="12.05.2023" email="accteam@mail.ru" price="$5454" />
        </div>
      </div>
    </div>
  );
}

export default Refferral
