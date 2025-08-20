# Palæstinensisk Arv Butik

En smuk, responsiv e-handelswebsite til salg af palæstinensisk tøj og merchandise. Denne website fejrer palæstinensisk kultur og arv gennem autentiske produkter.

## Funktioner

- **Moderne Design**: Rent, responsivt design med palæstinensiske kulturelle elementer
- **Produktkatalog**: 14 omhyggeligt udvalgte palæstinensiske arv-produkter
- **Indkøbskurv**: Fuldt kurv-funktionalitet med mængdehåndtering
- **Responsivt Layout**: Fungerer perfekt på desktop, tablet og mobile enheder
- **Smooth Animationer**: Smukke hover-effekter og overgange
- **Kontaktformular**: Nem måde for kunder at komme i kontakt
- **Lokal Storage**: Kurv-varer bevares mellem browser-sessioner

## Inkluderede Produkter

### T-Shirts
1. **Palæstina Kort T-Shirt** - 199,99 kr
   - Sort og hvid version med Palæstina-kort design og keffiyeh-mønster
   
2. **FREE PALESTINE T-Shirt** - 149,99 kr
   - Beige, sort og hvid version med vajende flag design
   
3. **Palæstina Vertikale Striber T-Shirt** - 179,99 kr
   - Hvid, sort, pink og blå version med røde og grønne striber
   
4. **Palæstina Mønster T-Shirt** - 189,99 kr
   - Grå og pink version med floral mønster og FC PALESTINA emblem

### Badges/Tilbehør
5. **From River to Sea Badge** - 29,99 kr
   - Rund badge med "FROM THE RIVER TO THE SEA PALESTINE WILL BE FREE"
   
6. **Humanity Palestine Badge** - 29,99 kr
   - Rund badge med "ALL UNITED FOR FREE HUMANITY PALESTINE"
   
7. **Aaron Bushnell Badge** - 29,99 kr
   - Rund badge med "I WILL NO LONGER BE COMPLICIT IN GENOCIDE"

## Sådan Bruges Det

1. **Åbn Websitet**: Åbn blot `index.html` i din webbrowser
2. **Gennemse Produkter**: Scroll ned til Produkter-sektionen for at se alle varer
3. **Tilføj til Kurv**: Klik "Tilføj til Kurv" på ethvert produkt du vil købe
4. **Se Kurv**: Klik på kurv-ikonet i topnavigationen for at åbne din indkøbskurv
5. **Administrer Kurv**: Juster mængder eller fjern varer fra din kurv
6. **Gå til Kassen**: Klik "Gå til Kassen" for at fuldføre dit køb (demo-tilstand)

## Filstruktur

```
palestinian-store/
├── index.html          # Hoved HTML-fil
├── styles.css          # CSS styling og responsivt design
├── script.js           # JavaScript funktionalitet og produktdata
└── README.md           # Denne fil
```

## Tekniske Detaljer

- **HTML5**: Semantisk markup for tilgængelighed
- **CSS3**: Moderne styling med Flexbox og Grid layouts
- **JavaScript**: Vanilla JS for interaktivitet og kurv-håndtering
- **Font Awesome**: Ikoner for forbedret brugeroplevelse
- **Google Fonts**: Poppins font-familie for moderne typografi

## Tilpasning

### Tilføj Flere Produkter

For at tilføje flere produkter, rediger `products` arrayet i `script.js`:

```javascript
const products = [
    // ... eksisterende produkter ...
    {
        id: 15,
        name: "Nyt Produkt Navn",
        description: "Produktbeskrivelse her",
        price: 299.99,
        image: "🆕",
        category: "kategori",
        colors: ["sort", "hvid"]
    }
];
```

### Skift Farver

Websitet bruger et grønt farvetema der repræsenterer palæstinensisk arv. For at ændre farver, modificer CSS-variablerne i `styles.css`:

- Primær grøn: `#2c5530`
- Sekundær grøn: `#4a7c59`
- Lys grøn: `#8db89a`

### Tilføj Rigtige Billeder

Erstat emoji-placeholderne med faktiske produktbilleder:

1. Tilføj billedfiler til dit projekt
2. Opdater `image` egenskaben i products arrayet
3. Modificer HTML-strukturen i `displayProducts()` funktionen

## Browser Kompatibilitet

- Chrome (anbefalet)
- Firefox
- Safari
- Edge
- Mobile browsere

## Fremtidige Forbedringer

- Betalingsgateway integration (Stripe, PayPal)
- Produktbilledgalleri
- Brugerkonti og ordrehistorik
- Produktanmeldelser og bedømmelser
- Lagerstyring
- Flersproget support
- SEO optimering

## Support

Dette er en demo-website der viser palæstinensiske arv-produkter. For en produktionsbutik, overvej:

- Tilføjelse af rigtige produktbilleder
- Integration med en betalingsprocessor
- Opsætning af hosting og domæne
- Tilføjelse af SSL-certifikat for sikkerhed
- Implementering af ordentlig lagerstyring

## Kulturel Betydning

Denne website fejrer palæstinensisk kultur og arv gennem:

- Traditionelle tøjer (T-shirts med palæstinensiske symboler)
- Håndlavede varer (Badges med politiske budskaber)
- Kulturelle symboler (Palæstinensisk flag, kort, arabisk tekst)
- Autentiske beskrivelser og historiefortælling

Designet inkorporerer grønne farver der repræsenterer palæstinensisk arv og bruger kulturelle motiver gennem hele grænsefladen.

---

*Bygget med ❤️ for palæstinensisk arv og kultur* 