import React from 'react';
import Image from 'next/image';
import SoftSkillCardStyle from './softskillcard.module.scss';

interface Props {
  title: string;
  description: string;
  bkgColor: string;
  color: string;
}

function SkillCard({ title, description, bkgColor, color }: Props) {
  return (
    <div
      className={SoftSkillCardStyle.card}
      style={{ backgroundColor: bkgColor, color: color }}
    >
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
}

export default SkillCard;
