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

    icon: (selectedColor: string | null) => {
      return (
        <SearchIcon
          color={selectedColor ? selectedColor : colors.iconColor}
          width="20"
          height="20"
        />
      );
    },
  },
  {
    id: 2,
    name: 'Profile',
    link: '/profile/dash',
    icon: (selectedColor: string | null) => {
      return (
        <UserIcon
          color={selectedColor ? selectedColor : colors.iconColor}
          width="20"
          height="20"
        />
      );
    },
  },
  {
    id: 3,
    name: 'Transfers',
    link: '/transfers',

    icon: (selectedColor: string | null) => {
      return (
        <TransfersIcon
          color={selectedColor ? selectedColor : colors.iconColor}
          width="20"
          height="20"
        />
      );
    },
  },
  {
    id: 4,
    name: 'Documents',
    link: '/documents',
    icon: (selectedColor: string | null) => {
      return (
        <DocumentsIcon
          color={selectedColor ? selectedColor : colors.iconColor}
          width="20"
          height="20"
        />
      );
    },
  },
  {
    id: 5,
    name: 'Settings',
    link: '/settings',
    icon: (selectedColor: string | null) => {
      return (
        <SettingsIcon
          color={selectedColor ? selectedColor : colors.iconColor}
          width="20"
          height="20"
        />
      );
    },
  },
];
