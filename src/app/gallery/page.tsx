import React from 'react'

const orginizers = [
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
  },
  {
    name: "Miss Leah",
    role: "Pre-School Class Instructor",
    image: "/man4.jpg",
    details: "Miss Leah specializes in pre-school dance programs.",
  },
  {
    name: "Miss Sarah",
    role: "Jazz Instructor",
    image: "/man5.png",
    details: "Miss Sarah has choreographed award-winning jazz performances.",
  },
  {
    name: "Miss Amie",
    role: "Owner/Director",
    image: "/man6.jpg",
    details: "Miss Amie is an experienced director with a passion for dance.",
  },
  {
    name: "Miss Mandy",
    role: "Ballet Instructor",
    image: "/man7.jpg",
    details:
      "Miss Mandy is originally from Sewell, NJ and began her dance training with Dance! by Debra DiNote.",
  },
  {
    name: "Miss Alyssa",
    role: "Tap Instructor",
    image: "/man8.jpg",
    details: "Miss Alyssa has been teaching tap for over 10 years.",
  },
  {
    name: "Miss Leah",
    role: "Pre-School Class Instructor",
    image: "/man9.jpg",
    details: "Miss Leah specializes in pre-school dance programs.",
  },
  {
    name: "Miss Sarah",
    role: "Jazz Instructor",
    image: "/man5.jpg",
    details: "Miss Sarah has choreographed award-winning jazz performances.",
  },
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
  },
  {
    name: "Miss Leah",
    role: "Pre-School Class Instructor",
    image: "/man4.jpg",
    details: "Miss Leah specializes in pre-school dance programs.",
  },
  {
    name: "Miss Sarah",
    role: "Jazz Instructor",
    image: "/man5.png",
    details: "Miss Sarah has choreographed award-winning jazz performances.",
  },
  {
    name: "Miss Amie",
    role: "Owner/Director",
    image: "/man6.jpg",
    details: "Miss Amie is an experienced director with a passion for dance.",
  },
  {
    name: "Miss Mandy",
    role: "Ballet Instructor",
    image: "/man7.jpg",
    details:
      "Miss Mandy is originally from Sewell, NJ and began her dance training with Dance! by Debra DiNote.",
  },
  {
    name: "Miss Alyssa",
    role: "Tap Instructor",
    image: "/man8.jpg",
    details: "Miss Alyssa has been teaching tap for over 10 years.",
  },
  {
    name: "Miss Leah",
    role: "Pre-School Class Instructor",
    image: "/man9.jpg",
    details: "Miss Leah specializes in pre-school dance programs.",
  },
  {
    name: "Miss Sarah",
    role: "Jazz Instructor",
    image: "/man5.jpg",
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
            <img
              src={person.image}
              alt={person.name}
              className="w-full h-48 object-cover rounded-xl mb-4"
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

