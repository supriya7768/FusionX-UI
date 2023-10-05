// assets


// constant


// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const pages = {
  id: 'pages',
  title: '',
  caption: '',
  type: 'group',
  children: [
    {
      id: 'authentication',
      title: 'INVOICES',
      type: 'collapse',
     

      children: [
        {
          id: 'login3',
          title: 'Create',
          type: 'item',
          url: '/pages/login/login3',
          target: true
        },
        {
          id: 'register3',
          title: 'Update',
          type: 'item',
          url: '/pages/register/register3',
          target: true
        },
        {
          id: 'register3',
          title: 'Invoice List',
          type: 'item',
          url: '/pages/register/register3',
          target: true
        }
      ]
    }
  ]
};

export default pages;
