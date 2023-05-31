import React from 'react';

const Features = () => {
  const features = [
    {
      id: 1,
      name: "Enlist your books",
      details: "Easily list and organize your books for sale or exchange.",
      img: "https://cdn.lordicon.com/wfadduyp.json",
      bg: "bg-[#9ED5C5]"
    },
    {
      id: 2,
      name: "Buy old books",
      details: "Browse and purchase books from other users on the platform.",
      img: "https://cdn.lordicon.com/kipaqhoz.json",
      bg: "bg-[#B799FF]"
    },
    {
      id: 3,
      name: "Advertise your items",
      details: "Promote your books and reach a larger audience by advertising them.",
      img: "https://cdn.lordicon.com/svbmmyue.json",
      bg: "bg-[#79E0EE]"
    },
    {
      id: 4,
      name: "Digital Payment",
      details: "Conveniently make digital payments for your book purchases.",
      img: "https://cdn.lordicon.com/zqxjldws.json",
      bg: "bg-[#FFD3A3]"
    },
  ];

  return (
    <div className='my-24 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-10 md:gap-8 gap-4'>
      {features.map(({ id, name, details, img, bg }) => (
        <div
          key={id}
          className={`${bg} p-6 rounded-2xl hover:-translate-y-2 hover:shadow-lg transform transition duration-300`}
        >
          <lord-icon
            src={img}
            target="div"
            trigger="hover"
            colors="primary:#121331"
            style={{ width: "60px", height: "60px" }}
          ></lord-icon>
          <h2 className='mt-5 text-xl font-bold'>{name}</h2>
          <p className='mt-4 text-[#555]'>{details}</p>
        </div>
      ))}
    </div>
  );
};

export default Features;
