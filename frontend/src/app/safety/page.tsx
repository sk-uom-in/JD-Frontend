'use client';

import RoleProtectedRoute from '@/components/auth/RoleProtectedRoute';

export default function SafetyPage() {
  return (
    <RoleProtectedRoute allowedRoles={['compliance']}>
      <div>
        <h1>Safety Case Management</h1>
        {/* Safety case content */}
      </div>
    </RoleProtectedRoute>
  );
}