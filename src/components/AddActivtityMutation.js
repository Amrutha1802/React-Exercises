import React, { useState } from 'react';
//import { useQueryClient } from 'react-query';
//import axios from 'axios';
import useAddDataMutation from 'UseAddActivity';

export default function PostUsingMutation() {
  const addDataMutation=useAddDataMutation();
  const [newData, setNewData] = useState({ title: '', body: '' });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleAddData = () => {
    console.log('Adding data:', newData); // Log the data being sent to the API
    addDataMutation.mutate(newData);
   // mutate(newData);
  };

  return (
    <div>
      <div>
        <label>Title:</label>
        <input type="text" name="title" value={newData.title} onChange={handleInputChange} />
      </div>
      <div>
        <label>Body:</label>
        <input type="text" name="body" value={newData.body} onChange={handleInputChange} />
      </div>
      <br />
      <button onClick={handleAddData}>Add Data</button>
    </div>
  );
}


  // const addDataMutation = useMutation(
  //   (newData) => axios.post('https://jsonplaceholder.typicode.com/posts', newData),
  //   {
  //     onSuccess: (data) => {
  //       console.log('Data added successfully:', data);
  //       queryClient.invalidateQueries('posts');
  //       setNewData({ title: '', body: '' })
  //     },
  //     onError: (error) => {
  //       console.error('Error adding data:', error);
  //     },
  //   }
  // );
//   const addDataMutation=useDataMutation();


//   const handleInputChange = (e) => {
//    // console.log('ahdiif');
//     const { name, value } = e.target;
//     setNewData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   const handleAddData = () => {
//     console.log('Adding data:', newData); // Log the data being sent to the API
//     addDataMutation.mutate(newData);
//   };

//   return (
//     <div>
//       <div>
//         <label>Title:</label>
//         <input type="text" name="title" value={newData.title} onChange={handleInputChange} />
//       </div>
//       <div>
//         <label>Body:</label>
//         <input type="text" name="body" value={newData.body} onChange={handleInputChange} />
//       </div>
//       <br />
//       <button onClick={handleAddData}>Add Data</button>
//     </div>
//   );
// }

// //import useAddActivity from "./AddActivtityMutation";
// import { useState } from 'react'
// import { useMutation, useQueryClient } from 'react-query';
// import axios from 'axios';


//  export default function PostUsingMutation(){
//     const [newData, setNewData] = useState({
//         title: '',
//         body: '',
//       });
//       const queryClient = useQueryClient();
//       const handleAddData = () => {
//         addDataMutation.mutate(newData);
//       };
//       const addDataMutation = useMutation(
//         (newData) => axios.post('https://jsonplaceholder.typicode.com/posts', newData),
//         {
//           onSuccess: () => {
//             // Invalidate and refetch the data after adding new data
//             queryClient.invalidateQueries('posts');
//             console.log('Data added successfully!');
//           },
//           onError: (error) => {
//             console.error('Error adding data:', error);
//           },
//         }
//       );
    
//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setNewData((prevData) => ({
//           ...prevData,
//           [name]: value,
//         }));
//       };
//     return(
//         <div>
//             <div>
//                 <label>Title:</label>
//                 <input type="text" name="title" value={newData.title} onChange={handleInputChange} />
//             </div>
//             <div>
//                 <label>Body:</label>
//                 <input type="text" name="body" value={newData.body} onChange={handleInputChange} />
//             </div>
//             <br />
//             <button onClick={handleAddData}>Add Data</button>
//         </div>
//     );
// }
// // import useAddActivity from "./AddActivtityMutation";
// // import { useState } from 'react'

 
// // //  const handleAddActivityClick=()=>{
// // //     const activity={activity,type,participants}
// // //   mutate(activity);
// // //  }
// // //  function handleAddActivity(){
// // //     const activity={activity,type,participants,price,link,label,key,accessibility}
// // //     mutate(activity);
// // //  }

// //  export default function PostUsingMutation(){
// //     const mutation =useAddActivity();
// //     const [Activity, setActivity] = useState({"activity":'',
// //     "type":'',
// //     "participants":'',
// //     "price":'',
// //     "link":'',
// //     "key":'',
// //     "accessibility":''});
// //     const handleInputChange = (e) => {
// //     const { name, value } = e.target;
// //      setActivity({ ...Activity, [name]: value });
// //     };
// //     const handleAddActivity = () => {
// //         mutation.mutate(Activity, {
// //           onSuccess: () => {
// //             // Do something on success, e.g., show a success message
// //             console.log('Activity added successfully!');
// //           },
// //           onError: (error) => {
// //             // Handle errors, e.g., show an error message
// //             console.error('Error adding activity:', error);
// //           }
// //         });
// //       };
// //     return(
// //         <div>
// //             <div>
// //                 <label>Activity :</label>
// //                 <input
// //                     type="text"
// //                     name="activity"
// //                     placeholder="Enter Activity"
// //                     value={Activity.activity}
// //                     onChange={handleInputChange}
// //                 />
// //             </div>
// //             <div>
// //                 <label>Type of Activity :</label>
// //                 <input
// //                     type="text"
// //                     name="type"
// //                     placeholder="Enter type of Activity"
// //                     value={Activity.type}
// //                     onChange={handleInputChange}
// //                 />
// //             </div>
// //             <div>
// //                 <label>Number of Participants :</label>
// //                 <input
// //                     type="text"
// //                     name="participants"
// //                     placeholder="Enter number of participants"
// //                     value={Activity.participants}
// //                     onChange={handleInputChange}
// //                 />
// //             </div>
// //             <div>
// //                 <label>Price :</label>
// //                 <input
// //                     type="text"
// //                     name="price"
// //                     placeholder="Enter Price"
// //                     value={Activity.price}
// //                     onChange={handleInputChange}
// //                 />
// //             </div>
// //             <div>
// //                 <label>Link :</label>
// //                 <input
// //                     type="text"
// //                     name="link"
// //                     placeholder="Enter Link"
// //                     value={Activity.link}
// //                     onChange={handleInputChange}
// //                 />
// //             </div>
// //             <div>
// //                 <label>Key :</label>
// //                 <input
// //                     type="text"
// //                     name="key"
// //                     placeholder="Enter Key"
// //                     value={Activity.key}
// //                     onChange={handleInputChange}
// //                 />
// //             </div>
// //             <div>
// //                 <label>Accessibility :</label>
// //                 <input
// //                     type="text"
// //                     name="accessibility"
// //                     placeholder="Enter Accessibility"
// //                     value={Activity.accessibility}
// //                     onChange={handleInputChange}
// //                 />
// //             </div>
// //             <br/>
// //             <button onClick={handleAddActivity}>Add Activity</button>
// //         </div>
// //     );
// // }