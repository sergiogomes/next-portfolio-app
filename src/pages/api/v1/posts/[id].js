import axios from "axios";

export default async (req, res) => {
  try {
    const axiosRes = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${req.query.id}`
    );
    res.status(200).json(axiosRes.data);
  } catch (e) {
    res.status(e.status || 400).json(e);
  }
};
