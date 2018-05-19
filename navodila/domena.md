Vzpostavitev domene projekta za Github Pages
============================================

Za projekte s strani fakultete je mogoče zaprositi Arnes za brezplačno `.si` domeno.

Za več podrobnosti glede Arnesovega gostovanja domen si oglejte http://www.arnes.si/storitve/splet-posta-strezniki/upravljanje-domen/

Postopek za pridobitev ter povezavo z Github Pages stranjo je sledeč:

1. Če še nimate, si vzpostavite Github račun. Enostaven uvod za to: https://www.wikihow.com/Create-an-Account-on-GitHub

2. Na [Arnesovi spletni strani](https://www.arnes.si/storitve/splet-posta-strezniki/registracija-si-domene/) si prodobi "Obrazec za domene" ter ga elektronsko izpolni na sledeč način:

   ---

   **Želimo:** registrirati domeno

   **Domena:** `[vaša domena].si` (v našem primeru ookab.si)

   **Podatki o organizaciji, ki bo nosilec domene:** vstavi podatke fakultete

   **Podatki o administrativni kontaktni osebi:** podatki pedagoškega mentorja projekta, ki je zaposlena pri fakulteti

   **Podatki o tehnični kontaktni osebi:** vstavi podatke osebe, ki bo zadolžena za upravljanje spletne strani

   _Kot tehnično kontaktno osebo se lahko navede bodisi administratorja na fakulteti, ali pa oseba, ki bo urejala spletno stran._

   **Podatki o gostovanju domene:** Domeno želimo gostovati na Arnesovih strežnikih DNS

   **Ali želite domeno uporabiti tudi za elektronske naslove:** po lastni presoji

   _Če ne poznate tehničnega ozadja za to, potem izberite **ne**. Za spletne strani, objavljene preko Github Pages, tega ne potrebujete._

   ---

   To se natisne, kot odgovorna oseba se naj podpiše dekan/direktor-ica fakultete, to se poskenira ter pošlje na dom-reg@arnes.si

3. Na mailu, ki se je navedel pod tehnično kontaktno osebo boš (od dns@register.si) dobil potrdilo o vpisu domene.
   Da pripraviš domeno za uporabo na Github Pages, pošlješ na hostmaster@arnes.si zahtevek s sledečo vsebino:

   ```
   Pozdravljeni,

   kot tehnična oseba za domeno [tvoja domena].si, vas naprošam, da za omenjeno domeno dodate sledeč zapis

   www.[tvoja domena].si. IN CNAME [tvoj github username, ki ga uporabljaš za Github Pages].github.io.

   Hvala lepa in lep pozdrav,

   [Tehnična kontaktna oseba]
   ```

4. Ko dobiš potrditev o spremembi zapisa (od hostmaster@arnes.si), lahko skonfiguriramo še Github Pages.
   Če še nimate vzpostavljenega projekta na Github-u, lahko

      * Začnete iz projekta [OOKAB](https://github.com/ookab/web/).
        Navodila za to: https://guides.github.com/activities/forking/

        Če boste izbrali to možnost, potem boste morali urediti še [_config.yml](/_config.yml).

        Oglejte si [navodila prvotne predloge](/TEMPLATE-README.md#setup-inside-existing-project) za več podrobnosti.

      * Začnete na sveže - enostavna navodila za to so

        * https://guides.github.com/features/pages/
        * https://www.youtube.com/watch?v=BA_c3bGQXlQ

   Ko imaš vzpostavljen projekt, lahko na pregledni strani projekta greš pod **Settings**, **Github Pages** sekcija ter pod **Custom domain** dodaš `www.[tvoja domena].si`.

V tej točki bi morala spletna stran biti dostopna na `www.[tvoja domena].si`

Za tehnično ozadje glede uporabe lastnih domen na Github Pages si lahko ogledate sledeče

* https://help.github.com/articles/user-organization-and-project-pages/
* https://help.github.com/articles/using-a-custom-domain-with-github-pages/
* https://help.github.com/articles/custom-domain-redirects-for-github-pages-sites/
