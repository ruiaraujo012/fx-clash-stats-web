import { useTranslation } from 'react-i18next';

const AppVersion = () => {
  const { i18n } = useTranslation();

  let versionDate;

  if (APP_VERSION_DATE) {
    versionDate = new Date(APP_VERSION_DATE).toLocaleDateString(i18n.language);
  }

  return (
    <div className='text-center'>
      <span className='text-sm font-normal text-gray-600 dark:text-gray-400'>
        v{APP_VERSION} {versionDate && `- ${versionDate}`}
      </span>
    </div>
  );
};

export default AppVersion;
