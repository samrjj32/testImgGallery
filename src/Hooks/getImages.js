import { useEffect, useState } from "react";
import { getAxiosInstance } from "../api/index";

export const useGetImages = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const api = await getAxiosInstance();

      const res = await api.get(`search?per_page=50&query=${"car"}`);
      setData(res.data.photos);
    };

    fetchData();
  }, []);

  return { data, setData };
};
