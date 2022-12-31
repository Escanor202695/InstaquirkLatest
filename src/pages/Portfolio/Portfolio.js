import React from 'react';
import CommonPageHeader from '../../components/CommonPageHeader/CommonPageHeader';
import HomeTwoFooter from '../HomeTwo/HomeTwoFooter/HomeTwoFooter';
import HomeTwoHeader from '../HomeTwo/HomeTwoHeader/HomeTwoHeader';
import PortfolioArea from './PortfolioArea/PortfolioArea';

const Portfolio = () => {
   return (
      <>
         <HomeTwoHeader/>
         <CommonPageHeader title="Our Portfolio" subtitle="Portfolio" />
         <PortfolioArea/>
         <HomeTwoFooter/>
      </>
   );
};

export default Portfolio;