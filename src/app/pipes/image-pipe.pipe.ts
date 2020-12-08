import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imagePipe'
})
export class ImagePipePipe implements PipeTransform {

  transform(path: string): string {
    if(path.trim()==='')
    return 'flower.jpeg'
    else return path;
  }

}
