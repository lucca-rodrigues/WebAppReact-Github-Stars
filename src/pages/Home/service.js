import axios from 'axios';
import { toast } from 'react-toastify';
import getEndpoints from '@services/endpoints';

export async function getMaps() {
  return axios
    .get(`${getEndpoints.exampleServiceUrl}/maps`)
    .then((response) => response.data)
    .catch((error) => {
      toast.error('Falha ao consultar dados dos mapas');
      // eslint-disable-next-line no-console
      console.log(error);
    });
}
