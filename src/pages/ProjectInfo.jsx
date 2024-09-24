import React from "react";

const ProjectInfo = () => {
  return (
    <div>
      <section className="bg-darkBlue-900 py-28">
        <div className="container mx-auto px-4">
          <div className="pb-24 border-b border-white border-opacity-20 mb-24">
            <div className="flex flex-wrap items-center justify-center gap-4 mb-4">
              <p className="text-white text-sm font-medium">17 Jul 2024</p>
              <span className="px-2 py-1 bg-white bg-opacity-10 border border-white border-opacity-20 rounded-md text-white text-xs font-medium">
                Accounting
              </span>
            </div>
            <h1 className="font-heading text-white text-center text-4xl md:text-6xl font-bold mb-4 max-w-4xl md:max-w-6xl mx-auto">
              Mastering Cash Basis Accounting: A Step-by-Step Guide
            </h1>
            <p className="text-white text-center text-opacity-50 mb-4">
              Written by
            </p>
            <img
              className="h-12 mx-auto mb-4"
              src="vista-assets/images/blog-content/avatar.png"
              alt=""
            />
            <p className="text-white font-semibold text-center mb-1">Madelyn</p>
            <p className="text-gray-400 text-sm text-center mb-12">
              Content Marketing
            </p>
            <div className="max-w-3xl mx-auto">
              <img
                className="object-cover rounded-2xl w-full mb-12"
                style={{ height: "480px" }}
                src="vista-assets/images/blog-content/placeholder-blue.png"
                alt=""
              />
              <p className="text-white text-opacity-70 text-xl mb-12 max-w-4xl">
                Cash basis accounting simplifies tracking by only recording
                transactions when cash enters or exits your business, regardless
                of when they're earned or billed. It's commonly used by
                individuals and small businesses with straightforward cash
                flows. While it offers simplicity and clarity regarding
                available cash, it may not provide a complete picture of
                business health or growth opportunities.
              </p>
              <h2 className="text-white text-4xl font-bold mb-6">
                What is cash basis accounting?
              </h2>
              <p className="text-white text-opacity-70 text-xl mb-12 max-w-4xl">
                Cash basis accounting is when you only record transactions when
                the money enters or leaves your business, even if they were
                earned or billed earlier.
              </p>
              <h2 className="text-white text-4xl font-bold mb-6">
                How does cash accounting work?
              </h2>
              <p className="text-white text-opacity-70 text-xl mb-6 max-w-4xl">
                Cash basis accounting is a simple way to track the cash that’s
                flowing in and out of your business.
              </p>
              <p className="text-white text-opacity-70 text-xl mb-6 max-w-4xl">
                Here are a few examples of what it can look like:
              </p>
              <ul className="list-disc pl-6 flex flex-col gap-6 mb-12">
                <li className="text-white text-opacity-70 text-xl max-w-3xl">
                  With cash basis accounting, you record payments for products
                  as they're received, not beforehand, even with flexible
                  payment options like installment plans for your online shop.
                </li>
                <li className="text-white text-opacity-70 text-xl max-w-3xl">
                  If customers pay with credit cards, revenue isn't recorded
                  immediately but when the payment is received from the credit
                  card company.
                </li>
                <li className="text-white text-opacity-70 text-xl max-w-3xl">
                  You’re a graphic designer who spends a week in April creating
                  a brochure for a local gallery. You submit an invoice of net
                  30, which means that the gallery is paying you in May. With
                  cash basis accounting, you’d recognize that income in May when
                  you receive the payment rather than in April, when you did the
                  work.
                </li>
                <li className="text-white text-opacity-70 text-xl max-w-3xl">
                  In cash basis accounting for your online clothing shop, sales
                  are only recorded when payment is received via debit or cash,
                  not credit.
                </li>
              </ul>
              <h2 className="text-white text-4xl font-bold mb-6">
                The bottom line on cash basis accounting
              </h2>
              <div className="flex items-center gap-6">
                <div className="bg-blue-500 w-1 h-16 flex-shrink-0" />
                <p className="text-sweetBlue-500 text-xl font-medium max-w-3xl">
                  Cash basis accounting is a good option for small businesses or
                  individuals, especially those who almost exclusively deal with
                  cash.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center flex-wrap gap-4 mb-10">
            <h2 className="font-heading text-white text-3xl font-bold">
              Continue Reading
            </h2>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-white hover:text-opacity-70 transition duration-200"
            >
              <span className="text-sm font-medium">See all</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M5.5 3.00024L10.5 8.00024L5.5 13.0002"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="w-full lg:w-1/3 p-4">
              <a href="#" className="group">
                <img
                  className="h-60 w-full object-cover rounded-2xl mb-6"
                  src="vista-assets/images/blog-content/placeholder-blue-small.png"
                  alt=""
                />
                <p className="text-white text-xl font-bold group-hover:underline max-w-xs">
                  7 Black Friday tips for small businesses
                </p>
              </a>
            </div>
            <div className="w-full lg:w-1/3 p-4">
              <a href="#" className="group">
                <img
                  className="h-60 w-full object-cover rounded-2xl mb-6"
                  src="vista-assets/images/blog-content/placeholder-blue-small.png"
                  alt=""
                />
                <p className="text-white text-xl font-bold group-hover:underline max-w-xs">
                  5 ways to get paid faster with automated invoicing
                </p>
              </a>
            </div>
            <div className="w-full lg:w-1/3 p-4">
              <a href="#" className="group">
                <img
                  className="h-60 w-full object-cover rounded-2xl mb-6"
                  src="vista-assets/images/blog-content/placeholder-blue-small.png"
                  alt=""
                />
                <p className="text-white text-xl font-bold group-hover:underline max-w-xs">
                  How to prepare for a business tax audit
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectInfo;
