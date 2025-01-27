import React from "react";
import Text from "./Text";

const MoreinfoListItem = ({ itemText, itemValue }) => {
  return (
    <li className="flex items-start gap-2">
      <Text className="shrink-0">{itemText} :</Text>
      <Text>{itemValue}</Text>
    </li>
  );
};

export default MoreinfoListItem;
