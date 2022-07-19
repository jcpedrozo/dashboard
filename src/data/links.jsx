import { ReactComponent as DashboardIcon } from '../assets/Iconos/Dashboard.svg'
import { ReactComponent as CalendarIcon } from '../assets/Iconos/Calendar.svg'
import { ReactComponent as CharactersIcon } from '../assets/Iconos/Characters.svg'
import { ReactComponent as ChatIcon } from '../assets/Iconos/Chat.svg'

const links = [
  {
    items: [
      {
        name: 'dashboard',
        icon: <DashboardIcon />,
      },
      {
        name: 'calendar',
        icon: <CalendarIcon />,
      },
      {
        name: 'characters',
        icon: <CharactersIcon />,
      },
      {
        name: 'chat',
        icon: <ChatIcon />,
      },
    ],
  },
]

export default links
