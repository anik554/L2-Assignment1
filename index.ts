type FormatStringReturn = string;

function formatString(input: string, toUpper?: boolean): FormatStringReturn {
  if (input && toUpper) {
    return input.toUpperCase();
  } else if (input && toUpper === false) {
    return input.toLowerCase();
  } else if (input) {
    return input.toUpperCase();
  } else {
    return "";
  }
}

console.log(formatString("My Name is Anik", true));

const eidMovies = [
  { title: "Borbad", rating: 4.8 },
  { title: "Dhagi", rating: 4.5 },
  { title: "Chokor", rating: 3.5 },
  { title: "Jongli", rating: 4.2 },
  { title: "Alen Shopon", rating: 3.9 },
];

type EidMoviesType = {
  title: string;
  rating: number;
};
type RatingType = Omit<EidMoviesType, "title">;

function filterByRating(eidMovies: EidMoviesType[]): EidMoviesType[] {
  const filteredMovie = eidMovies.filter(
    (movie: RatingType) => movie.rating >= 4
  );
  return filteredMovie;
}

console.log(filterByRating(eidMovies));

const fruits = [
  "Apple",
  "Banana",
  "Orange",
  "Grapes",
  "Watermelon",
  "Strawberry",
];
const fruitPrice = [22, 66, 77, 44, 33, 666, 77, 33];
const studentName = ["Anik", "Abir", "Jhongkar", "Karim"];
const studentRoll = [1, 3, 5, 7, 20];

type ConcatArrayType<T, X> = [T[], X[]];

function concatenateArrays<T, X>(
  params1: T[],
  params2: X[]
): (T | X)[] | string {
  if (Array.isArray(params1) && Array.isArray(params2)) {
    if (typeof params1[0] !== typeof params2[0]) {
      return "Please input same type array";
    } else {
      return [...params1, ...params2];
    }
  } else {
    return "Please correction input format array only";
  }
}

console.log(concatenateArrays(studentRoll, fruitPrice));

//--------------------------------------------------------------------

class Vehicle {
  private make: string;
  private year: number;
  constructor(make: string, year: number) {
    this.make = make;
    this.year = year;
  }

  public getInfo() {
    const vehicleInfo = `Make: ${this.make}, Year: ${this.year} `;
    return vehicleInfo;
  }
}

class Car extends Vehicle {
  private model: string;
  constructor(make: string, year: number, model: string) {
    super(make, year);
    this.model = model;
  }
  public getModel() {
    const carModel = `Model: ${this.model}`;
    return carModel;
  }
}

const myCar = new Car("Toyota", 2020, "Corolla");
console.log(myCar.getInfo());
console.log(myCar.getModel());

//--------------------------------------------------------------------

type PorcessValueType<T> = T;
function processValue<T>(value: T): number {
  const isNumber: number = 2;
  if (typeof value === "string") {
    return value.length;
  } else {
    return Number(value) * isNumber;
  }
}

console.log(processValue("Bangladesh"));
console.log(processValue(5000));

//--------------------------------------------------------------------
const products = [
  { name: "Pen", price: 10 },
  { name: "Notebook", price: 25 },
  { name: "Bag", price: 50 },
  { name: "Laptop", price: 150000 },
];

interface Product {
  name: string;
  price: number;
}

function getMostExpensiveProduct(
  products?: Product[] | null
): Product | undefined | null {
  if (Array.isArray(products) && products.length > 0) {
    const findHightestPrice: number = Math.max(
      ...products.map((item) => item.price)
    );
    const getResult: Product | undefined = products.find(
      (product) => product.price === findHightestPrice
    );
    return getResult;
  } else {
    return null;
  }
}

console.log(getMostExpensiveProduct(products));

//--------------------------------------------------------------------

enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

const getDayType = (day: Day): string => {
  if (day === 5 || day === 6) {
    return "Weekend";
  } else {
    return "Weekday";
  }
};

console.log(getDayType(Day.Monday));

//--------------------------------------------------------------------

const squareAsync = async (n: number) => {
  try {
    if (n > 0) {
      const result = await new Promise((resolve) => {
        setTimeout(() => {
          resolve(n * n);
        }, 2000);
      });
      return result;
    } else {
      return "Negative number not allowed";
    }
  } catch (err) {
    console.error(err);
  }
};

// console.log(squareAsync(4).then(console.log));
console.log(squareAsync(-3));
