import React from 'react';

const VenueCard = ({ venue }) => {
  return (
    <div className="max-w-sm overflow-hidden rounded bg-white shadow-lg">
      <img
        className="h-48 w-full object-cover"
        src={venue.image}
        alt={venue.name}
      />
      <div className="px-6 py-4">
        <div className="mb-2 text-xl font-bold">{venue.name}</div>
        <p className="text-base text-gray-700">{venue.description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="mr-2 mb-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
          {venue.capacity} Guests
        </span>
        <span className="mr-2 mb-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
          {venue.price} per hour
        </span>
        <span className="mr-2 mb-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
          {venue.location}
        </span>
      </div>
      <div className="px-6 pb-4">
        <a
          href={venue.website}
          className="mr-2 mb-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700 transition-all duration-300 hover:bg-gray-300"
        >
          Visit Website
        </a>
        <a
          href={venue.contact}
          className="mr-2 mb-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700 transition-all duration-300 hover:bg-gray-300"
        >
          Contact
        </a>
      </div>
    </div>
  );
};

export default VenueCard;
