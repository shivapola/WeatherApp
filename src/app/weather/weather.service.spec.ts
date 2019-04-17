import { TestBed, inject, async } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { WeatherService } from './weather.service';
import { HttpRequest } from '@angular/common/http';

describe('WeatherService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [WeatherService]
        });
    });

    it('should be created', inject([WeatherService], (service: WeatherService) => {
        expect(service).toBeTruthy();
    }));

    it('service method should be called', inject([WeatherService], (service: WeatherService) => {
        expect(service.searchWeatherForCity('London')).toBeTruthy();
    }));
    it(`should send an weather API Request`, async(inject([WeatherService, HttpTestingController],
        (weatherService: WeatherService, backend: HttpTestingController) => {
            weatherService.searchWeatherForCity('London').subscribe();
            backend.expectOne((req: HttpRequest<any>) => {
                return req.url === 'http://www.mocky.io/v2/5cae53483400000d00ab6cdb'
                    && req.method === 'GET'
            });
        })));
});