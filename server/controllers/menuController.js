const Menu = require('../models/Menu');

// Get all menus
exports.getMenu = async (req, res) => {
  try {
    const menu = await Menu.find({});
    res.json(menu);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch menu' });
  }
};

// Upload or update a week's menu (array of day-wise objects)
exports.uploadMenu = async (req, res) => {
  try {
    const dayWiseMenu = req.body.dayWiseMenu;

    for (const item of dayWiseMenu) {
      await Menu.findOneAndUpdate(
        { day: item.day },
        item,
        { upsert: true, new: true }
      );
    }

    res.status(200).json({ message: 'Menu uploaded successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to upload menu', error: err.message });
  }
};
