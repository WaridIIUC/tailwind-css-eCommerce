import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import Product from './Product';

function Home() {
// const [showVertical, setShowVertical] = useState(true),
//       [showHorizontal, setShowHorizontal] = useState(false);

  return (
    <div>
    <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto flex flex-col">
    <div className="lg:w-4/6 mx-auto">
      <div className="rounded-lg h-64 overflow-hidden">
        <img alt="content" className="" src="https://previews.123rf.com/images/arrow/arrow1508/arrow150800011/43834601-online-shopping-e-commerce-flat-design-concept-banner-background.jpg"/>
      </div>
      <div className="flex flex-col sm:flex-row mt-10">
        <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
          <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
            <img src="https://warid-portfolio.netlify.app/static/media/IMG-20201214-WA0001-removebg-preview2.14a611b4.png" className = "rounded" alt="" />
          </div>
          <div className="flex flex-col items-center text-center justify-center">
            <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">Md. Warid Bin Azad</h2>
            <div className="w-12 h-1 bg-green-500 rounded mt-2 mb-4"></div>
            <h2>Founder <br/>Warid E-commerce</h2>
          </div>
        </div>
        <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
          <p className="leading-relaxed text-lg mb-4">E-commerce is the buying and selling of good or services via the internet, and the transfer of money and data to complete the sales. It’s also known as electronic commerce or internet commerce. Today, questions about e-commerce usually center around which channels are best to execute business online, but one of the most burning questions is the appropriate spelling of e-commerce. The truth is, there isn’t any one that’s right or wrong, and it usually comes down to preference.</p>
          <a className="text-green-500 inline-flex items-center">Learn More
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

<Product>

</Product>
</div>

  );
}

export default Home;
