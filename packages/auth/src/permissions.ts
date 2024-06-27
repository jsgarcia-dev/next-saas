import { AbilityBuilder } from '@casl/ability'

import { AppAbility } from '.'
import { USer } from './models/user'
import { Role } from './roles'

type PermissionsByRole = (
  user: USer,
  builder: AbilityBuilder<AppAbility>,
) => void

export const permissions: Record<Role, PermissionsByRole> = {
  ADMIN: (_, { can }) => {
    can('manage', 'all')
  },
  MEMBER: (_, { can }) => {
    can('manage', 'Project')
  },
  BILLING: () => {},
}
