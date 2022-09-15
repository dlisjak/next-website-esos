import { useEffect } from 'react';
import { loadGA, enableGA } from '../../utils/ga';

const GoogleAnalytics = () => {
  useEffect(() => {
    loadGA(() => enableGA());
  }, []);

  return null;
};

export default GoogleAnalytics;
