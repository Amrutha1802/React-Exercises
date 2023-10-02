import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';

const fetchJoke =async () => {
  const response = await axios.get('https://official-joke-api.appspot.com/random_joke');
  return response.data;
};

const DisplayJokes = () => {
  const { data, isLoading, isError } = useQuery('joke', fetchJoke);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading joke</div>;
  }

  return (
    <div>
      <h1>Joke of the Day</h1>
      <p>{data.setup}</p>
      <p>{data.punchline}</p>
    </div>
  );
};

export default DisplayJokes;

// // "Integrate react-query

// // 1. Make a get call using useQuery to https://official-joke-api.appspot.com/random_joke and show jokes on screen.
// // 2. Make a post call using useMutation from a free REST API service or mock API.
// // "
// import React from 'react'
// import { useQuery } from 'react-query' 
// //import { QueryClient, QueryClientProvider, Queryclient} from 'react-query'
// import axios from 'axios';

// //const queryClient=new QueryClient();
// async function fetchJokes(){
//     const response= await axios.get('https://official-joke-api.appspot.com/random_joke');
//     return response;
//     //return response;
// }
// function DisplayJokes() {
//     const { isLoading,data }=useQuery('joke',
//         fetchJokes());
//     ;
//     if(isLoading){
//         return <div>Loading...</div>
//     }
//     // if(isError){
//     //     return <div>Error Loading joke</div>
//     // }
//     return (
//         <div>
//             <h1>Joke of the day</h1>
//             {/* <p>{data.setup}</p> */}
//             <p>{data?.data.punchline}</p> 
//             <p>Type:{data?.data.setup}</p>
//             {/* <p>Type:{data.setup}</p> */}
//             <p>Type:{data?.data.punchline}</p>
//         </div>
//     )
//     //</QueryClientProvider>
// }

// export default DisplayJokes;