import { useState } from "react";
import { useWatch } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "../store";
import { getStocksBySearch } from "../store/actions/StockActions";
interface AutoCompleteFieldProps {
  placeholder: string;
  control: any;
  register: any;
  error: any;
  type?: string;
  autoComplete?: string;
}

const AutoCompleteField = ({
  placeholder,
  control,
  error,
  type,
  register,
}: AutoCompleteFieldProps) => {
  const brandName = useWatch({ control, name: "brand" });
  const [text, setText] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const dispatch = useDispatch();
  const token = useSelector((state: RootStore) => state.auth.token);
  // const stocks = useSelector(
  //   (state: RootStore) => state.stock.stocksData?.stocks
  // );
  const stocks = [
    { brand: "john" },
    { brand: "jommy" },
    { brand: "jude" },
    { brand: "tele" },
    { brand: "stefan" },
    { brand: "stefan" },
    { brand: "stefan" },
    { brand: "suzzy" },
  ];
  const handleSearch = (text) => {
    setText(text);

    let matches = [];
    if (text.length > 1) {
      // dispatch(getStocksBySearch(text, token, 1, 20));

      matches = stocks?.filter((stock) => {
        const regex = new RegExp(`${text}`, "gi");
        return stock.brand.match(regex);
      });
    }
    const brandNames = [...new Set(matches.map((brand) => brand.brand))];
    setSuggestions(brandNames);
  };
  const onSuggestionSelect = (text) => {
    setText(text);
    setSuggestions([]);
  };
  return (
    <>
      <input
        className="p-3 shadow-md w-full rounded-lg my-2"
        placeholder={placeholder}
        onChange={(e) => handleSearch(e.target.value)}
        value={text}
        {...register}
        type={type}
      />
      {suggestions &&
        suggestions.map((suggestion, i) => (
          <div key={i} onClick={() => onSuggestionSelect(suggestion)}>
            {suggestion}
          </div>
        ))}

      <p className="text-sm text-red-600">{error}</p>
    </>
  );
};

export default AutoCompleteField;
