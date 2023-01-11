import {LikeWidgetComponent} from "./like-widget.component";
import {UniqueIdService} from "../../service/unique-id/unique-id.service";
import {TestBed} from "@angular/core/testing";
import {LikeWidgetModule} from "./like-widget.module";

describe(LikeWidgetComponent.name, () => {
  let component: LikeWidgetComponent = null;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LikeWidgetComponent]
    }).compileComponents();

  });
  it('', () => {

  });
});
