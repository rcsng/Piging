import React, { useState, useEffect } from 'react';
import {
  Compass,
  Heart,
  BookOpen,
  Sparkles,
  CheckCircle2,
  MapPin,
  Layers,
  X,
  Home,
  Utensils,
  RotateCcw,
} from 'lucide-react';
import {
  ALL_DISHES,
  DishData,
  INITIAL_FAVORITE_IDS,
  INITIAL_JOURNAL_ENTRIES,
  ISLAND_GROUPS,
  IslandId,
  JournalEntry,
  REGIONS_DATA,
  RegionData,
} from './data/culinaryData';
import { SplashScreen } from './components/SplashScreen';
import { HomeRegionPicker } from './components/HomeRegionPicker';
import { RegionSubGridScreen } from './components/RegionSubGridScreen';
import { DishListScreen } from './components/DishListScreen';
import { DishDetailScreen, ShsTabId } from './components/DishDetailScreen';
import { PaboritoScreen } from './components/PaboritoScreen';
import { MuseoScreen } from './components/MuseoScreen';
import { ActiveScreen } from './components/LeftSidebarNav';
import { ResilientImage } from './components/CulturalMotifs';

const FAVORITES_STORAGE_KEY = 'piging_favorites_v1';
const JOURNAL_STORAGE_KEY = 'piging_journal_entries_v1';

