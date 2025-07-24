// // client/src/pages/UploadMenu.jsx
// import React, { useState } from 'react';
// import axios from 'axios';

// const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
// const mealTypes = ['Breakfast', 'Lunch', 'Evening Snacks', 'Dinner'];

// const UploadMenu = () => {
//   const [menu, setMenu] = useState(() => {
//     const initialMenu = {};
//     days.forEach(day => {
//       initialMenu[day] = {};
//       mealTypes.forEach(meal => {
//         initialMenu[day][meal] = '';
//       });
//     });
//     return initialMenu;
//   });

//   const handleChange = (day, meal, value) => {
//     setMenu(prev => ({
//       ...prev,
//       [day]: {
//         ...prev[day],
//         [meal]: value,
//       },
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Convert menu object into array of daily entries
//     const formattedMenu = days.map(day => ({
//       day,
//       breakfast: menu[day]['Breakfast'],
//       lunch: menu[day]['Lunch'],
//       snacks: menu[day]['Evening Snacks'],
//       dinner: menu[day]['Dinner'],
//     }));

//     try {
//       await axios.post('http://localhost:5000/api/menu', formattedMenu);
//       alert('Menu uploaded successfully!');
//     } catch (error) {
//       console.error('Error uploading menu:', error);
//       alert(error.response?.data?.message || 'Error uploading menu');
//     }
//   };

//   return (
//     <div>
//       <h2>Upload a New Menu</h2>
//       <form onSubmit={handleSubmit}>
//         <table border="1">
//           <thead>
//             <tr>
//               <th>Day</th>
//               {mealTypes.map((meal, idx) => (
//                 <th key={idx}>{meal}</th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {days.map((day, idx) => (
//               <tr key={idx}>
//                 <td>{day}</td>
//                 {mealTypes.map((meal, midx) => (
//                   <td key={midx}>
//                     <input
//                       type="text"
//                       value={menu[day][meal]}
//                       onChange={(e) => handleChange(day, meal, e.target.value)}
//                       placeholder={`${meal}...`}
//                     />
//                   </td>
//                 ))}
//               </tr>
//             ))}
//           </tbody>
//         </table>
//         <br />
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default UploadMenu;







// client/src/pages/MenuPage.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MenuPage = () => {
  const [menu, setMenu] = useState([]); // it must be an array!

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/menu');
        setMenu(res.data); // make sure res.data is an array
      } catch (err) {
        console.error('Error fetching menu:', err);
      }
    };

    fetchMenu();
  }, []);

  return (
    <div>
      <h2>Weekly Menu</h2>
      {Array.isArray(menu) ? (
        <table border="1">
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
      ) : (
        <p>No menu available.</p>
      )}
    </div>
  );
};

export default MenuPage;
