import { Type } from 'class-transformer';
import {
  IsEmail,
  IsNotEmpty,
  IsNotEmptyObject,
  IsNumberString,
  ValidateNested,
} from 'class-validator';
import { createAddressDto } from './CreateAddress.dto';
export class CreateCustomerDto {
  @IsEmail()
  email: string;

  @IsNumberString()
  id: number;

  @IsNotEmpty()
  name: string;

  @ValidateNested()
  @Type(() => createAddressDto)
  @IsNotEmptyObject()
  address: createAddressDto;
}
