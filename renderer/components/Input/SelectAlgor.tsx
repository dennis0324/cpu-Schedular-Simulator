import React, { Dispatch, SetStateAction } from 'react';
import Select from 'react-select';
import styled from 'styled-components';

/*
  FCFS - First Come First Serve
  SJF - Shortest Job First
  SRTF - Shortest Remaining Time First
  RR - Round-Robin
  NPP - Non-preemptive Priority
  PP - Preemptive Priority
*/
export type AlgoType = 'FCFS' | 'SJF' | 'SRTF' | 'RR' | 'NPP' | 'PP' | 'HRN';
export type OptionType = {
  value: AlgoType;
  label: string;
};

export const defaultOption: OptionType = {
  value: 'FCFS',
  label: 'First Come First Serve, FCFS',
};



const options: OptionType[] = [
  defaultOption,
  {
    value: 'SJF',
    label: 'Shortest Job First, SJF',
  },
  {
    value: 'NPP',
    label: 'Priority (non-Preemptive), NPP',
  },
  {
    value: 'RR',
    label: 'Round-Robin, RR',
  },
  {
    value: 'HRN',
    label: 'High Response ratio Next, HRN',
  },
  {
    value: 'PP',
    label: 'Priority (preemptive), PP',
  },
  {
    value: 'PP',
    label: 'Shortest Remaining Time, SRT',
  },
];

type AlgoSelectProps = {
  selectedAlgo: {};
  setSelectedAlgo: Dispatch<SetStateAction<{}>>;
};

export const StyledSelect = styled(Select)`
  width:400px;
  .react-select__control {
    box-sizing: border-box;
    border-color: #c5c7d0;
    height: 41px;
    &:hover {
      background-color: #fafafa;
    }
  }
  .react-select__control--is-focused {
    background-color: #fff;
    box-shadow: 0 0 0px 1px #74b0ff;
    border: 1px solid #2684ff;
    &:hover {
      background-color: #fff;
    }
  }
  .react-select__control--menu-is-open {
    box-shadow: 0 0 5px 1px #74b0ff;
    border: 1px solid #2684ff;
  }
  .react-select__value-container {
    padding: 0 8px;
    font-size: 14px;
  }
  .react-select__option {
    font-size: 14px;
  }
`;

function SelectAlgor({selectedAlgo,setSelectedAlgo}){
  return (
    <StyledSelect
      defaultValue={selectedAlgo}
      onChange={setSelectedAlgo}
      options={options}
      instanceId="react-select-algo"
      inputId="react-select-algo"
      classNamePrefix="react-select"
      isSearchable={false}
    />
  );
};

export default SelectAlgor;