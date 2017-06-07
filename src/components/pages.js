import { buildRouting } from 'react-route-config'

import Home from './home'
import QrCode from './qr-code'
import Theme from './theme'

export const { HomePage, QrCodePage, ThemePage } = buildRouting({ Home, QrCode, Theme })