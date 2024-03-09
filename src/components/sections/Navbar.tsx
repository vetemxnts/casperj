import navItems from '@/constants/navItems';
import {Link} from '../../constants/scroll';

export default function Navbar() {
  return (
    <nav className="bg-black bg-opacity-75 navbar-body w-full h-12 sticky self-start top-0 z-50">
      <div className="w-full h-full box-border flex flex-row justify-center">
        {navItems.map(navItem => {
          return (
            <Link 
            to={navItem.references} 
            spy={true}
            offset={-96}
            duration={500}
            smooth={'easeOutQuint'}
            ignoreCancelEvents={true}
            key={navItem.key} 
            className="min-w-12 grid place-items-center navbar-hover" 
            >
              <div className="w-full grid place-items-center navbar-hover">
                <div className="max-h-4">
                  <p className="w-full h-4 text-[50%] leading-4 text-white grid place-items-center select-none">
                    {navItem.name}
                  </p>
                  <div className="pointer-events-none w-0 h-4 navbar-translate navbar-invert navbar-marker ease-out duration-200"></div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}


