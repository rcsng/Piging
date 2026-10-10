import React from 'react';
import { Home, Heart, BookOpen, Menu } from 'lucide-react';
import { WovenSidebarPatchButton } from './CulturalMotifs';

export type ActiveScreen =
  | 'splash'
  | 'home'
  | 'region-grid'
  | 'dish-list'
  | 'dish-detail'
  | 'favorites'
  | 'museo';

interface LeftSidebarNavProps {
  activeScreen: ActiveScreen;
  favoritesCount: number;
  journalCount: number;
  onNavigateHome: () => void;
  onNavigateFavorites: () => void;
  onNavigateMuseo: () => void;
  onOpenMenuDrawer: () => void;
  variant?: 'embedded' | 'floating';
}

export const LeftSidebarNav: React.FC<LeftSidebarNavProps> = ({
  activeScreen,
  favoritesCount,
  journalCount,
  onNavigateHome,
  onNavigateFavorites,
  onNavigateMuseo,
  onOpenMenuDrawer,
  variant = 'floating',
}) => {
  return (
    <aside
      aria-label="Primary Cultural Navigation"
      className={
        variant === 'embedded'
          ? 'w-16 shrink-0 flex flex-col items-center pt-5 pb-4 px-1.5 gap-3.5 select-none z-30'
          : 'w-14 sm:w-16 shrink-0 flex flex-col items-center py-3 px-1.5 gap-3 rounded-r-2xl bg-gradient-to-b from-[#9E7B56] via-[#7A5938] to-[#5E4227] border-y-2 border-r-2 border-[#3D2314] shadow-[4px_6px_16px_rgba(0,0,0,0.45)] select-none z-30'
      }
    >
      {/* Hamburger Menu Trigger (☰) */}
      <button
        type="button"
        onClick={onOpenMenuDrawer}
        aria-label="Open Navigation Menu"
        title="Menu & Quick Jump"
        className="w-11 h-11 rounded-lg flex items-center justify-center text-[#3D1459] hover:bg-black/15 active:scale-95 transition-all cursor-pointer"
      >
        <Menu className="w-7 h-7 stroke-[2.5] text-[#4A1525]" />
      </button>

      {/* Button 1: Home (Screen 2: Home Region Picker) */}
      <WovenSidebarPatchButton
        active={activeScreen === 'home' || activeScreen === 'region-grid'}
        onClick={onNavigateHome}
        label="Home Region Picker (Kapuluan)"
      >
        <Home className="w-6 h-6 text-[#8B1122] fill-[#8B1122]" />
      </WovenSidebarPatchButton>

      {/* Button 2: Museo & Cultural Journal Archive (Screen 7 / Talaan) */}
      <WovenSidebarPatchButton
        active={activeScreen === 'museo'}
        onClick={onNavigateMuseo}
        label="Museo Lasa-Suri & Cultural Journal"
        badgeCount={journalCount}
      >
        <BookOpen className="w-5 h-5 text-[#6D1A1A] stroke-[2.4]" />
      </WovenSidebarPatchButton>

      {/* Button 3: Paborito / Favorites (Screen 6) */}
      <WovenSidebarPatchButton
        active={activeScreen === 'favorites'}
        onClick={onNavigateFavorites}
        label="Paborito (Saved Favorite Dishes)"
        badgeCount={favoritesCount}
      >
        <Heart className="w-5 h-5 text-[#9B1126] fill-[#9B1126]" />
      </WovenSidebarPatchButton>
    </aside>
  );
};
