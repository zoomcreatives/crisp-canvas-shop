import { Link } from "react-router-dom";

export const CategoryCard = ({
  image,
  label,
  to = "/shop",
}: {
  image: string;
  label: string;
  to?: string;
}) => {
  return (
    <Link to={to} className="block group overflow-hidden rounded-lg">
      <div className="relative aspect-[3/2] overflow-hidden">
        <img
          src={image}
          alt={`${label} category showcase`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        <div className="absolute bottom-3 left-3 rounded-md bg-background/90 px-3 py-1 text-sm font-medium">
          {label}
        </div>
      </div>
    </Link>
  );
};
