'use client';

import SearchBar from '../search/SearchBar';
import { FaRobot, FaBell } from 'react-icons/fa';

export default function ComplianceHome() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-8">
        Compliance Dashboard
      </h1>
      <div className="mb-8">
        <SearchBar />
      </div>
      {/* <p className="text-[var(--text-secondary)] mb-8">
        Search for AI regulations and compliance guidelines
      </p> */}

      {/* AI Generated Summary Block */}
      <div className="card mb-8">
        <div className="flex items-center gap-3 mb-4">
          <FaRobot className="text-2xl text-[var(--accent)]" />
          <h2 className="text-xl font-semibold">AI-Generated Summary</h2>
        </div>
        <div className="space-y-4">
          <p className="text-[var(--text-secondary)]">
            Recent developments in AI regulation focus on three key areas:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[var(--text-secondary)] ml-4">
            <li>Enhanced safety protocols for AI systems in critical infrastructure</li>
            <li>Updated compliance requirements for autonomous decision-making systems</li>
            <li>New guidelines for AI transparency and accountability</li>
          </ul>
        </div>
      </div>

      {/* What's New Block */}
      <div className="card">
        <div className="flex items-center gap-3 mb-4">
          <FaBell className="text-2xl text-[var(--accent)]" />
          <h2 className="text-xl font-semibold">What's New</h2>
        </div>
        <div className="space-y-4">
          <div className="border-l-4 border-[var(--accent)] pl-4">
            <p className="font-semibold">Updated Safety Guidelines</p>
            <p className="text-[var(--text-secondary)] text-sm">
              New safety protocols for nuclear facility AI systems
            </p>
            <p className="text-[var(--text-secondary)] text-xs mt-1">
              2 hours ago
            </p>
          </div>
          
          <div className="border-l-4 border-[var(--accent)] pl-4">
            <p className="font-semibold">Compliance Update</p>
            <p className="text-[var(--text-secondary)] text-sm">
              Revised requirements for AI monitoring systems
            </p>
            <p className="text-[var(--text-secondary)] text-xs mt-1">
              1 day ago
            </p>
          </div>
          
          <div className="border-l-4 border-[var(--accent)] pl-4">
            <p className="font-semibold">New Training Material</p>
            <p className="text-[var(--text-secondary)] text-sm">
              AI safety training modules now available
            </p>
            <p className="text-[var(--text-secondary)] text-xs mt-1">
              2 days ago
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 