import { useState } from 'react'
import { useMutation, useQueryClient } from 'react-query';
import axios from 'axios';

export default function PostUsingMutation(){
    const [newData, setNewData] = useState({
        title: '',
        body: '',
      });
      const queryClient = useQueryClient();
      const handleAddData = () => {
        addDataMutation.mutate(newData);
      };
      const addDataMutation = useMutation(
        (newData) => axios.post('https://jsonplaceholder.typicode.com/posts', newData),
        {
          onSuccess: () => {
            queryClient.invalidateQueries('posts');
            console.log('Data added successfully!');
            setNewData({
              title: '',
              body: '',
            })
          },
          onError: (error) => {
            console.error('Error adding data:', error);
          },
        }
      );
    
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    return(
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
