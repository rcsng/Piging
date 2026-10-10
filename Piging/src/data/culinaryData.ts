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
  shortTitle: string; 
  fullName: string;   
  subtitle: string;   
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

// Updated paths pointing directly to the public/images folder
export const IMAGES = {
  luzon: '/images/luzon_banaue_terraces_1791559225968.jpg',
  visayas: '/images/visayas_chocolate_hills_1791559244743.jpg',
  mindanao: '/images/mindanao_enchanted_river_1791559262578.jpg',
  bagnet: '/images/dish_ilocos_bagnet_1791559275068.jpg',
  pakbet: '/images/dish_ilocos_pakbet_1791559289394.jpg',
  dinakdakan: '/images/dish_la_union_dinakdakan_1791559302985.jpg',
  tocino: '/images/dish_pampanga_tocino_1791559316554.jpg',
  lunis: '/images/dish_batanes_lunis_1791559334177.jpg',
};
