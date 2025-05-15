1. ng new vezeteknev_keresztnev_frontend --skip-tests
2. komponensek létrehozása, illetve models mappa -> ng g c (new-bid, painting-list) - models mappa manuális (category.model.ts -    swagger)
3. service létrehozása ng g s services/data
4. app.config provideHtttpClient(withFetch()),
5. data-servicebe útvonalak lekérdezése -> constructor private http: HttpClient, private apiUrl
  getCategories(){
    return this.http.get<CategoryModel[]>(`${this.apiUrl}/categories`);
}
6. ts fájl  paintings: PaintingModel[] = [], constructor, ngOnInit függvény és további függvények elkészítése
7. adatok megjelenítése listában html
8. app.component.html -> <router-outlet>, app.routes.ts -> path
9. index.html -> bootstrap link

