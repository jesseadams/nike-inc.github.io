'use strict';

var m = require('mithril');

var footer = {
  controller: function() {},
  view: function() {
    return m("footer#footer", m(".main-footer.regular-footer.clearfix",
      m(".nike-cq-global-footer-2-page.nike-cq-en_US.nike-cq-tesla-xml.nike-cq-lang-en.nike-cq-en_US",
        m("section.nike-cq-page-section.nike-cq-page-section-1.nike-cq-global-footer-2-section.nike-cq-global-footer-2-section-1",
          m(".nike-cq-page-section-container.nike-cq-global-footer-2-container",
            m(".nike-cq-global-footer-2",
              m(".nike-cq-global-footer-2-wrapper.nsg-font-family--base",
                [
                  m(".nike-cq-global-footer-2-column-container",
                    [
                      m("ul.nike-cq-global-footer-column",
                        [
                          m("li.nike-cq-global-footer-title.nsg-font-family--platform",
                            m("a[href='http://store.nike.com/us/en_us/?l=shop%2Cgift_cards']",
                              "GIFT CARDS"
                            )
                          ),
                          m("li.nike-cq-global-footer-title.nsg-font-family--platform",
                            m("a[href='http://www.nike.com/us/en_us/sl/store-locator']",
                              "FIND A STORE"
                            )
                          ),
                          m("li.nike-cq-global-footer-title.nsg-font-family--platform",
                            m("a[href='http://store.nike.com/us/en_us/?l=shop%2Cemail_signup']",
                              "SIGN UP FOR EMAIL"
                            )
                          ),
                          m("li.nike-cq-global-footer-title.nsg-font-family--platform",
                            m("a[href='http://www.nike.com/us/en_us/s/register']",
                              "JOIN NIKE+"
                            )
                          )
                        ]
                      ),
                      m("ul.nike-cq-global-footer-column",
                        [
                          m("li.nike-cq-global-footer-title.nsg-font-family--platform",
                            m("a[href='http://help-en-us.nike.com']",
                              "GET HELP"
                            )
                          ),
                          m("li.nike-cq-global-footer-link",
                            m("a[href='http://store.nike.com/us/en_us/orders']",
                              "Order Status"
                            )
                          ),
                          m("li.nike-cq-global-footer-link",
                            m("a[href='http://help-en-us.nike.com/app/answers/detail/article/shipping-delivery']",
                              "Shipping and Delivery"
                            )
                          ),
                          m("li.nike-cq-global-footer-link",
                            m("a[href='http://help-en-us.nike.com/app/landing/returns']",
                              "Returns"
                            )
                          ),
                          m("li.nike-cq-global-footer-link",
                            m("a[href='http://help-en-us.nike.com/app/answers/detail/article/payment-options']",
                              "Payment Options"
                            )
                          ),
                          m("li.nike-cq-global-footer-link",
                            m("a[href='http://help-en-us.nike.com/app/landing/contact']",
                              "Contact Us"
                            )
                          )
                        ]
                      ),
                      m("ul.nike-cq-global-footer-column",
                        [
                          m("li.nike-cq-global-footer-title.nsg-font-family--platform",
                            m("a[href='http://news.nike.com']",
                              "NEWS"
                            )
                          ),
                          m("li.nike-cq-global-footer-title.nsg-font-family--platform",
                            m("a[href='http://about.nike.com']",
                              "ABOUT NIKE"
                            )
                          ),
                          m("li.nike-cq-global-footer-link",
                            m("a[href='http://jobs.nike.com'][target='_blank']",
                              "Careers"
                            )
                          ),
                          m("li.nike-cq-global-footer-link",
                            m("a[href='http://investors.nike.com'][target='_blank']",
                              "Investors"
                            )
                          ),
                          m("li.nike-cq-global-footer-link",
                            m("a[href='http://www.nike.com/us/en_us/c/sustainability']",
                              "Sustainable Innovation"
                            )
                          ),
                          m("li.nike-cq-global-footer-link",
                            m("a[href='http://help-en-us.nike.com/app/answers/detail/article/supply-chain']",
                              "CA Supply Chains Act"
                            )
                          )
                        ]
                      ),
                      m("ul.nike-cq-global-footer-column.nike-cq-global-footer-column-right",
                        [
                          m("li.nike-cq-global-footer-title.nsg-font-family--platform",
                            "SOCIAL"
                          ),
                          m("li.nike-cq-global-footer-social-container",
                            [
                              m("span.nike-cq-global-footer-2-social-wrapper[data='twitter']",
                                m("a[href='https://twitter.com/Nike'][name='twitter'][target='_blank']",
                                  m("span.g72-twitter",
                                    m.trust("&nbsp;")
                                  )
                                )
                              ),
                              m("span.nike-cq-global-footer-2-social-wrapper[data='facebook']",
                                m("a[href='https://www.facebook.com/nike'][name='facebook'][target='_blank']",
                                  m("span.g72-facebook",
                                    m.trust("&nbsp;")
                                  )
                                )
                              ),
                              m("span.nike-cq-global-footer-2-social-wrapper[data='youtube']",
                                m("a[href='https://www.youtube.com/user/nike'][name='youtube'][target='_blank']",
                                  m("span.g72-youtube",
                                    m.trust("&nbsp;")
                                  )
                                )
                              ),
                              m("span.nike-cq-global-footer-2-social-wrapper[data='instagram']",
                                m("a[href='http://instagram.com/nike'][name='instagram'][target='_blank']",
                                  m("span.g72-instagram",
                                    m.trust("&nbsp;")
                                  )
                                )
                              )
                            ]
                          )
                        ]
                      )
                    ]
                  ),
                  m(".nike-cq-global-footer-bottom-container",
                    [
                      m("ul.nike-cq-global-footer-bottom-column.nike-cq-global-footer-bottom-column-left",
                        m("li",
                          [
                            "©",
                            m.trust("&nbsp;"),
                            "2016",
                            m.trust("&nbsp;"),
                            "Nike, Inc. All Rights Reserved"
                          ]
                        )
                      ),
                      m(".nike-cq-global-footer-bottom-column.nike-cq-global-footer-bottom-column-right",
                        m(".nike-cq-global-footer-terms",
                          [
                            m("span.nike-cq-global-footer-terms-link.link-0",
                              m("a[href='http://www.nike.com/us/en_us/c/help/terms-conditions']",
                                "Terms of Use"
                              )
                            ),
                            m("span.nike-cq-global-footer-terms-link.link-1",
                              m("a[href='http://www.nike.com/us/en_us/c/help/privacy-policy']",
                                "Nike Privacy Policy"
                              )
                            )
                          ]
                        )
                      )
                    ]
                  )
                ]
              )
            )
          )
        )
      )
    ));
  }
};

module.exports = footer;
