import crypto from 'crypto'

export default (): string => crypto.randomBytes(12).toString('HEX')
