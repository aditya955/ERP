import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./sidebar.scss";

// Importing Icons
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import BookIcon from "@mui/icons-material/Book";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import SettingsIcon from "@mui/icons-material/Settings";
import CollectionsBookmarkIcon from "@mui/icons-material/CollectionsBookmark";
import MenuIcon from "@mui/icons-material/Menu";

const Sidebar = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [stepHeight, setStepHeight] = useState(0);
  const [isOpen, setIsOpen] = useState(true);
  const sidebarRef = useRef();
  const indicatorRef = useRef();
  const location = useLocation();

  useEffect(() => {
    setTimeout(() => {
      if (sidebarRef.current) {
        const sidebarItem = sidebarRef.current.querySelector(
          ".sidebar__menu__item"
        );
        indicatorRef.current.style.height = `${sidebarItem.clientHeight}px`;
        setStepHeight(sidebarItem.clientHeight);
      }
    }, 0);
  }, []);

  useEffect(() => {
    const curPath = window.location.pathname.split("/")[1];
    const activeItem =
      Array.from(sidebarRef.current.children).findIndex(
        (item) => item.getAttribute("href") === `/${curPath}`
      ) - 1;
    setActiveIndex(curPath.length === 0 ? 0 : activeItem);
    indicatorRef.current.style.transform = `translateX(-50%) translateY(${
      activeItem * stepHeight
    }px)`;
  }, [location, stepHeight]);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
      <div className="sidebar__toggle" onClick={toggleSidebar}>
        <MenuIcon />
      </div>
      <div className="sidebar__logo">OUR ERP System</div>
      <nav ref={sidebarRef} className="sidebar__menu">
        <div
          ref={indicatorRef}
          className="sidebar__menu__indicator"
          style={{
            transform: `translateX(-50%) translateY(${
              activeIndex * stepHeight
            }px)`,
          }}
        ></div>
        <Link to="/">
          <div
            className={`sidebar__menu__item ${
              activeIndex === 0 ? "active" : ""
            }`}
          >
            <div className="sidebar__menu__item__icon">
              <SpaceDashboardIcon />
            </div>
            <div className="sidebar__menu__item__text">Dashboard</div>
          </div>
        </Link>
        <Link to="/classes">
          <div
            className={`sidebar__menu__item ${
              activeIndex === 1 ? "active" : ""
            }`}
          >
            <div className="sidebar__menu__item__icon">
              <BookIcon />
            </div>
            <div className="sidebar__menu__item__text">Classes</div>
          </div>
        </Link>
        <Link to="/analytics">
          <div
            className={`sidebar__menu__item ${
              activeIndex === 2 ? "active" : ""
            }`}
          >
            <div className="sidebar__menu__item__icon">
              <AnalyticsIcon />
            </div>
            <div className="sidebar__menu__item__text">Analytics</div>
          </div>
        </Link>
        <Link to="/courses">
          <div
            className={`sidebar__menu__item ${
              activeIndex === 3 ? "active" : ""
            }`}
          >
            <div className="sidebar__menu__item__icon">
              <CollectionsBookmarkIcon />
            </div>
            <div className="sidebar__menu__item__text">Courses</div>
          </div>
        </Link>
        <Link to="/library">
          <div
            className={`sidebar__menu__item ${
              activeIndex === 4 ? "active" : ""
            }`}
          >
            <div className="sidebar__menu__item__icon">
              <LibraryBooksIcon />
            </div>
            <div className="sidebar__menu__item__text">Library</div>
          </div>
        </Link>
        <Link to="/settings">
          <div
            className={`sidebar__menu__item ${
              activeIndex === 5 ? "active" : ""
            }`}
          >
            <div className="sidebar__menu__item__icon">
              <SettingsIcon />
            </div>
            <div className="sidebar__menu__item__text">Settings</div>
          </div>
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
