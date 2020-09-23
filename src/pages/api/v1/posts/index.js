import axios from "axios";

export default async (req, res) => {
  try {
    const axiosRes = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    res.status(200).json(axiosRes.data.slice(0, 10));
  } catch (e) {
    res.status(e.status || 400).end(e);
  }
};