export default function App() {
  // Navigation State
  const [activeScreen, setActiveScreen] = useState<ActiveScreen>('splash');
  const [selectedIslandId, setSelectedIslandId] = useState<IslandId>('luzon');
  const [selectedRegion, setSelectedRegion] = useState<RegionData>(
    REGIONS_DATA[0] // Region 1 - Ilocos Region
  );
  const [selectedDish, setSelectedDish] = useState<DishData>(
    REGIONS_DATA[0].dishes[0] // Iloco's Bagnet
  );
  const [activeShsTab, setActiveShsTab] = useState<ShsTabId>('verification');
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  // TinyDB / LocalStorage State: Favorites (Paborito)
  const [favoriteIds, setFavoriteIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem(FAVORITES_STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) return parsed;
      }
    } catch {
      // Fallback to initial
    }
    return INITIAL_FAVORITE_IDS;
  });

  // TinyDB / LocalStorage State: Cultural Journal Entries (Aking Tala ng Pamana)
  const [journalEntries, setJournalEntries] = useState<JournalEntry[]>(() => {
    try {
      const saved = localStorage.getItem(JOURNAL_STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) return parsed;
      }
    } catch {
      // Fallback to initial
    }
    return INITIAL_JOURNAL_ENTRIES;
  });

  useEffect(() => {
    try {
      localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(favoriteIds));
    } catch {
      // Ignore storage quota errors
    }
  }, [favoriteIds]);

  useEffect(() => {
    try {
      localStorage.setItem(JOURNAL_STORAGE_KEY, JSON.stringify(journalEntries));
    } catch {
      // Ignore storage quota errors
    }
  }, [journalEntries]);

  // Handlers
  const handleStartFromSplash = () => {
    setActiveScreen('home');
  };

  const handleSelectIsland = (islandId: IslandId) => {
    setSelectedIslandId(islandId);
    const firstRegionOfIsland = REGIONS_DATA.find(
      (r) => r.islandId === islandId
    );
    if (firstRegionOfIsland) {
      setSelectedRegion(firstRegionOfIsland);
    }
    setActiveScreen('region-grid');
  };

  const handleSelectRegion = (region: RegionData) => {
    setSelectedIslandId(region.islandId);
    setSelectedRegion(region);
    setActiveScreen('dish-list');
  };

  const handleSelectDish = (dish: DishData, initialTab?: ShsTabId) => {
    setSelectedDish(dish);
    const parentRegion = REGIONS_DATA.find((r) => r.id === dish.regionId);
    if (parentRegion) {
      setSelectedRegion(parentRegion);
      setSelectedIslandId(parentRegion.islandId);
    }
    if (initialTab) {
      setActiveShsTab(initialTab);
    }
    setActiveScreen('dish-detail');
  };

  const handleToggleFavorite = (dishId: string) => {
    setFavoriteIds((prev) =>
      prev.includes(dishId)
        ? prev.filter((id) => id !== dishId)
        : [dishId, ...prev]
    );
  };

  const handleRestoreDefaultFavorites = () => {
    setFavoriteIds(INITIAL_FAVORITE_IDS);
  };

  const handleAddJournalEntry = (
    dishId: string,
    dishName: string,
    regionName: string,
    familyVariation: string,
    culturalReflection: string
  ) => {
    const newEntry: JournalEntry = {
      id: `entry-${Date.now()}`,
      dishId,
      dishName,
      regionName,
      familyVariation,
      culturalReflection,
      createdAt: new Date().toLocaleDateString('en-PH', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      }),
    };
    setJournalEntries((prev) => [newEntry, ...prev]);
  };

  const handleDeleteJournalEntry = (entryId: string) => {
    setJournalEntries((prev) => prev.filter((e) => e.id !== entryId));
  };

  return (
    <div className="min-h-screen bg-[#1A0E08] text-[#F9F3EA] flex flex-col">
      {/* Top Bar Contract (Desktop Header: 3 Zones separated by gap-8) */}
      <header className="hidden lg:flex items-center justify-between gap-8 px-8 py-3.5 bg-[#24130B] border-b border-[#4E2C18]">
        {/* Zone 1: Single text element wordmark */}
        <button
          type="button"
          onClick={() => setActiveScreen('splash')}
          className="font-filipiniana font-black text-xl tracking-wider text-[#FFD24C] whitespace-nowrap shrink-0 cursor-pointer"
        >
          PIGING
        </button>

        {/* Zone 2: 5 concise single-line text navigation links */}
        <nav
          aria-label="Screen Switcher"
          className="flex items-center gap-6 text-sm font-medium text-[#F9F3EA]/80"
        >
          <button
            type="button"
            onClick={() => setActiveScreen('splash')}
            className={`hover:text-[#FFD24C] transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
              activeScreen === 'splash'
                ? 'text-[#FFD24C] underline underline-offset-4'
                : ''
            }`}
          >
            Splash Screen
          </button>
          <button
            type="button"
            onClick={() => setActiveScreen('home')}
            className={`hover:text-[#FFD24C] transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
              activeScreen === 'home'
                ? 'text-[#FFD24C] underline underline-offset-4'
                : ''
            }`}
          >
            Island Picker
          </button>
          <button
            type="button"
            onClick={() => setActiveScreen('region-grid')}
            className={`hover:text-[#FFD24C] transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
              activeScreen === 'region-grid'
                ? 'text-[#FFD24C] underline underline-offset-4'
                : ''
            }`}
          >
            Region Grid
          </button>
          <button
            type="button"
            onClick={() => setActiveScreen('dish-list')}
            className={`hover:text-[#FFD24C] transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
              activeScreen === 'dish-list'
                ? 'text-[#FFD24C] underline underline-offset-4'
                : ''
            }`}
          >
            Dish List
          </button>
          <button
            type="button"
            onClick={() => setActiveScreen('favorites')}
            className={`hover:text-[#FFD24C] transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
              activeScreen === 'favorites'
                ? 'text-[#FFD24C] underline underline-offset-4'
                : ''
            }`}
          >
            Paborito ({favoriteIds.length})
          </button>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center shrink-0">
          <button
            type="button"
            onClick={() =>
              handleSelectDish(REGIONS_DATA[0].dishes[0], 'verification')
            }
            className="px-4 py-2 text-xs font-bold text-[#23140D] bg-[#E8A238] hover:bg-[#FFD24C] rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Open Bagnet Study
          </button>
        </div>
      </header>

      {/* Main Responsive Workspace */}
      <main className="flex-1 w-full max-w-7xl mx-auto lg:px-8 lg:py-6 flex flex-col lg:flex-row items-center lg:items-start justify-center gap-8">
        {/* LEFT / CENTER: Interactive Mobile App Viewport Frame */}
        <div className="w-full max-w-[430px] lg:shrink-0 relative rounded-none sm:rounded-[34px] overflow-hidden sm:border-[6px] sm:border-[#3D2314] shadow-[0_24px_60px_rgba(0,0,0,0.75)] bg-[#23140D]">
          {activeScreen === 'splash' && (
            <SplashScreen onStart={handleStartFromSplash} />
          )}

          {activeScreen === 'home' && (
            <HomeRegionPicker
              activeScreen={activeScreen}
              favoritesCount={favoriteIds.length}
              journalCount={journalEntries.length}
              onSelectIsland={handleSelectIsland}
              onNavigateHome={() => setActiveScreen('home')}
              onNavigateFavorites={() => setActiveScreen('favorites')}
              onNavigateMuseo={() => setActiveScreen('museo')}
              onOpenMenuDrawer={() => setIsDrawerOpen(true)}
            />
          )}

          {activeScreen === 'region-grid' && (
            <RegionSubGridScreen
              selectedIslandId={selectedIslandId}
              activeScreen={activeScreen}
              favoritesCount={favoriteIds.length}
              journalCount={journalEntries.length}
              onSelectIsland={handleSelectIsland}
              onSelectRegion={handleSelectRegion}
              onNavigateHome={() => setActiveScreen('home')}
              onNavigateFavorites={() => setActiveScreen('favorites')}
              onNavigateMuseo={() => setActiveScreen('museo')}
              onOpenMenuDrawer={() => setIsDrawerOpen(true)}
            />
          )}

          {activeScreen === 'dish-list' && (
            <DishListScreen
              region={selectedRegion}
              favoriteIds={favoriteIds}
              onBackToRegions={() => setActiveScreen('region-grid')}
              onNavigateHome={() => setActiveScreen('home')}
              onNavigateFavorites={() => setActiveScreen('favorites')}
              onSelectDish={(dish) => handleSelectDish(dish)}
              onToggleFavorite={handleToggleFavorite}
            />
          )}

          {activeScreen === 'dish-detail' && (
            <DishDetailScreen
              dish={selectedDish}
              activeTab={activeShsTab}
              onTabChange={setActiveShsTab}
              isFavorite={favoriteIds.includes(selectedDish.id)}
              favoritesCount={favoriteIds.length}
              journalEntries={journalEntries}
              onToggleFavorite={handleToggleFavorite}
              onAddJournalEntry={handleAddJournalEntry}
              onDeleteJournalEntry={handleDeleteJournalEntry}
              onBackToList={() => setActiveScreen('dish-list')}
              onNavigateHome={() => setActiveScreen('home')}
              onNavigateFavorites={() => setActiveScreen('favorites')}
              onNavigateMuseo={() => setActiveScreen('museo')}
              onOpenMenuDrawer={() => setIsDrawerOpen(true)}
              activeScreen={activeScreen}
            />
          )}

          {activeScreen === 'favorites' && (
            <PaboritoScreen
              favoriteIds={favoriteIds}
              journalCount={journalEntries.length}
              activeScreen={activeScreen}
              onSelectDish={(dish) => handleSelectDish(dish)}
              onToggleFavorite={handleToggleFavorite}
              onRestoreDefaults={handleRestoreDefaultFavorites}
              onNavigateHome={() => setActiveScreen('home')}
              onNavigateFavorites={() => setActiveScreen('favorites')}
              onNavigateMuseo={() => setActiveScreen('museo')}
              onOpenMenuDrawer={() => setIsDrawerOpen(true)}
            />
          )}

          {activeScreen === 'museo' && (
            <MuseoScreen
              onSelectDish={(dish) => handleSelectDish(dish, 'history')}
              onNavigateHome={() => setActiveScreen('home')}
              onOpenMenuDrawer={() => setIsDrawerOpen(true)}
            />
          )}

          {/* Slide-Out Mobile Menu Drawer (Triggered by ☰ Hamburger Icon) */}
          {isDrawerOpen && (
            <div className="absolute inset-0 z-50 bg-black/70 backdrop-blur-xs flex">
              <div className="w-72 h-full bg-[#2B170E] border-r-2 border-[#E8A238] p-5 flex flex-col justify-between text-[#FFF5CC] shadow-2xl">
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-[#5C351E]">
                    <div>
                      <span className="font-filipiniana font-black text-xl text-[#FFD24C]">
                        PIGING
                      </span>
                      <p className="text-[11px] text-[#F9F3EA]/75">
                        Lasa-Suri Cultural Navigation
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setIsDrawerOpen(false)}
                      className="p-1.5 rounded-lg text-[#FFF5CC]/70 hover:text-white cursor-pointer"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Drawer Screen Links */}
                  <div className="mt-4 space-y-1.5">
                    <button
                      type="button"
                      onClick={() => {
                        setActiveScreen('splash');
                        setIsDrawerOpen(false);
                      }}
                      className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-semibold hover:bg-[#3D2314] text-left cursor-pointer"
                    >
                      <Sparkles className="w-4 h-4 text-[#FFD24C]" />
                      <span>1. Splash Screen (Kaon Na!)</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        setActiveScreen('home');
                        setIsDrawerOpen(false);
                      }}
                      className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-semibold hover:bg-[#3D2314] text-left cursor-pointer"
                    >
                      <Home className="w-4 h-4 text-[#FFD24C]" />
                      <span>2. Home Island Picker</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        setActiveScreen('region-grid');
                        setIsDrawerOpen(false);
                      }}
                      className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-semibold hover:bg-[#3D2314] text-left cursor-pointer"
                    >
                      <Compass className="w-4 h-4 text-[#FFD24C]" />
                      <span>
                        3. {selectedIslandId.toUpperCase()} Region Sub-Grid
                      </span>
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        setActiveScreen('dish-list');
                        setIsDrawerOpen(false);
                      }}
                      className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-semibold hover:bg-[#3D2314] text-left cursor-pointer"
                    >
                      <Utensils className="w-4 h-4 text-[#FFD24C]" />
                      <span>4. {selectedRegion.shortTitle} Dish List</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        setActiveScreen('dish-detail');
                        setIsDrawerOpen(false);
                      }}
                      className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-semibold hover:bg-[#3D2314] text-left cursor-pointer"
                    >
                      <Layers className="w-4 h-4 text-[#FFD24C]" />
                      <span>5. {selectedDish.name} (4 SHS Tabs)</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        setActiveScreen('favorites');
                        setIsDrawerOpen(false);
                      }}
                      className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-semibold hover:bg-[#3D2314] text-left cursor-pointer"
                    >
                      <Heart className="w-4 h-4 text-[#FF4D6D] fill-[#FF4D6D]" />
                      <span>6. Paborito ({favoriteIds.length} Saved)</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        setActiveScreen('museo');
                        setIsDrawerOpen(false);
                      }}
                      className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-semibold hover:bg-[#3D2314] text-left cursor-pointer"
                    >
                      <BookOpen className="w-4 h-4 text-[#FFD24C]" />
                      <span>7. Museo Lasa-Suri Exhibition</span>
                    </button>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#5C351E] text-[11px] text-[#F9F3EA]/70">
                  <p className="font-semibold text-[#FFD24C]">
                    Taste the Culture, Share the Story
                  </p>
                  <p className="mt-0.5">
                    UCSP · MIL · Philosophy · Filipino sa Piling Larang
                  </p>
                </div>
              </div>
              <div
                className="flex-1"
                onClick={() => setIsDrawerOpen(false)}
              />
            </div>
          )}
        </div>

        {/* RIGHT COLUMN (Desktop Companion Panel for Full 1440px Presence) */}
        <div className="hidden lg:flex flex-1 flex-col gap-6 pt-1">
          {/* Interactive Screen & User Journey Explorer */}
          <section className="rounded-2xl bg-[#27150C] border border-[#4E2C18] p-6">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-[#E8A238]">
                  Lasa-Suri · Interactive Cultural Heritage Architecture
                </p>
                <h2 className="mt-1 font-woodblock font-bold text-2xl text-[#FFF5CC]">
                  Philippine Regional Culinary Atlas &amp; SHS Portal
                </h2>
              </div>
              <button
                type="button"
                onClick={handleRestoreDefaultFavorites}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#3D2314] hover:bg-[#4E2C18] text-xs font-medium text-[#FFD24C] border border-[#E8A238]/30 cursor-pointer whitespace-nowrap shrink-0"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset Demo Paborito</span>
              </button>
            </div>

            <p className="mt-2 text-sm text-[#F9F3EA]/80 leading-relaxed max-w-2xl">
              Navigate directly inside the mobile device frame on the left or
              use the quick-jump controls below to inspect every screen,
              administrative region, heirloom dish, and Senior High School
              subject integration tab.
            </p>

            {/* 7-Screen Quick-Jump Bar */}
            <div className="mt-5 grid grid-cols-3 xl:grid-cols-4 gap-2.5">
              {[
                {
                  id: 'splash' as ActiveScreen,
                  step: '01. Splash Screen',
                  desc: 'Woven bamboo & Kaon Na! CTA',
                },
                {
                  id: 'home' as ActiveScreen,
                  step: '02. Island Picker',
                  desc: 'Luzon, Visayas & Mindanao',
                },
                {
                  id: 'region-grid' as ActiveScreen,
                  step: '03. Region Sub-Grid',
                  desc: `${selectedIslandId.toUpperCase()} 2x2 Wood Plaques`,
                },
                {
                  id: 'dish-list' as ActiveScreen,
                  step: '04. Dish Listing',
                  desc: selectedRegion.fullName,
                },
                {
                  id: 'dish-detail' as ActiveScreen,
                  step: '05. Dish & 4 SHS Tabs',
                  desc: selectedDish.name,
                },
                {
                  id: 'favorites' as ActiveScreen,
                  step: '06. Paborito Screen',
                  desc: `${favoriteIds.length} Bookmarked Dishes`,
                },
                {
                  id: 'museo' as ActiveScreen,
                  step: '07. The Museum View',
                  desc: 'Curatorial Gallery Carousel',
                },
              ].map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveScreen(item.id)}
                  className={`p-3 rounded-xl text-left border transition-all cursor-pointer ${
                    activeScreen === item.id
                      ? 'bg-[#3D2314] border-[#FFD24C] shadow-md'
                      : 'bg-[#1E1009] border-[#3D2314] hover:border-[#8C5832]'
                  }`}
                >
                  <span className="block text-xs font-bold text-[#FFD24C] truncate">
                    {item.step}
                  </span>
                  <span className="mt-0.5 block text-[11px] text-[#F9F3EA]/75 truncate">
                    {item.desc}
                  </span>
                </button>
              ))}
            </div>
          </section>

          {/* Direct 4-Tab SHS Academic Subject Switcher & Dish Matrix */}
          <section className="rounded-2xl bg-[#27150C] border border-[#4E2C18] p-6">
            <div className="flex items-center justify-between gap-4 mb-4">
              <div>
                <h3 className="font-woodblock font-bold text-lg text-[#FFF5CC]">
                  4-Tab Senior High School Subject Integration ({selectedDish.name})
                </h3>
                <p className="text-xs text-[#F9F3EA]/70">
                  Click any academic lens below to open it immediately on Screen 5:
                </p>
              </div>
              <span className="text-xs font-medium text-[#E8A238]">
                {selectedDish.province} · {selectedDish.regionName}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {[
                {
                  tab: 'history' as ShsTabId,
                  code: 'Tab 1 · UCSP',
                  title: 'History & Cultural Origins',
                  summary:
                    'Anthropological evolution, pre-colonial sangkutsa & salt preservation, and material vessels.',
                },
                {
                  tab: 'verification' as ShsTabId,
                  code: 'Tab 2 · MIL',
                  title: 'Verification & Recipe Fact-Check',
                  summary:
                    'Heirloom vs. modern ingredients, live Recipe Discrepancy Scanner, and verified YouTube tutorials.',
                },
                {
                  tab: 'philosophy' as ShsTabId,
                  code: 'Tab 3 · Philosophy',
                  title: 'Philosophy & Cultural Journal',
                  summary:
                    'Reflection prompt on safeguarding authentic regional flavors + Aking Tala ng Pamana storage.',
                },
                {
                  tab: 'fpl' as ShsTabId,
                  code: 'Tab 4 · FPL (Akademik)',
                  title: 'Filipino sa Piling Larangan',
                  summary:
                    'Larawang-Sanaysay (Photo Essay) comparing modern kitchen shortcuts with traditional craftsmanship.',
                },
              ].map((t) => (
                <button
                  key={t.tab}
                  type="button"
                  onClick={() => {
                    setActiveShsTab(t.tab);
                    setActiveScreen('dish-detail');
                  }}
                  className={`p-3.5 rounded-xl text-left border transition-all cursor-pointer ${
                    activeScreen === 'dish-detail' && activeShsTab === t.tab
                      ? 'bg-[#3D2314] border-[#FFD24C]'
                      : 'bg-[#1E1009] border-[#3D2314] hover:border-[#8C5832]'
                  }`}
                >
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#E8A238]">
                    {t.code}
                  </span>
                  <h4 className="mt-0.5 font-woodblock font-bold text-sm text-white">
                    {t.title}
                  </h4>
                  <p className="mt-1 text-xs text-[#F9F3EA]/75 leading-relaxed">
                    {t.summary}
                  </p>
                </button>
              ))}
            </div>
          </section>

          {/* Complete Archipelago Dish Directory */}
          <section className="rounded-2xl bg-[#27150C] border border-[#4E2C18] p-6">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-woodblock font-bold text-lg text-[#FFF5CC]">
                Featured Regional Heirloom Dishes ({ALL_DISHES.length} Dishes)
              </h3>
              <div className="flex items-center gap-2 text-xs text-[#F9F3EA]/70">
                <span>Luzon</span>
                <span aria-hidden="true">·</span>
                <span>Visayas</span>
                <span aria-hidden="true">·</span>
                <span>Mindanao</span>
              </div>
            </div>

            <div className="grid grid-cols-2 xl:grid-cols-3 gap-3">
              {ALL_DISHES.map((dish) => {
                const isFav = favoriteIds.includes(dish.id);
                const isSelected = selectedDish.id === dish.id;
                return (
                  <div
                    key={dish.id}
                    className={`rounded-xl p-2.5 border flex items-center gap-3 transition-colors ${
                      isSelected
                        ? 'bg-[#3D2314] border-[#FFD24C]'
                        : 'bg-[#1E1009] border-[#3D2314] hover:border-[#8C5832]'
                    }`}
                  >
                    <div
                      onClick={() => handleSelectDish(dish)}
                      className="w-14 h-14 rounded-lg overflow-hidden shrink-0 border border-[#8C5832] cursor-pointer"
                    >
                      <ResilientImage
                        src={dish.imageUrl}
                        alt={dish.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <button
                        type="button"
                        onClick={() => handleSelectDish(dish)}
                        className="font-editorial font-bold text-xs text-white hover:text-[#FFD24C] truncate block text-left w-full cursor-pointer"
                      >
                        {dish.name}
                      </button>
                      <p className="text-[10px] text-[#F9F3EA]/70 truncate">
                        {dish.regionName}
                      </p>
                      <div className="mt-1 flex items-center justify-between">
                        <button
                          type="button"
                          onClick={() => handleSelectDish(dish)}
                          className="text-[10px] font-semibold text-[#E8A238] hover:underline cursor-pointer"
                        >
                          Read More →
                        </button>
                        <button
                          type="button"
                          onClick={() => handleToggleFavorite(dish.id)}
                          aria-label={`Toggle favorite for ${dish.name}`}
                          className="p-1 cursor-pointer"
                        >
                          <Heart
                            className={`w-3.5 h-3.5 ${
                              isFav
                                ? 'fill-[#FF4D6D] text-[#FF4D6D]'
                                : 'text-[#F9F3EA]/50 hover:text-white'
                            }`}
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
