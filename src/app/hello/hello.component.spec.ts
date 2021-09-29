import { NO_ERRORS_SCHEMA } from "@angular/core";
import { HelloComponent } from "./hello.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("HelloComponent", () => {

  let fixture: ComponentFixture<HelloComponent>;
  let component: HelloComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [HelloComponent]
    });

    fixture = TestBed.createComponent(HelloComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
