// assets
import { IconReportMoney, IconMoneybag, IconZoomMoney } from '@tabler/icons';

// constant
const icons = {
  IconReportMoney,
  IconMoneybag,
  IconZoomMoney
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const invoice = {
  id: 'invoice',
  title: 'Invoice',
  type: 'group',

  children: [
    {
      id: 'crvinvoice',
      title: 'Create',
      type: 'item',
      url: '/invoice/Create',
      icon: icons.IconReportMoney,
      breadcrumbs: false
    },
    {
      id: 'register3',
      title: 'Update',
      type: 'item',
      url: '/pages/register/register5',
      icon: icons.IconZoomMoney,
      breadcrumbs: false
    },
    {
      id: 'listinvoice',
      title: 'Invoice List',
      type: 'item',
      url: '/invoice/List',
      icon: icons.IconMoneybag,
      breadcrumbs: false
    }
  ]
};

export default invoice;
