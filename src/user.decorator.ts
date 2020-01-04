import {
  createParamDecorator,
} from '@nestjs/common';

export const User = createParamDecorator(
  (req: Request, data: string) => {
    return req.body;
  },
);
