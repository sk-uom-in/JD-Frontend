'use client';

import { useState } from 'react';
import ChecklistProgress from './ChecklistProgress';
import { FaChevronDown, FaChevronRight } from 'react-icons/fa';

interface ChecklistItem {
  id: string;
  text: string;
  checked: boolean;
}

interface ChecklistSection {
  id: string;
  title: string;
  items: ChecklistItem[];
  isExpanded?: boolean;
}

const initialSections: ChecklistSection[] = [
  {
    id: '1',
    title: 'Governance Framework',
    items: [
      { id: '1-1', text: 'Establish a clear governance structure for AI oversight', checked: false },
      { id: '1-2', text: 'Define specific roles and responsibilities for AI system management', checked: false },
      { id: '1-3', text: 'Ensure ongoing compliance with regulatory bodies (e.g., NRC, IAEA)', checked: false },
      { id: '1-4', text: 'Develop a policy for ethical AI usage within nuclear operations', checked: false },
    ],
    isExpanded: true
  },
  // ... Add other sections similarly
];

export default function ComplianceChecklist() {
  const [sections, setSections] = useState(initialSections);

  const toggleItem = (sectionId: string, itemId: string) => {
    setSections(sections.map(section => {
      if (section.id === sectionId) {
        return {
          ...section,
          items: section.items.map(item => 
            item.id === itemId ? { ...item, checked: !item.checked } : item
          )
        };
      }
      return section;
    }));
  };

  const toggleSection = (sectionId: string) => {
    setSections(sections.map(section => 
      section.id === sectionId 
        ? { ...section, isExpanded: !section.isExpanded }
        : section
    ));
  };

  const totalItems = sections.reduce((acc, section) => acc + section.items.length, 0);
  const completedItems = sections.reduce((acc, section) => 
    acc + section.items.filter(item => item.checked).length, 0
  );

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-6">
        AI Compliance Checklist
      </h1>
      
      <ChecklistProgress total={totalItems} completed={completedItems} />

      <div className="space-y-6">
        {sections.map(section => (
          <div key={section.id} className="card">
            <button
              onClick={() => toggleSection(section.id)}
              className="w-full flex items-center justify-between p-4 hover:bg-opacity-50"
            >
              <h2 className="text-xl font-semibold">{section.title}</h2>
              {section.isExpanded ? <FaChevronDown /> : <FaChevronRight />}
            </button>

            {section.isExpanded && (
              <div className="p-4 pt-0 space-y-3">
                {section.items.map(item => (
                  <div key={item.id} className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      checked={item.checked}
                      onChange={() => toggleItem(section.id, item.id)}
                      className="mt-1 h-4 w-4 rounded border-gray-300 
                               text-[var(--accent)] focus:ring-[var(--accent)]"
                    />
                    <label className="text-[var(--text-secondary)]">
                      {item.text}
                    </label>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}