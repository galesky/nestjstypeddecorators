import { createParamDecorator, PipeTransform } from '@nestjs/common';

export const OverrideWithGeneric = createParamDecorator((req , data) => {
  return req.body;
});
