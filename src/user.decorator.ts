import {
  createGenericParamDecorator,
} from '@nestjs/common';

export const User = createGenericParamDecorator<[string]>(
  (req, data) => {
    return req.body;
  },
);
