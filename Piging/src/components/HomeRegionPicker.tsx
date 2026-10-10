import React from 'react';
import { ISLAND_GROUPS, IslandId } from '../data/culinaryData';
import {
  BambooSlatBorder,
  ResilientImage,
  WindowTapestryStrip,
} from './CulturalMotifs';
import { LeftSidebarNav, ActiveScreen } from './LeftSidebarNav';

interface HomeRegionPickerProps {
  activeScreen: ActiveScreen;
  favoritesCount: number;
  journalCount: number;
  onSelectIsland: (islandId: IslandId) => void;
  onNavigateHome: () => void;
  onNavigateFavorites: () => void;
  onNavigateMuseo: () => void;
  onOpenMenuDrawer: () => void;
}

export const HomeRegionPicker: React.FC<HomeRegionPickerProps> = ({
  activeScreen,
  favoritesCount,
  journalCount,
  onSelectIsland,
  onNavigateHome,
  onNavigateFavorites,
  onNavigateMuseo,
  onOpenMenuDrawer,
}) => {
  return (
    <div className="relative w-full min-h-[760px] h-full flex flex-col justify-between bg-terracotta-carved overflow-hidden">
      {/* Main Body Row: Left Sidebar + Right Carved Hardwood Frame */}
      <div className="flex-1 flex items-stretch pt-2 pb-1 pr-2">
        {/* Left Navigation Strip */}
        <LeftSidebarNav
          variant="embedded"
          activeScreen={activeScreen}
          favoritesCount={favoritesCount}
          journalCount={journalCount}
          onNavigateHome={onNavigateHome}
          onNavigateFavorites={onNavigateFavorites}
          onNavigateMuseo={onNavigateMuseo}
          onOpenMenuDrawer={onOpenMenuDrawer}
        />

        {/* Right Carved Hardwood Frame Container */}
        <div className="relative flex-1 rounded-[26px] bg-[#2D180C] border-[6px] border-[#4E2C18] shadow-[inset_0_2px_12px_rgba(0,0,0,0.85),0_8px_24px_rgba(0,0,0,0.5)] px-2.5 py-4 flex flex-col justify-between">
          {/* Top Woven Rattan Rope Binding Accent */}
          <div
            className="
              absolute -top-2.5 left-1/2 -translate-x-1/2 w-28 h-4 rounded-md
              bg-[repeating-linear-gradient(65deg,#C89654_0px,#C89654_4px,#7A491D_4px,#7A491D_7px)]
              border border-[#3D2314] shadow-md z-20
            "
            aria-hidden="true"
          />

          {/* 3 Stacked Island Group Cards (Luzon, Visayas, Mindanao) */}
          <div className="flex flex-col gap-3.5 my-auto">
            {ISLAND_GROUPS.map((island) => (
              <button
                key={island.id}
                type="button"
                onClick={() => onSelectIsland(island.id)}
                className="group w-full text-left rounded-xl bg-dark-wood p-1.5 border border-[#5C351E] hover:border-[#E8A238] transition-all duration-150 active:scale-[0.99] focus-visible:outline-2 focus-visible:outline-[#FFD24C] cursor-pointer shadow-md"
              >
                {/* Island Group Title (Luzon / Visayas / Mindanao) */}
                <div className="text-center pb-1">
                  <span className="font-woodblock font-extrabold text-2xl sm:text-[1.75rem] tracking-wide bg-gradient-to-r from-[#FF3B1F] via-[#FF8826] to-[#FFD24C] bg-clip-text text-transparent drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                    {island.name}
                  </span>
                </div>

                {/* Top Indigenous Tapestry Border */}
                <WindowTapestryStrip variant={island.weavePattern} />

                {/* Capiz-Shell Bahay na Bato Sliding Window Frame */}
                <div className="relative w-full h-32 sm:h-36 bg-[#D5CBB8] border-x-4 border-[#B89F7D] flex items-stretch overflow-hidden">
                  {/* Left Capiz Window Shutter */}
                  <div
                    className="w-9 sm:w-11 shrink-0 bg-[#DFD7C8]/85 backdrop-blur-[1px] border-r-4 border-[#8C6D46] flex flex-col justify-between p-1 z-10 group-hover:-translate-x-1 transition-transform duration-200"
                    aria-hidden="true"
                  >
                    <div className="flex-1 border-2 border-[#9B7B52] bg-white/35 mb-1" />
                    <div className="flex-1 border-2 border-[#9B7B52] bg-white/35 mb-1" />
                    <div className="flex-1 border-2 border-[#9B7B52] bg-white/35" />
                  </div>

                  {/* Center Landscape View */}
                  <div className="relative flex-1 overflow-hidden">
                    <ResilientImage
                      src={island.imageUrl}
                      alt={`${island.name} - ${island.landmarkName}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {/* Subtle bottom gradient for landmark label on hover */}
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent px-2.5 py-1 flex items-center justify-between">
                      <span className="text-[11px] font-medium text-[#FFF5CC] truncate">
                        {island.landmarkName}
                      </span>
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-[#FFD24C] whitespace-nowrap shrink-0 ml-2">
                        Explore →
                      </span>
                    </div>
                  </div>

                  {/* Right Capiz Window Shutter */}
                  <div
                    className="w-9 sm:w-11 shrink-0 bg-[#DFD7C8]/85 backdrop-blur-[1px] border-l-4 border-[#8C6D46] flex flex-col justify-between p-1 z-10 group-hover:translate-x-1 transition-transform duration-200"
                    aria-hidden="true"
                  >
                    <div className="flex-1 border-2 border-[#9B7B52] bg-white/35 mb-1" />
                    <div className="flex-1 border-2 border-[#9B7B52] bg-white/35 mb-1" />
                    <div className="flex-1 border-2 border-[#9B7B52] bg-white/35" />
                  </div>
                </div>

                {/* Bottom Indigenous Tapestry Border */}
                <WindowTapestryStrip variant={island.weavePattern} />
              </button>
            ))}
          </div>

          {/* Bottom Woven Rattan Rope Binding Accent */}
          <div
            className="
              absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-28 h-4 rounded-md
              bg-[repeating-linear-gradient(65deg,#C89654_0px,#C89654_4px,#7A491D_4px,#7A491D_7px)]
              border border-[#3D2314] shadow-md z-20
            "
            aria-hidden="true"
          />
        </div>
      </div>

      {/* Bottom Bamboo Slat Border */}
      <BambooSlatBorder heightClass="h-6" />
    </div>
  );
};
