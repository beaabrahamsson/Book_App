# Projekt - REST-api
Länk till API: https://ramverk-projekt.herokuapp.com/api/
## Beskrivning av webbtjänst
Detta är en webbtjänst för hantering av böcker för klient-appen Mitt Bibliotek. Här lagras böcker och deras titel, författare, bild, antal sidor, publiceringsdatum, ISBN-nummer, språk samt betyg i en tabell. Webbtjänsten kan läsa ut (read), lägga till (create), uppdatera (update) samt ta bort  (delete) böcker. I webbtjänsten går det även att söka efter böcker genom att söka på titel.
## Användning
| Metod  | Ändpunkt | Beskrivning |
| ------ | -------- | ----------- |
| GET  | /api  | Hämtar alla tillgängliga böcker |
| GET  | /api/ID  | Hämtar en specifik bok med angivet ID |
| POST  | /api  |Lagrar en ny bok. Kräver att ett book-objekt skickas med |
| PATCH  | /api/ID  | Uppdaterar en existerande bok med angivet ID. Kräver att ett book-objekt skickas med |
| DELETE  | /api/ID  | Raderar en bok med angivet ID |


Ett book-objekt returneras/skickas som JSON med följande struktur:
```
{
  "title": "To Kill a Mockingbird",
  "image": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1553383690i/2657.jpg",
  "author": "Harper Lee",
  "published": "January 1, 1960",
  "pages": "336",
  "isbn": "9780446310789",
  "language": "Engelska",
  "rating": "4"
}

```
Ett book-objekt ska innehålla följande datatyper:
```
string('title');
string('image');
string('author');
date('published');
integer('isbn');
integer('pages');
string('language');
integer('rating');
```
