import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>Event Booking App</span>,
  project: {
    link: 'https://github.com/mairh/event-booking.git',
  },
  docsRepositoryBase: 'https://github.com/mairh/event-booking-docs.git',
  footer: {
    text: 'Event Booking App Docs',
  },
}

export default config
