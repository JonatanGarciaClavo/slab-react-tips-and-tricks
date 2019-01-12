var trafficMeister;

(function() {
  var data = [
    {
      id: 1,
      type: 'car',
      brand: 'Bugatti Veyron',
      colors: ['red', 'black'],
      img:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Bugatti_Veyron_16.4_%E2%80%93_Frontansicht_%281%29%2C_5._April_2012%2C_D%C3%BCsseldorf.jpg/520px-Bugatti_Veyron_16.4_%E2%80%93_Frontansicht_%281%29%2C_5._April_2012%2C_D%C3%BCsseldorf.jpg',
    },
    {
      id: 2,
      type: 'airplane',
      brand: 'Boeing 787 Dreamliner',
      colors: ['red', 'white', 'black', 'green'],
      img:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/All_Nippon_Airways_Boeing_787-8_Dreamliner_JA801A_OKJ_in_flight.jpg/600px-All_Nippon_Airways_Boeing_787-8_Dreamliner_JA801A_OKJ_in_flight.jpg',
    },
    {
      id: 3,
      type: 'train',
      brand: 'USRA 0-6-6',
      colors: ['yellow', 'white', 'black'],
      img:
        'https://upload.wikimedia.org/wikipedia/en/thumb/a/a1/UP_4466_Neil916.JPG/600px-UP_4466_Neil916.JPG',
    },
    {
      id: 4,
      type: 'airplane',
      brand: 'Canadair North Star',
      colors: ['red', 'blue', 'yellow', 'green'],
      img:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/BOAC_C-4_Argonaut_Heathrow_1954.jpg/600px-BOAC_C-4_Argonaut_Heathrow_1954.jpg',
    },
    {
      id: 5,
      type: 'airplane',
      brand: 'Airbus A400M Atlas',
      colors: ['red', 'white'],
      img:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/A400M-1969.jpg/600px-A400M-1969.jpg',
    },
    {
      id: 6,
      type: 'airplane',
      brand: 'Bloch MB.131',
      colors: ['yellow', 'blue', 'brown'],
      img:
        'https://upload.wikimedia.org/wikipedia/commons/e/e5/Bloch_MB_131_San_Diego_Air_%26_Space_Museum_3.jpg',
    },
    {
      id: 7,
      type: 'train',
      brand: 'Prairie 2-6-2',
      colors: ['red', 'white', 'grey'],
      img:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/CFR_Steam_locomotive.jpg/600px-CFR_Steam_locomotive.jpg',
    },
    {
      id: 8,
      type: 'train',
      brand: 'EMD GP40',
      colors: ['black', 'grey', 'white'],
      img:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/EMD_GP40_B%26M_339_Wells_Maine.jpg/600px-EMD_GP40_B%26M_339_Wells_Maine.jpg',
    },
    {
      id: 9,
      type: 'train',
      brand: 'Amer 4-4-0',
      colors: ['red', 'black'],
      img:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/440woodcut.jpg/600px-440woodcut.jpg',
    },
    {
      id: 10,
      type: 'car',
      brand: 'Ferrari F40',
      colors: ['red', 'yellow'],
      img:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/F40ferarri20090509.jpg/560px-F40ferarri20090509.jpg',
    },
    {
      id: 11,
      type: 'car',
      brand: 'Lamborghini Huracán',
      colors: ['black', 'white'],
      img:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/2014-03-04_Geneva_Motor_Show_1379.JPG/440px-2014-03-04_Geneva_Motor_Show_1379.JPG',
    },
    {
      id: 12,
      type: 'car',
      brand: 'Porsche Carrera GT',
      colors: ['green', 'yellow'],
      img:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Porsche_Carrera_GT_-_Goodwood_Breakfast_Club_%28July_2008%29.jpg/440px-Porsche_Carrera_GT_-_Goodwood_Breakfast_Club_%28July_2008%29.jpg',
    },
  ];

  trafficMeister = {
    fetchData: fetchData,
  };

  function fetchData(cb) {
    if (!cb) {
      throw 'Callback not defined';
    }
    setTimeout(function() {
      if (Math.floor(Math.random() * 5) === 2) {
        cb('Fetch data error');
      } else {
        cb(null, data);
      }
    }, 1000);
  }

  if (typeof module !== 'undefined') {
    module.exports = trafficMeister;
  }
})();
