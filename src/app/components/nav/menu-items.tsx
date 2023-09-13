import { colors } from '@/common/colors';
import {
  DocumentsIcon,
  SearchIcon,
  SettingsIcon,
  TransfersIcon,
  UserIcon,
} from '@/common/icons';

export const menuItems = [
  {
    id: 1,
    name: 'Search',
    link: '/search',
    icon: <SearchIcon color={colors.iconColor} width="20" height="20" />,
  },
  {
    id: 2,
    name: 'Profile',
    link: '/profile',
    icon: <UserIcon color={colors.iconColor} width="20" height="20" />,
  },
  {
    id: 3,
    name: 'Transfers',
    link: '/transfers',
    icon: <TransfersIcon color={colors.iconColor} width="20" height="20" />,
  },
  {
    id: 4,
    name: 'Documents',
    link: '/documents',
    icon: <DocumentsIcon color={colors.iconColor} width="20" height="20" />,
  },
  {
    id: 5,
    name: 'Settings',
    link: '/settings',
    icon: <SettingsIcon color={colors.iconColor} width="20" height="20" />,
  },
];
