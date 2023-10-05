// assets
import { IconDashboard } from '@tabler/icons'

// constant
const icons = { IconDashboard };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const dashboard = {
  id: 'Fusion X',
  title: 'Fusion X',
  type: 'group',
  children: [
    {
      id: 'default',
      title: 'LEAD MANAGEMENT',
      type: 'collapse',
      icon: icons.IconDashboard,

      children: [
        {
          id: 'default',
          title: 'Add Lead',
          type: 'item',
          url: '/dashboard/default',
          target: true
        },
        {
          id: 'register3',
          title: 'Lead List',
          type: 'item',
          url: '/dashboard/register/register3',
          target: true
        },
        {
          id: 'register3',
          title: 'Lead Details',
          type: 'item',
          url: '/dashboard/register/register3',
          target: true
        }
      ]
    }
  ]
};

export default dashboard;
