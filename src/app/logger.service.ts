import { Injectable } from "@angular/core";

/**
 * @description
 * @class
 */
@Injectable({providedIn:"root"})
export class LoggerService {
writeCount(count:Number){
  console.warn(count)
}
  
}
