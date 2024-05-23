import React from "react";
import "../../Styles/Return.css";

const Rerturnpolicy = () => {
  return (
    <>
      <div className="h-screen text-white w-full bg-black">
        <div className="max-w-[1140px] container mx-auto pt-[50px]">
          <div className="mb-5">
            <h1 className="text-[#E4DFDF] text-[40px] font-medium leading-10 text-center">
              Refund Policy
            </h1>
          </div>
          <div>
            <div>
              <h3 className="mb-4 text-[28px] font-medium leading-8">
                Purchase Terms of Agreement
              </h3>
              <p className="mb-5">
                The purchase of digital products, including PDF downloads and
                online material is subject to the following terms and
                conditions. Consumers are advised to review carefully before
                making any purchase.
              </p>
              <h3 className="mb-4 text-[28px] font-medium leading-8">
                Payment + Refund Policy
              </h3>
              <p>
                All transactions for purchase of intangible products, pdf
                downloads, resource material, templates and online content are
                made through payment gateways such as PayPal or Direct bank
                transfers. These payment gateways are safe and secure for using
                all types of credit cards and debit cards in different countries
                and your details are not stored during this process.
              </p>
              <p className="my-5">
                Since your purchase is a digital product, it is deemed “used”
                after download or opening, and all purchases made on
                www.iptvtemplate.shop are refundable within 7 days only for a
                convincing reason. Since the products made available here are
                intangible,{" "}
                <b>
                  <u>there is a strict 7 days refund policy</u>
                </b>
                .
              </p>
              <h3 className="mb-4 text-[28px] font-medium leading-8">
                Delivery of Goods and Services
              </h3>
              <p>
                If you do not receive the digital product link upon purchasing,
                you can immediately contact us with your transaction/payment
                details to ensure your product is delivered as soon as possible.
              </p>{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Rerturnpolicy;
