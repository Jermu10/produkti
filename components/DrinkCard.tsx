import { Card, CardHeader, CardBody, Image, Divider } from "@nextui-org/react";
import { formatCardIngredients } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const DrinkCard: React.FC<DrinkItemProps> = ({ drink }) => {
  const isDrinkki = drink.category === "drinkki";
  const borderColor = isDrinkki ? "border-customOrange" : "border-customGreen";
  const textColor = isDrinkki ? "text-customOrange" : "text-customGreen";
  // const href = isDrinkki
  //   ? `/drinkit/${drink.slug}`
  //   : `/mocktailit/${drink.slug}`;

  const pathname = usePathname();

  return (
    <Card className={`items-center border-5 ${borderColor}`}>
      <Link href={`${pathname}/${drink.slug}`}>
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <p className={`font-bold text-3xl ${textColor}`}>{drink.name}</p>
          <Divider />
          <p className={`text-xl ${textColor}`}>
            {formatCardIngredients(drink.ingredients)}
          </p>
        </CardHeader>
        <CardBody className="overflow-visible py-2">
          <Image
            alt="Card background"
            className="object-cover rounded-xl"
            src="https://nextui.org/images/hero-card-complete.jpeg"
            width={270}
          />
        </CardBody>
      </Link>
    </Card>
  );
};

export default DrinkCard;
