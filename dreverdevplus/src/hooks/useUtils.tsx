import { useContext } from 'react';
import { UtilsContextType } from '@/types';
import { UtilsContext } from '@/providers/utilsContext';

const useUtils = (): UtilsContextType => {
  const context = useContext(UtilsContext);
  if (context === undefined) {
    throw new Error('useMobile must be used within a MobileProvider');
  }
  return context;
};

export default useUtils;