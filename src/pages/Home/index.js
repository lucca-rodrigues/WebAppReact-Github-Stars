import React, { useEffect, useState } from 'react';

import { getMaps } from '@pages/Home/service';

function Home() {
  const [data, setData] = useState();

  useEffect(() => {
    async function requestDetailMaps() {
      const response = await getMaps();
      setData(response);
    }
    requestDetailMaps();
  }, []);

  return <h1>Teste {data}</h1>;
}

export default Home;
