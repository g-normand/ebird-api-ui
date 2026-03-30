import geographyPages from '../../pages/ref/geo/pages';
import hotspotPages from '../../pages/ref/hotspot/pages';
import NavMenu, {
  Props as NavMenuProps,
} from '../../components/NavMenu/NavMenu';
import observationsPages from '../../pages/obs/pages';
import productPages from '../../pages/product/pages';
import regionPages from '../../pages/ref/region/pages';
import taxonomyPages from '../../pages/ref/taxonomy/pages';
import './Nav.scss';

const navMenus: NavMenuProps[] = [
  {
    folderLabel: 'Geography',
    folderPath: 'geography',
    pages: geographyPages,
  },
  {
    folderLabel: 'Hotspots',
    folderPath: 'hotspots',
    pages: hotspotPages,
  },
  {
    folderLabel: 'Observations',
    folderPath: 'observations',
    pages: observationsPages,
  },
  {
    folderLabel: 'Product',
    folderPath: 'product',
    pages: productPages,
  },
  {
    folderLabel: 'Regions',
    folderPath: 'regions',
    pages: regionPages,
  },
  {
    alignToRight: true,
    folderLabel: 'Taxonomy',
    folderPath: 'taxonomy',
    pages: taxonomyPages,
  },
];

export default function Nav() {
  return (
    <nav className="nav">
      <menu className="nav__menu">
        {navMenus.map(({ alignToRight, folderLabel, folderPath, pages }) => (
          <NavMenu
            alignToRight={alignToRight}
            folderLabel={folderLabel}
            folderPath={folderPath}
            key={folderPath}
            pages={pages}
          />
        ))}
      </menu>
    </nav>
  );
}
