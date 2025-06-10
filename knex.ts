// knex.ts
import { execSync } from 'node:child_process'

const args = process.argv.slice(2).join(' ')
execSync(`tsx ./node_modules/knex/bin/cli.js ${args}`, { stdio: 'inherit' })
