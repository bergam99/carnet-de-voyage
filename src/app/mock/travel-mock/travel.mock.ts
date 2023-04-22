export interface Travel {
  id: number;
  country: string;
  city: string;

  // date
  dateForDeparture: string;
  returnDate: string;

  principalImage: string;
  secondaryImageDisplay: string[];
  textAboutTheTrip: string;
  resume: string;
  isMainArticle: boolean;
  // avis
  positifPoint: string[];
  negativePoint: string[];
  BoardOfAdvice: string[];
}

export const TRAVEL: Travel[] = [
  {
    id: 1,
    country: 'Albanie',
    city: 'Tirana',
    dateForDeparture: '14.04.22',
    returnDate: '17.05.22',
    principalImage: '/assets/img/Albanie.png',
    secondaryImageDisplay: [
      '/assets/secondaryImge/1-1.png',
      '/assets/secondaryImge/1-2.png',
      '/assets/secondaryImge/1-3.png',
      '/assets/secondaryImge/1-4.png',
      '/assets/secondaryImge/1-5.png',
      '/assets/secondaryImge/1-6.JPG',
      '/assets/secondaryImge/1-lac.png',
    ],
    textAboutTheTrip:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor massa id sem iaculis, et rutrum ligula ornare. Etiam malesuada diam justo, nec sagittis ligula rhoncus sit amet. Fusce ac viverra nisi. Integer nibh urna, posuere euismod dolor ac Donec commodo pellentesque sapien eu interdum. Vestibulum neque nulla, mattis eget hendrerit nec, tempus pharetra est. Nulla facilisi. Curabitur elit lorem, rhoncus quis quam et, imperdiet euismod mi. Morbi eget elit ac velit porttitor sodales. Nulla scelerisque risus ex, a faucibus est eleifend sed. Aliquam ac facilisis lorem, ut ornare velit.dignissim metus. Aliquam dignissim lorem id nisi aliquet, a sodales ipsum dignissim',
    resume:
      'L’Albanie est un pays que nous avons adoré visiter, en grande partie grâce à l’accueil chaleureux des Albanais, mais pas seulement ! Nous avons découvert une culture fièrement préservée, une variété de paysages captivante et de nombreux coins tranquilles, y compris au mois de juillet. Seule la côte adriatique sature de touristes l’été. Notre conseil, si vous venez à cette saison, serait alors de s’éloigner de la mer et de privilégier les villages et les montagnes dans le reste du pays, où se concentre à notre avis tout le charme de l’Albanie.',
    isMainArticle: true,
    positifPoint: [''],
    negativePoint: ['2'],
    BoardOfAdvice: ['3'],
  },
  {
    id: 2,
    country: 'Slovenie',
    city: 'slovenyaya',
    dateForDeparture: '12.04.22',
    returnDate: '20.05.22',
    principalImage: '/assets/img/Slovenie.png',
    secondaryImageDisplay: [
      '/assets/secondaryImge/2-montagne.png',
      '/assets/secondaryImge/2-1.png',
      '/assets/secondaryImge/2-2.png',
      '/assets/secondaryImge/2-3.png',
      '/assets/secondaryImge/2-4.png',
      '/assets/secondaryImge/2-5.png',
      '/assets/secondaryImge/2-6.PNG',
      '/assets/secondaryImge/2-7.JPG',
      '/assets/secondaryImge/2-8.JPG',
    ],
    textAboutTheTrip:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor massa id sem iaculis, et rutrum ligula ornare. Etiam malesuada diam justo, nec sagittis ligula rhoncus sit amet. Fusce ac viverra nisi. Integer nibh urna, posuere euismod dolor ac Donec commodo pellentesque sapien eu interdum. Vestibulum neque nulla, mattis eget hendrerit nec, tempus pharetra est. Nulla facilisi. Curabitur elit lorem, rhoncus quis quam et, imperdiet euismod mi. Morbi eget elit ac velit porttitor sodales. Nulla scelerisque risus ex, a faucibus est eleifend sed. Aliquam ac facilisis lorem, ut ornare velit.dignissim metus. Aliquam dignissim lorem id nisi aliquet, a sodales ipsum dignissim',
    resume:
      'Slovenie est un pays que nous avons adoré visiter, en grande partie grâce à l’accueil chaleureux des Albanais, mais pas seulement ! Nous avons découvert une culture fièrement préservée, une variété de paysages captivante et de nombreux coins tranquilles, y compris au mois de juillet. Seule la côte adriatique sature de touristes l’été. Notre conseil, si vous venez à cette saison, serait alors de s’éloigner de la mer et de privilégier les villages et les montagnes dans le reste du pays, où se concentre à notre avis tout le charme de l’Albanie.',
    isMainArticle: false,
    positifPoint: ['Albanie good'],
    negativePoint: ['bad'],
    BoardOfAdvice: ['i recommand this'],
  },
  {
    id: 3,
    country: 'Guatemala',
    city: 'Monterrico',
    dateForDeparture: '14.04.22',
    returnDate: '27.05.22',
    principalImage: '/assets/img/Guatemala.png',
    secondaryImageDisplay: [
      '/assets/secondaryImge/3-1.png',
      '/assets/secondaryImge/3-2.png',
      '/assets/secondaryImge/3-3.JPG',
      '/assets/secondaryImge/3-sud.png',
    ],
    textAboutTheTrip:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor massa id sem iaculis, et rutrum ligula ornare. Etiam malesuada diam justo, nec sagittis ligula rhoncus sit amet. Fusce ac viverra nisi. Integer nibh urna, posuere euismod dolor ac Donec commodo pellentesque sapien eu interdum. Vestibulum neque nulla, mattis eget hendrerit nec, tempus pharetra est. Nulla facilisi. Curabitur elit lorem, rhoncus quis quam et, imperdiet euismod mi. Morbi eget elit ac velit porttitor sodales. Nulla scelerisque risus ex, a faucibus est eleifend sed. Aliquam ac facilisis lorem, ut ornare velit.dignissim metus. Aliquam dignissim lorem id nisi aliquet, a sodales ipsum dignissim',
    resume:
      'Guatemala est un pays que nous avons adoré visiter, en grande partie grâce à l’accueil chaleureux des Albanais, mais pas seulement ! Nous avons découvert une culture fièrement préservée, une variété de paysages captivante et de nombreux coins tranquilles, y compris au mois de juillet. Seule la côte adriatique sature de touristes l’été. Notre conseil, si vous venez à cette saison, serait alors de s’éloigner de la mer et de privilégier les villages et les montagnes dans le reste du pays, où se concentre à notre avis tout le charme de l’Albanie.',
    isMainArticle: false,
    positifPoint: ['Albanie good'],
    negativePoint: ['bad'],
    BoardOfAdvice: ['i recommand this'],
  },
  {
    id: 4,
    country: 'Greece',
    city: 'Santorini',
    dateForDeparture: '15.04.22',
    returnDate: '11.05.22',
    principalImage: '/assets/img/Greece.png',
    secondaryImageDisplay: [
      '/assets/secondaryImge/4-1.png',
      '/assets/secondaryImge/4-2.JPG',
      '/assets/secondaryImge/4-3.JPG',
      '/assets/secondaryImge/4-4.png',
      '/assets/secondaryImge/4-swiss.png',
    ],
    textAboutTheTrip:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor massa id sem iaculis, et rutrum ligula ornare. Etiam malesuada diam justo, nec sagittis ligula rhoncus sit amet. Fusce ac viverra nisi. Integer nibh urna, posuere euismod dolor ac Donec commodo pellentesque sapien eu interdum. Vestibulum neque nulla, mattis eget hendrerit nec, tempus pharetra est. Nulla facilisi. Curabitur elit lorem, rhoncus quis quam et, imperdiet euismod mi. Morbi eget elit ac velit porttitor sodales. Nulla scelerisque risus ex, a faucibus est eleifend sed. Aliquam ac facilisis lorem, ut ornare velit.dignissim metus. Aliquam dignissim lorem id nisi aliquet, a sodales ipsum dignissim',
    resume:
      'Greece est un pays que nous avons adoré visiter, en grande partie grâce à l’accueil chaleureux des Albanais, mais pas seulement ! Nous avons découvert une culture fièrement préservée, une variété de paysages captivante et de nombreux coins tranquilles, y compris au mois de juillet. Seule la côte adriatique sature de touristes l’été. Notre conseil, si vous venez à cette saison, serait alors de s’éloigner de la mer et de privilégier les villages et les montagnes dans le reste du pays, où se concentre à notre avis tout le charme de l’Albanie.',
    isMainArticle: false,
    positifPoint: ['Albanie good'],
    negativePoint: ['bad'],
    BoardOfAdvice: ['i recommand this'],
  },
  {
    id: 5,
    country: 'Tunisie',
    city: 'El Jem',
    dateForDeparture: '20.09.22',
    returnDate: '20.10.22',
    principalImage: '/assets/img/Tunisie.png',
    secondaryImageDisplay: [
      '/assets/secondaryImge/5-1.png',
      '/assets/secondaryImge/5-2.png',
      '/assets/secondaryImge/5-3.JPG',
      '/assets/secondaryImge/5-4.JPG',
      '/assets/secondaryImge/5-5.JPG',
      '/assets/secondaryImge/5-6.JPG',
      '/assets/secondaryImge/5-7.JPG',
      '/assets/secondaryImge/5-8.JPG',
      '/assets/secondaryImge/5-9.JPG',
      '/assets/secondaryImge/5-ville.png',
    ],
    textAboutTheTrip:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor massa id sem iaculis, et rutrum ligula ornare. Etiam malesuada diam justo, nec sagittis ligula rhoncus sit amet. Fusce ac viverra nisi. Integer nibh urna, posuere euismod dolor ac Donec commodo pellentesque sapien eu interdum. Vestibulum neque nulla, mattis eget hendrerit nec, tempus pharetra est. Nulla facilisi. Curabitur elit lorem, rhoncus quis quam et, imperdiet euismod mi. Morbi eget elit ac velit porttitor sodales. Nulla scelerisque risus ex, a faucibus est eleifend sed. Aliquam ac facilisis lorem, ut ornare velit.dignissim metus. Aliquam dignissim lorem id nisi aliquet, a sodales ipsum dignissim',
    resume:
      'Tunisie est un pays que nous avons adoré visiter, en grande partie grâce à l’accueil chaleureux des Albanais, mais pas seulement ! Nous avons découvert une culture fièrement préservée, une variété de paysages captivante et de nombreux coins tranquilles, y compris au mois de juillet. Seule la côte adriatique sature de touristes l’été. Notre conseil, si vous venez à cette saison, serait alors de s’éloigner de la mer et de privilégier les villages et les montagnes dans le reste du pays, où se concentre à notre avis tout le charme de l’Albanie.',
    isMainArticle: false,
    positifPoint: ['Albanie good'],
    negativePoint: ['bad'],
    BoardOfAdvice: ['i recommand this'],
  },
];
