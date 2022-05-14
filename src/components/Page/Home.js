import { useEffect, useState } from "react";
import { fetchEdalat500, fetchEdalat1 } from "../../helpers/fetchData";
import { PriceBox, Table } from "../";

const Home = () => {
  const [saham500, setSaham500] = useState(null);
  const [saham1, setSaham1] = useState(null);

  useEffect(() => {
    setSaham500(fetchEdalat500());
    setSaham1(fetchEdalat1());
  }, []);

  return (
    <>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-12 mb-8">
        <PriceBox data={saham500} />
        <PriceBox data={saham1} />
      </div>
      <Table />
    </>
  );
};

export default Home;
