"use client";

// [([[3, 1], [132, 1], [132, 44], [3, 44]], '芥蘭炒雞鬆', 0.9925057535175006), ([[160, 0], [589, 0], [589, 34], [160, 34]], 'Sauteed Chinese broccoli & chicken', 0.6650856223897282), ([[612, 0], [705, 0], [705, 36], [612, 36]], '$14.95', 0.9966048137234976), ([[3, 39], [84, 39], [84, 80], [3, 80]], '宮保雞', 0.9938148107521922), ([[160, 35], [391, 35], [391, 71], [160, 71]], 'Kung pao chicken', 0.9950338080918358), ([[616, 36], [704, 36], [704, 66], [616, 66]], '$14.95', 0.678551353406021), ([[3, 74], [108, 74], [108, 114], [3, 114]], '金沙南瓜', 0.9979552030563354), ([[162, 71], [446, 71], [446, 104], [162, 104]], 'Pumpkin wisalted egg', 0.5931087250353343), ([[617, 69], [706, 69], [706, 102], [617, 102]], '$13.95', 0.9994072939294798), ([[3, 107], [134, 107], [134, 149], [3, 149]], '魚香茄子煲', 0.9960084943703202), ([[162, 103], [579, 103], [579, 144], [162, 144]], 'Eggplant in garlic sauce clay pot', 0.9856214430154885), ([[618, 106], [708, 106], [708, 136], [618, 136]], '$14.95', 0.999465799060174), ([[3, 135], [574, 135], [574, 185], [3, 185]], 'X0醬豆仔炒茄子 Sauteed eggplant & string beans', 0.6587818191850608), ([[620, 140], [710, 140], [710, 170], [620, 170]], '$14.95', 0.9874156124127652), ([[163, 168], [312, 168], [312, 198], [163, 198]], 'W/XO sauce', 0.3475397741897711), ([[444.5430712064641, 73.37752817163539], [503.5549749501136, 67.42770772300699], [505.4569287935359, 96.62247182836461], [446.4450250498864, 102.57229227699301]], 'yolk', 0.9997640252113342)]

import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import axios from 'axios';
import ImageUploading from 'react-images-uploading';

const UploadMenuSnapshot: React.FC = () => {
  // const [images, setImages] = useState([]);
  const [matches, setMatches] = useState('');
  const maxNumber = 1;

  const handleSubmit = (event: { preventDefault: () => void; target: any; }) => {
    event.preventDefault();
      const data = new FormData(event.target);
      const requestOptions = {
        method: 'POST',
        // headers: {
        //   'Content-Type': 'multipart/form-data',
        //   'Accept': 'multipart/form-data'
        // },
        body: data
        };
    fetch('http://127.0.0.1:5000/get_food_matches_from_image', requestOptions)
        .then(response => response.text())
        .then(resp => setMatches(resp));
  
    // console.log(imageList, addUpdateIndex);
    console.log(matches);
    // })
  };

  return (
    <div className="App">
      <div className='Results'>
        {matches}
      </div>
      <form onSubmit={handleSubmit} className="container mt-5 pt-5 pb-5" encType="multipart/form-data">
    <div className="form-inline justify-content-center mt-5">
        <label htmlFor="image" className="ml-sm-4 font-weight-bold mr-md-4">Image :  </label>
        <div className="input-group">
            <input type="file" id="image" name="file" 
            accept="image/*" className="file-custom"/>
            <br></br>
            <label htmlFor="lang_list" className="ml-sm-4 font-weight-bold mr-md-4">Enter list of languages :  </label>
            <input type="text" name="lang_list" />
        </div>
    </div>

    <div className="input-group justify-content-center mt-4">
        <button type="submit" className="btn btn-md btn-primary">Upload,,,</button>
    </div>
</form>
    </div>
  );
}
export default UploadMenuSnapshot;