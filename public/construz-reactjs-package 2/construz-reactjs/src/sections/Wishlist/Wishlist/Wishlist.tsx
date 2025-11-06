import { Link } from "react-router-dom";

 

const WishlistArea = () => {
    return (
        <div className="space-top space-extra-bottom ">
            <div className="container">
                <div className="tinv-wishlist woocommerce tinv-wishlist-clear">
                    <form onSubmit={e => e.preventDefault()} autoComplete="off">
                        <div className="table-responsive">
                            <table className="tinvwl-table-manage-list">
                                <thead>
                                    <tr>
                                        <th className="product-remove"></th>
                                        <th className="product-thumbnail">&nbsp;</th>
                                        <th className="product-name">
                                            <span className="tinvwl-full">Product Name</span><span className="tinvwl-mobile">Product</span>
                                        </th>
                                        <th className="product-price">Unit Price</th>
                                        <th className="product-stock">Stock Status</th>
                                        <th className="product-action">&nbsp;</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="wishlist_item">
                                        <td className="product-remove">
                                            <button type="submit" name="tinvwl-remove" value="58" title="Remove"><i className="ri-close-line"></i>
                                            </button>
                                        </td>
                                        <td className="product-thumbnail">
                                            <Link to="/shop-details"><img src="/assets/img/product/product_1_4.jpg" className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt="image" /></Link>
                                        </td>
                                        <td className="product-name">
                                            <Link to="/shop-details">Chainsaw Machine</Link>
                                        </td>
                                        <td className="product-price wishlist-product-price-flex">
                                            <span className="woocommerce-Price-amount amount"><bdi><span className="woocommerce-Price-currencySymbol">$</span>45.00</bdi></span>
                                        </td>
                                        <td className="product-stock">
                                            <p className="stock in-stock">
                                                <i className="ri-check-line"></i>
                                                <span className="tinvwl-txt">In stock</span>
                                            </p>
                                        </td>
                                        <td className="product-action">
                                            <Link to="/shop-details">
                                                <button className="button btn" name="tinvwl-add-to-cart" value="58" title="Add to Cart">
                                                    <i className="ri-shopping-cart-2-line"></i>
                                                    <span className="tinvwl-txt">Add to Cart</span>
                                                </button>
                                            </Link>
                                        </td>
                                    </tr>
                                    <tr className="wishlist_item">
                                        <td className="product-remove">
                                            <button type="submit" name="tinvwl-remove" value="60" title="Remove"><i className="ri-close-line"></i>
                                            </button>
                                        </td>
                                        <td className="product-thumbnail">
                                            <Link to="/shop-details"><img src="/assets/img/product/product_1_5.jpg" className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt="image" /></Link>
                                        </td>
                                        <td className="product-name">
                                            <Link to="/shop-details">Construction Hat</Link>
                                        </td>
                                        <td className="product-price wishlist-product-price-flex">
                                            <ins><span className="woocommerce-Price-amount amount"><bdi><span className="woocommerce-Price-currencySymbol">$</span>18.00</bdi></span></ins>
                                            <del><span className="woocommerce-Price-amount amount"><bdi><span className="woocommerce-Price-currencySymbol">$</span>20.00</bdi></span></del>
                                        </td>
                                        <td className="product-stock">
                                            <p className="stock in-stock"><i className="ri-check-line"></i><span className="tinvwl-txt">In stock</span></p>
                                        </td>
                                        <td className="product-action">
                                            <Link to="/shop-details">
                                                <button className="button btn" name="tinvwl-add-to-cart" value="60" title="Add to Cart">
                                                    <i className="ri-shopping-cart-2-line"></i>
                                                    <span className="tinvwl-txt">Add to Cart</span>
                                                </button>
                                            </Link>
                                        </td>
                                    </tr>
                                    <tr className="wishlist_item">
                                        <td className="product-remove">
                                            <button type="submit" name="tinvwl-remove" value="60" title="Remove"><i className="ri-close-line"></i>
                                            </button>
                                        </td>
                                        <td className="product-thumbnail">
                                            <Link to="/shop-details"><img src="/assets/img/product/product_1_6.jpg" className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt="image" /></Link>
                                        </td>
                                        <td className="product-name">
                                            <Link to="/shop-details">Sparta Demolition Hamme</Link>
                                        </td>
                                        <td className="product-price wishlist-product-price-flex">
                                            <ins><span className="woocommerce-Price-amount amount"><bdi><span className="woocommerce-Price-currencySymbol">$</span>18.00</bdi></span></ins>
                                            <del><span className="woocommerce-Price-amount amount"><bdi><span className="woocommerce-Price-currencySymbol">$</span>20.00</bdi></span></del>
                                        </td>
                                        <td className="product-stock">
                                            <p className="stock in-stock"><i className="ri-check-line"></i><span className="tinvwl-txt">In stock</span></p>
                                        </td>
                                        <td className="product-action">
                                            <Link to="/shop-details">
                                                <button className="button btn" name="tinvwl-add-to-cart" value="60" title="Add to Cart">
                                                    <i className="ri-shopping-cart-2-line"></i>
                                                    <span className="tinvwl-txt">Add to Cart</span>
                                                </button>
                                            </Link>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default WishlistArea;