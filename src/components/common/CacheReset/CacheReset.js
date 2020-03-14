import React from 'react';

import Button from 'components/common/Button';
import { clearCaches } from 'utils/cache-store';

const CacheReset = () => (
    <div>
        <Button onClick={clearCaches}>Reset resource caches</Button>
    </div>
);

export default CacheReset;
