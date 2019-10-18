const history = [
  {
    event: 'The Declaration of Independence is signed.',
    year: 1776
  },
  {
    event: 'Thomas Jefferson becomes President of the United States.',
    year: 1801
  },
  {
    event: 'Abraham Lincoln becomes President of the United States.',
    year: 1860
  },
  {
    event: 'American Civil War begins.',
    year: 1861
  },
  {
    event: 'Thomas Edison reveals the incandescent lightbulb. 💡',
    year: 1879
  },
  {
    event: 'Napolean invades Great Britain.',
    year: 1797
  },
  {
    event: 'Benjamin Franklin is born. 🌩️',
    year: 1706
  },
  {
    event: 'Queen Victoria died.',
    year: 1901
  },
  {
    event:
      'Winston Churchill gives his maiden speech at the House of Commons. (age 25)',
    year: 1901
  },
  {
    event: 'Coronation of Queen Victoria. 👑',
    year: 1838
  },
  {
    event: 'Telephone was invented. ☎️',
    year: 1876
  },
  {
    event: 'Camera was invented in the 1830s (roughly). 📷',
    year: 1830
  },
  {
    event: 'Construction began on the Eiffel Tower.',
    year: 1887
  },
  {
    event:
      'Thomas Stevens, 1st man to bicycle around the world. Begins and ends in SF. 🌉',
    year: 1887
  },
  {
    event: 'Construction began on the Panama Canal. 🛳️',
    year: 1880
  },
  {
    event: 'Lights came on on Broadway. 🏙️',
    year: 1880
  },
  {
    event: "The Seven Years' War began.",
    year: 1756
  },
  {
    event: "The world's first successful appendectomy – London.",
    year: 1735
  },
  {
    event: "The King's Highway was completed – Boston, MA to Charleston, SC.",
    year: 1735
  },
  {
    event: "Britain's slavery abolition act is passed, banning slavery.",
    year: 1833
  },
  {
    event: 'Washington monument was dedicated in DC.',
    year: 1885
  },
  {
    event:
      'Eastman film company (Kodak) manufactures their first motion picture movie. 🎥',
    year: 1885
  },
  {
    event: 'Voltaire first used his penname.',
    year: 1718
  },
  {
    event: 'The city of New Orleans was established.',
    year: 1718
  },
  {
    event: 'The white potato arrived in New England from England. 🥔',
    year: 1718
  },
  {
    event: 'The London – Paris telephone connection was established.',
    year: 1891
  },
  {
    event: 'Carl Benz invents the very first automobile. 🚗',
    year: 1886
  },
  {
    event: 'Dr. John Pemberton invents CocaCola. 🥤',
    year: 1886
  },
  {
    event: "General Custer's last stand at the Battle of Little Big Horn. 🎺",
    year: 1876
  },
  {
    event: 'Grand Central Station opened.',
    year: 1913
  },
  {
    event: 'Empire State Building opens. ',
    year: 1931
  },
  {
    event: 'Theodore (Teddy) Roosevelt became president.',
    year: 1901
  },
  {
    event: 'Boy Scouts of America was founded.',
    year: 1910
  },
  {
    event:
      'Earliest motion picture. Men make a bet on whether a horse keeps a foot on the ground while running. 🏇',
    year: 1878
  },
  {
    event: 'Charles Dickens is born.',
    year: 1812
  },
  {
    event: "Failed coup attempt against Napolean's regieme.",
    year: 1812
  },
  {
    event:
      'Stanford University is founded by railroad tychoon Leeland Stanford.',
    year: 1891
  },
  {
    event: 'First radio contest.',
    year: 1910
  },
  {
    event: 'The game of basketball was invented by James Naismith. 🏀',
    year: 1891
  },
  {
    event:
      'Henry Ford constructed his first self-propelled vehicle, the Ford Quadricycle.',
    year: 1896
  },
  {
    event: 'Electricity is made available in homes. ⚡',
    year: 1878
  },
  {
    event: 'California cable car service began. 🚋',
    year: 1878
  },
  {
    event: "Tolkien's, The Hobbit is published in London.",
    year: 1937
  },
  {
    event: 'The Hindenburg disaster occurs in New Jersey.',
    year: 1937
  },
  {
    event: 'King George VI is crowned in London.',
    year: 1937
  },
  {
    event: 'Gone with the Wind, the novel is published.',
    year: 1936
  },
  {
    event: 'The New York Stock Exchange was founded.',
    year: 1817
  },
  {
    event: 'First ocean liner made of steel. People thought it would sink. 🛳️',
    year: 1879
  },
  {
    event: 'The Titanic launched its first and last voyage. 🛳️',
    year: 1912
  },
  {
    event:
      'Thomas Jefferson sends Lewis and Clark off on their expedition across the newly purchased Louisanna Territory.',
    year: 1804
  },
  {
    event: 'Aaron Burr mortally wounds Alexander Hamilton in a pistol duel.',
    year: 1804
  },
  {
    event: 'Samuel Morse develops Morse Code.',
    year: 1844
  },
  {
    event: 'The Brooklyn Bridge opens after 13 years of construction.',
    year: 1883
  },
  {
    event: 'Amelia Earhart dissapears after taking off from New Guinea.',
    year: 1937
  },
  {
    event: 'Yellowstone is designated the 1st national park in the USA.',
    year: 1872
  },
  {
    event: `Mozart's "The Marriage of Figaro" premieres in Vienna. 🎹`,
    year: 1786
  },
  {
    event: `Amazing Grace first used in a sermon - Buckingham England.`,
    year: 1773
  },
  {
    event: `Captain Cook, first European explorer to cross into the Antarctic circle.`,
    year: 1773
  },
  {
    event: `Parliament passed the Tea Act, triggering the Boston Tea Party.`,
    year: 1773
  },
  {
    event: `Grover Cleveland dedicates the Statue of Liberty.`,
    year: 1886
  },
  {
    event: `1st practically used bicycle invented by Baron Karl von Drais in Germany.`,
    year: 1817
  },
  {
    event: `Edison invented the phonograph.`,
    year: 1877
  },
  {
    event: `U.S. public debt drops to 0 for the only time in history.`,
    year: 1835
  },
  {
    event: `Tale of Two Cities was published by Charles Dickens.`,
    year: 1859
  },
  {
    event: `Ground was broken on the Suez Canal in Egypt.`,
    year: 1859
  },
  {
    event:
      'President Taft started the tradition of throwing the opening pitch for the MLB season. ⚾',
    year: 1910
  }
];

const dateFeed = document.querySelector('.dateFeed');
const sortByYear = history.sort((a, b) => a.year - b.year);

const displayHistory = sortByYear.map(event => {
  const newLine = document.createElement('p');
  const newContent = document.createTextNode(`${event.year}: ${event.event}`);
  newLine.appendChild(newContent);
  dateFeed.appendChild(newLine);
});

displayHistory;
