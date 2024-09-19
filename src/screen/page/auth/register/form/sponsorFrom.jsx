import React, { Fragment, useState } from "react";
import { FaEyeSlash } from "react-icons/fa";
import RegisterInput from "../../../../defaultInput/RegisterInput";
import SearchableDropdown from "../../../../searchableDropdown/SearchableDropdown";

function SponsorForm() {
  const [showPassword, setShowPassword] = useState(true);
  const [showCPassword, setShowCPassword] = useState(true);

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
      name: "phone",
      label: "phone",
      placeholder: "Company Name",
      width: "half",
      type: "text",
    },
    {
      id: 4,
      name: "subject",
      label: "Subject",
      placeholder: "Job Title",
      width: "half",
      type: "text",
    },
    {
      id: 5,
      name: "detail",
      label: "Details",
      placeholder: "Phone Number",
      width: "half",
      type: "phone",
    },
    {
      id: 6,
      name: "detail",
      label: "Details",
      placeholder: "Company Email",
      width: "half",
      type: "text",
    },
    {
      id: 7,
      name: "detail",
      label: "Details",
      placeholder: "Address",
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
      name: "Confirm-Password",
      label: "Details",
      placeholder: "Re-enter Password",
      width: "half",
      type: "password",
    },
  ]);

  return (
    <Fragment>
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
                    <div>
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
                    <SearchableDropdown
                      options={diseasesList}
                      label="name"
                      id="id"
                      disease={disease}
                      setDisease={setDisease}
                      selectedVal={term}
                      handleChange={(val) => setTerm(val)}
                      currentPage={currentPage}
                      setCurrentPage={setCurrentPage}
                    />
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
    </Fragment>
  );
}

export default SponsorForm;
