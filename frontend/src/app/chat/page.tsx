'use client';

import RoleProtectedRoute from '@/components/auth/RoleProtectedRoute';

export default function ChatPage() {
  return (
    <RoleProtectedRoute allowedRoles={['compliance']}>
      <div>
        <h1>AI Chat</h1>
        {/* Chat interface */}
      </div>
    </RoleProtectedRoute>
  );
}