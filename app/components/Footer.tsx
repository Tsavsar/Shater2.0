import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="pt-40">
      <div className="c-md-responsive f-satoshi w-[400px] overflow-hidden">
        <div className="flex justify-between">
          <a
            className="text-[#9A9A9A] font-light text-[9px] md:text-xs"
            href="mailto:shatermt@gmail.com"
          >
            shatermt@gmail.com
          </a>
          <div className="flex gap-2">
            <p className="gradient-text font-light text-[9px] md:text-xs">
              Designed By{" "}
              <a href="https://x.com/Tsavsar_" target="_blank">
                Shater
              </a>
            </p>
            <p className="text-[#9A9A9A] font-light text-[9px] md:text-xs">
              <a
                href="https://github.com/blossom-babs"
                target="_blank"
              > Built By Blossom</a>
            </p>
          </div>
          <p className="text-[#9A9A9A] font-light text-[9px] md:text-xs">
            © 2025 Shater M. Tsavsar
          </p>
        </div>
      </div>
      <div className="w-full">
        <Image
          src="/images/footer-desktop.svg"
          alt="Shatermt.com"
          width={2416}
          height={278}
          layout="responsive"
        />
      </div>
    </div>
  );
};

export default Footer;
