const newHampshireCities = [
  "Harrisville", "Haverhill", "Hebron", "Henniker", "Hillsborough",
  "Hinsdale", "Holderness", "Hollis", "Hooksett", "Hudson",
  "Intervale", "Jackson", "Jaffrey", "Keene", "Kingston",
  "Laconia", "Lancaster", "Lebanon", "Lee", "Lincoln",
  "Lisbon", "Litchfield", "Littleton", "Londonderry", "Loudon",
  "Lyme", "Lyndeborough", "Madbury", "Madison", "Manchester",
  "Marlborough", "Marlow", "Melvin Village", "Meredith", "Meriden",
  "Merrimack", "Milford", "Milton", "Milton Mills", "Mont Vernon",
  "Moultonborough", "Nashua", "New Boston", "New Castle", "New Durham",
  "New Hampton", "New Ipswich", "New London", "Newbury", "Newfields",
  "Newmarket", "Newport", "Newton", "North Conway", "North Hampton",
  "North Haverhill", "North Salem", "North Sutton", "North Walpole", "North Woodstock",
  "Northwood", "Nottingham", "Orford", "Pelham", "Peterborough",
  "Pittsfield", "Plainfield", "Plaistow", "Plymouth", "Portsmouth",
  "Raymond", "Rindge", "Rochester", "Rollinsford", "Rye",
  "Salem", "Salisbury", "Sanbornton", "Sanbornville", "Sandown",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < newHampshireCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(newHampshireCities[i]);
}

module.exports = { batches };
