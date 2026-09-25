const { Client, RichPresence, SpotifyRPC } = require('discord.js-selfbot-v13');
const express = require('express');
const config = require('./config');

const app = express();
app.get('/', (req, res) => res.send('Server Online'));
app.listen(process.env.PORT || 3000);

const client = new Client({ checkUpdate: false });

const GTA_APP_ID = '1402418714716143646';

// You only need the title, artist, link, and duration now. 
// The script will find the image automatically.
const playlist = [
  {
    "title": "Blinding Lights",
    "artist": "The Weeknd",
    "link": "https://open.spotify.com/track/0VjIjW4GlUZAMYd2vXMi3b",
    "durationMs": 200040
  },
  {
    "title": "Levitating",
    "artist": "Dua Lipa",
    "link": "https://open.spotify.com/track/463CkQjx2Zk1yXoBuierM9",
    "durationMs": 203807
  },
  {
    "title": "Stay",
    "artist": "The Kid LAROI & Justin Bieber",
    "link": "https://open.spotify.com/track/567e29TDzLwZwfDuEpGTwo",
    "durationMs": 141805
  },
  {
    "title": "Heat Waves",
    "artist": "Glass Animals",
    "link": "https://open.spotify.com/track/02MWAaffLxlfxAUY7c5dvx",
    "durationMs": 238805
  },
  {
    "title": "As It Was",
    "artist": "Harry Styles",
    "link": "https://open.spotify.com/track/4LRPiXqCikLlN15c3yImP7",
    "durationMs": 167303
  },
  {
    "title": "Shape of You",
    "artist": "Ed Sheeran",
    "link": "https://open.spotify.com/track/7qiZfU4dY1lWllzX7mPBI3",
    "durationMs": 233712
  },
  {
    "title": "Someone You Loved",
    "artist": "Lewis Capaldi",
    "link": "https://open.spotify.com/track/7qEHsqek33rTcFNT9PFqLf",
    "durationMs": 182161
  },
  {
    "title": "Sunflower",
    "artist": "Post Malone & Swae Lee",
    "link": "https://open.spotify.com/track/3KkXRkHbMCARz0aVfEt68P",
    "durationMs": 158040
  },
  {
    "title": "Bad Guy",
    "artist": "Billie Eilish",
    "link": "https://open.spotify.com/track/2Fxmhks0bxGSBdJ92vM65x",
    "durationMs": 194088
  },
  {
    "title": "Senorita",
    "artist": "Shawn Mendes & Camila Cabello",
    "link": "https://open.spotify.com/track/6v3KW9xbzN5yKLt9YKDYA2",
    "durationMs": 190960
  },
  {
    "title": "Perfect",
    "artist": "Ed Sheeran",
    "link": "https://open.spotify.com/track/0tgVpDi06FyKpA1z0VMD4v",
    "durationMs": 263400
  },
  {
    "title": "Dance Monkey",
    "artist": "Tones And I",
    "link": "https://open.spotify.com/track/1rgnBhdG2JDFTbYkYRZAku",
    "durationMs": 209438
  },
  {
    "title": "Watermelon Sugar",
    "artist": "Harry Styles",
    "link": "https://open.spotify.com/track/6UelLqGlWMcVH1E5c4H7lY",
    "durationMs": 174000
  },
  {
    "title": "Don't Start Now",
    "artist": "Dua Lipa",
    "link": "https://open.spotify.com/track/6WrI0LAC5M1Rw2MnX2ZvEg",
    "durationMs": 183290
  },
  {
    "title": "Rockstar",
    "artist": "Post Malone ft. 21 Savage",
    "link": "https://open.spotify.com/track/3Xm5N9U5uLz9y8g2d8Q8cB",
    "durationMs": 218146
  },
  {
    "title": "Circles",
    "artist": "Post Malone",
    "link": "https://open.spotify.com/track/5x6Xp4y9c5W8z1m4k7t2vJ",
    "durationMs": 215280
  },
  {
    "title": "The Box",
    "artist": "Roddy Ricch",
    "link": "https://open.spotify.com/track/0H9xR4z6v1c2b3n4m5q7wE",
    "durationMs": 196720
  },
  {
    "title": "Life Is Good",
    "artist": "Future & Drake",
    "link": "https://open.spotify.com/track/2Z8y7X6w5v4u3t2s1r0qP",
    "durationMs": 237000
  },
  {
    "title": "Savage Love",
    "artist": "Jawsh 685 & Jason Derulo",
    "link": "https://open.spotify.com/track/4Y7x6W5v4u3t2s1r0q9pO",
    "durationMs": 171000
  },
  {
    "title": "Say So",
    "artist": "Doja Cat",
    "link": "https://open.spotify.com/track/5X6y7Z8a9B0c1D2e3F4gH",
    "durationMs": 237000
  },
  {
    "title": "Intentions",
    "artist": "Justin Bieber ft. Quavo",
    "link": "https://open.spotify.com/track/6T5u4V3w2X1y0Z9a8B7cD",
    "durationMs": 212000
  },
  {
    "title": "Sunday Best",
    "artist": "Surfaces",
    "link": "https://open.spotify.com/track/7Q8w9E0r1T2y3U4i5O6pA",
    "durationMs": 158000
  },
  {
    "title": "Adore You",
    "artist": "Harry Styles",
    "link": "https://open.spotify.com/track/8O7i6U5y4T3r2E1w0Q9pZ",
    "durationMs": 207000
  },
  {
    "title": "Falling",
    "artist": "Trevor Daniel",
    "link": "https://open.spotify.com/track/9N8m7B6v5C4x3Z2a1S0dF",
    "durationMs": 159000
  },
  {
    "title": "Everything I Wanted",
    "artist": "Billie Eilish",
    "link": "https://open.spotify.com/track/0L9k8J7h6G5f4D3s2A1pO",
    "durationMs": 245000
  },
  {
    "title": "Memories",
    "artist": "Maroon 5",
    "link": "https://open.spotify.com/track/1K2L3M4N5O6P7Q8R9S0T",
    "durationMs": 189000
  },
  {
    "title": "10,000 Hours",
    "artist": "Dan + Shay & Justin Bieber",
    "link": "https://open.spotify.com/track/2J3K4L5M6N7O8P9Q0R1S",
    "durationMs": 167000
  },
  {
    "title": "Lose You To Love Me",
    "artist": "Selena Gomez",
    "link": "https://open.spotify.com/track/3H4I5J6K7L8M9N0O1P2Q",
    "durationMs": 206000
  },
  {
    "title": "Beautiful People",
    "artist": "Ed Sheeran ft. Khalid",
    "link": "https://open.spotify.com/track/4G5H6I7J8K9L0M1N2O3P",
    "durationMs": 197000
  },
  {
    "title": "I Don't Care",
    "artist": "Ed Sheeran & Justin Bieber",
    "link": "https://open.spotify.com/track/5F6G7H8I9J0K1L2M3N4O",
    "durationMs": 219000
  },
  {
    "title": "Old Town Road",
    "artist": "Lil Nas X",
    "link": "https://open.spotify.com/track/6E7F8G9H0I1J2K3L4M5N",
    "durationMs": 157000
  },
  {
    "title": "Wow.",
    "artist": "Post Malone",
    "link": "https://open.spotify.com/track/7D8E9F0G1H2I3J4K5L6M",
    "durationMs": 149000
  },
  {
    "title": "Happier",
    "artist": "Marshmello & Bastille",
    "link": "https://open.spotify.com/track/8C9D0E1F2G3H4I5J6K7L",
    "durationMs": 214000
  },
  {
    "title": "Sicko Mode",
    "artist": "Travis Scott",
    "link": "https://open.spotify.com/track/9B0C1D2E3F4G5H6I7J8K",
    "durationMs": 312000
  },
  {
    "title": "Girls Like You",
    "artist": "Maroon 5 ft. Cardi B",
    "link": "https://open.spotify.com/track/0A1B2C3D4E5F6G7H8I9J",
    "durationMs": 235000
  },
  {
    "title": "God's Plan",
    "artist": "Drake",
    "link": "https://open.spotify.com/track/1Z2A3B4C5D6E7F8G9H0I",
    "durationMs": 198000
  },
  {
    "title": "Perfect Duet",
    "artist": "Ed Sheeran & Beyoncé",
    "link": "https://open.spotify.com/track/2Y3Z4A5B6C7D8E9F0G1H",
    "durationMs": 259000
  },
  {
    "title": "Havana",
    "artist": "Camila Cabello ft. Young Thug",
    "link": "https://open.spotify.com/track/3X4Y5Z6A7B8C9D0E1F2G",
    "durationMs": 217000
  },
  {
    "title": "Rockstar",
    "artist": "Post Malone ft. 21 Savage",
    "link": "https://open.spotify.com/track/4W5X6Y7Z8A9B0C1D2E3F",
    "durationMs": 218000
  },
  {
    "title": "Shape of You",
    "artist": "Ed Sheeran",
    "link": "https://open.spotify.com/track/5V6W7X8Y9Z0A1B2C3D4E",
    "durationMs": 233000
  },
  {
    "title": "Despacito",
    "artist": "Luis Fonsi & Daddy Yankee",
    "link": "https://open.spotify.com/track/6U7V8W9X0Y1Z2A3B4C5D",
    "durationMs": 229000
  },
  {
    "title": "Something Just Like This",
    "artist": "The Chainsmokers & Coldplay",
    "link": "https://open.spotify.com/track/7T8U9V0W1X2Y3Z4A5B6C",
    "durationMs": 247000
  },
  {
    "title": "Believer",
    "artist": "Imagine Dragons",
    "link": "https://open.spotify.com/track/8S9T0U1V2W3X4Y5Z6A7B",
    "durationMs": 204000
  },
  {
    "title": "Thunder",
    "artist": "Imagine Dragons",
    "link": "https://open.spotify.com/track/9R0S1T2U3V4W5X6Y7Z8A",
    "durationMs": 187000
  },
  {
    "title": "Sorry",
    "artist": "Justin Bieber",
    "link": "https://open.spotify.com/track/0Q1R2S3T4U5V6W7X8Y9Z",
    "durationMs": 200000
  },
  {
    "title": "Love Yourself",
    "artist": "Justin Bieber",
    "link": "https://open.spotify.com/track/1P2Q3R4S5T6U7V8W9X0Y",
    "durationMs": 233000
  },
  {
    "title": "One Dance",
    "artist": "Drake ft. Wizkid & Kyla",
    "link": "https://open.spotify.com/track/2O3P4Q5R6S7T8U9V0W1X",
    "durationMs": 173000
  },
  {
    "title": "Closer",
    "artist": "The Chainsmokers ft. Halsey",
    "link": "https://open.spotify.com/track/3N4O5P6Q7R8S9T0U1V2W",
    "durationMs": 244000
  },
  {
    "title": "Stressed Out",
    "artist": "Twenty One Pilots",
    "link": "https://open.spotify.com/track/4M5N6O7P8Q9R0S1T2U3V",
    "durationMs": 202000
  }
];

