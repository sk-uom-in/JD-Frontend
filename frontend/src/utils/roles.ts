import { UserRole } from '@/types/auth';

export const ROLE_MAPPINGS: Record<string, UserRole> = {
  'operator@gmail.com': 'operator',
  'compliance@gmail.com': 'compliance'
};

export const getRole = (email: string): UserRole => {
  return ROLE_MAPPINGS[email] || 'unauthorized';
};