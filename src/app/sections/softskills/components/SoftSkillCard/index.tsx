import React from 'react';
import SoftSkillCardStyle from './softskillcard.module.scss';

interface Props {
  title: string;
  description: string;
  bkgColor: string;
  txtColor: string;
}

function SkillCard({ title, description, bkgColor, txtColor }: Props) {
  return (
    <div
      className={SoftSkillCardStyle.card}
      style={{ backgroundColor: bkgColor, color: txtColor }}
    >
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
}

export default SkillCard;
