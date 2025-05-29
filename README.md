npm i
1. Modellek létrehozás a models mappába car.model.ts -> https://transform.tools/json-to-typescript
2. komponensek létrehozása ng g c components/car-list
3. app.routes path-ek

4. data-service

#sima GET
getCategories(){
  return this.http.get<CategoryModel[]>(`${this.apiUrl}/categories`);
}

#ID alapú GET
getCarsByManufacturer(manufacturerId: number) {
  return this.http.get<CarModel[]>(`${this.apiUrl}/cars/${manufacturerId}`);
}

#POST
postVote(vote: VoteModel) {
  return this.http.post<{message: string}>(`${this.apiUrl}/vote`, vote);
}

5. TS fájl 

  imports: [RouterLink],

cars: CarModel[] = [];
manufacturers: ManufacturerModel[] = [];

constructor(private dataService: DataService) { }

ngOnInit(): void {
    this.dataService.getCars().subscribe({
      next: (response) => {this.cars = response;},
      error: (error) => { console.log(error); }
    });

    this.dataService.getManufacturers().subscribe({
      next: (response) => {this.manufacturers = response;},
      error: (error) => { console.log(error); }
    });
}

export class CarListComponent implements OnInit


{ path: 'voting/:id', component:VoteComponent }
<a routerLink="/voting/{{c.id}}" class="btn btn-primary">Vote</a>


7. adatok megjelenítése listában html

