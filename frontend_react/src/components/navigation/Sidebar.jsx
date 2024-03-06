import {
  HomeIcon,
  RssIcon,
  MagnifyingGlassIcon,
  BeakerIcon,
  CheckIcon 
} from '@heroicons/react/24/outline'
import { NavLink, useLocation } from 'react-router-dom'


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export const Sidebar = () => {

  const location = useLocation()

  const navigation = [
      { name: 'Home', href: '/home', icon: HomeIcon, current: location.pathname==='/home' ? true:false },
      { name: 'Empresa', href: '/empresa/list', icon: RssIcon, current: location.pathname==='/empresa/list' ? true:false },
      { name: 'Productos', href: '/productos', icon: BeakerIcon, current: location.pathname==='/productos' ? true:false },
      { name: 'Inventario', href: '/inventario', icon: CheckIcon, current: location.pathname==='/inventario' ? true:false },
      
  ]
  
  return (
    <div>
      {navigation.map((item) => (
        <NavLink
          key={item.name}
          to={item.href}
          className={classNames(
            item.current ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
            'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
          )}
        >
          <item.icon
            className={classNames(
              item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500',
              'mr-3 flex-shrink-0 h-6 w-6'
            )}
            aria-hidden="true"
          />
          {item.name}
        </NavLink>
      ))}
    </div>
  )
}
