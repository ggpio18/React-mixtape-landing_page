import Link from 'next/link'
import { FaHome, FaCompactDisc, FaMusic, FaTicketAlt, FaVideo, FaShoppingCart } from 'react-icons/fa'

const navItems = [
  { name: 'Home', icon: FaHome, path: '/' },
  { name: 'Album', icon: FaCompactDisc, path: '/album' },
  { name: 'Music', icon: FaMusic, path: '/music' },
  { name: 'Tour', icon: FaTicketAlt, path: '/tour' },
  { name: 'Video', icon: FaVideo, path: '/video' },
  { name: 'Shop', icon: FaShoppingCart, path: '/shop' },
]

const Sidebar = () => {
  return (
    <nav className="fixed left-0 top-0 h-full w-48 border-r bg-white p-4">
      <div className="mb-8">
        <h1 className="text-xl font-bold">mixtape.</h1>
      </div>
      <div className="space-y-4">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.path}
            className="flex items-center space-x-2 text-sm text-gray-600 hover:text-black"
          >
            <item.icon className="h-5 w-5" />
            <span>{item.name}</span>
          </Link>
        ))}
      </div>
    </nav>
  )
}

export default Sidebar

