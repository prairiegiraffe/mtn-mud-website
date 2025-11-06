
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { useEffect, useState } from "react";
import niceSelect from "react-nice-select";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { Link } from 'react-router-dom';


const Product = () => {
    const [priceRange, setPriceRange] = useState([0, 70]);
    const [isOpen, setIsOpen] = useState(false);
    const [quantity, setQuantity] = useState(1);
    const handleSliderChange = (value : any) => {
        setPriceRange(value);
    };
    useEffect(() => {
        niceSelect();
    }, []);

    const handleOpenMagnificPopup = () => {
        setIsOpen(true);
    }
    const handleClosePopup = () => {
        setIsOpen(false);
    }



    const handleQuantityChange = (e : any) => {
        const value = parseInt(e.target.value, 10);
        if (value >= 1 && value <= 100) {
            setQuantity(value);
        }
    };

    const incrementQuantity = () => {
        setQuantity((prevQuantity) => (prevQuantity < 100 ? prevQuantity + 1 : 100));
    };

    const decrementQuantity = () => {
        setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
    };

    return (
        <>
            <section className="space-top space-extra-bottom shop-page-select-contain">
                <div className="container">
                    <div className="row flex-row-reverse">
                        <div className="col-xl-9 col-lg-8">
                            <div className="shop-sort-bar">
                                <div className="row justify-content-between align-items-center">
                                    <div className="col-md">
                                        <p className="woocommerce-result-count">Showing 1–15 of 52 results</p>
                                    </div>

                                    <div className="col-md-auto">
                                        <form
                                            className="woocommerce-ordering shop-page-select-width"
                                            method="get"
                                        // style={{ width: "200px" }}
                                        >
                                            <div className="form-group mb-0">
                                                <select
                                                    name="orderby"
                                                    className="single-select orderby"
                                                    aria-label="Shop order"
                                                >
                                                    <option value="menu_order" selected>
                                                        Default Sorting
                                                    </option>
                                                    <option value="popularity">Sort by popularity</option>
                                                    <option value="rating">Sort by average rating</option>
                                                    <option value="date">Sort by latest</option>
                                                    <option value="price">Sort by price: low to high</option>
                                                    <option value="price-desc">Sort by price: high to low</option>
                                                </select>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="row gy-40">
                                <div className="col-xl-4 col-md-6 product-space-none">
                                    <div className="product-card">
                                        <div className="product-img">
                                            <img src="/assets/img/product/product_1_1.jpg" alt="Product Image" />
                                            <div className="actions">
                                                <button onClick={handleOpenMagnificPopup} className="icon-btn popup-content"><i className="ri-eye-line"></i></button>
                                                <Link to="/cart" className="icon-btn"><i className="ri-shopping-cart-line"></i></Link>
                                                <Link to="/wishlist" className="icon-btn"><i className="ri-heart-line"></i></Link>
                                            </div>
                                        </div>
                                        <div className="product-content">
                                            <span className="star-rating">
                                                <i className="ri-star-fill"></i>
                                                <i className="ri-star-fill"></i>
                                                <i className="ri-star-fill"></i>
                                                <i className="ri-star-fill"></i>
                                                <i className="ri-star-fill"></i>
                                            </span>
                                            <h3 className="product-title"><Link to="/shop-details">Hardware Toolbox</Link></h3>
                                            <span className="price"><del>$30</del> $25</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-6 product-space-none">
                                    <div className="product-card">
                                        <div className="product-img">
                                            <img src="/assets/img/product/product_1_2.jpg" alt="Product Image" />
                                            <div className="actions">
                                                <button onClick={handleOpenMagnificPopup} className="icon-btn popup-content"><i className="ri-eye-line"></i></button>
                                                <Link to="/cart" className="icon-btn"><i className="ri-shopping-cart-line"></i></Link>
                                                <Link to="/wishlist" className="icon-btn"><i className="ri-heart-line"></i></Link>
                                            </div>
                                        </div>
                                        <div className="product-content">
                                            <span className="star-rating">
                                                <i className="ri-star-fill"></i>
                                                <i className="ri-star-fill"></i>
                                                <i className="ri-star-fill"></i>
                                                <i className="ri-star-fill"></i>
                                                <i className="ri-star-fill"></i>
                                            </span>
                                            <h3 className="product-title"><Link to="/shop-details">Drill Machine</Link></h3>
                                            <span className="price"><del>$300</del> $250</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-6 product-space-none">
                                    <div className="product-card">
                                        <div className="product-img">
                                            <img src="/assets/img/product/product_1_3.jpg" alt="Product Image" />
                                            <div className="actions">
                                                <button onClick={handleOpenMagnificPopup} className="icon-btn popup-content"><i className="ri-eye-line"></i></button>
                                                <Link to="/cart" className="icon-btn"><i className="ri-shopping-cart-line"></i></Link>
                                                <Link to="/wishlist" className="icon-btn"><i className="ri-heart-line"></i></Link>
                                            </div>
                                        </div>
                                        <div className="product-content">
                                            <span className="star-rating">
                                                <i className="ri-star-fill"></i>
                                                <i className="ri-star-fill"></i>
                                                <i className="ri-star-fill"></i>
                                                <i className="ri-star-fill"></i>
                                                <i className="ri-star-fill"></i>
                                            </span>
                                            <h3 className="product-title"><Link to="/shop-details">Claw Hammer</Link></h3>
                                            <span className="price"><del>$130</del> $125</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-6 product-space-none">
                                    <div className="product-card">
                                        <div className="product-img">
                                            <img src="/assets/img/product/product_1_4.jpg" alt="Product Image" />
                                            <div className="actions">
                                                <button onClick={handleOpenMagnificPopup} className="icon-btn popup-content"><i className="ri-eye-line"></i></button>
                                                <Link to="/cart" className="icon-btn"><i className="ri-shopping-cart-line"></i></Link>
                                                <Link to="/wishlist" className="icon-btn"><i className="ri-heart-line"></i></Link>
                                            </div>
                                        </div>
                                        <div className="product-content">
                                            <span className="star-rating">
                                                <i className="ri-star-fill"></i>
                                                <i className="ri-star-fill"></i>
                                                <i className="ri-star-fill"></i>
                                                <i className="ri-star-fill"></i>
                                                <i className="ri-star-fill"></i>
                                            </span>
                                            <h3 className="product-title"><Link to="/shop-details">Chainsaw Machine</Link></h3>
                                            <span className="price"><del>$130</del> $125</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-6 product-space-none">
                                    <div className="product-card">
                                        <div className="product-img">
                                            <img src="/assets/img/product/product_1_5.jpg" alt="Product Image" />
                                            <div className="actions">
                                                <button onClick={handleOpenMagnificPopup} className="icon-btn popup-content"><i className="ri-eye-line"></i></button>
                                                <Link to="/cart" className="icon-btn"><i className="ri-shopping-cart-line"></i></Link>
                                                <Link to="/wishlist" className="icon-btn"><i className="ri-heart-line"></i></Link>
                                            </div>
                                        </div>
                                        <div className="product-content">
                                            <span className="star-rating">
                                                <i className="ri-star-fill"></i>
                                                <i className="ri-star-fill"></i>
                                                <i className="ri-star-fill"></i>
                                                <i className="ri-star-fill"></i>
                                                <i className="ri-star-fill"></i>
                                            </span>
                                            <h3 className="product-title"><Link to="/shop-details">Construction Hat</Link></h3>
                                            <span className="price"><del>$150</del> $125</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-6 product-space-none">
                                    <div className="product-card">
                                        <div className="product-img">
                                            <img src="/assets/img/product/product_1_6.jpg" alt="Product Image" />
                                            <div className="actions">
                                                <button onClick={handleOpenMagnificPopup} className="icon-btn popup-content"><i className="ri-eye-line"></i></button>
                                                <Link to="/cart" className="icon-btn"><i className="ri-shopping-cart-line"></i></Link>
                                                <Link to="/wishlist" className="icon-btn"><i className="ri-heart-line"></i></Link>
                                            </div>
                                        </div>
                                        <div className="product-content">
                                            <span className="star-rating">
                                                <i className="ri-star-fill"></i>
                                                <i className="ri-star-fill"></i>
                                                <i className="ri-star-fill"></i>
                                                <i className="ri-star-fill"></i>
                                                <i className="ri-star-fill"></i>
                                            </span>
                                            <h3 className="product-title"><Link to="/shop-details">Sparta Demolition Hamme</Link></h3>
                                            <span className="price"><del>$150</del> $125</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-6 product-space-none">
                                    <div className="product-card">
                                        <div className="product-img">
                                            <img src="/assets/img/product/product_1_7.jpg" alt="Product Image" />
                                            <div className="actions">
                                                <button onClick={handleOpenMagnificPopup} className="icon-btn popup-content"><i className="ri-eye-line"></i></button>
                                                <Link to="/cart" className="icon-btn"><i className="ri-shopping-cart-line"></i></Link>
                                                <Link to="/wishlist" className="icon-btn"><i className="ri-heart-line"></i></Link>
                                            </div>
                                        </div>
                                        <div className="product-content">
                                            <span className="star-rating">
                                                <i className="ri-star-fill"></i>
                                                <i className="ri-star-fill"></i>
                                                <i className="ri-star-fill"></i>
                                                <i className="ri-star-fill"></i>
                                                <i className="ri-star-fill"></i>
                                            </span>
                                            <h3 className="product-title"><Link to="/shop-details">Hitachi Zaxis 110m</Link></h3>
                                            <span className="price"><del>$350</del> $225</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-6 product-space-none">
                                    <div className="product-card">
                                        <div className="product-img">
                                            <img src="/assets/img/product/product_1_8.jpg" alt="Product Image" />
                                            <div className="actions">
                                                <button onClick={handleOpenMagnificPopup} className="icon-btn popup-content"><i className="ri-eye-line"></i></button>
                                                <Link to="/cart" className="icon-btn"><i className="ri-shopping-cart-line"></i></Link>
                                                <Link to="/wishlist" className="icon-btn"><i className="ri-heart-line"></i></Link>
                                            </div>
                                        </div>
                                        <div className="product-content">
                                            <span className="star-rating">
                                                <i className="ri-star-fill"></i>
                                                <i className="ri-star-fill"></i>
                                                <i className="ri-star-fill"></i>
                                                <i className="ri-star-fill"></i>
                                                <i className="ri-star-fill"></i>
                                            </span>
                                            <h3 className="product-title"><Link to="/shop-details">Sprayer Mowers Machine</Link></h3>
                                            <span className="price"><del>$450</del> $320</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-6 product-space-none">
                                    <div className="product-card">
                                        <div className="product-img">
                                            <img src="/assets/img/product/product_1_9.jpg" alt="Product Image" />
                                            <div className="actions">
                                                <button onClick={handleOpenMagnificPopup} className="icon-btn popup-content"><i className="ri-eye-line"></i></button>
                                                <Link to="/cart" className="icon-btn"><i className="ri-shopping-cart-line"></i></Link>
                                                <Link to="/wishlist" className="icon-btn"><i className="ri-heart-line"></i></Link>
                                            </div>
                                        </div>
                                        <div className="product-content">
                                            <span className="star-rating">
                                                <i className="ri-star-fill"></i>
                                                <i className="ri-star-fill"></i>
                                                <i className="ri-star-fill"></i>
                                                <i className="ri-star-fill"></i>
                                                <i className="ri-star-fill"></i>
                                            </span>
                                            <h3 className="product-title"><Link to="/shop-details">Compaction Machine</Link></h3>
                                            <span className="price"><del>$550</del> $450</span>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="pagination justify-content-center">
                                <ul>
                                    <li><Link className="active" to="landing-assets/blog">01</Link></li>
                                    <li><Link to="/blog">02</Link></li>
                                    <li><Link to="/blog">03</Link></li>
                                    <li><Link to="/blog"><i className="ri-arrow-right-line"></i></Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4">
                            <aside className="sidebar-area">
                                <div className="widget widget_search">
                                    <h3 className="widget_title">Search Here</h3>
                                    <form className="search-form">
                                        <input type="text" placeholder="Search..." />
                                        <button type="submit"><i className="ri-search-line"></i></button>
                                    </form>
                                </div>

                                <div className="widget widget_categories">
                                    <h3 className="widget_title">Product Categories</h3>
                                    <ul>
                                        <li>
                                            <Link to="/blog">Construction <span>12</span></Link>
                                        </li>
                                        <li>
                                            <Link to="/blog">Architecture <span>7</span></Link>
                                        </li>
                                        <li>
                                            <Link to="/blog">Business <span>5</span></Link>
                                        </li>
                                        <li>
                                            <Link to="/blog">Engineering <span>3</span></Link>
                                        </li>
                                        <li>
                                            <Link to="/blog">Building <span>2</span></Link>
                                        </li>
                                    </ul>
                                </div>

                                <div className="widget widget_price_filter">
                                    <h4 className="widget_title">Filter By Price</h4>
                                    <div className="price_slider_wrapper">
                                        <div className="">
                                             
                                            <Slider
                                                range
                                                min={0}
                                                max={100}
                                                defaultValue={[0, 70]}
                                                value={priceRange}
                                                onChange={handleSliderChange}
                                                trackStyle={[{ backgroundColor: '#EA5501' }]}
                                                handleStyle={[
                                                    { borderColor: '#EA5501' },
                                                    { borderColor: '#EA5501' }
                                                ]}
                                                railStyle={{ backgroundColor: '#e0e0e0' }}
                                                className=""
                                            />
                                        </div>
                                        <div className="price_label">
                                            Price: <span className="from">${priceRange[0]}</span> — <span className="to">${priceRange[1]}</span>
                                            <button type="submit" className="button btn">Filter</button>
                                        </div>
                                    </div>
                                </div>

                                <div className="widget widget_tag_cloud">
                                    <h3 className="widget_title">Popular Tags</h3>
                                    <div className="tagcloud">
                                        <Link to="/blog">Architecture</Link>
                                        <Link to="/blog">Building</Link>
                                        <Link to="/blog">Home</Link>
                                        <Link to="/blog">Factory</Link>
                                        <Link to="/blog">Construction</Link>
                                        <Link to="/blog">Business</Link>
                                        <Link to="/blog">Design</Link>
                                        <Link to="/blog">Industry</Link>
                                    </div>
                                </div>
                            </aside>
                        </div>
                    </div>
                </div>
            </section>

            <Modal open={isOpen} onClose={handleClosePopup}>
                <div className="mfp-content space-top-none-card">
                    <div id="QuickView" className={`white-popup ${isOpen ? '' : 'mfp-hide'}`}>
                        <div className="container bg-white">
                            <div className="row gx-60">
                                <div className="col-lg-6">
                                    <div className="product-big-img">
                                        <div className="img"><img src="/assets/img/product/product_details_1_1.jpg" alt="Product Image" /></div>
                                    </div>
                                </div>
                                <div className="col-lg-6 align-self-center">
                                    <div className="product-about">
                                        <p className="price">$180.85<del>$350.99</del></p>
                                        <h2 className="product-title">Drill Machine</h2>
                                        <div className="product-rating">
                                            <span className="star-rating">
                                                <i className="ri-star-fill"></i>
                                                <i className="ri-star-fill"></i>
                                                <i className="ri-star-fill"></i>
                                                <i className="ri-star-fill"></i>
                                                <i className="ri-star-fill"></i>
                                            </span>
                                            (5 Reviews)
                                        </div>
                                        <p className="text">Syndicate customized growth strategies prospective human capital leverage others optimal e-markets without transparent catalysts for change. Credibly coordinate highly efficient methods of empowerment cross unit solutions.</p>
                                        <div className="checklist">
                                            <ul>
                                                <li><i className="ri-checkbox-circle-line"></i> Lifetime structural, one year finish warranty</li>
                                                <li><i className="ri-checkbox-circle-line"></i> Mapped from “Center Caps” under ” tment” tab</li>
                                                <li><i className="ri-checkbox-circle-line"></i> Fully copatible with OEM equimpent</li>
                                            </ul>
                                        </div>
                                        <div className="actions">
                                            <div className="quantity">
                                                <button onClick={decrementQuantity} className="quantity-minus qty-btn"><i className="ri-subtract-line"></i></button>
                                                <input
                                                    onChange={handleQuantityChange}
                                                    type="number" className="qty-input" step="1" min="1" max="100" name="quantity" value={quantity} title="Qty" />
                                                <button onClick={incrementQuantity} className="quantity-plus qty-btn"><i className="ri-add-line"></i></button>
                                            </div>
                                            <Link to="/cart">
                                                <button className="btn">Add to Cart</button>
                                            </Link>
                                        </div>
                                        <div className="product_meta">
                                            <span className="sku_wrapper">SKU: <span className="sku">wheel-fits-chevy-camaro</span></span>
                                            <span className="posted_in">Category: <Link to="/shop" rel="tag">Tires & Wheels</Link></span>
                                            <span>Tags: <Link to="/shop">automotive parts</Link><Link to="/shop">wheels</Link></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default Product;