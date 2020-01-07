import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchRepo'
})
export class SearchRepoPipe implements PipeTransform {

  transform(value: any, filterRepo: string): any {
    if(value.length === 0 || filterRepo === ''){
      return value;
    }
    let resultArray = [];
    for(const item of value)
    {
      let reponame = item['name'].toLowerCase()
      if(reponame.includes(filterRepo.toLowerCase())){
        resultArray.push(item)
      }
      
    }
    return resultArray;
    
  }

}
