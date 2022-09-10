const quotes = [
  {
    quote:
      "A writer never has a vacation. For a writer life consists of either writing or thinking about writing.",
    author: "Eugene Ionesco",
  },
  {
    quote:
      "All writers are vain, selfish and lazy, and at the very bottom of their motives lies a mystery. Writing a book is a long, exhausting struggle",
    author: "George Orwell",
  },
  {
    quote:
      "A writer is someone for whom writing is more difficult than it is for other people.",
    author: "Thomas Mann",
  },
  {
    quote:
      "But writers and their woes: they couldn’t be parted. Not for anything.",
    author: "Naomi Wood",
  },
  {
    quote:
      "Authors must spend months, years making fantasy believable in a single work while reality runs rampant and complete chaos elsewhere.",
    author: "Don Roff",
  },
  {
    quote:
      "A good novel tells us the truth about its hero; but a bad novel tells us the truth about its author.",
    author: "G.K. Chesterton",
  },
  {
    quote:
      "There is no idea so brilliant or original that a sufficiently-untalented writer can’t screw it up.",
    author: "Raymond E. Feist",
  },
  {
    quote: "The standard personality type for a writer is a shy megalomaniac.",
    author: "John Lanchester",
  },
  {
    quote: "I’m the kind of writer that people think other people are reading.",
    author: "V. S. Naipaul",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
//-> quotes.length 가 맞는건지 모르겟음 분명 숫자9가 나와서 저게 가능한거일텐데 왜 저게 9이며 9이더라도 9가 안나와 이렇게 되면
//-> 8까지밖에 안나오는데...

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
