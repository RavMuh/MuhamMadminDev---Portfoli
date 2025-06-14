import { motion } from 'framer-motion';
import { ArrowRight, Code, Database, Layout, Star, Zap, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();
  const services = [
    {
      icon: <Code className="w-6 h-6" />,
      title: <span>{t('hometitle1')}</span>,
      description: <span>{t('hometext1')}</span>,
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: <span>{t('hometitle2')}</span>,
      description:  <span>{t('hometext2')}</span>,
    },
    {
      icon: <Layout className="w-6 h-6" />,
      title: <span>{t('hometitle3')}</span>,
      description:  <span>{t('hometext3')}</span>,
    },
  ];

  const highlights = [
    {
      icon: <Star className="w-6 h-6" />,
      title:<span>{t('hometitle4')}</span>,
      description: <span>{t('hometext4')}</span>,
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: <span>{t('hometitle5')}</span>,
      description:  <span>{t('hometext5')}</span>,
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: <span>{t('hometitle6')}</span>,
      description: <span>{t('hometext6')}</span>,
    },
  ];

  return (
    <div className="space-y-32 py-20">
      {/* Hero Section */}
      <section className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative mb-8"
          >
            <div className="absolute inset-0 bg-gradient-radial from-primary-200/30 to-transparent rounded-full blur-3xl" />
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              {t('title')}
            </h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto"
          >
            {t('text')}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <Link
              to="/projects"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-full hover:opacity-90 transition-all transform hover:scale-105"
            >
              {t('btn1')}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex text-blue-400 items-center px-8 py-4 border-2 border-gray-300 dark:border-gray-600 rounded-full hover:border-primary-600 hover:text-primary-600 transition-all transform hover:scale-105"
            >
                {t('btn2')}
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800/50 backdrop-blur-lg p-8 rounded-2xl text-blue-400 shadow-lg border border-gray-100 dark:border-gray-700 hover:border-primary-500 transition-all"
            >
              <div className="text-primary-500 mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
          {t('title5')}
        </h2>
        <div className="grid md:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group text-blue-400 bg-white dark:bg-gray-800/50 backdrop-blur-lg p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 hover:border-primary-500 transition-all"
            >
              <div className="text-primary-500 mb-6 transform group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;