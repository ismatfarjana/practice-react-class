import axios from "axios";

const YOUTUBE_API = process.env.REACT_APP_YOUTUBE_API;
// more details about adding custom var : https://create-react-app.dev/docs/adding-custom-environment-variables/
export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    type: "video",
    key: YOUTUBE_API
  }
});
