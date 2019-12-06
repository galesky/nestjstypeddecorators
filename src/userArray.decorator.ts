import { createGenericParamDecorator, PipeTransform } from '@nestjs/common';

export const UserArray = createGenericParamDecorator<[[string, number, PipeTransform]]>((req, data) => {
  return req.body;
});
