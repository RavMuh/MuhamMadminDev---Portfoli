import i18next from 'i18next';
import { NavLink } from 'react-router-dom';
import { Code2, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();

  const navItems = [
    { path: '/', label: <h1>{t('homenav')}</h1> },
    { path: '/projects', label: <h1>{t('projectsnav')}</h1> },
    { path: '/about', label: <h1>{t('aboutnav')}</h1> },
    { path: '/blog', label: <h1>{t('blognav')}</h1> },
    { path: '/contact', label: <h1>{t('contactnav')}</h1> },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg shadow-lg">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <NavLink to="/" className="flex items-center space-x-2 group">
              <Code2 className="w-8 h-8 text-primary-600 group-hover:text-secondary-600 transition-colors" />
              <span className="text-xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                {t('titlename')}
              </span>
            </NavLink>


            <select className='text-xl font-bold from-primary-600 to-secondary-600 bg-clip-text text-blue-400 text-blue-400 ' onChange={(e) => i18next.changeLanguage(e.target.value)}>
              <option value='uz' className='bg-slate-950'>Uzb</option>
              <option value='ru' className='bg-slate-950'>Rus</option>
              <option value='en' className='bg-slate-950'>Eng</option>
            </select>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `text-base font-medium transition-all hover:scale-105 ${isActive
                      ? 'text-primary-600 dark:text-primary-400'
                      : 'text-gray-600 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-primary-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 space-y-4 bg-white dark:bg-gray-800 rounded-lg p-4 shadow-lg">
              {navItems.map((item) => (

                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `block py-2 text-base font-medium transition-colors ${isActive
                      ? 'text-primary-600 dark:text-primary-400'
                      : 'text-gray-600 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400'
                    }`
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          )}

        </nav>
      </header>

    </>
  );
};

export default Header;