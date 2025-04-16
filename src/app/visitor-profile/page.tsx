'use client'
import { Users, BadgeCheck, Building, HardHat, Briefcase, UserCheck, ShieldCheck, BookOpen, Settings, Landmark } from "lucide-react";
import { motion } from "framer-motion";

const visitorProfiles = [
  { icon: <BadgeCheck />, label: 'Technology Suppliers and Seekers' },
  { icon: <ShieldCheck />, label: 'Defence & Aviation Ministry' },
  { icon: <Users />, label: 'Managers, Architects, Engineers' },
  { icon: <Landmark />, label: 'Ministry of Defence & Aviation' },
  { icon: <Settings />, label: 'Heads of Service Departments' },
  { icon: <ShieldCheck />, label: 'Representatives from Defence Forces' },
  { icon: <UserCheck />, label: 'Key Personnel of Aviation and Defence Sectors' },
  { icon: <Landmark />, label: 'Delegations from Governments' },
  { icon: <UserCheck />, label: "Heads of PSU'S" },
  { icon: <Briefcase />, label: 'Trade Delegations' },
  { icon: <Building />, label: 'Component Manufacturers' },
  { icon: <BookOpen />, label: 'Engineering Colleges' },
  { icon: <HardHat />, label: 'Contractor/Sub Contractor & Builders' },
  { icon: <Briefcase />, label: 'Trading & Marketing Companies' },
  { icon: <UserCheck />, label: 'Consultants' },
  { icon: <Users />, label: 'Departments' },
  { icon: <HardHat />, label: 'Plant Heads' },
  { icon: <Users />, label: 'Design Engineers' },
  { icon: <Settings />, label: 'Procurement Heads' },
  { icon: <Briefcase />, label: 'Financial Institutions' },
  { icon: <ShieldCheck />, label: 'Safety Institutes' },
  { icon: <UserCheck />, label: 'Senior Management' },
  { icon: <BookOpen />, label: 'Researchers' },
  { icon: <Settings />, label: 'Quality Control' },
];

export default function VisitorProfile() {
  return (
    <section className="max-w-7xl mx-auto py-16 px-4">
      <div className="flex items-center gap-4 mb-10">
        <Users className="text-indigo-600 w-8 h-8" />
        <h2 className="text-3xl font-bold border-b-4 border-indigo-600 inline-block pb-1">
          Visitor Profiles
        </h2>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {visitorProfiles.map((profile, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-white p-5 shadow-xl rounded-2xl border hover:border-indigo-500 transition duration-300"
          >
            <div className="flex items-start gap-3">
              <div className="text-blue-500">{profile.icon}</div>
              <span className="text-gray-800 font-medium">{profile.label}</span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
