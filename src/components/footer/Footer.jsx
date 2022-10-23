import React from 'react';
import "./footer.css";

  const footerLinks = [
    {
      text: `Tesla © ${new Date().getFullYear()}`,
      link: "https://www.tesla.com/about",
      showOnMobile: true,
    },
    {
      text: `Privacy & Legal`,
      link: "https://www.tesla.com/legal",
      showOnMobile: true,
    },
    {
      text: `Vehicle Recalls`,
      link: "https://service.tesla.com/vin-recall-search",
      showOnMobile: true,
    },
    {
      text: `Contact`,
      link: "https://www.tesla.com/contact",
      showOnMobile: false,
    },
    {
      text: `Careers`,
      link: "https://www.tesla.com/careers",
      showOnMobile: false,
    },
    {
      text: `News`,
      link: "https://www.tesla.com/blog",
      showOnMobile: true,
    },
    {
      text: `Engage`,
      link: "https://engage.tesla.com/",
      showOnMobile: false,
    },
    {
      text: `Locations`,
      link: "https://www.tesla.com/findus/list",
      showOnMobile: false,
    },
  ];

const Footer = () => {
  return (
    <div className="footer_main">
      <ul>
        {footerLinks.map((item) => (
          <li key={item.text} className={item.showOnMobile ? "show" : "hide"}>
            <a href={item.link} target="_blank">
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Footer
