import { useEffect } from "react";
import { useState } from "react";
import { axiosRecipeApi } from "../axios";

export default function Summary({ id }) {
  const [summary, setSummary] = useState();

  useEffect(() => {
    (async function getData() {
      const response = await axiosRecipeApi.get(`/${id}/summary`);
      const data = await response?.data;
      setSummary(`${data?.summary.slice(0, 100)}..`);
    })();
  }, [id]);
  return (
    <div
      className="text-xl m-4 text-gray-700 font-['nyt-cheltenham,georgia,'times new roman',times,serif']"
      dangerouslySetInnerHTML={{ __html: summary }}></div>
  );
}
