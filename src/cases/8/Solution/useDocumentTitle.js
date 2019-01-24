import { useEffect } from 'react';

const useTitle = title => {
  // 🙌🏼 useEffect match perfect for this use case
  useEffect(
    () => {
      document.title = title;
    },
    // 👀 so important to update our document title just when title param changes
    [title],
  );
};

export default useTitle;
