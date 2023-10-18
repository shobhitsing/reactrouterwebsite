import React, { useEffect ,useState} from "react";

const Github = () => {
    const [data,setData]=useState([])
  const GetFollowers = async () => {
    const responces = await fetch(
      "https://api.github.com/users/hiteshchoudhary"
    );
      const res = await responces.json();
      setData(res);
  };
  useEffect(() => {
    GetFollowers();
  }, []);
  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
          Github followers :{" "}{data.followers}
    </div>
  );
};

export default Github;
