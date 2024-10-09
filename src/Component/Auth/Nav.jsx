import  DarkSwitcher from "../DarkSwitcher"

export default function Nav() {
  return (
    <div className="flex flex-row px-10 py-5 md:py-10 justify-between">
      <img src="img/white-logo.svg" alt="" />
      {/* <DarkSwitcher /> */}
      <button className="bg-white px-4 text-sm dark:bg-gray-900 dark:text-gray-200  lg:px-10 rounded-full">
        Contact Support
      </button>
    </div>
  )
}
