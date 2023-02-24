import React from 'react';

import { AiOutlineUnorderedList } from 'react-icons/ai';
import { TbGridDots } from 'react-icons/tb';

import { FilterType } from '@/enums/toolbar';

interface ToolbarFilterProps {
  filterType: FilterType;
  onChangeFilterType: (type: FilterType) => void;
}

export default function ToolbarFilter({ filterType, onChangeFilterType }: ToolbarFilterProps) {
  return (
    <div className="topbar-filter">
      <div>
        <TbGridDots
          onClick={() => onChangeFilterType(FilterType.Grid)}
          style={{
            color: filterType === FilterType.Grid ? '#F3B50C' : '',
            cursor: 'pointer',
          }}
        />
        <AiOutlineUnorderedList
          onClick={() => onChangeFilterType(FilterType.List)}
          style={{
            color: filterType === FilterType.List ? '#F3B50C' : '',
            margin: '0 10px',
            cursor: 'pointer',
          }}
        />
      </div>
    </div>
  );
}
