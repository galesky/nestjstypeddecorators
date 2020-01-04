import { createParamDecorator, PipeTransform } from '@nestjs/common';

export const UserArray = createParamDecorator<Array<string | object>>((req, data) => {
  return req.body;
});
