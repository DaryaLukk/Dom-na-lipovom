import { makeAutoObservable } from 'mobx'

class CottageStore {
  cottages = [
    {
      id: 1, name: "Светлый", sq: "280 м²", count: "30", sleeper: "22", address: "Тюмень, улица Николая Егорова 5А",
      imgs: ["./pictures/light/1.jpeg", "./pictures/light/2.jpeg", "./pictures/light/3.jpeg", "./pictures/light/4.jpeg", "./pictures/light/5.jpeg", "./pictures/light/6.jpeg", "./pictures/light/7.jpeg", "./pictures/light/8.jpeg", "./pictures/light/9.jpeg", "./pictures/light/10.jpeg", "./pictures/light/11.jpeg", "./pictures/light/12.jpeg"],
      description: ["Спальных мест 22 (4 отдельных спальни с двумя двуспальными кроватями в каждой и диваны по дому, а также имеется тайная комната Гарри Потера)", "Большая вместимость и много уютных спальных мест", "Кухня оборудована современной техникой и красивой посудой", "Необходимые мелочи есть: шампура, решётки на мангал, туалетная бумага, губки, средство для посуды, мыло, полотенца и др."],
      price: ["15000₽", "Обеспечительный залог -3000₽", "Понедельник-четверг - 15000", "Пятница и предпраздничные дни - 20000₽", "Воскресенье - 17000₽", "Суббота и праздники - 25000₽"],
      check: { "in": "15:00", "out": "13:00" },
      add: ["Раннее заселение или поздний выезд оплачивается отдельно-700₽ час, при согласовании на кануне", "Баня оплачивается отдельно, за пять часов - 2000₽", "Постельное белье за отдельную плату 100 за один комплект на 1 человека, оно находится в доме и берёте сколько надо, на следующий день по факту расплачиваетесь", "Кухня полностью оборудована: посудомоечная машина, холодильник, плита, духовка, микроволновая печь, тостер и чайник. Посуда есть до 30 человек."]
    },
    {
      id: 2, name: "Темный", sq: "250 м²", count: "25", sleeper: "19", address: "Тюмень, улица Николая Егорова 5",
      imgs: ["./pictures/dark/1.jpeg", "./pictures/dark/2.jpeg", "./pictures/dark/3.jpeg", "./pictures/dark/4.jpeg", "./pictures/dark/5.jpeg", "./pictures/dark/6.jpeg", "./pictures/dark/7.jpg", "./pictures/dark/8.jpeg", "./pictures/dark/9.jpeg", "./pictures/dark/10.jpeg", "./pictures/dark/11.jpeg", "./pictures/dark/12.jpeg", "./pictures/dark/13.jpeg", "./pictures/dark/14.jpeg", "./pictures/dark/15.jpeg", "./pictures/dark/16.jpeg", "./pictures/dark/17.jpeg", "./pictures/dark/18.jpeg", "./pictures/dark/19.jpeg", "./pictures/dark/20.jpeg", "./pictures/dark/21.jpeg", "./pictures/dark/22.jpeg"],
      description: ["Бильярдный зал, четыре отдельных спальни и санузел на втором этаже", "Современная кухня с банкетным залом и потолками высотой в 6 метров на первом этаже", "Зона СПА (баня с душевой и комнатой отдыха) и сан узлом на первом этаже также в доме", "На стенах авторская роспись и картины художников Тюмени!"],
      price: ["12000₽", "Обеспечительный депозит: 3 000 руб.", "Понедельник-четверг - 12000", "Пятница, воскресенье и предпраздничные дни - 15000₽", "Суббота и праздники - 25000₽"],
      check: { "in": "15:00", "out": "13:00" },
      add: ["Раннее заселение или поздний выезд оплачивается отдельно-700₽ час, при согласовании на кануне", "Баня оплачивается отдельно, за пять часов - 2000₽", "Постельное белье за отдельную плату 100 за один комплект на 1 человека, оно находится в доме и берёте сколько надо, на следующий день по факту расплачиваетесь", "Кухня полностью оборудована: посудомоечная машина, холодильник, плита, духовка, микроволновая печь, тостер и чайник. Посуда есть до 25 человек."]
    },
    {
      id: 3, name: "Малый", sq: "105 м²", count: "10", sleeper: "10", address: "Тюмень, улица Николая Егорова 19",
      imgs: ["./pictures/small/1.jpeg", "./pictures/small/2.jpeg", "./pictures/small/3.jpeg", "./pictures/small/4.jpeg", "./pictures/small/5.jpeg", "./pictures/small/6.jpeg", "./pictures/small/7.jpeg", "./pictures/small/8.jpeg", "./pictures/small/9.jpeg", "./pictures/small/10.jpeg", "./pictures/small/11.jpeg", "./pictures/small/12.jpeg", "./pictures/small/13.jpeg", "./pictures/small/14.jpeg", "./pictures/small/15.jpeg", "./pictures/small/16.jpeg"],
      description: ["На кухне варочная панель и духовка, стиральная машина, холодильник, микроволновая печь, тостер, чайник, имеется посуда.", "Баня, сан. узел, душевая кабина.", "На 2-м этаже комфортабельные две отдельные спальни (общее количество спальных мест в доме рассчитано на 10 взрослых человек), два телевизора, cпутниковое цифровое телевидение.", "Акустическая система (подключается через аукс, блютуз, флешку)", "Необходимые мелочи есть: туалетная бумага, губки, средство для мытья посуды,мыло, полотенца и др."],
      price: ["6000₽", "Обеспечительный депозит: 3 000 руб.", "Понедельник-четверг - 6000", "Пятница, воскресенье и предпраздничные дни - 8000₽", "Суббота и праздники - 10000"],
      check: { "in": "14:00", "out": "12:00" },
      add: ["Раннее заселение или поздний выезд оплачивается отдельно-500₽ час, при согласовании на кануне.", "Баня в доме и оплачивается отдельно - 1000 руб.", "Бронируя наш дом Вы автоматически даёте своё Согласие на соблюдение закона о тишине в Тюменской области", "Салюты запрещены", "С животными в дом заезжать запрещено"]
    },
    {
      id: 4, name: "Прованс", sq: "130 м²", count: "18", sleeper: "18", address: "Тюмень, улица Николая Егорова 17",
      imgs: ["./pictures/violet/1.jpeg", "./pictures/violet/2.jpeg", "./pictures/violet/3.jpeg", "./pictures/violet/4.jpeg", "./pictures/violet/5.jpeg", "./pictures/violet/6.jpeg", "./pictures/violet/7.jpeg", "./pictures/violet/8.jpeg", "./pictures/violet/9.jpeg", "./pictures/violet/10.jpeg", "./pictures/violet/11.jpeg", "./pictures/violet/12.jpeg", "./pictures/violet/13.jpeg", "./pictures/violet/14.jpeg", "./pictures/violet/15.jpeg", "./pictures/violet/16.jpeg"],
      description: [],
      price: ["7000₽", "Обеспечительный депозит: 3 000 руб.", "Понедельник-четверг - 7000", "Пятница, воскресенье и предпраздничные дни - 10000₽", "Суббота и праздники - 12000"],
      check: { "in": "14:00", "out": "12:00" },
      add: ["Баня и постельное бельё оплачивается отдельно", "Баня - 1000 рублей за три часа, бельё - 100 рублей за комплект на 1 человека."]
    }
  ];
  mainImgs = [
    { id: 1, "img": "./pictures/carousel2.jpeg", text: "smth text" },
    { id: 2, "img": "./pictures/carousel3.jpeg", text: "smth text" },
    { id: 3, "img": "./pictures/carousel4.jpeg", text: "smth text" }
  ];
  about = [
    { id: 1, desc: "панорамные окна", img: "./pictures/odds/window.png" },
    { id: 2, desc: "зона спа", img: "./pictures/odds/sauna.png" },
    { id: 3, desc: "кухня с современной техникой", img: "./pictures/odds/kitchen.png" },
    { id: 4, desc: "терраса", img: "./pictures/odds/terrace.png" },
    { id: 5, desc: "мангальная зона", img: "./pictures/odds/brazier.png" },
    { id: 6, desc: "близость к аквапарку и горячим источникам", img: "./pictures/odds/thermae.png" },
  ];

  constructor() {
    makeAutoObservable(this)
  }
}

export default new CottageStore();