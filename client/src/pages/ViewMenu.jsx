// // client/src/pages/ViewMenu.jsx
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
// const mealTypes = ['Breakfast', 'Lunch', 'Evening Snacks', 'Dinner'];

// const ViewMenu = () => {
//   const [menu, setMenu] = useState(null);

//   useEffect(() => {
//     const fetchMenu = async () => {
//       try {
//         const res = await axios.get('http://localhost:5000/api/menu/latest');
//         setMenu(res.data);
//       } catch (err) {
//         console.error('Error fetching menu:', err);
//       }
//     };

//     fetchMenu();
//   }, []);

//   if (!menu) return <div>Loading menu...</div>;

//   return (
//     <div>
//       <h2>Current Menu</h2>
//       <table border="1">
//         <thead>
//           <tr>
//             <th>Day</th>
//             {mealTypes.map((meal, idx) => (
//               <th key={idx}>{meal}</th>
//             ))}
//           </tr>
//         </thead>
//         <tbody>
//           {days.map((day, idx) => (
//             <tr key={idx}>
//               <td>{day}</td>
//               {mealTypes.map((meal, midx) => (
//                 <td key={midx}>
//                   {menu[day]?.[meal] || '—'}
//                 </td>
//               ))}
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default ViewMenu;


const ViewMenu=()=>{
  return(
    <h1>Hello</h1>
  )
}
export default ViewMenu;