// import { Pipe, PipeTransform } from '@angular/core';

// @Pipe({
//   name: 'ratingStars',
//   standalone:false
// })
// export class RatingStarsPipe implements PipeTransform {
//   transform(value: number): string {
//     const fullStars = Math.floor(value);
//     const halfStar = value % 1 >= 0.5 ? '½' : '';
//     const stars = '★'.repeat(fullStars) + halfStar;
//     return stars;
//   }
// }
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ratingStars',
  standalone:false
})
export class RatingStarsPipe implements PipeTransform {
  transform(value: number): string {
    const fullStars = Math.floor(value);
    const hasHalfStar = value % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    const stars = '★'.repeat(fullStars)
                + (hasHalfStar ? '⯪' : '')
                + '☆'.repeat(emptyStars);

    return stars;
  }
}

