import { motion } from 'framer-motion';
import { BookOpen, Code2, Coffee, Globe } from 'lucide-react';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();
  const stats = [
    { icon: <Code2 />, value: '1+', label: <h1>{t('about1')}</h1> },
    { icon: <Coffee />, value: '20+', label: <h1>{t('about2')}</h1> },
    { icon: <Globe />, value: '2+', label: <h1>{t('about3')}</h1>},
    { icon: <BookOpen />, value: '20+', label: <h1>{t('about4')}</h1> },
  ];

  const skills = [
    { name: <span>{t('reactskil')}</span>, level: 70 },
    { name: <span>{t('htmlskil')}</span>, level: 85 },
    { name: <span>{t('notejsskil')}</span>, level: 50 },
    { name: <span>{t('cplusskil')}</span>, level: 45 },
    { name: <span>{t('cssskil')}</span>, level: 85 },
    { name: <span>{t('javaskil')}</span>, level: 70 },
  ];

  return (
    <>
      <div className="container mx-auto px-4 py-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold text-center mb-12 text-blue-400">{t('title2')}</h1>

          {/* Bio Section */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-12">
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              {t('text2')}
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              {t('text3')}
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white text-blue-400 dark:bg-gray-800 rounded-lg p-6 text-center shadow-lg"
              >
                <div className="text-blue-600 mb-2">{stat.icon}</div>
                <div className="text-2xl font-bold mb-1">{stat.value}</div>
                <div className="text-gray-600 dark:text-gray-300 text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Skills Section */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-blue-400">{t('title6')}</h2>
            <div className="space-y-4">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium text-blue-400">{skill.name}</span>
                    <span className="text-gray-600 dark:text-gray-300">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.2 }}
                      className="bg-blue-600 h-2.5 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default About;