import { memo } from "react";

const SearchInput = ({ setText }) => {
  const handleChange = (e) => {
    setText(e.target.value);
  };
  return <input onChange={handleChange} type="text" />;
};

export default memo(SearchInput);
