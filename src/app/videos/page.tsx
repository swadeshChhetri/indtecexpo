import React from 'react'

const orginizers = [
  {
    name: "Miss Amie",
    role: "Owner/Director",
    video: "/videos/amie.mp4",
    details: "Miss Amie is an experienced director with a passion for dance.",
  },
  {
    name: "Miss Mandy",
    role: "Ballet Instructor",
    video: "/videos/mandy.mp4",
    details:
      "Miss Mandy is originally from Sewell, NJ and began her dance training with Dance! by Debra DiNote.",
  },
  {
    name: "Miss Alyssa",
    role: "Tap Instructor",
    video: "/videos/alyssa.mp4",
    details: "Miss Alyssa has been teaching tap for over 10 years.",
  },
  {
    name: "Miss Leah",
    role: "Pre-School Class Instructor",
    video: "/videos/leah.mp4",
    details: "Miss Leah specializes in pre-school dance programs.",
  },
  {
    name: "Miss Sarah",
    role: "Jazz Instructor",
    video: "/videos/sarah.mp4",
    details: "Miss Sarah has choreographed award-winning jazz performances.",
  },
];

export default function Page() {
  return (
    <div className="px-4 py-10">
      <h1 className="text-3xl font-bold mb-8 text-center">Our Organizers</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {orginizers.map((person, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-4 text-center hover:shadow-xl transition"
          >
            <video
              src={person.video}
              className="w-full h-48 object-cover rounded-xl mb-4"
              controls
              muted
            />
            <h2 className="text-xl font-semibold">{person.name}</h2>
            <p className="text-sm text-gray-500">{person.role}</p>
            <p className="text-sm mt-2 text-gray-600">{person.details}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
