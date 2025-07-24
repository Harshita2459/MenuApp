// // const express = require('express');
// // const router = express.Router();
// // const Menu = require('../models/Menu');

// // // GET all menu items
// // router.get('/', async (req, res) => {
// //   try {
// //     const menu = await Menu.find();
// //     res.json(menu);
// //   } catch (err) {
// //     res.status(500).json({ message: err.message });
// //   }
// // });

// // // POST a new menu item (one day at a time)
// // router.post('/', async (req, res) => {
// //   const { day, breakfast, lunch, snacks, dinner } = req.body;
// //   try {
// //     const existing = await Menu.findOne({ day });
// //     if (existing) return res.status(400).json({ message: "Menu already exists for this day" });

// //     const newMenu = new Menu({ day, breakfast, lunch, snacks, dinner });
// //     await newMenu.save();
// //      console.log("✅ Saved to DB:", newMenu);
// //     res.status(201).json(newMenu);
// //   } catch (err) {
// //     res.status(400).json({ message: err.message });
// //   }
// // });

// // // PUT (edit) menu for a specific day
// // router.put('/:day', async (req, res) => {
// //   const { day } = req.params;
// //   try {
// //     const updatedMenu = await Menu.findOneAndUpdate({ day }, req.body, { new: true });
// //     res.json(updatedMenu);
// //   } catch (err) {
// //     res.status(400).json({ message: err.message });
// //   }
// // });

// // // DELETE a menu for a specific day
// // router.delete('/:day', async (req, res) => {
// //   try {
// //     await Menu.findOneAndDelete({ day: req.params.day });
// //     res.json({ message: 'Menu deleted for the day' });
// //   } catch (err) {
// //     res.status(500).json({ message: err.message });
// //   }
// // });

// // module.exports = router;








// // const express = require('express');
// // const router = express.Router();
// // const Menu = require('../models/Menu');

// // // GET latest menu
// // router.get('/latest', async (req, res) => {
// //   try {
// //     const latestMenu = await Menu.findOne().sort({ createdAt: -1 });
// //     if (!latestMenu) return res.status(404).json({ msg: 'No menu found' });
// //     res.json(latestMenu.dayWiseMenu);
// //   } catch (err) {
// //     res.status(500).json({ error: err.message });
// //   }
// // });

// // module.exports = router;















// // server/routes/menuRoutes.js
// const express = require('express');
// const router = express.Router();
// const Menu = require('../models/Menu');

// // ✅ GET: Return full week menu as one object
// router.get('/', async (req, res) => {
//   try {
//     const menus = await Menu.find();
//     const dayWiseMenu = {};
//     menus.forEach(menu => {
//       dayWiseMenu[menu.day] = {
//         Breakfast: menu.breakfast,
//         Lunch: menu.lunch,
//         "Evening Snacks": menu.snacks,
//         Dinner: menu.dinner
//       };
//     });
//     res.json(dayWiseMenu);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// // ✅ POST: Add menu for one day
// router.post('/', async (req, res) => {
//   const { day, breakfast, lunch, snacks, dinner } = req.body;
//   try {
//     const existing = await Menu.findOne({ day });
//     if (existing) return res.status(400).json({ message: "Menu already exists for this day" });

//     const newMenu = new Menu({ day, breakfast, lunch, snacks, dinner });
//     await newMenu.save();
//     console.log("✅ Saved to DB:", newMenu);
//     res.status(201).json(newMenu);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// });

// // ✅ PUT: Update menu for one day
// router.put('/:day', async (req, res) => {
//   const { day } = req.params;
//   try {
//     const updatedMenu = await Menu.findOneAndUpdate({ day }, req.body, { new: true });
//     if (!updatedMenu) return res.status(404).json({ message: "No menu found for this day" });
//     res.json(updatedMenu);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// });

// // ✅ DELETE: Remove menu for one day
// router.delete('/:day', async (req, res) => {
//   try {
//     const deleted = await Menu.findOneAndDelete({ day: req.params.day });
//     if (!deleted) return res.status(404).json({ message: "No menu found for this day" });
//     res.json({ message: 'Menu deleted for the day' });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// module.exports = router;










const express = require('express');
const router = express.Router();
const menuController = require('../controllers/menuController');

router.get('/', menuController.getMenu);
router.post('/upload', menuController.uploadMenu);

module.exports = router;
