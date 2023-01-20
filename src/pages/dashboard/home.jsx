import React from "react"
import {Heading} from "@/components/Heading.jsx"
import {TableHome} from "@/components/Table.jsx"
import {DashboardNavbar} from "@/widgets/layout/index.js"

import middle from "/public/icons/main-icons/middle.svg"

const TableFields = () => (
  <tbody className="font-bold text-[#919EAB]">
  <tr className="border-b border-[#242937]">
    <td className="px-6 py-4 whitespace-nowrap text-sm">
      Тариф
    </td>
    <td className="text-sm whitespace-nowrap text-[#15A655]">
      Base
      <button type="button" className="button-custom text-white bg-[#15A655] hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-1  text-sm px-6 py-1 ml-[22px] text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2">
        Купить
      </button>
    </td>
  </tr>
  <tr className="border-b border-[#242937]">
    <td className="px-6 py-4 whitespace-nowrap text-sm ">
      Пользователи
    </td>
    <td className="text-sm whitespace-nowrap">
      1/2
      <button type="button" className="button-custom text-white bg-[#15A655] hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-1 text-sm px-4 py-1 ml-[30px] text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2">
        Добавить
      </button>
    </td>
  </tr>
  <tr className="border-b border-[#242937]">
    <td className="pl-6 py-4 whitespace-nowrap text-sm">
      Количество команд
    </td>
    <td className="text-sm py-4 whitespace-nowrap">
      2
    </td>
  </tr>
  <tr className="border-b border-[#242937]">
    <td className="pl-6 py-4 whitespace-nowrap text-sm">
      Окончания лицензии
    </td>
    <td className="text-sm py-4 whitespace-nowrap">
      02.03.2023
    </td>
  </tr>
  </tbody>
)

const HomeTable = () => {
  return (

    <div className="flex flex-col border-0">
      <div className="overflow-x-auto">
        <div className="py-2 inline-block">
            <table className="rounded-[7px] font-bold" >
             <thead className="text-white bg-[#21283B] rounded-md">
              <tr>
                <td className="px-6 py-4 text-sm">
                  Аккаунт
                </td>
                <td className="text-sm py-4">
                  accteam@mail.ru
                </td>
              </tr>
              </thead>
              <TableFields />
            </table>
        </div>
      </div>
    </div>
  )
}


export function Home() {
  return (
    <>
      <DashboardNavbar icon={middle} />
      <div className="mt-12">
        <Heading heading="Обзор" />
        <div className="rounded-[7px]">
          <TableHome account="Аккаунт" email="accteam@mail.ru" />
        </div>
        <div className="mb-4 grid grid-cols-1 gap-6 xl:grid-cols-3">

        </div>
      </div>
    </>
  );
}

export default Home;