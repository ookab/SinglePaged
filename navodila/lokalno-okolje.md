## Namen dokumenta

Je vzpostavitev lokalnega delovnega okolja za vzdrževalca obstoječe spletne strani.
To okolje omogoča razvijalcu, da lahko na svojem lastnem računalniku gosti spletno stran, kar mu omogoča hitrejšo povratno informacijo tekom dela.

Ker je postopek bolj tehničen, si naj to okolje vzpostavi le vzdrževalec spletne strani.
Ostalim sodelujočim, ki prispevajo vsebino, bo lažje urejati preko spleta. Za to obstaja več rešitev, za podrobnosti glej [navodila za urejanje](/navodila/urejanje.md).



Tu je sicer fokus na Linux okolju, vendar se ga da zelo enostavno vzpostaviti tudi na Windows-ih.

## Vzpostavitev na Windows sistemu

### Vzpostavitev Git

Enostaven vodič za inštalacijo Git-a https://www.youtube.com/watch?v=SmbAn2_5uGs

Ko to opraviš, boš ob desnem kliku v Explorerju dobil možnost _Git Bash here_

![Git Bash here primer](http://cdn.ilovefreesoftware.com/wp-content/uploads/2016/08/right-click-options-for-Git.png)

### Vzpostavitev Ruby & Jekyll

Enostaven vodič za Jekyll je na voljo na http://jekyll-windows.juthilo.com/

Točko _3 Syntax_ lahko izpustiš.

## Vzpostavitev na Linux operacijskem sistemu

Sledeča navodila so izpeljana iz postopkov, ki jih je izvedel prvotni razvijalec spletne strani. To ni edini način za vzpostavitev okolja - obstaja veliko vodičev za to na internetu, če želiš narediti po svoje.
Vsi ukazi (to so `tako oblikovana besedila`) so mišljeni, da se izvedejo v terminalu.

### Vzpostavitev Git

Na Arch Linux distribuciji lahko inštaliraš vse potrebno s `sudo pacman -S git`

Na Ubuntu lahko inštaliraš preko `sudo apt install git-all`

Za ostale distribucije glej https://git-scm.com/book/en/v2/Getting-Started-Installing-Git

### Vzpostavitev Ruby

Na Arch Linux distribuciji lahko inštaliraš vse potrebno s `sudo pacman -S ruby`

Na Ubuntu lahko inštaliraš preko `sudo apt-get install ruby ruby-dev build-essential`

Za ostale distribucije glej https://www.ruby-lang.org/en/documentation/installation/


Da lahko Ruby uporabiš iz terminala (potrebujemo za Jekyll), ustvari oz. posodobi ~/.profile datoteko s sledečo vsebino

```
export PATH="$PATH:$(ruby -e 'print Gem.user_dir')/bin"
export GEM_HOME=$HOME/.gem
```

Naredi logout ter prijavo nazaj. Oz. če se ti to ne da, lahko okolje terminala posodobiš z

```
. ~/.profile
```
(To velja le za trenutno terminalsko okno. Če želiš za vsa okna, moraš narediti logout)

### Vzpostavitev Jekyll

Potem, ko imaš vzpostavljen Ruby, izvedi
```
gem update
gem install jekyll
```

Če je šlo vse prav, potem bi ti moral ukaz `jekyll -v` vrniti `jekyll 3.x.x`

## Prenos kode spletne strani

Prenesi si kodo projekta (če ga še nimate, glejte [domena.md](/navodila/domena.md) , točka 4.)

```
git clone https://github.com/[github uporabniško ime]/[ime projekta].git
```
Znotraj terminala se v mapo projekta premakneš s `cd [ime projekta]` - to je naš koren projekta.

## Lokalno gostovanje spletne strani

V korenu projekta izvedi

`jekyll serve`

Če so vsi prejšnji koraki šli prav, bi moralo izpisati nekaj v tem smislu
```
[nekaj@lepega web]$ jekyll serve
Configuration file: /home/nekaj/web/_config.yml
            Source: /home/nekaj/web
       Destination: /home/nekaj/web/_site
 Incremental build: disabled. Enable with --incremental
      Generating...
                    done in 0.169 seconds.
 Auto-regeneration: enabled for '/home/nekaj/web'
    Server address: http://0.0.0.0:4000
  Server running... press ctrl-c to stop.
```

Kot je razvidno iz `Server address:`, je zdaj na tem računalniku spletna stran zdaj na voljo na http://0.0.0.0:4000

## Urejanje spletne strani

Mapa `_site` vsebuje končno spletno stran (to kar vidiš prikazano v brskalniku, in kar se v bistvu gostuje na strežniku).
To mapo posodablja Jekyll, zato je ne urejaj na roke, ker bo Jekyll ob naslednji posodobitvi izvornikov vse datoteke znotraj `_site` prepisal, dodatne pa izbrisal.

Izvorniki so lahko praviloma urejeni poljubno. Sledeča ureditev velja, če izhajate iz kode spletne strani projekta [OOKAB](https://github.com/ookab/web)
Če izhajate iz kakšne druge strani/predloge, preglejte njihovo dokumentacijo.

---

Izvorniki spletne strani (iz katere se tvori končna spletna stran), so na voljo v mapah

* [_posts/](/_posts/) - markdown vsebina naslovne strani
* [_includes/](/_includes/) - datoteke, katerih vsebina se vključi v ostale datoteke (izseki CSS, HTML, Markdown). Jekyll tekom generiranja
* [assets/](/assets/) - slike + ostala statična vsebina, ki se nespremenjena vključi v spletno stran

V korenu projekta je še

* [index.html](/index.html) - [Liquid predloga](https://jekyllrb.com/docs/templates/), iz katere se tvori končna index.html datoteka (naslovna stran). Vključuje vsebino datotek v [_posts/](/_posts/)
* [site.js](/site.js) - javascript naslovne strani
* [combo.css](/combo.css) - Liquid predloga, iz katere se tvori končna CSS datoteka za vse stile spletne strani. Vključuje vsebino datotek v [_includes/css/](/_includes/css/)

Za dodatna navodila glede urejanja vsebine spletne strani glej [urejanje.md](/navodila/urejanje.md)

## Objavljanje sprememb

Potem ko si pripravljen, da svoje spremembe javno objaviš na strežnik, odpri terminal v **korenu projekta**:

* v Windows-ih desno klikni na mapo korena projekta ter izberi _Git Bash here_
* v Linux-ih odpri terminal ter izvedi `cd [pot do mape korena projekta]`

> Ko to počneš prvič, dodaj še podatke Github uporabnika:
> ```
> git config --global user.name "[Ime github uporabnika] [Priimek github uporabnika]"
> git config --global user.email [email github uporabnika]
> ```

Svoje spremembe potrdiš z
```
git add .
git commit -m "[kratek opis sprememb od prejšnje potrditve]"
```

Ter to objaviš na javni strežnik z
```
git push
```
(Tu te vpraša za uporabniško ime in geslo, podaš podatke od Github računa)

Če je šlo vse prav, potem bi se morala javna spletna stran posodobiti v toku naslednjih 15-30 min.

---
Kar se tiče uporabe git-a, sem tu predstavil res minimalno, kar je potrebno za njegovo uporabo. Git je sicer zelo močno orodje za medsebojno sodelovanje, je pa tudi kompleksno in morda sprva neintuitivno, zato se izplača nekoliko poglobiti vanj.
Če bi rad interaktivno šel čez osnovne koncepte git-a, je v redu vodič na https://try.github.io/

