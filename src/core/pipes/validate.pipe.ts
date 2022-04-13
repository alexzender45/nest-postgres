// import { Injectable, ArgumentMetadata, BadRequestException, ValidationPipe, UnprocessableEntityException } from '@nestjs/common';

// @Injectable()
// export class ValidateInputPipe extends ValidationPipe {
//    public async transform(value, metadata: ArgumentMetadata) {
//       try {
//         return await super.transform(value, metadata);
//       } catch (e) {
//          if (e instanceof BadRequestException) {
//             throw new UnprocessableEntityException(this.handleError(e.message.message));
//          }
//       }
//    }

//    private handleError(errors) {
//         const message = [];
//         for (const key in errors.constraints) {
//             if (errors.constraints.hasOwnProperty(key)) {
//                 message.push(errors.constraints[key]);
//             }
//         }
//         return message;
//    }
// }