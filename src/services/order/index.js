const { DEV, VITE_LOCAL } = import.meta.env

import { orderService as local } from './order.service.local'
import { orderService as remote } from './order.service.remote'

export const orederService = VITE_LOCAL === 'true' ? local : remote

if (DEV) window.orederService = orederService