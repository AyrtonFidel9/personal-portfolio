import React from 'react';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import { FaEye } from 'react-icons/fa';
import { useLanguage } from '@/app/context';
import ProjectCardStyles from './projectcard.module.scss';

interface Props {
  title: string;
  description: string;
  imageSrc: string | StaticImport;
  alt: string;
  urlProject: string;
}

function ProjectCard({ title, description, imageSrc, alt, urlProject }: Props) {
  const { languageOption } = useLanguage();

  return (
    <figure className={ProjectCardStyles.card}>
      <a href={urlProject} target="blank">
        <div className={`${ProjectCardStyles.icon_watch}`}>
          <span>
            <FaEye className={ProjectCardStyles.icon} />
            {languageOption === 'en' ? 'Watch' : 'Ver'}
          </span>
        </div>
        <Image
          className={ProjectCardStyles.card_image}
          src={imageSrc}
          alt={alt}
          width={300}
          height={300}
        />
      </a>
      <h5>{title}</h5>
      <figcaption>{description}</figcaption>
    </figure>
  );
}

export default ProjectCard;
