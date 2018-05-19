
## Namen dokumenta

Je tako vzdrževalcu kot ostalim sodelujočim, ki prispevajo vsebine za spletno stran, podati usmeritve pri urejanju datotek spletne strani.
Čeprav lahko razvijalec z vzpostavljenim git-om ureja datoteke tudi lokalno, je za ostale lažje, da imajo spletni dostop za urejanje vsebin. Posledično je fokus na spletnih rešitvah.

### Markdown

Poenostavljeno povedano, je skupek pravil, kako v navadnih besedilnih datotekah (kot so recimo .txt - torej take, ki jih lahko odpremo z Notepad-om) nakažemo oblikovanje besedila.

---

Napisati nekaj v Markdown-u je zelo (zelo zelo) enostavno - oblikovanje posamezne vrstice besedila poveš s tem, da na začetek vrstice postaviš dogovorjen znak.

Recimo
```
# Moj lep naslov

## Moj lep podnaslov

Moje lepo besedilo v podnaslovu
```

se oblikuje kot

> # Moj lep naslov
>
> ## Moj lep podnaslov
>
> Moje lepo besedilo v podnaslovu

---

Za večino potreb je dovolj vedeti pravila na https://guides.github.com/features/mastering-markdown/

Bolj obširen spisek pravil pa lahko najdete na https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet

In da veste - z Markdown-om so oblikovana vsa besedila na spletni strani, vključno s temi navodili :)

### Orodja za urejanje

**Github**
Github ima že svoj spletni urejevalnik datotek. Navodila zanj so na https://help.github.com/articles/editing-files-in-your-repository/ , vendar bodi pozoren, da:

* v koraku 7. mora biti _branch_ nastavljen na **gh-pages**
* v koraku 8. izbereš _Commit directly to the_ **gh-pages** _branch_.

S tem se izogneš dodatni režiji pri objavljanju datotek na strežnik. Tak način dela je popolnoma sprejemljiv za naše potrebe.

Urejevalnik ima tudi možnost za predogled, vendar vedi da ta ne prikaže v stilu spletne strani. Predogled datoteke bo zato izgledal polomljeno, vendar nič zato - ko dejansko narediš commit, se bo uporabilo pravo oblikovanje spletne strani.

**CMS**
Content Management System (CMS) so orodja, ki skrijejo tehnično ozadje glede organizacije datotek, objave na strežnik ipd.

Uporabnikom se v tem primeru ni treba ukvarjati s podrobnostmi git-a, vendar pa je na plečih vzdrževalca spletne strani, da on to vzpostavi.

Rešitev je več, nekatere niti ne zahtevajo lastnega strežnika - ena izmed teh je [Netlify](https://www.netlify.com/).
Ta ima možnost urejanja markdown datotek s predogledom v živo, pri čemer naj bi upošteval pravo oblikovanje spletne strani.

Navodila za vzpostavitev Netlify (za razvijalca/vzdrževalca spletne strani) so na https://www.netlify.com/blog/2015/10/28/a-step-by-step-guide-jekyll-3.0-on-netlify/

