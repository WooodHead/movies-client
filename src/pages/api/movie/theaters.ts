import { NextApiRequest, NextApiResponse } from 'next';

import apiHandler from '@/utils/apiHandler';
import { requestServer } from '@/utils/axios';

const getMovieTheaters = async (req: NextApiRequest, res: NextApiResponse) => {
  const params = req?.query;
  const url = `/discover/movie`;

  try {
    const result = await requestServer(
      url,
      {
        method: 'GET',
        params,
      },
      req,
      res
    );
    return res.status(result?.status as number).json(result?.data);
  } catch (error) {
    return error;
  }
};

export default apiHandler({
  get: getMovieTheaters,
});