let currentTrackIndex = 0;
const sessionStartTime = Date.now();

async function updatePresence() {
  const track = playlist[currentTrackIndex];
  const startTimestamp = Date.now();
  const endTimestamp = startTimestamp + track.durationMs;
  const songId = track.link.split('/track/')[1].split('?')[0];

  let imageUri = null;

  try {
    const res = await fetch(`https://open.spotify.com/oembed?url=${track.link}`);
    const data = await res.json();
    if (data.thumbnail_url) {
      imageUri = `spotify:${data.thumbnail_url.split('/image/')[1]}`;
    }
  } catch (err) {
    console.log(`Failed to fetch cover for ${track.title}`);
  }

  const spotifyPresence = new SpotifyRPC(client)
    .setAssetsLargeText(track.title)
    .setState(track.artist)
    .setDetails(track.title)
    .setStartTimestamp(startTimestamp)
    .setEndTimestamp(endTimestamp)
    .setSongId(songId);

  if (imageUri) {
    spotifyPresence.setAssetsLargeImage(imageUri);
  }

  const gtaPresence = new RichPresence(client)
    .setApplicationId(GTA_APP_ID)
    .setType('PLAYING')
    .setName('Grand Theft Auto V Legacy')
    .setStartTimestamp(sessionStartTime);

  client.user.setPresence({
    activities: [gtaPresence, spotifyPresence],
    status: 'online'
  });

  console.log(`[Now Playing] ${track.title} - ${track.artist}`);

  currentTrackIndex = (currentTrackIndex + 1) % playlist.length;
  setTimeout(updatePresence, track.durationMs);
}

client.on('ready', () => {
  console.log(`Connected successfully as ${client.user.tag}`);
  updatePresence();
});

client.login(config.TOKEN);