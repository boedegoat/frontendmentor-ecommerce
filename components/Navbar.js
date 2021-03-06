import Link from 'next/link'
import Image from 'next/image'
import useToggle from 'hooks/useToggle'
import { CartIcon, HamburgerIcon, SneakersLogo, XIcon } from './Icons'
import useAppContext from 'hooks/useAppContext'
import Cart from './Cart'

export default function Navbar() {
  const [openMobileMenu, toggleOpenMobileMenu] = useToggle()
  const [openCart, toggleOpenCart] = useToggle()

  const { getTotalProductUnitInCart } = useAppContext()
  const totalProductUnit = getTotalProductUnitInCart() || null

  return (
    <nav className='sticky top-0 z-40 bg-white shadow-sm md:shadow-none'>
      <div className='wrapper'>
        <div className='md:border-b flex items-center py-6 md:p-0'>
          {/* Hamburger menu */}
          <button
            aria-label='Open mobile menu'
            className='center-child translate-y-[2px] md:hidden mr-4'
            onClick={toggleOpenMobileMenu}
          >
            <HamburgerIcon />
          </button>

          {/* App logo */}
          <Link href='#'>
            <a className='center-child'>
              <SneakersLogo />
            </a>
          </Link>

          <NavbarLinks
            openMobileMenu={openMobileMenu}
            toggleOpenMobileMenu={toggleOpenMobileMenu}
          />

          {/* Navbar right menu */}
          <div className='flex items-center ml-auto space-x-5'>
            <div className='md:relative'>
              <button
                aria-label='Add to cart'
                className='relative center-child'
                onClick={toggleOpenCart}
              >
                <CartIcon className='text-[#69707D]' />
                {totalProductUnit && (
                  <span className='absolute -top-2 -right-2 text-xs rounded-full bg-app-orange font-bold px-2 text-white'>
                    {totalProductUnit}
                  </span>
                )}
              </button>
              <Cart openCart={openCart} toggleOpenCart={toggleOpenCart} />
            </div>

            <Link href='#'>
              <a
                aria-label='Profile'
                className='center-child hover:ring hover:ring-app-orange rounded-full'
              >
                <Image
                  width={30}
                  height={30}
                  src='/images/image-avatar.png'
                  alt='Avatar image'
                />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

function NavbarLinks(props) {
  return (
    <div className='z-10'>
      <MobileNavbarOverlay {...props} />
      <div
        className={`
        flex flex-col md:flex-row items-start bg-white md:bg-transparent fixed md:static md:ml-5 top-0 left-0 w-2/3 md:w-full h-full
        transition-transform ease-out
        ${props.openMobileMenu ? 'translate-x-0' : '-translate-x-full'}
        md:transform-none md:transition-none
      `}
      >
        <button
          aria-label='Close mobile menu'
          className='center-child translate-y-[2px] md:hidden ml-6 mt-7 mb-12'
          onClick={props.toggleOpenMobileMenu}
        >
          <XIcon />
        </button>

        <Link href='#'>
          <a className='navbar__link'>Collections</a>
        </Link>
        <Link href='#'>
          <a className='navbar__link'>Men</a>
        </Link>
        <Link href='#'>
          <a className='navbar__link'>Women</a>
        </Link>
        <Link href='#'>
          <a className='navbar__link'>About</a>
        </Link>
        <Link href='#'>
          <a className='navbar__link'>Contact</a>
        </Link>
      </div>
    </div>
  )
}

function MobileNavbarOverlay(props) {
  return (
    <div
      className={`transition-opacity ${
        props.openMobileMenu ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {props.openMobileMenu && (
        <div
          className={`fixed inset-0 bg-black bg-opacity-75 ${
            props.openMobileMenu ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={props.toggleOpenMobileMenu}
        />
      )}
    </div>
  )
}
