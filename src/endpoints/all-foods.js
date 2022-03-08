const BucketList = require("../data-service/bucket-list");

module.exports = async (req, res) => {
  const bl = new BucketList();
  const listitems = bl.allFoods(req.query.page, req.query.limit);
  res.json(listitems);
};
