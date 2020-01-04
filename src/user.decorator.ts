import {
  createParamDecorator,
} from '@nestjs/common';

export const User = createParamDecorator<string>(
  (req, data) => {
    return req.body;
  },
);
