import React from 'react';
import Image from 'next/image';
import CardStyle from './skillcard.module.scss';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

interface Props {
  imageSrc: string | StaticImport;
  alt: string;
}

function SkillCard({ imageSrc, alt }: Props) {
  return (
    <div className={CardStyle.card}>
      <Image
        className={CardStyle.card_image}
        src={imageSrc}
        alt={alt}
        height={100}
      />
    </div>
  );
}

export default SkillCard;
