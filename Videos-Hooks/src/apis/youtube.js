import axios from "axios";
import dotenv from 'dotenv';

dotenv.config({path: '../.env'})

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: 'AIzaSyBKF4Eq5hSmYvCRGDvc8CvLOSyGWyKmms4',
  },
});
  