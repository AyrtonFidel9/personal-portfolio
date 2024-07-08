import React from 'react';
import Image from 'next/image';
import SysOpsBadgeImage from './assets/aws-sysops.png';
import PractitionerBadgeImage from './assets/cloud-practitioner.png';
import ArchitectAssociateBadgeImage from './assets/aws-solutions-architect-associate.png';
import ArchitectProfessionalBadgeImage from './assets/aws-solutions-architect-professional.png';
import CertificationStyles from './certifications.module.scss';

function Certifications() {
  return (
    <section className={CertificationStyles.badges_section}>
      <h3>AWS Certified</h3>
      <div className={CertificationStyles.badges_container}>
        <Image
          src={PractitionerBadgeImage}
          alt="AWS Cloud practitioner badge"
        />
        <Image src={SysOpsBadgeImage} alt="AWS SysOps Administrator badge" />
        <Image
          src={ArchitectAssociateBadgeImage}
          alt="AWS Solutions Architect Associate badge"
        />
        <Image
          src={ArchitectProfessionalBadgeImage}
          alt="AWS Solutions Architect Professional badge"
        />
      </div>
    </section>
  );
}

export default Certifications;
