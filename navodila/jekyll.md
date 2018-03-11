## Namen dokumenta

je vzpostavitev lokalnega delovnega okolja za vzdrževalca spletne strani. Dano okolje je potrebno le za začetno vzpostavitev ter lokalno tesitranje.
Ostali sodelujoči bodo predvidoma urejali spletno stran preko CMS-ja, kot je recimo Netlify.

Tu je sicer fokus na Linux okolju, vendar se ga da zelo enostavno vzpostaviti tudi na Windows-ih.

### Vzpostavitev Ruby ter Jekyll

Beri naslednje:

* https://wiki.archlinux.org/index.php/Ruby
* https://wiki.archlinux.org/index.php/jekyll

Ustvari oz. posodobi ~/.profile datoteko s sledečo vsebino

```
export PATH="$PATH:$(ruby -e 'print Gem.user_dir')/bin"
export GEM_HOME=$HOME/.gem
```

Če se ti ne da narediti logouta, sourcaj datoteko

```
. ~/.profile
```

kloniraj projekt ter se premakni v ustvarjeno mapo

```
git clone https://github.com/ookab/web.git
cd web
```

v tej točki lahko že lokalno prevedeš ter strežeš stran z

```
jekyll serve
```

Ne pozabi, da se vsebina mape `_site` prepiše ob vsaki prevedbi, tako da ne spreminjaj generirane kode!
Namesto tega urejaj njihove izvornike, ki so v mapah

* `_posts` - markdown vsebina naslovne strani
* `img` - slike
* `_includes` - css, javascript datoteke

V korenu projekta je še

* `index.html` - HTML + [Liquid](https://jekyllrb.com/docs/templates/) predloga, in katere se tvori končna index.html datoteka (ki je prikazana na strani)
* `site.js` - javascript naslovne strani
* `combo.css` - Liquid predloga za skupno css datoteko spletne strani

## Pravila lepega vedenja

Ker se tu gre za git okolje, do katerega imajo vsi sodelujoči poln dostop, je pomembno, da se držimo skupnega dogovora.
Zgodovina na gitu sicer omogoča, da se v primeru izpada spletno stran povrne v prejšnje stanje, vendar zavoljo živcev je bolje da do teh pride karseda redko.
