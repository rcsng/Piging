export type IslandId = 'luzon' | 'visayas' | 'mindanao';

export interface VerifiedTutorial {
  title: string;
  channel: string;
  url: string;
  duration: string;
}

export interface LarawangSanaysayStep {
  stepNumber: number;
  tagalogTitle: string;
  hackMethod: string;
  academicCaption: string;
  comparisonNote: string;
  imageUrl: string;
}

export interface DishData {
  id: string;
  name: string;
  plaqueTitle: string;
  regionId: string;
  regionName: string;
  islandId: IslandId;
  province: string;
  imageUrl: string;
  shortTagline: string;
  // Tab 1: History & Origins (UCSP)
  ucspHistory: {
    anthropologicalContext: string;
    culturalEvolution: string;
    preservationTechnique: string;
    materialCulture: string;
    socialSignificance: string;
  };
  // Tab 2: Verification & Fact-Check (MIL)
  milVerification: {
    boilingAndCuringTitle: string;
    heirloomIngredients: string[];
    fryingOrSecondaryTitle: string;
    secondaryIngredients: string[];
    methodSteps: {
      sectionTitle: string;
      steps: string[];
    }[];
    sources: string[];
    verifiedTutorials: VerifiedTutorial[];
    authenticKeywords: string[];
    shortcutFlags: {
      keyword: string;
      reason: string;
    }[];
    sampleOnlineRecipe: string;
    sampleAuthenticRecipe: string;
  };
  // Tab 3: Philosophy & Cultural Journal
  philosophyPrompt: {
    question: string;
    englishTranslation: string;
    philosophicalLens: string;
  };
  // Tab 4: Modern Hacks & Shortcuts (FPL - Larawang-Sanaysay)
  fplLarawangSanaysay: {
    essayTitle: string;
    abstract: string;
    steps: LarawangSanaysayStep[];
  };
}

export interface RegionData {
  id: string;
  shortTitle: string; // e.g. "Region 1"
  fullName: string;   // e.g. "Region 1 - Ilocos Region"
  subtitle: string;   // e.g. "Ilocos Region"
  islandId: IslandId;
  ornamentType: 'mandala' | 'fans' | 'mask' | 'pinwheels';
  summaryBanner: string;
  dishes: DishData[];
}

export interface IslandGroupData {
  id: IslandId;
  name: string;
  landmarkName: string;
  imageUrl: string;
  weavePattern: 'inabel' | 'hablon' | 'yakan';
  description: string;
}

export interface JournalEntry {
  id: string;
  dishId: string;
  dishName: string;
  regionName: string;
  familyVariation: string;
  culturalReflection: string;
  createdAt: string;
}

export const IMAGES = {
  luzon: '/src/assets/images/luzon_banaue_terraces_1791559225968.jpg',
  visayas: '/src/assets/images/visayas_chocolate_hills_1791559244743.jpg',
  mindanao: '/src/assets/images/mindanao_enchanted_river_1791559262578.jpg',
  bagnet: '/src/assets/images/dish_ilocos_bagnet_1791559275068.jpg',
  pakbet: '/src/assets/images/dish_ilocos_pakbet_1791559289394.jpg',
  dinakdakan: '/src/assets/images/dish_la_union_dinakdakan_1791559302985.jpg',
  tocino: '/src/assets/images/dish_pampanga_tocino_1791559316554.jpg',
  lunis: '/src/assets/images/dish_batanes_lunis_1791559334177.jpg',
};

export const ISLAND_GROUPS: IslandGroupData[] = [
  {
    id: 'luzon',
    name: 'Luzon',
    landmarkName: 'Banaue Rice Terraces, Ifugao',
    imageUrl: IMAGES.luzon,
    weavePattern: 'inabel',
    description: 'From the windswept salt pans of Ilocos and stone houses of Batanes to the culinary plains of Pampanga.',
  },
  {
    id: 'visayas',
    name: 'Visayas',
    landmarkName: 'Chocolate Hills, Bohol',
    imageUrl: IMAGES.visayas,
    weavePattern: 'hablon',
    description: 'Archipelagic flavors shaped by sugarcane estates, coastal kinilaw traditions, and slow-simmered broths.',
  },
  {
    id: 'mindanao',
    name: 'Mindanao',
    landmarkName: 'Sugba Lagoon & Enchanted River',
    imageUrl: IMAGES.mindanao,
    weavePattern: 'yakan',
    description: 'Rich spice pastes (palapa), toasted coconut (tiyahu), turmeric, and ancient maritime trade aromas.',
  },
];

const DEFAULT_VERIFIED_TUTORIALS: VerifiedTutorial[] = [
  {
    title: 'Authentic Ilocos Bagnet Traditional Double-Fry Method',
    channel: 'Panlasang Pinoy Heritage',
    url: 'https://youtu.be/mMM5_xDLevg?si=IXV8gjdynV-Z-AGw',
    duration: '12:45',
  },
  {
    title: 'Heirloom Ilocano Culinary Documentary: Sangkutsa & Asin',
    channel: 'FEATR Philippine Food',
    url: 'https://youtu.be/DhBWI_6KOgI?si=OMrf4lOYxYMb4kWI',
    duration: '18:20',
  },
  {
    title: 'How Traditional Bagnet is Cooked in Vigan Clay Furnaces',
    channel: 'Lasa-Suri Field Archive',
    url: 'https://youtu.be/Ipbhb9Dts3o?si=XOA2a6qMaE9pgKa9',
    duration: '09:15',
  },
  {
    title: 'Regional Pork Preservation Techniques Across Northern Luzon',
    channel: 'Kultura at Kusina TV',
    url: 'https://youtu.be/TyXobyvOUx4?si=ZQnvGOKv4rptAuYK',
    duration: '14:10',
  },
  {
    title: 'Crispy Bagnet Recipe & Sukang Iloko Pairing Guide',
    channel: 'Yummy Kitchen Ph',
    url: 'https://youtu.be/qVCfP45O_qg?si=CmIokuOgRL3hNIw8',
    duration: '08:52',
  },
];

