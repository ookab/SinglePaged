Vzpostavitev domene projekta za Github Pages
============================================

Za projekte s strani fakultete je mogoče zaprositi Arnes za brezplačno `.si` domeno.

Postopek za pridobitev ter povezavo z Github Pages stranjo je sledeč:

1. Na [Arnesovi spletni strani](https://www.arnes.si/storitve/splet-posta-strezniki/registracija-si-domene/) si prodobi "Obrazec za domene" ter ga elektronsko izpolni na sledeč način:

   Želimo: registrirati domeno
   Domena: _vaša domena_ (v našem primeru ookab.si)

   Podatki o organizaciji, ki bo nosilec domene: _vstavi podatke fakultete_

   Podatki o administrativni kontaktni osebi: _pusti prazno_

   Podatki o tehnični kontaktni osebi: _vstavi podatke osebe, ki ima čez administracijo/ureja spletno stran_

   Podatki o gostovanju domene: Domeno želimo gostovati na Arnesovih strežnikih DNS

   Ali želite domeno uporabiti tudi za elektronske naslove: _po lastni presoji_ (če boste uporabljali le Github Pages, tega *ne* potrebujete)


   Ter to pošlji na dom-reg@arnes.si

2. Ko dobiš potrdilo o vpisu domene (od dns@register.si), lahko iz maila, ki si ga navedel pod tehnično kontaktno osebo, pošlješ mail na hostmaster@arnes.si s sledečo vsebino:

   Pozdravljeni,

   kot tehnična oseba za domeno [tvoja domena], vas naprošam, da za omenjeno domeno dodate sledeče zapise

   [tvoja domena].si. IN CNAME [tvoj github uporabniski racun].github.io.
   www.[tvoja domena].si. IN CNAME [tvoj github uporabniski racun].github.io.

   Hvala lepa in lep pozdrav,

   [Tehnična kontaktna oseba]

3. Ko dobiš potrditev o spremembi zapisa, lahko greš na github spletne strani, greš pod Settings, Github Pages sekcija ter pod "Custom domain" dodaš svojo domeno.

V tej točki bi morala spletna stran biti dostopna na izbrani domeni.

Več informacij o vzpostavitvi domene lahko najdete na:

* http://www.arnes.si/storitve/splet-posta-strezniki/upravljanje-domen/
* https://help.github.com/articles/using-a-custom-domain-with-github-pages/
* https://help.github.com/articles/user-organization-and-project-pages/
* https://help.github.com/articles/custom-domain-redirects-for-github-pages-sites/
