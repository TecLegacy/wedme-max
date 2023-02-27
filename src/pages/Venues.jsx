import { useState } from 'react';
import VenueCard from './VenueCard.jsx';
import { venues } from '../data/venues';

const VenueList = () => {
  const [filteredVenues, setFilteredVenues] = useState(venues);

  const handleFilterChange = (event) => {
    const selectedFilter = event.target.value;
    let newFilteredVenues = [];

    if (selectedFilter === 'all') {
      newFilteredVenues = venues;
    } else {
      newFilteredVenues = venues.filter(
        (venue) => venue.location === selectedFilter
      );
    }

    setFilteredVenues(newFilteredVenues);
  };

  return (
    <div class="container mx-auto my-8 mt-28 mb-20 px-4 sm:px-6 lg:px-8">
      <div class="mb-6 flex flex-col items-center md:flex-row md:justify-between">
        <h2 class="mb-4 text-3xl font-bold md:mb-0">Wedding Venues</h2>
        <div class="relative">
          <select
            onChange={handleFilterChange}
            class="focus:shadow-outline block w-full appearance-none rounded border border-gray-300 bg-white px-4 py-2 pr-8 leading-tight shadow hover:border-gray-500 focus:outline-none"
          >
            <option value="all">All Locations</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Delhi">Delhi</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Jaipur">Jaipur</option>
          </select>
          <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              class="h-4 w-4 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                fill-rule="evenodd"
                d="M11.293 13.707a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 1.414-1.414L10 10.586l2.293-2.293a1 1 0 0 1 1.414 1.414l-3 3z"
              />
            </svg>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredVenues.map((venue) => (
          <VenueCard key={venue.id} venue={venue} />
        ))}
      </div>
    </div>
  );
};

export default VenueList;
