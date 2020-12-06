import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'randomString'
})
export class RandomStringPipe implements PipeTransform {

  transform(size: number ): string {
    let randomString=''
    for (let i=0;i<size;i++)
    randomString+='a'+i

    return randomString;
  }

}
