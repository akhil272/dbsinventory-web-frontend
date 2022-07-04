import { Fragment, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";
import { Control, Controller } from "react-hook-form";
type dataType = {
  id: number;
  name: string;
};

type SearchBoxProps = {
  control: Control<any>;
  name: string;
  data: dataType[];
  placeholder: string;
  error?: string;
};

export default function SearchBox({
  control,
  placeholder,
  name,
  data,
  error,
}: SearchBoxProps) {
  const [query, setQuery] = useState("");
  const [dataState, setDataState] = useState(data);
  const addDataToExistingState = () => {
    const newData = { id: dataState.length + 1, name: query };
    setDataState([...dataState, newData]);
  };
  const filterData =
    query === ""
      ? dataState
      : dataState.filter((item) =>
          item.name
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  return (
    <div>
      <Controller
        defaultValue=""
        control={control}
        name={name}
        render={({ field: { onChange, value } }) => (
          <Combobox value={value} onChange={onChange}>
            <div className="relative">
              <div className="relative w-full cursor-default p-1 rounded-lg bg-white text-left  focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 ">
                <Combobox.Input
                  className=" p-2 placeholder-slate-400 text-base  focus:outline-none  focus:ring-slate-400 block w-full rounded-md  focus:ring-1"
                  displayValue={(item: dataType) => item?.name}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder={placeholder}
                  type="text"
                />
                <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                  <SelectorIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </Combobox.Button>
              </div>
              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
                afterLeave={() => setQuery("")}
              >
                <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {filterData?.length === 0 && query !== "" ? (
                    <div
                      onClick={addDataToExistingState}
                      className="relative flex items-center cursor-default select-none py-2 px-4 text-gray-700"
                    >
                      <div>Am looking for "{query}"</div>
                    </div>
                  ) : (
                    filterData?.map((item, i) => (
                      <Combobox.Option
                        key={i}
                        className={({ active }) =>
                          `relative cursor-default select-none py-2 pl-10 pr-4 ${
                            active ? "bg-teal-600 text-white" : "text-gray-900"
                          }`
                        }
                        value={item}
                      >
                        {({ selected, active }) => (
                          <>
                            <span
                              className={`block truncate ${
                                selected ? "font-medium" : "font-normal"
                              }`}
                            >
                              {item.name}
                            </span>
                            {selected ? (
                              <span
                                className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                  active ? "text-white" : "text-teal-600"
                                }`}
                              >
                                <CheckIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              </span>
                            ) : null}
                          </>
                        )}
                      </Combobox.Option>
                    ))
                  )}
                </Combobox.Options>
              </Transition>
            </div>
          </Combobox>
        )}
      />
      <p className="text-sm text-red-600 px-2">{error}</p>
    </div>
  );
}
