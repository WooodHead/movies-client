/* eslint-disable consistent-return */
import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';

interface Handler {
  [method: string]: NextApiHandler;
}

const errorHandler = (err: any, res: NextApiResponse) => {
  if (err.response) {
    res.status(err.response.status).json({ message: err.response.data });
  } else if (err.request) {
    res.status(500).json({ message: 'Error: No response from server' });
  } else {
    res.status(500).json({ message: err.message });
  }
};

const apiHandler = (handler: Handler) => {
  return async (req: NextApiRequest & { method: string }, res: NextApiResponse) => {
    const method = req.method?.toLocaleLowerCase();
    if (!handler[method]) return res.status(405).end(`Method ${req.method} Not Allowed`);
    try {
      await handler[method](req, res);
    } catch (err: any) {
      return errorHandler(err, res);
    }
  };
};

export default apiHandler;
