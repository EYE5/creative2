export const data = {
  response: [
    {
      type: "flat",
      id: 1,
      attributes: {
        title: "3-х комнатная на Минской",
        rooms: 3,
        address: {
          city: "Tyumen",
          street: "Минская",
          house: "3a",
          room: "123",
        },
        area: 134,
        unit: "квм",
      },
      image: "./images/1.jpg",
      relationships: {
        type: "agent",
        id: 2,
        attributes: {
          first_name: "Василий",
          last_name: "Дроздов",
          middle_name: "Михайлович",
        },
      },
    },
    {
      type: "flat",
      id: 2,
      attributes: {
        title: "Квартира на Барабаинской",
        rooms: 2,
        address: {
          city: "Tyumen",
          street: "Барабинская",
          house: "12",
          room: "45",
        },
        area: 34,
        unit: "квм",
      },
      image: "./images/8.jpg",
      relationships: {
        type: "agent",
        id: 10,
        attributes: {
          first_name: "Михаил",
          last_name: "Иванов",
          middle_name: "Демидович",
        },
      },
    },
    {
      type: "flat",
      id: 3,
      attributes: {
        title: "Квартира Ленина",
        rooms: 4,
        address: {
          city: "Tyumen",
          street: "Ленина",
          house: "134",
          room: "24",
        },
        area: 134,
        unit: "квм",
      },
      image: "./images/3.jpg",
      relationships: {
        type: "agent",
        id: 44,
        attributes: {
          first_name: "Степан",
          last_name: "Карачаев",
          middle_name: "Иванович",
        },
      },
    },
    {
      type: "flat",
      id: 4,
      attributes: {
        title: "Квартира Красный переулок",
        rooms: 5,
        address: {
          city: "Tyumen",
          street: "Красный переулок",
          house: "22",
          room: "12",
        },
        area: 150,
        unit: "квм",
      },
      image: "./images/4.jpg",
      relationships: {
        type: "agent",
        id: 46,
        attributes: {
          first_name: "Василий",
          last_name: "Лебовский",
          middle_name: "Иванович",
        },
      },
    },
    {
      type: "flat",
      id: 5,
      attributes: {
        title: "1 комнатная на Водников",
        rooms: 1,
        address: {
          city: "Tyumen",
          street: "Водников",
          house: "12",
          room: "16",
        },
        area: 33,
        unit: "квм",
      },
      image: "./images/5.jpg",
      relationships: {
        type: "agent",
        id: 44,
        attributes: {
          first_name: "Андрей",
          last_name: "Комаров",
          middle_name: "Андреевич",
        },
      },
    },
    {
      type: "flat",
      id: 6,
      attributes: {
        title: "Квартира Сургутская",
        rooms: 4,
        address: {
          city: "Tyumen",
          street: "Сургутская",
          house: "11",
          room: "22",
        },
        area: 150,
        unit: "квм",
      },
      image: "./images/6.jpg",
      relationships: {
        type: "agent",
        id: 44,
        attributes: {
          first_name: "Елена",
          last_name: "Порошина",
          middle_name: "Иванова",
        },
      },
    },
  ],
};
