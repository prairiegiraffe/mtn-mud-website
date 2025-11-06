 
import { useState } from "react";
import PopupVideo from "../../Common/PopupVideo/PopupVideo";
import { Link } from "react-router-dom";

const BlogFive = () => {
  const [popup, setPopup] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const openPopup = () => {
    setPopup(true);
    const iframe = document.getElementById("youtube-video") as HTMLIFrameElement;
    if (iframe) {
      iframe.src = "https://www.youtube.com/embed/Q5PG0rMXgvw";
    }
    setIsActive(true);
    document.body.style.overflow = 'hidden';
  };
  return (
    <>
      <section className="blog-area space-top space-extra-bottom">
        <div className="container">
          <div className="row gx-60">
            <div className="col-xxl-8 col-lg-7">
              <div className="blog-single">
                <div className="blog-img">
                  <img src="/assets/img/blog/blog_details1_1.png" alt="img" />
                  <div className="blog-date">
                    <Link to="/blog">
                      <span>22</span>MAR
                    </Link>
                    <div className="year">2024</div>
                  </div>
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <Link to="/blog-details">By Rebecca</Link>
                    <Link to="/blog">506 Views</Link>
                    <Link to="/blog">Construction</Link>
                    <Link to="/blog">02 Comment</Link>
                  </div>
                  <h3 className="blog-title">Construction Process Streamlines</h3>
                  <p className="mb-20">
                    Construction standard dummy text ever since the 1500s, when an
                    unknown printer took a galley of type and scrambled it to make
                    a type specimen book.
                  </p>
                  <p>
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui
                    blanditiis praesentium voluptatum deleniti atque corrupti quos
                    dolores et quas molestias excepturi sint occaecati cupiditate
                    non provident, similique sunt in culpa qui officia deserunt
                    mollitia animi, id est laborum et dolorum fuga harum quidem
                    rerum facilis est et expedita distinctio.
                  </p>
                  <blockquote>
                    <p>
                      “Tortor posuere ac ut consequat tellusi elem isis etum sag
                      ittis vitae atleo duis ut diam odio ut sem nulla phar.”
                    </p>
                    <cite>Aleesha brown</cite>
                    <span className="desig">Company, CEO</span>
                  </blockquote>
                  <h3 className="blog-inner-title">
                    Growth and meaning of mechanical technology
                  </h3>
                  <p className="mb-30">
                    Construction standard dummy text ever since the when an
                    unknown printer took a galley vero eos et accusamus et iusto
                    odio dignissimos ducimus qui blanditiis praesentium voluptatum
                    deleniti atque corrupti quos dolores et quas molestias
                    excepturi sint occaecati cupiditate non provident expedita
                    distinctio.
                  </p>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="blog-img">
                        <img src="/assets/img/blog/blog_details1_2.png" alt="img" />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="blog-img">
                        <img src="/assets/img/blog/blog_details1_3.png" alt="img" />
                      </div>
                    </div>
                  </div>
                  <h3 className="blog-inner-title">
                    Engineering and mechanics money for a better future.
                  </h3>
                  <p className="mb-30">
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui
                    blanditiis praesentium voluptatum deleniti atque corrupti quos
                    dolores et quas molestias excepturi sint occaecation.
                  </p>
                  <div className="checklist style2 mb-35">
                    <ul>
                      <li>Powerful Product Strategy</li>
                      <li>Quality Control System</li>
                      <li>Professional Team Works</li>
                    </ul>
                  </div>

                  <div className="blog-img" data-overlay="black" data-opacity="5">
                    <img src="/assets/img/blog/blog_details1_4.png" alt="Blog Image" />
                    <a
                      onClick={openPopup}
                      className="play-btn style3"
                    >
                      <i className="ri-play-fill"></i>
                    </a>
                  </div>
                  <p className="mt-35">
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui
                    blanditiis praesentium voluptatum deleniti atque corrupti quos
                    dolores et quas molestias excepturi sint occaecati cupiditate
                    non provident.
                  </p>
                </div>
                <div className="share-links clearfix">
                  <div className="row justify-content-between">
                    <div className="col-md-auto">
                      <div className="tagcloud">
                        <Link to="/blog">Factory</Link>
                        <Link to="/blog">Metallurgy</Link>
                        <Link to="/blog">Construction</Link>
                        <Link to="/blog">Industry</Link>
                      </div>
                    </div>
                    <div className="col-md-auto text-xl-end">
                      <div className="social-btn style3">
                        <Link to="https://www.twitter.com/">
                          <i className="ri-twitter-x-line"></i>
                        </Link>
                        <Link to="https://instagram.com/">
                          <i className="ri-instagram-line"></i>
                        </Link>
                        <Link to="https://facebook.com/">
                          <i className="ri-facebook-fill"></i>
                        </Link>
                        <Link to="https://linkedin.com/">
                          <i className="ri-linkedin-fill"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="blog-author bg-smoke">
                  <div className="auhtor-img">
                    <img
                      src="/assets/img/blog/blog-author.png"
                      alt="Blog Author Image"
                    />
                  </div>
                  <div className="media-body">
                    <h3 className="author-name">
                      <Link to="/team-details">John Maxwell</Link>
                    </h3>
                    <span className="author-desig">CEO of Construz</span>
                    <p className="author-text">
                      Blanditiis praesentium voluptatum deleniti atque corrupti
                      quos dolores at vero eos accusamus iusto odio dignissimos
                      ducimus blanditiis praesentium.
                    </p>
                    <div className="social-btn style4">
                      <Link to="https://www.twitter.com/">
                        <i className="ri-twitter-x-line"></i>
                      </Link>
                      <Link to="https://instagram.com/">
                        <i className="ri-instagram-line"></i>
                      </Link>
                      <Link to="https://facebook.com/">
                        <i className="ri-facebook-fill"></i>
                      </Link>
                      <Link to="https://linkedin.com/">
                        <i className="ri-linkedin-fill"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="comments-wrap">
                <h3 className="blog-inner-title mt-n2">03 Comments</h3>
                <ul className="comment-list">
                  <li className="comment-item">
                    <div className="post-comment">
                      <div className="comment-avater">
                        <img
                          src="/assets/img/blog/blog_comment1.png"
                          alt="Comment Author"
                        />
                      </div>
                      <div className="comment-content">
                        <h3 className="name">Abraham John</h3>
                        <span className="commented-on">Feb 03, 2024</span>
                        <p className="text">
                          Construction praesentium voluptatum deleniti atque
                          corrupti quos dolores at vero eos accusamus iusto odio
                          dignissimos.
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
                            <img
                              src="/assets/img/blog/blog_comment2.png"
                              alt="Comment Author"
                            />
                          </div>
                          <div className="comment-content">
                            <h3 className="name">John Smith</h3>
                            <span className="commented-on">Feb 04, 2024</span>
                            <p className="text">
                              Accusamus iusto odio dignissimos ducimus blanditiis
                              praesentium voluptatum deleniti atque corrupti quos
                              dolores
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
                        <img
                          src="/assets/img/blog/blog_comment3.png"
                          alt="Comment Author"
                        />
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
                <p>
                  Your email address will not be published. Required fields are
                  marked *
                </p>
                <div className="comment-form mb-30 mt-30">
                  <div className="row">
                    <div className="col-xl-4 form-group">
                      <input
                        type="text"
                        placeholder="Full Name"
                        className="form-control style-white"
                      />
                    </div>
                    <div className="col-xl-4 form-group">
                      <input
                        type="email"
                        placeholder="Email Address"
                        className="form-control style-white"
                      />
                    </div>
                    <div className="col-xl-4 form-group">
                      <input
                        type="text"
                        placeholder="Website"
                        className="form-control style-white"
                      />
                    </div>
                    <div className="col-12 form-group">
                      <textarea
                        placeholder="Your Comment..."
                        className="form-control style-white"
                      ></textarea>
                    </div>
                    <div className="col-12 form-group mb-0">
                      <button className="btn">
                        Submit Now <i className="ri-arrow-right-up-line"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xxl-4 col-lg-5">
              <aside className="sidebar-area">
                <div className="widget widget_search">
                  <h3 className="widget_title">Search Here</h3>
                  <form className="search-form">
                    <input type="text" placeholder="Search..." />
                    <button type="submit">
                      <i className="ri-search-line"></i>
                    </button>
                  </form>
                </div>

                <div className="widget widget_categories">
                  <h3 className="widget_title">Categories</h3>
                  <ul>
                    <li>
                      <Link to="/blog">
                        Construction <span>12</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/blog">
                        Architecture <span>7</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/blog">
                        Business <span>5</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/blog">
                        Engineering <span>3</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/blog">
                        Building <span>2</span>
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="widget">
                  <h3 className="widget_title">Recent Posts</h3>
                  <div className="recent-post-wrap">
                    <div className="recent-post">
                      <div className="media-img">
                        <Link to="/blog-details">
                          <img
                            src="/assets/img/blog/recent-post1.png"
                            alt="Blog Image"
                          />
                        </Link>
                      </div>
                      <div className="media-body">
                        <h4 className="post-title">
                          <Link className="text-inherit" to="/blog-details">
                            Best features of Building construction work
                          </Link>
                        </h4>
                        <div className="recent-post-meta">
                          <Link to="/blog">By Nicholes</Link>
                          <Link to="/blog">30 min ago</Link>
                        </div>
                      </div>
                    </div>
                    <div className="recent-post">
                      <div className="media-img">
                        <Link to="/blog-details">
                          <img
                            src="/assets/img/blog/recent-post2.png"
                            alt="Blog Image"
                          />
                        </Link>
                      </div>
                      <div className="media-body">
                        <h4 className="post-title">
                          <Link className="text-inherit" to="/blog-details">
                            The beast team is a around and how we make it
                          </Link>
                        </h4>
                        <div className="recent-post-meta">
                          <Link to="/blog">By Nicholes</Link>
                          <Link to="/blog">2 days ago</Link>
                        </div>
                      </div>
                    </div>
                    <div className="recent-post">
                      <div className="media-img">
                        <Link to="/blog-details">
                          <img
                            src="/assets/img/blog/recent-post3.png"
                            alt="Blog Image"
                          />
                        </Link>
                      </div>
                      <div className="media-body">
                        <h4 className="post-title">
                          <Link className="text-inherit" to="/blog-details">
                            Construction site security guideline
                          </Link>
                        </h4>
                        <div className="recent-post-meta">
                          <Link to="/blog">By Nicholes</Link>
                          <Link to="/blog">5 days ago</Link>
                        </div>
                      </div>
                    </div>
                    <div className="recent-post">
                      <div className="media-img">
                        <Link to="/blog-details">
                          <img
                            src="/assets/img/blog/recent-post4.png"
                            alt="Blog Image"
                          />
                        </Link>
                      </div>
                      <div className="media-body">
                        <h4 className="post-title">
                          <Link className="text-inherit" to="/blog-details">
                            A well designed construction website is user
                            accessible
                          </Link>
                        </h4>
                        <div className="recent-post-meta">
                          <Link to="/blog">By Nicholes</Link>
                          <Link to="/blog">3 week ago</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="widget widget_categories">
                  <h3 className="widget_title">Archives</h3>
                  <ul>
                    <li>
                      <Link to="/blog">
                        January 26, 2024 <span>1</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/blog">
                        December 17, 2023 <span>2</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/blog">
                        November 02, 2023 <span>1</span>
                      </Link>
                    </li>
                  </ul>
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

                <div className="widget widget_banner">
                  <Link to="#">
                    <img src="/assets/img/widget/widget-add.png" alt="img" />
                  </Link>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
      <PopupVideo popup={popup} setPopup={setPopup} isActive={isActive} setIsActive={setIsActive}></PopupVideo>
    </>
  );
};

export default BlogFive;
