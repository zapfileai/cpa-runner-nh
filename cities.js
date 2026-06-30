const newHampshireCities = [
  "Acworth", "Alstead", "Alton", "Alton Bay", "Amherst",
  "Andover", "Antrim", "Ashuelot", "Atkinson", "Auburn",
  "Barnstead", "Barrington", "Bartlett", "Bedford", "Belmont",
  "Bennington", "Berlin", "Bow", "Bradford", "Bristol",
  "Brookline", "Campton", "Canaan", "Candia", "Canterbury",
  "Center Barnstead", "Center Conway", "Center Harbor", "Center Sandwich", "Chester",
  "Chichester", "Claremont", "Concord", "Contoocook", "Conway",
  "Cornish", "Danville", "Deerfield", "Derry", "Dover",
  "Dublin", "Dunbarton", "Durham", "East Candia", "East Derry",
  "East Hampstead", "East Kingston", "Eaton Center", "Effingham", "Enfield",
  "Epping", "Epsom", "Etna", "Exeter", "Farmington",
  "Fitzwilliam", "Francestown", "Franconia", "Franklin", "Freedom",
  "Fremont", "Georges Mills", "Gilford", "Gilmanton", "Gilmanton Iron Works",
  "Gilsum", "Glen", "Goffstown", "Gorham", "Grafton",
  "Grantham", "Greenfield", "Greenland", "Greenville", "Groveton",
  "Hampstead", "Hampton", "Hampton Falls", "Hancock", "Hanover",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < newHampshireCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(newHampshireCities[i]);
}

module.exports = { batches };
