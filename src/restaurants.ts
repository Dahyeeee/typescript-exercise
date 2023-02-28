type Category = '한식' | '중식' | '일식' | '아시안' | '양식' | '기타';

type Menu = {
  name: string;
  price: number;
};

interface Restaurant {
  category: Category;
  name: string;
  distance?: number;
  menu?: Menu;
}

class Restaurants {
  #restaurant: Restaurant[] = [];

  add(restaurant: Restaurant) {}

  filterByCategory(category: Category): Restaurant[] {}
}
