let names = [
  "Acalitus acanthus Meyer, 1990",
  "Acalitus aethiopicus Meyer, 1990",
  "Acalitus ancyrivalis Meyer, 1990",
  "Acalitus crotoni Meyer, 1990",
  "Acalitus gratissimi Meyer, 1990",
  "Acalitus hereroensei Meyer, 1990",
  "Acalitus lycioides Meyer, 1990",
  "Acalitus malelanus Meyer, 1990",
  "Acalitus mallyi Meyer, 1990",
  "Acalitus marinae Meyer, 1990",
  "Acalitus pundamariae Meyer, 1990",
  "Acalitus tanylobus Meyer, 1990",
  "Acalitus ueckermanni Meyer, 1990",
  "Acanthocybium solandri Cuvier, 1832",
  "Acanthopagrus vagus Peters, 1852",
  "Aceria chiridensis Meyer & Ueckermann, 1990",
  "Aceria hexensis Meyer & Ueckermann, 1990",
  "Aceria keetchi Meyer & Ueckermann, 1990",
  "Aceria ocellatum Meyer & Ueckermann, 1990",
  "Aceria pentheriae Meyer & Ueckermann, 1990",
  "Aceria rhusi Meyer & Ueckermann, 1990",
  "Achtheinus oblongus Wilson C.B., 1908",
  "Aciagrion dondoense Dijkstra, 2007",
  "Acisoma inflatum Selys, 1882",
  "Acisoma variegatum Kirby, 1882",
  "Acnephalomyia andrenoides (Wiedemann, 1828)",
  "Acnephalomyia dorsalis  (Macquart, 1838)",
  "Acnephalomyia eremia Londt, 2010",
  "Acnephalomyia iota Londt, 2010",
  "Acnephalomyia leukoros Londt, 2010",
  "Acnephalomyia platygaster (Loew, 1858)",
  "Acnephalomyia probolos Londt, 2010",
  "Actinostola capensis Carlgren, 1928",
  "Aegypius  (Torgos) tracheliotus (J. R. Forster, 1796)",
  "Aegypius (Trigonoceps) occipitalis (Burchell, 1824)",
  "Afrarchaea ansieae Lotz, 2015",
  "Afraustraloxenodes hulleyi Nguyen Duy-Jacquemin, 2003",
  "Africallagma fractum Ris, 1921",
  "Afroceto ansieae Lyle, 2015",
  "Afroceto dippenaarae Lyle, 2015",
  "Afroelfus bothryogaster Gnezdilov, 2012",
  "Afroleius amieae Coetzee, 2014",
  "Afroleius caudatus Coetzee, 2014",
  "Afroleius crassus Coetzee 2013",
  "Afroleius decurvatus Coetzee 2013",
  "Afroleius deformatoides Coetzee 2013",
  "Afroleius floridus (Mahunka, 1985)",
  "Afroleius inae Coetzee, 2014",
  "Afroleius lucidus Coetzee, 2015",
  "Afroleius natalensis Coetzee, 2014",
  "Afroleius valerieae Coetzee, 2014",
  "Afromarengo bimaculata (Peckham & Peckham, 1903)",
  "Afropeza pappi Sinclair & Shamshev, 2012",
  "Afropeza silvatica Sinclair & Shamshev, 2012",
  "Afropeza stuckenbergi Sinclair & Shamshev, 2012",
  "Afrorhytida burseyae Herbert & Moussalli, 2010",
  "Afrorhytida knysnaensis (Pfeiffer, 1846)",
  "Afrorhytida kraussi (Pfeiffer, 1846)",
  "Afrorhytida trimeni (Melvill & Ponsonby, 1892)",
  "Afrothaumalea stuckenbergi Sinclair, 2015",
  "Agdistis buffelsi Kovtunovich & Ustjuzhanin, 2015",
  "Agdistis danutae Kovtunovich & Ustjuzhanin, 2009",
  "Agdistis dicksoni Kovtunovich & Ustjuzhanin, 2009",
  "Agdistis endrodyi Kovtunovich & Ustjuzhanin, 2009",
  "Agdistis iversoni Kovtunovich & Ustjuzhanin, 2015",
  "Agdistis jansei Kovtunovich & Ustjuzhanin, 2009",
  "Agdistis kaunda Kovtunovich & Ustjuzhanin, 2015",
  "Agdistis kronii Kovtunovich & Ustjuzhanin, 2009",
  "Agdistis kruegeri Kovtunovich & Ustjuzhanin, 2009",
  "Agdistis potgieteri Kovtunovich & Ustjuzhanin, 2009",
  "Agdistis samknotti Kovtunovich & Ustjuzhanin, 2015",
  "Agdistis vansoni Kovtunovich & Ustjuzhanin, 2015",
  "Agdistis varii Kovtunovich & Ustjuzhanin, 2009",
  "Agriocnemis pinheyi Balinsky, 1963",
  "Akatiomyia eremnos Londt, 2013",
  "Albula oligolepis Hidaka, Iwatsuki & Randall, 2008",
  "Alebion carchariae Kroyer, 1863",
  "Alella gibbosa van Niekerk & Olivier, 1995",
  "Alella pagelli Kroyer, 1863",
  "Aleurodamaeus angelae Hugo-Coetzee 2013",
  "Aleurodamaeus minutus Hugo-Coetzee 2013",
  "Aleurodamaeus niedbalai Hugo-Coetzee 2013",
  "Aleurodamaeus prominens Hugo-Coetzee, 2013",
  "Aleurodamaeus salvadordalii Hugo-Coetzee 2013",
  "Aleurodamaeus vicinus Hugo-Coetzee 2013",
  "Aleurodamaeus woasi Hugo-Coetzee, 2013",
  "Allita succinea Leuckart, 1847",
  "Allodapula variegate (Smith 1854)",
  "Amatolacypris trevelyani Günther, 1877",
  "Amaurobioide africana Hewitt, 1917",
  "Amietia delalandii (Dumeril & Bibron, 1841)",
  "Amietophrynus (Sclerophrys) pardalis (Hewitt, 1935)",
  "Ammodaimon platythrix Londt 1985",
  "Amphibalanus venustus Darwin 1854",
  "Amynthas aeruginosus Kinberg, 1867",
  "Amynthas diffringens (Baird, 1869)",
  "Amynthas hawayanus (Rosa, 1891)",
  "Amynthas minimus (Horst, 1893)",
  "Amynthas morrisi (Beddard, 1892)",
  "Amynthas rodericensis (Grube, 1879)",
  "Ancylorhynchus dilobion Londt, 2011",
  "Ancylorhynchus feijeni Londt, 2011",
  "Ancylorhynchus variabilis Londt, 2011",
  "Ancylorhynchus whiteheadi Londt, 2011",
  "Ancylorhynchus zophos Londt, 2011",
  "Anilocra capensis Leach, 1818",
  "Anoxypristis cuspidate Latham, 1794",
  "Anthene dulchis dulchis (Pagenstecher, 1902)",
  "Anthidiellum spilognathum (Cockerell, 1936)",
  "Anthosoma crassum Abildgaard, 1794",
  "Apochinomma decepta Haddad, 2013",
  "Apochinomma elongata Haddad, 2013",
  "Apolemichthys kingi Heemstra, 1984",
  "Aporrectodea caliginosa (Savigny, 1826)",
  "Aporrectodea longa (Ude, 1885)",
  "Aporrectodea trapezoides (Dugès, 1828)",
  "Aprion virescens Valenciennes,  1830",
  "Arge intermedia Pasteels, 1963",
  "Arge mirabilipes Pasteels, 1955",
  "Argyrops spinifer Forsskål, 1775",
  "Argyrosomus inodorus Griffiths & Heemstra, 1995",
  "Argyrosomus japonicus Temminck & Schlegel, 1843",
  "Argyrosomus thorpei Smith, 1977",
  "Argyrozona argyrozona Valenciennes, 1830",
  "Ariopelta variegata Sirgel, 2012",
  "Arthroleptis natalensis  (Smith, 1849)",
  "Ascetostoma providentiae (Melvill, 1909)",
  "Asemonea amatola Wesolowska & Haddad, 2013",
  "Asemonea clara Wesolowska & Haddad, 2013",
  "Astiptomyia bikos Londt 2010",
  "Atherigona albicornis Muller, 2015",
  "Atherigona angulata Deeming, 1971",
  "Atherigona angustiloba van Emden, 1956",
  "Atherigona aster van Emden, 1940",
  "Atherigona aurifacies van Emden, 1940",
  "Atherigona bedfordi van Emden, 1940",
  "Atherigona bimaculata Stein, 1910",
  "Atherigona binubila van Emden, 1940",
  "Atherigona budongoana van Emden, 1940",
  "Atherigona capitulata Muller, 2015",
  "Atherigona chrysohypene Muller, 2015",
  "Atherigona convexa Muller, 2015",
  "Atherigona danielssoni Muller, 2015",
  "Atherigona decempilosa Dike, 1989",
  "Atherigona erectisetula Muller, 2015",
  "Atherigona falkei Deeming, 1981",
  "Atherigona flavifinis Muller, 2015",
  "Atherigona flaviheteropalpata Muller, 2015",
  "Atherigona gilvifolia van Emden, 1940",
  "Atherigona heteropalpata Muller, 2015",
  "Atherigona humeralis (Wiedemann, 1830)",
  "Atherigona hyalinipennis van Emden, 1959",
  "Atherigona kirkspriggsi Muller, 2015",
  "Atherigona latibasilaris Muller, 2015",
  "Atherigona libertensis Muller, 2015",
  "Atherigona londti Muller, 2015",
  "Atherigona longifolia van Emden, 1940",
  "Atherigona matilei Deeming, 1977",
  "Atherigona mitrata Séguy, 1955",
  "Atherigona naqvii Steyskal, 1966",
  "Atherigona ndumoensis Muller, 2015",
  "Atherigona nesshurstensis Muller, 2015",
  "Atherigona nigrapicalis Deeming, 1979",
  "Atherigona oblonga Muller, 2015",
  "Atherigona occidentalis Deeming, 1971",
  "Atherigona ochracea Deeming, 1981",
  "Atherigona parviclivis Muller, 2015",
  "Atherigona parvihumilata Muller, 2015",
  "Atherigona perfida Stein, 1913",
  "Atherigona piscatoris Muller, 2015",
  "Atherigona rimapicis Muller, 2015",
  "Atherigona rubricornis Stein, 1913",
  "Atherigona ruficornis Stein, 1913",
  "Atherigona secrecauda Séguy, 1938",
  "Atherigona soccata Rondani, 1871",
  "Atherigona steeleae van Emden, 1940",
  "Atherigona stuckenbergi Muller, 2015",
  "Atherigona tetrastigma Paterson, 1956",
  "Atherigona theodori Hennig, 1963",
  "Atherigona tigris Muller, 2015",
  "Atherigona trapezia van Emden, 1940",
  "Atherigona tritici Pont & Deeming, 2001",
  "Atherigona umbonata Muller, 2015",
  "Atherigona univittata Deeming & Overman, 1987",
  "Atherigona valida (Adams, 1905)",
  "Atherigona vernoni Muller, 2015",
  "Atherigona zulu Muller, 2015",
  "Atractoscion aequidens Cuvier, 1830",
  "Baileyna ehretiae Ueckermann, 1992",
  "Bdella consobrinae Van der Schyff, Theron & Ueckermann, 2005",
  "Belippo meridionalis Wesolowska & Haddad, 2013",
  "Boopsoidea inornata Castelnau, 1861",
  "Brachioppia louwi Hugo-Coetzee, 2014",
  "Brachioppiella dawidi Hugo-Coetzee, 2014",
  "Brachioppiella goblina Hugo-Coetzee, 2014",
  "Brachioppiella martinezi Hugo-Coetzee, 2017",
  "Brachioppiella ricknuttalli Hugo-Coetzee, 2017",
  "Breviceps carrutheris Channing, 2012",
  "Breviceps passmorei Minter, Netherlands & Du Preez, 2017",
  "Breviceps poweri Parker, 1934",
  "Brianmyia stuckenbergi Woodley, 2012",
  "Cacosternum aggestum  Channing, Schmitz, Burger, and Kielgast, 2013",
  "Cacosternum parvum Poynton, 1963",
  "Cacyreus fracta fracta (Grünberg, 1912)",
  "Caecum austrafricanum Vannozzi, Pizzini & Raines, 2015",
  "Caecum chinense de Folin, 1868",
  "Caecum incisum Vannozzi, Pizzini & Raines, 2015",
  "Caecum inhacaense Albano & Pizzini, 2011",
  "Caecum intortum Vannozzi, Pizzini & Raines, 2015",
  "Caecum knysnaense Vannozzi, Pizzini & Raines, 2015",
  "Caecum leilae Vannozzi, Pizzini & Raines, 2015",
  "Caecum lindae Vannozzi, Pizzini & Raines, 2015",
  "Caecum maraisi Vannozzi, Pizzini & Raines, 2015",
  "Caecum morgan Vannozzi, Pizzini & Raines, 2015",
  "Caecum neocaledonicum de Folin, 1868",
  "Caecum sepimentum de Folin, 1868",
  "Caecum subquadratum Carpenter, 1859",
  "Caecum succineum de Folin, 1880",
  "Callistochiton ashbyi (Barnard, 1963)",
  "Capensibufo deceptus Channing et al., 2017",
  "Capensibufo magistratus Channing et al., 2017",
  "Capensibufo selenophos Channing et al., 2017",
  "Capitina calcicola Herbert & Moussalli, 2010",
  "Capitina schaerfiae (Pfeiffer, 1861)",
  "Capys penningtoni Riley, 1932a",
  "Caranx heberi Bennett, 1830",
  "Caranx ignobilis Forsskål, 1775",
  "Caranx papuensis Alleyne & Macleay, 1877",
  "Caranx sexfasciatus Quoy & Gaimard, 1825",
  "Cecidodectes euzonus Nalepa, 1917",
  "Cephalorhynchus commersonii (Lacépède, 1804)",
  "Ceratobates monosacculatus Ermilov,  Hugo-Coetzee & Khaustov, 2017",
  "Ceratomyxa cottoidii Reed, Basson, Van As & Dykova, 2007",
  "Ceratomyxa dehoopi Reed, Basson, Van As & Dykova, 2007",
  "Ceratomyxa honckenii Reed, Basson, Van As & Dykova, 2007",
  "Ceratothoa famosa Hadfield, Bruce & Smit, 2014",
  "Cercrops latreillii Leach, 1816",
  "Charaxes (Eriboea) jahlusa jahlusa Trimen, R. 1862c",
  "Charopinus dalmanni Retzius, 1829",
  "Charopinus dubius Scott T., 1901",
  "Cheilobarbus capensis (Smith, 1841)",
  "Cheilobarbus serra (Peters, 1864)",
  "Cheimerius nufar Valenciennes, 1830",
  "Chelidonichthys capensis Cuvier, 1829",
  "Chelidonichthys kumu Cuvier, 1829",
  "Chelidonichthys queketti Regan, 1904",
  "Chirodactylus grandis Günther, 1860",
  "Chirodactylus jessicalenorum Smith, 1980",
  "Chlorolestes nylephtha Barnard, 1937",
  "Chlorolestes peringueyi Ris , 1921",
  "Chrysoblephus anglicus Gilchrist & Thompson, 1908",
  "Chrysoblephus cristiceps Valenciennes, 1830",
  "Chrysoblephus gibbiceps Valenciennes, 1830",
  "Chrysoblephus laticeps Valenciennes, 1830",
  "Chrysoblephus lophus Fowler, 1925",
  "Chrysoblephus puniceus Gilchrist & Thompson, 1908",
  "Chrysoritis braueri (Pennington, 1967)",
  "Chrysoritis dicksoni (Gabriel, 1947)",
  "Chrysoritis penningtoni (Riley, 1938)",
  "Chrysoritis rileyi (Dickson, 1966e)",
  "Chrysoritis trimeni (Riley, 1938)",
  "Cigaritis namaquus (Trimen, 1874).",
  "Cigaritis natalensis (Westwood, [1851–2])",
  "Ciona robusta Hoshino & Tokioka, 1967",
  "Cladomelea longipes (O. Pickard-Cambridge, 1877)",
  "Clathromorphum tubiforme Y.M.Chamberlain, R.E.Norris, Keats & Maneveldt, 1995",
  "Clavella denticis Kroyer, 1863",
  "Clavellisa scombri Kurz, 1877",
  "Clavellopsis appendiculata Kirtisinghe, 1950",
  "Clavellopsis hostilis Heller, 1865",
  "Clavellotis dilatata Kroyer, 1863",
  "Clavellotis fallax Heller, 1865",
  "Clinus musaicus Holleman, von der Heyden & Zsilavecz, 2012",
  "Clypeostoma salpinx (Barnard, 1964)",
  "Coelometopon glenavoni Bilton, 2015",
  "Coenosia macrotriseta Muller & Miller, 2013",
  "Colaxes benjamini Wesolowska & Haddad, 2013",
  "Colomerus antidesmae Meyer & Ueckermann, 1990",
  "Colomerus mansus Meyer & Ueckermann, 1990",
  "Colomerus mespiliformae Meyer & Ueckermann, 1990",
  "Colomerus tinneae Meyer & Ueckermann, 1990",
  "Colomerus tricaseri Meyer & Ueckermann, 1990",
  "Colomerus vitexi Meyer & Ueckermann, 1990",
  "Colomerus volkensiae Meyer & Ueckermann, 1990",
  "Congomochtherus acuminatus Oldroyd, 1974",
  "Connochaetes gnou Zimmermann, E. A W, von 1780",
  "Copa kei Haddad, 2013",
  "Copuetta erecta Haddad, 2013",
  "Copuetta lacustris (Strand, 1916)",
  "Copuetta maputa Haddad, 2013",
  "Coryphaena hippurus Linnaeus, 1758",
  "Cricetomys ansorgei Thomas, 1904",
  "Cryptolybia (Stactolaema) olivacea  (Shelley, 1880)",
  "Cryptomys mahali (Roberts, 1913)",
  "Cryptomys natalensis (Roberts, 1913)",
  "Cryptomys pretoriae (Roberts, 1913)",
  "Curtonotum pauliani Tsacas, 1974",
  "Cymothoa sodwana Bruce & Smit, 2013",
  "Cyrtarachne ixoides (Simon, 1871)",
  "Cyrtophora petersi Karsch, 1878",
  "Danilia textilis Herbert, 2012",
  "Daspletis lykos Londt, 1985",
  "Daspletis vespertilio (Engel, 1932)",
  "Daspletis vulpes Loew, 1858",
  "Dasymys robertsii Mullin, Taylor & Pillay, 2004",
  "Deinodryinus casalei (Olmi, 1984)",
  "Deinodryinus prinslooi (Olmi, 1987)",
  "Deinodryinus richardsi (Olmi, 1984)",
  "Dendrobaena cognettii (Michaelsen, 1903)",
  "Dendrobaena hortensis (Michaelsen, 1890)",
  "Dendrobaena octaedra (Savigny, 1826)",
  "Dendrobaena veneta (Rosa, 1886)",
  "Dendryphantes limpopo Wesolowska & Haddad, 2013",
  "Dendryphantes silvestris Wesolowska & Haddad, 2013",
  "Diaparsis abstata Khalaim, 2013",
  "Diaparsis aneucliformis Khalaim, 2013",
  "Diaparsis interstitialis Khalaim, 2013",
  "Diaparsis kolyadai Khalaim, 2013",
  "Diaparsis minuscula Khalaim, 2013",
  "Diaparsis mostovskii Khalaim, 2013",
  "Diaparsis probleformis Khalaim, 2013",
  "Diaparsis robusta Khalaim, 2013",
  "Diaparsis voluptuosa Khalaim, 2013",
  "Diaparsis vulgaris Khalaim, 2013",
  "Dichistiidae Dichistius Cuvier, 1831",
  "Dichistius capensis Cuvier, 1831",
  "Dichistius multifasciatus Pellegrin, 1914",
  "Dichogaster affinis (Michaelsen, 1890)",
  "Dichogaster annae (Horst, 1893)",
  "Dichogaster bolaui (Michaelsen, 1891)",
  "Dichogaster modiglianii (Rosa, 1896)",
  "Dichogaster saliens (Beddard, 1893)",
  "Dinemoura latifolia Steenstrup & Lütken, 1861",
  "Dingana jerinae Henning G.A. & Henning S.F., 1996b",
  "Dinoperca petersi Day, 1875",
  "Diopsis stuckenbergi Feijen & Feijen, 2012",
  "Diploglena arida Haddad, 2015",
  "Diploglena dippenaarae Haddad, 2015",
  "Diploglena karooica Haddad, 2015",
  "Diploglena major Lawrence, 1928",
  "Diploglena proxila Haddad, 2015",
  "Diplonevra meridafricana Disney, 2012",
  "Dira Dira jansei (Swierstra, 1909)",
  "Discinisca tenuis Sowerby, 1847",
  "Dolichotetranychus salinas Pritchard & Baker, 1951",
  "Durbadnus chubbi  (Forsius, 1930)",
  "Durbadnus obscuripes (Forsius, 1931)",
  "Durbadnus taegeri Koch & Liston, 2012",
  "Dynamene bidentata Adams, 1800",
  "Eimeria sardinae Thélohan, 1890",
  "Elephantulus pilicaudus Smit, 2008",
  "Elops machnata Forsskål, 1775",
  "Enteromius amatolicus (Skelton, 1990)",
  "Enteromius anoplus (Weber, 1897)",
  "Enteromius pallidus (Smith, 1841)",
  "Epimastax hesterae Rasnitsyn & van Dijk, 2011",
  "Epinephelus albomarginatus Boulenger, 1903",
  "Epinephelus andersoni Boulenger, 1903",
  "Epinephelus lanceolatus Bloch, 1790",
  "Epinephelus malabaricus Bloch & Schneider, 1801",
  "Epinephelus marginatus Bloch & Schneider, 1801",
  "Epinephelus rivulatus Valenciennes, 1830",
  "Epinephelus tukula Morgans, 1959",
  "Epitrimerus capensis Meyer & Ueckermann, 1990",
  "Epitrimerus meintjiensis Meyer & Ueckermann, 1990",
  "Epitrimerus rogersii Meyer & Ueckermann, 1990",
  "Epitrimerus sticticus Meyer & Ueckermann, 1990",
  "Equus burchelli burchelli (Gray, 1824)",
  "Eremulus flagellifer Berlese, 1908",
  "Eremulus southafricanensis Ermilov & Hugo-Coetzee, 2012",
  "Eremulus spindleformis Ermilov & Hugo-Coetzee, 2012",
  "Eriophyes digitatae Ueckermann, 1993",
  "Eriophyes elephacapensis Ueckermann, 1993",
  "Eriophyes hypoesti Ueckermann, 1993",
  "Eriophyes meyerae Ueckermann, 1993",
  "Eriophyes mucronatae Ueckermann, 1993",
  "Eriophyes ocoteae Ueckermann, 1993",
  "Eriovixia excelsa (Simon, 1889)",
  "Eudactylina pusillus Cressey, 1967",
  "Eudrilus eugeniae (Kinberg, 1867)",
  "Eukerria saltensis (Beddard, 1895)",
  "Euryphura Euryphura achlys  (Hopffer, 1855)",
  "Eusparassus schoemanae Morandmand, 2013",
  "Eutetranychus anneckei Meyer, 1974",
  "Euthynnus affinis Cantor, 1849",
  "Evarcha denticulata Wesolowska & Haddad, 2013",
  "Ewanella breviuscula Gorochov, 2009",
  "Festucula haddadi Azarkina & Foord, 2014",
  "Festucula leroyae Azarkina & Foord, 2014",
  "Festucula robustus Azarkina & Foord, 2014",
  "Fidelia whiteheadi Litman and Kuhlmann 2016",
  "Fuchibotulus haddadi Lyle, 2013",
  "Galeichthys ater Castelnau, 1861",
  "Galeichthys feliceps Valenciennes, 1840",
  "Galumna curvifamulus Ermilov, Hugo-Coetzee, Khaustov & Theron, 2017",
  "Galumna sphagni Ermilov, Hugo-Coetzee & Theron, 2017",
  "Galumnidae curvifamulus Ermilov, Hugo-Coetzee, Khaustov & Theron, 2017",
  "Genypterus capensis Andrew Smith, 1847",
  "Geogenia minnehaha Nxele, 2015",
  "Geokichla (Zoothera) gurneyi (Hartlaub, 1864)",
  "Geraesta congoensis (Lessert, 1943)",
  "Gerbilliscus afra (Gray, 1830)",
  "Gerbilliscus brantsii (Smith, 1836)",
  "Gerbilliscus leucogaster (Peters, 1852)",
  "Gerbilliscus paeba (A. Smith, 1836)",
  "Gerbilliscus vallinus (Thomas, 1918)",
  "Globoppia vernoncrookensis Hugo-Coetzee, 2017",
  "Gloiopotes huttoni Thomson G.M., 1890",
  "Gonatopus bekilyanus (Benoit, 1954)",
  "Gondwanascorpio emzantsiensis Gess, 2013",
  "Granata sulcifera (Lamarck, 1822)",
  "Graphiurus kelleni (Reuvens, 1890)",
  "Graphiurus microtis  (Noack, 1887)",
  "Graphiurus platyops Thomas, 1897",
  "Graphiurus rupicola (Thomas and Hinton, 1925)",
  "Haematobosca uniseriata (Malloch, 1932)",
  "Hamecamyia stuckenbergi Gaimari, 2012",
  "Harpagophora alokopyga Attems, 1909",
  "Heleophryne depressa FritzSimons, 1946",
  "Helicolenus dactylopterus Delaroche, 1809",
  "Heliophanus gramineus Wesołowska & Haddad, 2013",
  "Heliophanus ndumoensis Wesołowska & Haddad, 2013",
  "Henneguya clini Reed, Basson, Van As & Dykova, 2007",
  "Heriaeus allenjonesi van Niekerk & Dippenaar-Schoeman, 2013",
  "Heriaeus copricola van Niekerk & Dippenaar-Schoeman, 2013",
  "Heriaeus foordi van Niekerk & Dippenaar-Schoeman, 2013",
  "Heriaeus muizenberg van Niekerk & Dippenaar-Schoeman, 2013",
  "Heriaeus peterwebbi van Niekerk & Dippenaar-Schoeman, 2013",
  "Heriaeus sossusvlei van Niekerk & Dippenaar-Schoeman, 2013",
  "Heriaeus xanderi van Niekerk & Dippenaar-Schoeman, 2013",
  "Heriaeus zanii van Niekerk & Dippenaar-Schoeman, 2013",
  "Hermannomyia ukasi Londt & Copeland, 2013",
  "Herpestes pulverulentus (Wagner, 1839)",
  "Herpestes sanguineus Rüppell, 1835",
  "Herpetopoma helix (Barnard, 1964)",
  "Herpetopoma instrictum (Gould, 1849)",
  "Hersperiidae Metisella  malgacha malgacha (Boisduval, 1833a)",
  "Heydrichia cerasina Maneveldt & E.Van der Merwe, 2012",
  "Heydrichia groeneri Keats & Y.M.Chamberlain, 1995",
  "Heydrichia woelkerlingii R.A.Townsend, Y.M.Chamberlain &amp; Keats, 1994",
  "Hippopotamus amphibious Linnaeus, 1758",
  "Hydrictis maculicollis (Lichtenstein, 1835)",
  "Hydrozetes sphagnicolus Ermilov, Hugo-Coetzee & Theron, 2017",
  "Hypsosinga pygmaea (Sundevall, 1831)",
  "Iolaus (Epamera) aphnaeoides Trimen, 1873",
  "Iolaus trimeni Wallengren, 1875",
  "Iphikozulu kwayayaensis Aristov & Mostovski, 2009",
  "Isididae Isididae Lamouroux, 1812",
  "Isoxya mossamedensis Benoit, 1962",
  "Istiompax indica Cuvier, 1932",
  "Istiophorus platypterus Shaw, 1792",
  "Johnius dorsalis Peters, 1855",
  "Kajikia audax Philippi, 1887",
  "Karliella sexpunctata (Karl 1935)",
  "Katsuwonus pelamis Linnaeus, 1758",
  "Kedestes chaka (Trimen, 1873)",
  "Kedestes sarahae Henning G.A. & Henning S.F., 1998",
  "Kokoppia mandelai Hugo-Coetzee, 2014",
  "Kokoppia murvanidzeae Hugo-Coetzee, 2017",
  "Kroyeria carchariaeglauci Hesse, 1879",
  "Kudoa paniformis Kabata & Whitaker, 1981",
  "Kudoa thyrsites Gilchrist, 1924",
  "Labeo seeberi Gilchrist & Thompson, 1911",
  "Labeo umbratus (Smith, 1841)",
  "Laccocoris limicola (Stål, 1855)",
  "Laccocoris spurcus Stål 1865",
  "Lagenorhynchus cruciger (Quoy and Gaimard, 1824)",
  "Lanceoppia scytheae Hugo-Coetzee, 2014",
  "Langelurillus krugeri Wesolowska & Haddad, 2013",
  "Lepus victoriae Thomas, 1893",
  "Lernaeopoda galei Kroyer, 1837",
  "Lernanthropodes natalensis Kensley & Grindley, 1973",
  "Lernanthropus capistroides Olivier & van Niekerk, 1995",
  "Lernanthropus corniger Yamaguti, 1954",
  "Lernanthropus ecclesi Kensley & Grindley, 1973",
  "Lernanthropus paradoxus Von Nordmann, 1832",
  "Lernanthropus sarbae Kensley & Grindley, 1973",
  "Lethrinus crocineus Smith, 1959",
  "Lethrinus nebulosus Forsskål, 1775",
  "Lichia amia Linnaeus, 1758",
  "Licnodamaeolus asetosus Ermilov  & Hugo-Coetzee, 2012",
  "Licnodamaeolus erfenisdamensis Ermilov  & Hugo-Coetzee, 2012",
  "Lithophyllum acrocamptum Heydrich, 1902",
  "Lithophyllum neoatalayense Masaki, 1968",
  "Lithothamnion crispatum Hauck, 1878",
  "Liza richardsonii Smith, 1846",
  "Liza tricuspidens 1935",
  "Lophozozymus incisus H. Milne Edwards, 1834",
  "Lumbricus castaneus (Savigny, 1826)",
  "Lumbricus rubellus Hoffmeister, 1843",
  "Lutjanus argentimaculatus Forsskål, 1775",
  "Lutjanus rivulatus Cuvier, (1828)",
  "Lutjanus sanguineus Cuvier, 1828",
  "Lutjanus sebae Cuvier, 1816",
  "Lycaenidae Chrysoritis (Dickson, 1970a)",
  "Lycaenidae Lepidochrysops (Swanepoel, 1948)",
  "Lycaenidae molomo krooni Tite & Dickson, 1973",
  "Mackiella reclinata Chetverikov and Craemer, 2014",
  "Macrocoris flavicollis Signoret, 1861",
  "Maculabatis gerrardi Gray, 1851",
  "Magallana gigas Thunberg, 1793",
  "Makaira nigricans Lacepède, 1802",
  "Massagris contortuplicata Wesolowska & Haddad, 2013",
  "Megachile semierma Vachal 1903",
  "Megalops cyprinoides (Broussonet, 1782)",
  "Megalorhipida umbra Gielis, 2011",
  "Megalorhipida vivax (Meyrick, 1909)",
  "Melobesia membranacea (Esper) J.V.Lamouroux, 1812",
  "Merluccius capensis Castelnau,  1861",
  "Merluccius paradoxus Franca, 1960",
  "Merrifieldia innae Kovtunovich & Ustjuzhanin, 2011",
  "Mesophyllum engelhartii (Foslie) W.H.Adey, 1970",
  "Messapus natalis (Pocock, 1898)",
  "Metaphire californica (Kinberg, 1867)",
  "Metaphire quadragenaria (Perrier, 1872)",
  "Metridium dianthus Ellis, 1768",
  "Microcarbo (Phalacrocorax) coronatus (Wahlberg, 1855)",
  "Micropygmephorus heterotrichus Khaustov, Hugo-Coetzee & Ermilov, 2017",
  "Micropygmephorus pusillus Khaustov, Hugo-Coetzee & Ermilov 2017",
  "Microschismus reginus Ustjuzhanin & Kovtunovich, 2011",
  "Microschismus sterkfonteini Ustjuzhanin & Kovtunovich, 2011",
  "Microscolex dubius (Fletcher, 1887)",
  "Microscolex phosphoreus (Dugès, 1837)",
  "Moraniella bella Burckhardt & Kotrba, 2009",
  "Mothocya affinis Hadfield, Bruce & Smit, 2015",
  "Mugil cephalus Linnaeus, 1758",
  "Musca hugonis Pont, 1980",
  "Myomyscus verreauxii (Smith, 1834)",
  "Myosorex cf. tenuis Thomas and Schwann, 1905",
  "Naobranchia pritchardae Kensley & Grindley, 1973",
  "Nematogenia lacuum (Beddard, 1893)",
  "Nemesis lamna Risso, 1826",
  "Nemesis robusta van Beneden, 1851",
  "Neoalbionella etmopteri Yamaguti, 1939",
  "Neoechinorhynchus dorsovaginatus Amin & Christison, 2005",
  "Neoliomopterum picturatum Riek, 1976",
  "Neomacrocoris bondelaufa Sites, 2012",
  "Neomacrocoris handlirschi (Montandon, 1909)",
  "Neomacrocoris parviceps (Montandon, 1900)",
  "Neoromicia cf. melckorum Roberts, 1919",
  "Neoscona theisi theisiella  (Tullgren, 1910)",
  "Neoscorpis lithophilus (Gilchrist & Thompson, 1908)",
  "Neotegonotus alopebaccae Meyer, 1990",
  "Neotegonotus pengensis Meyer, 1990",
  "Nephila komaci Kuntner & Coddington 2009",
  "Nephilingis cruentata  (Fabricius, 1775)",
  "Nerocila orbignyi (Guérin -Méneville)1832",
  "Neserella capreifoliae Meyer & Ueckermann, 1989",
  "Neserella decora Meyer & Ueckermann, 1989",
  "Neserella tremae Meyer & Ueckermann, 1989",
  "Nesozetes membranus Ermilov, Hugo-Coetzee, Theron, & Behan-Pelletier, 2017",
  "Nothomydas gariepinus Hesse, 1969",
  "Nycticeinops schlieffeni (Peters 1859)",
  "Nymphalidae Acraea Trimen, 1881",
  "Nymphalidae Pseudacraea (Butler, 1878b)",
  "Obuloides crinitus Maake & Ueckermann, 2018",
  "Obuloides flavae Ueckermann, Theron & Tiedt, 2010",
  "Ocnerodrilus occidentalis Eisen, 1878",
  "Octolasion cyaneum (Savigny, 1826)",
  "Octolasion lacteum (Örley, 1881)",
  "Onychogompus supinus Hagen in Selys, 1854",
  "Oomtelecopon disjunctum Bilton, 2015",
  "Oplegnathus conwayi Richardson, 1840",
  "Oplegnathus robinsoni Regan, 1916",
  "Oppiella goldengatensis Hugo-Coetzee, 2014",
  "Orthagoriscicola muricatus Kroyer, 1837",
  "Orthetrum monardi Schmidt, 1951",
  "Otolithes ruber Bloch & Schneider, 1801",
  "Otomys karoensis Robers, 1931",
  "Pachyanthidium cucullatum (Friese)",
  "Pachycerina nigrivittata Davies & Miller, 2009",
  "Pachycerina vaga Adams, 1905",
  "Parabrachiella sublobulata Barnard, 1955",
  "Parabrachiella supplicans Barnard, 1955",
  "Paracaesio xanthura Bleeker, 1869",
  "Paragomphus dicksoni Pinhey, 1969",
  "Paragomphus sabicus Pinhey, 1950",
  "Parahyaena brunnea Thunberg, 1820",
  "Paralebion elongatus Wilson, 1911",
  "Paralethe (Paralethe) dendrophilus indosa (van Son, 1935)",
  "Paralimosina australis Papp, 2013",
  "Paralimosina heteroneura Papp, 2013",
  "Paralimosina paraustralis Papp, 2013",
  "Paralimosina sinelineata Papp, 2013",
  "Parastrophia avaricosa Vannozzi, Pizzini & Raines, 2015",
  "Parastrophia ornata Vannozzi, Pizzini & Raines, 2015",
  "Parupeneus fraserorum Randall & King, 2009",
  "Pasilobus dippenaarae Roff & Haddad, 2015",
  "Pavoclinus caeruleopunctatus Zsilavecz, 2001",
  "Pentamerus acaciae Meyer, 1989",
  "Perionyx excavatus Perrier, 1872",
  "Permoxenopterum laticostum van Dijk & Gorochov, 2011",
  "Perrinia angulifera (A. Adams, 1853)",
  "Perrinia konos (Barnard, 1964)",
  "Perrinia stellata (A. Adams, 1864)",
  "Phalacrotophora stuckenbergi Disney, 2012",
  "Philodicus cinerascens (Ricardo, 1900)",
  "Philodicus swynnertoni Hobby, 1933",
  "Philorthragoriscus serratus Kroyer, 1863",
  "Phymatolithon acervatum (Foslie) W.H.Adey, 1970",
  "Phymatolithon ferox (Foslie) Maneveldt & E.Van der Merwe, 2014",
  "Phymatolithon foveatum (Y.M.Chamberlain & Keats) Maneveldt & E.Van der Merwe, 2014",
  "Physeter macrocephalus Linnaeus, 1758",
  "Phytomyza impunita Lonsdale 2015",
  "Phytoptus crinitus Meyer, 1991",
  "Phytoptus dentatae Meyer, 1991",
  "Phytoptus ellipticus Meyer, 1991",
  "Phytoptus monthalensis Meyer, 1991",
  "Phytoptus swazilandicus Meyer, 1991",
  "Platycephalus indicus Linnaeus, 1758",
  "Platyptilia barbarae Ustjuzhanin & Kovtunovich, 2010",
  "Plectorhinchus chubbi (Regan, 1919)",
  "Plectorhinchus flavomaculatus (Cuvier, 1830)",
  "Plectorhinchus playfairi Pellegrin, 1914",
  "Plesianthidium calvini (Cockerell, 1932)",
  "Podochresimus unistolonus Attems, 1944",
  "Pomadasys commersonnii Lacepède, 1801",
  "Pomadasys furcatus Bloch & Schneider, 1801",
  "Pomadasys kaakan Cuvier, 1830",
  "Pomadasys olivaceus  Day, 1875",
  "Pomatomus saltatrix Linnaeus, 1766",
  "Pontodrilus litoralis (Grube, 1855)",
  "Prasonica nigrotaeniata  (Simon, 1909)",
  "Pristipomoides filamentosus Valenciennes, 1830",
  "Pronolagus saundersiae Hewitt, 1927",
  "Prosorhynchoides caudovatus Manter, 1940",
  "Proteaphila maculosa Davies & Miller, 2012",
  "Proteaphila pajori Davies, Miller & Muller, 2012",
  "Proteaphila stuckenbergorum Davies & Miller, 2012",
  "Psammophylax rhombeatus (Linnaeus, 1758)",
  "Pseudicius dentatus Wesolowska & Haddad, 2013",
  "Pseudicius flabellus Wesolowska & Haddad, 2013",
  "Pseudicius imitator Wesolowska & Haddad, 2013",
  "Pseudobarbus afer (Peters, 1864)",
  "Pseudobarbus asper (Boulenger, 1911)",
  "Pseudobarbus burchelli (Smith, 1841)",
  "Pseudobarbus senticeps (Smith 1936)",
  "Pseudobarbus skeltoni Chakona & Swartz, 2013",
  "Pseudobarbus swartzi Chakona & Skelton, 2017",
  "Pseudobarbus tenuis (Barnard, 1938)",
  "Pseudobarbus verloreni  Chakona, Swartz & Skelton, 2014",
  "Pseudomicrommata vittigera (Simon, 1897)",
  "Pseudonympha paludis Riley, 1938",
  "Pseudonympha Pseudonympha swanepoeli van Son, 1955",
  "Ptychadena nilotica  (Seetzen, 1855)",
  "Pygmaeodrilus arausionensis Michaelsen, 1910",
  "Pyrgotomyia richteri  (Steyskal, 1972)",
  "Quintalitus squamosus Meyer, 1989",
  "Rachycentron canadum (Linnaeus, 1766)",
  "Ramusella filamentosa (Mahunka, 1985)",
  "Ramusella filigera (Mahunka, 1985)",
  "Ramusella florisbadensis Hugo-Coetzee, 2016",
  "Ramusella seniczakae Hugo-Coetzee, 2016",
  "Ramusella tobiasi Hugo-Coetzee, 2016",
  "Rhabdomys dilectus (De Winton, 1897)",
  "Rhabdomys intermedius (Wroughton 1905)",
  "Rhene amanzi Wesolowska & Haddad, 2013",
  "Rhene punctatus Wesolowska & Haddad, 2013",
  "Rhene timidus Wesolowska & Haddad, 2013",
  "Rhinecanthus rectangulus Bloch and Schneider, 1801",
  "Rhinolophus cohenae Taylor, Stoffberg,  Monadjem, Schoeman, Bayliss,& Cotterill, 2012",
  "Rhinolophus smithersi Taylor, Stoffberg, Monadjem, Schoeman, Bayliss & Cotterill, 2012",
  "Rossella antartica Carter, H.J. 1872",
  "Rothus aethiopicus (Pavesi, 1883)",
  "Sagartia ornata Holdsworth, 1855",
  "Sandelia bainsii Castelnau, 1861",
  "Sandelia capensis (Cuvier, 1829)",
  "Scheloribates potchefstroomensis Ermilov, Hugo-Coetzee, Khaustov & Theron, 2017",
  "Schistobrachia jordaanae Dippenaar, Oivier & Benz, 2004",
  "Schistobrachia ramosa Krøyer, 1863",
  "Sclerophrys capensis Tschudi, 1838",
  "Sclerophrys garmani  (Meek, 1897)",
  "Sclerophrys gutturalis (Power, 1927)",
  "Sclerophrys maculatus  (Hallowell, 1854)",
  "Sclerophrys pantherina    (Smith, 1828)",
  "Sclerophrys pardalis  (Hewitt, 1935)",
  "Sclerophrys poweri  (Hewitt, 1935)",
  "Sclerophrys pusilla (Mertens, 1937)",
  "Scoletoptus duvernoiae Meyer, 1992",
  "Scomber japonicus Houttuyn, 1782",
  "Scomberoides commersonnianus Lacepède, 1801",
  "Scomberomorus commersoni Lacepede, 1800",
  "Scomberomorus plurilineatus Fourmanoir, 1966",
  "Sedercypris calidus (Barnard, 1938)",
  "Sedercypris erubescens (Skelton, 1974)",
  "Seriola dumerili Risso, 1810",
  "Seriola lalandi Valenciennes in Cuvier & Valenciennes, 1833",
  "Seriola rivoliana Valenciennes, 1833",
  "Setoppia izinyosa Hugo-Coetzee, 2017",
  "Setoppia karinae Mahunka, 1974",
  "Setoptus radiatae Meyer, 1991",
  "Shevtchenkella capensis (Meyer, 1990)",
  "Shevtchenkella jasmicolus (Meyer, 1990)",
  "Shevtchenkella lividae (Meyer, 1990)",
  "Shevtchenkella rhusi (Meyer, 1990)",
  "Shevtchenkella rothmanniae (Meyer, 1990)",
  "Smutsia temminckii (Smuts, 1832)",
  "Solenocristus karooensis Chetverikov, Craemer, Neser & Zukoff,  2018",
  "Solenocristus searsius Chetverikov, Craemer, Neser & Zukoff, 2018",
  "Somatiosoma nitescens Frey, 1958",
  "Sparidicola lithognathi Kensley & Grindley, 1973",
  "Spesbona angusta Selys, 1863",
  "Spheginobaccha pamela Thompson & Hauser, 2015",
  "Sphyraena barracuda (Edwards, 1771)",
  "Sphyraena jello Cuvier, 1829",
  "Spongites agulhensis Maneveldt, E.Van der Merwe & P.W.Gabrielson, 2015",
  "Spongites discoidea (Foslie) D.Penrose & Woelkerling, 1988",
  "Spongites impar (Foslie) Y.M.Chamberlain, 1994",
  "Spongites yendoi (Foslie) Y.M.Chamberlain, 1993",
  "Stenoptilia natalensis Ustjuzhanin & Kovtunovich, 2010",
  "Stereotydeus pallodus Olivier, 2006",
  "Stereotydeus vaginatus Olivier, 2006",
  "Sterna balaenarum (Strickland, 1852)",
  "Sterna caspia Pallas, 1770",
  "Strongylopus hymenopus Boulenger, 1920",
  "Stylogaster acanthocercus Stuke, 2012",
  "Stylogaster copelandi Stuke, 2012",
  "Stylogaster fanjae Stuke, 2012",
  "Stylogaster frontalis Kröber, 1914",
  "Stylogaster hauseri Stuke, 2012",
  "Stylogaster hirsutifemora Stuke, 2012",
  "Stylogaster irwini Stuke, 2012",
  "Stylogaster kakamegensis Stuke, 2012",
  "Stylogaster kenyensis Stuke, 2012",
  "Stylogaster kirkspriggsi Stuke, 2012",
  "Stylogaster westwoodi Smith, 1967",
  "Suberitidae Suberites Nardo, 1833",
  "Suncus Iinfinitesimus (Heller, 1912)",
  "Synarthrophyton eckloniae (Foslie) Keats & Y.M.Chamberlain, 1997",
  "Synarthrophyton magellanicum (Foslie) Keats & Y.M.Chamberlain, 1997",
  "Synarthrophyton munimentum Keats & Maneveldt, 1997",
  "Synarthrophyton papillatum Maneveldt, Keats & Y.M.Chamberlain, 2007",
  "Synarthrophyton patena",
  "Synarthrophyton robbenense Keats & Maneveldt, 1997",
  "Synolcus armstrongi Londt, 2012",
  "Synolcus aurulentus Engel, 1929",
  "Synolcus macrocercus Londt, 2012",
  "Synolcus namibiensis Londt, 2012",
  "Synolcus ukhahlamba Londt, 2012",
  "Synophryostreptus rugosostriatus (Schubart, 1966)",
  "Tanzania mkomaziensis (Wesolowska & Russell-Smith, 2000)",
  "Tasmacetus shepherdi Oliver, 1937",
  "Tegolophus auribarrus (Meyer, 1990)",
  "Tegolophus calpurniae Meyer, 1990",
  "Tegolophus merenskyi Meyer, 1990",
  "Tegolophus mtubaensis Meyer, 1990",
  "Tegolophus orientalis Meyer, 1990",
  "Tegolophus seringae Meyer, 1990",
  "Tegonotus bicarinatus Meyer, 1990",
  "Tegonotus halleriae Meyer, 1990",
  "Tegoprionus bicristatus Meyer, 1989",
  "Tetra brachylaenae Meyer, 1992",
  "Tetra capensei Meyer, 1992",
  "Tetra dodonae Meyer, 1992",
  "Tetra niloticae Meyer, 1992",
  "Tetra pterocarpi Meyer, 1992",
  "Tetra retusa Meyer, 1992",
  "Tetra tyrohylae Meyer, 1992",
  "Tetra visci Meyer, 1992",
  "Tetra zeyheri Meyer, 1992",
  "Tetranychus ludeni Zacher, 1913",
  "Thallomys shortridgei Thomas and Hinton, 1923",
  "Thestor barbatus Henning S.F. & Henning G.A., 1997",
  "Thestor calviniae Riley, 1954",
  "Thunnus alalunga Bonnaterre, 1788",
  "Thunnus albacares Bonnaterre, 1788",
  "Thunnus obesus Lowe, 1839",
  "Thyrsites atun Euphrasen, 1791",
  "Tomomingi szutsi Wesolowska & Haddad, 2013",
  "Trachinotus africanus Smith, 1967",
  "Trachinotus botla Shaw, 1803",
  "Tragelaphus oryx (Pallas, 1766)",
  "Trhypochthoniellus malaconothroiformis Ermilov, Hugo-Coetzee & Theron, 2017",
  "Trichognatha schoenlandi (Pocock, 1900)",
  "Trigloporus lastoviza Bonnaterre, 1788",
  "Trimenia wykehami  Dickson, 1969c",
  "Tritogenia howickiana (Michaelsen, 1913)",
  "Tritogenia zuluensis (Beddard, 1907)",
  "Tsitana uitenhaga Evans, 1937",
  "Tumescoptes dicrus Meyer, 1992",
  "Tumescoptes phoenixi Meyer, 1992",
  "Umbrina robinsoni Gilchrist & Thompson, 1908",
  "Ureta quadrispinosa (Lawrence, 1938)",
  "Uroplectes ansiedippenaarae Prendini, 2015",
  "Vaceuchelus cretaceus Herbert, 2012",
  "Vaceuchelus gemmula (Turton, 1932)",
  "Vaceuchelus natalensis (Smith, 1906)",
  "Vanbenedenia hydroalgae Oldewage, 1993",
  "Virachola vansoni Pennington, 1948",
  "Virididentula dentata Lamouroux, 1816",
  "Xestomyza lugubris Wiedemann, 1820",
  "Xestomyza stuckenbergi Hauser, 2012",
  "Xiphias gladius  Linnaeus, 1758",
  "Ypthima condamini condamini Kielland, 1982"
]

module.exports = names