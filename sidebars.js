module.exports = {
  tutorialSidebar: [
    'index',
    {
      type: 'category',
      label: 'Basic About the House',
      items: [
        'basic/electrical-overview',
        'basic/litetouch',
        'basic/discoveries',
        'basic/issue',
      ],
    },
    {
      type: 'category',
      label: 'How the House Works Now',
      items: [
        'current/overview',
        'current/shelly',
        'current/home-assistant',
        'current/esp32-cyd',
        'current/communication',
        'current/new-wiring-diagram',
        'current/what-happens',
      ],
    },
    {
      type: 'category',
      label: 'How To',
      items: [
        'how-to/add-smart-relay',
        'how-to/add-switch-display',
      ],
    },
    {
      type: 'category',
      label: 'Alternatives',
      items: [
        'alternatives/keep-litetouch',
        'alternatives/smart-bulbs',
        'alternatives/plc',
        'alternatives/rip-and-replace',
      ],
    },
    'parts-list',
    'faqs',
  ],
};
