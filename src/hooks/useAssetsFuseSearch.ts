import { useState } from 'react';
import Fuse from 'fuse.js';
import type { Asset } from '@/types';

interface Options {
  fuseConfig?: Fuse.IFuseOptions<Asset>;
  initialSearch?: string;
}

const useAssetsFuseSearch = (assets: Asset[], options?: Options) => {
  const [search, setSearch] = useState(options?.initialSearch ?? '');

  const fuse = new Fuse(assets, {
    keys: ['name'],
    shouldSort: false,
    threshold: 0.4,
    ...options?.fuseConfig,
  });

  const filteredAssets = search.trim() ? fuse.search(search).map((filtered) => filtered.item) : assets;

  return { filteredAssets, search, setSearch };
};

export default useAssetsFuseSearch;
