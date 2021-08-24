import NewCliet from "../../assets/images/statusFilter/NewClient.svg";
import BronzeClient from "../../assets/images/statusFilter/BronzeClient.svg";
import GoldClient from "../../assets/images/statusFilter/GoldClient.svg";
import RybyClient from "../../assets/images/statusFilter/RybyClient.svg";
import SapfirClient from "../../assets/images/statusFilter/SapfirClient.svg";
import BrilClient from "../../assets/images/statusFilter/BrilClient.svg";

const data = [

  {
    "id": 2,
    "trainings": [
      {
        "id": 2,
        "client": {
          "id": 10,
          "parents": [],
          "club_card": {
            "id": 1,
            "train_balance": 0,
            "valid_from": null,
            "valid_until": null,
            "personal_discount": 0,
            "level":   {
              "id": 2,
              "name": "Бронзовый",
              "img":BronzeClient
            },
            "rate":  {
              "id": 2,
              "name": "SMART",
              "train_quantity": 12,
              "days_duration": 56,
              "is_personal": 0,
              "price": "4700.00"
            },
          },
          "train_group": null,
          "first_name": "Иван",
          "middle_name": "Олегович",
          "last_name": "ДербенченкоBS",
          "date_of_birth": "1989-10-21",
          "address": "ул.Героя Яцкова д.16 кор.5 кв.18",
          "in_archive": false,
          "phone_number": "89996569885",
          "email": "",
          "is_adult": true
        },
        "call": true,
        "is_visited": false,
        "lesson": 2
      },
      {
        "id": 10,
        "client": {
          "id": 19,
          "parents": [],
          "club_card": {
            "id": 7,
            "train_balance": 0,
            "valid_from": null,
            "valid_until": null,
            "personal_discount": 0,
            "level": null,
            "rate": null
          },
          "train_group": null,
          "first_name": "Николай",
          "middle_name": "Николаевич",
          "last_name": "Чижов",
          "date_of_birth": "1975-12-20",
          "address": "ул.Закрытая д.3 кор.1 кв.2",
          "in_archive": false,
          "phone_number": "88888888888",
          "email": "",
          "is_adult": true
        },
        "call": false,
        "is_visited": false,
        "lesson": 2
      }
    ],
    "trainer": {
      "id": 2,
      "first_name": "Владимир",
      "middle_name": "Владимирович",
      "last_name": "Кобялко",
      "phone_number": "89896569885"
    },
    "group": {
      "id": 2,
      "name": "Маленькие Самураи"
    },
    "date": "2021-07-18T18:30:00+03:00"
  },


  {
    "id": 4,
    "trainings": [
      {
        "id": 4,
        "client": {
          "id": 16,
          "parents": [],
          "club_card": {
            "id": 4,
            "train_balance": 0,
            "valid_from": null,
            "valid_until": null,
            "personal_discount": 0,
            "level": null,
            "rate": null
          },
          "train_group": null,
          "first_name": "Виктор",
          "middle_name": "Петрович",
          "last_name": "Солнцев",
          "date_of_birth": "1950-10-21",
          "address": "ул.Просторная д.2 кор.3",
          "in_archive": false,
          "phone_number": "7 (888) 888-88-88",
          "email": "",
          "is_adult": true
        },
        "call": false,
        "is_visited": false,
        "lesson": 4
      },
      {
        "id": 12,
        "client": {
          "id": 17,
          "parents": [],
          "club_card": {
            "id": 5,
            "train_balance": 0,
            "valid_from": null,
            "valid_until": null,
            "personal_discount": 0,
            "level": null,
            "rate": null
          },
          "train_group": null,
          "first_name": "Михаил",
          "middle_name": "Федорович",
          "last_name": "Пушкин",
          "date_of_birth": "1930-10-21",
          "address": "ул.Пролетарская д.5",
          "in_archive": false,
          "phone_number": "7 (888) 888-88-88",
          "email": "",
          "is_adult": true
        },
        "call": false,
        "is_visited": false,
        "lesson": 4
      }
    ],
    "trainer": {
      "id": 4,
      "first_name": "Диана",
      "middle_name": "Александровна",
      "last_name": "Корицкая",
      "phone_number": "89863269885"
    },
    "group": {
      "id": 4,
      "name": "Маленькие воины"
    },
    "date": "2021-07-18T16:30:00+03:00"
  },

  {
    "id": 5,
    "trainings": [
      {
        "id": 5,
        "client": {
          "id": 17,
          "parents": [],
          "club_card": {
            "id": 5,
            "train_balance": 0,
            "valid_from": null,
            "valid_until": null,
            "personal_discount": 0,
            "level": null,
            "rate": null
          },
          "train_group": null,
          "first_name": "Михаил",
          "middle_name": "Федорович",
          "last_name": "Пушкин",
          "date_of_birth": "1930-10-21",
          "address": "ул.Пролетарская д.5",
          "in_archive": false,
          "phone_number": "7 (888) 888-88-88",
          "email": "",
          "is_adult": true
        },
        "call": true,
        "is_visited": false,
        "lesson": 5
      },
      {
        "id": 13,
        "client": {
          "id": 16,
          "parents": [],
          "club_card": {
            "id": 4,
            "train_balance": 0,
            "valid_from": null,
            "valid_until": null,
            "personal_discount": 0,
            "level": null,
            "rate": null
          },
          "train_group": null,
          "first_name": "Виктор",
          "middle_name": "Петрович",
          "last_name": "Солнцев",
          "date_of_birth": "1950-10-21",
          "address": "ул.Просторная д.2 кор.3",
          "in_archive": false,
          "phone_number": "7 (888) 888-88-88",
          "email": "",
          "is_adult": true
        },
        "call": false,
        "is_visited": false,
        "lesson": 5
      }
    ],
    "trainer": {
      "id": 1,
      "first_name": "Станислав",
      "middle_name": "Робертович",
      "last_name": "Плиев",
      "phone_number": "89996569885"
    },
    "group": {
      "id": 1,
      "name": "Бразильское Джиу-Джитсу"
    },
    "date": "2021-07-19T19:00:00+03:00"
  },
  {
    "id": 6,
    "trainings": [
      {
        "id": 6,
        "client": {
          "id": 18,
          "parents": [
            {
              "id": 3,
              "first_name": "Никанор",
              "last_name": "Спасов",
              "middle_name": "Николаевич",
              "phone_number": "+7 (888) 888-88-88"
            },
            {
              "id": 4,
              "first_name": "Пикадилья",
              "last_name": "Спасова",
              "middle_name": "Рафаэловна",
              "phone_number": "+7 (999) 656-97-72"
            }
          ],
          "club_card": {
            "id": 6,
            "train_balance": 0,
            "valid_from": null,
            "valid_until": null,
            "personal_discount": 0,
            "level": null,
            "rate": null
          },
          "train_group": null,
          "first_name": "Николай",
          "middle_name": "Николаевич",
          "last_name": "Спасов",
          "date_of_birth": "2020-10-21",
          "address": "ул.Дальняя д.3",
          "in_archive": false,
          "phone_number": "",
          "email": "",
          "is_adult": false
        },
        "call": false,
        "is_visited": false,
        "lesson": 6
      },
      {
        "id": 14,
        "client": {
          "id": 15,
          "parents": [],
          "club_card": {
            "id": 3,
            "train_balance": 0,
            "valid_from": null,
            "valid_until": null,
            "personal_discount": 0,
            "level": null,
            "rate": null
          },
          "train_group": null,
          "first_name": "Стас",
          "middle_name": "Стасович",
          "last_name": "Феаксистов",
          "date_of_birth": "1985-10-21",
          "address": "ул.Улица д.23 кор.23 кв.23",
          "in_archive": false,
          "phone_number": "7 (888) 888-88-88",
          "email": "",
          "is_adult": true
        },
        "call": false,
        "is_visited": false,
        "lesson": 6
      }
    ],
    "trainer": {
      "id": 2,
      "first_name": "Владимир",
      "middle_name": "Владимирович",
      "last_name": "Кобялко",
      "phone_number": "89896569885"
    },
    "group": {
      "id": 2,
      "name": "Маленькие Самураи"
    },
    "date": "2021-07-19T18:00:00+03:00"
  },
  {
    "id": 7,
    "trainings": [
      {
        "id": 7,
        "client": {
          "id": 19,
          "parents": [],
          "club_card": {
            "id": 7,
            "train_balance": 0,
            "valid_from": null,
            "valid_until": null,
            "personal_discount": 0,
            "level": null,
            "rate": null
          },
          "train_group": null,
          "first_name": "Николай",
          "middle_name": "Николаевич",
          "last_name": "Чижов",
          "date_of_birth": "1975-12-20",
          "address": "ул.Закрытая д.3 кор.1 кв.2",
          "in_archive": false,
          "phone_number": "88888888888",
          "email": "",
          "is_adult": true
        },
        "call": false,
        "is_visited": false,
        "lesson": 7
      },
      {
        "id": 15,
        "client": {
          "id": 10,
          "parents": [],
          "club_card": {
            "id": 1,
            "train_balance": 0,
            "valid_from": null,
            "valid_until": null,
            "personal_discount": 0,
            "level": null,
            "rate": null
          },
          "train_group": null,
          "first_name": "Иван",
          "middle_name": "Олегович",
          "last_name": "ДербенченкоBS",
          "date_of_birth": "1989-07-22",
          "address": "ул.Героя Яцкова д.16 кор.5 кв.18",
          "in_archive": false,
          "phone_number": "89996569885",
          "email": "",
          "is_adult": true
        },
        "call": false,
        "is_visited": false,
        "lesson": 7
      }
    ],
    "trainer": {
      "id": 3,
      "first_name": "Анатолий",
      "middle_name": "Петрович",
      "last_name": "Бураков",
      "phone_number": "89896569885"
    },
    "group": {
      "id": 3,
      "name": "Самбо/Дзюдо"
    },
    "date": "2021-07-19T17:00:00+03:00"
  },
  {
    "id": 8,
    "trainings": [
      {
        "id": 8,
        "client": {
          "id": 20,
          "parents": [
            {
              "id": 5,
              "first_name": "Самвел",
              "last_name": "Чижов",
              "middle_name": "Мамбаивич",
              "phone_number": "+7 (888) 888-88-88"
            }
          ],
          "club_card": {
            "id": 8,
            "train_balance": 0,
            "valid_from": null,
            "valid_until": null,
            "personal_discount": 0,
            "level": null,
            "rate": null
          },
          "train_group": null,
          "first_name": "Анатолий",
          "middle_name": "Чириков",
          "last_name": "Чумаков",
          "date_of_birth": "2018-10-21",
          "address": "ул.Черная д.3",
          "in_archive": false,
          "phone_number": "",
          "email": "",
          "is_adult": false
        },
        "call": false,
        "is_visited": false,
        "lesson": 8
      },
      {
        "id": 16,
        "client": {
          "id": 14,
          "parents": [
            {
              "id": 1,
              "first_name": "Станислав",
              "last_name": "Плиев",
              "middle_name": "Робертович",
              "phone_number": "+7 (999) 665-46-55"
            },
            {
              "id": 2,
              "first_name": "Маргарита",
              "last_name": "Фокина",
              "middle_name": "Павловна",
              "phone_number": "+7 (654) 646-46-46"
            }
          ],
          "club_card": {
            "id": 2,
            "train_balance": 0,
            "valid_from": null,
            "valid_until": null,
            "personal_discount": 0,
            "level": null,
            "rate": null
          },
          "train_group": null,
          "first_name": "Станислав",
          "middle_name": "Робертович",
          "last_name": "ПлиевS",
          "date_of_birth": "2021-12-21",
          "address": "some address",
          "in_archive": false,
          "phone_number": "",
          "email": "",
          "is_adult": false
        },
        "call": false,
        "is_visited": false,
        "lesson": 8
      },
      {
        "id": 17,
        "client": {
          "id": 14,
          "parents": [
            {
              "id": 1,
              "first_name": "Станислав",
              "last_name": "Плиев",
              "middle_name": "Робертович",
              "phone_number": "+7 (999) 665-46-55"
            },
            {
              "id": 2,
              "first_name": "Маргарита",
              "last_name": "Фокина",
              "middle_name": "Павловна",
              "phone_number": "+7 (654) 646-46-46"
            }
          ],
          "club_card": {
            "id": 2,
            "train_balance": 0,
            "valid_from": null,
            "valid_until": null,
            "personal_discount": 0,
            "level": null,
            "rate": null
          },
          "train_group": null,
          "first_name": "Станислав",
          "middle_name": "Робертович",
          "last_name": "ПлиевS",
          "date_of_birth": "2021-12-21",
          "address": "some address",
          "in_archive": false,
          "phone_number": "",
          "email": "",
          "is_adult": false
        },
        "call": true,
        "is_visited": false,
        "lesson": 8
      },
      {
        "id": 19,
        "client": {
          "id": 21,
          "parents": [],
          "club_card": {
            "id": 9,
            "train_balance": 0,
            "valid_from": null,
            "valid_until": null,
            "personal_discount": 0,
            "level": null,
            "rate": null
          },
          "train_group": null,
          "first_name": "Теодор",
          "middle_name": "Пучкий",
          "last_name": "Адалай",
          "date_of_birth": "1300-10-21",
          "address": "ул.Не важно д.1 кор.1 кв.1",
          "in_archive": false,
          "phone_number": "89999999999",
          "email": "",
          "is_adult": true
        },
        "call": false,
        "is_visited": false,
        "lesson": 8
      }
    ],
    "trainer": {
      "id": 4,
      "first_name": "Диана",
      "middle_name": "Александровна",
      "last_name": "Корицкая",
      "phone_number": "89863269885"
    },
    "group": {
      "id": 4,
      "name": "Маленькие воины"
    },
    "date": "2021-07-19T16:00:00+03:00"
  },
  {
    "id": 3,
    "trainings": [
      {
        "id": 3,
        "client": {
          "id": 15,
          "parents": [],
          "club_card": {
            "id": 3,
            "train_balance": 0,
            "valid_from": null,
            "valid_until": null,
            "personal_discount": 0,
            "level": null,
            "rate": null
          },
          "train_group": null,
          "first_name": "Стас",
          "middle_name": "Стасович",
          "last_name": "Феаксистов",
          "date_of_birth": "1985-10-21",
          "address": "ул.Улица д.23 кор.23 кв.23",
          "in_archive": false,
          "phone_number": "7 (888) 888-88-88",
          "email": "",
          "is_adult": true
        },
        "call": false,
        "is_visited": false,
        "lesson": 3
      },
      {
        "id": 11,
        "client": {
          "id": 18,
          "parents": [
            {
              "id": 3,
              "first_name": "Никанор",
              "last_name": "Спасов",
              "middle_name": "Николаевич",
              "phone_number": "+7 (888) 888-88-88"
            },
            {
              "id": 4,
              "first_name": "Пикадилья",
              "last_name": "Спасова",
              "middle_name": "Рафаэловна",
              "phone_number": "+7 (999) 656-97-72"
            }
          ],
          "club_card": {
            "id": 6,
            "train_balance": 0,
            "valid_from": null,
            "valid_until": null,
            "personal_discount": 0,
            "level": null,
            "rate": null
          },
          "train_group": null,
          "first_name": "Николай",
          "middle_name": "Николаевич",
          "last_name": "Спасов",
          "date_of_birth": "2020-10-21",
          "address": "ул.Дальняя д.3",
          "in_archive": false,
          "phone_number": "",
          "email": "",
          "is_adult": false
        },
        "call": false,
        "is_visited": false,
        "lesson": 3
      }
    ],
    "trainer": {
      "id": 3,
      "first_name": "Анатолий",
      "middle_name": "Петрович",
      "last_name": "Бураков",
      "phone_number": "89896569885"
    },
    "group": {
      "id": 3,
      "name": "Самбо/Дзюдо"
    },
    "date": "2021-07-18T17:30:00+03:00"
  },
  {
    "id": 1,
    "trainings": [
      {
        "id": 1,
        "client": {
          "id": 14,
          "parents": [
            {
              "id": 1,
              "first_name": "Станислав",
              "last_name": "Плиев",
              "middle_name": "Робертович",
              "phone_number": "+7 (999) 665-46-55"
            },
            {
              "id": 2,
              "first_name": "Маргарита",
              "last_name": "Фокина",
              "middle_name": "Павловна",
              "phone_number": "+7 (654) 646-46-46"
            }
          ],
          "club_card": {
            "id": 2,
            "train_balance": 0,
            "valid_from": null,
            "valid_until": null,
            "personal_discount": 0,
            "level": null,
            "rate": null
          },
          "train_group": null,
          "first_name": "Станислав",
          "middle_name": "Робертович",
          "last_name": "ПлиевS",
          "date_of_birth": "2021-12-21",
          "address": "some address",
          "in_archive": false,
          "phone_number": "",
          "email": "",
          "is_adult": false
        },
        "call": false,
        "is_visited": false,
        "lesson": 1
      },
      {
        "id": 9,
        "client": {
          "id": 20,
          "parents": [
            {
              "id": 5,
              "first_name": "Самвел",
              "last_name": "Чижов",
              "middle_name": "Мамбаивич",
              "phone_number": "+7 (888) 888-88-88"
            }
          ],
          "club_card": {
            "id": 8,
            "train_balance": 0,
            "valid_from": null,
            "valid_until": null,
            "personal_discount": 0,
            "level": null,
            "rate": null
          },
          "train_group": null,
          "first_name": "Анатолий",
          "middle_name": "Чириков",
          "last_name": "Чумаков",
          "date_of_birth": "2018-10-21",
          "address": "ул.Черная д.3",
          "in_archive": false,
          "phone_number": "",
          "email": "",
          "is_adult": false
        },
        "call": false,
        "is_visited": false,
        "lesson": 1
      }
    ],
    "trainer": {
      "id": 1,
      "first_name": "Станислав",
      "middle_name": "Робертович",
      "last_name": "Плиев",
      "phone_number": "89996569885"
    },
    "group": {
      "id": 1,
      "name": "Бразильское Джиу-Джитсу"
    },
    "date": "2021-07-18T19:30:00+03:00"
  },
  {
    "id": 2,
    "trainings": [
      {
        "id": 2,
        "client": {
          "id": 10,
          "parents": [],
          "club_card": {
            "id": 1,
            "train_balance": 0,
            "valid_from": null,
            "valid_until": null,
            "personal_discount": 0,
            "level":   {
              "id": 2,
              "name": "Бронзовый",
              "img":BronzeClient
            },
            "rate":  {
              "id": 2,
              "name": "SMART",
              "train_quantity": 12,
              "days_duration": 56,
              "is_personal": 0,
              "price": "4700.00"
            },
          },
          "train_group": null,
          "first_name": "Иван",
          "middle_name": "Олегович",
          "last_name": "ДербенченкоBS",
          "date_of_birth": "1989-10-21",
          "address": "ул.Героя Яцкова д.16 кор.5 кв.18",
          "in_archive": false,
          "phone_number": "89996569885",
          "email": "",
          "is_adult": true
        },
        "call": true,
        "is_visited": false,
        "lesson": 2
      },
      {
        "id": 10,
        "client": {
          "id": 19,
          "parents": [],
          "club_card": {
            "id": 7,
            "train_balance": 0,
            "valid_from": null,
            "valid_until": null,
            "personal_discount": 0,
            "level": null,
            "rate": null
          },
          "train_group": null,
          "first_name": "Николай",
          "middle_name": "Николаевич",
          "last_name": "Чижов",
          "date_of_birth": "1975-12-20",
          "address": "ул.Закрытая д.3 кор.1 кв.2",
          "in_archive": false,
          "phone_number": "88888888888",
          "email": "",
          "is_adult": true
        },
        "call": false,
        "is_visited": false,
        "lesson": 2
      }
    ],
    "trainer": {
      "id": 2,
      "first_name": "Владимир",
      "middle_name": "Владимирович",
      "last_name": "Кобялко",
      "phone_number": "89896569885"
    },
    "group": {
      "id": 2,
      "name": "Маленькие Самураи"
    },
    "date": "2021-08-03T18:30:00+03:00"
  },


  {
    "id": 4,
    "trainings": [
      {
        "id": 4,
        "client": {
          "id": 16,
          "parents": [],
          "club_card": {
            "id": 4,
            "train_balance": 0,
            "valid_from": null,
            "valid_until": null,
            "personal_discount": 0,
            "level": null,
            "rate": null
          },
          "train_group": null,
          "first_name": "Виктор",
          "middle_name": "Петрович",
          "last_name": "Солнцев",
          "date_of_birth": "1950-10-21",
          "address": "ул.Просторная д.2 кор.3",
          "in_archive": false,
          "phone_number": "7 (888) 888-88-88",
          "email": "",
          "is_adult": true
        },
        "call": false,
        "is_visited": false,
        "lesson": 4
      },
      {
        "id": 12,
        "client": {
          "id": 17,
          "parents": [],
          "club_card": {
            "id": 5,
            "train_balance": 0,
            "valid_from": null,
            "valid_until": null,
            "personal_discount": 0,
            "level": null,
            "rate": null
          },
          "train_group": null,
          "first_name": "Михаил",
          "middle_name": "Федорович",
          "last_name": "Пушкин",
          "date_of_birth": "1930-10-21",
          "address": "ул.Пролетарская д.5",
          "in_archive": false,
          "phone_number": "7 (888) 888-88-88",
          "email": "",
          "is_adult": true
        },
        "call": false,
        "is_visited": false,
        "lesson": 4
      }
    ],
    "trainer": {
      "id": 4,
      "first_name": "Диана",
      "middle_name": "Александровна",
      "last_name": "Корицкая",
      "phone_number": "89863269885"
    },
    "group": {
      "id": 4,
      "name": "Маленькие воины"
    },
    "date": "2021-08-03T16:30:00+03:00"
  },

  {
    "id": 5,
    "trainings": [
      {
        "id": 5,
        "client": {
          "id": 17,
          "parents": [],
          "club_card": {
            "id": 5,
            "train_balance": 0,
            "valid_from": null,
            "valid_until": null,
            "personal_discount": 0,
            "level": null,
            "rate": null
          },
          "train_group": null,
          "first_name": "Михаил",
          "middle_name": "Федорович",
          "last_name": "Пушкин",
          "date_of_birth": "1930-10-21",
          "address": "ул.Пролетарская д.5",
          "in_archive": false,
          "phone_number": "7 (888) 888-88-88",
          "email": "",
          "is_adult": true
        },
        "call": true,
        "is_visited": false,
        "lesson": 5
      },
      {
        "id": 13,
        "client": {
          "id": 16,
          "parents": [],
          "club_card": {
            "id": 4,
            "train_balance": 0,
            "valid_from": null,
            "valid_until": null,
            "personal_discount": 0,
            "level": null,
            "rate": null
          },
          "train_group": null,
          "first_name": "Виктор",
          "middle_name": "Петрович",
          "last_name": "Солнцев",
          "date_of_birth": "1950-10-21",
          "address": "ул.Просторная д.2 кор.3",
          "in_archive": false,
          "phone_number": "7 (888) 888-88-88",
          "email": "",
          "is_adult": true
        },
        "call": false,
        "is_visited": false,
        "lesson": 5
      }
    ],
    "trainer": {
      "id": 1,
      "first_name": "Станислав",
      "middle_name": "Робертович",
      "last_name": "Плиев",
      "phone_number": "89996569885"
    },
    "group": {
      "id": 1,
      "name": "Бразильское Джиу-Джитсу"
    },
    "date": "2021-08-03T19:00:00+03:00"
  },
  {
    "id": 6,
    "trainings": [
      {
        "id": 6,
        "client": {
          "id": 18,
          "parents": [
            {
              "id": 3,
              "first_name": "Никанор",
              "last_name": "Спасов",
              "middle_name": "Николаевич",
              "phone_number": "+7 (888) 888-88-88"
            },
            {
              "id": 4,
              "first_name": "Пикадилья",
              "last_name": "Спасова",
              "middle_name": "Рафаэловна",
              "phone_number": "+7 (999) 656-97-72"
            }
          ],
          "club_card": {
            "id": 6,
            "train_balance": 0,
            "valid_from": null,
            "valid_until": null,
            "personal_discount": 0,
            "level": null,
            "rate": null
          },
          "train_group": null,
          "first_name": "Николай",
          "middle_name": "Николаевич",
          "last_name": "Спасов",
          "date_of_birth": "2020-10-21",
          "address": "ул.Дальняя д.3",
          "in_archive": false,
          "phone_number": "",
          "email": "",
          "is_adult": false
        },
        "call": false,
        "is_visited": false,
        "lesson": 6
      },
      {
        "id": 14,
        "client": {
          "id": 15,
          "parents": [],
          "club_card": {
            "id": 3,
            "train_balance": 0,
            "valid_from": null,
            "valid_until": null,
            "personal_discount": 0,
            "level": null,
            "rate": null
          },
          "train_group": null,
          "first_name": "Стас",
          "middle_name": "Стасович",
          "last_name": "Феаксистов",
          "date_of_birth": "1985-10-21",
          "address": "ул.Улица д.23 кор.23 кв.23",
          "in_archive": false,
          "phone_number": "7 (888) 888-88-88",
          "email": "",
          "is_adult": true
        },
        "call": false,
        "is_visited": false,
        "lesson": 6
      }
    ],
    "trainer": {
      "id": 2,
      "first_name": "Владимир",
      "middle_name": "Владимирович",
      "last_name": "Кобялко",
      "phone_number": "89896569885"
    },
    "group": {
      "id": 2,
      "name": "Маленькие Самураи"
    },
    "date": "2021-08-03T18:00:00+03:00"
  },
  {
    "id": 7,
    "trainings": [
      {
        "id": 7,
        "client": {
          "id": 19,
          "parents": [],
          "club_card": {
            "id": 7,
            "train_balance": 0,
            "valid_from": null,
            "valid_until": null,
            "personal_discount": 0,
            "level": null,
            "rate": null
          },
          "train_group": null,
          "first_name": "Николай",
          "middle_name": "Николаевич",
          "last_name": "Чижов",
          "date_of_birth": "1975-12-20",
          "address": "ул.Закрытая д.3 кор.1 кв.2",
          "in_archive": false,
          "phone_number": "88888888888",
          "email": "",
          "is_adult": true
        },
        "call": false,
        "is_visited": false,
        "lesson": 7
      },
      {
        "id": 15,
        "client": {
          "id": 10,
          "parents": [],
          "club_card": {
            "id": 1,
            "train_balance": 0,
            "valid_from": null,
            "valid_until": null,
            "personal_discount": 0,
            "level": null,
            "rate": null
          },
          "train_group": null,
          "first_name": "Иван",
          "middle_name": "Олегович",
          "last_name": "ДербенченкоBS",
          "date_of_birth": "1989-07-22",
          "address": "ул.Героя Яцкова д.16 кор.5 кв.18",
          "in_archive": false,
          "phone_number": "89996569885",
          "email": "",
          "is_adult": true
        },
        "call": false,
        "is_visited": false,
        "lesson": 7
      }
    ],
    "trainer": {
      "id": 3,
      "first_name": "Анатолий",
      "middle_name": "Петрович",
      "last_name": "Бураков",
      "phone_number": "89896569885"
    },
    "group": {
      "id": 3,
      "name": "Самбо/Дзюдо"
    },
    "date": "2021-08-03T17:00:00+03:00"
  },
  {
    "id": 8,
    "trainings": [
      {
        "id": 8,
        "client": {
          "id": 20,
          "parents": [
            {
              "id": 5,
              "first_name": "Самвел",
              "last_name": "Чижов",
              "middle_name": "Мамбаивич",
              "phone_number": "+7 (888) 888-88-88"
            }
          ],
          "club_card": {
            "id": 8,
            "train_balance": 0,
            "valid_from": null,
            "valid_until": null,
            "personal_discount": 0,
            "level": null,
            "rate": null
          },
          "train_group": null,
          "first_name": "Анатолий",
          "middle_name": "Чириков",
          "last_name": "Чумаков",
          "date_of_birth": "2018-10-21",
          "address": "ул.Черная д.3",
          "in_archive": false,
          "phone_number": "",
          "email": "",
          "is_adult": false
        },
        "call": false,
        "is_visited": false,
        "lesson": 8
      },
      {
        "id": 16,
        "client": {
          "id": 14,
          "parents": [
            {
              "id": 1,
              "first_name": "Станислав",
              "last_name": "Плиев",
              "middle_name": "Робертович",
              "phone_number": "+7 (999) 665-46-55"
            },
            {
              "id": 2,
              "first_name": "Маргарита",
              "last_name": "Фокина",
              "middle_name": "Павловна",
              "phone_number": "+7 (654) 646-46-46"
            }
          ],
          "club_card": {
            "id": 2,
            "train_balance": 0,
            "valid_from": null,
            "valid_until": null,
            "personal_discount": 0,
            "level": null,
            "rate": null
          },
          "train_group": null,
          "first_name": "Станислав",
          "middle_name": "Робертович",
          "last_name": "ПлиевS",
          "date_of_birth": "2021-12-21",
          "address": "some address",
          "in_archive": false,
          "phone_number": "",
          "email": "",
          "is_adult": false
        },
        "call": false,
        "is_visited": false,
        "lesson": 8
      },
      {
        "id": 17,
        "client": {
          "id": 14,
          "parents": [
            {
              "id": 1,
              "first_name": "Станислав",
              "last_name": "Плиев",
              "middle_name": "Робертович",
              "phone_number": "+7 (999) 665-46-55"
            },
            {
              "id": 2,
              "first_name": "Маргарита",
              "last_name": "Фокина",
              "middle_name": "Павловна",
              "phone_number": "+7 (654) 646-46-46"
            }
          ],
          "club_card": {
            "id": 2,
            "train_balance": 0,
            "valid_from": null,
            "valid_until": null,
            "personal_discount": 0,
            "level": null,
            "rate": null
          },
          "train_group": null,
          "first_name": "Станислав",
          "middle_name": "Робертович",
          "last_name": "ПлиевS",
          "date_of_birth": "2021-12-21",
          "address": "some address",
          "in_archive": false,
          "phone_number": "",
          "email": "",
          "is_adult": false
        },
        "call": true,
        "is_visited": false,
        "lesson": 8
      },
      {
        "id": 19,
        "client": {
          "id": 21,
          "parents": [],
          "club_card": {
            "id": 9,
            "train_balance": 0,
            "valid_from": null,
            "valid_until": null,
            "personal_discount": 0,
            "level": null,
            "rate": null
          },
          "train_group": null,
          "first_name": "Теодор",
          "middle_name": "Пучкий",
          "last_name": "Адалай",
          "date_of_birth": "1300-10-21",
          "address": "ул.Не важно д.1 кор.1 кв.1",
          "in_archive": false,
          "phone_number": "89999999999",
          "email": "",
          "is_adult": true
        },
        "call": false,
        "is_visited": false,
        "lesson": 8
      }
    ],
    "trainer": {
      "id": 4,
      "first_name": "Диана",
      "middle_name": "Александровна",
      "last_name": "Корицкая",
      "phone_number": "89863269885"
    },
    "group": {
      "id": 4,
      "name": "Маленькие воины"
    },
    "date": "2021-08-03T16:00:00+03:00"
  },
  {
    "id": 3,
    "trainings": [
      {
        "id": 3,
        "client": {
          "id": 15,
          "parents": [],
          "club_card": {
            "id": 3,
            "train_balance": 0,
            "valid_from": null,
            "valid_until": null,
            "personal_discount": 0,
            "level": null,
            "rate": null
          },
          "train_group": null,
          "first_name": "Стас",
          "middle_name": "Стасович",
          "last_name": "Феаксистов",
          "date_of_birth": "1985-10-21",
          "address": "ул.Улица д.23 кор.23 кв.23",
          "in_archive": false,
          "phone_number": "7 (888) 888-88-88",
          "email": "",
          "is_adult": true
        },
        "call": false,
        "is_visited": false,
        "lesson": 3
      },
      {
        "id": 11,
        "client": {
          "id": 18,
          "parents": [
            {
              "id": 3,
              "first_name": "Никанор",
              "last_name": "Спасов",
              "middle_name": "Николаевич",
              "phone_number": "+7 (888) 888-88-88"
            },
            {
              "id": 4,
              "first_name": "Пикадилья",
              "last_name": "Спасова",
              "middle_name": "Рафаэловна",
              "phone_number": "+7 (999) 656-97-72"
            }
          ],
          "club_card": {
            "id": 6,
            "train_balance": 0,
            "valid_from": null,
            "valid_until": null,
            "personal_discount": 0,
            "level": null,
            "rate": null
          },
          "train_group": null,
          "first_name": "Николай",
          "middle_name": "Николаевич",
          "last_name": "Спасов",
          "date_of_birth": "2020-10-21",
          "address": "ул.Дальняя д.3",
          "in_archive": false,
          "phone_number": "",
          "email": "",
          "is_adult": false
        },
        "call": false,
        "is_visited": false,
        "lesson": 3
      }
    ],
    "trainer": {
      "id": 3,
      "first_name": "Анатолий",
      "middle_name": "Петрович",
      "last_name": "Бураков",
      "phone_number": "89896569885"
    },
    "group": {
      "id": 3,
      "name": "Самбо/Дзюдо"
    },
    "date": "2021-08-03T17:30:00+03:00"
  },
  {
    "id": 1,
    "trainings": [
      {
        "id": 1,
        "client": {
          "id": 14,
          "parents": [
            {
              "id": 1,
              "first_name": "Станислав",
              "last_name": "Плиев",
              "middle_name": "Робертович",
              "phone_number": "+7 (999) 665-46-55"
            },
            {
              "id": 2,
              "first_name": "Маргарита",
              "last_name": "Фокина",
              "middle_name": "Павловна",
              "phone_number": "+7 (654) 646-46-46"
            }
          ],
          "club_card": {
            "id": 2,
            "train_balance": 0,
            "valid_from": null,
            "valid_until": null,
            "personal_discount": 0,
            "level": null,
            "rate": null
          },
          "train_group": null,
          "first_name": "Станислав",
          "middle_name": "Робертович",
          "last_name": "ПлиевS",
          "date_of_birth": "2021-12-21",
          "address": "some address",
          "in_archive": false,
          "phone_number": "",
          "email": "",
          "is_adult": false
        },
        "call": false,
        "is_visited": false,
        "lesson": 1
      },
      {
        "id": 9,
        "client": {
          "id": 20,
          "parents": [
            {
              "id": 5,
              "first_name": "Самвел",
              "last_name": "Чижов",
              "middle_name": "Мамбаивич",
              "phone_number": "+7 (888) 888-88-88"
            }
          ],
          "club_card": {
            "id": 8,
            "train_balance": 0,
            "valid_from": null,
            "valid_until": null,
            "personal_discount": 0,
            "level": null,
            "rate": null
          },
          "train_group": null,
          "first_name": "Анатолий",
          "middle_name": "Чириков",
          "last_name": "Чумаков",
          "date_of_birth": "2018-10-21",
          "address": "ул.Черная д.3",
          "in_archive": false,
          "phone_number": "",
          "email": "",
          "is_adult": false
        },
        "call": false,
        "is_visited": false,
        "lesson": 1
      }
    ],
    "trainer": {
      "id": 1,
      "first_name": "Станислав",
      "middle_name": "Робертович",
      "last_name": "Плиев",
      "phone_number": "89996569885"
    },
    "group": {
      "id": 1,
      "name": "Бразильское Джиу-Джитсу"
    },
    "date": "2021-08-03T19:30:00+03:00"
  },
]
export default data;