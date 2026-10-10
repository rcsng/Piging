import React from 'react';
import { ArrowLeft } from 'lucide-react';
import {
  ISLAND_GROUPS,
  IslandId,
  REGIONS_DATA,
  RegionData,
} from '../data/culinaryData';
import {
  InabelWeaveBorder,
  IslandSilhouette,
  RegionCardOrnament,
} from './CulturalMotifs';
import { ActiveScreen, LeftSidebarNav } from './LeftSidebarNav';

interface RegionSubGridScreenProps {
  selectedIslandId: IslandId;
  activeScreen: ActiveScreen;
  favoritesCount: number;
  journalCount: number;
  onSelectIsland: (islandId: IslandId) => void;
  onSelectRegion: (region: RegionData) => void;
  onNavigateHome: () => void;
  onNavigateFavorites: () => void;
  onNavigateMuseo: () => void;
  onOpenMenuDrawer: () => void;
}

export const RegionSubGridScreen: React.FC<RegionSubGridScreenProps> = ({
  selectedIslandId,
  activeScreen,
  favoritesCount,
  journalCount,
  onSelectIsland,
  onSelectRegion,
  onNavigateHome,
  onNavigateFavorites,
  onNavigateMuseo,
  onOpenMenuDrawer,
}) => {
  const islandInfo =
    ISLAND_GROUPS.find((i) => i.id === selectedIslandId) || ISLAND_GROUPS[0];
  const regions = REGIONS_DATA.filter((r) => r.islandId === selectedIslandId);

  return (
    <div className="relative w-full min-h-[760px] h-full flex flex-col justify-between bg-terracotta-carved overflow-hidden select-none">
      {/* Diagonal Top-Right Indigenous Woven Ribbon (Matches Screenshot 3) */}
      <div
        className="absolute -top-6 -right-16 w-80 rotate-[22deg] pointer-events-none opacity-95 z-10 shadow-lg"
        aria-hidden="true"
      >
        <InabelWeaveBorder position="top" />
      </div>

      {/* Subtle Carved Relief Geometric Ring at Bottom (Matches Screenshot 3) */}
      <div
        className="absolute -bottom-28 left-1/2 -translate-x-1/2 w-[480px] h-[260px] rounded-t-full border-[14px] border-[#7B2814]/45 pointer-events-none"
        aria-hidden="true"
      />

      {/* Diagonal Bottom-Right Indigenous Woven Ribbon */}
      <div
        className="absolute -bottom-8 -right-20 w-72 rotate-[18deg] pointer-events-none opacity-95 z-10 shadow-lg"
        aria-hidden="true"
      >
        <InabelWeaveBorder position="bottom" />
      </div>

      {/* Main Content Layout with Left Floating Sidebar */}
      <div className="relative z-20 flex-1 flex items-start pt-10 pb-8 pr-4">
        {/* Left Floating Sidebar */}
        <div className="pt-2">
          <LeftSidebarNav
            variant="floating"
            activeScreen={activeScreen}
            favoritesCount={favoritesCount}
            journalCount={journalCount}
            onNavigateHome={onNavigateHome}
            onNavigateFavorites={onNavigateFavorites}
            onNavigateMuseo={onNavigateMuseo}
            onOpenMenuDrawer={onOpenMenuDrawer}
          />
        </div>

        {/* Right Main Column: Island Header + 2x2 Region Sub-Grid */}
        <div className="flex-1 pl-3 sm:pl-5 flex flex-col">
          {/* Quick Island Switcher & Back Row */}
          <div className="flex items-center justify-between gap-2 mb-3">
            <button
              type="button"
              onClick={onNavigateHome}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#3D2314]/85 text-[#FFF5CC] text-xs font-medium border border-[#E8A238]/40 hover:border-[#E8A238] transition-colors cursor-pointer whitespace-nowrap shrink-0"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>All Islands</span>
            </button>

            <div className="flex items-center gap-1 bg-[#3D2314]/80 p-1 rounded-lg border border-[#E8A238]/30">
              {ISLAND_GROUPS.map((isl) => (
                <button
                  key={isl.id}
                  type="button"
                  onClick={() => onSelectIsland(isl.id)}
                  className={`px-2.5 py-1 rounded text-[11px] font-semibold transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                    isl.id === selectedIslandId
                      ? 'bg-[#E8A238] text-[#2A150B]'
                      : 'text-[#F9F3EA]/80 hover:text-white'
                  }`}
                >
                  {isl.name}
                </button>
              ))}
            </div>
          </div>

          {/* Island Title & Map Silhouette Lockup (Matches Screenshot 3) */}
          <div className="flex items-center justify-between gap-3 px-1 py-3">
            <div>
              <h1
                className="font-filipiniana font-black uppercase text-4xl sm:text-5xl tracking-wider text-[#FFE28A] drop-shadow-[0_0_14px_rgba(255,196,61,0.55)]"
                style={{
                  textShadow:
                    '0 2px 0 #8C3B14, 0 0 18px rgba(255, 210, 76, 0.65)',
                }}
              >
                {islandInfo.name}
              </h1>
              {/* Glowing gold underline */}
              <div className="mt-1 h-1.5 w-36 sm:w-44 rounded-full bg-gradient-to-r from-[#FFE28A] via-[#F5A623] to-transparent shadow-[0_0_10px_#FFD24C]" />
              <p className="mt-2 text-xs text-[#FFF5CC]/90 font-medium">
                Select an administrative region to explore its heirloom dishes:
              </p>
            </div>

            {/* Island Map Silhouette */}
            <IslandSilhouette
              islandId={selectedIslandId}
              className="w-24 h-28 sm:w-28 sm:h-32 shrink-0 drop-shadow-[0_4px_8px_rgba(0,0,0,0.45)]"
            />
          </div>

          {/* 2x2 Wooden Plaque Region Sub-Grid */}
          <div className="grid grid-cols-2 gap-3.5 sm:gap-4 mt-4">
            {regions.map((region) => (
              <button
                key={region.id}
                type="button"
                onClick={() => onSelectRegion(region)}
                className="group relative min-h-[126px] sm:min-h-[138px] rounded-lg bg-dark-wood border-2 border-[#2A160B] shadow-[0_8px_18px_rgba(0,0,0,0.45)] hover:border-[#FFD24C] hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-150 flex flex-col justify-center items-center p-3 text-center cursor-pointer overflow-visible"
              >
                {/* Left Carved Wood Trim Bar */}
                <div
                  className="absolute inset-y-0 left-0 w-2.5 rounded-l-md bg-gradient-to-r from-[#6E4124] to-[#3A2010] border-r border-[#241208]"
                  aria-hidden="true"
                />
                {/* Right Carved Wood Trim Bar */}
                <div
                  className="absolute inset-y-0 right-0 w-2 rounded-r-md bg-gradient-to-l from-[#5A341C] to-[#2E190C] border-l border-[#241208]"
                  aria-hidden="true"
                />

                {/* Top-Right Festive Cultural Ornament */}
                <div className="absolute -top-4 -right-2 z-10 group-hover:scale-110 transition-transform duration-200">
                  <RegionCardOrnament type={region.ornamentType} />
                </div>

                {/* Region Plaque Title (e.g. Region 1) */}
                <span
                  className="font-woodblock font-black text-xl sm:text-2xl tracking-wide text-[#FFE600] drop-shadow-[0_2px_2px_rgba(0,0,0,0.85)]"
                  style={{
                    WebkitTextStroke: '0.8px #D32F2F',
                  }}
                >
                  {region.shortTitle}
                </span>

                {/* Region Subtitle (e.g. Ilocos Region) */}
                <span className="mt-1.5 text-[11px] sm:text-xs font-medium text-[#F9F3EA]/90 line-clamp-1">
                  {region.subtitle}
                </span>

                {/* Dish count indicator */}
                <span className="mt-2 text-[10px] font-semibold tracking-wider uppercase text-[#E8A238] group-hover:underline">
                  {region.dishes.length}{' '}
                  {region.dishes.length === 1 ? 'Heirloom Dish' : 'Heirloom Dishes'} →
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
