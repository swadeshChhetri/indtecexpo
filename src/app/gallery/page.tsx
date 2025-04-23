'use client'

import React, { useState } from "react";
import Image from 'next/image';

const photos = [
  {
    name: "Miss Amie",
    role: "Owner/Director",
    image: "/man1.jpg",
    details: "Miss Amie is an experienced director with a passion for dance.",
  },
  {
    name: "Miss Mandy",
    role: "Ballet Instructor",
    image: "/man2.jpg",
    details:
      "Miss Mandy is originally from Sewell, NJ and began her dance training with Dance! by Debra DiNote.",
  },
  {
    name: "Miss Alyssa",
    role: "Tap Instructor",
    image: "/man3.jpg",
    details: "Miss Alyssa has been teaching tap for over 10 years.",
  }
];

const videos = [
  "https://www.youtube.com/embed/ScMzIvxBSi4",
  "https://www.youtube.com/embed/tgbNymZ7vqY",
];

export default function GalleryWithTabs() {
  const [activeTab, setActiveTab] = useState("Photos");

  return (
    <div className="pt-42 px-4 py-10">
      <h2 className="text-3xl font-bold mb-6 text-center">Gallery</h2>

      {/* Tabs */}
      <div className="flex justify-center gap-4 mb-6">
        {["Photos", "Videos"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-full font-medium border ${
              activeTab === tab
                ? "bg-indigo-600 text-white"
                : "bg-white text-gray-700 border-gray-300"
            } transition`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      {activeTab === "Photos" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
             {photos.map((person, index) => (
               <div
                 key={index}
                 className="bg-white rounded-2xl shadow-md p-4 text-center hover:shadow-xl transition"
               >
                 <Image
                   src={person.image}
                   alt={person.name}
                   className="w-full h-48 object-cover rounded-xl mb-4"
                   height={400}
                   width={400}
                 />
                 <h2 className="text-xl font-semibold">{person.name}</h2>
                 <p className="text-sm text-gray-500">{person.role}</p>
                 <p className="text-sm mt-2 text-gray-600">{person.details}</p>
               </div>
             ))}
        </div>
      )}

      {activeTab === "Videos" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {videos.map((src, i) => (
            <div key={i} className="aspect-w-16 aspect-h-9 w-full">
              <iframe
                src={src}
                title={`Video ${i + 1}`}
                allowFullScreen
                className="rounded-xl w-full h-64"
              ></iframe>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}


