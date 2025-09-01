import axios from "axios";

interface IApi {
  name: string;
  email: string;
  address: {
    city: string;
    state: string;
    houseNumber: number;
  };
}

export default async function Home() {
  const res = await axios.get(
    "https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details"
  );
  const data: IApi = res.data;
  return (
    <div className="flex flex-col h-screen w-full items-center justify-center">
      <div className="p-4 border rounded border-neutral-300">
        <h1>Name: {data.name}</h1>
        <h1>Email: {data.email}</h1>
        <h1>City: {data.address.city}</h1>
        <h1>State: {data.address.state}</h1>
        <h1>House Number: {data.address.houseNumber}</h1>
      </div>
    </div>
  );
}
