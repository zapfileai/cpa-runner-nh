const newHampshireCities = [
  "Seabrook", "Somersworth", "Spofford", "Springfield", "Strafford",
  "Stratham", "Sugar Hill", "Sullivan", "Sunapee", "Suncook",
  "Swanzey", "Tamworth", "Temple", "Tilton", "Walpole",
  "Warner", "Waterville Valley", "Weare", "West Chesterfield", "West Lebanon",
  "Westmoreland", "Wilmot", "Wilton", "Winchester", "Windham",
  "Wolfeboro", "Wolfeboro Falls", "Woodsville",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < newHampshireCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(newHampshireCities[i]);
}

module.exports = { batches };
