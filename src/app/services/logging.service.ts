import { Injectable } from "@angular/core";
@Injectable()
export class LoggingService {
    loggingStatusChange(log: string) {
        console.log(log);
    }
}
