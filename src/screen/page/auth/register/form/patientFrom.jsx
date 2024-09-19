import React, { useState } from "react";
import { FaEyeSlash } from "react-icons/fa";
import RegisterInput from "../../../../defaultInput/RegisterInput";
import { IoMdArrowDropdown } from "react-icons/io";
import { Select, Option } from "@material-tailwind/react";

function PaitentForm() {
  const [showPassword, setShowPassword] = useState(true);
  const [showCPassword, setShowCPassword] = useState(true);
  const [dropdown, setDropdown] = useState();

  const [selectedGender, setSelectedGender] = useState("");
  const gender = [
    { value: "", label: "Gender", disabled: true },
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
    { value: "other", label: "Other" },
  ];
  const [data, setdata] = useState([
    {
      id: 1,
      name: "fname",
      label: "First Name",
      placeholder: "Full Name",
      width: "half",
      type: "text",
    },
    {
      id: 2,
      name: "lname",
      label: "Email Address",
      placeholder: "Last Name",
      width: "half",
      type: "text",
    },
    {
      id: 3,
      name: "age",
      label: "age",
      placeholder: "Age",
      width: "half",
      type: "text",
    },
    {
      id: 4,
      name: "subject",
      label: "Subject",
      placeholder: "Gender",
      width: "half",
      type: "dropdown",
    },
    {
      id: 5,
      name: "Ethnicity",
      label: "Ethnicity",
      placeholder: "Ethnicity",
      width: "half",
      type: "Ethnicity",
    },
    {
      id: 6,
      name: "Phone",
      label: "Details",
      placeholder: "Phone No:",
      width: "half",
      type: "text",
    },
    {
      id: 7,
      name: "email",
      label: "email",
      placeholder: "Email",
      width: "full",
      type: "textarea",
    },
    {
      id: 8,
      name: "address",
      label: "Details",
      placeholder: "Address",
      width: "full",
      type: "textarea",
    },
    {
      id: 9,
      name: "Password",
      label: "Details",
      placeholder: "Password",
      width: "half",
      type: "password",
    },
    {
      id: 10,
      name: "Confirm-Password",
      label: "Details",
      placeholder: "Re-enter Password",
      width: "half",
      type: "password",
    },
  ]);

  return (
    <div>
      <form>
        <div className="">
          {data.map((item) => (
            <div key={item.id} className="">
              {item.width === "half" ? (
                item.type === "password" ? (
                  <div
                    className="flex m-2 float-left w-[calc(50%-16px)] text-[14px] items-center justify-between flex-row border-b h-12
                !focus:outline-0 focus:ring-0 outline-none rounded-none border-[#3a3c3c]
                "
                  >
                    <div className="w-full">
                      <RegisterInput
                        name={item.name}
                        placeholder={item.placeholder}
                        type={
                          item.name === "Password"
                            ? showPassword
                              ? "password"
                              : "text"
                            : showCPassword
                            ? "password"
                            : "text"
                        }
                        className="border-none w-full"
                      />
                    </div>
                    <div className="pr-4">
                      <FaEyeSlash
                        onClick={() => {
                          if (item.name === "Password") {
                            setShowPassword(!showPassword);
                          } else {
                            setShowCPassword(!showCPassword);
                          }
                        }}
                      />
                    </div>
                  </div>
                ) : item.type === "dropdown" ? (
                  <div className="flex p-2 float-left flex-col w-6/12 text-[14px] ">
                    <div className="flex items-center justify-between border-b border-black">
                      <div className="flex h-10 w-full items-center border-0">
                        <Select
                          variant="static"
                          placeholder="Gender"
                          id="gender"
                          arrow={
                            <IoMdArrowDropdown className="flex !pt-0 item-center -translate-y-0 w-7 h-7" />
                          }
                          value={selectedGender}
                          className={`-translate-y-0 bg-transparent flex items-center border-0 focus-visible:border-none outline-0 w-full  !pt-0 ${
                            selectedGender ? "text-inherit" : "text-gray-400"
                          }`}
                          onChange={(e) => {
                            setSelectedGender(e);
                          }}
                        >
                          {gender.map((option) => (
                            <Option
                              key={option.value}
                              value={option.value}
                              disabled={option.disabled}
                            >
                              {option.label}
                            </Option>
                          ))}
                        </Select>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="flex p-2 float-left flex-col w-6/12 text-[14px] ">
                    <RegisterInput
                      name={item.name}
                      placeholder={item.placeholder}
                      type={item.type}
                      className="w-full"
                    />
                  </div>
                )
              ) : (
                <div className="p-2 flex flex-col w-full flex-wrap text-[14px]">
                  <RegisterInput
                    name={item.name}
                    placeholder={item.placeholder}
                    type={item.type}
                    className="w-full"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </form>
      <p className="italic pl-2 text-black font-light text-sm">
        Use 8 or more character with a mix of letters, number symbols.
      </p>
    </div>
  );
}

export default PaitentForm;
