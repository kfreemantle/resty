import { rest } from 'msw';

export const handlers = [
  rest.get('https://test.com', (req, res, ctx) => {
    return res(ctx.json({ message: 'Test data' }));
  }),
];
