import { memo } from "react";

type ItemProps = {
  title: string;
  onAddToWishList: (item: string) => void;
};

function ItemComponent({ title, onAddToWishList }: ItemProps) {
  return (
    <li>
      {title}{" "}
      <button type="button" onClick={() => onAddToWishList(title)}>
        Add wish to list
      </button>{" "}
    </li>
  );
}

export const Item = memo(ItemComponent);
