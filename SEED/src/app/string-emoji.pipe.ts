import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringEmoji'
})
export class StringEmojiPipe implements PipeTransform {

  transform(value: string, args?: any): string {
    let emojiReturn = '😵';

 
    if ( value.toLowerCase() === 'happy' ) {
      emojiReturn = '😄';
    } else if ( value.toLowerCase() === 'sad' ) {
      emojiReturn = '😪';
    }

    return emojiReturn;
  }

}
