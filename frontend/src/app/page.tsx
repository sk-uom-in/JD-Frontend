// 'use client';

// import { useAuth0 } from '@auth0/auth0-react';
// import ProtectedRoute from '@/components/auth/ProtectedRoute';
// import ReactorCoreCard from '@/components/systems/ReactorCoreCard';
// import PumpSystemCard from '@/components/systems/PumpSystemCard';
// import TurbineSystemCard from '@/components/systems/TurbineSystemCard';
// import CoolantSystemCard from '@/components/systems/CoolantSystemCard';

// export default function Home() {
//   const { isAuthenticated } = useAuth0();

//   return (
//     <div className="space-y-6">
//       {!isAuthenticated ? (
//         <div className="card">
//           <h2 className="text-xl font-semibold mb-4">Welcome to Nuclear Safety System</h2>
//           <p className="text-[var(--text-secondary)] mb-4">
//             Please log in to access the monitoring dashboard and sensor data.
//           </p>
//         </div>
//       ) : (
//         <ProtectedRoute>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             <div className="lg:col-span-2">
//               <ReactorCoreCard />
//             </div>
//             <div className="lg:col-span-2">
//               <PumpSystemCard />
//             </div>
//             <div className="lg:col-span-2">
//               <TurbineSystemCard />
//             </div>
//             <div className="lg:col-span-2">
//               <CoolantSystemCard />
//             </div>
//           </div>
//         </ProtectedRoute>
//       )}
//     </div>
//   );
// }

'use client';

import { useAuth0 } from '@auth0/auth0-react';
import { useRole } from '@/contexts/RoleContext';
import ProtectedRoute from '@/components/auth/ProtectedRoute';
import ReactorCoreCard from '@/components/systems/ReactorCoreCard';
import PumpSystemCard from '@/components/systems/PumpSystemCard';
import TurbineSystemCard from '@/components/systems/TurbineSystemCard';
import CoolantSystemCard from '@/components/systems/CoolantSystemCard';

export default function Home() {
  const { isAuthenticated } = useAuth0();
  const { isOperator, isCompliance } = useRole();

  return (
    <div className="space-y-6">
      {!isAuthenticated ? (
        <div className="card">
          <h2>Welcome to Nuclear Safety System</h2>
          <p>Please log in to access the system.</p>
        </div>
      ) : (
        <ProtectedRoute>
          {isOperator && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="lg:col-span-2">
                <ReactorCoreCard />
              </div>
              <div className="lg:col-span-2">
                <PumpSystemCard />
              </div>
              <div className="lg:col-span-2">
                <TurbineSystemCard />
              </div>
              <div className="lg:col-span-2">
                <CoolantSystemCard />
              </div>
            </div>
          )}
          {isCompliance && (
            <div>
              <h1>Compliance Dashboard</h1>
              {/* Compliance-specific content */}
            </div>
          )}
        </ProtectedRoute>
      )}
    </div>
  );
}