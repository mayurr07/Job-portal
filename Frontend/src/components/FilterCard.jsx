import React, { useEffect, useState } from 'react';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Label } from './ui/label';

const filterData = [
  {
    filterType: "Location",
    array: ["Mumbai", "Delhi", "Bangalore", "Hyderabad"]
  },
  {
    filterType: "Industry",
    array: ["Frontend", "Backend", "Sales", "SDE"]
  },
  {
    filterType: "Salary",
    array: ["0-10k", "0-20k", "0-30k", "0-40k"]
  },
];

const FilterCard = () => {
  const { selectedValue, setSelectedValue } = useState('');
  const [expandedFilter, setExpandedFilter] = useState(null);

  const changeHandler = (value) => {
    setSelectedValue(value);
  }

  const toggleDropdown = (filterType) => {
    setExpandedFilter(expandedFilter === filterType ? null : filterType);
  };

  useEffect(() => {
    // console.log(selectedValue);

  }, [selectedValue])

  return (
    <div className='bg-gray-50 p-4 rounded-lg shadow-md w-full'>
      <h1 className='text-lg font-semibold mb-4'>Filter Jobs</h1>
      <hr className='mb-4' />

      {/* RadioGroup Wrapper */}
      <RadioGroup className='space-y-6' value={selectedValue} onValueChnage={changeHandler}>
        {filterData.map((data, index) => (
          <div key={index} className='mb-4'>
            {/* Filter Type Header */}
            <h2
              className='font-medium cursor-pointer text-gray-700 flex justify-between items-center'
              onClick={() => toggleDropdown(data.filterType)}
            >
              {data.filterType}
              <span className="lg:hidden">{expandedFilter === data.filterType ? '-' : '+'}</span>
            </h2>

            {/* Filter Options */}
            <div className={`lg:block ${expandedFilter === data.filterType ? 'block' : 'hidden'}`}>
              {data.array.map((item, idx) => {
                const itemId = `r${index}-${idx}`
                return (
                  <div key={index} className='flex items-center space-x-2 my-2'>
                    <RadioGroupItem value={item} id={itemId} />
                    <Label htmlfor={itemId}>{item}</Label>
                  </div>
                )
              })}
            </div>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};

export default FilterCard;
