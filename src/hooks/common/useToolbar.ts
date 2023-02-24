import { useState } from 'react';

import { FilterType } from '@/enums/toolbar';

const useToolbar = () => {
  const [filterType, setFilterType] = useState<FilterType>(FilterType.Grid);

  const onChangeFilterType = (type: FilterType) => {
    setFilterType(type);
  };

  return { filterType, onChangeFilterType };
};

export default useToolbar;
