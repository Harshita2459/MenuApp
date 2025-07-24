// const User = require('../models/User');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');

// // const JWT_SECRET = process.env.JWT_SECRET || 'secret_key';
// const JWT_SECRET = process.env.JWT_SECRET;


// exports.register = async (req, res) => {
//   const { username, password, role } = req.body;

//   try {
//     const userExists = await User.findOne({ username });
//     if (userExists) return res.status(400).json({ msg: 'User already exists' });

//     const hashedPwd = await bcrypt.hash(password, 10);

//     const user = new User({ username, password: hashedPwd, role });
//     await user.save();

//     res.status(201).json({ msg: 'User registered successfully' });
//   } catch (err) {
//     res.status(500).json({ msg: 'Error registering user', error: err.message });
//   }
// };

// exports.login = async (req, res) => {
//   const { username, password } = req.body;

//   try {
//     const user = await User.findOne({ username });
//     if (!user) return res.status(400).json({ msg: 'User not found' });

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });

//     const token = jwt.sign({ id: user._id, role: user.role }, JWT_SECRET, {
//       expiresIn: '1h',
//     });

//     res.json({ token, role: user.role, username: user.username });
//   } catch (err) {
//     res.status(500).json({ msg: 'Error logging in', error: err.message });
//   }
// };




















const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET || 'secret123';

exports.register = async (req, res) => {
  const { username, password, role } = req.body;

  try {
    const userExists = await User.findOne({ username });
    if (userExists) return res.status(400).json({ msg: 'Username already exists. Choose another username' });

    const hashedPwd = await bcrypt.hash(password, 10);

    const user = new User({ username, password: hashedPwd, role });
    await user.save();

    res.status(201).json({ msg: 'User registered successfully' });
  } catch (err) {
    res.status(500).json({ msg: 'Error registering user', error: err.message });
  }
};

exports.login = async (req, res) => {
  const { username, password, role } = req.body;

  try {
    const user = await User.findOne({ username });
    if (!user || user.role !== role)
      return res.status(400).json({ msg: 'Invalid credentials or role' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: 'Invalid password' });

    const token = jwt.sign({ id: user._id, role: user.role }, JWT_SECRET, {
      expiresIn: '1h',
    });

    res.json({ token, role: user.role, username: user.username });
  } catch (err) {
    res.status(500).json({ msg: 'Error logging in', error: err.message });
  }
};