export const REGIONS_DATA: RegionData[] = [
  // ==================== LUZON ====================
  {
    id: 'region-1',
    shortTitle: 'Region 1',
    fullName: 'Region 1 - Ilocos Region',
    subtitle: 'Ilocos Region',
    islandId: 'luzon',
    ornamentType: 'mandala',
    summaryBanner:
      "Region 1 food culture is known for its strong, savory flavors, traditional cooking methods, and resourceful use of local ingredients. Its cuisine reflects the region's agricultural and coastal environment, with cooking practices such as boiling, grilling, fermenting, drying, and slow cooking passed down through generations.",
    dishes: [
      {
        id: 'ilocos-bagnet',
        name: "Iloco's Bagnet",
        plaqueTitle: 'BAGNET',
        regionId: 'region-1',
        regionName: 'Region 1 - Ilocos Region',
        islandId: 'luzon',
        province: 'Ilocos Sur & Ilocos Norte',
        imageUrl: IMAGES.bagnet,
        shortTagline: 'Double-fried heirloom pork belly cured in sea salt and aromatics.',
        ucspHistory: {
          anthropologicalContext:
            'Before modern refrigeration, Indigenous and colonial-era Ilocanos living along the narrow, arid coastal strip between the Cordillera range and the West Philippine Sea needed a reliable way to preserve pork belly after communal harvests and fiestas.',
          culturalEvolution:
            'They developed a rigorous process of salting, slow-boiling with native aromatics (sangkutsa), overnight air-drying, and double-frying in rendered lard inside massive cast-iron karahay woks. What began as survival food evolved into the centerpiece of Ilocano hospitality (Piging).',
          preservationTechnique:
            'Dehydration via sea-salt osmosis and two-stage thermal rendering (sangkutsa + double deep-frying) removes moisture from the muscle fibers while blistering the rind into a protective, shelf-stable crust.',
          materialCulture:
            'Traditionally cooked over wood-fired clay stoves (dalikan) in deep cast-iron cauldrons (karahay), hung on bamboo poles to dry in the coastal breeze, and served on woven rattan bilao with aged cane vinegar (Sukang Iloko) fermented in burnay stoneware jars.',
          socialSignificance:
            'Served during town fiestas, weddings, and ancestral offerings (atang), symbolizing Ilocano industry, thrift (kuripot resourcefulness), and communal generosity.',
        },
        milVerification: {
          boilingAndCuringTitle: 'Boiling & Curing Liquid:',
          heirloomIngredients: [
            '1 kg pork belly (liempo), whole slab',
            'Water (enough to submerge the meat)',
            '1–2 tbsp rock salt (asin sa baybay)',
            '1 tbsp whole black peppercorns',
            '4–5 dried bay leaves (dahon ng laurel)',
            '4–5 cloves native garlic, crushed',
          ],
          fryingOrSecondaryTitle: 'Frying:',
          secondaryIngredients: [
            'Cooking oil or rendered pork lard (enough for deep-frying)',
            'Traditional Dip: Sukang Iloko, native shallots (lasona), tomatoes, and bagoong monamon',
          ],
          methodSteps: [
            {
              sectionTitle: '1. Boil and Season the Pork:',
              steps: [
                '1. Place the whole pork belly slab in a deep pot.',
                '2. Add enough water to submerge the pork completely.',
                '3. Add the rock salt, whole black peppercorns, crushed garlic, and bay leaves.',
                '4. Bring to a boil over medium-high heat, then lower heat and simmer for 45 to 60 minutes until the skin and meat are tender (tender to a fork test, but not falling apart).',
              ],
            },
            {
              sectionTitle: '2. Drain and Dry:',
              steps: [
                '1. Remove the pork belly from the pot and let the excess liquid drain off completely.',
                '2. Prick the skin lightly with a fork or bamboo skewer to help create bubbles during frying.',
                '3. Prick/pat dry the surface thoroughly with paper towels or clean cloth.',
                '4. Optional Traditional Step: Air-dry or refrigerate uncovered for a few hours (or overnight) to dry out the skin thoroughly for maximum crispiness before double-frying.',
              ],
            },
          ],
          sources: [
            'https://panlasangpinoy.com/bagnet-recipe/',
            'Yummy.ph: https://youtu.be/qVCfP45O_qg?si=CmIokuOgRL3hNIw8',
          ],
          verifiedTutorials: DEFAULT_VERIFIED_TUTORIALS,
          authenticKeywords: [
            'rock salt',
            'asin',
            'peppercorn',
            'paminta',
            'bay leaves',
            'laurel',
            'garlic',
            'bawang',
            'air-dry',
            'overnight',
            'double',
            'sukang iloko',
            'bagoong',
          ],
          shortcutFlags: [
            {
              keyword: 'baking soda',
              reason: 'Baking soda rubbed on pork rind is a modern commercial shortcut to force blistering instead of authentic overnight drying and double-frying.',
            },
            {
              keyword: 'magic sarap',
              reason: 'Commercial MSG seasoning granules replace the natural umami achieved through slow sea-salt curing and native garlic infusion.',
            },
            {
              keyword: 'liquid seasoning',
              reason: 'Industrial soy-based liquid seasoning alters the clean, salt-cured flavor profile of heirloom Ilocano Bagnet.',
            },
            {
              keyword: 'air fryer',
              reason: 'Convection air-frying dries only the top rind rather than submerging the whole slab in rendered pork fat (karahay method).',
            },
            {
              keyword: 'cornstarch',
              reason: 'Dredging in starch creates a batter coating, which is foreign to authentic unbattered Ilocos Bagnet.',
            },
          ],
          sampleOnlineRecipe:
            'Quick 25-Minute Viral Crispy Bagnet! Boil 1kg pork belly for 15 mins with 1 packet Magic Sarap and liquid seasoning. Rub skin with baking soda and vinegar, coat lightly with cornstarch, then pop into the Air Fryer at 200C for 15 minutes!',
          sampleAuthenticRecipe:
            'Heirloom Ilocos Bagnet: Submerge 1 kg whole pork belly slab in water with 2 tbsp Ilocos rock salt, whole black peppercorns, crushed native garlic, and bay leaves. Simmer 60 mins, drain and air-dry overnight, then double-fry in a deep karahay until golden and blistered. Serve with Sukang Iloko and bagoong monamon.',
        },
        philosophyPrompt: {
          question:
            'Bakit mahalagang ingatan ang orihinal na lasa ng ating bayan laban sa mga komersyal na trend?',
          englishTranslation:
            'Why is it essential to safeguard the original taste of our homeland against commercialized culinary trends?',
          philosophicalLens:
            'Ang bawat lutuing minana ay hindi lamang pagkain ng katawan kundi gunita ng ating pagkakakilanlan (embodied cultural memory). Kapag binura ang mabagal at maingat na proseso ng sangkutsa, nawawala rin ang disiplina at kasaysayan ng mga ninuno.',
        },
        fplLarawangSanaysay: {
          essayTitle:
            'Larawang-Sanaysay: Ang Ebolusyon ng Bagnet mula sa Tradisyonal na Karahay tungo sa Makabagong Kusina',
          abstract:
            'Isang akademikong pagsusuri sa ilalim ng Filipino sa Piling Larang (Akademik) na naghahambing sa tradisyonal na dalawahang pagpiprito (double-frying) ng Ilocos at sa mga makabagong pamamaraan sa urbanisadong tahanan.',
          steps: [
            {
              stepNumber: 1,
              tagalogTitle: 'Unang Hakbang: Ang Pagpapakulo at Pag-aasin (Sangkutsa)',
              hackMethod: 'Pressure Cooker at Komersyal na Pampalasa vs. Mabagal na Pagpapakulo sa Asin',
              academicCaption:
                'Sa tradisyonal na proseso sa Ilocos, maingat na pinakukuluan ang buong liempo sa tubig na may asin-baybay, buong paminta, dahon ng laurel, at pinaupong bawang sa loob ng isang oras. Sa makabagong "kitchen hack," ginagamitan ito ng pressure cooker sa loob lamang ng labinlimang minuto upang mapabilis ang paglambot ng laman.',
              comparisonNote:
                'Bagama’t nakatitipid ng oras ang pressure cooker, nababawasan ang malalim na pagpasok ng alat sa hibla ng karne.',
              imageUrl: IMAGES.bagnet,
            },
            {
              stepNumber: 2,
              tagalogTitle: 'Ikalawang Hakbang: Ang Pagpapatuyo ng Balat',
              hackMethod: 'Pagpahid ng Baking Soda at Suka vs. Magdamag na Pagpapatuyo sa Hangin',
              academicCaption:
                'Kinakailangang patuyuin nang magdamag ang pinakuluang liempo upang kusang mawala ang halumigmig sa balat bago ito ilubog sa kumukulong mantika. Sa mga komersyal na bersyon online, hinahalinhan ito ng pagtusok sa balat at pagpahid ng baking soda at puting suka upang pilitin ang pagputok ng chicharon.',
              comparisonNote:
                'Ang artipisyal na pampaputok ng balat ay nag-iiwan ng bahagyang mapaklang lasa kumpara sa natural na pagpapatuyo.',
              imageUrl: IMAGES.lunis,
            },
            {
              stepNumber: 3,
              tagalogTitle: 'Ikatlong Hakbang: Ang Pagluluto at Paghahain sa Bilao',
              hackMethod: 'Convection Air-Fryer vs. Dalawahang Paglubog sa Mantika (Karahay)',
              academicCaption:
                'Ginagamit ngayon ng maraming mag-aaral at manggagawa ang air-fryer bilang alternatibo sa malalim na pagpiprito sa karahay. Bagama’t nakababawas ito sa paggamit ng mantika, nananatiling walang kapantay ang lutong at linamnam ng Bagnet na niluto sa sariling mantika at inihain kasama ng Sukang Iloko, kamatis, at lasona.',
              comparisonNote:
                'Pinatutunayan ng larawang-sanaysay na ang tunay na pamana ay nasa pag-unawa sa pinagmulan bago gamitin ang makabagong teknolohiya.',
              imageUrl: IMAGES.bagnet,
            },
          ],
        },
      },
      {
        id: 'ilocos-pakbet',
        name: "Iloco's Pakbet",
        plaqueTitle: 'PAKBET',
        regionId: 'region-1',
        regionName: 'Region 1 - Ilocos Region',
        islandId: 'luzon',
        province: 'Ilocos Norte & Ilocos Sur',
        imageUrl: IMAGES.pakbet,
        shortTagline: 'Indigenous garden vegetables simmered in fermented bagoong monamon and topped with bagnet.',
        ucspHistory: {
          anthropologicalContext:
            'Derived from the Ilocano word "pinakebbet" meaning "shrunk" or "shriveled," authentic Pakbet reflects the agrarian ecology of Ilocano backyard gardens (bangsal) where drought-hardy bitter melon, native round eggplants, okra, and winged beans thrive.',
          culturalEvolution:
            'Unlike Tagalog variations that use sweet squash purée and shrimp paste (bagoong alamang), heirloom Ilocano Pakbet relies strictly on fermented anchovy sauce (bagoong monamon/bugguong munamon) and gentle pot-tossing (kalog) rather than stirring with a ladle so vegetables stay whole.',
          preservationTechnique:
            'Fermented fish sauce (bagoong monamon) aged in earthenware burnay jars acts as both seasoning and preservative for seasonal backyard harvests.',
          materialCulture:
            'Traditionally simmered in a round-bottomed clay pot (banga) where vegetables are layered from hardest at the bottom to softest at the top and shaken by the pot handles.',
          socialSignificance:
            'Embodies the Ilocano philosophy of harmony with the land—celebrating bitter (pait), savory (nanam), and sour notes from native tomatoes without wasting a single harvest vegetable.',
        },
        milVerification: {
          boilingAndCuringTitle: 'Heirloom Backyard Ingredients:',
          heirloomIngredients: [
            '2 pcs native bitter melon (ampalaya / paria), halved',
            '4 pcs small native round or purple eggplants (tarong)',
            '6 pcs okra & 1 bundle string beans (utong)',
            '5 pcs native shallots (lasona), peeled whole',
            '4 pcs ripe native tomatoes (kamatis), quartered',
            '3 tbsp fermented fish paste (bagoong monamon / bugguong)',
          ],
          fryingOrSecondaryTitle: 'Topping & Aromatics:',
          secondaryIngredients: [
            '200g crispy Ilocos Bagnet slices',
            'Thumb-sized ginger (laya), crushed, and 4 cloves garlic',
            '1/2 cup rice washing (hugas-bigas) or water',
          ],
          methodSteps: [
            {
              sectionTitle: '1. Layering in the Clay Pot (Banga):',
              steps: [
                '1. In a clay pot or heavy pan, arrange crushed garlic, ginger, whole shallots (lasona), and ripe native tomatoes at the base.',
                '2. Layer the vegetables from longest-cooking at the bottom to quickest at the top (string beans, eggplant, okra, and native bitter melon).',
                '3. Pour the strained bagoong monamon and rice washing over the vegetables.',
              ],
            },
            {
              sectionTitle: '2. Simmer and Toss (Kalog Technique):',
              steps: [
                '1. Cover the pot and simmer over medium heat for 12–15 minutes until the vegetables shrivel slightly (pinakebbet).',
                '2. Instead of stirring with a metal spoon, gently shake or toss the pot so the vegetables absorb the bugguong without breaking.',
                '3. Top generously with crispy Ilocos Bagnet slices and serve hot on a woven bilao.',
              ],
            },
          ],
          sources: [
            'https://panlasangpinoy.com/pinakbet-ilocano-recipe/',
            'Yummy.ph: https://youtu.be/DhBWI_6KOgI?si=OMrf4lOYxYMb4kWI',
          ],
          verifiedTutorials: DEFAULT_VERIFIED_TUTORIALS,
          authenticKeywords: [
            'bagoong monamon',
            'bugguong',
            'ampalaya',
            'talong',
            'okra',
            'kamatis',
            'lasona',
            'bagnet',
            'laya',
            'ginger',
          ],
          shortcutFlags: [
            {
              keyword: 'bagoong alamang',
              reason: 'Sweet pink sautéed shrimp paste (bagoong alamang) is a Tagalog adaptation; authentic Ilocos Pakbet uses fermented fish sauce (bagoong monamon).',
            },
            {
              keyword: 'tomato paste',
              reason: 'Canned tomato paste masks the fresh acidity of ripe native Ilocano tomatoes (kamatis).',
            },
            {
              keyword: 'sugar',
              reason: 'Adding white or brown sugar contradicts the savory-bitter balance (pait at nanam) of northern Ilocano Pakbet.',
            },
            {
              keyword: 'oyster sauce',
              reason: 'Commercial oyster sauce is a modern stir-fry shortcut not used in heirloom clay-pot Pakbet.',
            },
          ],
          sampleOnlineRecipe:
            'Easy 10-Minute Stir-Fry Pinakbet: Sauté pork in oil with 2 tbsp sweet bagoong alamang, 2 tbsp canned tomato paste, oyster sauce, and 1 tbsp brown sugar. Stir-fry mixed vegetables vigorously until coated.',
          sampleAuthenticRecipe:
            'Authentic Ilocos Pakbet: Layer crushed native garlic, ginger (laya), whole shallots (lasona), ripe kamatis, native ampalaya, tarong, and okra in a clay pot. Pour fermented bagoong monamon and simmer covered until shriveled, shaking the pot gently. Top with crispy Ilocos Bagnet.',
        },
        philosophyPrompt: {
          question:
            'Bakit mahalagang ingatan ang orihinal na lasa ng ating bayan laban sa mga komersyal na trend?',
          englishTranslation:
            'Why is it essential to safeguard the original taste of our homeland against commercialized culinary trends?',
          philosophicalLens:
            'Sa pilosopiya ng Ilocano Pakbet, ang pait ng ampalaya at alat ng bugguong ay sumasalamin sa katatagan ng tao sa harap ng hirap. Kapag ginawang matamis at instant ang lahat ng ulam, nawawala ang pagkilala sa likas na lasa ng lupa.',
        },
        fplLarawangSanaysay: {
          essayTitle:
            'Larawang-Sanaysay: Ang Sining ng Pagkakalog sa Banga at ang Pagbabago ng Pinakbet sa Kalunsuran',
          abstract:
            'Tinatampok sa sulating ito ang kaibahan ng katutubong Pakbet ng Ilocos na niluluto sa palayok (banga) laban sa mabilisang gisa sa kawali na gumagamit ng komersyal na sarsa.',
          steps: [
            {
              stepNumber: 1,
              tagalogTitle: 'Unang Hakbang: Pagpili ng Katutubong Gulay at Bagoong Monamon',
              hackMethod: 'Naka-paketeng Halo-halong Gulay at Alamang vs. Bagong Pitas na Gulay at Bugguong',
              academicCaption:
                'Gumagamit ang orihinal na Pakbet ng maliliit na katutubong ampalaya, bilog na talong, lasona, at pinaasimang isda (bagoong monamon). Sa makabagong kusina, madalas itong pinapalitan ng matamis na bagoong alamang at oyster sauce upang umangkop sa panlasang komersyal.',
              comparisonNote:
                'Ang bagoong monamon ang nagbibigay ng malalim na umami nang hindi tinatakpan ang sariwang lasa ng gulay.',
              imageUrl: IMAGES.pakbet,
            },
            {
              stepNumber: 2,
              tagalogTitle: 'Ikalawang Hakbang: Pagkakalog sa Palayok Laban sa Malakas na Paggisa',
              hackMethod: 'Mabilisang Stir-Fry sa Kawali vs. Pagkakalog sa Banga',
              academicCaption:
                'Sa halip na haluin nang paulit-ulit gamit ang sandok na nakakasira sa hubog ng gulay, maingat na kinakalog ang palayok (banga) habang nakatakip. Tinitiyak nitong buo pa rin ang bawat piraso ng talong, okra, at ampalaya kapag inihain.',
              comparisonNote:
                'Nanatiling buo ang estruktura at sustansya ng gulay sa paraang pagkakalog.',
              imageUrl: IMAGES.pakbet,
            },
            {
              stepNumber: 3,
              tagalogTitle: 'Ikatlong Hakbang: Pagtatampok ng Malutong na Bagnet sa Ibabaw',
              hackMethod: 'Paghalo ng Pork Cubes vs. Paglalagay ng Bagnet Bilang Korona ng Ulam',
              academicCaption:
                'Sa huling bahagi ng pagluluto, ipinapatong ang malulutong na hiwa ng Ilocos Bagnet sa ibabaw ng pinaimpis na gulay. Ang tekstura ng malutong na balat at malambot na gulay ay nagbibigay ng ganap na balanseng pandama sa hapag-kainan.',
              comparisonNote:
                'Isang patunay ng ugnayan ng dalawang pamanang ulam ng Rehiyon Uno.',
              imageUrl: IMAGES.bagnet,
            },
          ],
        },
      },
      {
        id: 'la-union-dinakdakan',
        name: "La Union's Dinakdakan",
        plaqueTitle: 'DINAKDAKAN',
        regionId: 'region-1',
        regionName: 'Region 1 - Ilocos Region',
        islandId: 'luzon',
        province: 'La Union',
        imageUrl: IMAGES.dinakdakan,
        shortTagline: 'Charcoal-grilled pork mask and belly tossed in a rich calamansi, ginger, and smoky onion dressing.',
        ucspHistory: {
          anthropologicalContext:
            'Originating from communal nose-to-tail feasts in La Union and Ilocos, Dinakdakan was created to honor the entire harvested animal, transforming pork mask (maskara), ears, and belly into a smoky, creamy celebratory dish.',
          culturalEvolution:
            'Traditionally emulsified with steamed pork brain (utak ng baboy) mashed with freshly squeezed calamansi juice, crushed ginger, and charcoal-grilled shallots, it represents indigenous culinary ingenuity before bottled condiments existed.',
          preservationTechnique:
            'Charcoal-grilling (inihaw) imparts antimicrobial wood smoke while acidic native calamansi juice and pungent ginger cure and brighten the rich cuts.',
          materialCulture:
            'Grilled over glowing coconut shell charcoal (uling na bao), chopped on heavy tamarind-wood chopping blocks (tadtaran), and served on banana-leaf-lined rattan bilao.',
          socialSignificance:
            'A quintessential pulutan and fiesta dish that brings neighbors together around the grill, reinforcing bayanihan and communal storytelling.',
        },
        milVerification: {
          boilingAndCuringTitle: 'Boiling & Grilling Cuts:',
          heirloomIngredients: [
            '500g pork mask (maskara) & 500g pork belly (liempo)',
            '1 tbsp rock salt & 1 tsp whole black peppercorns for boiling',
            '3 dried bay leaves',
            'Traditional Emulsifier: 1/2 cup steamed pork brain, mashed until creamy',
          ],
          fryingOrSecondaryTitle: 'Aromatics & Acid Dressing:',
          secondaryIngredients: [
            '1/4 cup freshly squeezed native calamansi juice or Sukang Iloko',
            '2 large red onions, thinly sliced',
            '2 tbsp fresh ginger (laya), julienned finely',
            '4 pcs green finger chilies (siling haba) & 3 pcs bird’s eye chilies (siling labuyo)',
          ],
          methodSteps: [
            {
              sectionTitle: '1. Parboil and Charcoal-Grill:',
              steps: [
                '1. Simmer pork mask and pork belly in water with rock salt, peppercorns, and bay leaves for 35–40 minutes until tender but firm.',
                '2. Drain, air-dry briefly, and grill directly over hot charcoal until the skin is smoky, charred at the edges, and crisp.',
                '3. Slice the grilled pork into bite-sized strips while still warm.',
              ],
            },
            {
              sectionTitle: '2. Emulsify and Toss:',
              steps: [
                '1. Whisk the mashed steamed pork brain with freshly squeezed calamansi juice, salt, and cracked black pepper until velvety.',
                '2. Toss the smoky grilled pork strips with julienned ginger, sliced red onions, and sliced chilies.',
                '3. Fold in the creamy dressing and garnish with crispy pork rinds before serving.',
              ],
            },
          ],
          sources: [
            'https://panlasangpinoy.com/dinakdakan-recipe/',
            'Yummy.ph: https://youtu.be/Ipbhb9Dts3o?si=XOA2a6qMaE9pgKa9',
          ],
          verifiedTutorials: DEFAULT_VERIFIED_TUTORIALS,
          authenticKeywords: [
            'grill',
            'charcoal',
            'calamansi',
            'ginger',
            'laya',
            'onion',
            'sibuyas',
            'chili',
            'sili',
            'maskara',
            'belly',
          ],
          shortcutFlags: [
            {
              keyword: 'mayonnaise',
              reason: 'Bottled commercial sweet mayonnaise is a modern urban substitute for the authentic savory calamansi-and-brain emulsion.',
            },
            {
              keyword: 'liquid smoke',
              reason: 'Artificial liquid smoke cannot replicate the crisp texture and aroma of real coconut-shell charcoal grilling.',
            },
            {
              keyword: 'condensed milk',
              reason: 'Sweetened milk products distort the tangy, smoky, and ginger-forward profile of La Union Dinakdakan.',
            },
          ],
          sampleOnlineRecipe:
            '15-Min No-Grill Dinakdakan: Pan-fry chopped pork belly in a non-stick skillet with 2 drops of liquid smoke. Toss in a bowl with 1 cup sweet commercial mayonnaise, 1 tbsp condensed milk, and chopped onions.',
          sampleAuthenticRecipe:
            'Authentic La Union Dinakdakan: Parboil pork maskara and belly with rock salt and bay leaves, then charcoal-grill until smoky and crisp. Toss with julienned ginger (laya), red onions, green chilies, and a tangy dressing of freshly squeezed calamansi and traditional emulsifier.',
        },
        philosophyPrompt: {
          question:
            'Bakit mahalagang ingatan ang orihinal na lasa ng ating bayan laban sa mga komersyal na trend?',
          englishTranslation:
            'Why is it essential to safeguard the original taste of our homeland against commercialized culinary trends?',
          philosophicalLens:
            'Itinuturo ng Dinakdakan ang etika ng walang-aksayang pagluluto (nose-to-tail respect) at ang halaga ng usok ng uling at sariwang luya. Ang pagpapalit nito sa matamis na komersyal na mayonesa ay nagreresulta sa pagkakapare-pareho ng lasa (homogenization of taste).',
        },
        fplLarawangSanaysay: {
          essayTitle:
            'Larawang-Sanaysay: Ang Usok ng Uling at ang Pagbabagong-Anyo ng Dinakdakan sa Makabagong Panahon',
          abstract:
            'Isang biswal at akademikong dokumentasyon kung paano binago ng komersyal na mayonesa ang orihinal na Dinakdakan ng La Union at kung paano mapananatili ang tunay nitong timpla.',
          steps: [
            {
              stepNumber: 1,
              tagalogTitle: 'Unang Hakbang: Ang Pag-iihaw sa Baga ng Bao',
              hackMethod: 'Pagpiprito sa Kawali vs. Pag-iihaw sa Baga (Inihaw)',
              academicCaption:
                'Ang esensya ng Dinakdakan ng La Union ay nagmumula sa matiyagang pag-iihaw ng pinakuluang maskara at liempo sa ibabaw ng nagbabagang uling. Sa mabilisang bersyon sa lungsod, ipiniprito na lamang ito sa kawali kaya nawawala ang katangi-tanging amoy-usok.',
              comparisonNote:
                'Ang usok mula sa uling ang nagbibigay ng lalim sa lasa na hindi kayang tumbasan ng simpleng prito.',
              imageUrl: IMAGES.dinakdakan,
            },
            {
              stepNumber: 2,
              tagalogTitle: 'Ikalawang Hakbang: Ang Pagtitimpla ng Luya, Calamansi, at Sibuyas',
              hackMethod: 'Matamis na Mayonesa vs. Maasim at Maanghang na Katutubong Timpla',
              academicCaption:
                'Sa makabagong "kitchen hack," ginagamit ang mayonesa bilang mabilis at ligtas na pampalapot ng sarsa. Gayunpaman, binabago ng matamis na mayonesa ang orihinal na karakter ng ulam kung hindi lalagyan ng sapat na kalamansi, makinis na hiwa ng luya, at siling haba.',
              comparisonNote:
                'Mahalagang panatilihin ang tapang ng luya at asim ng kalamansi kahit gumamit ng modernong alternatibo.',
              imageUrl: IMAGES.dinakdakan,
            },
            {
              stepNumber: 3,
              tagalogTitle: 'Ikatlong Hakbang: Ang Paghahain sa Hapag ng Pakikipagkapwa',
              hackMethod: 'Komersyal na Fast-Food Platter vs. Hain sa Bilao na may Dahon ng Saging',
              academicCaption:
                'Inihahain ang Dinakdakan sa bilao na sinapinan ng dahon ng saging upang pagsaluhan ng buong pamilya o komunidad. Ipinakikita nito na ang pagkain sa Kulturang Pilipino ay laging nakaugat sa pakikipagkapwa-tao.',
              comparisonNote:
                'Ang bawat hiwa ay simbolo ng pagkakabuklod sa hapag-kainan.',
              imageUrl: IMAGES.dinakdakan,
            },
          ],
        },
      },
    ],
  },

  {
    id: 'region-2',
    shortTitle: 'Region 2',
    fullName: 'Region 2 - Cagayan Valley',
    subtitle: 'Cagayan Valley & Batanes',
    islandId: 'luzon',
    ornamentType: 'fans',
    summaryBanner:
      'Region 2 culinary heritage spans the storm-swept stone islands of Batanes to the fertile river plains of Cagayan and Isabela, celebrated for ancient salt-and-fat confit preservation (Luñis), carabao milk delicacies, and robust noodle traditions.',
    dishes: [
      {
        id: 'batanes-lunis',
        name: 'Batanes Luñis',
        plaqueTitle: 'LUÑIS',
        regionId: 'region-2',
        regionName: 'Region 2 - Cagayan Valley',
        islandId: 'luzon',
        province: 'Batanes',
        imageUrl: IMAGES.lunis,
        shortTagline: 'Ancient Ivatan rock-salted pork confit slow-rendered in its own fat and stored in clay jars.',
        ucspHistory: {
          anthropologicalContext:
            'On the typhoon-swept islands of Batanes, the indigenous Ivatan people engineered stone houses (rakuh) and equally resilient food preservation techniques to survive weeks of isolation during fierce maritime storms.',
          culturalEvolution:
            'Luñis is the Ivatan precursor to adobo and confit: cubes of pork belly seasoned strictly with coarse sea salt are slow-cooked in their own rendering fat until every drop of moisture evaporates, then submerged in liquid lard inside earthenware jars (panga) where it stays edible for months without refrigeration.',
          preservationTechnique:
            'Anhydrous lipid immersion (confit in rendered pork lard) seals the salted meat from oxygen and humidity.',
          materialCulture:
            'Preserved in glazed clay jars (panga) and served alongside yellow turmeric garlic rice (supas) on woven Wakay baskets.',
          socialSignificance:
            'Represents Ivatan resilience (pakikibaka sa kalikasan) and cooperative community labor (kayvayvanan).',
        },
        milVerification: {
          boilingAndCuringTitle: 'Ivatan Heirloom Ingredients:',
          heirloomIngredients: [
            '1 kg pork belly with thick fat layer, cut into 2-inch cubes',
            '2.5 tbsp coarse Batanes sea salt (asin)',
            '1/4 cup water (only to start rendering)',
          ],
          fryingOrSecondaryTitle: 'Traditional Accompaniment:',
          secondaryIngredients: [
            'Ivatan Supas (rice cooked with fresh luyang dilaw / turmeric juice and garlic)',
            'Pickled native shallots and bird’s eye chili in cane vinegar',
          ],
          methodSteps: [
            {
              sectionTitle: '1. Salt-Rub and Slow Rendering:',
              steps: [
                '1. Rub the pork belly cubes generously with coarse sea salt and let rest for 20 minutes.',
                '2. Place pork in a heavy cauldron with a splash of water over low-medium heat.',
                '3. As the water evaporates, allow the pork fat to slowly render out over 60–75 minutes.',
              ],
            },
            {
              sectionTitle: '2. Crisp in Own Lard & Preserve:',
              steps: [
                '1. Continue cooking the pork slowly in its own rendered oil until the meat turns deep mahogany brown and crisp on the outside while fork-tender inside.',
                '2. Serve over golden turmeric rice (supas) or store submerged in its rendered lard in a sterilized jar.',
              ],
            },
          ],
          sources: [
            'https://panlasangpinoy.com/',
            'Yummy.ph: https://youtu.be/TyXobyvOUx4?si=ZQnvGOKv4rptAuYK',
          ],
          verifiedTutorials: DEFAULT_VERIFIED_TUTORIALS,
          authenticKeywords: ['sea salt', 'rock salt', 'asin', 'lard', 'fat', 'slow', 'turmeric', 'luyang dilaw', 'supas'],
          shortcutFlags: [
            {
              keyword: 'soy sauce',
              reason: 'Authentic Ivatan Luñis uses only coarse sea salt and rendered pork fat—never soy sauce or vinegar.',
            },
            {
              keyword: 'vegetable oil',
              reason: 'Adding commercial vegetable oil replaces the slow self-rendering process of authentic Luñis.',
            },
          ],
          sampleOnlineRecipe:
            'Quick Pork Lunis: Fry pork cubes in 2 cups vegetable oil with soy sauce and garlic powder for 10 minutes until brown.',
          sampleAuthenticRecipe:
            'Heirloom Ivatan Luñis: Rub pork belly cubes with coarse Batanes sea salt (asin) and slow-render in a heavy pot until submerged and crisped in its own rendered pork fat. Serve over yellow turmeric rice (supas) with luyang dilaw.',
        },
        philosophyPrompt: {
          question:
            'Bakit mahalagang ingatan ang orihinal na lasa ng ating bayan laban sa mga komersyal na trend?',
          englishTranslation:
            'Why is it essential to safeguard the original taste of our homeland against commercialized culinary trends?',
          philosophicalLens:
            'Pinatutunayan ng Luñis ng Batanes na sa dalawang sangkap lamang—karne at asin-dagat—ay makalilikha ng ulam na tumatagal sa bagyo at panahon. Ang kasimplihan ay anyo ng karunungan.',
        },
        fplLarawangSanaysay: {
          essayTitle: 'Larawang-Sanaysay: Luñis ng Batanes—Ang Siyensiya at Kultura ng Pagluluto sa Sariling Mantika',
          abstract: 'Pagsusuri sa katutubong paraan ng pagpepreserba ng karne ng mga Ivatan at ang kaugnayan nito sa heograpiya ng Batanes.',
          steps: [
            {
              stepNumber: 1,
              tagalogTitle: 'Unang Hakbang: Ang Pag-aasin Gamit ang Asin-Dagat',
              hackMethod: 'Iodized Salt at Soy Sauce vs. Magaspang na Asin-Dagat',
              academicCaption: 'Tanging magaspang na asin-dagat lamang ang ginagamit ng mga Ivatan upang hugutin ang tubig mula sa karne at ihanda ito sa mabagal na pagluluto.',
              comparisonNote: 'Walang toyo o suka ang tunay na Luñis.',
              imageUrl: IMAGES.lunis,
            },
            {
              stepNumber: 2,
              tagalogTitle: 'Ikalawang Hakbang: Mabagal na Pagpapatining ng Mantika',
              hackMethod: 'Mabilisang Deep-Fry sa Mantika vs. Slow-Rendering Confit',
              academicCaption: 'Hinahayaang matunaw ang sariling taba ng liempo sa mahinang apoy hanggang sa maluto ang laman sa sarili nitong mantika.',
              comparisonNote: 'Tumatagal nang ilang buwan ang karne kapag nakalubog sa sariling mantika sa loob ng banga.',
              imageUrl: IMAGES.lunis,
            },
          ],
        },
      },
      {
        id: 'tuguegarao-batil-patong',
        name: "Tuguegarao's Batil Patong",
        plaqueTitle: 'BATIL PATONG',
        regionId: 'region-2',
        regionName: 'Region 2 - Cagayan Valley',
        islandId: 'luzon',
        province: 'Cagayan',
        imageUrl: IMAGES.dinakdakan,
        shortTagline: 'Hand-pulled fresh miki noodles crowned with minced carabao beef, crispy chicharon, and poached egg.',
        ucspHistory: {
          anthropologicalContext:
            'Born in the bustling panciterias of Tuguegarao City, Pancit Batil Patong ("beaten egg" + "placed on top") merges Cagayan Valley’s water buffalo (carabao) ranching culture with artisanal wheat noodle craftsmanship.',
          culturalEvolution:
            'Generations of Cagayano panciteros perfected flat, springy fresh miki noodles simmered in rich beef stock, topped with a mountain of savory minced carabao meat, crushed chicharon, and a glistening poached egg alongside an egg-drop broth (batil).',
          preservationTechnique:
            'Sun-drying and alkaline kneading of local wheat noodles paired with slow-reduced bone stock.',
          materialCulture:
            'Cooked in wide iron woks over roaring wood fires and served with chopped native Cagayan shallots and calamansi.',
          socialSignificance:
            'A symbol of Cagayano pride and hospitality where every neighborhood panciteria serves as a community gathering hall.',
        },
        milVerification: {
          boilingAndCuringTitle: 'Noodles & Carabao Meat Topping:',
          heirloomIngredients: [
            '500g fresh Tuguegarao flat miki noodles',
            '300g minced carabao beef (or beef sirloin) & pork liver',
            '2 cups rich beef bone broth',
            '1 cup crushed pork chicharon / bagnet cracklings',
          ],
          fryingOrSecondaryTitle: 'Batil (Egg Broth) & Patong (Toppings):',
          secondaryIngredients: [
            '2 fresh eggs (1 poached on top, 1 whisked into boiling broth)',
            'Chopped Cagayan shallots, calamansi, and bird’s eye chili soy dip',
          ],
          methodSteps: [
            {
              sectionTitle: '1. Sauté Topping & Simmer Miki:',
              steps: [
                '1. Sauté minced carabao beef and liver with garlic, onions, and black pepper until browned; set aside.',
                '2. In the same wok, bring beef stock to a boil and cook the fresh Tuguegarao miki noodles with bean sprouts and carrots until tender.',
              ],
            },
            {
              sectionTitle: '2. Assemble Patong & Batil Soup:',
              steps: [
                '1. Mound the noodles on a platter and layer generously with the sautéed beef, liver, and crushed chicharon.',
                '2. Crown the top with a softly poached egg (patong) and serve with a side bowl of whisked egg-drop beef broth (batil).',
              ],
            },
          ],
          sources: ['https://panlasangpinoy.com/', 'Yummy.ph Culinary Archive'],
          verifiedTutorials: DEFAULT_VERIFIED_TUTORIALS,
          authenticKeywords: ['miki', 'carabao', 'beef broth', 'poached egg', 'batil', 'chicharon', 'liver'],
          shortcutFlags: [
            {
              keyword: 'instant canton',
              reason: 'Packaged instant pancit canton noodles lack the chewy alkaline bite of fresh Tuguegarao miki.',
            },
          ],
          sampleOnlineRecipe: 'Quick Batil Patong using packaged instant canton noodles and canned corned beef.',
          sampleAuthenticRecipe: 'Authentic Tuguegarao Pancit Batil Patong with fresh flat miki noodles, minced carabao beef, pork liver, chicharon, poached egg patong, and hot egg-drop batil broth.',
        },
        philosophyPrompt: {
          question: 'Bakit mahalagang ingatan ang orihinal na lasa ng ating bayan laban sa mga komersyal na trend?',
          englishTranslation: 'Why is it essential to safeguard the original taste of our homeland against commercialized culinary trends?',
          philosophicalLens: 'Ang Pancit Batil Patong ay nagpapaalala na ang kasaganaan ng lasa ay bunga ng matiyagang pagpapakulo ng sabaw at paggawa ng sariwang miki.',
        },
        fplLarawangSanaysay: {
          essayTitle: 'Larawang-Sanaysay: Ang Sining ng Pancit Batil Patong sa Tuguegarao',
          abstract: 'Pagsusuri sa pagkakaiba ng sariwang miki ng Cagayan at ng mga komersyal na instant noodles.',
          steps: [
            {
              stepNumber: 1,
              tagalogTitle: 'Unang Hakbang: Paghahanda ng Sariwang Miki at Sabaw ng Buto-Buto',
              hackMethod: 'Instant Broth Cubes vs. Pinakuluang Buto ng Kalabaw at Baka',
              academicCaption: 'Ang pundasyon ng tunay na Batil Patong ay ang malinamnam na sabaw mula sa matagal na pinakuluang buto ng baka o kalabaw na ipinapares sa sariwang miki.',
              comparisonNote: 'Hindi matutumbasan ng instant powder ang linamnam ng natural na sabaw.',
              imageUrl: IMAGES.dinakdakan,
            },
          ],
        },
      },
      {
        id: 'cagayan-igado',
        name: "Cagayan's Igado",
        plaqueTitle: 'IGADO',
        regionId: 'region-2',
        regionName: 'Region 2 - Cagayan Valley',
        islandId: 'luzon',
        province: 'Isabela & Cagayan',
        imageUrl: IMAGES.pakbet,
        shortTagline: 'Savory pork tenderloin and liver strips braised in cane vinegar, garlic, and bell peppers.',
        ucspHistory: {
          anthropologicalContext:
            'Shared across Northern Luzon’s Ilocano-speaking settlements in Cagayan Valley, Igado (from the Spanish "hígado" for liver) was designed to nourish farming communities with iron-rich organ meats.',
          culturalEvolution:
            'Unlike tomato-heavy Menudo, authentic Northern Igado uses zero tomato sauce—relying instead on native cane vinegar, garlic, bay leaves, and julienned red bell peppers.',
          preservationTechnique: 'Vinegar-braising (paksiw-sangkutsa) tenderizes and preserves pork loin and liver.',
          materialCulture: 'Braised in heavy cast-iron kaldero and served during harvest thanksgivings.',
          socialSignificance: 'A pillar of Northern Luzon town fiestas where no part of the pig goes unused.',
        },
        milVerification: {
          boilingAndCuringTitle: 'Heirloom Cuts & Marinade:',
          heirloomIngredients: [
            '500g pork tenderloin & 500g pork liver, cut into strips',
            '1/3 cup native cane vinegar (Sukang Iloko)',
            '1/4 cup soy sauce, 6 cloves crushed garlic, bay leaves, peppercorns',
          ],
          fryingOrSecondaryTitle: 'Vegetables & Garnish:',
          secondaryIngredients: ['1 cup green peas', '2 red bell peppers, cut into strips'],
          methodSteps: [
            {
              sectionTitle: '1. Marinate and Braise:',
              steps: [
                '1. Marinate pork tenderloin strips in cane vinegar, soy sauce, crushed garlic, and black pepper.',
                '2. Sear the liver strips briefly until firm and set aside so they do not overcook.',
                '3. Braise the pork tenderloin in the marinade until tender, then fold in the liver, bell peppers, and green peas.',
              ],
            },
          ],
          sources: ['https://panlasangpinoy.com/igado-recipe/'],
          verifiedTutorials: DEFAULT_VERIFIED_TUTORIALS,
          authenticKeywords: ['liver', 'tenderloin', 'vinegar', 'suka', 'garlic', 'bell pepper', 'peas'],
          shortcutFlags: [
            {
              keyword: 'tomato sauce',
              reason: 'Authentic Northern Luzon Igado does not use canned tomato sauce or ketchup (which turns it into Menudo).',
            },
          ],
          sampleOnlineRecipe: 'Quick Igado: Simmer pork and liver in 1 can sweet tomato sauce and banana ketchup.',
          sampleAuthenticRecipe: 'Authentic Northern Igado: Braise pork tenderloin and seared pork liver strips in Sukang Iloko cane vinegar, crushed garlic, black peppercorns, bay leaves, green peas, and red bell peppers—without tomato sauce.',
        },
        philosophyPrompt: {
          question: 'Bakit mahalagang ingatan ang orihinal na lasa ng ating bayan laban sa mga komersyal na trend?',
          englishTranslation: 'Why is it essential to safeguard the original taste of our homeland against commercialized culinary trends?',
          philosophicalLens: 'Ang pagkilala sa pagkakaiba ng Igado at Menudo ay pagkilala sa sariling identidad ng Hilagang Luzon.',
        },
        fplLarawangSanaysay: {
          essayTitle: 'Larawang-Sanaysay: Ang Tunay na Igado sa Hilagang Luzon',
          abstract: 'Paglilinaw sa tradisyonal na sangkap ng Igado na nakabatay sa suka at bawang sa halip na tomato sauce.',
          steps: [
            {
              stepNumber: 1,
              tagalogTitle: 'Unang Hakbang: Ang Pagbababad sa Sukang Iloko at Bawang',
              hackMethod: 'Canned Tomato Sauce vs. Sukang Iloko at Bawang',
              academicCaption: 'Ang tunay na Igado ay mapusyaw na kayumanggi mula sa suka at toyo, hindi mamula-mula sa komersyal na tomato sauce.',
              comparisonNote: 'Napananatili ng suka ang linis ng lasa ng atay at laman.',
              imageUrl: IMAGES.pakbet,
            },
          ],
        },
      },
    ],
  },

  {
    id: 'region-3',
    shortTitle: 'Region 3',
    fullName: 'Region 3 - Central Luzon',
    subtitle: 'Central Luzon (Culinary Capital)',
    islandId: 'luzon',
    ornamentType: 'mask',
    summaryBanner:
      'Known as the Rice Granary and Culinary Capital of the Philippines, Region 3 blends Kapampangan, Bulakenyo, and Novo Ecijano mastery of slow curing, fermentation, and rich heirloom sauces.',
    dishes: [
      {
        id: 'pampanga-tocino',
        name: "Pampanga's Tocino",
        plaqueTitle: 'TOCINO',
        regionId: 'region-3',
        regionName: 'Region 3 - Central Luzon',
        islandId: 'luzon',
        province: 'Pampanga',
        imageUrl: IMAGES.tocino,
        shortTagline: 'Heirloom Kapampangan Pindang Babi cured with sea salt, muscovado sugar, garlic, and natural annatto.',
        ucspHistory: {
          anthropologicalContext:
            'Known originally in Kapampangan as "Pindang Babi," heirloom Tocino evolved from indigenous fermentation and salt-sugar curing methods in the sugarcane-rich plains of Pampanga.',
          culturalEvolution:
            'Before synthetic red food coloring and chemical nitrates (salitre) were introduced by industrial meatpackers, Kapampangan matriarchs cured thinly sliced pork kasim for three days in coarse salt, native garlic, cane vinegar, and raw muscovado sugar tinted naturally with annatto seeds (atsuete).',
          preservationTechnique:
            'Osmotic sugar-and-salt curing accompanied by mild lactic fermentation (pindang) tenderizes the pork naturally.',
          materialCulture:
            'Cured in stoneware crocks and caramelized slowly in cast-iron skillets (kawali) with water until the rendered fat glazes the meat.',
          socialSignificance:
            'A cornerstone of the Filipino breakfast table (Tosilog) and a testament to Kapampangan culinary artistry.',
        },
        milVerification: {
          boilingAndCuringTitle: 'Heirloom Kapampangan Cure:',
          heirloomIngredients: [
            '1 kg pork shoulder (kasim), sliced 1/4-inch thick',
            '1/2 cup raw muscovado or brown cane sugar',
            '1.5 tbsp coarse rock salt',
            '6 cloves native garlic, finely pounded',
            '2 tbsp annatto seed (atsuete) infusion for natural color',
            '2 tbsp native cane vinegar',
          ],
          fryingOrSecondaryTitle: 'Traditional Caramelization:',
          secondaryIngredients: [
            '1/2 cup water for simmering before fat rendering',
            'Served with sinangag (garlic rice) and spiced cane vinegar',
          ],
          methodSteps: [
            {
              sectionTitle: '1. Curing (Pindang Method):',
              steps: [
                '1. Rub pork slices thoroughly with coarse salt, pounded garlic, cane vinegar, muscovado sugar, and natural atsuete infusion.',
                '2. Stack neatly in a covered container and cure in the cool pantry or refrigerator for 2 to 3 days.',
              ],
            },
            {
              sectionTitle: '2. Slow Simmer & Glaze:',
              steps: [
                '1. Place cured pork in a pan with 1/2 cup water and simmer over medium heat until water evaporates and meat is tender.',
                '2. Lower the heat and let the pork slowly caramelize in its own rendered fat until glossy and slightly charred at the edges.',
              ],
            },
          ],
          sources: [
            'https://panlasangpinoy.com/homemade-pork-tocino-recipe/',
            'Yummy.ph: https://youtu.be/qVCfP45O_qg?si=CmIokuOgRL3hNIw8',
          ],
          verifiedTutorials: DEFAULT_VERIFIED_TUTORIALS,
          authenticKeywords: ['kasim', 'salt', 'garlic', 'atsuete', 'annatto', 'vinegar', 'simmer', 'caramelize'],
          shortcutFlags: [
            {
              keyword: 'red food coloring',
              reason: 'Synthetic neon-red dye replaces natural annatto seed (atsuete) infusion.',
            },
            {
              keyword: 'salitre',
              reason: 'Prague powder / chemical nitrates are industrial additives not needed in traditional home-cured Kapampangan Pindang.',
            },
            {
              keyword: 'pineapple soda',
              reason: 'Using commercial soda is a modern shortcut for cane vinegar and muscovado curing.',
            },
          ],
          sampleOnlineRecipe:
            'Instant 30-Minute Pork Tocino: Mix pork slices with 1 cup pineapple soda, 1 tsp Prague powder (salitre), neon red food coloring, and white sugar. Fry immediately in oil!',
          sampleAuthenticRecipe:
            'Heirloom Pampanga Tocino (Pindang Babi): Cure sliced pork kasim for 3 days with coarse rock salt, pounded native garlic, cane vinegar, muscovado sugar, and natural atsuete infusion. Simmer in water until tender and caramelize slowly in its own rendered fat.',
        },
        philosophyPrompt: {
          question:
            'Bakit mahalagang ingatan ang orihinal na lasa ng ating bayan laban sa mga komersyal na trend?',
          englishTranslation:
            'Why is it essential to safeguard the original taste of our homeland against commercialized culinary trends?',
          philosophicalLens:
            'Ang Pindang Babi ng Pampanga ay nagtuturo na ang tunay na tamis at lambot ay nagmumula sa pasensya ng pagbababad at natural na atsuete—hindi sa kemikal na pampakulay.',
        },
        fplLarawangSanaysay: {
          essayTitle:
            'Larawang-Sanaysay: Mula Pindang Babi Tungo sa Komersyal na Tocino—Isang Pagsusuring Kultural',
          abstract:
            'Inilalahad sa larawang-sanaysay na ito ang proseso ng paggawa ng tradisyonal na Tocino ng Pampanga gamit ang natural na sangkap.',
          steps: [
            {
              stepNumber: 1,
              tagalogTitle: 'Unang Hakbang: Ang Natural na Kulay mula sa Atsuete',
              hackMethod: 'Synthetic Red Food Dye vs. Katas ng Buto ng Atsuete',
              academicCaption:
                'Sa tradisyonal na kusina ng Pampanga, ang kulay ng Pindang Babi ay nagmumula sa katas ng atsuete at pulang asukal sa tubo, hindi sa matingkad na kemikal na pampakulay.',
              comparisonNote: 'Mas ligtas at mas mabango ang natural na atsuete.',
              imageUrl: IMAGES.tocino,
            },
            {
              stepNumber: 2,
              tagalogTitle: 'Ikalawang Hakbang: Pagpapakulo sa Tubig Bago Iprito sa Sariling Taba',
              hackMethod: 'Direktang Pagpiprito sa Mantika vs. Pagpapakulo at Pagkakaramelisa',
              academicCaption:
                'Pinakukuluan muna sa kaunting tubig ang binabad na karne upang lumambot nang husto bago ito hayaang mag-caramelize sa sarili nitong mantika.',
              comparisonNote: 'Ito ang sikreto sa malambot at makintab na Pampanga Tocino.',
              imageUrl: IMAGES.tocino,
            },
          ],
        },
      },
      {
        id: 'pampanga-sisig',
        name: "Pampanga's Sisig Matua",
        plaqueTitle: 'SISIG',
        regionId: 'region-3',
        regionName: 'Region 3 - Central Luzon',
        islandId: 'luzon',
        province: 'Angeles City, Pampanga',
        imageUrl: IMAGES.dinakdakan,
        shortTagline: 'Charcoal-grilled pork cheeks and ears dressed in calamansi, chicken liver, and chopped onions.',
        ucspHistory: {
          anthropologicalContext:
            'Historically documented in the 1732 Kapampangan dictionary of Fr. Diego Bergaño as a sour green papaya or guava salad ("mamisig"), Sisig evolved in Angeles City under Aling Lucing (Lucia Cunanan) in the 1970s into a sizzling charcoal-grilled pork delicacy.',
          culturalEvolution:
            'Authentic Kapampangan Sisig balances sourness (calamansi and cane vinegar), smokiness (charcoal-grilled pig ears and jowls), and creaminess (roast chicken liver), never raw egg or sweet mayonnaise.',
          preservationTechnique: 'Boiling followed by wood-charcoal grilling and acid dressing.',
          materialCulture: 'Served on a cast-iron sizzling plate heated over glowing embers.',
          socialSignificance: 'Recognized globally as an icon of Kapampangan culinary genius and resourcefulness.',
        },
        milVerification: {
          boilingAndCuringTitle: 'Authentic Kapampangan Ingredients:',
          heirloomIngredients: [
            '500g pig ears & 500g pork jowl/cheeks (maskara)',
            '150g grilled chicken liver, mashed',
            '1/3 cup freshly squeezed calamansi juice & 2 tbsp cane vinegar',
          ],
          fryingOrSecondaryTitle: 'Aromatics:',
          secondaryIngredients: ['3 large red onions, finely diced', '5 pcs siling labuyo, salt, and freshly cracked black pepper'],
          methodSteps: [
            {
              sectionTitle: '1. Boil, Grill, and Chop:',
              steps: [
                '1. Boil pig ears and jowls with salt, peppercorns, and bay leaves until tender.',
                '2. Grill over hot charcoal until blistered and smoky, then chop finely.',
                '3. Toss with mashed grilled chicken liver, calamansi juice, diced onions, and chilies on a hot cast-iron plate.',
              ],
            },
          ],
          sources: ['https://panlasangpinoy.com/pork-sisig/'],
          verifiedTutorials: DEFAULT_VERIFIED_TUTORIALS,
          authenticKeywords: ['calamansi', 'chicken liver', 'grill', 'charcoal', 'onion', 'jowl', 'maskara'],
          shortcutFlags: [
            {
              keyword: 'mayonnaise',
              reason: 'Kapampangan culinary elders emphasize that authentic Sisig uses mashed chicken liver and calamansi, not mayonnaise.',
            },
          ],
          sampleOnlineRecipe: 'Quick Sisig: Fry chopped pork belly and top with 1/2 cup mayonnaise and a raw egg.',
          sampleAuthenticRecipe: 'Authentic Angeles City Sisig: Boil and charcoal-grill pork jowls and ears, chop finely, and toss with mashed grilled chicken liver, freshly squeezed calamansi juice, diced red onions, and chilies.',
        },
        philosophyPrompt: {
          question: 'Bakit mahalagang ingatan ang orihinal na lasa ng ating bayan laban sa mga komersyal na trend?',
          englishTranslation: 'Why is it essential to safeguard the original taste of our homeland against commercialized culinary trends?',
          philosophicalLens: 'Ang asim ng calamansi sa Sisig ang nagbibigay-pugay sa ika-18 siglong pinagmulan nito sa Pampanga.',
        },
        fplLarawangSanaysay: {
          essayTitle: 'Larawang-Sanaysay: Ang Ebolusyon ng Sisig Matua sa Angeles, Pampanga',
          abstract: 'Pagtalakay sa pagbabago ng Sisig mula sa maasim na prutas tungo sa inihaw na maskara sa mainit na bakal.',
          steps: [
            {
              stepNumber: 1,
              tagalogTitle: 'Unang Hakbang: Ang Tunay na Pampalapot—Inihaw na Atay ng Manok',
              hackMethod: 'Mayonesa at Hilaw na Itlog vs. Inihaw na Atay at Calamansi',
              academicCaption: 'Ginagamit sa Pampanga ang inihaw na atay ng manok at katas ng kalamansi upang bigyan ng linamnam ang tinadtad na maskara.',
              comparisonNote: 'Napananatili nito ang balanseng asim at usok ng uling.',
              imageUrl: IMAGES.dinakdakan,
            },
          ],
        },
      },
      {
        id: 'bulacan-kare-kare',
        name: "Bulacan's Kare-Kare",
        plaqueTitle: 'KARE-KARE',
        regionId: 'region-3',
        regionName: 'Region 3 - Central Luzon',
        islandId: 'luzon',
        province: 'Bulacan & Pampanga',
        imageUrl: IMAGES.pakbet,
        shortTagline: 'Slow-braised oxtail and tripe in freshly stone-ground roasted peanuts and toasted heirloom rice.',
        ucspHistory: {
          anthropologicalContext:
            'Rooted in pre-colonial peanut and toasted-rice thickening traditions alongside Pampanga and Bulacan fiesta kitchens, Kare-Kare showcases the patience of Central Luzon cooking.',
          culturalEvolution:
            'Before commercial peanut butter jars existed, cooks roasted raw shelled peanuts and glutinous rice (malagkit) in a dry clay pan, then ground them by hand on a stone mortar (galilingan) with annatto oil.',
          preservationTechnique: 'Slow collagen extraction and pairing with fermented shrimp paste (bagoong).',
          materialCulture: 'Simmered and served in a wide clay palayok to retain heat at the fiesta table.',
          socialSignificance: 'Incomplete without its humble counterpart, bagoong alamang—symbolizing how rich and humble elements complete one another in Filipino society.',
        },
        milVerification: {
          boilingAndCuringTitle: 'Heirloom Sauce & Cuts:',
          heirloomIngredients: [
            '1 kg oxtail (buntot ng baka) & beef tripe, slow-simmered until tender',
            '1.5 cups freshly roasted peanuts, ground into paste',
            '1/3 cup toasted glutinous rice (bigas na malagkit), ground into powder',
            '3 tbsp annatto (atsuete) oil, garlic, and onions',
          ],
          fryingOrSecondaryTitle: 'Vegetables & Pairing:',
          secondaryIngredients: ['Banana heart (puso ng saging), eggplant, sitaw, pechay, and sautéed bagoong alamang'],
          methodSteps: [
            {
              sectionTitle: '1. Roast, Grind, and Simmer:',
              steps: [
                '1. Simmer oxtail in water with onions and peppercorns until fork-tender; reserve the rich stock.',
                '2. Sauté garlic and onions in golden atsuete oil, then whisk in the freshly ground roasted peanuts, toasted rice powder, and oxtail stock.',
                '3. Simmer with blanched banana heart, sitaw, eggplant, and pechay. Serve with savory bagoong on the side.',
              ],
            },
          ],
          sources: ['https://panlasangpinoy.com/kare-kare-recipe/'],
          verifiedTutorials: DEFAULT_VERIFIED_TUTORIALS,
          authenticKeywords: ['roasted peanuts', 'toasted rice', 'atsuete', 'oxtail', 'puso ng saging', 'bagoong'],
          shortcutFlags: [
            {
              keyword: 'sweet peanut butter',
              reason: 'Commercial sweet spreadable peanut butter makes the sauce overly sugary compared to freshly ground roasted peanuts and toasted rice.',
            },
          ],
          sampleOnlineRecipe: '15-Minute Kare-Kare using 1 jar sweet commercial peanut butter and instant powder mix.',
          sampleAuthenticRecipe: 'Heirloom Kare-Kare made with slow-simmered oxtail, freshly roasted ground peanuts, toasted glutinous rice flour, golden atsuete oil, puso ng saging, and savory bagoong.',
        },
        philosophyPrompt: {
          question: 'Bakit mahalagang ingatan ang orihinal na lasa ng ating bayan laban sa mga komersyal na trend?',
          englishTranslation: 'Why is it essential to safeguard the original taste of our homeland against commercialized culinary trends?',
          philosophicalLens: 'Ang tambalan ng Kare-Kare at Bagoong ay pilosopikal na paalala na ang pagiging ganap ng lasa ay nasa pagtutulungan ng magkaibang sangkap.',
        },
        fplLarawangSanaysay: {
          essayTitle: 'Larawang-Sanaysay: Ang Giniling na Mani at Sinangag na Bigas sa Tradisyonal na Kare-Kare',
          abstract: 'Pagsusuri sa kahalagahan ng sinangag na bigas at bagong bayong mani sa paglikha ng tunay na Kare-Kare.',
          steps: [
            {
              stepNumber: 1,
              tagalogTitle: 'Unang Hakbang: Pagsangag at Paggiling ng Mani at Malagkit',
              hackMethod: 'Commercial Sweet Peanut Butter vs. Bagong Sangag na Mani at Bigas',
              academicCaption: 'Ang bango at lapot ng pamanang Kare-Kare ay nagmumula sa sinangag na mani at giniling na bigas na niluluto sa langis ng atsuete.',
              comparisonNote: 'Hindi sobrang tamis ang tunay na Kare-Kare.',
              imageUrl: IMAGES.pakbet,
            },
          ],
        },
      },
    ],
  },

  {
    id: 'region-4',
    shortTitle: 'Region 4',
    fullName: 'Region 4-A - CALABARZON',
    subtitle: 'CALABARZON (Southern Tagalog)',
    islandId: 'luzon',
    ornamentType: 'pinwheels',
    summaryBanner:
      'Region 4-A (Cavite, Laguna, Batangas, Rizal, and Quezon) is renowned for highland cattle broths, coconut cream reductions, and festival noodle dishes served on fragrant banana leaves.',
    dishes: [
      {
        id: 'batangas-bulalo',
        name: "Batangas Bulalo",
        plaqueTitle: 'BULALO',
        regionId: 'region-4',
        regionName: 'Region 4-A - CALABARZON',
        islandId: 'luzon',
        province: 'Batangas',
        imageUrl: IMAGES.lunis,
        shortTagline: 'Crystal-clear beef shank and bone-marrow broth slow-simmered with whole peppercorns and native corn.',
        ucspHistory: {
          anthropologicalContext:
            'Centered in the cool volcanic highlands of Lipa, Tanauan, and Mahogany Market in Tagaytay/Batangas, Bulalo emerged from Southern Tagalog cattle ranching.',
          culturalEvolution:
            'Authentic Batangas Bulalo relies on hours of patient skimming over wood fire so the bone marrow (utak ng buto) infuses a clear, golden broth seasoned only with patis, rock salt, onions, and cracked black pepper.',
          preservationTechnique: 'Long thermal extraction of collagen and marrow.',
          materialCulture: 'Simmered in deep aluminum or earthenware cauldrons (kawa) over coffee-wood embers.',
          socialSignificance: 'A comforting communal broth shared after farming, markets, and long journeys.',
        },
        milVerification: {
          boilingAndCuringTitle: 'Broth & Beef Shank:',
          heirloomIngredients: [
            '1.5 kg beef shank with bone marrow (bulalo)',
            '2 tbsp whole black peppercorns & 2 large quartered onions',
            '2 tbsp Batangas fish sauce (patis) & coarse sea salt',
          ],
          fryingOrSecondaryTitle: 'Highland Vegetables:',
          secondaryIngredients: ['3 ears sweet native corn, halved', 'Pechay Tagalog, cabbage, and calamansi-patis-sili dip'],
          methodSteps: [
            {
              sectionTitle: '1. Blanch and Slow-Simmer:',
              steps: [
                '1. Blanch beef shanks briefly and rinse to remove impurities for a crystal-clear broth.',
                '2. Simmer beef shanks with onions and whole peppercorns for 3 to 4 hours until fork-tender, then add native corn and pechay.',
              ],
            },
          ],
          sources: ['https://panlasangpinoy.com/bulalo-stewed-beef-shank/'],
          verifiedTutorials: DEFAULT_VERIFIED_TUTORIALS,
          authenticKeywords: ['beef shank', 'bone marrow', 'peppercorn', 'patis', 'corn', 'pechay', 'simmer'],
          shortcutFlags: [
            {
              keyword: 'artificial beef cube',
              reason: 'Relying solely on bouillon cubes without real bone-marrow simmering produces a cloudy, overly salty broth.',
            },
          ],
          sampleOnlineRecipe: '10-Minute Bulalo Soup: Boil thinly sliced beef in water with 3 artificial beef cubes and MSG.',
          sampleAuthenticRecipe: 'Authentic Batangas Bulalo: Slow-simmer beef shank with bone marrow, whole black peppercorns, onions, and patis for 3 hours until crystal-clear and rich, then add sweet native corn and pechay.',
        },
        philosophyPrompt: {
          question: 'Bakit mahalagang ingatan ang orihinal na lasa ng ating bayan laban sa mga komersyal na trend?',
          englishTranslation: 'Why is it essential to safeguard the original taste of our homeland against commercialized culinary trends?',
          philosophicalLens: 'Itinuturo ng Bulalo ng Batangas na ang linaw at lalim ng sabaw ay hindi minamadali.',
        },
        fplLarawangSanaysay: {
          essayTitle: 'Larawang-Sanaysay: Ang Mabagal na Pagpapakulo ng Bulalo sa Batangas',
          abstract: 'Pagsusuri sa sining ng pagpapalambot ng bulalo sa kawa.',
          steps: [
            {
              stepNumber: 1,
              tagalogTitle: 'Unang Hakbang: Ang Paglilinis at Mabagal na Pagpapakulo ng Buto',
              hackMethod: 'Bouillon Cubes vs. Apat na Oras na Pagpapakulo ng Bone Marrow',
              academicCaption: 'Ang tunay na linamnam ng Bulalo ay galing sa katas ng buto at utak nito na dahan-dahang lumalabas sa mahinang apoy.',
              comparisonNote: 'Malinaw ngunit malasa ang tunay na sabaw ng Batangas.',
              imageUrl: IMAGES.lunis,
            },
          ],
        },
      },
      {
        id: 'quezon-pancit-habhab',
        name: "Quezon's Pancit Habhab",
        plaqueTitle: 'PANCIT HABHAB',
        regionId: 'region-4',
        regionName: 'Region 4-A - CALABARZON',
        islandId: 'luzon',
        province: 'Lucban, Quezon',
        imageUrl: IMAGES.dinakdakan,
        shortTagline: 'Lucban miki noodles served on a square of banana leaf and eaten directly without utensils.',
        ucspHistory: {
          anthropologicalContext: 'Central to the vibrant Pahiyas Festival in Lucban, Quezon honoring San Isidro Labrador, Pancit Habhab is named after the onomatopoeic sound of slurping noodles directly off a palm-sized banana leaf.',
          culturalEvolution: 'Designed as an eco-friendly, zero-utensil street and festival meal for farmers and pilgrims, splashed with aromatic coconut cane vinegar (sukang paombong/niyog).',
          preservationTechnique: 'Sun-dried Lucban wheat miki braised in pork broth and soy sauce.',
          materialCulture: 'Served on hand-cut squares of wilted banana leaf (dahon ng saging).',
          socialSignificance: 'Eliminates social hierarchy—everyone eats with the same humble banana leaf.',
        },
        milVerification: {
          boilingAndCuringTitle: 'Lucban Miki & Pork:',
          heirloomIngredients: ['500g dried Lucban miki noodles', '250g pork belly & pork liver, sliced thinly', '2 cups rich pork stock'],
          fryingOrSecondaryTitle: 'Vegetables & Vinegar Splash:',
          secondaryIngredients: ['Sayote, carrots, pechay, and spiced coconut vinegar (suka) drizzled before eating'],
          methodSteps: [
            {
              sectionTitle: '1. Stir-Fry and Serve on Banana Leaf:',
              steps: [
                '1. Sauté garlic, onions, pork belly, and liver until fragrant, then add pork stock and Lucban miki.',
                '2. Toss with julienned sayote and pechay, plate on a banana leaf square, and drizzle with native coconut vinegar.',
              ],
            },
          ],
          sources: ['https://panlasangpinoy.com/pancit-habhab-recipe/'],
          verifiedTutorials: DEFAULT_VERIFIED_TUTORIALS,
          authenticKeywords: ['lucban', 'miki', 'banana leaf', 'vinegar', 'suka', 'sayote', 'pork belly'],
          shortcutFlags: [
            {
              keyword: 'calamansi instead of vinegar',
              reason: 'In Lucban, Quezon, authentic Pancit Habhab is splashed with spiced coconut vinegar rather than calamansi.',
            },
          ],
          sampleOnlineRecipe: 'Pancit Habhab served on plastic plates with calamansi.',
          sampleAuthenticRecipe: 'Authentic Lucban Pancit Habhab cooked with Lucban miki, pork belly, sayote, served on a banana leaf square and drizzled with spiced coconut vinegar.',
        },
        philosophyPrompt: {
          question: 'Bakit mahalagang ingatan ang orihinal na lasa ng ating bayan laban sa mga komersyal na trend?',
          englishTranslation: 'Why is it essential to safeguard the original taste of our homeland against commercialized culinary trends?',
          philosophicalLens: 'Ang pagkain ng Pancit Habhab sa dahon ng saging ay paalala ng ating malapit na ugnayan sa kalikasan.',
        },
        fplLarawangSanaysay: {
          essayTitle: 'Larawang-Sanaysay: Pancit Habhab at ang Tradisyon ng Pahiyas sa Lucban',
          abstract: 'Dokumentasyon ng kultura ng pagkain nang walang kubyertos gamit ang dahon ng saging.',
          steps: [
            {
              stepNumber: 1,
              tagalogTitle: 'Unang Hakbang: Ang Paghahain sa Dahon ng Saging at Pagpatak ng Suka',
              hackMethod: 'Styrofoam Cup vs. Dahon ng Saging at Sukang Niyog',
              academicCaption: 'Ang init ng bagong lutong Pancit Habhab ay nagpapalabas ng natural na bango ng dahon ng saging kapag pinatakan ng suka.',
              comparisonNote: 'Makakalikasan at tapat sa tradisyon ng Quezon.',
              imageUrl: IMAGES.dinakdakan,
            },
          ],
        },
      },
      {
        id: 'laguna-kinulob',
        name: "Laguna's Kinulob na Itik",
        plaqueTitle: 'KINULOB NA ITIK',
        regionId: 'region-4',
        regionName: 'Region 4-A - CALABARZON',
        islandId: 'luzon',
        province: 'Victoria, Laguna',
        imageUrl: IMAGES.bagnet,
        shortTagline: 'Whole duck slow-braised in aromatic spices and deep-fried until golden and crisp.',
        ucspHistory: {
          anthropologicalContext: 'Originating along the duck-farming lakeshore towns of Victoria, Laguna de Bay, Kinulob ("covered and steamed/braised") turns tough native Pateros-Laguna ducks into succulent feast fare.',
          culturalEvolution: 'Generations perfected a slow covered braise with cane vinegar, peppercorns, onions, and star anise before flash-frying to crisp the skin.',
          preservationTechnique: 'Covered spice-braising followed by high-heat crisp rendering.',
          materialCulture: 'Cooked in heavy covered talyasi vats.',
          socialSignificance: 'Celebrated annually during the Itik Festival of Victoria, Laguna.',
        },
        milVerification: {
          boilingAndCuringTitle: 'Whole Duck Braise:',
          heirloomIngredients: ['1 whole native duck (itik), cleaned', '1/2 cup cane vinegar, soy sauce, garlic, onions, bay leaves'],
          fryingOrSecondaryTitle: 'Crisping:',
          secondaryIngredients: ['Cooking oil for deep-frying until golden-brown'],
          methodSteps: [
            {
              sectionTitle: '1. Covered Braise (Kulob) & Crisp:',
              steps: [
                '1. Simmer whole duck tightly covered (kinulob) in aromatics and vinegar for 90 minutes until tender.',
                '2. Air-dry thoroughly, then deep-fry until the duck skin is golden and crackling.',
              ],
            },
          ],
          sources: ['https://panlasangpinoy.com/'],
          verifiedTutorials: DEFAULT_VERIFIED_TUTORIALS,
          authenticKeywords: ['duck', 'itik', 'vinegar', 'garlic', 'bay leaves', 'deep-fry', 'kinulob'],
          shortcutFlags: [
            {
              keyword: 'batter coating',
              reason: 'Authentic Kinulob na Itik is fried bare after spice-braising so the natural duck skin crisps cleanly.',
            },
          ],
          sampleOnlineRecipe: 'Breaded Fried Duck using flour batter and instant gravy.',
          sampleAuthenticRecipe: 'Authentic Victoria Laguna Kinulob na Itik: Slow-braise whole duck tightly covered in cane vinegar, garlic, peppercorns, and bay leaves until tender, air-dry, and deep-fry bare until golden and crisp.',
        },
        philosophyPrompt: {
          question: 'Bakit mahalagang ingatan ang orihinal na lasa ng ating bayan laban sa mga komersyal na trend?',
          englishTranslation: 'Why is it essential to safeguard the original taste of our homeland against commercialized culinary trends?',
          philosophicalLens: 'Ang Kinulob na Itik ay bunga ng ugnayan ng mga mamamayan sa Lawa ng Laguna.',
        },
        fplLarawangSanaysay: {
          essayTitle: 'Larawang-Sanaysay: Ang Sining ng Kinulob na Itik sa Baybayin ng Laguna',
          abstract: 'Pagsusuri sa paraang pagkukulob upang mapalambot at mapabango ang katutubong itik.',
          steps: [
            {
              stepNumber: 1,
              tagalogTitle: 'Unang Hakbang: Ang Pagkukulob sa Sangkap at Suka',
              hackMethod: 'Mabilisang Prito vs. Matagal na Pagkukulob',
              academicCaption: 'Tinatakpan nang mahigpit ang kaldero upang kulubin ang itik sa usok ng bawang, suka, at laurel bago ito iprito.',
              comparisonNote: 'Tinitiyak nitong malambot ang laman hanggang sa buto.',
              imageUrl: IMAGES.bagnet,
            },
          ],
        },
      },
    ],
  },

  // ==================== VISAYAS ====================
  {
    id: 'region-6',
    shortTitle: 'Region 6',
    fullName: 'Region 6 - Western Visayas',
    subtitle: 'Western Visayas (Panay & Guimaras)',
    islandId: 'visayas',
    ornamentType: 'mask',
    summaryBanner:
      'Western Visayas is celebrated for warm, soulful Ilonggo hospitality (malambing), featuring slow-simmered bone broths sweetened with native muscovado, smoky annatto-basted grilled meats, and indigenous souring fruits like batwan.',
    dishes: [
      {
        id: 'iloilo-batchoy',
        name: "Iloilo's La Paz Batchoy",
        plaqueTitle: 'LA PAZ BATCHOY',
        regionId: 'region-6',
        regionName: 'Region 6 - Western Visayas',
        islandId: 'visayas',
        province: 'Iloilo City',
        imageUrl: IMAGES.lunis,
        shortTagline: 'Rich beef and pork bone broth infused with shrimp paste (guinamos), fresh miki, and chicharon.',
        ucspHistory: {
          anthropologicalContext: 'Created in 1938 in the La Paz public market of Iloilo City by Federico Guillergan Sr., La Paz Batchoy reflects the vibrant market trade of Panay Island.',
          culturalEvolution: 'Its signature depth comes from simmering beef bone marrow, pork organs, and a secretspoonful of Ilonggo fermented shrimp paste (guinamos) in the stock.',
          preservationTechnique: 'Slow-simmered collagen stock seasoned with fermented guinamos.',
          materialCulture: 'Served steaming hot in ceramic bowls straight from massive market cauldrons.',
          socialSignificance: 'A democratic market comfort food enjoyed by stevedores, students, and families alike.',
        },
        milVerification: {
          boilingAndCuringTitle: 'Heirloom Broth & Meats:',
          heirloomIngredients: ['Beef marrow bones, pork belly, spleen, and liver', '1 tbsp Ilonggo guinamos (fermented shrimp paste) dissolved in stock', 'Fresh round miki noodles'],
          fryingOrSecondaryTitle: 'Garnishes:',
          secondaryIngredients: ['Abundant crushed pork chicharon, toasted garlic, scallions, and raw egg yolk'],
          methodSteps: [
            {
              sectionTitle: '1. Simmer Guinamos-Infused Bone Stock:',
              steps: [
                '1. Simmer beef bones and pork meats for 3 hours with dissolved Ilonggo guinamos for authentic umami.',
                '2. Blanch fresh miki noodles, top with sliced meats, crushed chicharon, and toasted garlic, then ladle boiling broth over top.',
              ],
            },
          ],
          sources: ['https://panlasangpinoy.com/la-paz-batchoy/'],
          verifiedTutorials: DEFAULT_VERIFIED_TUTORIALS,
          authenticKeywords: ['guinamos', 'miki', 'chicharon', 'marrow', 'liver', 'garlic'],
          shortcutFlags: [{ keyword: 'instant cup noodles', reason: 'Instant dehydrated seasoning lacks the guinamos-infused bone marrow stock of La Paz Market.' }],
          sampleOnlineRecipe: 'Quick Batchoy using instant noodle soup pack and hotdog slices.',
          sampleAuthenticRecipe: 'Authentic Iloilo La Paz Batchoy: Slow-simmer beef marrow bones and pork with Ilonggo guinamos, serve over fresh round miki noodles with liver, crushed chicharon, and toasted garlic.',
        },
        philosophyPrompt: {
          question: 'Bakit mahalagang ingatan ang orihinal na lasa ng ating bayan laban sa mga komersyal na trend?',
          englishTranslation: 'Why is it essential to safeguard the original taste of our homeland against commercialized culinary trends?',
          philosophicalLens: 'Ang guinamos sa sabaw ng Batchoy ay patunay ng henyo ng mga kusinerong Ilonggo sa pamilihang-bayan.',
        },
        fplLarawangSanaysay: {
          essayTitle: 'Larawang-Sanaysay: Ang Sikreto ng La Paz Batchoy sa Pamilihan ng Iloilo',
          abstract: 'Pagsusuri sa paggamit ng guinamos at bone marrow sa paggawa ng tunay na La Paz Batchoy.',
          steps: [
            {
              stepNumber: 1,
              tagalogTitle: 'Unang Hakbang: Ang Paghahalo ng Guinamos sa Sabaw ng Buto',
              hackMethod: 'Instant Pork Powder vs. Sabaw na may Guinamos',
              academicCaption: 'Ang natatanging linamnam ng La Paz Batchoy ay nagmumula sa kaunting guinamos na inihahalo habang pinakukuluan ang buto ng baka at baboy.',
              comparisonNote: 'Nagbibigay ito ng lalim ng lasa na tatak-Ilonggo.',
              imageUrl: IMAGES.lunis,
            },
          ],
        },
      },
      {
        id: 'ilonggo-kbl',
        name: "Iloilo's KBL (Kadyos, Baboy, Langka)",
        plaqueTitle: 'KBL ILOILO',
        regionId: 'region-6',
        regionName: 'Region 6 - Western Visayas',
        islandId: 'visayas',
        province: 'Iloilo & Antique',
        imageUrl: IMAGES.pakbet,
        shortTagline: 'Pigeon peas, smoky pork hock, and unripe jackfruit soured with native batwan fruit.',
        ucspHistory: {
          anthropologicalContext: 'KBL showcases three indigenous pillars of Panay agriculture: black pigeon peas (kadyos), smoky grilled pork hock (pata), and young green jackfruit (langka).',
          culturalEvolution: 'Its unmistakable tartness comes exclusively from batwan (Garcinia binucao), an endemic Visayan souring fruit.',
          preservationTechnique: 'Sun-dried pigeon peas and wood-smoked pork hocks.',
          materialCulture: 'Simmered in earthen pots over wood embers.',
          socialSignificance: 'The ultimate homecoming dish for every Ilonggo family.',
        },
        milVerification: {
          boilingAndCuringTitle: 'Core KBL Ingredients:',
          heirloomIngredients: ['1 kg smoky pork hock (pata)', '2 cups fresh or dried kadyos (pigeon peas)', '3 cups cubed young green jackfruit (langka)', '5 pcs native batwan fruit (for souring)'],
          fryingOrSecondaryTitle: 'Aromatics:',
          secondaryIngredients: ['Lemongrass (tanglad) bundle, onions, garlic, and patis'],
          methodSteps: [
            {
              sectionTitle: '1. Simmer Pata, Kadyos, and Batwan:',
              steps: [
                '1. Char pork hock briefly over coals for smokiness, then simmer with lemongrass and kadyos until tender.',
                '2. Add green jackfruit and bruised batwan fruit, simmering until the broth turns a rich, tangy purple-brown.',
              ],
            },
          ],
          sources: ['https://panlasangpinoy.com/kbl-kadyos-baboy-langka/'],
          verifiedTutorials: DEFAULT_VERIFIED_TUTORIALS,
          authenticKeywords: ['kadyos', 'langka', 'batwan', 'tanglad', 'lemongrass', 'pata'],
          shortcutFlags: [{ keyword: 'citric acid powder', reason: 'Artificial souring packets lack the fruity, complex acidity of endemic Visayan batwan.' }],
          sampleOnlineRecipe: 'Quick Pork Soup with canned beans and artificial citric acid powder.',
          sampleAuthenticRecipe: 'Authentic Ilonggo KBL: Simmer smoky pork pata with kadyos (pigeon peas), lemongrass (tanglad), young green langka, and native Visayan batwan fruit.',
        },
        philosophyPrompt: {
          question: 'Bakit mahalagang ingatan ang orihinal na lasa ng ating bayan laban sa mga komersyal na trend?',
          englishTranslation: 'Why is it essential to safeguard the original taste of our homeland against commercialized culinary trends?',
          philosophicalLens: 'Ang prutas na batwan ay bahagi ng biodibersidad at kultura ng Kabisayaan na dapat pangalagaan.',
        },
        fplLarawangSanaysay: {
          essayTitle: 'Larawang-Sanaysay: Kadyos, Baboy, at Langka—Ang Asim ng Batwan sa Kanlurang Visayas',
          abstract: 'Pagpapakilala sa batwan bilang katutubong pampaasim ng mga Ilonggo.',
          steps: [
            {
              stepNumber: 1,
              tagalogTitle: 'Unang Hakbang: Ang Paggamit ng Katutubong Batwan at Tanglad',
              hackMethod: 'Instant Sinigang Mix vs. Prutas na Batwan',
              academicCaption: 'Ang batwan ang nagbibigay ng bilog at banayad na asim sa KBL na kaiba sa sampalok ng Luzon.',
              comparisonNote: 'Itinatampok nito ang katutubong prutas ng Panay at Negros.',
              imageUrl: IMAGES.pakbet,
            },
          ],
        },
      },
      {
        id: 'bacolod-inasal',
        name: "Visayas Chicken Inasal",
        plaqueTitle: 'CHICKEN INASAL',
        regionId: 'region-6',
        regionName: 'Region 6 - Western Visayas',
        islandId: 'visayas',
        province: 'Iloilo & Negros Occidental',
        imageUrl: IMAGES.tocino,
        shortTagline: 'Native chicken marinated in coconut vinegar, lemongrass, ginger, and calamansi, basted with annatto oil.',
        ucspHistory: {
          anthropologicalContext: 'Rooted in Visayan roasting traditions along Cuadra Street and Manokan Country, Inasal relies on acidic coconut vinegar (sinamak), bruised lemongrass, and ginger rather than sweet soy.',
          culturalEvolution: 'Continuous basting with golden annatto-garlic oil (atsuete) keeps the meat juicy while coconut-shell charcoal imparts signature smokiness.',
          preservationTechnique: 'Coconut vinegar and ginger-lemongrass marination.',
          materialCulture: 'Skewered on hand-whittled bamboo sticks and fanned with woven buri abaniko.',
          socialSignificance: 'Eaten with bare hands (kinamot) over garlic rice drizzled with sinamak and chicken oil.',
        },
        milVerification: {
          boilingAndCuringTitle: 'Inasal Marinade:',
          heirloomIngredients: ['1 kg native chicken (paa or pecho)', '1/2 cup coconut vinegar (tuba / sinamak)', '2 stalks lemongrass (tanglad), ginger, garlic, and calamansi'],
          fryingOrSecondaryTitle: 'Basting Oil:',
          secondaryIngredients: ['Rendered chicken fat or oil infused with annatto seeds (atsuete) and salt'],
          methodSteps: [
            {
              sectionTitle: '1. Marinate and Charcoal-Baste:',
              steps: [
                '1. Marinate chicken cuts in coconut vinegar, crushed lemongrass, ginger, garlic, and calamansi for at least 4 hours.',
                '2. Grill over coconut-shell charcoal while basting generously with golden atsuete-infused oil.',
              ],
            },
          ],
          sources: ['https://panlasangpinoy.com/chicken-inasal-recipe/'],
          verifiedTutorials: DEFAULT_VERIFIED_TUTORIALS,
          authenticKeywords: ['lemongrass', 'tanglad', 'coconut vinegar', 'sinamak', 'atsuete', 'calamansi', 'ginger'],
          shortcutFlags: [{ keyword: 'banana ketchup', reason: 'Authentic Visayan Chicken Inasal never uses sweet banana ketchup or soy sauce in its marinade.' }],
          sampleOnlineRecipe: 'Sweet BBQ Chicken basted with banana ketchup and soy sauce.',
          sampleAuthenticRecipe: 'Authentic Visayan Chicken Inasal marinated in coconut vinegar (sinamak), crushed lemongrass (tanglad), ginger, garlic, and calamansi, grilled over charcoal with golden atsuete oil.',
        },
        philosophyPrompt: {
          question: 'Bakit mahalagang ingatan ang orihinal na lasa ng ating bayan laban sa mga komersyal na trend?',
          englishTranslation: 'Why is it essential to safeguard the original taste of our homeland against commercialized culinary trends?',
          philosophicalLens: 'Ang bango ng tanglad at suka ng niyog sa Inasal ay patunay na hindi kailangang matamis ang lahat ng inihaw.',
        },
        fplLarawangSanaysay: {
          essayTitle: 'Larawang-Sanaysay: Ang Sining ng Pag-iinasal sa Kabisayaan',
          abstract: 'Pagsusuri sa papel ng tanglad, sinamak, at langis ng atsuete sa Chicken Inasal.',
          steps: [
            {
              stepNumber: 1,
              tagalogTitle: 'Unang Hakbang: Ang Pagbababad sa Tanglad, Luya, at Sinamak',
              hackMethod: 'Soy-Ketchup Marinade vs. Tanglad at Sukang Tuba',
              academicCaption: 'Walang toyo o ketchup ang tunay na Inasal; ang lasa nito ay nagmumula sa tanglad, luya, bawang, at sukang niyog.',
              comparisonNote: 'Malinis, mabango, at nanunuot ang asim-linamnam.',
              imageUrl: IMAGES.tocino,
            },
          ],
        },
      },
    ],
  },

  {
    id: 'region-7',
    shortTitle: 'Region 7',
    fullName: 'Region 7 - Central Visayas',
    subtitle: 'Central Visayas (Cebu & Bohol)',
    islandId: 'visayas',
    ornamentType: 'mandala',
    summaryBanner:
      'Central Visayas unites the maritime roasting traditions of Cebu and the karst agricultural heritage of Bohol, famous for herb-stuffed Lechon, SuTuKil coastal cookery, and coconut-ginger stews.',
    dishes: [
      {
        id: 'cebu-lechon-belly',
        name: "Cebu's Lechon & Carcar Chicharon",
        plaqueTitle: 'CEBU LECHON',
        regionId: 'region-7',
        regionName: 'Region 7 - Central Visayas',
        islandId: 'visayas',
        province: 'Cebu (Talisay & Carcar)',
        imageUrl: IMAGES.bagnet,
        shortTagline: 'Slow-roasted pork stuffed with lemongrass, native scallions, garlic, and sea salt—so flavorful it needs no liver sauce.',
        ucspHistory: {
          anthropologicalContext: 'In Cebu, roasting whole pig (Inasal na Baboy / Lechon) over glowing charcoal pits has been the centerpiece of Sinulog fiestas and family milestones for centuries.',
          culturalEvolution: 'Unlike Luzon lechon which relies on sweet liver gravy, Cebu Lechon is stuffed generously from the inside with crushed lemongrass (tanglad), green onions, native garlic, peppercorns, and sea salt.',
          preservationTechnique: 'Slow rotisserie thermal rendering and herb aromatization.',
          materialCulture: 'Skewered on mature bamboo poles over coconut-husk charcoal and glazed with fresh coconut water.',
          socialSignificance: 'The undisputed crown jewel of Visayan celebrations.',
        },
        milVerification: {
          boilingAndCuringTitle: 'Aromatic Cavity Stuffing:',
          heirloomIngredients: ['1.5 kg pork belly slab (skin-on)', '4 stalks fresh lemongrass (tanglad), bruised', '1 bundle native scallions / spring onions', '1 head native garlic, crushed, coarse sea salt, and black peppercorns'],
          fryingOrSecondaryTitle: 'Glaze & Dip:',
          secondaryIngredients: ['Fresh coconut water (buko juice) for skin glazing', 'Spiced Cebu cane vinegar with siling kulikot'],
          methodSteps: [
            {
              sectionTitle: '1. Stuff with Herbs & Slow-Roast:',
              steps: [
                '1. Score the inside flesh of the pork belly and rub generously with coarse sea salt, crushed garlic, and black pepper.',
                '2. Layer bruised lemongrass and scallions tightly inside, roll and tie with twine, and slow-roast while brushing skin with coconut water until glass-crisp.',
              ],
            },
          ],
          sources: ['https://panlasangpinoy.com/lechon-belly-roll/'],
          verifiedTutorials: DEFAULT_VERIFIED_TUTORIALS,
          authenticKeywords: ['lemongrass', 'tanglad', 'scallions', 'garlic', 'sea salt', 'coconut water'],
          shortcutFlags: [{ keyword: 'liver sauce', reason: 'Cebu Lechon is aromatic enough from its internal tanglad and garlic stuffing that it is served with spiced vinegar rather than sweet liver gravy.' }],
          sampleOnlineRecipe: 'Quick Roast Pork served with bottled sweet liver gravy.',
          sampleAuthenticRecipe: 'Authentic Cebu Lechon Belly stuffed with bruised lemongrass (tanglad), scallions, crushed native garlic, peppercorns, and sea salt, glazed with coconut water and roasted until glass-crisp.',
        },
        philosophyPrompt: {
          question: 'Bakit mahalagang ingatan ang orihinal na lasa ng ating bayan laban sa mga komersyal na trend?',
          englishTranslation: 'Why is it essential to safeguard the original taste of our homeland against commercialized culinary trends?',
          philosophicalLens: 'Itinuturo ng Cebu Lechon na ang tunay na linamnam ay nagmumula sa loob—sa mga sariwang halaman at pampalasa ng sariling lupa.',
        },
        fplLarawangSanaysay: {
          essayTitle: 'Larawang-Sanaysay: Ang Tanglad at Sibuyas Mura sa Puso ng Cebu Lechon',
          abstract: 'Pagsusuri kung bakit hindi nangangailangan ng sarsa ang tradisyonal na Lechon ng Cebu.',
          steps: [
            {
              stepNumber: 1,
              tagalogTitle: 'Unang Hakbang: Ang Pagpupuno ng Tanglad at Bawang sa Loob',
              hackMethod: 'Panlabas na Sarsa vs. Panloob na Pampalasa (Stuffing)',
              academicCaption: 'Habang umiikot sa baga, ang katas ng tanglad, bawang, at dahon ng sibuyas ay nanunuot sa bawat hibla ng karne.',
              comparisonNote: 'Kaya sapat na ang sukang may sili bilang sawsawan.',
              imageUrl: IMAGES.bagnet,
            },
          ],
        },
      },
      {
        id: 'bohol-halang-halang',
        name: "Bohol's Halang-Halang Manok",
        plaqueTitle: 'HALANG-HALANG',
        regionId: 'region-7',
        regionName: 'Region 7 - Central Visayas',
        islandId: 'visayas',
        province: 'Bohol',
        imageUrl: IMAGES.pakbet,
        shortTagline: 'Native free-range chicken simmered in fresh coconut milk, ginger, lemongrass, and fiery bird’s eye chilies.',
        ucspHistory: {
          anthropologicalContext: 'Named "Halang-Halang" (Visayan for "spicy"), this Boholano comfort stew combines free-range native chicken (manok bisaya) with rich coconut cream (kakang gata) and fiery chilies.',
          culturalEvolution: 'Reflects the lush coconut groves surrounding Bohol’s limestone hills.',
          preservationTechnique: 'Simmering in antimicrobial ginger, chili, and coconut oil emulsion.',
          materialCulture: 'Freshly grated coconut pressed by hand over a wooden kudkuran.',
          socialSignificance: 'Served warm during rainy afternoons and family reunions in Bohol.',
        },
        milVerification: {
          boilingAndCuringTitle: 'Boholano Ingredients:',
          heirloomIngredients: ['1 kg native chicken (manok bisaya), cut into serving pieces', '2 cups fresh coconut milk (gata) & 1 cup thick coconut cream (kakang gata)', 'Thumb-sized ginger, lemongrass, and 6 pcs siling kulikot / labuyo'],
          fryingOrSecondaryTitle: 'Vegetables:',
          secondaryIngredients: ['Green papaya wedges and dahon ng sili (chili leaves)'],
          methodSteps: [
            {
              sectionTitle: '1. Sauté Aromatics and Simmer in Gata:',
              steps: [
                '1. Sauté ginger, garlic, onions, and lemongrass until fragrant, then brown the native chicken.',
                '2. Simmer in second-press coconut milk until tender, then finish with green papaya, crushed chilies, chili leaves, and thick kakang gata.',
              ],
            },
          ],
          sources: ['https://panlasangpinoy.com/halang-halang/'],
          verifiedTutorials: DEFAULT_VERIFIED_TUTORIALS,
          authenticKeywords: ['coconut milk', 'gata', 'ginger', 'lemongrass', 'chili', 'papaya', 'native chicken'],
          shortcutFlags: [{ keyword: 'evaporated milk', reason: 'Canned cow’s milk cannot replace the rich, nutty aroma of freshly pressed Bohol coconut cream (kakang gata).' }],
          sampleOnlineRecipe: 'Spicy Chicken Soup using canned evaporated milk and chili flakes.',
          sampleAuthenticRecipe: 'Authentic Bohol Halang-Halang: Simmer native chicken with ginger, lemongrass, green papaya, siling labuyo, chili leaves, and freshly pressed coconut cream (gata).',
        },
        philosophyPrompt: {
          question: 'Bakit mahalagang ingatan ang orihinal na lasa ng ating bayan laban sa mga komersyal na trend?',
          englishTranslation: 'Why is it essential to safeguard the original taste of our homeland against commercialized culinary trends?',
          philosophicalLens: 'Ang sariwang gata at anghang ng sili sa Halang-Halang ay salamin ng masiglang pamumuhay sa Bohol.',
        },
        fplLarawangSanaysay: {
          essayTitle: 'Larawang-Sanaysay: Ang Gata at Sili sa Halang-Halang ng Bohol',
          abstract: 'Pagtalakay sa kahalagahan ng unang piga ng gata sa lutuing Boholano.',
          steps: [
            {
              stepNumber: 1,
              tagalogTitle: 'Unang Hakbang: Ang Pagkudkod at Pagpiga ng Sariwang Niyog',
              hackMethod: 'Evaporated Milk vs. Unang Piga ng Kakang Gata',
              academicCaption: 'Ang tunay na Halang-Halang ay gumagamit ng dalawang antas ng gata upang lumambot ang manok bisaya at lumapot ang sarsa.',
              comparisonNote: 'Nagbibigay ito ng natural na tamis laban sa anghang ng sili.',
              imageUrl: IMAGES.pakbet,
            },
          ],
        },
      },
    ],
  },

  {
    id: 'region-8',
    shortTitle: 'Region 8',
    fullName: 'Region 8 - Eastern Visayas',
    subtitle: 'Eastern Visayas (Leyte & Samar)',
    islandId: 'visayas',
    ornamentType: 'fans',
    summaryBanner:
      'Eastern Visayas bridges the Pacific Ocean and Visayan Sea, renowned for slow-braised Waray Humba with fermented black beans, root-crop delicacies in coconut shells (Binagol), and coastal vegetable medleys.',
    dishes: [
      {
        id: 'leyte-humba',
        name: "Leyte's Waray Humba",
        plaqueTitle: 'WARAY HUMBA',
        regionId: 'region-8',
        regionName: 'Region 8 - Eastern Visayas',
        islandId: 'visayas',
        province: 'Leyte & Samar',
        imageUrl: IMAGES.tocino,
        shortTagline: 'Melt-in-your-mouth pork belly slow-braised with fermented black beans (tausi), dried banana blossoms, and muscovado.',
        ucspHistory: {
          anthropologicalContext: 'Across Leyte and Samar, Humba is the quintessential Waray feast dish prepared in large batches that improve in flavor over several days.',
          culturalEvolution: 'Distinguished by the earthy umami of salted black beans (tausi) and floral dried banana blossoms (bulaklak ng saging) balanced with raw sugarcane muscovado and cane vinegar.',
          preservationTechnique: 'Vinegar-sugar-salt reduction with high pork fat cap.',
          materialCulture: 'Slow-cooked in earthenware pots over low charcoal embers.',
          socialSignificance: 'A dish of endurance and warmth shared across Eastern Visayan communities.',
        },
        milVerification: {
          boilingAndCuringTitle: 'Waray Braising Ingredients:',
          heirloomIngredients: ['1 kg pork belly (liempo), cut into thick blocks', '3 tbsp fermented salted black beans (tausi)', '1/2 cup dried banana blossoms (bulaklak ng saging)', '1/3 cup cane vinegar, soy sauce, muscovado sugar, garlic, peppercorns, bay leaves'],
          fryingOrSecondaryTitle: 'Garnish:',
          secondaryIngredients: ['Hard-boiled eggs and roasted peanuts (optional regional touch)'],
          methodSteps: [
            {
              sectionTitle: '1. Sear and Slow-Braise:',
              steps: [
                '1. Sear pork belly blocks until golden, then add garlic, peppercorns, bay leaves, cane vinegar, soy sauce, and muscovado.',
                '2. Fold in fermented black beans (tausi) and dried banana blossoms, simmering on low heat for 90 minutes until the sauce glazes the meat.',
              ],
            },
          ],
          sources: ['https://panlasangpinoy.com/humba-recipe/'],
          verifiedTutorials: DEFAULT_VERIFIED_TUTORIALS,
          authenticKeywords: ['tausi', 'black beans', 'banana blossoms', 'bulaklak ng saging', 'vinegar', 'pork belly'],
          shortcutFlags: [{ keyword: 'skipping tausi', reason: 'Without fermented black beans (tausi) and dried banana blossoms, the dish becomes plain sweet adobo rather than authentic Visayan Humba.' }],
          sampleOnlineRecipe: 'Quick Humba: Boil pork with soy sauce and white sugar for 20 minutes.',
          sampleAuthenticRecipe: 'Authentic Leyte Waray Humba: Slow-braise thick pork belly with fermented black beans (tausi), dried banana blossoms (bulaklak ng saging), cane vinegar, muscovado sugar, garlic, and bay leaves.',
        },
        philosophyPrompt: {
          question: 'Bakit mahalagang ingatan ang orihinal na lasa ng ating bayan laban sa mga komersyal na trend?',
          englishTranslation: 'Why is it essential to safeguard the original taste of our homeland against commercialized culinary trends?',
          philosophicalLens: 'Ang bulaklak ng saging at tausi ang nagbibigay ng kaluluwa sa Humba ng Kabisayaan.',
        },
        fplLarawangSanaysay: {
          essayTitle: 'Larawang-Sanaysay: Ang Tausi at Bulaklak ng Saging sa Humba ng Leyte at Samar',
          abstract: 'Paghahambing ng Waray Humba sa karaniwang Adobo.',
          steps: [
            {
              stepNumber: 1,
              tagalogTitle: 'Unang Hakbang: Ang Paglalagay ng Tausi at Bulaklak ng Saging',
              hackMethod: 'Simpleng Matamis na Adobo vs. Humba na may Tausi at Bulaklak ng Saging',
              academicCaption: 'Ang kumbinasyon ng maalat na tausi at mabangong bulaklak ng saging ang nagbubukod sa Humba bilang pamanang ulam ng Kabisayaan.',
              comparisonNote: 'Nananatiling malambot at malinamnam kahit lumamig.',
              imageUrl: IMAGES.tocino,
            },
          ],
        },
      },
    ],
  },

  {
    id: 'region-nir',
    shortTitle: 'Negros / NIR',
    fullName: 'Negros Island Region (NIR)',
    subtitle: 'Negros Occidental & Oriental',
    islandId: 'visayas',
    ornamentType: 'pinwheels',
    summaryBanner:
      'The Sugarbowl of the Philippines blends heritage hacienda kitchens in Silay and Bacolod with coastal Dumaguete flavors, famous for Kansi beef shank soup and Sinuglaw.',
    dishes: [
      {
        id: 'silay-kansi',
        name: "Negros Cansi (Kansi)",
        plaqueTitle: 'NEGROS CANSI',
        regionId: 'region-nir',
        regionName: 'Negros Island Region (NIR)',
        islandId: 'visayas',
        province: 'Bacolod & Silay, Negros Occidental',
        imageUrl: IMAGES.lunis,
        shortTagline: 'Rich beef shank and bone marrow soup soured with native batwan fruit and tinted with golden annatto.',
        ucspHistory: {
          anthropologicalContext: 'Hailing from Bacolod and Silay in Negros Occidental, Cansi marries the richness of Tagalog Bulalo with the bright acidity of Visayan Sinigang.',
          culturalEvolution: 'Soured with endemic batwan fruit and unripe jackfruit, then finished with golden annatto (atsuete) oil and lemongrass.',
          preservationTechnique: 'Slow bone-marrow simmering in acidic batwan broth.',
          materialCulture: 'Simmered in deep clay and cast-iron pots.',
          socialSignificance: 'A beloved Negrense culinary bridge between highland cattle and tropical orchards.',
        },
        milVerification: {
          boilingAndCuringTitle: 'Negrense Ingredients:',
          heirloomIngredients: ['1.5 kg beef shank with bone marrow', '6 pcs native batwan fruit', '2 cups sliced young jackfruit (langka)', '2 stalks lemongrass (tanglad) & 2 tbsp golden atsuete oil'],
          fryingOrSecondaryTitle: 'Seasoning:',
          secondaryIngredients: ['Sliced green finger chilies, garlic, onions, and patis'],
          methodSteps: [
            {
              sectionTitle: '1. Simmer Shank with Batwan & Atsuete:',
              steps: [
                '1. Sauté garlic and onions in golden atsuete oil, then sear the beef shanks.',
                '2. Add water, lemongrass, and batwan fruit; simmer for 3 hours until tender, then add young jackfruit and green chilies.',
              ],
            },
          ],
          sources: ['https://panlasangpinoy.com/cansi-soup-recipe/'],
          verifiedTutorials: DEFAULT_VERIFIED_TUTORIALS,
          authenticKeywords: ['batwan', 'beef shank', 'langka', 'atsuete', 'lemongrass', 'tanglad'],
          shortcutFlags: [{ keyword: 'tamarind powder', reason: 'Authentic Negrense Cansi gets its signature tang from batwan fruit and golden hue from atsuete, not instant tamarind powder.' }],
          sampleOnlineRecipe: 'Quick Beef Soup with instant tamarind sinigang powder.',
          sampleAuthenticRecipe: 'Authentic Negros Cansi: Slow-simmer beef shank and bone marrow in golden atsuete oil with lemongrass (tanglad), young jackfruit (langka), and native batwan fruit.',
        },
        philosophyPrompt: {
          question: 'Bakit mahalagang ingatan ang orihinal na lasa ng ating bayan laban sa mga komersyal na trend?',
          englishTranslation: 'Why is it essential to safeguard the original taste of our homeland against commercialized culinary trends?',
          philosophicalLens: 'Ang Cansi ng Negros ay patunay na ang sariling bunga ng ating kagubatan gaya ng batwan ang bumubuo sa ating lasa.',
        },
        fplLarawangSanaysay: {
          essayTitle: 'Larawang-Sanaysay: Ang Cansi ng Negros—Pagtatagpo ng Bulalo at Batwan',
          abstract: 'Pagsusuri sa natatanging sabaw ng Negros Occidental.',
          steps: [
            {
              stepNumber: 1,
              tagalogTitle: 'Unang Hakbang: Ang Langis ng Atsuete at Asim ng Batwan',
              hackMethod: 'Instant Sinigang Mix vs. Batwan at Atsuete',
              academicCaption: 'Ang kahel na kulay mula sa atsuete at asim ng batwan ang nagbibigay sa Cansi ng natatanging karakter sa buong Kabisayaan.',
              comparisonNote: 'Hindi nagmamantsa ng labis na alat ang natural na batwan.',
              imageUrl: IMAGES.lunis,
            },
          ],
        },
      },
    ],
  },

  // ==================== MINDANAO ====================
  {
    id: 'region-9',
    shortTitle: 'Region 9',
    fullName: 'Region 9 - Zamboanga Peninsula',
    subtitle: 'Zamboanga Peninsula & Sulu',
    islandId: 'mindanao',
    ornamentType: 'fans',
    summaryBanner:
      'Region 9 weaves Chavacano, Subanen, and Tausug maritime culinary traditions, featuring deep-sea spanner crabs in spiced coconut-roe Alavar sauce and burnt-coconut Tiula Itum.',
    dishes: [
      {
        id: 'zamboanga-curacha',
        name: "Zamboanga's Curacha Alavar",
        plaqueTitle: 'CURACHA ALAVAR',
        regionId: 'region-9',
        regionName: 'Region 9 - Zamboanga Peninsula',
        islandId: 'mindanao',
        province: 'Zamboanga City',
        imageUrl: IMAGES.tocino,
        shortTagline: 'Deep-sea spanner crab simmered in rich coconut milk, crab roe (aligue), garlic, and Mindanao spices.',
        ucspHistory: {
          anthropologicalContext: 'Caught in the deep waters of the Basilan Strait by Zamboangueño and Sama-Bajau fisherfolk, the Curacha (Ranina ranina) is prized across the Zamboanga Peninsula.',
          culturalEvolution: 'Perfected by the Alavar family of Zamboanga into a velvety coconut milk and crab-roe sauce infused with native ginger, garlic, and chili.',
          preservationTechnique: 'Simmering in spiced coconut cream and crab fat emulsion.',
          materialCulture: 'Harvested using traditional traps and cooked in wide brass or iron woks.',
          socialSignificance: 'A symbol of Zamboanga’s Chavacano and maritime heritage.',
        },
        milVerification: {
          boilingAndCuringTitle: 'Curacha & Alavar Sauce:',
          heirloomIngredients: ['1 kg fresh Curacha (spanner crab) or blue crab', '2 cups thick coconut cream (kakang gata)', '1/2 cup pure crab roe (aligue / taba ng talangka)', 'Pounded garlic, ginger, shallots, turmeric, and siling labuyo'],
          fryingOrSecondaryTitle: 'Garnish:',
          secondaryIngredients: ['Calamansi and steamed white rice'],
          methodSteps: [
            {
              sectionTitle: '1. Steam Crab & Reduce Alavar Sauce:',
              steps: [
                '1. Steam the Curacha briefly to lock in its natural marine sweetness.',
                '2. Sauté garlic, ginger, and shallots, whisk in crab roe (aligue) and thick coconut cream, and simmer the Curacha in the rich golden-orange sauce.',
              ],
            },
          ],
          sources: ['https://panlasangpinoy.com/'],
          verifiedTutorials: DEFAULT_VERIFIED_TUTORIALS,
          authenticKeywords: ['curacha', 'aligue', 'crab roe', 'coconut cream', 'gata', 'ginger', 'garlic'],
          shortcutFlags: [{ keyword: 'cheese sauce', reason: 'Authentic Zamboanga Alavar sauce derives its richness from pure crab roe (aligue) and fresh coconut cream, not processed cheese.' }],
          sampleOnlineRecipe: 'Quick Baked Crab topped with processed cheese spread and butter.',
          sampleAuthenticRecipe: 'Authentic Zamboanga Curacha in Alavar Sauce: Simmer spanner crab in thick coconut cream (kakang gata), pure crab roe (aligue), pounded garlic, ginger, and native chili.',
        },
        philosophyPrompt: {
          question: 'Bakit mahalagang ingatan ang orihinal na lasa ng ating bayan laban sa mga komersyal na trend?',
          englishTranslation: 'Why is it essential to safeguard the original taste of our homeland against commercialized culinary trends?',
          philosophicalLens: 'Ang Curacha sa sarsang Alavar ay nagpapakita ng yaman ng karagatan ng Mindanao.',
        },
        fplLarawangSanaysay: {
          essayTitle: 'Larawang-Sanaysay: Ang Curacha at Sarsang Alavar ng Zamboanga',
          abstract: 'Dokumentasyon ng sining ng pagluluto ng Curacha sa gata at aligue.',
          steps: [
            {
              stepNumber: 1,
              tagalogTitle: 'Unang Hakbang: Ang Paghahalo ng Kakang Gata at Taba ng Talangka (Aligue)',
              hackMethod: 'Processed Cheese Sauce vs. Sarsang Alavar mula sa Aligue at Gata',
              academicCaption: 'Ang kulay at linamnam ng sarsang Alavar ay nagmumula sa tunay na aligue at sariwang gata na hinaluan ng pinaupong bawang at luya.',
              comparisonNote: 'Isang tatak ng lutuing Chavacano sa Zamboanga.',
              imageUrl: IMAGES.tocino,
            },
          ],
        },
      },
    ],
  },

  {
    id: 'region-10',
    shortTitle: 'Region 10',
    fullName: 'Region 10 - Northern Mindanao',
    subtitle: 'Northern Mindanao (CDO & Bukidnon)',
    islandId: 'mindanao',
    ornamentType: 'mandala',
    summaryBanner:
      'Northern Mindanao brings together coastal Cagayan de Oro and the cool plateaus of Bukidnon, home to Sinuglaw (charcoal-grilled pork belly meets fresh tuna kinilaw with endemic tabon-tabon fruit).',
    dishes: [
      {
        id: 'cdo-sinuglaw',
        name: "Mindanao's Sinuglaw",
        plaqueTitle: 'SINUGLAW',
        regionId: 'region-10',
        regionName: 'Region 10 - Northern Mindanao',
        islandId: 'mindanao',
        province: 'Cagayan de Oro & Misamis Oriental',
        imageUrl: IMAGES.dinakdakan,
        shortTagline: 'Smoky charcoal-grilled pork belly (Sinugba) tossed with fresh tuna cured in coconut vinegar and endemic tabon-tabon fruit (Kinilaw).',
        ucspHistory: {
          anthropologicalContext: 'Combining "Sinugba" (charcoal-grilled pork belly) and "Kinilaw" (raw fish cured in palm vinegar), Sinuglaw is a celebration of Northern Mindanao’s ridge-to-reef geography.',
          culturalEvolution: 'Authentic Mindanao Kinilaw uses squeezed pulp from the endemic tabon-tabon fruit (Hydrophytum orbiculatum) and biasong (wild lime), a tradition dating back over a thousand years to the Butuan balangay archaeological sites.',
          preservationTechnique: 'Organic acid denaturation via coconut tuba vinegar and antimicrobial tabon-tabon extract.',
          materialCulture: 'Grated tabon-tabon kernel squeezed by hand into wooden bowls.',
          socialSignificance: 'Bridges highland farmers and coastal fisherfolk in a single dish.',
        },
        milVerification: {
          boilingAndCuringTitle: 'Sinugba & Kinilaw Components:',
          heirloomIngredients: ['500g fresh yellowfin tuna (malasugue), cubed', '400g charcoal-grilled pork belly (sinugba), chopped', '1/2 cup native coconut vinegar (sukang tuba)', '2 tbsp grated and squeezed tabon-tabon fruit extract'],
          fryingOrSecondaryTitle: 'Aromatics:',
          secondaryIngredients: ['Biasong (Mindanao wild lime) or calamansi, ginger, red onions, cucumber, and siling labuyo'],
          methodSteps: [
            {
              sectionTitle: '1. Cure Tuna & Fold with Hot Sinugba:',
              steps: [
                '1. Wash tuna cubes briefly in vinegar, drain, then toss with fresh coconut vinegar, tabon-tabon extract, ginger, onions, and chilies.',
                '2. Immediately fold in warm, smoky charcoal-grilled pork belly strips and serve.',
              ],
            },
          ],
          sources: ['https://panlasangpinoy.com/sinuglaw-recipe/'],
          verifiedTutorials: DEFAULT_VERIFIED_TUTORIALS,
          authenticKeywords: ['tabon-tabon', 'tuna', 'sinugba', 'kinilaw', 'coconut vinegar', 'ginger', 'biasong'],
          shortcutFlags: [{ keyword: 'glacial acetic acid', reason: 'Synthetic white vinegar burns the fish flesh instead of gently curing it like native coconut tuba vinegar and tabon-tabon.' }],
          sampleOnlineRecipe: 'Quick Kinilaw using synthetic white vinegar and mayonnaise.',
          sampleAuthenticRecipe: 'Authentic Northern Mindanao Sinuglaw: Cure fresh tuna cubes in coconut tuba vinegar, grated tabon-tabon fruit extract, biasong, ginger, and chilies, then toss with smoky charcoal-grilled pork belly (sinugba).',
        },
        philosophyPrompt: {
          question: 'Bakit mahalagang ingatan ang orihinal na lasa ng ating bayan laban sa mga komersyal na trend?',
          englishTranslation: 'Why is it essential to safeguard the original taste of our homeland against commercialized culinary trends?',
          philosophicalLens: 'Ang tabon-tabon sa Kinilaw ng Mindanao ay isang libong taong pamana mula pa sa panahon ng mga balangay sa Butuan.',
        },
        fplLarawangSanaysay: {
          essayTitle: 'Larawang-Sanaysay: Ang Tabon-Tabon at Biasong sa Sinuglaw ng Hilagang Mindanao',
          abstract: 'Pag-aaral sa katutubong sangkap ng Kinilaw at Sinuglaw sa Mindanao.',
          steps: [
            {
              stepNumber: 1,
              tagalogTitle: 'Unang Hakbang: Ang Pagkayod ng Bunga ng Tabon-Tabon',
              hackMethod: 'Synthetic White Vinegar vs. Sukang Tuba at Katas ng Tabon-Tabon',
              academicCaption: 'Inaalis ng katas ng tabon-tabon ang lansa ng sariwang isda habang pinananatili ang lambot nito kasama ng inihaw na liempo.',
              comparisonNote: 'Natagpuan ang mga buto ng tabon-tabon sa mga arkeolohikal na hukay sa Mindanao.',
              imageUrl: IMAGES.dinakdakan,
            },
          ],
        },
      },
    ],
  },

  {
    id: 'region-11',
    shortTitle: 'Region 11',
    fullName: 'Region 11 - Davao Region',
    subtitle: 'Davao Region (Kadayawan)',
    islandId: 'mindanao',
    ornamentType: 'mask',
    summaryBanner:
      'Framed by Mount Apo and the Davao Gulf, Region 11 honors eleven ethnolinguistic tribes and abundant marine and orchard harvests, famed for Sinabawang Balbakwa and Charcoal-Grilled Tuna Panga.',
    dishes: [
      {
        id: 'davao-balbakwa',
        name: "Davao's Heirloom Balbakwa",
        plaqueTitle: 'BALBAKWA',
        regionId: 'region-11',
        regionName: 'Region 11 - Davao Region',
        islandId: 'mindanao',
        province: 'Davao del Sur & Davao City',
        imageUrl: IMAGES.lunis,
        shortTagline: 'Rich collagen stew slow-simmered for hours with ginger, lemongrass, salted black beans, and toasted aromatics.',
        ucspHistory: {
          anthropologicalContext: 'Popular across Davao and Visayan-settled Mindanao market stalls (painitan), Balbakwa transforms tough collagen-rich cuts into a silky, deeply aromatic broth.',
          culturalEvolution: 'Simmered patiently for 5 to 6 hours with bruised lemongrass, ginger, star anise, and salted black beans.',
          preservationTechnique: 'Extended thermal gelatinization.',
          materialCulture: 'Simmered overnight in wood-fired kawa cauldrons.',
          socialSignificance: 'A beloved morning sustento for market vendors, farmers, and travelers.',
        },
        milVerification: {
          boilingAndCuringTitle: 'Slow-Simmer Ingredients:',
          heirloomIngredients: ['1.5 kg beef oxtail, skin, and tendon', '3 stalks lemongrass (tanglad) & 2 thumbs ginger', '2 tbsp salted black beans (tausi) & annatto oil'],
          fryingOrSecondaryTitle: 'Garnish:',
          secondaryIngredients: ['Chopped scallions, fried garlic, calamansi, and crushed chilies'],
          methodSteps: [
            {
              sectionTitle: '1. Parboil and Slow-Braise for 5 Hours:',
              steps: [
                '1. Blanch cuts with ginger and lemongrass, then rinse.',
                '2. Slow-simmer in a heavy pot with garlic, onions, tausi, and atsuete oil for 4–5 hours until gelatinous and velvety.',
              ],
            },
          ],
          sources: ['https://panlasangpinoy.com/balbakwa-recipe/'],
          verifiedTutorials: DEFAULT_VERIFIED_TUTORIALS,
          authenticKeywords: ['oxtail', 'tendon', 'lemongrass', 'tanglad', 'ginger', 'tausi', 'slow-simmer'],
          shortcutFlags: [{ keyword: 'cornstarch slurry', reason: 'Authentic Balbakwa gets its velvety thickness naturally from slow-rendered collagen, never cornstarch.' }],
          sampleOnlineRecipe: '30-Minute Balbakwa thickened with 3 tablespoons of cornstarch slurry.',
          sampleAuthenticRecipe: 'Authentic Davao Balbakwa slow-simmered for 5 hours with beef oxtail and tendon, lemongrass (tanglad), ginger, tausi, and golden atsuete until naturally gelatinous.',
        },
        philosophyPrompt: {
          question: 'Bakit mahalagang ingatan ang orihinal na lasa ng ating bayan laban sa mga komersyal na trend?',
          englishTranslation: 'Why is it essential to safeguard the original taste of our homeland against commercialized culinary trends?',
          philosophicalLens: 'Ang Balbakwa ay patunay na ang tiyaga sa mabagal na apoy ay nakagagawa ng yaman mula sa payak na sangkap.',
        },
        fplLarawangSanaysay: {
          essayTitle: 'Larawang-Sanaysay: Ang Limang Oras na Pagpapakulo ng Balbakwa sa Davao',
          abstract: 'Pagsusuri sa natural na collagen laban sa artipisyal na pampalapot.',
          steps: [
            {
              stepNumber: 1,
              tagalogTitle: 'Unang Hakbang: Ang Natural na Lapot Mula sa Matagal na Pagpapakulo',
              hackMethod: 'Cornstarch Slurry vs. Natural na Collagen Extraction',
              academicCaption: 'Sa mga painitan ng Davao, limang oras na pinakukuluan sa mahinang apoy ang Balbakwa kasama ng tanglad at luya.',
              comparisonNote: 'Hindi malabnaw at hindi rin artipisyal ang lapot.',
              imageUrl: IMAGES.lunis,
            },
          ],
        },
      },
    ],
  },

  {
    id: 'region-barmm',
    shortTitle: 'BARMM / XII',
    fullName: 'BARMM & Region 12 (Bangsamoro & SOCCSKSARGEN)',
    subtitle: 'Lanao, Maguindanao & Cotabato',
    islandId: 'mindanao',
    ornamentType: 'pinwheels',
    summaryBanner:
      'Home to Maranao and Maguindanaon royal culinary traditions, centered around Palapa (pounded sakurab scallions, ginger, turmeric, and chili), toasted coconut (tiyahu), and slow-cooked halal festive dishes.',
    dishes: [
      {
        id: 'maranao-beef-rendang',
        name: "Maranao Beef Rendang",
        plaqueTitle: 'BEEF RENDANG',
        regionId: 'region-barmm',
        regionName: 'BARMM & Region 12',
        islandId: 'mindanao',
        province: 'Lanao del Sur (Marawi)',
        imageUrl: IMAGES.lunis,
        shortTagline: 'Slow-caramelized beef in coconut milk, native palapa (sakurab), fresh turmeric (kalawag), and toasted coconut.',
        ucspHistory: {
          anthropologicalContext: 'Rooted in the ancient maritime spice networks linking Lake Lanao with the Malay archipelago, Maranao Beef Rendang is a sacred festive dish of the Bangsamoro people.',
          culturalEvolution: 'Distinctly Maranao through its foundation of Palapa—pounded native white scallions (sakurab), ginger, chili, and fresh turmeric (kalawag)—plus toasted grated coconut (tiyahu) pounded in a wooden lusong.',
          preservationTechnique: 'Caramelizing coconut cream into coconut oil (rendang) preserves the spiced beef for weeks.',
          materialCulture: 'Prepared using a traditional wooden mortar (lusong) and served under colorful royal tutup food covers.',
          socialSignificance: 'Served during Eid feasts, royal enthronements, and Kanduli thanksgiving banquets.',
        },
        milVerification: {
          boilingAndCuringTitle: 'Maranao Spice Paste (Palapa & Kalawag):',
          heirloomIngredients: ['1 kg halal beef brisket or chuck, cut into cubes', '1 cup Maranao Palapa (pounded sakurab scallions, ginger, labuyo)', '2 tbsp freshly grated turmeric (kalawag / luyang dilaw)', '1 cup toasted grated coconut (tiyahu), pounded until oily'],
          fryingOrSecondaryTitle: 'Coconut Milk & Cane Sugar:',
          secondaryIngredients: ['3 cups fresh coconut milk (gata), lemongrass, and 2 tbsp raw muscovado'],
          methodSteps: [
            {
              sectionTitle: '1. Pound Palapa & Slow-Caramelize in Gata:',
              steps: [
                '1. Sear beef cubes with pounded palapa, fresh turmeric (kalawag), and lemongrass.',
                '2. Pour in fresh coconut milk and pounded toasted coconut (tiyahu); simmer on low heat for 2–3 hours until the coconut milk separates into aromatic oil and coats the dark, tender beef.',
              ],
            },
          ],
          sources: ['https://panlasangpinoy.com/beef-rendang/'],
          verifiedTutorials: DEFAULT_VERIFIED_TUTORIALS,
          authenticKeywords: ['palapa', 'sakurab', 'turmeric', 'kalawag', 'luyang dilaw', 'coconut', 'gata', 'lemongrass'],
          shortcutFlags: [{ keyword: 'commercial curry powder', reason: 'Authentic Maranao Rendang relies on native Palapa (sakurab scallions, ginger, chili), fresh kalawag (turmeric), and toasted coconut—not generic yellow curry powder.' }],
          sampleOnlineRecipe: 'Quick Beef Rendang using 2 tbsp commercial yellow curry powder and evaporated milk.',
          sampleAuthenticRecipe: 'Authentic Maranao Beef Rendang: Slow-cook halal beef cubes in fresh coconut milk (gata) with Maranao palapa (sakurab scallions, ginger, chili), fresh turmeric (kalawag / luyang dilaw), lemongrass, and pounded toasted coconut (tiyahu).',
        },
        philosophyPrompt: {
          question: 'Bakit mahalagang ingatan ang orihinal na lasa ng ating bayan laban sa mga komersyal na trend?',
          englishTranslation: 'Why is it essential to safeguard the original taste of our homeland against commercialized culinary trends?',
          philosophicalLens: 'Ang Palapa ng mga Maranao ay kaluluwa ng kanilang kusina at simbolo ng pagkakakilanlan sa Bangsamoro.',
        },
        fplLarawangSanaysay: {
          essayTitle: 'Larawang-Sanaysay: Ang Palapa at Kalawag sa Pamanang Rendang ng Maranao',
          abstract: 'Pagsusuri sa katutubong sangkap na sakurab at luyang dilaw (kalawag) sa Lanao del Sur.',
          steps: [
            {
              stepNumber: 1,
              tagalogTitle: 'Unang Hakbang: Ang Pagbabayo ng Sakurab, Luya, at Kalawag (Palapa)',
              hackMethod: 'Commercial Curry Powder vs. Binayong Palapa at Sinangag na Niyog',
              academicCaption: 'Hindi ganap ang lutuing Maranao kung wala ang Palapa na gawa sa katutubong sakurab mula sa Lanao.',
              comparisonNote: 'Ipinapakita nito ang lalim ng pamanang pampalasa sa Mindanao.',
              imageUrl: IMAGES.lunis,
            },
          ],
        },
      },
    ],
  },
];

