 
import { useState } from "react";
import Slider from "react-slick";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { Link } from "react-router-dom";


const ProductDetails = () => {
    const [quantity, setQuantity] = useState(1);
    const [isOpen, setIsOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('description');

    const handleTabClick = (tabId : string) => {
        setActiveTab(tabId);
    };
    const handleQuantityChange = (e: any) => {
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

    const settings = {
        dots: false,
        arrows: false,
        focusOnSelect: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        speed: 1500,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                },
            },
        ],
    };

    const handleOpenMagnificPopup = () => {
        setIsOpen(true);
    }
    const handleClosePopup = () => {
        setIsOpen(false);
    }

    return (
        <>
            <section className="product-details space">
                <div className="container">
                    <div className="row gx-60">
                        <div className="col-xl-6">
                            <div className="product-big-img">
                                <div className="img"><img src="/assets/img/product/product_details_1_1.jpg" alt="Product Image" /></div>
                            </div>
                        </div>
                        <div className="col-xl-6 align-self-center">
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
                                <p className="text">Syndicate customized growth strategies prospective human capital leverage other's optimal e-markets without transparent catalysts for change. Credibly coordinate highly efficient methods of empowerment cross unit solutions.</p>
                                <div className="checklist">
                                    <ul>
                                        <li><i className="ri-checkbox-circle-line"></i> Lifetime structural, one year finish warranty</li>
                                        <li><i className="ri-checkbox-circle-line"></i> Mapped from “Center Caps” under ” tment” tab</li>
                                        <li><i className="ri-checkbox-circle-line"></i> Fully copatible with OEM equimpent</li>
                                    </ul>
                                </div>
                                <div className="actions">
                                    <div className="quantity">
                                        <button className="quantity-minus qty-btn" onClick={decrementQuantity}>
                                            <i className="ri-subtract-line"></i>
                                        </button>
                                        <input
                                            type="number"
                                            className="qty-input"
                                            step="1"
                                            min="1"
                                            max="100"
                                            name="quantity"
                                            value={quantity}
                                            title="Qty"
                                            onChange={handleQuantityChange}
                                        />
                                        <button className="quantity-plus qty-btn" onClick={incrementQuantity}>
                                            <i className="ri-add-line"></i>
                                        </button>
                                    </div>
                                    <button className="btn">Add to Cart</button>
                                </div>
                                <div className="product_meta">
                                    <span className="sku_wrapper">SKU: <span className="sku">wheel-fits-chevy-camaro</span></span>
                                    <span className="posted_in">Category: <Link to="/shop" rel="tag">Tires & Wheels</Link></span>
                                    <span>Tags: <Link to="/shop">automotive parts</Link><Link to="/shop">wheels</Link></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="product-tab-area">
                        <ul className="nav product-tab-style1" role="tablist">
                            <li className="nav-item" role="presentation">
                                <a
                                    className={`nav-link ${activeTab === 'description' ? 'active' : ''}`}
                                    role="tab"
                                    aria-selected={activeTab === 'description'}
                                    onClick={() => handleTabClick('description')}
                                >
                                    Description
                                </a>
                            </li>
                            <li className="nav-item" role="presentation">
                                <a
                                    className={`nav-link ${activeTab === 'add_info' ? 'active' : ''}`}
                                    role="tab"
                                    aria-selected={activeTab === 'add_info'}
                                    onClick={() => handleTabClick('add_info')}
                                >
                                    Additional Information
                                </a>
                            </li>
                            <li className="nav-item" role="presentation">
                                <a
                                    className={`nav-link ${activeTab === 'reviews' ? 'active' : ''}`}
                                    role="tab"
                                    aria-selected={activeTab === 'reviews'}
                                    onClick={() => handleTabClick('reviews')}
                                >
                                    Reviews (03)
                                </a>
                            </li>
                        </ul>
                        <div className="tab-content" role="tabpanel">
                            <div
                                className={`tab-pane fade ${activeTab === 'description' ? 'show active' : ''}`}
                                role="tabpanel"
                                aria-labelledby="description-tab"
                            >
                                <p>
                                    Credibly negotiate emerging materials whereas clicks-and-mortar intellectual
                                    capital. Compellingly whiteboard client-centric sources before cross-platform
                                    schemas. Distinctively develop future-proof outsourcing without multimedia
                                    based portals. Progressively coordinate next-generation architectures for
                                    collaborative solutions. Professionally restore backward-compatible quality
                                    vectors before customer directed metrics. Holisticly restore technically sound
                                    internal or "organic" sources before client-centered human capital underwhelm
                                    holistic mindshare for prospective innovation.
                                </p>
                                <p className="mb-n1">
                                    Seamlessly target fully tested infrastructures whereas just in time process
                                    improvements. Dynamically exploit team driven functionalities vis a vis global
                                    total linkage redibly synthesize just in time technology rather than
                                    open-source strategic theme areas.
                                </p>
                            </div>
                            <div
                                className={`tab-pane fade ${activeTab === 'add_info' ? 'show active' : ''}`}
                                role="tabpanel"
                                aria-labelledby="add_info-tab"
                            >
                                <table className="woocommerce-table">
                                    <tbody>
                                        <tr>
                                            <th>Brand</th>
                                            <td>Jakuna</td>
                                        </tr>
                                        <tr>
                                            <th>Color</th>
                                            <td>Yellow</td>
                                        </tr>
                                        <tr>
                                            <th>Weight</th>
                                            <td>400 gm</td>
                                        </tr>
                                        <tr>
                                            <th>Battery</th>
                                            <td>Lithium</td>
                                        </tr>
                                        <tr>
                                            <th>Material</th>
                                            <td>Wood</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div
                                className={`tab-pane fade ${activeTab === 'reviews' ? 'show active' : ''}`}
                                role="tabpanel"
                                aria-labelledby="reviews-tab"
                            >
                                <div className="comments-wrap">
                                    <h3 className="blog-inner-title mt-n2">03 Comments</h3>
                                    <ul className="comment-list">
                                        <li className="comment-item">
                                            <div className="post-comment">
                                                <div className="comment-avater">
                                                    <img src="/assets/img/blog/blog_comment1.png" alt="Comment Author" />
                                                </div>
                                                <div className="comment-content">
                                                    <h3 className="name">Abraham John</h3>
                                                    <span className="commented-on">Feb 03, 2024</span>
                                                    <p className="text">
                                                        Construction praesentium voluptatum deleniti atque corrupti
                                                        quos dolores at vero eos accusamus iusto odio dignissimos.
                                                        Saepe corporis beatae a eaque non? Repudiandae veritatis
                                                        recusandae perspiciatis, sint maxime dolor quam doloribus!
                                                    </p>
                                                    <div className="reply_and_edit">
                                                        <Link to="/blog-details" className="reply-btn">
                                                            Reply <i className="ri-arrow-right-up-line"></i>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <ul className="children">
                                                <li className="comment-item">
                                                    <div className="post-comment">
                                                        <div className="comment-avater">
                                                            <img src="/assets/img/blog/blog_comment2.png" alt="Comment Author" />
                                                        </div>
                                                        <div className="comment-content">
                                                            <h3 className="name">John Smith</h3>
                                                            <span className="commented-on">Feb 04, 2024</span>
                                                            <p className="text">
                                                                Accusamus iusto odio dignissimos ducimus blanditiis
                                                                praesentium voluptatum deleniti atque corrupti quos
                                                                dolores simos temporibus at similique vitae placeat
                                                                veritatis nobis dolore. Cumque sint molestias
                                                                repudiandae quaerat eligendi?
                                                            </p>
                                                            <div className="reply_and_edit">
                                                                <Link to="/blog-details" className="reply-btn">
                                                                    Reply <i className="ri-arrow-right-up-line"></i>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="comment-item">
                                            <div className="post-comment">
                                                <div className="comment-avater">
                                                    <img src="/assets/img/blog/blog_comment3.png" alt="Comment Author" />
                                                </div>
                                                <div className="comment-content">
                                                    <h3 className="name">Zenelia Lozhe</h3>
                                                    <span className="commented-on">Jun 04, 2024</span>
                                                    <p className="text">
                                                        Collaboratively empower multifunctional e-commerce for
                                                        prospective applications. Seamlessly productivate
                                                        plug-and-play markets whereas synergistic scenarios.
                                                    </p>
                                                    <div className="reply_and_edit">
                                                        <Link to="/blog-details" className="reply-btn">
                                                            Reply <i className="ri-arrow-right-up-line"></i>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                    <h3 className="blog-inner-title mt-n2 mb-15">Leave a Reply</h3>
                                    <p>Your email address will not be published. Required fields are marked *</p>
                                    <div className="comment-form mb-30 mt-30">
                                        <div className="row">
                                            <div className="col-xl-4 form-group">
                                                <input type="text" placeholder="Full Name" className="form-control style-white" />
                                            </div>
                                            <div className="col-xl-4 form-group">
                                                <input type="email" placeholder="Email Address" className="form-control style-white" />
                                            </div>
                                            <div className="col-xl-4 form-group">
                                                <input type="text" placeholder="Website" className="form-control style-white" />
                                            </div>
                                            <div className="col-12 form-group">
                                                <textarea placeholder="Your Comment..." className="form-control style-white"></textarea>
                                            </div>
                                            <div className="col-12 form-group mb-0">
                                                <button className="btn">Submit Now <i className="ri-arrow-right-up-line"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="space-extra-top shop-details-card">
                        <div className="row justify-content-between">
                            <div className="col-md-6 ">
                                <div className="title-area text-md-start text-center shop-details-card-extra-style">
                                    <h2 className="sec-title">Related Products.</h2>
                                </div>
                            </div>
                            <div className="col-md-auto shop-details-card-space-none">
                                <div className="sec-btn mb-40">
                                    <Link to="/shop" className="btn">
                                        VIEW ALL PRODUCTS
                                    </Link>
                                </div>
                            </div>
                        </div>
                         
                        <Slider
                            {...settings}
                            className="row global-carousel" 
                            data-slide-show="4"
                            data-lg-slide-show="4"
                            data-md-slide-show="3"
                            data-sm-slide-show="2"
                            data-xs-slide-show="1"
                        >
                            <div className="col-lg-3 col-md-6">
                                <div className="product-card product-card-extra-style-space">
                                    <div className="product-img">
                                        <img src="/assets/img/product/product_1_1.jpg" alt="Product Image" />
                                        <div className="actions">
                                            <button onClick={handleOpenMagnificPopup} className="icon-btn popup-content"><i className="ri-eye-line"></i></button>
                                            <Link to="/cart" className="icon-btn">
                                                <i className="ri-shopping-cart-line"></i>
                                            </Link>
                                            <Link to="/wishlist" className="icon-btn">
                                                <i className="ri-heart-line"></i>
                                            </Link>
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
                                        <h3 className="product-title">
                                            <Link to="/shop-details">Hardware Toolbox</Link>
                                        </h3>
                                        <span className="price">
                                            <del>$30</del> $25
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="product-card product-card-extra-style-space">
                                    <div className="product-img">
                                        <img src="/assets/img/product/product_1_2.jpg" alt="Product Image" />
                                        <div className="actions">
                                            <button onClick={handleOpenMagnificPopup} className="icon-btn popup-content"><i className="ri-eye-line"></i></button>
                                            <Link to="/cart" className="icon-btn">
                                                <i className="ri-shopping-cart-line"></i>
                                            </Link>
                                            <Link to="/wishlist" className="icon-btn">
                                                <i className="ri-heart-line"></i>
                                            </Link>
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
                                        <h3 className="product-title">
                                            <Link to="/shop-details">Drill Machine</Link>
                                        </h3>
                                        <span className="price">
                                            <del>$300</del> $250
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="product-card product-card-extra-style-space">
                                    <div className="product-img">
                                        <img src="/assets/img/product/product_1_3.jpg" alt="Product Image" />
                                        <div className="actions">
                                            <button onClick={handleOpenMagnificPopup} className="icon-btn popup-content"><i className="ri-eye-line"></i></button>
                                            <Link to="/cart" className="icon-btn">
                                                <i className="ri-shopping-cart-line"></i>
                                            </Link>
                                            <Link to="/wishlist" className="icon-btn">
                                                <i className="ri-heart-line"></i>
                                            </Link>
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
                                        <h3 className="product-title">
                                            <Link to="/shop-details">Claw Hammer</Link>
                                        </h3>
                                        <span className="price">
                                            <del>$130</del> $125
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="product-card product-card-extra-style-space">
                                    <div className="product-img">
                                        <img src="/assets/img/product/product_1_4.jpg" alt="Product Image" />
                                        <div className="actions">
                                            <button onClick={handleOpenMagnificPopup} className="icon-btn popup-content"><i className="ri-eye-line"></i></button>
                                            <Link to="/cart" className="icon-btn">
                                                <i className="ri-shopping-cart-line"></i>
                                            </Link>
                                            <Link to="/wishlist" className="icon-btn">
                                                <i className="ri-heart-line"></i>
                                            </Link>
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
                                        <h3 className="product-title">
                                            <Link to="/shop-details">Chainsaw Machine</Link>
                                        </h3>
                                        <span className="price">
                                            <del>$130</del> $125
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="product-card product-card-extra-style-space">
                                    <div className="product-img">
                                        <img src="/assets/img/product/product_1_5.jpg" alt="Product Image" />
                                        <div className="actions">
                                            <button onClick={handleOpenMagnificPopup} className="icon-btn popup-content"><i className="ri-eye-line"></i></button>
                                            <Link to="/cart" className="icon-btn">
                                                <i className="ri-shopping-cart-line"></i>
                                            </Link>
                                            <Link to="/wishlist" className="icon-btn">
                                                <i className="ri-heart-line"></i>
                                            </Link>
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
                                        <h3 className="product-title">
                                            <Link to="/shop-details">Construction Hat</Link>
                                        </h3>
                                        <span className="price">
                                            <del>$150</del> $125
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </Slider>
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

export default ProductDetails;