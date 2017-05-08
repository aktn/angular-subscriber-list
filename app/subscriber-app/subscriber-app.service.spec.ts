import { TestBed } from '@angular/core/testing';
import { Http, Response, ResponseOptions } from '@angular/http';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { SubscriberAppService } from './subscriber-app.service';

//Initializing test env
TestBed.initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);

function createResponse(body) {
  return Observable.of(
    new Response(new ResponseOptions({ body: JSON.stringify(body) }))
  );
}

/**
 * Implementing fake Http 
 */
class MockHttp {
  get() {
    return createResponse([]);
  }
}

const subscribers = [{ id: 1, name: "Michael", email: "michael@michael.com" },{ id: 2, name: "Kelly", email: "kelly@yahoo.com" }];

describe('SubscriberAppService', () => {

  let service: SubscriberAppService;
  let http: Http;

  //Initializing service before each spec
  beforeEach(() => {
    const bed = TestBed.configureTestingModule({
      providers: [
        SubscriberAppService,
        { provide: Http, useClass: MockHttp } 
      ]
    });
    http = bed.get(Http);
    service = bed.get(SubscriberAppService);
  });

  //Test function for getting subscribers list
  it('should get subscribers', () => {
    spyOn(http,'get').and.returnValue(createResponse([...subscribers]));

    service.getSubscribers()
      .subscribe((result) => {
        expect(result.length).toBe(2);
        expect(result).toEqual(subscribers);
      });
  });

});