export const ALL_DISHES: DishData[] = REGIONS_DATA.flatMap((r) => r.dishes);

// Pre-seeded Paborito IDs matching Screenshot 6 (Pampanga's Tocino, Iloco's Pakbet, La Union's Dinakdakan, Batanes Luñis)
export const INITIAL_FAVORITE_IDS: string[] = [
  'pampanga-tocino',
  'ilocos-pakbet',
  'la-union-dinakdakan',
  'batanes-lunis',
];

export const INITIAL_JOURNAL_ENTRIES: JournalEntry[] = [
  {
    id: 'entry-1',
    dishId: 'ilocos-bagnet',
    dishName: "Iloco's Bagnet",
    regionName: 'Region 1 - Ilocos Region',
    familyVariation:
      'Sa aming pamilya sa Vigan, pinakukuluan muna ni Lola ang liempo sa tubig-ulan na may asin-baybay, buong bawang na may balat, at dahon ng bayabas bago isabit sa kusina nang magdamag.',
    culturalReflection:
      'Mahalagang ingatan ang orihinal na proseso ng sangkutsa at dalawahang pagpiprito dahil itinuturo nito ang pagtitiyaga at pagpapahalaga sa biyaya ng lupa at alagang hayop.',
    createdAt: 'Oktubre 2026 · SHS Grade 12 - Stem/Humss',
  },
  {
    id: 'entry-2',
    dishId: 'ilocos-pakbet',
    dishName: "Iloco's Pakbet",
    regionName: 'Region 1 - Ilocos Region',
    familyVariation:
      'Hindi kami gumagamit ng sandok sa paghahalo; kinakalog lamang ang palayok (banga) na may bagoong monamon at lasona upang manatiling buo ang maliliit na ampalaya.',
    culturalReflection:
      'Ang likas na pait at alat ng Pakbet ay sumasalamin sa katatagan ng aming komunidad laban sa mabilisang komersyalisasyon ng lasa.',
    createdAt: 'Oktubre 2026 · Aking Tala ng Pamana',
  },
];
