import { createParamDecorator, PipeTransform } from '@nestjs/common';

export const OverrideWithGeneric = createParamDecorator<Request, string>((req , data) => {
  return req.body;
});
