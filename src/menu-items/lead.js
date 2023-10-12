// assets
import { IconDashboard } from '@tabler/icons';

// constant
const icons = { IconDashboard };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const lead = {
  id: 'lead',
  title: 'Lead Management',
  type: 'group',
  // icon: icons.IconDashboard,
  children: [
    {
      id: 'addlead',
      title: 'Add Lead',
      type: 'item',
      url: '/lead/AddLead',
      icon: icons.IconReportMoney,
      breadcrumbs: false
    },
    {
      id: 'leadlist',
      title: 'Lead List',
      type: 'item',
      url: '/lead/LeadList',
      icon: icons.IconMoneybag,
      breadcrumbs: false
    }
  ]
};

export default lead;
