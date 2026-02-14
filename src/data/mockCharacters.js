/**
 * Mock character data - no external API, no rate limits.
 * Same structure as Rick and Morty API for seamless integration.
 */
const MOCK_CHARACTERS = [
  { id: "1", name: "Rick Sanchez", status: "Alive", species: "Human", type: "", gender: "Male", image: "https://placehold.co/300x300/1a472a/ffffff?text=RS", origin: { id: "1", name: "Earth (C-137)", type: "Planet", dimension: "Dimension C-137" }, location: { id: "1", name: "Earth (Replacement Dimension)", type: "Planet", dimension: "Replacement Dimension" } },
  { id: "2", name: "Morty Smith", status: "Alive", species: "Human", type: "", gender: "Male", image: "https://placehold.co/300x300/1a472a/ffffff?text=MS", origin: { id: "2", name: "Earth (Replacement Dimension)", type: "Planet", dimension: "Replacement Dimension" }, location: { id: "2", name: "Earth (Replacement Dimension)", type: "Planet", dimension: "Replacement Dimension" } },
  { id: "3", name: "Summer Smith", status: "Alive", species: "Human", type: "", gender: "Female", image: "https://placehold.co/300x300/1a472a/ffffff?text=SS", origin: { id: "3", name: "Earth (Replacement Dimension)", type: "Planet", dimension: "Replacement Dimension" }, location: { id: "3", name: "Earth (Replacement Dimension)", type: "Planet", dimension: "Replacement Dimension" } },
  { id: "4", name: "Beth Smith", status: "Alive", species: "Human", type: "", gender: "Female", image: "https://placehold.co/300x300/1a472a/ffffff?text=BS", origin: { id: "4", name: "Earth (Replacement Dimension)", type: "Planet", dimension: "Replacement Dimension" }, location: { id: "4", name: "Earth (Replacement Dimension)", type: "Planet", dimension: "Replacement Dimension" } },
  { id: "5", name: "Jerry Smith", status: "Alive", species: "Human", type: "", gender: "Male", image: "https://placehold.co/300x300/1a472a/ffffff?text=JS", origin: { id: "5", name: "Earth (Replacement Dimension)", type: "Planet", dimension: "Replacement Dimension" }, location: { id: "5", name: "Earth (Replacement Dimension)", type: "Planet", dimension: "Replacement Dimension" } },
  { id: "6", name: "Abadango Cluster Princess", status: "Alive", species: "Alien", type: "", gender: "Female", image: "https://placehold.co/300x300/2d5016/ffffff?text=ACP", origin: { id: "6", name: "Abadango", type: "Cluster", dimension: "unknown" }, location: { id: "6", name: "Abadango", type: "Cluster", dimension: "unknown" } },
  { id: "7", name: "Abradolf Lincler", status: "unknown", species: "Human", type: "Genetic experiment", gender: "Male", image: "https://placehold.co/300x300/1a472a/ffffff?text=AL", origin: { id: "7", name: "Earth (Replacement Dimension)", type: "Planet", dimension: "Replacement Dimension" }, location: { id: "7", name: "Testicle Monster Dimension", type: "Dimension", dimension: "Testicle Monster Dimension" } },
  { id: "8", name: "Adjudicator Rick", status: "Dead", species: "Human", type: "", gender: "Male", image: "https://placehold.co/300x300/4a1c1c/ffffff?text=ARR", origin: { id: "8", name: "unknown", type: "", dimension: "" }, location: { id: "8", name: "Citadel of Ricks", type: "Space station", dimension: "unknown" } },
  { id: "9", name: "Agency Director", status: "Dead", species: "Human", type: "", gender: "Male", image: "https://placehold.co/300x300/4a1c1c/ffffff?text=AD", origin: { id: "9", name: "Earth (Replacement Dimension)", type: "Planet", dimension: "Replacement Dimension" }, location: { id: "9", name: "Earth (Replacement Dimension)", type: "Planet", dimension: "Replacement Dimension" } },
  { id: "10", name: "Alan Rails", status: "Dead", species: "Human", type: "Superhuman (Ghost trains summoner)", gender: "Male", image: "https://placehold.co/300x300/4a1c1c/ffffff?text=AR", origin: { id: "10", name: "unknown", type: "", dimension: "" }, location: { id: "10", name: "Worldender's lair", type: "Planet", dimension: "unknown" } },
  { id: "11", name: "Albert Einstein", status: "Dead", species: "Human", type: "", gender: "Male", image: "https://placehold.co/300x300/4a1c1c/ffffff?text=AE", origin: { id: "11", name: "Earth (C-137)", type: "Planet", dimension: "Dimension C-137" }, location: { id: "11", name: "Earth (Replacement Dimension)", type: "Planet", dimension: "Replacement Dimension" } },
  { id: "12", name: "Alexander", status: "Dead", species: "Human", type: "", gender: "Male", image: "https://placehold.co/300x300/4a1c1c/ffffff?text=AX", origin: { id: "12", name: "Earth (C-137)", type: "Planet", dimension: "Dimension C-137" }, location: { id: "12", name: "Anatomy Park", type: "Microverse", dimension: "Dimension C-137" } },
  { id: "13", name: "Alien Googah", status: "unknown", species: "Alien", type: "", gender: "unknown", image: "https://placehold.co/300x300/2d5016/ffffff?text=AG", origin: { id: "13", name: "unknown", type: "", dimension: "" }, location: { id: "13", name: "Earth (Replacement Dimension)", type: "Planet", dimension: "Replacement Dimension" } },
  { id: "14", name: "Alien Morty", status: "unknown", species: "Alien", type: "", gender: "Male", image: "https://placehold.co/300x300/2d5016/ffffff?text=AM", origin: { id: "14", name: "unknown", type: "", dimension: "" }, location: { id: "14", name: "Citadel of Ricks", type: "Space station", dimension: "unknown" } },
  { id: "15", name: "Amish Cyborg", status: "Dead", species: "Alien", type: "Parasite", gender: "Male", image: "https://placehold.co/300x300/4a1c1c/ffffff?text=AC", origin: { id: "15", name: "unknown", type: "", dimension: "" }, location: { id: "15", name: "Earth (Replacement Dimension)", type: "Planet", dimension: "Replacement Dimension" } },
  { id: "16", name: "Annie", status: "Alive", species: "Human", type: "", gender: "Female", image: "https://placehold.co/300x300/1a472a/ffffff?text=AN", origin: { id: "16", name: "Earth (C-137)", type: "Planet", dimension: "Dimension C-137" }, location: { id: "16", name: "Anatomy Park", type: "Microverse", dimension: "Dimension C-137" } },
  { id: "17", name: "Antenna Morty", status: "Alive", species: "Human", type: "Human with antennae", gender: "Male", image: "https://placehold.co/300x300/1a472a/ffffff?text=AM2", origin: { id: "17", name: "unknown", type: "", dimension: "" }, location: { id: "17", name: "Citadel of Ricks", type: "Space station", dimension: "unknown" } },
  { id: "18", name: "Ants in my Eyes Johnson", status: "unknown", species: "Human", type: "Human with ants in his eyes", gender: "Male", image: "https://placehold.co/300x300/2d5016/ffffff?text=AEJ", origin: { id: "18", name: "unknown", type: "", dimension: "" }, location: { id: "18", name: "Interdimensional Cable", type: "TV", dimension: "unknown" } },
  { id: "19", name: "Aqua Morty", status: "unknown", species: "Humanoid", type: "Fish-Person", gender: "Male", image: "https://placehold.co/300x300/2d5016/ffffff?text=AQM", origin: { id: "19", name: "unknown", type: "", dimension: "" }, location: { id: "19", name: "Citadel of Ricks", type: "Space station", dimension: "unknown" } },
  { id: "20", name: "Aqua Rick", status: "unknown", species: "Humanoid", type: "Fish-Person", gender: "Male", image: "https://placehold.co/300x300/2d5016/ffffff?text=AQR", origin: { id: "20", name: "unknown", type: "", dimension: "" }, location: { id: "20", name: "Citadel of Ricks", type: "Space station", dimension: "unknown" } },
  { id: "21", name: "Arcade Alien", status: "unknown", species: "Alien", type: "", gender: "Male", image: "https://placehold.co/300x300/2d5016/ffffff?text=AA", origin: { id: "21", name: "unknown", type: "", dimension: "" }, location: { id: "21", name: "Immortality Field Resort", type: "Resort", dimension: "unknown" } },
  { id: "22", name: "Armagheadon", status: "Alive", species: "Alien", type: "Cromulon", gender: "Male", image: "https://placehold.co/300x300/1a472a/ffffff?text=ARM", origin: { id: "22", name: "Cromulon Dimension", type: "Dimension", dimension: "Cromulon Dimension" }, location: { id: "22", name: "Cromulon Dimension", type: "Dimension", dimension: "Cromulon Dimension" } },
  { id: "23", name: "Armothy", status: "Dead", species: "unknown", type: "Self-aware arm", gender: "Male", image: "https://placehold.co/300x300/4a1c1c/ffffff?text=ARM2", origin: { id: "23", name: "Post-Apocalyptic Earth", type: "Planet", dimension: "Post-Apocalyptic Dimension" }, location: { id: "23", name: "Post-Apocalyptic Earth", type: "Planet", dimension: "Post-Apocalyptic Dimension" } },
  { id: "24", name: "Arthricia", status: "Alive", species: "Alien", type: "Cat-Person", gender: "Female", image: "https://placehold.co/300x300/1a472a/ffffff?text=ART", origin: { id: "24", name: "Purge Planet", type: "Planet", dimension: "Replacement Dimension" }, location: { id: "24", name: "Purge Planet", type: "Planet", dimension: "Replacement Dimension" } },
  { id: "25", name: "Artist Morty", status: "Alive", species: "Human", type: "", gender: "Male", image: "https://placehold.co/300x300/1a472a/ffffff?text=ARTM", origin: { id: "25", name: "unknown", type: "", dimension: "" }, location: { id: "25", name: "Citadel of Ricks", type: "Space station", dimension: "unknown" } },
  { id: "26", name: "Attila Starwar", status: "Alive", species: "Human", type: "", gender: "Male", image: "https://placehold.co/300x300/1a472a/ffffff?text=AS", origin: { id: "26", name: "unknown", type: "", dimension: "" }, location: { id: "26", name: "Interdimensional Cable", type: "TV", dimension: "unknown" } },
  { id: "27", name: "Baby Legs", status: "Alive", species: "Human", type: "Human with baby legs", gender: "Male", image: "https://placehold.co/300x300/1a472a/ffffff?text=BL", origin: { id: "27", name: "unknown", type: "", dimension: "" }, location: { id: "27", name: "Interdimensional Cable", type: "TV", dimension: "unknown" } },
  { id: "28", name: "Baby Wizard", status: "Dead", species: "Alien", type: "Parasite", gender: "Male", image: "https://placehold.co/300x300/4a1c1c/ffffff?text=BW", origin: { id: "28", name: "unknown", type: "", dimension: "" }, location: { id: "28", name: "Earth (Replacement Dimension)", type: "Planet", dimension: "Replacement Dimension" } },
  { id: "29", name: "Bearded Lady", status: "Dead", species: "Alien", type: "Parasite", gender: "Female", image: "https://placehold.co/300x300/4a1c1c/ffffff?text=BRL", origin: { id: "29", name: "unknown", type: "", dimension: "" }, location: { id: "29", name: "Earth (Replacement Dimension)", type: "Planet", dimension: "Replacement Dimension" } },
  { id: "30", name: "Beebo", status: "Dead", species: "Alien", type: "", gender: "Male", image: "https://placehold.co/300x300/4a1c1c/ffffff?text=BEB", origin: { id: "30", name: "Venzenulon 7", type: "Planet", dimension: "unknown" }, location: { id: "30", name: "Venzenulon 7", type: "Planet", dimension: "unknown" } },
  { id: "31", name: "Benjamin", status: "Alive", species: "Human", type: "", gender: "Male", image: "https://placehold.co/300x300/1a472a/ffffff?text=BEN", origin: { id: "31", name: "Earth (C-137)", type: "Planet", dimension: "Dimension C-137" }, location: { id: "31", name: "Earth (C-137)", type: "Planet", dimension: "Dimension C-137" } },
  { id: "32", name: "Bepisian", status: "Alive", species: "Alien", type: "Bepisian", gender: "unknown", image: "https://placehold.co/300x300/1a472a/ffffff?text=BEP", origin: { id: "32", name: "Bepis 9", type: "Planet", dimension: "Dimension C-137" }, location: { id: "32", name: "Bepis 9", type: "Planet", dimension: "Dimension C-137" } },
  { id: "33", name: "Beta-Seven", status: "Alive", species: "Alien", type: "Hivemind", gender: "unknown", image: "https://placehold.co/300x300/1a472a/ffffff?text=B7", origin: { id: "33", name: "unknown", type: "", dimension: "" }, location: { id: "33", name: "unknown", type: "", dimension: "" } },
  { id: "34", name: "Beth Smith", status: "Alive", species: "Human", type: "Clone", gender: "Female", image: "https://placehold.co/300x300/1a472a/ffffff?text=BS2", origin: { id: "34", name: "Earth (C-137)", type: "Planet", dimension: "Dimension C-137" }, location: { id: "34", name: "Earth (C-137)", type: "Planet", dimension: "Dimension C-137" } },
  { id: "35", name: "Bible Rick", status: "Dead", species: "Human", type: "", gender: "Male", image: "https://placehold.co/300x300/4a1c1c/ffffff?text=BR", origin: { id: "35", name: "Earth (Replacement Dimension)", type: "Planet", dimension: "Replacement Dimension" }, location: { id: "35", name: "Earth (Replacement Dimension)", type: "Planet", dimension: "Replacement Dimension" } },
  { id: "36", name: "Big Head Morty", status: "unknown", species: "Human", type: "Human with giant head", gender: "Male", image: "https://placehold.co/300x300/2d5016/ffffff?text=BHM", origin: { id: "36", name: "unknown", type: "", dimension: "" }, location: { id: "36", name: "Citadel of Ricks", type: "Space station", dimension: "unknown" } },
  { id: "37", name: "Big Morty", status: "Dead", species: "Human", type: "", gender: "Male", image: "https://placehold.co/300x300/4a1c1c/ffffff?text=BM", origin: { id: "37", name: "unknown", type: "", dimension: "" }, location: { id: "37", name: "Citadel of Ricks", type: "Space station", dimension: "unknown" } },
  { id: "38", name: "Body Guard Morty", status: "Dead", species: "Human", type: "", gender: "Male", image: "https://placehold.co/300x300/4a1c1c/ffffff?text=BGM", origin: { id: "38", name: "unknown", type: "", dimension: "" }, location: { id: "38", name: "Citadel of Ricks", type: "Space station", dimension: "unknown" } },
  { id: "39", name: "Bill", status: "Alive", species: "Human", type: "", gender: "Male", image: "https://placehold.co/300x300/1a472a/ffffff?text=BILL", origin: { id: "39", name: "Earth (C-137)", type: "Planet", dimension: "Dimension C-137" }, location: { id: "39", name: "Earth (C-137)", type: "Planet", dimension: "Dimension C-137" } },
  { id: "40", name: "Bill Volleyball", status: "Dead", species: "Alien", type: "Parasite", gender: "Male", image: "https://placehold.co/300x300/4a1c1c/ffffff?text=BV", origin: { id: "40", name: "unknown", type: "", dimension: "" }, location: { id: "40", name: "Earth (Replacement Dimension)", type: "Planet", dimension: "Replacement Dimension" } },
  { id: "41", name: "Birdperson", status: "Dead", species: "Alien", type: "Bird-Person", gender: "Male", image: "https://placehold.co/300x300/4a1c1c/ffffff?text=BP", origin: { id: "41", name: "Bird World", type: "Planet", dimension: "Dimension C-137" }, location: { id: "41", name: "Bird World", type: "Planet", dimension: "Dimension C-137" } },
  { id: "42", name: "Black Rick", status: "Alive", species: "Human", type: "", gender: "Male", image: "https://placehold.co/300x300/1a472a/ffffff?text=BLR", origin: { id: "42", name: "unknown", type: "", dimension: "" }, location: { id: "42", name: "Citadel of Ricks", type: "Space station", dimension: "unknown" } },
  { id: "43", name: "Blamph", status: "Alive", species: "Alien", type: "", gender: "unknown", image: "https://placehold.co/300x300/1a472a/ffffff?text=BLAM", origin: { id: "43", name: "unknown", type: "", dimension: "" }, location: { id: "43", name: "unknown", type: "", dimension: "" } },
  { id: "44", name: "Blim Blam", status: "Alive", species: "Alien", type: "Korblock", gender: "Male", image: "https://placehold.co/300x300/1a472a/ffffff?text=BB", origin: { id: "44", name: "unknown", type: "", dimension: "" }, location: { id: "44", name: "Earth (Replacement Dimension)", type: "Planet", dimension: "Replacement Dimension" } },
  { id: "45", name: "Bocaj", status: "Alive", species: "Alien", type: "", gender: "Male", image: "https://placehold.co/300x300/1a472a/ffffff?text=BOC", origin: { id: "45", name: "unknown", type: "", dimension: "" }, location: { id: "45", name: "Earth (Replacement Dimension)", type: "Planet", dimension: "Replacement Dimension" } },
  { id: "46", name: "Boom Boom Morty", status: "Dead", species: "Human", type: "", gender: "Male", image: "https://placehold.co/300x300/4a1c1c/ffffff?text=BBM", origin: { id: "46", name: "unknown", type: "", dimension: "" }, location: { id: "46", name: "Citadel of Ricks", type: "Space station", dimension: "unknown" } },
  { id: "47", name: "Borpocian", status: "Alive", species: "Alien", type: "Elephant-Person", gender: "Male", image: "https://placehold.co/300x300/1a472a/ffffff?text=BORP", origin: { id: "47", name: "unknown", type: "", dimension: "" }, location: { id: "47", name: "unknown", type: "", dimension: "" } },
  { id: "48", name: "Brad", status: "Alive", species: "Human", type: "", gender: "Male", image: "https://placehold.co/300x300/1a472a/ffffff?text=BRAD", origin: { id: "48", name: "Earth (Replacement Dimension)", type: "Planet", dimension: "Replacement Dimension" }, location: { id: "48", name: "Earth (Replacement Dimension)", type: "Planet", dimension: "Replacement Dimension" } },
  { id: "49", name: "Brad Anderson", status: "Dead", species: "Human", type: "", gender: "Male", image: "https://placehold.co/300x300/4a1c1c/ffffff?text=BA", origin: { id: "49", name: "Earth (Replacement Dimension)", type: "Planet", dimension: "Replacement Dimension" }, location: { id: "49", name: "Earth (Replacement Dimension)", type: "Planet", dimension: "Replacement Dimension" } },
  { id: "50", name: "Calypso", status: "Dead", species: "Human", type: "Superhuman", gender: "Female", image: "https://placehold.co/300x300/4a1c1c/ffffff?text=CAL", origin: { id: "50", name: "unknown", type: "", dimension: "" }, location: { id: "50", name: "unknown", type: "", dimension: "" } },
  { id: "51", name: "Campaign Manager Morty", status: "Dead", species: "Human", type: "", gender: "Male", image: "https://placehold.co/300x300/4a1c1c/ffffff?text=CMM", origin: { id: "51", name: "unknown", type: "", dimension: "" }, location: { id: "51", name: "Citadel of Ricks", type: "Space station", dimension: "unknown" } },
  { id: "52", name: "Canklanker Thom", status: "Dead", species: "Alien", type: "Gromflomite", gender: "Male", image: "https://placehold.co/300x300/4a1c1c/ffffff?text=CT", origin: { id: "52", name: "Gromflom Prime", type: "Planet", dimension: "Replacement Dimension" }, location: { id: "52", name: "unknown", type: "", dimension: "" } },
  { id: "53", name: "Centaur", status: "Alive", species: "Mythological Creature", type: "Centaur", gender: "Male", image: "https://placehold.co/300x300/1a472a/ffffff?text=CEN", origin: { id: "53", name: "unknown", type: "", dimension: "" }, location: { id: "53", name: "Mr. Goldenfold's dream", type: "Dream", dimension: "Dimension C-137" } },
  { id: "54", name: "Chris", status: "Dead", species: "Alien", type: "Organic gun", gender: "Male", image: "https://placehold.co/300x300/4a1c1c/ffffff?text=CHR", origin: { id: "54", name: "unknown", type: "", dimension: "" }, location: { id: "54", name: "Earth (Replacement Dimension)", type: "Planet", dimension: "Replacement Dimension" } },
  { id: "55", name: "Coach Feratu", status: "Alive", species: "Mythological Creature", type: "Vampire", gender: "Male", image: "https://placehold.co/300x300/1a472a/ffffff?text=CF", origin: { id: "55", name: "unknown", type: "", dimension: "" }, location: { id: "55", name: "Earth (Replacement Dimension)", type: "Planet", dimension: "Replacement Dimension" } },
  { id: "56", name: "Collector", status: "Alive", species: "Alien", type: "Light bulb-Alien", gender: "Male", image: "https://placehold.co/300x300/1a472a/ffffff?text=COL", origin: { id: "56", name: "The Menagerie", type: "Space station", dimension: "unknown" }, location: { id: "56", name: "The Menagerie", type: "Space station", dimension: "unknown" } },
  { id: "57", name: "Colossus", status: "Dead", species: "Human", type: "", gender: "Male", image: "https://placehold.co/300x300/4a1c1c/ffffff?text=COL2", origin: { id: "57", name: "Earth (Replacement Dimension)", type: "Planet", dimension: "Replacement Dimension" }, location: { id: "57", name: "Earth (Replacement Dimension)", type: "Planet", dimension: "Replacement Dimension" } },
  { id: "58", name: "Commander Rick", status: "Dead", species: "Human", type: "", gender: "Male", image: "https://placehold.co/300x300/4a1c1c/ffffff?text=CR", origin: { id: "58", name: "Earth (Replacement Dimension)", type: "Planet", dimension: "Replacement Dimension" }, location: { id: "58", name: "Citadel of Ricks", type: "Space station", dimension: "unknown" } },
  { id: "59", name: "Concerto", status: "Dead", species: "Human", type: "", gender: "Male", image: "https://placehold.co/300x300/4a1c1c/ffffff?text=CON", origin: { id: "59", name: "unknown", type: "", dimension: "" }, location: { id: "59", name: "unknown", type: "", dimension: "" } },
  { id: "60", name: "Conroy", status: "Dead", species: "Robot", type: "", gender: "Male", image: "https://placehold.co/300x300/4a1c1c/ffffff?text=CONR", origin: { id: "60", name: "Earth (Replacement Dimension)", type: "Planet", dimension: "Replacement Dimension" }, location: { id: "60", name: "Earth (Replacement Dimension)", type: "Planet", dimension: "Replacement Dimension" } },
];

const PAGE_SIZE = 20;

/**
 * Simulates paginated API - filters and searches locally, returns paginated results.
 */
export function getCharacters({ page = 1, name = "", status = "", species = "", gender = "" }) {
  let filtered = [...MOCK_CHARACTERS];

  if (name) {
    const term = name.toLowerCase();
    filtered = filtered.filter((c) => c.name.toLowerCase().includes(term));
  }
  if (status) {
    filtered = filtered.filter((c) => c.status === status);
  }
  if (species) {
    filtered = filtered.filter((c) => c.species === species);
  }
  if (gender) {
    filtered = filtered.filter((c) => c.gender === gender);
  }

  const total = filtered.length;
  const start = (page - 1) * PAGE_SIZE;
  const results = filtered.slice(start, start + PAGE_SIZE);
  const hasNext = start + results.length < total;

  return {
    characters: {
      info: {
        next: hasNext ? page + 1 : null,
        count: total,
      },
      results,
    },
  };
}

/**
 * Get single character by ID.
 */
export function getCharacterById(id) {
  return MOCK_CHARACTERS.find((c) => String(c.id) === String(id)) || null;
}
