import { LoggerService } from "./logger.service";
import { TestBed } from "@angular/core/testing";

describe("LoggerService", () => {

  let service: LoggerService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        LoggerService
      ]
    });
    service = TestBed.get(LoggerService);

  });

  it("should be able to create service instance", () => {
    expect(service).toBeDefined();
  });

});
