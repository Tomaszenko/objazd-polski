import { Component } from '@angular/core';
import { SebmGoogleMap, SebmGoogleMapPolyline, SebmGoogleMapPolylinePoint } from 'angular2-google-maps/core';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent{
  title = 'TimeTravel Company';
  selectedStation: boolean;

    locations = [
   {
      "city": "Zamość",
      "name": "Zamość",
      "lat": 50.713833,
      "lng": 23.239197
   },
   {
      "city": "Białystok",
      "name": "Białystok",
      "lat": 53.134144,
      "lng": 23.135603
   },
   {
      "city": "Tczew",
      "name": "Tczew",
      "lat": 54.096943,
      "lng": 18.789255
   },
   {
      "city": "Warszawa",
      "name": "Warszawa Centralna",
      "lat": 52.22884,
      "lng": 21.003275
   },
   {
      "city": "Warszawa",
      "name": "Warszawa Zachodnia",
      "lat": 52.221073,
      "lng": 20.964775
   },
   {
      "city": "Warszawa",
      "name": "Warszawa Wschodnia",
      "lat": 52.252309,
      "lng": 21.051095
   },
   {
      "city": "Oświęcim",
      "name": "Oświęcim",
      "lat": 50.041313,
      "lng": 19.200066
   },
   {
      "city": "Szczecin",
      "name": "Szczecin Główny",
      "lat": 53.417767,
      "lng": 14.548205
   },
   {
      "city": "Zielona Góra",
      "name": "Zielona Góra",
      "lat": 51.947227,
      "lng": 15.514157
   },
   {
      "city": "Katowice",
      "name": "Katowice",
      "lat": 50.257603,
      "lng": 19.017113
   },
   {
      "city": "Siedlce",
      "name": "Siedlce",
      "lat": 52.162235,
      "lng": 22.27191
   },
   {
      "city": "Bielsko-Biała",
      "name": "Bielsko-Biała Główna",
      "lat": 49.8302,
      "lng": 19.045269
   },
   {
      "city": "Jarosław",
      "name": "Jarosław",
      "lat": 50.010983,
      "lng": 22.677452
   },
   {
      "city": "Szczecinek",
      "name": "Szczecinek",
      "lat": 53.693615,
      "lng": 16.704725
   },
   {
      "city": "Augustów",
      "name": "Augustów",
      "lat": 53.852406,
      "lng": 23.026161
   },
   {
      "city": "Świebodzin",
      "name": "Świebodzin",
      "lat": 52.245472,
      "lng": 15.5395975
   },
   {
      "city": "Świdnica",
      "name": "Świdnica Miasto",
      "lat": 50.84113,
      "lng": 16.481894
   },
   {
      "city": "Przemyśl",
      "name": "Przemyśl Główny",
      "lat": 49.783417,
      "lng": 22.776426
   },
   {
      "city": "Grudziądz",
      "name": "Grudziądz",
      "lat": 53.432888,
      "lng": 18.725243
   },
   {
      "city": "Radom",
      "name": "Radom",
      "lat": 51.391155,
      "lng": 21.155098
   },
   {
      "city": "Żary",
      "name": "Żary",
      "lat": 51.634747,
      "lng": 15.136962
   },
   {
      "city": "Opole",
      "name": "Opole Główne",
      "lat": 50.662266,
      "lng": 17.926554
   },
   {
      "city": "Łódź",
      "name": "Łódź Kaliska",
      "lat": 51.757877,
      "lng": 19.429234
   },
   {
      "city": "Łódź",
      "name": "Łódź Widzew",
      "lat": 51.762783,
      "lng": 19.543156
   },
   {
      "city": "Kluczbork",
      "name": "Kluczbork",
      "lat": 50.97135,
      "lng": 18.20077
   },
   {
      "city": "Bielsk Podlaski",
      "name": "Bielsk Podlaski",
      "lat": 52.76147,
      "lng": 23.188667
   },
   {
      "city": "Poznań",
      "name": "Poznań Główny",
      "lat": 52.40214,
      "lng": 16.911764
   },
   {
      "city": "Olsztyn",
      "name": "Olsztyn Główny",
      "lat": 53.78566,
      "lng": 20.497377
   },
   {
      "city": "Brodnica",
      "name": "Brodnica",
      "lat": 53.263382,
      "lng": 19.405993
   },
   {
      "city": "Włoszczowa",
      "name": "Włoszczowa Północ",
      "lat": 50.856766,
      "lng": 19.946445
   },
   {
      "city": "Włoszczowa",
      "name": "Włoszczowa",
      "lat": 50.837806,
      "lng": 20.014366
   },
   {
      "city": "Gdynia",
      "name": "Gdynia Główna",
      "lat": 54.521404,
      "lng": 18.529818
   },
   {
      "city": "Chojnice",
      "name": "Chojnice",
      "lat": 53.68877,
      "lng": 17.577188
   },
   {
      "city": "Konin",
      "name": "Konin",
      "lat": 52.231155,
      "lng": 18.252472
   },
   {
      "city": "Kielce",
      "name": "Kielce",
      "lat": 50.874294,
      "lng": 20.618546
   },
   {
      "city": "Starachowice",
      "name": "Starachowice",
      "lat": 51.05135,
      "lng": 21.058802
   },
   {
      "city": "Kołobrzeg",
      "name": "Kołobrzeg",
      "lat": 54.181984,
      "lng": 15.569869
   },
   {
      "city": "Rzeszów",
      "name": "Rzeszów Główny",
      "lat": 50.042755,
      "lng": 22.00701
   },
   {
      "city": "Rybnik",
      "name": "Rybnik",
      "lat": 50.089138,
      "lng": 18.54729
   },
   {
      "city": "Brzeg",
      "name": "Brzeg",
      "lat": 50.853302,
      "lng": 17.470636
   },
   {
      "city": "Biała Podlaska",
      "name": "Biała Podlaska",
      "lat": 52.02046,
      "lng": 23.130547
   },
   {
      "city": "Ostróda",
      "name": "Ostróda",
      "lat": 53.699924,
      "lng": 19.951206
   },
   {
      "city": "Koszalin",
      "name": "Koszalin",
      "lat": 54.19066,
      "lng": 16.169546
   },
   {
      "city": "Legnica",
      "name": "Legnica",
      "lat": 51.213173,
      "lng": 16.16822
   },
   {
      "city": "Pruszków",
      "name": "Pruszków",
      "lat": 52.16791,
      "lng": 20.798557
   },
   {
      "city": "Radomsko",
      "name": "Radomsko",
      "lat": 51.07453,
      "lng": 19.437832
   },
   {
      "city": "Ostrowiec Świętokrzyski",
      "name": "Ostrowiec Świętokrzyski",
      "lat": 50.933613,
      "lng": 21.37664
   },
   {
      "city": "Grajewo",
      "name": "Grajewo",
      "lat": 53.64974,
      "lng": 22.448221
   },
   {
      "city": "Olkusz",
      "name": "Olkusz",
      "lat": 50.274162,
      "lng": 19.573984
   },
   {
      "city": "Toruń",
      "name": "Toruń Główny",
      "lat": 53.000187,
      "lng": 18.614595
   },
   {
      "city": "Kraków",
      "name": "Kraków Główny",
      "lat": 50.06564,
      "lng": 19.947206
   },
   {
      "city": "Kraków",
      "name": "Kraków Płaszów",
      "lat": 50.0349,
      "lng": 19.974903
   },
   {
      "city": "Elbląg",
      "name": "Elbląg",
      "lat": 54.15112,
      "lng": 19.416449
   },
   {
      "city": "Gniezno",
      "name": "Gniezno",
      "lat": 52.529934,
      "lng": 17.603413
   },
   {
      "city": "Ełk",
      "name": "Ełk",
      "lat": 53.8248,
      "lng": 22.361605
   },
   {
      "city": "Bochnia",
      "name": "Bochnia",
      "lat": 49.977142,
      "lng": 20.431145
   },
   {
      "city": "Łuków",
      "name": "Łuków",
      "lat": 51.94164,
      "lng": 22.389149
   },
   {
      "city": "Ostrołęka",
      "name": "Ostrołęka",
      "lat": 53.056355,
      "lng": 21.617067
   },
   {
      "city": "Piła",
      "name": "Piła Główna",
      "lat": 53.143066,
      "lng": 16.743547
   },
   {
      "city": "Zakopane",
      "name": "Zakopane",
      "lat": 49.3008,
      "lng": 19.962564
   },
   {
      "city": "Wałbrzych",
      "name": "Wałbrzych Główny",
      "lat": 50.743465,
      "lng": 16.281664
   },
   {
      "city": "Wałbrzych",
      "name": "Wałbrzych Miasto",
      "lat": 50.784386,
      "lng": 16.284266
   },
   {
      "city": "Bydgoszcz",
      "name": "Bydgoszcz Główna",
      "lat": 53.134483,
      "lng": 17.99023
   },
   {
      "city": "Sokółka",
      "name": "Sokółka",
      "lat": 53.403656,
      "lng": 23.508131
   },
   {
      "city": "Słupsk",
      "name": "Słupsk",
      "lat": 54.467327,
      "lng": 17.016342
   },
   {
      "city": "Żagań",
      "name": "Żagań",
      "lat": 51.60425,
      "lng": 15.315622
   },
   {
      "city": "Stargard",
      "name": "Stargard",
      "lat": 53.339638,
      "lng": 15.031512
   },
   {
      "city": "Pabianice",
      "name": "Pabianice",
      "lat": 51.660767,
      "lng": 19.325357
   },
   {
      "city": "Nysa",
      "name": "Nysa",
      "lat": 50.477676,
      "lng": 17.341282
   },
   {
      "city": "Tarnobrzeg",
      "name": "Tarnobrzeg",
      "lat": 50.567997,
      "lng": 21.696062
   },
   {
      "city": "Jędrzejów",
      "name": "Jędrzejów",
      "lat": 50.644924,
      "lng": 20.276203
   },
   {
      "city": "Piotrków Trybunalski",
      "name": "Piotrków Trybunalski",
      "lat": 51.410633,
      "lng": 19.685005
   },
   {
      "city": "Iława",
      "name": "Iława Główna",
      "lat": 53.582592,
      "lng": 19.573326
   },
   {
      "city": "Gliwice",
      "name": "Gliwice",
      "lat": 50.3006,
      "lng": 18.676573
   },
   {
      "city": "Częstochowa",
      "name": "Częstochowa",
      "lat": 50.808563,
      "lng": 19.119875
   },
   {
      "city": "Lublin",
      "name": "Lublin",
      "lat": 51.23151,
      "lng": 22.568634
   },
   {
      "city": "Starogard Gdański",
      "name": "Starogard Gdański",
      "lat": 53.977173,
      "lng": 18.525581
   },
   {
      "city": "Suwałki",
      "name": "Suwałki",
      "lat": 54.106018,
      "lng": 22.94553
   },
   {
      "city": "Jelenia Góra",
      "name": "Jelenia Góra",
      "lat": 50.902344,
      "lng": 15.755541
   },
   {
      "city": "Świnoujście",
      "name": "Świnoujście",
      "lat": 53.904804,
      "lng": 14.266531
   },
   {
      "city": "Leszno",
      "name": "Leszno",
      "lat": 51.845844,
      "lng": 16.565449
   },
   {
      "city": "Kalisz",
      "name": "Kalisz",
      "lat": 51.742977,
      "lng": 18.071234
   },
   {
      "city": "Włocławek",
      "name": "Włocławek",
      "lat": 52.652992,
      "lng": 19.058933
   },
   {
      "city": "Szczytno",
      "name": "Szczytno",
      "lat": 53.56039,
      "lng": 20.997768
   },
   {
      "city": "Ciechanów",
      "name": "Ciechanów",
      "lat": 52.88382,
      "lng": 20.591518
   },
   {
      "city": "Kędzierzyn-Koźle",
      "name": "Kędzierzyn-Koźle",
      "lat": 50.34467,
      "lng": 18.20583
   },
   {
      "city": "Kłodzko",
      "name": "Kłodzko Główne",
      "lat": 50.45132,
      "lng": 16.656744
   },
   {
      "city": "Wrocław",
      "name": "Wrocław Główny",
      "lat": 51.098766,
      "lng": 17.036518
   },
   {
      "city": "Wrocław",
      "name": "Wrocław Mikołajów",
      "lat": 51.115307,
      "lng": 16.998182
   },
   {
      "city": "Głogów",
      "name": "Głogów",
      "lat": 51.668606,
      "lng": 16.079096
   },
   {
      "city": "Legionowo",
      "name": "Legionowo",
      "lat": 52.40092,
      "lng": 20.941647
   },
   {
      "city": "Tarnów",
      "name": "Tarnów",
      "lat": 50.00571,
      "lng": 20.974579
   },
   {
      "city": "Sieradz",
      "name": "Sieradz",
      "lat": 51.59738,
      "lng": 18.714455
   },
   {
      "city": "Malbork",
      "name": "Malbork",
      "lat": 54.035847,
      "lng": 19.042582
   },
   {
      "city": "Skarżysko-Kamienna",
      "name": "Skarżysko-Kamienna",
      "lat": 51.11615,
      "lng": 20.881208
   },
   {
      "city": "Stalowa Wola",
      "name": "Stalowa Wola Centrum",
      "lat": 50.56975,
      "lng": 22.055437
   },
   {
      "city": "Skierniewice",
      "name": "Skierniewice",
      "lat": 51.966877,
      "lng": 20.150019
   },
   {
      "city": "Gorzów Wielkopolski",
      "name": "Gorzów Wielkopolski",
      "lat": 52.727882,
      "lng": 15.229074
   },
   {
      "city": "Gdańsk",
      "name": "Gdańsk Główny",
      "lat": 54.35538,
      "lng": 18.644575
   },
   {
      "city": "Chełm",
      "name": "Chełm",
      "lat": 51.140842,
      "lng": 23.494015
   },
   {
      "city": "Kostrzyn",
      "name": "Kostrzyn",
      "lat": 52.591488,
      "lng": 14.646972
   },
   {
      "city": "Sosnowiec",
      "name": "Sosnowiec Główny",
      "lat": 50.278564,
      "lng": 19.12656
   },
   {
      "city": "Namysłów",
      "name": "Namysłów",
      "lat": 51.074738,
      "lng": 17.716604
   },
   {
      "city": "Puławy",
      "name": "Puławy Miasto",
      "lat": 51.426483,
      "lng": 21.985073
   },
   {
      "city": "Inowrocław",
      "name": "Inowrocław",
      "lat": 52.805573,
      "lng": 18.244347
   },
   {
      "city": "Dębica",
      "name": "Dębica",
      "lat": 50.054314,
      "lng": 21.405443
   },
   {
      "city": "Nowy Sącz",
      "name": "Nowy Sącz",
      "lat": 49.606728,
      "lng": 20.702574
   }
];

neighbours = [
  {"toLat": 51.660767, "numTrains": 28, "toLng": 19.325357, "fromLat": 51.59738, "fromLng": 18.714455, "fromStation": "Sieradz", "toStation": "Pabianice"}, 
  {"toLat": 51.742977, "numTrains": 12, "toLng": 18.071234, "fromLat": 51.59738, "fromLng": 18.714455, "fromStation": "Sieradz", "toStation": "Kalisz"}, 
  {"toLat": 50.257603, "numTrains": 4, "toLng": 19.017113, "fromLat": 50.274162, "fromLng": 19.573984, "fromStation": "Olkusz", "toStation": "Katowice"}, 
  {"toLat": 50.644924, "numTrains": 1, "toLng": 20.276203, "fromLat": 50.274162, "fromLng": 19.573984, "fromStation": "Olkusz", "toStation": "J\u0119drzej\u00f3w"}, 
  {"toLat": 52.529934, "numTrains": 44, "toLng": 17.603413, "fromLat": 52.40214, "fromLng": 16.911764, "fromStation": "Pozna\u0144 G\u0142\u00f3wny", "toStation": "Gniezno"}, 
  {"toLat": 51.845844, "numTrains": 33, "toLng": 16.565449, "fromLat": 52.40214, "fromLng": 16.911764, "fromStation": "Pozna\u0144 G\u0142\u00f3wny", "toStation": "Leszno"}, 
  {"toLat": 52.231155, "numTrains": 32, "toLng": 18.252472, "fromLat": 52.40214, "fromLng": 16.911764, "fromStation": "Pozna\u0144 G\u0142\u00f3wny", "toStation": "Konin"}, 
  {"toLat": 53.339638, "numTrains": 22, "toLng": 15.031512, "fromLat": 52.40214, "fromLng": 16.911764, "fromStation": "Pozna\u0144 G\u0142\u00f3wny", "toStation": "Stargard"}, {"toLat": 53.143066, "numTrains": 15, "toLng": 16.743547, "fromLat": 52.40214, "fromLng": 16.911764, "fromStation": "Pozna\u0144 G\u0142\u00f3wny", "toStation": "Pi\u0142a G\u0142\u00f3wna"}, {"toLat": 51.947227, "numTrains": 10, "toLng": 15.514157, "fromLat": 52.40214, "fromLng": 16.911764, "fromStation": "Pozna\u0144 G\u0142\u00f3wny", "toStation": "Zielona G\u00f3ra"}, {"toLat": 51.115307, "numTrains": 5, "toLng": 16.998182, "fromLat": 52.40214, "fromLng": 16.911764, "fromStation": "Pozna\u0144 G\u0142\u00f3wny", "toStation": "Wroc\u0142aw Miko\u0142aj\u00f3w"}, {"toLat": 51.742977, "numTrains": 5, "toLng": 18.071234, "fromLat": 52.40214, "fromLng": 16.911764, "fromStation": "Pozna\u0144 G\u0142\u00f3wny", "toStation": "Kalisz"}, {"toLat": 52.245472, "numTrains": 5, "toLng": 15.5395975, "fromLat": 52.40214, "fromLng": 16.911764, "fromStation": "Pozna\u0144 G\u0142\u00f3wny", "toStation": "\u015awiebodzin"}, {"toLat": 52.221073, "numTrains": 4, "toLng": 20.964775, "fromLat": 52.40214, "fromLng": 16.911764, "fromStation": "Pozna\u0144 G\u0142\u00f3wny", "toStation": "Warszawa Zachodnia"}, {"toLat": 52.727882, "numTrains": 3, "toLng": 15.229074, "fromLat": 52.40214, "fromLng": 16.911764, "fromStation": "Pozna\u0144 G\u0142\u00f3wny", "toStation": "Gorz\u00f3w Wielkopolski"}, {"toLat": 50.97135, "numTrains": 3, "toLng": 18.20077, "fromLat": 52.40214, "fromLng": 16.911764, "fromStation": "Pozna\u0144 G\u0142\u00f3wny", "toStation": "Kluczbork"}, {"toLat": 51.05135, "numTrains": 15, "toLng": 21.058802, "fromLat": 50.933613, "fromLng": 21.37664, "fromStation": "Ostrowiec \u015awi\u0119tokrzyski", "toStation": "Starachowice"}, {"toLat": 54.467327, "numTrains": 17, "toLng": 17.016342, "fromLat": 54.19066, "fromLng": 16.169546, "fromStation": "Koszalin", "toStation": "S\u0142upsk"}, {"toLat": 53.339638, "numTrains": 10, "toLng": 15.031512, "fromLat": 54.19066, "fromLng": 16.169546, "fromStation": "Koszalin", "toStation": "Stargard"}, {"toLat": 54.181984, "numTrains": 6, "toLng": 15.569869, "fromLat": 54.19066, "fromLng": 16.169546, "fromStation": "Koszalin", "toStation": "Ko\u0142obrzeg"}, {"toLat": 53.693615, "numTrains": 5, "toLng": 16.704725, "fromLat": 54.19066, "fromLng": 16.169546, "fromStation": "Koszalin", "toStation": "Szczecinek"}, {"toLat": 51.098766, "numTrains": 24, "toLng": 17.036518, "fromLat": 50.784386, "fromLng": 16.284266, "fromStation": "Wa\u0142brzych Miasto", "toStation": "Wroc\u0142aw G\u0142\u00f3wny"}, {"toLat": 50.743465, "numTrains": 20, "toLng": 16.281664, "fromLat": 50.784386, "fromLng": 16.284266, "fromStation": "Wa\u0142brzych Miasto", "toStation": "Wa\u0142brzych G\u0142\u00f3wny"}, {"toLat": 50.902344, "numTrains": 1, "toLng": 15.755541, "fromLat": 50.784386, "fromLng": 16.284266, "fromStation": "Wa\u0142brzych Miasto", "toStation": "Jelenia G\u00f3ra"}, {"toLat": 50.784386, "numTrains": 20, "toLng": 16.284266, "fromLat": 50.743465, "fromLng": 16.281664, "fromStation": "Wa\u0142brzych G\u0142\u00f3wny", "toStation": "Wa\u0142brzych Miasto"}, {"toLat": 50.902344, "numTrains": 18, "toLng": 15.755541, "fromLat": 50.743465, "fromLng": 16.281664, "fromStation": "Wa\u0142brzych G\u0142\u00f3wny", "toStation": "Jelenia G\u00f3ra"}, {"toLat": 50.45132, "numTrains": 7, "toLng": 16.656744, "fromLat": 50.743465, "fromLng": 16.281664, "fromStation": "Wa\u0142brzych G\u0142\u00f3wny", "toStation": "K\u0142odzko G\u0142\u00f3wne"}, {"toLat": 50.874294, "numTrains": 23, "toLng": 20.618546, "fromLat": 51.11615, "fromLng": 20.881208, "fromStation": "Skar\u017cysko-Kamienna", "toStation": "Kielce"}, {"toLat": 51.391155, "numTrains": 20, "toLng": 21.155098, "fromLat": 51.11615, "fromLng": 20.881208, "fromStation": "Skar\u017cysko-Kamienna", "toStation": "Radom"}, {"toLat": 51.05135, "numTrains": 15, "toLng": 21.058802, "fromLat": 51.11615, "fromLng": 20.881208, "fromStation": "Skar\u017cysko-Kamienna", "toStation": "Starachowice"}, {"toLat": 50.743465, "numTrains": 18, "toLng": 16.281664, "fromLat": 50.902344, "fromLng": 15.755541, "fromStation": "Jelenia G\u00f3ra", "toStation": "Wa\u0142brzych G\u0142\u00f3wny"}, {"toLat": 50.784386, "numTrains": 1, "toLng": 16.284266, "fromLat": 50.902344, "fromLng": 15.755541, "fromStation": "Jelenia G\u00f3ra", "toStation": "Wa\u0142brzych Miasto"}, {"toLat": 51.634747, "numTrains": 1, "toLng": 15.136962, "fromLat": 50.902344, "fromLng": 15.755541, "fromStation": "Jelenia G\u00f3ra", "toStation": "\u017bary"}, {"toLat": 53.134144, "numTrains": 8, "toLng": 23.135603, "fromLat": 53.64974, "fromLng": 22.448221, "fromStation": "Grajewo", "toStation": "Bia\u0142ystok"}, {"toLat": 53.8248, "numTrains": 7, "toLng": 22.361605, "fromLat": 53.64974, "fromLng": 22.448221, "fromStation": "Grajewo", "toStation": "E\u0142k"}, {"toLat": 50.257603, "numTrains": 20, "toLng": 19.017113, "fromLat": 50.089138, "fromLng": 18.54729, "fromStation": "Rybnik", "toStation": "Katowice"}, {"toLat": 49.8302, "numTrains": 6, "toLng": 19.045269, "fromLat": 50.089138, "fromLng": 18.54729, "fromStation": "Rybnik", "toStation": "Bielsko-Bia\u0142a G\u0142\u00f3wna"}, {"toLat": 50.34467, "numTrains": 2, "toLng": 18.20583, "fromLat": 50.089138, "fromLng": 18.54729, "fromStation": "Rybnik", "toStation": "K\u0119dzierzyn-Ko\u017ale"}, {"toLat": 53.403656, "numTrains": 11, "toLng": 23.508131, "fromLat": 53.134144, "fromLng": 23.135603, "fromStation": "Bia\u0142ystok", "toStation": "Sok\u00f3\u0142ka"}, {"toLat": 52.252309, "numTrains": 10, "toLng": 21.051095, "fromLat": 53.134144, "fromLng": 23.135603, "fromStation": "Bia\u0142ystok", "toStation": "Warszawa Wschodnia"}, {"toLat": 53.64974, "numTrains": 8, "toLng": 22.448221, "fromLat": 53.134144, "fromLng": 23.135603, "fromStation": "Bia\u0142ystok", "toStation": "Grajewo"}, {"toLat": 52.76147, "numTrains": 4, "toLng": 23.188667, "fromLat": 53.134144, "fromLng": 23.135603, "fromStation": "Bia\u0142ystok", "toStation": "Bielsk Podlaski"}, {"toLat": 51.426483, "numTrains": 26, "toLng": 21.985073, "fromLat": 51.23151, "fromLng": 22.568634, "fromStation": "Lublin", "toStation": "Pu\u0142awy Miasto"}, {"toLat": 51.140842, "numTrains": 15, "toLng": 23.494015, "fromLat": 51.23151, "fromLng": 22.568634, "fromStation": "Lublin", "toStation": "Che\u0142m"}, {"toLat": 50.567997, "numTrains": 6, "toLng": 21.696062, "fromLat": 51.23151, "fromLng": 22.568634, "fromStation": "Lublin", "toStation": "Tarnobrzeg"}, {"toLat": 50.713833, "numTrains": 4, "toLng": 23.239197, "fromLat": 51.23151, "fromLng": 22.568634, "fromStation": "Lublin", "toStation": "Zamo\u015b\u0107"}, {"toLat": 50.56975, "numTrains": 2, "toLng": 22.055437, "fromLat": 51.23151, "fromLng": 22.568634, "fromStation": "Lublin", "toStation": "Stalowa Wola Centrum"}, {"toLat": 51.098766, "numTrains": 26, "toLng": 17.036518, "fromLat": 51.213173, "fromLng": 16.16822, "fromStation": "Legnica", "toStation": "Wroc\u0142aw G\u0142\u00f3wny"}, {"toLat": 51.60425, "numTrains": 5, "toLng": 15.315622, "fromLat": 51.213173, "fromLng": 16.16822, "fromStation": "Legnica", "toStation": "\u017baga\u0144"}, {"toLat": 50.662266, "numTrains": 24, "toLng": 17.926554, "fromLat": 50.34467, "fromLng": 18.20583, "fromStation": "K\u0119dzierzyn-Ko\u017ale", "toStation": "Opole G\u0142\u00f3wne"}, {"toLat": 50.3006, "numTrains": 12, "toLng": 18.676573, "fromLat": 50.34467, "fromLng": 18.20583, "fromStation": "K\u0119dzierzyn-Ko\u017ale", "toStation": "Gliwice"}, {"toLat": 50.477676, "numTrains": 5, "toLng": 17.341282, "fromLat": 50.34467, "fromLng": 18.20583, "fromStation": "K\u0119dzierzyn-Ko\u017ale", "toStation": "Nysa"}, {"toLat": 50.089138, "numTrains": 2, "toLng": 18.54729, "fromLat": 50.34467, "fromLng": 18.20583, "fromStation": "K\u0119dzierzyn-Ko\u017ale", "toStation": "Rybnik"}, {"toLat": 53.417767, "numTrains": 7, "toLng": 14.548205, "fromLat": 54.181984, "fromLng": 15.569869, "fromStation": "Ko\u0142obrzeg", "toStation": "Szczecin G\u0142\u00f3wny"}, {"toLat": 53.693615, "numTrains": 7, "toLng": 16.704725, "fromLat": 54.181984, "fromLng": 15.569869, "fromStation": "Ko\u0142obrzeg", "toStation": "Szczecinek"}, {"toLat": 54.19066, "numTrains": 6, "toLng": 16.169546, "fromLat": 54.181984, "fromLng": 15.569869, "fromStation": "Ko\u0142obrzeg", "toStation": "Koszalin"}, {"toLat": 50.010983, "numTrains": 32, "toLng": 22.677452, "fromLat": 49.783417, "fromLng": 22.776426, "fromStation": "Przemy\u015bl G\u0142\u00f3wny", "toStation": "Jaros\u0142aw"}, {"toLat": 52.162235, "numTrains": 22, "toLng": 22.27191, "fromLat": 51.94164, "fromLng": 22.389149, "fromStation": "\u0141uk\u00f3w", "toStation": "Siedlce"}, {"toLat": 52.02046, "numTrains": 16, "toLng": 23.130547, "fromLat": 51.94164, "fromLng": 22.389149, "fromStation": "\u0141uk\u00f3w", "toStation": "Bia\u0142a Podlaska"}, {"toLat": 51.60425, "numTrains": 9, "toLng": 15.315622, "fromLat": 51.634747, "fromLng": 15.136962, "fromStation": "\u017bary", "toStation": "\u017baga\u0144"}, {"toLat": 51.947227, "numTrains": 4, "toLng": 15.514157, "fromLat": 51.634747, "fromLng": 15.136962, "fromStation": "\u017bary", "toStation": "Zielona G\u00f3ra"}, {"toLat": 50.902344, "numTrains": 1, "toLng": 15.755541, "fromLat": 51.634747, "fromLng": 15.136962, "fromStation": "\u017bary", "toStation": "Jelenia G\u00f3ra"}, {"toLat": 50.00571, "numTrains": 25, "toLng": 20.974579, "fromLat": 50.054314, "fromLng": 21.405443, "fromStation": "D\u0119bica", "toStation": "Tarn\u00f3w"}, {"toLat": 50.042755, "numTrains": 25, "toLng": 22.00701, "fromLat": 50.054314, "fromLng": 21.405443, "fromStation": "D\u0119bica", "toStation": "Rzesz\u00f3w G\u0142\u00f3wny"}, {"toLat": 51.098766, "numTrains": 78, "toLng": 17.036518, "fromLat": 51.115307, "fromLng": 16.998182, "fromStation": "Wroc\u0142aw Miko\u0142aj\u00f3w", "toStation": "Wroc\u0142aw G\u0142\u00f3wny"}, {"toLat": 51.845844, "numTrains": 25, "toLng": 16.565449, "fromLat": 51.115307, "fromLng": 16.998182, "fromStation": "Wroc\u0142aw Miko\u0142aj\u00f3w", "toStation": "Leszno"}, {"toLat": 51.074738, "numTrains": 10, "toLng": 17.716604, "fromLat": 51.115307, "fromLng": 16.998182, "fromStation": "Wroc\u0142aw Miko\u0142aj\u00f3w", "toStation": "Namys\u0142\u00f3w"}, {"toLat": 51.742977, "numTrains": 6, "toLng": 18.071234, "fromLat": 51.115307, "fromLng": 16.998182, "fromStation": "Wroc\u0142aw Miko\u0142aj\u00f3w", "toStation": "Kalisz"}, {"toLat": 52.40214, "numTrains": 5, "toLng": 16.911764, "fromLat": 51.115307, "fromLng": 16.998182, "fromStation": "Wroc\u0142aw Miko\u0142aj\u00f3w", "toStation": "Pozna\u0144 G\u0142\u00f3wny"}, {"toLat": 51.115307, "numTrains": 82, "toLng": 16.998182, "fromLat": 51.098766, "fromLng": 17.036518, "fromStation": "Wroc\u0142aw G\u0142\u00f3wny", "toStation": "Wroc\u0142aw Miko\u0142aj\u00f3w"}, {"toLat": 50.853302, "numTrains": 43, "toLng": 17.470636, "fromLat": 51.098766, "fromLng": 17.036518, "fromStation": "Wroc\u0142aw G\u0142\u00f3wny", "toStation": "Brzeg"}, {"toLat": 51.213173, "numTrains": 27, "toLng": 16.16822, "fromLat": 51.098766, "fromLng": 17.036518, "fromStation": "Wroc\u0142aw G\u0142\u00f3wny", "toStation": "Legnica"}, {"toLat": 50.784386, "numTrains": 24, "toLng": 16.284266, "fromLat": 51.098766, "fromLng": 17.036518, "fromStation": "Wroc\u0142aw G\u0142\u00f3wny", "toStation": "Wa\u0142brzych Miasto"}, {"toLat": 50.45132, "numTrains": 13, "toLng": 16.656744, "fromLat": 51.098766, "fromLng": 17.036518, "fromStation": "Wroc\u0142aw G\u0142\u00f3wny", "toStation": "K\u0142odzko G\u0142\u00f3wne"}, {"toLat": 51.668606, "numTrains": 13, "toLng": 16.079096, "fromLat": 51.098766, "fromLng": 17.036518, "fromStation": "Wroc\u0142aw G\u0142\u00f3wny", "toStation": "G\u0142og\u00f3w"}, {"toLat": 50.662266, "numTrains": 6, "toLng": 17.926554, "fromLat": 51.098766, "fromLng": 17.036518, "fromStation": "Wroc\u0142aw G\u0142\u00f3wny", "toStation": "Opole G\u0142\u00f3wne"}, {"toLat": 50.84113, "numTrains": 4, "toLng": 16.481894, "fromLat": 51.098766, "fromLng": 17.036518, "fromStation": "Wroc\u0142aw G\u0142\u00f3wny", "toStation": "\u015awidnica Miasto"}, {"toLat": 51.845844, "numTrains": 1, "toLng": 16.565449, "fromLat": 51.098766, "fromLng": 17.036518, "fromStation": "Wroc\u0142aw G\u0142\u00f3wny", "toStation": "Leszno"}, {"toLat": 50.257603, "numTrains": 48, "toLng": 19.017113, "fromLat": 50.3006, "fromLng": 18.676573, "fromStation": "Gliwice", "toStation": "Katowice"}, {"toLat": 50.662266, "numTrains": 20, "toLng": 17.926554, "fromLat": 50.3006, "fromLng": 18.676573, "fromStation": "Gliwice", "toStation": "Opole G\u0142\u00f3wne"}, {"toLat": 50.34467, "numTrains": 14, "toLng": 18.20583, "fromLat": 50.3006, "fromLng": 18.676573, "fromStation": "Gliwice", "toStation": "K\u0119dzierzyn-Ko\u017ale"}, {"toLat": 50.97135, "numTrains": 1, "toLng": 18.20077, "fromLat": 50.3006, "fromLng": 18.676573, "fromStation": "Gliwice", "toStation": "Kluczbork"}, {"toLat": 54.521404, "numTrains": 168, "toLng": 18.529818, "fromLat": 54.35538, "fromLng": 18.644575, "fromStation": "Gda\u0144sk G\u0142\u00f3wny", "toStation": "Gdynia G\u0142\u00f3wna"}, {"toLat": 54.096943, "numTrains": 70, "toLng": 18.789255, "fromLat": 54.35538, "fromLng": 18.644575, "fromStation": "Gda\u0144sk G\u0142\u00f3wny", "toStation": "Tczew"}, {"toLat": 52.252309, "numTrains": 1, "toLng": 21.051095, "fromLat": 54.35538, "fromLng": 18.644575, "fromStation": "Gda\u0144sk G\u0142\u00f3wny", "toStation": "Warszawa Wschodnia"}, {"toLat": 54.035847, "numTrains": 1, "toLng": 19.042582, "fromLat": 54.35538, "fromLng": 18.644575, "fromStation": "Gda\u0144sk G\u0142\u00f3wny", "toStation": "Malbork"}, {"toLat": 52.727882, "numTrains": 10, "toLng": 15.229074, "fromLat": 52.591488, "fromLng": 14.646972, "fromStation": "Kostrzyn", "toStation": "Gorz\u00f3w Wielkopolski"}, {"toLat": 53.417767, "numTrains": 9, "toLng": 14.548205, "fromLat": 52.591488, "fromLng": 14.646972, "fromStation": "Kostrzyn", "toStation": "Szczecin G\u0142\u00f3wny"}, {"toLat": 51.947227, "numTrains": 5, "toLng": 15.514157, "fromLat": 52.591488, "fromLng": 14.646972, "fromStation": "Kostrzyn", "toStation": "Zielona G\u00f3ra"}, {"toLat": 53.78566, "numTrains": 7, "toLng": 20.497377, "fromLat": 53.8248, "fromLng": 22.361605, "fromStation": "E\u0142k", "toStation": "Olsztyn G\u0142\u00f3wny"}, {"toLat": 53.64974, "numTrains": 7, "toLng": 22.448221, "fromLat": 53.8248, "fromLng": 22.361605, "fromStation": "E\u0142k", "toStation": "Grajewo"}, {"toLat": 53.56039, "numTrains": 2, "toLng": 20.997768, "fromLat": 53.8248, "fromLng": 22.361605, "fromStation": "E\u0142k", "toStation": "Szczytno"}, {"toLat": 50.808563, "numTrains": 28, "toLng": 19.119875, "fromLat": 51.07453, "fromLng": 19.437832, "fromStation": "Radomsko", "toStation": "Cz\u0119stochowa"}, {"toLat": 51.410633, "numTrains": 26, "toLng": 19.685005, "fromLat": 51.07453, "fromLng": 19.437832, "fromStation": "Radomsko", "toStation": "Piotrk\u00f3w Trybunalski"}, {"toLat": 52.40214, "numTrains": 36, "toLng": 16.911764, "fromLat": 51.845844, "fromLng": 16.565449, "fromStation": "Leszno", "toStation": "Pozna\u0144 G\u0142\u00f3wny"}, {"toLat": 51.115307, "numTrains": 21, "toLng": 16.998182, "fromLat": 51.845844, "fromLng": 16.565449, "fromStation": "Leszno", "toStation": "Wroc\u0142aw Miko\u0142aj\u00f3w"}, {"toLat": 51.098766, "numTrains": 1, "toLng": 17.036518, "fromLat": 51.845844, "fromLng": 16.565449, "fromStation": "Leszno", "toStation": "Wroc\u0142aw G\u0142\u00f3wny"}, {"toLat": 51.098766, "numTrains": 4, "toLng": 17.036518, "fromLat": 50.84113, "fromLng": 16.481894, "fromStation": "\u015awidnica Miasto", "toStation": "Wroc\u0142aw G\u0142\u00f3wny"}, {"toLat": 50.45132, "numTrains": 4, "toLng": 16.656744, "fromLat": 50.84113, "fromLng": 16.481894, "fromStation": "\u015awidnica Miasto", "toStation": "K\u0142odzko G\u0142\u00f3wne"}, {"toLat": 53.000187, "numTrains": 35, "toLng": 18.614595, "fromLat": 53.134483, "fromLng": 17.99023, "fromStation": "Bydgoszcz G\u0142\u00f3wna", "toStation": "Toru\u0144 G\u0142\u00f3wny"}, {"toLat": 52.805573, "numTrains": 27, "toLng": 18.244347, "fromLat": 53.134483, "fromLng": 17.99023, "fromStation": "Bydgoszcz G\u0142\u00f3wna", "toStation": "Inowroc\u0142aw"}, {"toLat": 54.096943, "numTrains": 20, "toLng": 18.789255, "fromLat": 53.134483, "fromLng": 17.99023, "fromStation": "Bydgoszcz G\u0142\u00f3wna", "toStation": "Tczew"}, {"toLat": 53.143066, "numTrains": 10, "toLng": 16.743547, "fromLat": 53.134483, "fromLng": 17.99023, "fromStation": "Bydgoszcz G\u0142\u00f3wna", "toStation": "Pi\u0142a G\u0142\u00f3wna"}, {"toLat": 53.68877, "numTrains": 5, "toLng": 17.577188, "fromLat": 53.134483, "fromLng": 17.99023, "fromStation": "Bydgoszcz G\u0142\u00f3wna", "toStation": "Chojnice"}, {"toLat": 53.432888, "numTrains": 1, "toLng": 18.725243, "fromLat": 53.134483, "fromLng": 17.99023, "fromStation": "Bydgoszcz G\u0142\u00f3wna", "toStation": "Grudzi\u0105dz"}, {"toLat": 51.23151, "numTrains": 14, "toLng": 22.568634, "fromLat": 51.140842, "fromLng": 23.494015, "fromStation": "Che\u0142m", "toStation": "Lublin"}, {"toLat": 51.23151, "numTrains": 4, "toLng": 22.568634, "fromLat": 50.713833, "fromLng": 23.239197, "fromStation": "Zamo\u015b\u0107", "toStation": "Lublin"}, {"toLat": 50.56975, "numTrains": 2, "toLng": 22.055437, "fromLat": 50.713833, "fromLng": 23.239197, "fromStation": "Zamo\u015b\u0107", "toStation": "Stalowa Wola Centrum"}, {"toLat": 50.874294, "numTrains": 19, "toLng": 20.618546, "fromLat": 50.644924, "fromLng": 20.276203, "fromStation": "J\u0119drzej\u00f3w", "toStation": "Kielce"}, {"toLat": 50.06564, "numTrains": 12, "toLng": 19.947206, "fromLat": 50.644924, "fromLng": 20.276203, "fromStation": "J\u0119drzej\u00f3w", "toStation": "Krak\u00f3w G\u0142\u00f3wny"}, {"toLat": 50.274162, "numTrains": 1, "toLng": 19.573984, "fromLat": 50.644924, "fromLng": 20.276203, "fromStation": "J\u0119drzej\u00f3w", "toStation": "Olkusz"}, {"toLat": 51.07453, "numTrains": 27, "toLng": 19.437832, "fromLat": 51.410633, "fromLng": 19.685005, "fromStation": "Piotrk\u00f3w Trybunalski", "toStation": "Radomsko"}, {"toLat": 51.762783, "numTrains": 14, "toLng": 19.543156, "fromLat": 51.410633, "fromLng": 19.685005, "fromStation": "Piotrk\u00f3w Trybunalski", "toStation": "\u0141\u00f3d\u017a Widzew"}, {"toLat": 51.966877, "numTrains": 8, "toLng": 20.150019, "fromLat": 51.410633, "fromLng": 19.685005, "fromStation": "Piotrk\u00f3w Trybunalski", "toStation": "Skierniewice"}, {"toLat": 52.221073, "numTrains": 2, "toLng": 20.964775, "fromLat": 51.410633, "fromLng": 19.685005, "fromStation": "Piotrk\u00f3w Trybunalski", "toStation": "Warszawa Zachodnia"}, {"toLat": 50.808563, "numTrains": 1, "toLng": 19.119875, "fromLat": 51.410633, "fromLng": 19.685005, "fromStation": "Piotrk\u00f3w Trybunalski", "toStation": "Cz\u0119stochowa"}, {"toLat": 50.257603, "numTrains": 31, "toLng": 19.017113, "fromLat": 49.8302, "fromLng": 19.045269, "fromStation": "Bielsko-Bia\u0142a G\u0142\u00f3wna", "toStation": "Katowice"}, {"toLat": 50.089138, "numTrains": 5, "toLng": 18.54729, "fromLat": 49.8302, "fromLng": 19.045269, "fromStation": "Bielsko-Bia\u0142a G\u0142\u00f3wna", "toStation": "Rybnik"}, {"toLat": 50.0349, "numTrains": 4, "toLng": 19.974903, "fromLat": 49.8302, "fromLng": 19.045269, "fromStation": "Bielsko-Bia\u0142a G\u0142\u00f3wna", "toStation": "Krak\u00f3w P\u0142asz\u00f3w"}, {"toLat": 54.096943, "numTrains": 11, "toLng": 18.789255, "fromLat": 53.977173, "fromLng": 18.525581, "fromStation": "Starogard Gda\u0144ski", "toStation": "Tczew"}, {"toLat": 53.68877, "numTrains": 11, "toLng": 17.577188, "fromLat": 53.977173, "fromLng": 18.525581, "fromStation": "Starogard Gda\u0144ski", "toStation": "Chojnice"}, {"toLat": 50.567997, "numTrains": 4, "toLng": 21.696062, "fromLat": 50.56975, "fromLng": 22.055437, "fromStation": "Stalowa Wola Centrum", "toStation": "Tarnobrzeg"}, {"toLat": 51.23151, "numTrains": 2, "toLng": 22.568634, "fromLat": 50.56975, "fromLng": 22.055437, "fromStation": "Stalowa Wola Centrum", "toStation": "Lublin"}, {"toLat": 50.042755, "numTrains": 1, "toLng": 22.00701, "fromLat": 50.56975, "fromLng": 22.055437, "fromStation": "Stalowa Wola Centrum", "toStation": "Rzesz\u00f3w G\u0142\u00f3wny"}, {"toLat": 50.713833, "numTrains": 1, "toLng": 23.239197, "fromLat": 50.56975, "fromLng": 22.055437, "fromStation": "Stalowa Wola Centrum", "toStation": "Zamo\u015b\u0107"}, {"toLat": 53.432888, "numTrains": 9, "toLng": 18.725243, "fromLat": 53.263382, "fromLng": 19.405993, "fromStation": "Brodnica", "toStation": "Grudzi\u0105dz"}, {"toLat": 50.662266, "numTrains": 9, "toLng": 17.926554, "fromLat": 50.477676, "fromLng": 17.341282, "fromStation": "Nysa", "toStation": "Opole G\u0142\u00f3wne"}, {"toLat": 50.34467, "numTrains": 5, "toLng": 18.20583, "fromLat": 50.477676, "fromLng": 17.341282, "fromStation": "Nysa", "toStation": "K\u0119dzierzyn-Ko\u017ale"}, {"toLat": 50.853302, "numTrains": 5, "toLng": 17.470636, "fromLat": 50.477676, "fromLng": 17.341282, "fromStation": "Nysa", "toStation": "Brzeg"}, {"toLat": 53.134483, "numTrains": 27, "toLng": 17.99023, "fromLat": 52.805573, "fromLng": 18.244347, "fromStation": "Inowroc\u0142aw", "toStation": "Bydgoszcz G\u0142\u00f3wna"}, {"toLat": 52.529934, "numTrains": 25, "toLng": 17.603413, "fromLat": 52.805573, "fromLng": 18.244347, "fromStation": "Inowroc\u0142aw", "toStation": "Gniezno"}, {"toLat": 53.000187, "numTrains": 13, "toLng": 18.614595, "fromLat": 52.805573, "fromLng": 18.244347, "fromStation": "Inowroc\u0142aw", "toStation": "Toru\u0144 G\u0142\u00f3wny"}, {"toLat": 51.660767, "numTrains": 2, "toLng": 19.325357, "fromLat": 52.805573, "fromLng": 18.244347, "fromStation": "Inowroc\u0142aw", "toStation": "Pabianice"}, {"toLat": 52.221073, "numTrains": 1, "toLng": 20.964775, "fromLat": 52.805573, "fromLng": 18.244347, "fromStation": "Inowroc\u0142aw", "toStation": "Warszawa Zachodnia"}, {"toLat": 51.757877, "numTrains": 1, "toLng": 19.429234, "fromLat": 52.805573, "fromLng": 18.244347, "fromStation": "Inowroc\u0142aw", "toStation": "\u0141\u00f3d\u017a Kaliska"}, {"toLat": 51.23151, "numTrains": 27, "toLng": 22.568634, "fromLat": 51.426483, "fromLng": 21.985073, "fromStation": "Pu\u0142awy Miasto", "toStation": "Lublin"}, {"toLat": 52.252309, "numTrains": 11, "toLng": 21.051095, "fromLat": 51.426483, "fromLng": 21.985073, "fromStation": "Pu\u0142awy Miasto", "toStation": "Warszawa Wschodnia"}, {"toLat": 51.391155, "numTrains": 5, "toLng": 21.155098, "fromLat": 51.426483, "fromLng": 21.985073, "fromStation": "Pu\u0142awy Miasto", "toStation": "Radom"}, {"toLat": 50.0349, "numTrains": 5, "toLng": 19.974903, "fromLat": 49.3008, "fromLng": 19.962564, "fromStation": "Zakopane", "toStation": "Krak\u00f3w P\u0142asz\u00f3w"}, {"toLat": 52.40214, "numTrains": 34, "toLng": 16.911764, "fromLat": 52.231155, "fromLng": 18.252472, "fromStation": "Konin", "toStation": "Pozna\u0144 G\u0142\u00f3wny"}, {"toLat": 52.221073, "numTrains": 10, "toLng": 20.964775, "fromLat": 52.231155, "fromLng": 18.252472, "fromStation": "Konin", "toStation": "Warszawa Zachodnia"}, {"toLat": 51.762783, "numTrains": 2, "toLng": 19.543156, "fromLat": 52.231155, "fromLng": 18.252472, "fromStation": "Konin", "toStation": "\u0141\u00f3d\u017a Widzew"}, {"toLat": 51.757877, "numTrains": 2, "toLng": 19.429234, "fromLat": 52.231155, "fromLng": 18.252472, "fromStation": "Konin", "toStation": "\u0141\u00f3d\u017a Kaliska"}, {"toLat": 51.966877, "numTrains": 1, "toLng": 20.150019, "fromLat": 52.231155, "fromLng": 18.252472, "fromStation": "Konin", "toStation": "Skierniewice"}, {"toLat": 53.417767, "numTrains": 49, "toLng": 14.548205, "fromLat": 53.339638, "fromLng": 15.031512, "fromStation": "Stargard", "toStation": "Szczecin G\u0142\u00f3wny"}, {"toLat": 52.40214, "numTrains": 25, "toLng": 16.911764, "fromLat": 53.339638, "fromLng": 15.031512, "fromStation": "Stargard", "toStation": "Pozna\u0144 G\u0142\u00f3wny"}, {"toLat": 54.19066, "numTrains": 11, "toLng": 16.169546, "fromLat": 53.339638, "fromLng": 15.031512, "fromStation": "Stargard", "toStation": "Koszalin"}, {"toLat": 53.143066, "numTrains": 5, "toLng": 16.743547, "fromLat": 53.339638, "fromLng": 15.031512, "fromStation": "Stargard", "toStation": "Pi\u0142a G\u0142\u00f3wna"}, {"toLat": 53.693615, "numTrains": 4, "toLng": 16.704725, "fromLat": 53.339638, "fromLng": 15.031512, "fromStation": "Stargard", "toStation": "Szczecinek"}, {"toLat": 53.417767, "numTrains": 13, "toLng": 14.548205, "fromLat": 53.904804, "fromLng": 14.266531, "fromStation": "\u015awinouj\u015bcie", "toStation": "Szczecin G\u0142\u00f3wny"}, {"toLat": 52.40214, "numTrains": 42, "toLng": 16.911764, "fromLat": 52.529934, "fromLng": 17.603413, "fromStation": "Gniezno", "toStation": "Pozna\u0144 G\u0142\u00f3wny"}, {"toLat": 52.805573, "numTrains": 26, "toLng": 18.244347, "fromLat": 52.529934, "fromLng": 17.603413, "fromStation": "Gniezno", "toStation": "Inowroc\u0142aw"}, {"toLat": 53.78566, "numTrains": 15, "toLng": 20.497377, "fromLat": 53.699924, "fromLng": 19.951206, "fromStation": "Ostr\u00f3da", "toStation": "Olsztyn G\u0142\u00f3wny"}, {"toLat": 53.582592, "numTrains": 15, "toLng": 19.573326, "fromLat": 53.699924, "fromLng": 19.951206, "fromStation": "Ostr\u00f3da", "toStation": "I\u0142awa G\u0142\u00f3wna"}, {"toLat": 53.000187, "numTrains": 25, "toLng": 18.614595, "fromLat": 52.652992, "fromLng": 19.058933, "fromStation": "W\u0142oc\u0142awek", "toStation": "Toru\u0144 G\u0142\u00f3wny"}, {"toLat": 52.221073, "numTrains": 11, "toLng": 20.964775, "fromLat": 52.652992, "fromLng": 19.058933, "fromStation": "W\u0142oc\u0142awek", "toStation": "Warszawa Zachodnia"}, {"toLat": 51.757877, "numTrains": 2, "toLng": 19.429234, "fromLat": 52.652992, "fromLng": 19.058933, "fromStation": "W\u0142oc\u0142awek", "toStation": "\u0141\u00f3d\u017a Kaliska"}, {"toLat": 51.762783, "numTrains": 1, "toLng": 19.543156, "fromLat": 52.652992, "fromLng": 19.058933, "fromStation": "W\u0142oc\u0142awek", "toStation": "\u0141\u00f3d\u017a Widzew"}, {"toLat": 52.40214, "numTrains": 5, "toLng": 16.911764, "fromLat": 52.245472, "fromLng": 15.5395975, "fromStation": "\u015awiebodzin", "toStation": "Pozna\u0144 G\u0142\u00f3wny"}, {"toLat": 50.278564, "numTrains": 67, "toLng": 19.12656, "fromLat": 50.257603, "fromLng": 19.017113, "fromStation": "Katowice", "toStation": "Sosnowiec G\u0142\u00f3wny"}, {"toLat": 50.3006, "numTrains": 52, "toLng": 18.676573, "fromLat": 50.257603, "fromLng": 19.017113, "fromStation": "Katowice", "toStation": "Gliwice"}, {"toLat": 49.8302, "numTrains": 31, "toLng": 19.045269, "fromLat": 50.257603, "fromLng": 19.017113, "fromStation": "Katowice", "toStation": "Bielsko-Bia\u0142a G\u0142\u00f3wna"}, {"toLat": 50.089138, "numTrains": 20, "toLng": 18.54729, "fromLat": 50.257603, "fromLng": 19.017113, "fromStation": "Katowice", "toStation": "Rybnik"}, {"toLat": 50.06564, "numTrains": 8, "toLng": 19.947206, "fromLat": 50.257603, "fromLng": 19.017113, "fromStation": "Katowice", "toStation": "Krak\u00f3w G\u0142\u00f3wny"}, {"toLat": 50.041313, "numTrains": 8, "toLng": 19.200066, "fromLat": 50.257603, "fromLng": 19.017113, "fromStation": "Katowice", "toStation": "O\u015bwi\u0119cim"}, {"toLat": 50.274162, "numTrains": 4, "toLng": 19.573984, "fromLat": 50.257603, "fromLng": 19.017113, "fromStation": "Katowice", "toStation": "Olkusz"}, {"toLat": 50.97135, "numTrains": 1, "toLng": 18.20077, "fromLat": 50.257603, "fromLng": 19.017113, "fromStation": "Katowice", "toStation": "Kluczbork"}, {"toLat": 54.096943, "numTrains": 38, "toLng": 18.789255, "fromLat": 54.035847, "fromLng": 19.042582, "fromStation": "Malbork", "toStation": "Tczew"}, {"toLat": 53.582592, "numTrains": 22, "toLng": 19.573326, "fromLat": 54.035847, "fromLng": 19.042582, "fromStation": "Malbork", "toStation": "I\u0142awa G\u0142\u00f3wna"}, {"toLat": 54.15112, "numTrains": 18, "toLng": 19.416449, "fromLat": 54.035847, "fromLng": 19.042582, "fromStation": "Malbork", "toStation": "Elbl\u0105g"}, {"toLat": 53.432888, "numTrains": 4, "toLng": 18.725243, "fromLat": 54.035847, "fromLng": 19.042582, "fromStation": "Malbork", "toStation": "Grudzi\u0105dz"}, {"toLat": 52.88382, "numTrains": 2, "toLng": 20.591518, "fromLat": 54.035847, "fromLng": 19.042582, "fromStation": "Malbork", "toStation": "Ciechan\u00f3w"}, {"toLat": 54.35538, "numTrains": 1, "toLng": 18.644575, "fromLat": 54.035847, "fromLng": 19.042582, "fromStation": "Malbork", "toStation": "Gda\u0144sk G\u0142\u00f3wny"}, {"toLat": 53.78566, "numTrains": 7, "toLng": 20.497377, "fromLat": 53.56039, "fromLng": 20.997768, "fromStation": "Szczytno", "toStation": "Olsztyn G\u0142\u00f3wny"}, {"toLat": 53.8248, "numTrains": 2, "toLng": 22.361605, "fromLat": 53.56039, "fromLng": 20.997768, "fromStation": "Szczytno", "toStation": "E\u0142k"}, {"toLat": 53.339638, "numTrains": 50, "toLng": 15.031512, "fromLat": 53.417767, "fromLng": 14.548205, "fromStation": "Szczecin G\u0142\u00f3wny", "toStation": "Stargard"}, {"toLat": 53.904804, "numTrains": 12, "toLng": 14.266531, "fromLat": 53.417767, "fromLng": 14.548205, "fromStation": "Szczecin G\u0142\u00f3wny", "toStation": "\u015awinouj\u015bcie"}, {"toLat": 52.591488, "numTrains": 9, "toLng": 14.646972, "fromLat": 53.417767, "fromLng": 14.548205, "fromStation": "Szczecin G\u0142\u00f3wny", "toStation": "Kostrzyn"}, {"toLat": 54.181984, "numTrains": 6, "toLng": 15.569869, "fromLat": 53.417767, "fromLng": 14.548205, "fromStation": "Szczecin G\u0142\u00f3wny", "toStation": "Ko\u0142obrzeg"}, {"toLat": 52.221073, "numTrains": 20, "toLng": 20.964775, "fromLat": 51.391155, "fromLng": 21.155098, "fromStation": "Radom", "toStation": "Warszawa Zachodnia"}, {"toLat": 51.11615, "numTrains": 20, "toLng": 20.881208, "fromLat": 51.391155, "fromLng": 21.155098, "fromStation": "Radom", "toStation": "Skar\u017cysko-Kamienna"}, {"toLat": 51.426483, "numTrains": 5, "toLng": 21.985073, "fromLat": 51.391155, "fromLng": 21.155098, "fromStation": "Radom", "toStation": "Pu\u0142awy Miasto"}, {"toLat": 51.074738, "numTrains": 10, "toLng": 17.716604, "fromLat": 50.97135, "fromLng": 18.20077, "fromStation": "Kluczbork", "toStation": "Namys\u0142\u00f3w"}, {"toLat": 50.662266, "numTrains": 6, "toLng": 17.926554, "fromLat": 50.97135, "fromLng": 18.20077, "fromStation": "Kluczbork", "toStation": "Opole G\u0142\u00f3wne"}, {"toLat": 52.40214, "numTrains": 5, "toLng": 16.911764, "fromLat": 50.97135, "fromLng": 18.20077, "fromStation": "Kluczbork", "toStation": "Pozna\u0144 G\u0142\u00f3wny"}, {"toLat": 50.06564, "numTrains": 2, "toLng": 19.947206, "fromLat": 50.97135, "fromLng": 18.20077, "fromStation": "Kluczbork", "toStation": "Krak\u00f3w G\u0142\u00f3wny"}, {"toLat": 50.3006, "numTrains": 1, "toLng": 18.676573, "fromLat": 50.97135, "fromLng": 18.20077, "fromStation": "Kluczbork", "toStation": "Gliwice"}, {"toLat": 52.221073, "numTrains": 264, "toLng": 20.964775, "fromLat": 52.252309, "fromLng": 21.051095, "fromStation": "Warszawa Wschodnia", "toStation": "Warszawa Zachodnia"}, {"toLat": 52.22884, "numTrains": 173, "toLng": 21.003275, "fromLat": 52.252309, "fromLng": 21.051095, "fromStation": "Warszawa Wschodnia", "toStation": "Warszawa Centralna"}, {"toLat": 52.40092, "numTrains": 51, "toLng": 20.941647, "fromLat": 52.252309, "fromLng": 21.051095, "fromStation": "Warszawa Wschodnia", "toStation": "Legionowo"}, {"toLat": 52.162235, "numTrains": 34, "toLng": 22.27191, "fromLat": 52.252309, "fromLng": 21.051095, "fromStation": "Warszawa Wschodnia", "toStation": "Siedlce"}, {"toLat": 51.426483, "numTrains": 12, "toLng": 21.985073, "fromLat": 52.252309, "fromLng": 21.051095, "fromStation": "Warszawa Wschodnia", "toStation": "Pu\u0142awy Miasto"}, {"toLat": 53.134144, "numTrains": 12, "toLng": 23.135603, "fromLat": 52.252309, "fromLng": 21.051095, "fromStation": "Warszawa Wschodnia", "toStation": "Bia\u0142ystok"}, {"toLat": 53.582592, "numTrains": 9, "toLng": 19.573326, "fromLat": 52.252309, "fromLng": 21.051095, "fromStation": "Warszawa Wschodnia", "toStation": "I\u0142awa G\u0142\u00f3wna"}, {"toLat": 52.88382, "numTrains": 3, "toLng": 20.591518, "fromLat": 52.252309, "fromLng": 21.051095, "fromStation": "Warszawa Wschodnia", "toStation": "Ciechan\u00f3w"}, {"toLat": 53.056355, "numTrains": 1, "toLng": 21.617067, "fromLat": 52.252309, "fromLng": 21.051095, "fromStation": "Warszawa Wschodnia", "toStation": "Ostro\u0142\u0119ka"}, {"toLat": 54.35538, "numTrains": 1, "toLng": 18.644575, "fromLat": 52.252309, "fromLng": 21.051095, "fromStation": "Warszawa Wschodnia", "toStation": "Gda\u0144sk G\u0142\u00f3wny"}, {"toLat": 54.096943, "numTrains": 1, "toLng": 18.789255, "fromLat": 52.252309, "fromLng": 21.051095, "fromStation": "Warszawa Wschodnia", "toStation": "Tczew"}, {"toLat": 52.252309, "numTrains": 254, "toLng": 21.051095, "fromLat": 52.221073, "fromLng": 20.964775, "fromStation": "Warszawa Zachodnia", "toStation": "Warszawa Wschodnia"}, {"toLat": 52.22884, "numTrains": 160, "toLng": 21.003275, "fromLat": 52.221073, "fromLng": 20.964775, "fromStation": "Warszawa Zachodnia", "toStation": "Warszawa Centralna"}, {"toLat": 52.16791, "numTrains": 94, "toLng": 20.798557, "fromLat": 52.221073, "fromLng": 20.964775, "fromStation": "Warszawa Zachodnia", "toStation": "Pruszk\u00f3w"}, {"toLat": 51.966877, "numTrains": 40, "toLng": 20.150019, "fromLat": 52.221073, "fromLng": 20.964775, "fromStation": "Warszawa Zachodnia", "toStation": "Skierniewice"}, {"toLat": 51.391155, "numTrains": 20, "toLng": 21.155098, "fromLat": 52.221073, "fromLng": 20.964775, "fromStation": "Warszawa Zachodnia", "toStation": "Radom"}, {"toLat": 50.06564, "numTrains": 15, "toLng": 19.947206, "fromLat": 52.221073, "fromLng": 20.964775, "fromStation": "Warszawa Zachodnia", "toStation": "Krak\u00f3w G\u0142\u00f3wny"}, {"toLat": 52.231155, "numTrains": 12, "toLng": 18.252472, "fromLat": 52.221073, "fromLng": 20.964775, "fromStation": "Warszawa Zachodnia", "toStation": "Konin"}, {"toLat": 50.278564, "numTrains": 11, "toLng": 19.12656, "fromLat": 52.221073, "fromLng": 20.964775, "fromStation": "Warszawa Zachodnia", "toStation": "Sosnowiec G\u0142\u00f3wny"}, {"toLat": 50.856766, "numTrains": 9, "toLng": 19.946445, "fromLat": 52.221073, "fromLng": 20.964775, "fromStation": "Warszawa Zachodnia", "toStation": "W\u0142oszczowa P\u00f3\u0142noc"}, {"toLat": 52.652992, "numTrains": 9, "toLng": 19.058933, "fromLat": 52.221073, "fromLng": 20.964775, "fromStation": "Warszawa Zachodnia", "toStation": "W\u0142oc\u0142awek"}, {"toLat": 50.662266, "numTrains": 5, "toLng": 17.926554, "fromLat": 52.221073, "fromLng": 20.964775, "fromStation": "Warszawa Zachodnia", "toStation": "Opole G\u0142\u00f3wne"}, {"toLat": 52.40214, "numTrains": 5, "toLng": 16.911764, "fromLat": 52.221073, "fromLng": 20.964775, "fromStation": "Warszawa Zachodnia", "toStation": "Pozna\u0144 G\u0142\u00f3wny"}, {"toLat": 52.805573, "numTrains": 2, "toLng": 18.244347, "fromLat": 52.221073, "fromLng": 20.964775, "fromStation": "Warszawa Zachodnia", "toStation": "Inowroc\u0142aw"}, {"toLat": 51.762783, "numTrains": 2, "toLng": 19.543156, "fromLat": 52.221073, "fromLng": 20.964775, "fromStation": "Warszawa Zachodnia", "toStation": "\u0141\u00f3d\u017a Widzew"}, {"toLat": 51.410633, "numTrains": 1, "toLng": 19.685005, "fromLat": 52.221073, "fromLng": 20.964775, "fromStation": "Warszawa Zachodnia", "toStation": "Piotrk\u00f3w Trybunalski"}, {"toLat": 52.221073, "numTrains": 173, "toLng": 20.964775, "fromLat": 52.22884, "fromLng": 21.003275, "fromStation": "Warszawa Centralna", "toStation": "Warszawa Zachodnia"}, {"toLat": 52.252309, "numTrains": 160, "toLng": 21.051095, "fromLat": 52.22884, "fromLng": 21.003275, "fromStation": "Warszawa Centralna", "toStation": "Warszawa Wschodnia"}, {"toLat": 51.59738, "numTrains": 29, "toLng": 18.714455, "fromLat": 51.660767, "fromLng": 19.325357, "fromStation": "Pabianice", "toStation": "Sieradz"}, {"toLat": 51.757877, "numTrains": 23, "toLng": 19.429234, "fromLat": 51.660767, "fromLng": 19.325357, "fromStation": "Pabianice", "toStation": "\u0141\u00f3d\u017a Kaliska"}, {"toLat": 51.762783, "numTrains": 7, "toLng": 19.543156, "fromLat": 51.660767, "fromLng": 19.325357, "fromStation": "Pabianice", "toStation": "\u0141\u00f3d\u017a Widzew"}, {"toLat": 52.805573, "numTrains": 1, "toLng": 18.244347, "fromLat": 51.660767, "fromLng": 19.325357, "fromStation": "Pabianice", "toStation": "Inowroc\u0142aw"}, {"toLat": 50.874294, "numTrains": 15, "toLng": 20.618546, "fromLat": 50.837806, "fromLng": 20.014366, "fromStation": "W\u0142oszczowa", "toStation": "Kielce"}, {"toLat": 50.808563, "numTrains": 7, "toLng": 19.119875, "fromLat": 50.837806, "fromLng": 20.014366, "fromStation": "W\u0142oszczowa", "toStation": "Cz\u0119stochowa"}, {"toLat": 50.278564, "numTrains": 5, "toLng": 19.12656, "fromLat": 50.837806, "fromLng": 20.014366, "fromStation": "W\u0142oszczowa", "toStation": "Sosnowiec G\u0142\u00f3wny"}, {"toLat": 50.856766, "numTrains": 3, "toLng": 19.946445, "fromLat": 50.837806, "fromLng": 20.014366, "fromStation": "W\u0142oszczowa", "toStation": "W\u0142oszczowa P\u00f3\u0142noc"}, {"toLat": 52.221073, "numTrains": 11, "toLng": 20.964775, "fromLat": 50.856766, "fromLng": 19.946445, "fromStation": "W\u0142oszczowa P\u00f3\u0142noc", "toStation": "Warszawa Zachodnia"}, {"toLat": 50.06564, "numTrains": 5, "toLng": 19.947206, "fromLat": 50.856766, "fromLng": 19.946445, "fromStation": "W\u0142oszczowa P\u00f3\u0142noc", "toStation": "Krak\u00f3w G\u0142\u00f3wny"}, {"toLat": 50.278564, "numTrains": 4, "toLng": 19.12656, "fromLat": 50.856766, "fromLng": 19.946445, "fromStation": "W\u0142oszczowa P\u00f3\u0142noc", "toStation": "Sosnowiec G\u0142\u00f3wny"}, {"toLat": 51.762783, "numTrains": 3, "toLng": 19.543156, "fromLat": 50.856766, "fromLng": 19.946445, "fromStation": "W\u0142oszczowa P\u00f3\u0142noc", "toStation": "\u0141\u00f3d\u017a Widzew"}, {"toLat": 52.40214, "numTrains": 13, "toLng": 16.911764, "fromLat": 53.143066, "fromLng": 16.743547, "fromStation": "Pi\u0142a G\u0142\u00f3wna", "toStation": "Pozna\u0144 G\u0142\u00f3wny"}, {"toLat": 53.134483, "numTrains": 10, "toLng": 17.99023, "fromLat": 53.143066, "fromLng": 16.743547, "fromStation": "Pi\u0142a G\u0142\u00f3wna", "toStation": "Bydgoszcz G\u0142\u00f3wna"}, {"toLat": 53.693615, "numTrains": 10, "toLng": 16.704725, "fromLat": 53.143066, "fromLng": 16.743547, "fromStation": "Pi\u0142a G\u0142\u00f3wna", "toStation": "Szczecinek"}, {"toLat": 53.68877, "numTrains": 6, "toLng": 17.577188, "fromLat": 53.143066, "fromLng": 16.743547, "fromStation": "Pi\u0142a G\u0142\u00f3wna", "toStation": "Chojnice"}, {"toLat": 53.339638, "numTrains": 5, "toLng": 15.031512, "fromLat": 53.143066, "fromLng": 16.743547, "fromStation": "Pi\u0142a G\u0142\u00f3wna", "toStation": "Stargard"}, {"toLat": 52.252309, "numTrains": 33, "toLng": 21.051095, "fromLat": 52.162235, "fromLng": 22.27191, "fromStation": "Siedlce", "toStation": "Warszawa Wschodnia"}, {"toLat": 51.94164, "numTrains": 23, "toLng": 22.389149, "fromLat": 52.162235, "fromLng": 22.27191, "fromStation": "Siedlce", "toStation": "\u0141uk\u00f3w"}, {"toLat": 50.06564, "numTrains": 16, "toLng": 19.947206, "fromLat": 50.041313, "fromLng": 19.200066, "fromStation": "O\u015bwi\u0119cim", "toStation": "Krak\u00f3w G\u0142\u00f3wny"}, {"toLat": 50.257603, "numTrains": 7, "toLng": 19.017113, "fromLat": 50.041313, "fromLng": 19.200066, "fromStation": "O\u015bwi\u0119cim", "toStation": "Katowice"}, {"toLat": 49.977142, "numTrains": 38, "toLng": 20.431145, "fromLat": 50.00571, "fromLng": 20.974579, "fromStation": "Tarn\u00f3w", "toStation": "Bochnia"}, {"toLat": 50.054314, "numTrains": 25, "toLng": 21.405443, "fromLat": 50.00571, "fromLng": 20.974579, "fromStation": "Tarn\u00f3w", "toStation": "D\u0119bica"}, {"toLat": 49.606728, "numTrains": 10, "toLng": 20.702574, "fromLat": 50.00571, "fromLng": 20.974579, "fromStation": "Tarn\u00f3w", "toStation": "Nowy S\u0105cz"}, {"toLat": 50.0349, "numTrains": 6, "toLng": 19.974903, "fromLat": 50.00571, "fromLng": 20.974579, "fromStation": "Tarn\u00f3w", "toStation": "Krak\u00f3w P\u0142asz\u00f3w"}, {"toLat": 50.00571, "numTrains": 10, "toLng": 20.974579, "fromLat": 49.606728, "fromLng": 20.702574, "fromStation": "Nowy S\u0105cz", "toStation": "Tarn\u00f3w"}, {"toLat": 53.852406, "numTrains": 6, "toLng": 23.026161, "fromLat": 54.106018, "fromLng": 22.94553, "fromStation": "Suwa\u0142ki", "toStation": "August\u00f3w"}, {"toLat": 54.181984, "numTrains": 8, "toLng": 15.569869, "fromLat": 53.693615, "fromLng": 16.704725, "fromStation": "Szczecinek", "toStation": "Ko\u0142obrzeg"}, {"toLat": 53.143066, "numTrains": 8, "toLng": 16.743547, "fromLat": 53.693615, "fromLng": 16.704725, "fromStation": "Szczecinek", "toStation": "Pi\u0142a G\u0142\u00f3wna"}, {"toLat": 53.339638, "numTrains": 4, "toLng": 15.031512, "fromLat": 53.693615, "fromLng": 16.704725, "fromStation": "Szczecinek", "toStation": "Stargard"}, {"toLat": 54.467327, "numTrains": 4, "toLng": 17.016342, "fromLat": 53.693615, "fromLng": 16.704725, "fromStation": "Szczecinek", "toStation": "S\u0142upsk"}, {"toLat": 54.19066, "numTrains": 4, "toLng": 16.169546, "fromLat": 53.693615, "fromLng": 16.704725, "fromStation": "Szczecinek", "toStation": "Koszalin"}, {"toLat": 53.68877, "numTrains": 3, "toLng": 17.577188, "fromLat": 53.693615, "fromLng": 16.704725, "fromStation": "Szczecinek", "toStation": "Chojnice"}, {"toLat": 51.94164, "numTrains": 15, "toLng": 22.389149, "fromLat": 52.02046, "fromLng": 23.130547, "fromStation": "Bia\u0142a Podlaska", "toStation": "\u0141uk\u00f3w"}, {"toLat": 51.098766, "numTrains": 14, "toLng": 17.036518, "fromLat": 51.668606, "fromLng": 16.079096, "fromStation": "G\u0142og\u00f3w", "toStation": "Wroc\u0142aw G\u0142\u00f3wny"}, {"toLat": 51.947227, "numTrains": 11, "toLng": 15.514157, "fromLat": 51.668606, "fromLng": 16.079096, "fromStation": "G\u0142og\u00f3w", "toStation": "Zielona G\u00f3ra"}, {"toLat": 50.933613, "numTrains": 15, "toLng": 21.37664, "fromLat": 51.05135, "fromLng": 21.058802, "fromStation": "Starachowice", "toStation": "Ostrowiec \u015awi\u0119tokrzyski"}, {"toLat": 51.11615, "numTrains": 15, "toLng": 20.881208, "fromLat": 51.05135, "fromLng": 21.058802, "fromStation": "Starachowice", "toStation": "Skar\u017cysko-Kamienna"}, {"toLat": 50.042755, "numTrains": 10, "toLng": 22.00701, "fromLat": 50.567997, "fromLng": 21.696062, "fromStation": "Tarnobrzeg", "toStation": "Rzesz\u00f3w G\u0142\u00f3wny"}, {"toLat": 51.23151, "numTrains": 7, "toLng": 22.568634, "fromLat": 50.567997, "fromLng": 21.696062, "fromStation": "Tarnobrzeg", "toStation": "Lublin"}, {"toLat": 50.56975, "numTrains": 3, "toLng": 22.055437, "fromLat": 50.567997, "fromLng": 21.696062, "fromStation": "Tarnobrzeg", "toStation": "Stalowa Wola Centrum"}, {"toLat": 53.000187, "numTrains": 12, "toLng": 18.614595, "fromLat": 53.432888, "fromLng": 18.725243, "fromStation": "Grudzi\u0105dz", "toStation": "Toru\u0144 G\u0142\u00f3wny"}, {"toLat": 53.263382, "numTrains": 9, "toLng": 19.405993, "fromLat": 53.432888, "fromLng": 18.725243, "fromStation": "Grudzi\u0105dz", "toStation": "Brodnica"}, {"toLat": 54.035847, "numTrains": 4, "toLng": 19.042582, "fromLat": 53.432888, "fromLng": 18.725243, "fromStation": "Grudzi\u0105dz", "toStation": "Malbork"}, {"toLat": 53.134483, "numTrains": 1, "toLng": 17.99023, "fromLat": 53.432888, "fromLng": 18.725243, "fromStation": "Grudzi\u0105dz", "toStation": "Bydgoszcz G\u0142\u00f3wna"}, {"toLat": 54.35538, "numTrains": 173, "toLng": 18.644575, "fromLat": 54.521404, "fromLng": 18.529818, "fromStation": "Gdynia G\u0142\u00f3wna", "toStation": "Gda\u0144sk G\u0142\u00f3wny"}, {"toLat": 54.467327, "numTrains": 16, "toLng": 17.016342, "fromLat": 54.521404, "fromLng": 18.529818, "fromStation": "Gdynia G\u0142\u00f3wna", "toStation": "S\u0142upsk"}, {"toLat": 50.010983, "numTrains": 30, "toLng": 22.677452, "fromLat": 50.042755, "fromLng": 22.00701, "fromStation": "Rzesz\u00f3w G\u0142\u00f3wny", "toStation": "Jaros\u0142aw"}, {"toLat": 50.054314, "numTrains": 27, "toLng": 21.405443, "fromLat": 50.042755, "fromLng": 22.00701, "fromStation": "Rzesz\u00f3w G\u0142\u00f3wny", "toStation": "D\u0119bica"}, {"toLat": 50.567997, "numTrains": 10, "toLng": 21.696062, "fromLat": 50.042755, "fromLng": 22.00701, "fromStation": "Rzesz\u00f3w G\u0142\u00f3wny", "toStation": "Tarnobrzeg"}, {"toLat": 50.56975, "numTrains": 1, "toLng": 22.055437, "fromLat": 50.042755, "fromLng": 22.00701, "fromStation": "Rzesz\u00f3w G\u0142\u00f3wny", "toStation": "Stalowa Wola Centrum"}, {"toLat": 50.278564, "numTrains": 33, "toLng": 19.12656, "fromLat": 50.808563, "fromLng": 19.119875, "fromStation": "Cz\u0119stochowa", "toStation": "Sosnowiec G\u0142\u00f3wny"}, {"toLat": 51.07453, "numTrains": 27, "toLng": 19.437832, "fromLat": 50.808563, "fromLng": 19.119875, "fromStation": "Cz\u0119stochowa", "toStation": "Radomsko"}, {"toLat": 50.837806, "numTrains": 7, "toLng": 20.014366, "fromLat": 50.808563, "fromLng": 19.119875, "fromStation": "Cz\u0119stochowa", "toStation": "W\u0142oszczowa"}, {"toLat": 50.06564, "numTrains": 5, "toLng": 19.947206, "fromLat": 50.808563, "fromLng": 19.119875, "fromStation": "Cz\u0119stochowa", "toStation": "Krak\u00f3w G\u0142\u00f3wny"}, {"toLat": 50.662266, "numTrains": 3, "toLng": 17.926554, "fromLat": 50.808563, "fromLng": 19.119875, "fromStation": "Cz\u0119stochowa", "toStation": "Opole G\u0142\u00f3wne"}, {"toLat": 52.221073, "numTrains": 1, "toLng": 20.964775, "fromLat": 50.808563, "fromLng": 19.119875, "fromStation": "Cz\u0119stochowa", "toStation": "Warszawa Zachodnia"}, {"toLat": 51.410633, "numTrains": 1, "toLng": 19.685005, "fromLat": 50.808563, "fromLng": 19.119875, "fromStation": "Cz\u0119stochowa", "toStation": "Piotrk\u00f3w Trybunalski"}, {"toLat": 50.257603, "numTrains": 70, "toLng": 19.017113, "fromLat": 50.278564, "fromLng": 19.12656, "fromStation": "Sosnowiec G\u0142\u00f3wny", "toStation": "Katowice"}, {"toLat": 50.808563, "numTrains": 33, "toLng": 19.119875, "fromLat": 50.278564, "fromLng": 19.12656, "fromStation": "Sosnowiec G\u0142\u00f3wny", "toStation": "Cz\u0119stochowa"}, {"toLat": 52.221073, "numTrains": 8, "toLng": 20.964775, "fromLat": 50.278564, "fromLng": 19.12656, "fromStation": "Sosnowiec G\u0142\u00f3wny", "toStation": "Warszawa Zachodnia"}, {"toLat": 50.837806, "numTrains": 5, "toLng": 20.014366, "fromLat": 50.278564, "fromLng": 19.12656, "fromStation": "Sosnowiec G\u0142\u00f3wny", "toStation": "W\u0142oszczowa"}, {"toLat": 50.856766, "numTrains": 4, "toLng": 19.946445, "fromLat": 50.278564, "fromLng": 19.12656, "fromStation": "Sosnowiec G\u0142\u00f3wny", "toStation": "W\u0142oszczowa P\u00f3\u0142noc"}, {"toLat": 53.977173, "numTrains": 11, "toLng": 18.525581, "fromLat": 53.68877, "fromLng": 17.577188, "fromStation": "Chojnice", "toStation": "Starogard Gda\u0144ski"}, {"toLat": 53.143066, "numTrains": 6, "toLng": 16.743547, "fromLat": 53.68877, "fromLng": 17.577188, "fromStation": "Chojnice", "toStation": "Pi\u0142a G\u0142\u00f3wna"}, {"toLat": 53.134483, "numTrains": 5, "toLng": 17.99023, "fromLat": 53.68877, "fromLng": 17.577188, "fromStation": "Chojnice", "toStation": "Bydgoszcz G\u0142\u00f3wna"}, {"toLat": 53.693615, "numTrains": 3, "toLng": 16.704725, "fromLat": 53.68877, "fromLng": 17.577188, "fromStation": "Chojnice", "toStation": "Szczecinek"}, {"toLat": 52.221073, "numTrains": 94, "toLng": 20.964775, "fromLat": 52.16791, "fromLng": 20.798557, "fromStation": "Pruszk\u00f3w", "toStation": "Warszawa Zachodnia"}, {"toLat": 51.966877, "numTrains": 24, "toLng": 20.150019, "fromLat": 52.16791, "fromLng": 20.798557, "fromStation": "Pruszk\u00f3w", "toStation": "Skierniewice"}, {"toLat": 50.06564, "numTrains": 77, "toLng": 19.947206, "fromLat": 50.0349, "fromLng": 19.974903, "fromStation": "Krak\u00f3w P\u0142asz\u00f3w", "toStation": "Krak\u00f3w G\u0142\u00f3wny"}, {"toLat": 49.977142, "numTrains": 36, "toLng": 20.431145, "fromLat": 50.0349, "fromLng": 19.974903, "fromStation": "Krak\u00f3w P\u0142asz\u00f3w", "toStation": "Bochnia"}, {"toLat": 49.3008, "numTrains": 4, "toLng": 19.962564, "fromLat": 50.0349, "fromLng": 19.974903, "fromStation": "Krak\u00f3w P\u0142asz\u00f3w", "toStation": "Zakopane"}, {"toLat": 49.8302, "numTrains": 4, "toLng": 19.045269, "fromLat": 50.0349, "fromLng": 19.974903, "fromStation": "Krak\u00f3w P\u0142asz\u00f3w", "toStation": "Bielsko-Bia\u0142a G\u0142\u00f3wna"}, {"toLat": 50.257603, "numTrains": 2, "toLng": 19.017113, "fromLat": 50.0349, "fromLng": 19.974903, "fromStation": "Krak\u00f3w P\u0142asz\u00f3w", "toStation": "Katowice"}, {"toLat": 50.00571, "numTrains": 1, "toLng": 20.974579, "fromLat": 50.0349, "fromLng": 19.974903, "fromStation": "Krak\u00f3w P\u0142asz\u00f3w", "toStation": "Tarn\u00f3w"}, {"toLat": 50.0349, "numTrains": 74, "toLng": 19.974903, "fromLat": 50.06564, "fromLng": 19.947206, "fromStation": "Krak\u00f3w G\u0142\u00f3wny", "toStation": "Krak\u00f3w P\u0142asz\u00f3w"}, {"toLat": 50.041313, "numTrains": 19, "toLng": 19.200066, "fromLat": 50.06564, "fromLng": 19.947206, "fromStation": "Krak\u00f3w G\u0142\u00f3wny", "toStation": "O\u015bwi\u0119cim"}, {"toLat": 52.221073, "numTrains": 13, "toLng": 20.964775, "fromLat": 50.06564, "fromLng": 19.947206, "fromStation": "Krak\u00f3w G\u0142\u00f3wny", "toStation": "Warszawa Zachodnia"}, {"toLat": 50.644924, "numTrains": 12, "toLng": 20.276203, "fromLat": 50.06564, "fromLng": 19.947206, "fromStation": "Krak\u00f3w G\u0142\u00f3wny", "toStation": "J\u0119drzej\u00f3w"}, {"toLat": 50.662266, "numTrains": 11, "toLng": 17.926554, "fromLat": 50.06564, "fromLng": 19.947206, "fromStation": "Krak\u00f3w G\u0142\u00f3wny", "toStation": "Opole G\u0142\u00f3wne"}, {"toLat": 50.257603, "numTrains": 8, "toLng": 19.017113, "fromLat": 50.06564, "fromLng": 19.947206, "fromStation": "Krak\u00f3w G\u0142\u00f3wny", "toStation": "Katowice"}, {"toLat": 50.856766, "numTrains": 7, "toLng": 19.946445, "fromLat": 50.06564, "fromLng": 19.947206, "fromStation": "Krak\u00f3w G\u0142\u00f3wny", "toStation": "W\u0142oszczowa P\u00f3\u0142noc"}, {"toLat": 50.808563, "numTrains": 5, "toLng": 19.119875, "fromLat": 50.06564, "fromLng": 19.947206, "fromStation": "Krak\u00f3w G\u0142\u00f3wny", "toStation": "Cz\u0119stochowa"}, {"toLat": 50.97135, "numTrains": 2, "toLng": 18.20077, "fromLat": 50.06564, "fromLng": 19.947206, "fromStation": "Krak\u00f3w G\u0142\u00f3wny", "toStation": "Kluczbork"}, {"toLat": 51.966877, "numTrains": 2, "toLng": 20.150019, "fromLat": 50.06564, "fromLng": 19.947206, "fromStation": "Krak\u00f3w G\u0142\u00f3wny", "toStation": "Skierniewice"}, {"toLat": 52.252309, "numTrains": 1, "toLng": 21.051095, "fromLat": 53.056355, "fromLng": 21.617067, "fromStation": "Ostro\u0142\u0119ka", "toStation": "Warszawa Wschodnia"}, {"toLat": 50.042755, "numTrains": 32, "toLng": 22.00701, "fromLat": 50.010983, "fromLng": 22.677452, "fromStation": "Jaros\u0142aw", "toStation": "Rzesz\u00f3w G\u0142\u00f3wny"}, {"toLat": 49.783417, "numTrains": 29, "toLng": 22.776426, "fromLat": 50.010983, "fromLng": 22.677452, "fromStation": "Jaros\u0142aw", "toStation": "Przemy\u015bl G\u0142\u00f3wny"}, {"toLat": 50.0349, "numTrains": 38, "toLng": 19.974903, "fromLat": 49.977142, "fromLng": 20.431145, "fromStation": "Bochnia", "toStation": "Krak\u00f3w P\u0142asz\u00f3w"}, {"toLat": 50.00571, "numTrains": 36, "toLng": 20.974579, "fromLat": 49.977142, "fromLng": 20.431145, "fromStation": "Bochnia", "toStation": "Tarn\u00f3w"}, {"toLat": 52.591488, "numTrains": 11, "toLng": 14.646972, "fromLat": 52.727882, "fromLng": 15.229074, "fromStation": "Gorz\u00f3w Wielkopolski", "toStation": "Kostrzyn"}, {"toLat": 51.947227, "numTrains": 4, "toLng": 15.514157, "fromLat": 52.727882, "fromLng": 15.229074, "fromStation": "Gorz\u00f3w Wielkopolski", "toStation": "Zielona G\u00f3ra"}, {"toLat": 52.40214, "numTrains": 3, "toLng": 16.911764, "fromLat": 52.727882, "fromLng": 15.229074, "fromStation": "Gorz\u00f3w Wielkopolski", "toStation": "Pozna\u0144 G\u0142\u00f3wny"}, {"toLat": 53.134144, "numTrains": 11, "toLng": 23.135603, "fromLat": 53.403656, "fromLng": 23.508131, "fromStation": "Sok\u00f3\u0142ka", "toStation": "Bia\u0142ystok"}, {"toLat": 53.852406, "numTrains": 6, "toLng": 23.026161, "fromLat": 53.403656, "fromLng": 23.508131, "fromStation": "Sok\u00f3\u0142ka", "toStation": "August\u00f3w"}, {"toLat": 50.853302, "numTrains": 47, "toLng": 17.470636, "fromLat": 50.662266, "fromLng": 17.926554, "fromStation": "Opole G\u0142\u00f3wne", "toStation": "Brzeg"}, {"toLat": 50.34467, "numTrains": 22, "toLng": 18.20583, "fromLat": 50.662266, "fromLng": 17.926554, "fromStation": "Opole G\u0142\u00f3wne", "toStation": "K\u0119dzierzyn-Ko\u017ale"}, {"toLat": 50.3006, "numTrains": 18, "toLng": 18.676573, "fromLat": 50.662266, "fromLng": 17.926554, "fromStation": "Opole G\u0142\u00f3wne", "toStation": "Gliwice"}, {"toLat": 50.477676, "numTrains": 9, "toLng": 17.341282, "fromLat": 50.662266, "fromLng": 17.926554, "fromStation": "Opole G\u0142\u00f3wne", "toStation": "Nysa"}, {"toLat": 50.06564, "numTrains": 9, "toLng": 19.947206, "fromLat": 50.662266, "fromLng": 17.926554, "fromStation": "Opole G\u0142\u00f3wne", "toStation": "Krak\u00f3w G\u0142\u00f3wny"}, {"toLat": 50.97135, "numTrains": 6, "toLng": 18.20077, "fromLat": 50.662266, "fromLng": 17.926554, "fromStation": "Opole G\u0142\u00f3wne", "toStation": "Kluczbork"}, {"toLat": 51.098766, "numTrains": 6, "toLng": 17.036518, "fromLat": 50.662266, "fromLng": 17.926554, "fromStation": "Opole G\u0142\u00f3wne", "toStation": "Wroc\u0142aw G\u0142\u00f3wny"}, {"toLat": 52.221073, "numTrains": 5, "toLng": 20.964775, "fromLat": 50.662266, "fromLng": 17.926554, "fromStation": "Opole G\u0142\u00f3wne", "toStation": "Warszawa Zachodnia"}, {"toLat": 50.808563, "numTrains": 3, "toLng": 19.119875, "fromLat": 50.662266, "fromLng": 17.926554, "fromStation": "Opole G\u0142\u00f3wne", "toStation": "Cz\u0119stochowa"}, {"toLat": 50.0349, "numTrains": 1, "toLng": 19.974903, "fromLat": 50.662266, "fromLng": 17.926554, "fromStation": "Opole G\u0142\u00f3wne", "toStation": "Krak\u00f3w P\u0142asz\u00f3w"}, {"toLat": 51.098766, "numTrains": 48, "toLng": 17.036518, "fromLat": 50.853302, "fromLng": 17.470636, "fromStation": "Brzeg", "toStation": "Wroc\u0142aw G\u0142\u00f3wny"}, {"toLat": 50.662266, "numTrains": 42, "toLng": 17.926554, "fromLat": 50.853302, "fromLng": 17.470636, "fromStation": "Brzeg", "toStation": "Opole G\u0142\u00f3wne"}, {"toLat": 50.477676, "numTrains": 5, "toLng": 17.341282, "fromLat": 50.853302, "fromLng": 17.470636, "fromStation": "Brzeg", "toStation": "Nysa"}, {"toLat": 54.19066, "numTrains": 17, "toLng": 16.169546, "fromLat": 54.467327, "fromLng": 17.016342, "fromStation": "S\u0142upsk", "toStation": "Koszalin"}, {"toLat": 54.521404, "numTrains": 16, "toLng": 18.529818, "fromLat": 54.467327, "fromLng": 17.016342, "fromStation": "S\u0142upsk", "toStation": "Gdynia G\u0142\u00f3wna"}, {"toLat": 53.693615, "numTrains": 4, "toLng": 16.704725, "fromLat": 54.467327, "fromLng": 17.016342, "fromStation": "S\u0142upsk", "toStation": "Szczecinek"}, {"toLat": 54.35538, "numTrains": 67, "toLng": 18.644575, "fromLat": 54.096943, "fromLng": 18.789255, "fromStation": "Tczew", "toStation": "Gda\u0144sk G\u0142\u00f3wny"}, {"toLat": 54.035847, "numTrains": 39, "toLng": 19.042582, "fromLat": 54.096943, "fromLng": 18.789255, "fromStation": "Tczew", "toStation": "Malbork"}, {"toLat": 53.134483, "numTrains": 23, "toLng": 17.99023, "fromLat": 54.096943, "fromLng": 18.789255, "fromStation": "Tczew", "toStation": "Bydgoszcz G\u0142\u00f3wna"}, {"toLat": 53.977173, "numTrains": 11, "toLng": 18.525581, "fromLat": 54.096943, "fromLng": 18.789255, "fromStation": "Tczew", "toStation": "Starogard Gda\u0144ski"}, {"toLat": 52.252309, "numTrains": 1, "toLng": 21.051095, "fromLat": 54.096943, "fromLng": 18.789255, "fromStation": "Tczew", "toStation": "Warszawa Wschodnia"}, {"toLat": 53.699924, "numTrains": 15, "toLng": 19.951206, "fromLat": 53.78566, "fromLng": 20.497377, "fromStation": "Olsztyn G\u0142\u00f3wny", "toStation": "Ostr\u00f3da"}, {"toLat": 54.15112, "numTrains": 11, "toLng": 19.416449, "fromLat": 53.78566, "fromLng": 20.497377, "fromStation": "Olsztyn G\u0142\u00f3wny", "toStation": "Elbl\u0105g"}, {"toLat": 53.56039, "numTrains": 7, "toLng": 20.997768, "fromLat": 53.78566, "fromLng": 20.497377, "fromStation": "Olsztyn G\u0142\u00f3wny", "toStation": "Szczytno"}, {"toLat": 53.8248, "numTrains": 7, "toLng": 22.361605, "fromLat": 53.78566, "fromLng": 20.497377, "fromStation": "Olsztyn G\u0142\u00f3wny", "toStation": "E\u0142k"}, {"toLat": 52.88382, "numTrains": 5, "toLng": 20.591518, "fromLat": 53.78566, "fromLng": 20.497377, "fromStation": "Olsztyn G\u0142\u00f3wny", "toStation": "Ciechan\u00f3w"}, {"toLat": 51.59738, "numTrains": 12, "toLng": 18.714455, "fromLat": 51.742977, "fromLng": 18.071234, "fromStation": "Kalisz", "toStation": "Sieradz"}, {"toLat": 51.115307, "numTrains": 6, "toLng": 16.998182, "fromLat": 51.742977, "fromLng": 18.071234, "fromStation": "Kalisz", "toStation": "Wroc\u0142aw Miko\u0142aj\u00f3w"}, {"toLat": 52.40214, "numTrains": 5, "toLng": 16.911764, "fromLat": 51.742977, "fromLng": 18.071234, "fromStation": "Kalisz", "toStation": "Pozna\u0144 G\u0142\u00f3wny"}, {"toLat": 52.252309, "numTrains": 50, "toLng": 21.051095, "fromLat": 52.40092, "fromLng": 20.941647, "fromStation": "Legionowo", "toStation": "Warszawa Wschodnia"}, {"toLat": 52.88382, "numTrains": 29, "toLng": 20.591518, "fromLat": 52.40092, "fromLng": 20.941647, "fromStation": "Legionowo", "toStation": "Ciechan\u00f3w"}, {"toLat": 52.40214, "numTrains": 12, "toLng": 16.911764, "fromLat": 51.947227, "fromLng": 15.514157, "fromStation": "Zielona G\u00f3ra", "toStation": "Pozna\u0144 G\u0142\u00f3wny"}, {"toLat": 51.668606, "numTrains": 12, "toLng": 16.079096, "fromLat": 51.947227, "fromLng": 15.514157, "fromStation": "Zielona G\u00f3ra", "toStation": "G\u0142og\u00f3w"}, {"toLat": 52.591488, "numTrains": 5, "toLng": 14.646972, "fromLat": 51.947227, "fromLng": 15.514157, "fromStation": "Zielona G\u00f3ra", "toStation": "Kostrzyn"}, {"toLat": 52.727882, "numTrains": 4, "toLng": 15.229074, "fromLat": 51.947227, "fromLng": 15.514157, "fromStation": "Zielona G\u00f3ra", "toStation": "Gorz\u00f3w Wielkopolski"}, {"toLat": 51.634747, "numTrains": 4, "toLng": 15.136962, "fromLat": 51.947227, "fromLng": 15.514157, "fromStation": "Zielona G\u00f3ra", "toStation": "\u017bary"}, {"toLat": 53.403656, "numTrains": 6, "toLng": 23.508131, "fromLat": 53.852406, "fromLng": 23.026161, "fromStation": "August\u00f3w", "toStation": "Sok\u00f3\u0142ka"}, {"toLat": 54.106018, "numTrains": 6, "toLng": 22.94553, "fromLat": 53.852406, "fromLng": 23.026161, "fromStation": "August\u00f3w", "toStation": "Suwa\u0142ki"}, {"toLat": 51.098766, "numTrains": 13, "toLng": 17.036518, "fromLat": 50.45132, "fromLng": 16.656744, "fromStation": "K\u0142odzko G\u0142\u00f3wne", "toStation": "Wroc\u0142aw G\u0142\u00f3wny"}, {"toLat": 50.743465, "numTrains": 7, "toLng": 16.281664, "fromLat": 50.45132, "fromLng": 16.656744, "fromStation": "K\u0142odzko G\u0142\u00f3wne", "toStation": "Wa\u0142brzych G\u0142\u00f3wny"}, {"toLat": 50.84113, "numTrains": 4, "toLng": 16.481894, "fromLat": 50.45132, "fromLng": 16.656744, "fromStation": "K\u0142odzko G\u0142\u00f3wne", "toStation": "\u015awidnica Miasto"}, {"toLat": 54.035847, "numTrains": 18, "toLng": 19.042582, "fromLat": 54.15112, "fromLng": 19.416449, "fromStation": "Elbl\u0105g", "toStation": "Malbork"}, {"toLat": 53.78566, "numTrains": 11, "toLng": 20.497377, "fromLat": 54.15112, "fromLng": 19.416449, "fromStation": "Elbl\u0105g", "toStation": "Olsztyn G\u0142\u00f3wny"}, {"toLat": 51.966877, "numTrains": 41, "toLng": 20.150019, "fromLat": 51.762783, "fromLng": 19.543156, "fromStation": "\u0141\u00f3d\u017a Widzew", "toStation": "Skierniewice"}, {"toLat": 51.757877, "numTrains": 28, "toLng": 19.429234, "fromLat": 51.762783, "fromLng": 19.543156, "fromStation": "\u0141\u00f3d\u017a Widzew", "toStation": "\u0141\u00f3d\u017a Kaliska"}, {"toLat": 51.410633, "numTrains": 15, "toLng": 19.685005, "fromLat": 51.762783, "fromLng": 19.543156, "fromStation": "\u0141\u00f3d\u017a Widzew", "toStation": "Piotrk\u00f3w Trybunalski"}, {"toLat": 51.660767, "numTrains": 6, "toLng": 19.325357, "fromLat": 51.762783, "fromLng": 19.543156, "fromStation": "\u0141\u00f3d\u017a Widzew", "toStation": "Pabianice"}, {"toLat": 50.856766, "numTrains": 3, "toLng": 19.946445, "fromLat": 51.762783, "fromLng": 19.543156, "fromStation": "\u0141\u00f3d\u017a Widzew", "toStation": "W\u0142oszczowa P\u00f3\u0142noc"}, {"toLat": 52.231155, "numTrains": 2, "toLng": 18.252472, "fromLat": 51.762783, "fromLng": 19.543156, "fromStation": "\u0141\u00f3d\u017a Widzew", "toStation": "Konin"}, {"toLat": 52.221073, "numTrains": 1, "toLng": 20.964775, "fromLat": 51.762783, "fromLng": 19.543156, "fromStation": "\u0141\u00f3d\u017a Widzew", "toStation": "Warszawa Zachodnia"}, {"toLat": 52.652992, "numTrains": 1, "toLng": 19.058933, "fromLat": 51.762783, "fromLng": 19.543156, "fromStation": "\u0141\u00f3d\u017a Widzew", "toStation": "W\u0142oc\u0142awek"}, {"toLat": 51.762783, "numTrains": 29, "toLng": 19.543156, "fromLat": 51.757877, "fromLng": 19.429234, "fromStation": "\u0141\u00f3d\u017a Kaliska", "toStation": "\u0141\u00f3d\u017a Widzew"}, {"toLat": 51.660767, "numTrains": 24, "toLng": 19.325357, "fromLat": 51.757877, "fromLng": 19.429234, "fromStation": "\u0141\u00f3d\u017a Kaliska", "toStation": "Pabianice"}, {"toLat": 52.652992, "numTrains": 3, "toLng": 19.058933, "fromLat": 51.757877, "fromLng": 19.429234, "fromStation": "\u0141\u00f3d\u017a Kaliska", "toStation": "W\u0142oc\u0142awek"}, {"toLat": 52.231155, "numTrains": 2, "toLng": 18.252472, "fromLat": 51.757877, "fromLng": 19.429234, "fromStation": "\u0141\u00f3d\u017a Kaliska", "toStation": "Konin"}, {"toLat": 51.11615, "numTrains": 23, "toLng": 20.881208, "fromLat": 50.874294, "fromLng": 20.618546, "fromStation": "Kielce", "toStation": "Skar\u017cysko-Kamienna"}, {"toLat": 50.644924, "numTrains": 18, "toLng": 20.276203, "fromLat": 50.874294, "fromLng": 20.618546, "fromStation": "Kielce", "toStation": "J\u0119drzej\u00f3w"}, {"toLat": 50.837806, "numTrains": 15, "toLng": 20.014366, "fromLat": 50.874294, "fromLng": 20.618546, "fromStation": "Kielce", "toStation": "W\u0142oszczowa"}, {"toLat": 50.97135, "numTrains": 1, "toLng": 18.20077, "fromLat": 50.874294, "fromLng": 20.618546, "fromStation": "Kielce", "toStation": "Kluczbork"}, {"toLat": 53.134144, "numTrains": 4, "toLng": 23.135603, "fromLat": 52.76147, "fromLng": 23.188667, "fromStation": "Bielsk Podlaski", "toStation": "Bia\u0142ystok"}, {"toLat": 51.115307, "numTrains": 10, "toLng": 16.998182, "fromLat": 51.074738, "fromLng": 17.716604, "fromStation": "Namys\u0142\u00f3w", "toStation": "Wroc\u0142aw Miko\u0142aj\u00f3w"}, {"toLat": 50.97135, "numTrains": 10, "toLng": 18.20077, "fromLat": 51.074738, "fromLng": 17.716604, "fromStation": "Namys\u0142\u00f3w", "toStation": "Kluczbork"}, {"toLat": 52.40092, "numTrains": 31, "toLng": 20.941647, "fromLat": 52.88382, "fromLng": 20.591518, "fromStation": "Ciechan\u00f3w", "toStation": "Legionowo"}, {"toLat": 53.582592, "numTrains": 5, "toLng": 19.573326, "fromLat": 52.88382, "fromLng": 20.591518, "fromStation": "Ciechan\u00f3w", "toStation": "I\u0142awa G\u0142\u00f3wna"}, {"toLat": 53.78566, "numTrains": 5, "toLng": 20.497377, "fromLat": 52.88382, "fromLng": 20.591518, "fromStation": "Ciechan\u00f3w", "toStation": "Olsztyn G\u0142\u00f3wny"}, {"toLat": 52.252309, "numTrains": 3, "toLng": 21.051095, "fromLat": 52.88382, "fromLng": 20.591518, "fromStation": "Ciechan\u00f3w", "toStation": "Warszawa Wschodnia"}, {"toLat": 54.035847, "numTrains": 2, "toLng": 19.042582, "fromLat": 52.88382, "fromLng": 20.591518, "fromStation": "Ciechan\u00f3w", "toStation": "Malbork"}, {"toLat": 51.762783, "numTrains": 41, "toLng": 19.543156, "fromLat": 51.966877, "fromLng": 20.150019, "fromStation": "Skierniewice", "toStation": "\u0141\u00f3d\u017a Widzew"}, {"toLat": 52.221073, "numTrains": 37, "toLng": 20.964775, "fromLat": 51.966877, "fromLng": 20.150019, "fromStation": "Skierniewice", "toStation": "Warszawa Zachodnia"}, {"toLat": 52.16791, "numTrains": 23, "toLng": 20.798557, "fromLat": 51.966877, "fromLng": 20.150019, "fromStation": "Skierniewice", "toStation": "Pruszk\u00f3w"}, {"toLat": 51.410633, "numTrains": 9, "toLng": 19.685005, "fromLat": 51.966877, "fromLng": 20.150019, "fromStation": "Skierniewice", "toStation": "Piotrk\u00f3w Trybunalski"}, {"toLat": 50.808563, "numTrains": 2, "toLng": 19.119875, "fromLat": 51.966877, "fromLng": 20.150019, "fromStation": "Skierniewice", "toStation": "Cz\u0119stochowa"}, {"toLat": 50.06564, "numTrains": 2, "toLng": 19.947206, "fromLat": 51.966877, "fromLng": 20.150019, "fromStation": "Skierniewice", "toStation": "Krak\u00f3w G\u0142\u00f3wny"}, {"toLat": 52.231155, "numTrains": 1, "toLng": 18.252472, "fromLat": 51.966877, "fromLng": 20.150019, "fromStation": "Skierniewice", "toStation": "Konin"}, {"toLat": 51.634747, "numTrains": 10, "toLng": 15.136962, "fromLat": 51.60425, "fromLng": 15.315622, "fromStation": "\u017baga\u0144", "toStation": "\u017bary"}, {"toLat": 51.213173, "numTrains": 5, "toLng": 16.16822, "fromLat": 51.60425, "fromLng": 15.315622, "fromStation": "\u017baga\u0144", "toStation": "Legnica"}, {"toLat": 54.035847, "numTrains": 21, "toLng": 19.042582, "fromLat": 53.582592, "fromLng": 19.573326, "fromStation": "I\u0142awa G\u0142\u00f3wna", "toStation": "Malbork"}, {"toLat": 53.699924, "numTrains": 15, "toLng": 19.951206, "fromLat": 53.582592, "fromLng": 19.573326, "fromStation": "I\u0142awa G\u0142\u00f3wna", "toStation": "Ostr\u00f3da"}, {"toLat": 53.000187, "numTrains": 9, "toLng": 18.614595, "fromLat": 53.582592, "fromLng": 19.573326, "fromStation": "I\u0142awa G\u0142\u00f3wna", "toStation": "Toru\u0144 G\u0142\u00f3wny"}, {"toLat": 52.252309, "numTrains": 9, "toLng": 21.051095, "fromLat": 53.582592, "fromLng": 19.573326, "fromStation": "I\u0142awa G\u0142\u00f3wna", "toStation": "Warszawa Wschodnia"}, {"toLat": 52.88382, "numTrains": 6, "toLng": 20.591518, "fromLat": 53.582592, "fromLng": 19.573326, "fromStation": "I\u0142awa G\u0142\u00f3wna", "toStation": "Ciechan\u00f3w"}, {"toLat": 53.134483, "numTrains": 33, "toLng": 17.99023, "fromLat": 53.000187, "fromLng": 18.614595, "fromStation": "Toru\u0144 G\u0142\u00f3wny", "toStation": "Bydgoszcz G\u0142\u00f3wna"}, {"toLat": 52.652992, "numTrains": 26, "toLng": 19.058933, "fromLat": 53.000187, "fromLng": 18.614595, "fromStation": "Toru\u0144 G\u0142\u00f3wny", "toStation": "W\u0142oc\u0142awek"}, {"toLat": 52.805573, "numTrains": 13, "toLng": 18.244347, "fromLat": 53.000187, "fromLng": 18.614595, "fromStation": "Toru\u0144 G\u0142\u00f3wny", "toStation": "Inowroc\u0142aw"}, {"toLat": 53.432888, "numTrains": 13, "toLng": 18.725243, "fromLat": 53.000187, "fromLng": 18.614595, "fromStation": "Toru\u0144 G\u0142\u00f3wny", "toStation": "Grudzi\u0105dz"}, {"toLat": 53.582592, "numTrains": 9, "toLng": 19.573326, "fromLat": 53.000187, "fromLng": 18.614595, "fromStation": "Toru\u0144 G\u0142\u00f3wny", "toStation": "I\u0142awa G\u0142\u00f3wna"}];

  constructor() {
    this.selectedStation = false;
  }

  // zmienRozklad(stationName: string) {
  //   let x = document.getElementById('rozklad");
  //   x.style.color='yellow';

  //   this.selectedStation = true;
  // }
}