import React, { useState } from "react";
import { FaEyeSlash } from "react-icons/fa";
import { Select, Option } from "@material-tailwind/react";
import { IoMdArrowDropdown } from "react-icons/io";
function DoctorForm() {
  const [showPassword, setShowPassword] = useState(true);
  const [showCPassword, setShowCPassword] = useState(true);
  const [selectedSurgery, setSelectedSurgery] = useState("");


  const surgery = [
    { value: "", label: "Surgery", disabled: true },
    { value: "cancer", label: "Cancer" },
    { value: "genderal", label: "General" },
    { value: "other", label: "Other" },
  ]
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
      name: "position",
      label: "phone",
      placeholder: "Position in Practice",
      width: "half",
      type: "text",
    },
    {
      id: 4,
      name: "surgery",
      label: "Subject",
      placeholder: "GP Surgery",
      width: "half",
      type: "dropdown",
    },
    {
      id: 5,
      name: "NHS-Email",
      label: "Details",
      placeholder: "NHS Email",
      width: "half",
      type: "phone",
    },
    {
      id: 6,
      name: "Phone No",
      label: "Phone No",
      placeholder: "Phone No:",
      width: "half",
      type: "text",
    },
    {
      id: 7,
      name: "Additional-Contact-Information",
      label: "Details",
      placeholder: "Additional Contact Information",
      width: "full",
      type: "textarea",
    },
    {
      id: 8,
      name: "Password",
      label: "Details",
      placeholder: "Password",
      width: "half",
      type: "password",
    },
    {
      id: 9,
      name: "Re-Enter Password",
      label: "Details",
      placeholder: "Re-enter Password",
      width: "half",
      type: "password",
    },
  ]);
  const options = [
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' },
  ];
  const [selectedOption, setSelectedOption] = useState(null);

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
                    <div className="lg:pr-4 pr-0">
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
                      <div className="flex h-10 w-full items-center border-0 ">
                        <Select
                          variant="static"
                          placeholder="Surgery"
                          id="Surgery"
                          arrow={
                            <IoMdArrowDropdown className="flex !pt-0 item-center -translate-y-0  w-7 h-7 " />
                          }
                          value={selectedSurgery}
                          className={`-translate-y-0 bg-transparent flex items-center border-0 focus:border-0 focus-visible:border-none outline-0 w-full !pt-0 ${
                            selectedSurgery ? "text-inherit" : "text-gray-400" 
                          }`}
                          onChange={(e) => {
                            setSelectedSurgery(e);
                          }}
                        >
                          {surgery.map((option) => (
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

export default DoctorForm;