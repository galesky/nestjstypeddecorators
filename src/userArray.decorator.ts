import { createParamDecorator, PipeTransform } from '@nestjs/common';

export const UserArray = createParamDecorator((req, data: Array<string | object>) => {
  return req.body;
});
