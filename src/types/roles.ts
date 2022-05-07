export interface UserRole {
  id: string;
  name: string;
}

export type Role =
  // CUSTOMER - Info
  'ROLE_CUSTOMER_BASIC_READ' | 'ROLE_CUSTOMER_BASIC_UPDATE' | 'ROLE_CUSTOMER_BASIC_CREATE';
