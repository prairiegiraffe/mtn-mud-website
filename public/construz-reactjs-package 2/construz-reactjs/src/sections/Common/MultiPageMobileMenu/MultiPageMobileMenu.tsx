import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const MultiPageMobileMenu = ({ isMenuOpen, setIsMenuOpen }: any) => {
    const [isHomeMenuOpen, setIsHomeMenuOpen] = useState(false);
    const [isMultiPageMenuOpen, setIsMultiPageMenuOpen] = useState(false);
    const [isOnePageMenuOpen, setIsOnePageMenuOpen] = useState(false);
    const [isPagesMenuOpen, setIsPagesMenuOpen] = useState(false);
    const [isProjectMenuOpen, setIsProjectMenuOpen] = useState(false);
    const [isServiceMenuOpen, setIsServiceMenuOpen] = useState<any>(false);
    const [isShopMenuOpen, setIsShopMenuOpen] = useState(false);
    const [isBlogMenuOpen, setIsBlogMenuOpen] = useState<any>(false);

 


    const handleMobileMenuClose = () => {
        setIsMenuOpen(false);
    }

    // Home

    const [menuStyles, setMenuStyles] = useState<any>({
        isHomeMenu: {
            opacity: 0,
            transition: 'opacity 0.5s ease',
            display: 'none',
        },
        isMultiPageMenu: {
            opacity: 0,
            transition: 'opacity 0.5s ease',
            display: 'none',
        },
        isOnePageMenu: {
            opacity: 0,
            transition: 'opacity 0.5s ease',
            display: 'none',
        },
        isPagesMenu: {
            opacity: 0,
            transition: 'opacity 0.5s ease',
            display: 'none',
        },
        isProjectMenu: {
            opacity: 0,
            transition: 'opacity 0.5s ease',
            display: 'none',
        },
    });


    useEffect(() => {
        if (isHomeMenuOpen) {
            setMenuStyles(( prevStyles : any) => ({
                ...prevStyles,
                isHomeMenu: {
                    ...prevStyles.isHomeMenu,
                    display: 'block',
                },
            }));
            setTimeout(() => {
                setMenuStyles(( prevStyles : any) => ({
                    ...prevStyles,
                    isHomeMenu: {
                        ...prevStyles.isHomeMenu,
                        opacity: 1,
                    },
                }));
            }, 100);
        } else {
            setMenuStyles(( prevStyles : any) => ({
                ...prevStyles,
                isHomeMenu: {
                    ...prevStyles.isHomeMenu,
                    opacity: 0,
                },
            }));
            setTimeout(() => {
                setMenuStyles(( prevStyles : any) => ({
                    ...prevStyles,
                    isHomeMenu: {
                        ...prevStyles.isHomeMenu,
                        display: 'none',
                    },
                }));
            }, 500);
        }
    }, [isHomeMenuOpen]);
    // MultiPage
    useEffect(() => {
        if (isMultiPageMenuOpen) {
            setMenuStyles(( prevStyles : any) => ({
                ...prevStyles,
                isMultiPageMenu: {
                    ...prevStyles.isMultiPageMenu,
                    display: 'block',
                },
            }));
            setTimeout(() => {
                setMenuStyles(( prevStyles : any) => ({
                    ...prevStyles,
                    isMultiPageMenu: {
                        ...prevStyles.isMultiPageMenu,
                        opacity: 1,
                    },
                }));
            }, 100);
        } else {
            setMenuStyles(( prevStyles : any) => ({
                ...prevStyles,
                isMultiPageMenu: {
                    ...prevStyles.isMultiPageMenu,
                    opacity: 0,
                },
            }));
            setTimeout(() => {
                setMenuStyles(( prevStyles : any) => ({
                    ...prevStyles,
                    isMultiPageMenu: {
                        ...prevStyles.isMultiPageMenu,
                        display: 'none',
                    },
                }));
            }, 300);
        }
    }, [isMultiPageMenuOpen]);
    // OnePage
    useEffect(() => {
        if (isOnePageMenuOpen) {
            setMenuStyles(( prevStyles : any) => ({
                ...prevStyles,
                isOnePageMenu: {
                    ...prevStyles.isOnePageMenu,
                    display: 'block',
                },
            }));
            setTimeout(() => {
                setMenuStyles(( prevStyles : any) => ({
                    ...prevStyles,
                    isOnePageMenu: {
                        ...prevStyles.isOnePageMenu,
                        opacity: 1,
                    },
                }));
            }, 100);
        } else {
            setMenuStyles(( prevStyles : any) => ({
                ...prevStyles,
                isOnePageMenu: {
                    ...prevStyles.isOnePageMenu,
                    opacity: 0,
                },
            }));
            setTimeout(() => {
                setMenuStyles(( prevStyles : any) => ({
                    ...prevStyles,
                    isOnePageMenu: {
                        ...prevStyles.isOnePageMenu,
                        display: 'none',
                    },
                }));
            }, 300);
        }
    }, [isOnePageMenuOpen]);
    // PagesPage
    useEffect(() => {
        if (isPagesMenuOpen) {
            setMenuStyles(( prevStyles : any) => ({
                ...prevStyles,
                isPagesMenu: {
                    ...prevStyles.isPagesMenu,
                    display: 'block',
                },
            }));
            setTimeout(() => {
                setMenuStyles(( prevStyles : any) => ({
                    ...prevStyles,
                    isPagesMenu: {
                        ...prevStyles.isPagesMenu,
                        opacity: 1,
                    },
                }));
            }, 100);
        } else {
            setMenuStyles(( prevStyles : any) => ({
                ...prevStyles,
                isPagesMenu: {
                    ...prevStyles.isPagesMenu,
                    opacity: 0,
                },
            }));
            setTimeout(() => {
                setMenuStyles(( prevStyles : any) => ({
                    ...prevStyles,
                    isPagesMenu: {
                        ...prevStyles.isPagesMenu,
                        display: 'none',
                    },
                }));
            }, 300);
        }
    }, [isPagesMenuOpen]);
    // ProjectPage
    useEffect(() => {
        if (isProjectMenuOpen) {
            setMenuStyles(( prevStyles : any) => ({
                ...prevStyles,
                isProjectMenu: {
                    ...prevStyles.isProjectMenu,
                    display: 'block',
                },
            }));
            setTimeout(() => {
                setMenuStyles(( prevStyles : any) => ({
                    ...prevStyles,
                    isProjectMenu: {
                        ...prevStyles.isProjectMenu,
                        opacity: 1,
                    },
                }));
            }, 100);
        } else {
            setMenuStyles(( prevStyles : any) => ({
                ...prevStyles,
                isProjectMenu: {
                    ...prevStyles.isProjectMenu,
                    opacity: 0,
                },
            }));
            setTimeout(() => {
                setMenuStyles(( prevStyles : any) => ({
                    ...prevStyles,
                    isProjectMenu: {
                        ...prevStyles.isProjectMenu,
                        display: 'none',
                    },
                }));
            }, 300);
        }
    }, [isProjectMenuOpen]);
    // Service
    useEffect(() => {
        if (isServiceMenuOpen) {
            setMenuStyles(( prevStyles : any) => ({
                ...prevStyles,
                isServiceMenu: {
                    ...prevStyles.isServiceMenu,
                    display: 'block',
                },
            }));
            setTimeout(() => {
                setMenuStyles(( prevStyles : any) => ({
                    ...prevStyles,
                    isServiceMenu: {
                        ...prevStyles.isServiceMenu,
                        opacity: 1,
                    },
                }));
            }, 100);
        } else {
            setMenuStyles(( prevStyles : any) => ({
                ...prevStyles,
                isServiceMenu: {
                    ...prevStyles.isServiceMenu,
                    opacity: 0,
                },
            }));
            setTimeout(() => {
                setMenuStyles(( prevStyles : any) => ({
                    ...prevStyles,
                    isServiceMenu: {
                        ...prevStyles.isServiceMenu,
                        display: 'none',
                    },
                }));
            }, 300);
        }
    }, [isServiceMenuOpen]);
    // ShopPage
    useEffect(() => {
        if (isShopMenuOpen) {
            setMenuStyles(( prevStyles : any) => ({
                ...prevStyles,
                isShopMenu: {
                    ...prevStyles.isShopMenu,
                    display: 'block',
                },
            }));
            setTimeout(() => {
                setMenuStyles(( prevStyles : any) => ({
                    ...prevStyles,
                    isShopMenu: {
                        ...prevStyles.isShopMenu,
                        opacity: 1,
                    },
                }));
            }, 100);
        } else {
            setMenuStyles(( prevStyles : any) => ({
                ...prevStyles,
                isShopMenu: {
                    ...prevStyles.isShopMenu,
                    opacity: 0,
                },
            }));
            setTimeout(() => {
                setMenuStyles(( prevStyles : any) => ({
                    ...prevStyles,
                    isShopMenu: {
                        ...prevStyles.isShopMenu,
                        display: 'none',
                    },
                }));
            }, 300);
        }
    }, [isShopMenuOpen]);
    // BlogPage
    useEffect(() => {
        if (isBlogMenuOpen) {
            setMenuStyles(( prevStyles : any) => ({
                ...prevStyles,
                isBlogMenu: {
                    ...prevStyles.isBlogMenu,
                    display: 'block',
                },
            }));
            setTimeout(() => {
                setMenuStyles(( prevStyles : any) => ({
                    ...prevStyles,
                    isBlogMenu: {
                        ...prevStyles.isBlogMenu,
                        opacity: 1,
                    },
                }));
            }, 100);
        } else {
            setMenuStyles(( prevStyles : any) => ({
                ...prevStyles,
                isBlogMenu: {
                    ...prevStyles.isBlogMenu,
                    opacity: 0,
                },
            }));
            setTimeout(() => {
                setMenuStyles(( prevStyles : any) => ({
                    ...prevStyles,
                    isBlogMenu: {
                        ...prevStyles.isBlogMenu,
                        display: 'none',
                    },
                }));
            }, 300);
        }
    }, [isBlogMenuOpen]);

 



    return (
        <div className={`mobile-menu-wrapper ${isMenuOpen ? 'body-visible' : ''}`}>
            <div className="mobile-menu-area">
                <div className="mobile-logo">
                    <Link to="/home-1">
                        <img src="/assets/img/logo.svg" alt="Construz" />
                    </Link>
                    <button onClick={handleMobileMenuClose} className="menu-toggle">
                        <i className="ri-close-line"></i>
                    </button>
                </div>
                <div className="mobile-menu">
                    <ul>
                        <li className={`menu-item-has-children submenu-item-has-children ${isHomeMenuOpen ? 'active-class' : ''}`}>
                            <Link onClick={() => setIsHomeMenuOpen(!isHomeMenuOpen)} to="#">Home <span className="mean-expand-class"></span></Link>
                            <ul className={`sub-menu submenu-class ${isHomeMenuOpen ? 'menu-open' : ''}`} style={menuStyles.isHomeMenu ?? {}}>
                                <li className={`menu-item-has-children submenu-item-has-children ${isMultiPageMenuOpen ? 'active-class' : ''}`}>
                                    <Link onClick={() => setIsMultiPageMenuOpen(!isMultiPageMenuOpen)} to="#">Multipage <span className="mean-expand-class"></span></Link>
                                    <ul className={`sub-menu submenu-class ${isMultiPageMenuOpen ? 'menu-open' : ''}`} style={menuStyles.isMultiPageMenu ?? {}}>
                                        <li><Link to="/home-1">Home 01</Link></li>
                                        <li><Link to="/home-2">Home 02</Link></li>
                                        <li><Link to="/home-3">Home 03</Link></li>
                                        <li><Link to="/home-4">Home 04</Link></li>
                                        <li><Link to="/home-5">Home 05</Link></li>
                                    </ul>
                                </li>
                                <li className={`menu-item-has-children submenu-item-has-children ${isOnePageMenuOpen ? 'active-class' : ''}`}>
                                    <Link onClick={() => setIsOnePageMenuOpen(!isOnePageMenuOpen)} to="#">Onepage <span className="mean-expand-class"></span></Link>
                                    <ul className={`sub-menu submenu-class ${isOnePageMenuOpen ? 'menu-open' : ''}`} style={menuStyles.isOnePageMenu ?? {}}>
                                        <li><Link to="/home-1-op">Home 01 Onepage</Link></li>
                                        <li><Link to="/home-2-op">Home 02 Onepage</Link></li>
                                        <li><Link to="/home-3-op">Home 03 Onepage</Link></li>
                                        <li><Link to="/home-4-op">Home 04 Onepage</Link></li>
                                        <li><Link to="/home-5-op">Home 05 Onepage</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li><Link to="/about">About</Link></li>
                        <li className={`menu-item-has-children submenu-item-has-children ${isPagesMenuOpen ? 'active-class' : ''}`}>
                            <Link onClick={() => setIsPagesMenuOpen(!isPagesMenuOpen)} to="#">Pages <span className="mean-expand-class"></span></Link>
                            <ul className={`sub-menu submenu-class ${isPagesMenuOpen ? 'menu-open' : ''}`} style={menuStyles.isPagesMenu ?? {}}>
                                <li><Link to="/team">Team Page</Link></li>
                                <li><Link to="/team-details">Team Details</Link></li>
                                <li><Link to="/shop">Shop Page</Link></li>
                                <li><Link to="/shop-details">Shop Details</Link></li>
                                <li><Link to="/cart">Cart</Link></li>
                                <li><Link to="/checkout">Checkout</Link></li>
                                <li><Link to="/wishlist">Wishlist</Link></li>
                            </ul>
                        </li>
                        <li className={`menu-item-has-children submenu-item-has-children ${isProjectMenuOpen ? 'active-class' : ''}`}>
                            <Link onClick={() => setIsProjectMenuOpen(!isProjectMenuOpen)} to="#">Project <span className="mean-expand-class"></span></Link>
                            <ul className={`sub-menu submenu-class ${isProjectMenuOpen ? 'menu-open' : ''}`} style={menuStyles.isProjectMenu ?? {}}>
                                <li><Link to="/project">Projects</Link></li>
                                <li><Link to="/project-details">Project Details</Link></li>
                            </ul>
                        </li>
                        <li className={`menu-item-has-children submenu-item-has-children ${isServiceMenuOpen ? 'active-class' : ''}`}>
                            <Link onClick={() => setIsServiceMenuOpen(!isServiceMenuOpen)} to="#">Service <span className="mean-expand-class"></span></Link>
                            <ul className={`sub-menu submenu-class ${isServiceMenuOpen ? 'menu-open' : ''}`} style={menuStyles.isServiceMenu ?? {}}>
                                <li><Link to="/service">Service</Link></li>
                                <li><Link to="/service-details">Service Details</Link></li>
                            </ul>
                        </li>
                        <li className={`menu-item-has-children submenu-item-has-children ${isShopMenuOpen ? 'active-class' : ''}`}>
                            <Link onClick={() => setIsShopMenuOpen(!isShopMenuOpen)} to="#">Shop <span className="mean-expand-class"></span></Link>
                            <ul className={`sub-menu submenu-class ${isShopMenuOpen ? 'menu-open' : ''}`} style={menuStyles.isShopMenu ?? {}}>
                                <li><Link to="/shop">Shop</Link></li>
                                <li><Link to="/shop-details">Shop Details</Link></li>
                                <li><Link to="/cart">Cart</Link></li>
                                <li><Link to="/checkout">Checkout</Link></li>
                                <li><Link to="/wishlist">Wishlist</Link></li>
                            </ul>
                        </li>
                        <li className={`menu-item-has-children submenu-item-has-children ${isBlogMenuOpen ? 'active-class' : ''}`}>
                            <Link onClick={() => setIsBlogMenuOpen(!isBlogMenuOpen)} to="#">Blog <span className="mean-expand-class"></span></Link>
                            <ul className={`sub-menu submenu-class ${isBlogMenuOpen ? 'menu-open' : ''}`} style={menuStyles.isBlogMenu ?? {}}>
                                <li><Link to="/blog">Blog</Link></li>
                                <li><Link to="/blog-details">Blog Details</Link></li>
                            </ul>
                        </li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default MultiPageMobileMenu;