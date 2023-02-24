import { NextApiRequest, NextApiResponse } from 'next';

import apiHandler from '@/utils/apiHandler';
import { requestServer } from '@/utils/axios';

const getMovieDetail = async (req: NextApiRequest, res: NextApiResponse) => {
  const params = req?.query;
  const url = `/movie/${params.id}`;

  try {
    const result = await requestServer(
      url,
      {
        method: 'GET',
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
  get: getMovieDetail,
});
