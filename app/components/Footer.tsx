import { Links } from "./Links"

export function Footer() {
  return (
    <footer className="relative bg-blueGray-200 pb-6 mt-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap text-left lg:text-left">
          <div className="w-full px-4">
            <h4 className=" text-xl md:text-3xl font-semibold text-prussianBlue text-center">
              Let's keep in touch!
            </h4>
            <Links className="mt-4" />
          </div>
        </div>
        <hr className="my-6 border-blueGray-300" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-blueGray-500 font-semibold py-1">
              Copyright © <span id="get-current-year">2024</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
