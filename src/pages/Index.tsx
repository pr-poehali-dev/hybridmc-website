import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const newsItems = [
    {
      id: 1,
      title: "Обновление 1.20.4 - Новые биомы!",
      description: "Исследуйте загадочные пещеры и встречайте новых мобов",
      date: "13 сентября 2024",
      category: "Обновление"
    },
    {
      id: 2,
      title: "Турнир PvP - Призовой фонд 50000₽",
      description: "Регистрация открыта! Покажи свои навыки в бою",
      date: "10 сентября 2024", 
      category: "События"
    },
    {
      id: 3,
      title: "Новый мини-игровой режим: SkyWars",
      description: "Сражайся на летающих островах за выживание",
      date: "8 сентября 2024",
      category: "Игры"
    }
  ];

  const devUpdates = [
    {
      id: 1,
      title: "Работа над новой экономикой сервера",
      content: "Добавляем систему торговли между игроками и НПЦ магазины",
      author: "AdminMike",
      date: "12 сентября 2024"
    },
    {
      id: 2,
      title: "Оптимизация производительности",
      content: "Улучшили стабильность сервера, теперь меньше лагов!",
      author: "DevAlex", 
      date: "9 сентября 2024"
    }
  ];

  const donatePackages = [
    {
      name: "Базовый",
      price: "199₽",
      features: ["VIP статус", "Цветной ник", "5 домов", "/fly на 1 час"],
      color: "from-minecraft-green to-minecraft-blue"
    },
    {
      name: "Премиум",
      price: "499₽", 
      features: ["Premium статус", "Кит предметов", "10 домов", "/fly без ограничений", "Собственная приватная зона"],
      color: "from-minecraft-orange to-minecraft-purple",
      popular: true
    },
    {
      name: "Легенда",
      price: "999₽",
      features: ["Legend статус", "Эксклюзивные предметы", "Неограниченные дома", "Все команды", "Персональный НПЦ"],
      color: "from-minecraft-purple to-minecraft-gray"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-minecraft-dark via-gray-900 to-black text-white">
      {/* Navigation */}
      <nav className="bg-black/50 backdrop-blur-sm border-b border-minecraft-green/20 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-minecraft-green to-minecraft-blue rounded animate-glow"></div>
              <span className="text-2xl font-bold bg-gradient-to-r from-minecraft-green to-minecraft-blue bg-clip-text text-transparent">
                HYBRIDMC
              </span>
            </div>
            <div className="hidden md:flex space-x-6">
              <a href="#home" className="hover:text-minecraft-green transition-colors">Главная</a>
              <a href="#news" className="hover:text-minecraft-blue transition-colors">Новости</a>
              <a href="#dev-blog" className="hover:text-minecraft-orange transition-colors">Дневник</a>
              <a href="#donate" className="hover:text-minecraft-purple transition-colors">Донат</a>
              <a href="#unban" className="hover:text-red-400 transition-colors">Разбан</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="animate-float mb-8">
            <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-minecraft-green via-minecraft-blue to-minecraft-purple bg-clip-text text-transparent animate-gradient-shift">
              HYBRIDMC
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              🎮 Лучший Minecraft сервер с уникальными модами и мини-играми
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-12">
            <Button className="bg-gradient-to-r from-minecraft-green to-minecraft-blue hover:scale-105 transition-transform px-8 py-3 text-lg font-semibold">
              <Icon name="Play" className="mr-2" />
              Играть сейчас
            </Button>
            <Button variant="outline" className="border-minecraft-orange text-minecraft-orange hover:bg-minecraft-orange hover:text-black transition-all px-8 py-3 text-lg">
              <Icon name="Users" className="mr-2" />
              Discord сервер
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-black/40 rounded-lg p-4 border border-minecraft-green/30">
              <Icon name="Users" className="mx-auto mb-2 text-minecraft-green" size={32} />
              <div className="text-2xl font-bold text-minecraft-green">1,247</div>
              <div className="text-sm text-gray-400">Онлайн игроков</div>
            </div>
            <div className="bg-black/40 rounded-lg p-4 border border-minecraft-blue/30">
              <Icon name="Trophy" className="mx-auto mb-2 text-minecraft-blue" size={32} />
              <div className="text-2xl font-bold text-minecraft-blue">15</div>
              <div className="text-sm text-gray-400">Мини-игр</div>
            </div>
            <div className="bg-black/40 rounded-lg p-4 border border-minecraft-orange/30">
              <Icon name="Zap" className="mx-auto mb-2 text-minecraft-orange" size={32} />
              <div className="text-2xl font-bold text-minecraft-orange">24/7</div>
              <div className="text-sm text-gray-400">Работаем</div>
            </div>
            <div className="bg-black/40 rounded-lg p-4 border border-minecraft-purple/30">
              <Icon name="Star" className="mx-auto mb-2 text-minecraft-purple" size={32} />
              <div className="text-2xl font-bold text-minecraft-purple">4.9</div>
              <div className="text-sm text-gray-400">Рейтинг</div>
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section id="news" className="py-16 px-4 bg-black/20">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-minecraft-blue to-minecraft-green bg-clip-text text-transparent">
            <Icon name="Newspaper" className="inline mr-3 text-minecraft-blue" />
            Новости сервера
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {newsItems.map((item) => (
              <Card key={item.id} className="bg-black/50 border-minecraft-blue/30 hover:border-minecraft-blue/60 transition-all hover:scale-105">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge className="bg-minecraft-blue/20 text-minecraft-blue border-minecraft-blue/30">
                      {item.category}
                    </Badge>
                    <span className="text-sm text-gray-400">{item.date}</span>
                  </div>
                  <CardTitle className="text-white">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300">
                    {item.description}
                  </CardDescription>
                  <Button variant="link" className="text-minecraft-blue hover:text-minecraft-green p-0 mt-2">
                    Читать далее →
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Developer Blog */}
      <section id="dev-blog" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-minecraft-orange to-minecraft-purple bg-clip-text text-transparent">
            <Icon name="Code" className="inline mr-3 text-minecraft-orange" />
            Дневник разработчика
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {devUpdates.map((update) => (
              <Card key={update.id} className="bg-black/50 border-minecraft-orange/30 hover:border-minecraft-orange/60 transition-all">
                <CardHeader>
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center space-x-2">
                      <Icon name="User" className="text-minecraft-orange" size={16} />
                      <span className="text-minecraft-orange font-medium">{update.author}</span>
                    </div>
                    <span className="text-sm text-gray-400">{update.date}</span>
                  </div>
                  <CardTitle className="text-white">{update.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">{update.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Donate Section */}
      <section id="donate" className="py-16 px-4 bg-black/20">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-minecraft-purple to-minecraft-green bg-clip-text text-transparent">
            <Icon name="Heart" className="inline mr-3 text-minecraft-purple" />
            Поддержать сервер
          </h2>
          <p className="text-center text-gray-300 mb-12 text-lg">
            Помогите нам развивать сервер и добавлять новый контент!
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {donatePackages.map((pkg, index) => (
              <Card key={index} className={`bg-black/50 border-2 ${pkg.popular ? 'border-minecraft-orange scale-105' : 'border-gray-600'} hover:scale-110 transition-all relative overflow-hidden`}>
                {pkg.popular && (
                  <div className="absolute top-0 right-0 bg-minecraft-orange text-black px-3 py-1 text-sm font-bold">
                    ПОПУЛЯРНЫЙ
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-center text-2xl text-white">{pkg.name}</CardTitle>
                  <CardDescription className="text-center">
                    <span className={`text-4xl font-bold bg-gradient-to-r ${pkg.color} bg-clip-text text-transparent`}>
                      {pkg.price}
                    </span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {pkg.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center text-gray-300">
                        <Icon name="Check" className="text-minecraft-green mr-2" size={16} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className={`w-full bg-gradient-to-r ${pkg.color} hover:opacity-80 transition-opacity`}>
                    <Icon name="CreditCard" className="mr-2" />
                    Купить
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Unban Section */}
      <section id="unban" className="py-16 px-4">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
            <Icon name="Shield" className="inline mr-3 text-red-400" />
            Запрос на разбан
          </h2>
          <p className="text-center text-gray-300 mb-12">
            Считаете, что вас забанили несправедливо? Подайте апелляцию!
          </p>
          
          <Card className="bg-black/50 border-red-400/30">
            <CardHeader>
              <CardTitle className="text-white text-center">Форма апелляции</CardTitle>
              <CardDescription className="text-center">
                Заполните форму ниже, и администрация рассмотрит ваш случай
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-gray-300 mb-2 block">Ваш никнейм</label>
                  <input className="w-full bg-black/40 border border-gray-600 rounded px-3 py-2 text-white" placeholder="PlayerName" />
                </div>
                <div>
                  <label className="text-sm text-gray-300 mb-2 block">Дата бана</label>
                  <input type="date" className="w-full bg-black/40 border border-gray-600 rounded px-3 py-2 text-white" />
                </div>
              </div>
              
              <div>
                <label className="text-sm text-gray-300 mb-2 block">Причина обращения</label>
                <textarea 
                  className="w-full bg-black/40 border border-gray-600 rounded px-3 py-2 text-white h-32" 
                  placeholder="Опишите ситуацию подробно..."
                ></textarea>
              </div>
              
              <Button className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 transition-all">
                <Icon name="Send" className="mr-2" />
                Отправить апелляцию
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/60 border-t border-minecraft-green/20 py-8 px-4">
        <div className="container mx-auto text-center">
          <div className="flex justify-center space-x-6 mb-4">
            <a href="#" className="text-gray-400 hover:text-minecraft-blue transition-colors">
              <Icon name="MessageCircle" size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-minecraft-green transition-colors">
              <Icon name="Users" size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-minecraft-purple transition-colors">
              <Icon name="Globe" size={24} />
            </a>
          </div>
          <p className="text-gray-400 text-sm">
            © 2024 HYBRIDMC. Все права защищены. | IP: play.hybridmc.ru
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;