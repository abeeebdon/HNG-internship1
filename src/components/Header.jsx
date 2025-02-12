import { FaLongArrowAltRight } from 'react-icons/fa'
const Header = () => {
  return (
    <header className="border border-[#197686] rounded-3xl px-4 py-3">
      <section className="flex items-center justify-between">
        {/* Header name and logo */}
        <div className="flex items-center gap-4">
          <img src="/assets/logo.svg" alt="logo" />
          <img src="/assets/ticz.svg" alt="logo" />
        </div>
        {/* Navigation  */}

        <ul className="hidden sm:flex items-center gap-4 lg:gap-6 text-[#B3B3B3] text-[18px]">
          <li>Events</li>
          <li>My Tickets</li>
          <li>About Project</li>
        </ul>

        {/* my ticket btn  */}
        <div className="flex items-center gap-2 bg-white hover:bg-amber-50 cursor-pointer px-6 py-4 rounded-xl">
          <button>MY TICKETS</button>
          <FaLongArrowAltRight />
        </div>
      </section>
    </header>
  )
}

export default Header
