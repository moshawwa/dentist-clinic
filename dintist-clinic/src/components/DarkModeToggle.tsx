import { useEffect, useState } from 'react';

const DarkModeToggle = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [dark]);

  return (
    <button
      className="btn btn-secondary position-fixed bottom-0 end-0 m-4"
      onClick={() => setDark(!dark)}
    >
      {dark ? '☀ Light Mode' : '🌙 Dark Mode'}
    </button>
  );
};

export default DarkModeToggle;
