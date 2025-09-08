'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {useTranslations} from 'next-intl';
import CustomButton from './CustomButton';
import LanguageSwitcher from './LanguageSwitcher';

const Header = ({ setIsOpen }) => {
  const t = useTranslations('Header');

  return (
    <section className="p-2">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Top row */}
        <div className="w-full flex justify-between items-center">
          {/* Logo */}
          <div>
            <Image
              src="https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/logo-2024-new.webp"
              width={200}
              height={72}
              alt={t('logoAlt')}
              className="lg:w-[200px] lg:h-[72px] md:w-[120px] md:h-[53px] w-[130px] h-[47px] cursor-pointer"
              priority
            />
          </div>

          {/* Actions */}
          <div className="calendar-div flex flex-row items-center gap-2">
            <CustomButton
                      text={t("registerCta")}
                      bgColor="bg-white hover:bg-[#b2b2c2]"
                      textColor="text-[#1F2937]"
                      strokeColor="#000032"
                      onClick={() => setIsOpen(true)}
                    />
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
