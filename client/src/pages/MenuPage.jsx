// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// const MenuPage = () => {
//   const [menu, setMenu] = useState([]);
//   const [form, setForm] = useState({
//     day: 'Sunday',
//     breakfast: '',
//     lunch: '',
//     snacks: '',
//     dinner: ''
//   });

//   const fetchMenu = async () => {
//     const res = await axios.get('http://localhost:5000/api/menu');
//     setMenu(res.data);
//   };

//   useEffect(() => {
//     fetchMenu();
//   }, []);

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     try {
// //       await axios.post('http://localhost:5000/api/menu', form);
// //       fetchMenu();
// //     } catch (err) {
// //       alert(err.response.data.message);
// //     }
// //   };



// const handleSubmit = async (e) => {
//   e.preventDefault();
//   try {
//     const res = await axios.post('http://localhost:5000/api/menu/upload', {
//       dayWiseMenu: menu,
//     });
//     console.log('Menu saved:', res.data);
//     alert('Menu uploaded successfully!');
//   } catch (err) {
//     console.error('Error uploading menu:', err);
//     alert('Upload failed.');
//   }
// };


//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   return (
//     <div className="p-4">
//       <h2 className="text-xl font-bold mb-4">Upload Menu</h2>
//       <form onSubmit={handleSubmit} className="space-y-2">
//         <select name="day" value={form.day} onChange={handleChange}>
//           {days.map(d => <option key={d} value={d}>{d}</option>)}
//         </select>
//         <input type="text" name="breakfast" placeholder="Breakfast" onChange={handleChange} />
//         <input type="text" name="lunch" placeholder="Lunch" onChange={handleChange} />
//         <input type="text" name="snacks" placeholder="Snacks" onChange={handleChange} />
//         <input type="text" name="dinner" placeholder="Dinner" onChange={handleChange} />
//         <button type="submit">Upload</button>
//       </form>

//       <h2 className="text-xl font-bold mt-6">Weekly Menu</h2>
//       <table className="table-auto border mt-2">
//         <thead>
//           <tr>
//             <th>Day</th>
//             <th>Breakfast</th>
//             <th>Lunch</th>
//             <th>Snacks</th>
//             <th>Dinner</th>
//           </tr>
//         </thead>
//         <tbody>
//           {menu.map((item, index) => (
//             <tr key={index}>
//               <td>{item.day}</td>
//               <td>{item.breakfast}</td>
//               <td>{item.lunch}</td>
//               <td>{item.snacks}</td>
//               <td>{item.dinner}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default MenuPage;








import React, { useEffect, useState } from 'react';
import axios from 'axios';

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const MenuPage = () => {
  const [menu, setMenu] = useState([]);
  const [form, setForm] = useState({
    day: 'Sunday',
    breakfast: '',
    lunch: '',
    snacks: '',
    dinner: ''
  });

  const fetchMenu = async () => {
    const res = await axios.get('http://localhost:5000/api/menu');
    setMenu(res.data);
  };

  useEffect(() => {
    fetchMenu();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedMenu = [...menu];
    const index = updatedMenu.findIndex(item => item.day === form.day);

    if (index !== -1) {
      updatedMenu[index] = form;
    } else {
      updatedMenu.push(form);
    }

    try {
      const res = await axios.post('http://localhost:5000/api/menu/upload', {
        dayWiseMenu: updatedMenu,
      });
      console.log('Menu saved:', res.data);
      alert('Menu uploaded successfully!');
      fetchMenu();
    } catch (err) {
      console.error('Error uploading menu:', err);
      alert('Upload failed.');
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Upload Menu</h2>
      <form onSubmit={handleSubmit} className="space-y-2">
        <select name="day" value={form.day} onChange={handleChange}>
          {days.map(d => <option key={d} value={d}>{d}</option>)}
        </select>
        <input type="text" name="breakfast" placeholder="Breakfast" onChange={handleChange} />
        <input type="text" name="lunch" placeholder="Lunch" onChange={handleChange} />
        <input type="text" name="snacks" placeholder="Snacks" onChange={handleChange} />
        <input type="text" name="dinner" placeholder="Dinner" onChange={handleChange} />
        <button type="submit">Upload</button>
      </form>

      <h2 className="text-xl font-bold mt-6">Weekly Menu</h2>
      <table className="table-auto border mt-2">
        <thead>
          <tr>
            <th>Day</th>
            <th>Breakfast</th>
            <th>Lunch</th>
            <th>Snacks</th>
            <th>Dinner</th>
          </tr>
        </thead>
        <tbody>
          {menu.map((item, index) => (
            <tr key={index}>
              <td>{item.day}</td>
              <td>{item.breakfast}</td>
              <td>{item.lunch}</td>
              <td>{item.snacks}</td>
              <td>{item.dinner}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MenuPage;
