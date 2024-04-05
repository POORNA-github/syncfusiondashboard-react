import React from 'react';
import { BsCurrencyDollar } from 'react-icons/bs';
import { SiPolkadot } from "react-icons/si";
import { IoIosMore } from 'react-icons/io';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';

import { Stacked, Pie, Button, LineChart, SparkLine } from '../components';
import { earningData, medicalproBranding, recentTransactions, weeklyStats, dropdownData, SparklineAreaData, ecomPieChartData } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';
import product9 from '../data/product9.jpg';
import welcomeBackground from '../data/welcome-bg.svg'

const Ecommerce = () => {
  const { currentColor } = useStateContext();
  return (
    <div className="mt-24">
      <div className="flex flex-wrap
      lg:flex-nowrap justify-center">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg
        h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3
        bg-hero-pattern bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `url(${welcomeBackground})`}}>
          <div className='flex justify-between
          items-center'>
            <div>
              <p className="font-bold text-gray-400">Earnings</p>
              <p className="text-2xl">$58,995.85</p>
            </div>
          </div>
          <div className="mt-6">
            <Button 
              color="white"
              bgColor={currentColor}
              text="Download"
              borderRadius="10px"
              size="md"
            />
          </div>
        </div>

        <div className="flex m-3 flex-wrap justify-center gap-1 items-center">
          {earningData.map((item) => (
            <div key={item.title} className="bg-white h-44 dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56  p-4 pt-9 rounded-2xl ">
              <button
                type="button"
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                className="text-2xl opacity-0.9 rounded-full  p-4 hover:drop-shadow-xl"
              >
                {item.icon}
              </button>
              <p className="mt-3">
                <span className="text-lg font-semibold">
                  {item.amount}
                </span>
                <span 
                className=
                {`text-sm text-${item.pcColor}
                 ml-2`}>
                  {item.percentage}
                </span>
              </p>
              <p className=
              "text-sm text-gray-400 mt-1">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div className="flex gap-10 flex-wrap justify-center">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg
        m-3 p-4 rounded-2xl md:w-780">
            <div className="flex justify-between">
              
              <p className="font-semibold text-xl">Revenue Updates</p>
              <div className="flex items-center gap-4">
                <p className="flex items-center gap-2 text-gray-600 hover:drop-shadow-xl">
                  <span><SiPolkadot /></span>
                  <span>Expense</span>
                </p>
                <p className="flex items-center gap-2 text-green-400 hover:drop-shadow-xl">
                  <span><SiPolkadot /></span>
                  <span>Budget</span>
                </p>
              </div>
            </div>
            <div className="mt-10 flex gap-10 flex-wrap
            justify-center">
              <div className="border-r-1 border-color m-4 pr-10">
                <div>
                  <p>
                    <span className="text-3xl font-semibold">$98,253.80</span>
                    <span className="p-1.5 hover:drow-shadow-xl cursor-pointer
                    rounded-full bg-green-400 ml-3 text-xs">20%</span>
                  </p>
                  <p className="text-gray-500 mt-1">
                    Budget
                  </p>
                </div>
                <div className="mt-8">
                  <p>
                    <span className="text-3xl font-semibold">$48,951.10</span>
                    
                  </p>
                  <p className="text-gray-500 mt-1">
                    Expense
                  </p>
                </div>
                <div className="mt-5">
                  <SparkLine 
                    currentColor={currentColor}
                    id="line-sparkline"
                    type="Line"
                    height="80px"
                    width="250px"
                    data={SparklineAreaData}
                    color={currentColor}
                  />
                </div>
                <div className="mt-10">
                  <Button 
                    color="white"
                    bgColor={currentColor}
                    text="Download Report"
                    borderRadius="10px"
                  
                  />
                </div>
              </div>

            <div>
              <Stacked width="320px" height="360px" />
            </div>
            </div>
        </div>
        
      </div>
        </div>
      
    
  )
}

export default Ecommerce
