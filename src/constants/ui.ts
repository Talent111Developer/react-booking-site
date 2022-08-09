import { ROUTES } from './routes';

interface INavLink {
  icon: string;
  label: string;
  size?: number;
  path: string;
}

export const CARD_LAYOUT_SPACING = {
  row: 10,
  column: 10,
}

const LAYOUTS_IN_LARGE_SCREENS = [
  { i: 'a', x: 0, y: 0, w: 1, h: 1, visible: true, title: 'last_chats' },
  {
    i: 'b',
    x: 1,
    y: 0,
    w: 1,
    h: 1,
    visible: true,
    title: 'last_submitted_objects',
  },
  {
    i: 'c',
    x: 0,
    y: 1,
    w: 1,
    h: 1,
    visible: true,
    title: 'objects_location',
  },
  {
    i: 'd',
    x: 1,
    y: 1,
    w: 1,
    h: 1,
    visible: true,
    title: 'consultation_documents',
  },
  {
    i: 'e',
    x: 0,
    y: 2,
    w: 1,
    h: 1,
    visible: true,
    title: 'objects_overview',
  },
  { i: 'f', x: 1, y: 2, w: 1, h: 1, visible: true, title: 'objects_value' },
  { i: 'g', x: 0, y: 3, w: 1, h: 1, visible: true, title: 'linkedin_feed' },
];

const LAYOUTS_IN_SMAL_SCREENS = [
  { i: 'a', x: 0, y: 0, w: 1, h: 1, visible: true, title: 'last_chats' },
  {
    i: 'b',
    x: 0,
    y: 1,
    w: 1,
    h: 1,
    visible: true,
    title: 'last_submitted_objects',
  },
  {
    i: 'c',
    x: 0,
    y: 2,
    w: 1,
    h: 1,
    visible: true,
    title: 'objects_location',
  },
  {
    i: 'd',
    x: 0,
    y: 3,
    w: 1,
    h: 1,
    visible: true,
    title: 'consultation_documents',
  },
  {
    i: 'e',
    x: 0,
    y: 4,
    w: 1,
    h: 1,
    visible: true,
    title: 'objects_overview',
  },
  { i: 'f', x: 0, y: 5, w: 1, h: 1, visible: true, title: 'objects_value' },
  { i: 'g', x: 0, y: 6, w: 1, h: 1, visible: true, title: 'linkedin_feed' },
];

export const INITIAL_DASHBOARD_LAYOUTS = {
  xl: LAYOUTS_IN_LARGE_SCREENS,
  lg: LAYOUTS_IN_LARGE_SCREENS,
  md: LAYOUTS_IN_SMAL_SCREENS,
  sm: LAYOUTS_IN_SMAL_SCREENS,
};

export const NAV_LINKS: INavLink[] = [
  {
    label: 'home',
    icon: 'home',
    path: ROUTES.DASHBOARD,
  },
  {
    label: 'products',
    icon: 'add',
    path: ROUTES.LEADS.PREFIX,
  },
  {
    label: 'customers',
    icon: 'users',
    path: ROUTES.CLIENTS,
  },
  {
    label: 'shop',
    icon: 'home',
    size: 18,
    path: ROUTES.OBJECTS.INDEX,
  },
  {
    label: 'income',
    icon: 'user',
    size: 16,
    path: ROUTES.BROKERS.INDEX,
  },
  {
    label: 'promote',
    icon: 'question',
    path: ROUTES.FAQ,
  },
];
