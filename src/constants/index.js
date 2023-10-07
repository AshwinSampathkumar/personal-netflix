import ProfileIcon1 from "../assets/svgs/profile-icon-1.svg";
import ProfileIcon2 from "../assets/svgs/profile-icon-2.svg";
import ProfileIcon3 from "../assets/svgs/profile-icon-3.svg";
import ProfileIcon4 from "../assets/svgs/profile-icon-4.svg";
import ProfileIcon5 from "../assets/svgs/profile-icon-5.svg";

export const profiles = [
  {
    id: "1",
    name: "Ashes",
    resource: ProfileIcon5
  },
  {
    id: "2",
    name: "Dad",
    resource: ProfileIcon4
  },
  {
    id: "3",
    name: "Mom",
    resource: ProfileIcon3
  },
  {
    id: "4",
    name: "Friend 1",
    resource: ProfileIcon1
  },
  {
    id: "5",
    name: "Kids",
    resource: ProfileIcon2
  }
];

export const COMPONENTS = {
  cover: {
    play: "Play",
    moreInfo: "More Info"
  }
};

export const NAVBAR = {
  options: [
    {
      id: 1,
      title: "Home"
    },
    {
      id: 2,
      title: "TV Shows"
    },
    {
      id: 3,
      title: "Movies"
    },
    {
      id: 4,
      title: "News & Popular"
    },
    {
      id: 5,
      title: "My List"
    },
    {
      id: 6,
      title: "Browse by Language"
    }
  ]
};

export const HOME = {
  netflixOriginal: "Netflix Originals",
  popularNow: "Popular Now",
  topRated: "Top Rated",
  tvShows: "TV Shows",
  moviesByGenre: [
    {
      id: "1",
      title: "Comedies",
      genreId: "35"
    },
    {
      id: "2",
      title: "Action Movies",
      genreId: "28"
    },
    {
      id: "3",
      title: "Documentaries",
      genreId: "99"
    },
    {
      id: "4",
      title: "Horror Movies",
      genreId: "27"
    }
  ]
};
