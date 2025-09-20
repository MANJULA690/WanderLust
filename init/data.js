const sampleListings = [
  {
    title: "Cozy Mountain Retreat",
    description: "A peaceful cabin surrounded by pine forests with stunning mountain views. Perfect for hikers and nature lovers.",
    image: {
      url: "https://source.unsplash.com/800x600/?cabin,mountain",
      filename: "cabin_mountain"
    },
    price: 2500,
    location: "Manali, Himachal Pradesh",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [77.1892, 32.2396] // longitude, latitude
    }
  },
  {
    title: "Luxury Beach Villa",
    description: "Private beach access, infinity pool, and ocean views. Ideal for families and couples seeking relaxation.",
    image: {
      url: "https://source.unsplash.com/800x600/?villa,beach",
      filename: "villa_beach"
    },
    price: 7500,
    location: "Goa",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [73.8567, 15.2993]
    }
  },
  {
    title: "Royal Heritage Castle Stay",
    description: "Live like royalty in this restored medieval fort with spacious rooms and cultural performances.",
    image: {
      url: "https://source.unsplash.com/800x600/?castle,india",
      filename: "castle_heritage"
    },
    price: 12000,
    location: "Jaipur, Rajasthan",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [75.7873, 26.9124]
    }
  },
  {
    title: "Modern City Apartment",
    description: "Centrally located apartment with high-speed Wi-Fi, workspace, and skyline views.",
    image: {
      url: "https://source.unsplash.com/800x600/?apartment,city",
      filename: "city_apartment"
    },
    price: 4000,
    location: "Bengaluru, Karnataka",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [77.5946, 12.9716]
    }
  },
  {
    title: "Serene Farm Stay",
    description: "Experience rustic charm with fresh produce, farm animals, and open fields.",
    image: {
      url: "https://source.unsplash.com/800x600/?farm,fields",
      filename: "farm_stay"
    },
    price: 1800,
    location: "Nashik, Maharashtra",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [73.7898, 19.9975]
    }
  },
  {
    title: "Igloo Adventure in Snow",
    description: "Stay in an igloo with warm interiors, guided snow treks, and starry Arctic nights.",
    image: {
      url: "https://source.unsplash.com/800x600/?igloo,snow",
      filename: "igloo_snow"
    },
    price: 5000,
    location: "Spiti Valley, Himachal Pradesh",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [78.0322, 32.2460]
    }
  },
  {
    title: "Lakeside Camping Tents",
    description: "Affordable tents near the lake with bonfire, music, and BBQ under the stars.",
    image: {
      url: "https://source.unsplash.com/800x600/?camping,tent",
      filename: "camping_tents"
    },
    price: 1200,
    location: "Pawna Lake, Maharashtra",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [73.4230, 18.6216]
    }
  },
  {
    title: "Eco Dome in Forest",
    description: "Unique dome stay with eco-friendly design, solar energy, and forest surroundings.",
    image: {
      url: "https://source.unsplash.com/800x600/?eco,dome",
      filename: "eco_dome"
    },
    price: 3500,
    location: "Coorg, Karnataka",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [75.7390, 12.3375]
    }
  },
  {
    title: "Infinity Pool Villa",
    description: "Private luxury villa with infinity pool and breathtaking sunset views.",
    image: {
      url: "https://source.unsplash.com/800x600/?luxury,pool",
      filename: "infinity_pool"
    },
    price: 9500,
    location: "Kerala Backwaters",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [76.2711, 9.4981]
    }
  }
];

module.exports = { data: sampleListings };
