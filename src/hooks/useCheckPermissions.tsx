import { UserRole, Role } from 'types/index';

/**
 * useCheckPermissions hook
 *
 * Checks if inside the roles object
 * matchs ANY OF THE ROLES you want to check
 *
 * @param userPermissions the user current permissions
 * @param rolesToCheck array of the roles that matchs the type
 */
export function useCheckPermissions(
  userPermissions: UserRole[] | undefined,
  rolesToCheck: Role[] | undefined
): boolean {
  const roles: string[] = rolesToCheck as string[];

  if (!rolesToCheck) {
    return false;
  }

  if (userPermissions && userPermissions.length !== 0 && rolesToCheck.length !== 0) {
    return userPermissions.filter(item => roles.includes(item.name)).length >= 1;
  }
  return false;
}

export default useCheckPermissions;
