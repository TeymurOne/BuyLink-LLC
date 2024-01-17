import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { usePostOperatorMutation } from '../../features/operator/apiSlice';
import { useFetchBranchAllQuery } from '../../features/branch/apiSlice';
import { IitemBranch } from './CreateForm';

const Form = () => {
  interface Initial {
    name: string;
    pwd: string | number;
    email: string;
    branchID: number | null;
  }

  const InitialData: Initial = {
    name: '',
    pwd: '',
    email: '',
    branchID: null,
  };

  const [formValue, setFormValue] = useState<Initial>(InitialData);
  const { name, email, pwd, branchID } = formValue;
  const { isSuccess, data, isError } = useFetchBranchAllQuery('');

  const [load, setLoad] = useState<boolean>(false);
  const postData = new FormData();
  const navigate = useNavigate();
  const handleBranch = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const branchNum = Number(e.target.value);

    setFormValue({ ...formValue, branchID: branchNum });
  };

  const btnDisabled = !name || !email || !branchID || !pwd;
  const [postOperator] = usePostOperatorMutation();

  let content;

  if (isSuccess) {
    content = data.data?.map((item: IitemBranch, index: number) => {
      console.log(item, 'asknkn');

      return (
        <option key={index} value={item.id}>
          {item.name}
        </option>
      );
    });
  } else if (isError) {
    console.error('Error fetching data', 'Products Types');
  }

  const postSubmit = async (e: React.FormEvent<HTMLButtonElement>) => {
    setLoad(true);
    e.preventDefault();

    postData.append('branch_id', branchID!.toString());
    postData.append('name', name);
    postData.append('email', email);

    postData.append('password', pwd.toString());

    try {
      if (postData) {
        await postOperator(postData)
          .unwrap()
          .then((response) => {
            if (response) {
              console.log(response, 'response');

              navigate('/admin/servicesCreate');
            }
          });
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoad(false);
    }
  };
  return (
    <>
      <form>
        <div className="space-y-12">
          <div className=" pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Personal Information
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Use a permanent address where you can receive mail.
            </p>

            <div className="mt-10 grid grid-cols-6 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="lg:col-span-3 col-span-6 ">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium leading-6 "
                >
                  Name
                </label>
                <div className="mt-2">
                  <input
                    onChange={(e) =>
                      setFormValue({ ...formValue, name: e.target.value })
                    }
                    value={name}
                    placeholder="Name"
                    id="text"
                    name="text"
                    type="text"
                    className="block  pl-4 w-full rounded-md border-0 py-1.5  shadow-sm ring-1  sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="lg:col-span-3 col-span-6 ">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 "
                >
                  Email
                </label>
                <div className="mt-2">
                  <input
                    onChange={(e) =>
                      setFormValue({ ...formValue, email: e.target.value })
                    }
                    value={email}
                    placeholder="Email"
                    id="email"
                    name="email"
                    type="email"
                    className="block  pl-4 w-full rounded-md border-0 py-1.5  shadow-sm ring-1  sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="lg:col-span-3 col-span-6 ">
                <label
                  htmlFor="address"
                  className="block text-sm font-medium leading-6 "
                >
                  Password
                </label>
                <div className="mt-2">
                  <input
                    onChange={(e) =>
                      setFormValue({ ...formValue, pwd: e.target.value })
                    }
                    value={pwd}
                    placeholder="password"
                    id="password"
                    name="password"
                    type="password"
                    className="block  pl-4 w-full rounded-md border-0 py-1.5  shadow-sm ring-1  sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-2 col-span-6">
                <label
                  htmlFor="branch"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Branch
                </label>
                <div className="mt-2">
                  <select
                    id="branch"
                    onChange={handleBranch}
                    defaultValue="default"
                    name="branch"
                    autoComplete="branch"
                    className="block w-full rounded-md border-0 py-[11px]  shadow-sm ring-1 ring-inset    sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    <option disabled value="default">
                      Branch Secin
                    </option>
                    {content}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            onClick={() => history.back()}
            type="button"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Cancel
          </button>
          {load ? (
            <div
              className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
              role="status"
            >
              <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                Loading...
              </span>
            </div>
          ) : (
            <>
              <button
                onClick={postSubmit}
                disabled={btnDisabled}
                type="submit"
                className={`rounded-md ${
                  btnDisabled ? 'opacity-65' : 'opacity-100'
                }  bg-[#4f46e5] px-3 py-2 text-sm font-semibold text-white
                 shadow-sm hover:bg-indigo-500 focus-visible:outline 
                 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
              >
                Save
              </button>
            </>
          )}
        </div>
      </form>
    </>
  );
};

export default Form;
