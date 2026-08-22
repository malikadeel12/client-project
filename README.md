# Chapel of the Archangel Michael

Digital sanctuary for the reconstruction of the Capela do Arcanjo Miguel at Roça de São Miguel, São Tomé and Príncipe.

All story, names, dates, and photographs come from the files in `Client-data/` — History.docx, Presentation.docx, Social midias.docx, and the 24 June 2025 expedition pictures. Nothing here is a generic church template.

## Run it

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Routes

- `/` — The Calling
- `/history` — From the 1519 charts to the 2025 rediscovery
- `/donate` — Four-step offering (KUNFU Pay)
- `/contact` — The unfurling scroll

## Payments

Copy `.env.example` to `.env.local` and add a KUNFU Pay key when you have one. Without a key the wax seal still records the offering locally so the ritual can be tested.

```
KUNFUPAY_API_KEY=
KUNFUPAY_API_URL=https://api.kunfupay.com
```

## Real facts on this site

- Chapel founded 1883 by Jacinto Carneiro de Sousa e Almeida, Viscount of Malanza
- Land named Rio de S. Michaelis on maps of 1519, 49 years after 21 December 1470
- Reachable only by sea from Porto Alegre
- Rediscovered 24 June 2025 by Luciano Baetz and Inês Barabola with mariner Giló Azancont
- Original statue of the Archangel still intact
- Presented to Padre Wadileme Carlos and Bishop D. João de Ceita Nazaré
- Independent call — no church or government funding
- Instagram [@santuariodesaomiguel](https://www.instagram.com/santuariodesaomiguel)
- Facebook [santuariodesaomiguelstp](https://www.facebook.com/santuariodesaomiguelstp/)
