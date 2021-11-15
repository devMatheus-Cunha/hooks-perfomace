import { memo } from "react";

type ItemProps = {
  title: string;
};

function ItemComponent({ title }: ItemProps) {
  return <li>{title}</li>;
}

export const Item = memo(ItemComponent);