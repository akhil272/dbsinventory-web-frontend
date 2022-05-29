import { Fragment, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { CheckIcon, PlusIcon, SelectorIcon } from "@heroicons/react/solid";
import { Control, Controller } from "react-hook-form";
import { toast } from "react-toastify";
type dataType = {
  id: number;
  name: string;
};

type AutoCompleteProps = {
  control: Control<any>;
  name: string;
  data: dataType[];
  create: any;
  onSuccess?: () => void;
  placeholder: string;
};

export default function AutoComplete({
  control,
  placeholder,
  name,
  data,
  create,
  onSuccess,
}: AutoCompleteProps) {
  const [query, setQuery] = useState("");

  const filtereddata =
    query === ""
      ? data
      : data.filter((item) =>
          item.name
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  const addItem = async () => {
    const response = await create({ name: query });
    if (response.success) {
      toast.success(`Successfully added ${name} to system.`);
      onSuccess();
    }
    if (!response.success) {
      toast.error(`Failed to add ${name} to system. ${response.message}`);
    }
  };
  return (
    <div>
      <Controller
        defaultValue=""
        control={control}
        name={name}
        render={({ field: { onChange, value } }) => (
          <Combobox value={value} onChange={onChange}>
            <div className="relative">
              <div className="relative w-full cursor-default p-1 rounded-lg bg-white text-left  focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
                <Combobox.Input
                  className="w-full border-none py-2 pl-3 pr-10 text-md leading-5 text-gray-900 focus:ring-0"
                  displayValue={(item: dataType) => item?.name}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder={placeholder}
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
                  {filtereddata?.length === 0 && query !== "" ? (
                    <div className="relative flex items-center cursor-default select-none py-2 px-4 text-gray-700">
                      <div>{query}. Not found.</div>
                      <PlusIcon
                        className="h-5 w-5 absolute right-2 text-gray-400"
                        aria-hidden="true"
                        onClick={() => addItem()}
                      />
                    </div>
                  ) : (
                    filtereddata?.map((item, i) => (
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
    </div>
  );
}
